# 🚀 Amplifica Marketing — Site Institucional & Blog

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite3-003B57?logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

Site institucional premium da **Amplifica Marketing**, agência de marketing digital fundada por **Werik Oliveira** ([@recwerikoliveira](https://instagram.com/recwerikoliveira)).

Inclui landing page com vídeos, galeria 3D de portfólio audiovisual, blog independente com REST API protegida por API Key e banco de dados SQLite3.

---

## 📸 Visão Geral

- 🎬 **Hero Cinematográfico** com vídeo de fundo e CTAs diretos para WhatsApp
- ⚡ **Carrossel Infinito** de tecnologias e plataformas dominadas
- 🎯 **Grid Bento 3x3** de serviços com efeito hover-reveal interativo
- 🎥 **Galeria 3D Coverflow** com 67 vídeos reais do portfólio
- 👤 **Sobre a Empresa & Fundador** separados com design editorial
- 📚 **Blog Independente** com leitura em página inteira
- 🎶 **Música Lofi de Fundo** a 20% de volume com pausa automática para vídeos
- 💬 **Integração WhatsApp** em múltiplos pontos do site

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React 19 + TypeScript + Vite 8 |
| **Estilização** | Tailwind CSS v4 + Glassmorphism + CSS Custom Properties |
| **Backend** | Express.js (Node.js) |
| **Banco de Dados** | SQLite3 (better-sqlite3) |
| **Segurança** | Helmet + Rate Limiting + API Key + Prepared Statements |
| **Componentes** | BorderGlow (React Bits), Lucide Icons |

---

## 📁 Estrutura do Projeto

```
amplifica-marketing/
├── public/                        # Assets estáticos
│   ├── founder.jpg                # Foto do fundador
│   ├── hero-video.mp4             # Vídeo de fundo do Hero (gitignored)
│   ├── lofi-chill.mp3             # Música de fundo (gitignored)
│   ├── logo-new.png               # Logo principal
│   ├── logo.png                   # Logo alternativa
│   └── portfolio-videos/          # Vídeos do portfólio (gitignored)
├── server/                        # Backend REST API
│   ├── server.js                  # Servidor Express + SQLite3
│   └── data/                      # Diretório do banco de dados (gitignored)
│       └── blog.db                # Arquivo SQLite
├── src/                           # Código-fonte frontend
│   ├── App.tsx                    # App principal com roteamento
│   ├── main.tsx                   # Entry point React
│   ├── index.css                  # Design system global
│   ├── api/
│   │   └── blogApi.ts             # Cliente REST API com fallback offline
│   ├── components/
│   │   ├── About.tsx              # Seções Empresa & Fundador
│   │   ├── BackgroundAudioPlayer.tsx  # Player de música Lofi
│   │   ├── BorderGlow.tsx         # Componente de borda luminosa
│   │   ├── BorderGlow.css         # Estilos do BorderGlow
│   │   ├── ContactFooter.tsx      # CTA WhatsApp & rodapé
│   │   ├── Hero.tsx               # Hero com vídeo de fundo
│   │   ├── Navbar.tsx             # Barra de navegação
│   │   ├── ServicesBento.tsx      # Grid Bento de serviços
│   │   ├── TechStackMarquee.tsx   # Marquee infinito de tecnologias
│   │   ├── Video3DCoverflow.tsx   # Galeria 3D de vídeos
│   │   └── WhatsAppButton.tsx     # Botão flutuante WhatsApp
│   ├── data/
│   │   └── blogArticles.ts        # Tipagem dos artigos
│   └── pages/
│       └── BlogPage.tsx           # Página do blog independente
├── .env.example                   # Template de variáveis de ambiente
├── .gitignore                     # Regras de ignore do Git
├── API_DOCUMENTATION.md           # Documentação completa da REST API
├── index.html                     # Entry point HTML
├── package.json                   # Dependências & scripts
├── tsconfig.json                  # Configuração TypeScript
└── vite.config.ts                 # Configuração Vite
```

---

## ⚡ Instalação & Execução

### Pré-requisitos

- **Node.js** v18+ (recomendado v24)
- **npm** v9+

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/recwerikoliveira/amplifica-marketing.git
cd amplifica-marketing

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env e defina sua API_KEY

# 4. Inicie o servidor REST API (Terminal 1)
node server/server.js

# 5. Inicie o servidor de desenvolvimento (Terminal 2)
npm run dev

# 6. Acesse no navegador
# Site Principal: http://localhost:5173/
# Blog:           http://localhost:5173/#blog
# REST API:       http://localhost:3001/api/posts
```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📡 REST API — Endpoints do Blog

**Base URL**: `http://localhost:3001/api/posts`

| Método | Endpoint | Autenticação | Descrição |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/posts` | Pública | Lista todos os artigos |
| `GET` | `/api/posts/:id` | Pública | Retorna artigo por ID |
| `POST` | `/api/posts` | 🔑 API Key | Cria novo artigo |
| `PUT` | `/api/posts/:id` | 🔑 API Key | Atualiza artigo |
| `DELETE` | `/api/posts/:id` | 🔑 API Key | Exclui artigo |

### Autenticação

Envie a API Key via um dos métodos:

```bash
# Header x-api-key
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: sua_chave_secreta_aqui" \
  -d '{"title": "Meu Artigo", "content": "<p>Conteúdo</p>"}'

# Header Authorization Bearer
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sua_chave_secreta_aqui" \
  -d '{"title": "Meu Artigo", "content": "<p>Conteúdo</p>"}'

# Query parameter
curl -X POST "http://localhost:3001/api/posts?api_key=sua_chave_secreta_aqui" \
  -H "Content-Type: application/json" \
  -d '{"title": "Meu Artigo", "content": "<p>Conteúdo</p>"}'
```

> 📄 Documentação completa com exemplos em Python e JavaScript: [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

---

## 🔒 Variáveis de Ambiente

Copie `.env.example` para `.env` e configure:

| Variável | Descrição | Padrão |
| :--- | :--- | :--- |
| `PORT` | Porta do servidor REST API | `3001` |
| `API_KEY` | Chave secreta para endpoints de escrita | — |

> ⚠️ **NUNCA** commite o arquivo `.env` no repositório. Ele está no `.gitignore`.

---

## 🛡️ Segurança Aplicada

- **Helmet** — Headers HTTP de segurança (CSP, HSTS, X-Frame-Options)
- **Rate Limiting** — Máximo 100 requisições por IP a cada 15 minutos
- **API Key** — Autenticação obrigatória em endpoints de escrita (POST, PUT, DELETE)
- **Prepared Statements** — Prevenção total contra SQL Injection no SQLite
- **Sanitização de Input** — Todas as entradas são sanitizadas no servidor
- **Erros Genéricos** — Nenhum stack trace ou detalhe interno é exposto ao cliente
- **WAL Mode** — SQLite em modo Write-Ahead Logging para acesso concorrente seguro
- **Body Limit** — Requisições limitadas a 5MB para prevenir ataques de exaustão de memória

---

## 🎵 Assets de Mídia

Alguns arquivos de mídia são grandes demais para o Git e estão no `.gitignore`:

| Arquivo | Tamanho | Descrição |
| :--- | :--- | :--- |
| `public/hero-video.mp4` | ~14MB | Vídeo de fundo do Hero |
| `public/lofi-chill.mp3` | ~147MB | Música de fundo Lofi Hip Hop |
| `public/portfolio-videos/` | ~2GB+ | 67 vídeos do portfólio |

Esses arquivos devem ser baixados separadamente ou hospedados em CDN/S3.

---

## 🚀 Deploy

### Frontend (Vercel / Netlify)

```bash
npm run build
# Faça deploy da pasta dist/
```

### Backend API (Railway / Render / VPS)

```bash
# Defina as variáveis de ambiente PORT e API_KEY no painel do serviço
node server/server.js
```

---

## 📞 Contato

| Canal | Link |
| :--- | :--- |
| **WhatsApp** | [+55 (17) 99195-1381](https://wa.me/5517991951381) |
| **Instagram (Agência)** | [@amplificamarketing](https://instagram.com/amplificamarketing) |
| **Instagram (Fundador)** | [@recwerikoliveira](https://instagram.com/recwerikoliveira) |

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

<p align="center">
  Desenvolvido com 🧡 por <strong>Werik Oliveira</strong> — Amplifica Marketing © 2026
</p>
