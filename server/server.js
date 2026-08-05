const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Database = require('better-sqlite3');

// Load environment variables from .env file
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...valParts] = trimmed.split('=');
      process.env[key.trim()] = valParts.join('=').trim();
    }
  });
}

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY || 'amplifica_sec_key_991951381_2026';

// 1. Security Headers (Helmet) & Disable X-Powered-By
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.disable('x-powered-by');

// 2. Strict CORS Configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));

// 3. IP Rate Limiting (Anti-DDoS / Anti-Brute Force)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas requisições deste IP. Tente novamente mais tarde.' }
});
app.use('/api/', apiLimiter);

// 4. Request Body Limits
app.use(express.json({ limit: '5mb' }));

// 5. API Key Verification Middleware (Mandatory for Write/Mutation Requests: POST, PUT, DELETE)
const verifyApiKey = (req, res, next) => {
  const reqApiKey =
    req.headers['x-api-key'] ||
    (req.headers['authorization'] ? req.headers['authorization'].replace('Bearer ', '') : null) ||
    req.query.api_key;

  if (!reqApiKey || reqApiKey !== API_KEY) {
    return res.status(401).json({ error: 'Acesso negado: API Key inválida ou ausente' });
  }
  next();
};

// Ensure data directory exists
const DB_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Initialize SQLite Database
const DB_PATH = path.join(DB_DIR, 'blog.db');
const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

// Create posts table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    category TEXT DEFAULT 'Geral',
    readTime TEXT DEFAULT '5 min de leitura',
    date TEXT,
    author TEXT DEFAULT 'Werik Oliveira',
    source TEXT DEFAULT 'Amplifica Blog',
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Input Sanitization Helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim();
};

// ===================================================
// API ENDPOINTS (PROTECTED WITH API_KEY FOR WRITES)
// ===================================================

// GET /api/posts - Public read list
app.get('/api/posts', (req, res) => {
  try {
    const stmt = db.prepare('SELECT id, slug, title, excerpt, content, category, readTime, date, author, source, image FROM posts ORDER BY id DESC');
    const posts = stmt.all();
    res.json(posts);
  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// GET /api/posts/:id - Public read single post
app.get('/api/posts/:id', (req, res) => {
  try {
    const stmt = db.prepare('SELECT id, slug, title, excerpt, content, category, readTime, date, author, source, image FROM posts WHERE id = ?');
    const post = stmt.get(req.params.id);
    if (!post) return res.status(404).json({ error: 'Artigo não encontrado' });
    res.json(post);
  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

// POST /api/posts - Create article (PROTECTED WITH API KEY)
app.post('/api/posts', verifyApiKey, (req, res) => {
  try {
    const title = sanitizeInput(req.body.title);
    const content = sanitizeInput(req.body.content);
    const excerpt = sanitizeInput(req.body.excerpt);
    const category = sanitizeInput(req.body.category) || 'Geral';
    const author = sanitizeInput(req.body.author) || 'Werik Oliveira';
    const image = sanitizeInput(req.body.image) || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
    const readTime = sanitizeInput(req.body.readTime) || '5 min de leitura';

    if (!title || title.length < 3) {
      return res.status(400).json({ error: 'Título é obrigatório (mínimo 3 caracteres)' });
    }
    if (!content || content.length < 10) {
      return res.status(400).json({ error: 'Conteúdo é obrigatório (mínimo 10 caracteres)' });
    }

    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '-') + '-' + Date.now();

    const formattedDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const stmt = db.prepare(`
      INSERT INTO posts (slug, title, excerpt, content, category, readTime, date, author, source, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      slug,
      title,
      excerpt,
      content,
      category,
      readTime,
      formattedDate,
      author,
      'Amplifica Blog',
      image
    );

    const newPost = db.prepare('SELECT id, slug, title, excerpt, content, category, readTime, date, author, source, image FROM posts WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newPost);
  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'Erro interno ao salvar no servidor' });
  }
});

// PUT /api/posts/:id - Update article (PROTECTED WITH API KEY)
app.put('/api/posts/:id', verifyApiKey, (req, res) => {
  try {
    const postId = req.params.id;
    const existing = db.prepare('SELECT * FROM posts WHERE id = ?').get(postId);
    if (!existing) return res.status(404).json({ error: 'Artigo não encontrado' });

    const title = req.body.title !== undefined ? sanitizeInput(req.body.title) : existing.title;
    const excerpt = req.body.excerpt !== undefined ? sanitizeInput(req.body.excerpt) : existing.excerpt;
    const content = req.body.content !== undefined ? sanitizeInput(req.body.content) : existing.content;
    const category = req.body.category !== undefined ? sanitizeInput(req.body.category) : existing.category;
    const author = req.body.author !== undefined ? sanitizeInput(req.body.author) : existing.author;
    const image = req.body.image !== undefined ? sanitizeInput(req.body.image) : existing.image;
    const readTime = req.body.readTime !== undefined ? sanitizeInput(req.body.readTime) : existing.readTime;

    const stmt = db.prepare(`
      UPDATE posts
      SET title = ?, excerpt = ?, content = ?, category = ?, author = ?, image = ?, readTime = ?
      WHERE id = ?
    `);

    stmt.run(title, excerpt, content, category, author, image, readTime, postId);

    const updatedPost = db.prepare('SELECT id, slug, title, excerpt, content, category, readTime, date, author, source, image FROM posts WHERE id = ?').get(postId);
    res.json(updatedPost);
  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'Erro interno ao atualizar no servidor' });
  }
});

// DELETE /api/posts/:id - Delete article (PROTECTED WITH API KEY)
app.delete('/api/posts/:id', verifyApiKey, (req, res) => {
  try {
    const stmt = db.prepare('DELETE FROM posts WHERE id = ?');
    const result = stmt.run(req.params.id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Artigo não encontrado' });
    }

    res.json({ message: 'Artigo excluído com sucesso' });
  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'Erro interno ao excluir no servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 REST API rodando na porta ${PORT} (API_KEY protegida)`);
});
