import { BlogArticle } from '../data/blogArticles';

const API_BASE_URL = 'http://localhost:3001/api/posts';
const LOCAL_STORAGE_KEY = 'amplifica_blog_posts';

const getLocalPosts = (): BlogArticle[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveLocalPosts = (posts: BlogArticle[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  } catch {}
};

// GET /api/posts - Fetch all articles
export async function fetchBlogPosts(): Promise<BlogArticle[]> {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('API server error');
    const posts = await response.json();
    saveLocalPosts(posts);
    return posts;
  } catch {
    // Fallback to local persistence
    return getLocalPosts();
  }
}

// POST /api/posts - Create article
export async function createBlogPost(articleData: Partial<BlogArticle>): Promise<BlogArticle> {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articleData),
    });
    if (!response.ok) throw new Error('Failed to create article on API');
    return await response.json();
  } catch {
    // Local fallback
    const posts = getLocalPosts();
    const newPost: BlogArticle = {
      id: Date.now(),
      slug: (articleData.title || 'artigo').toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: articleData.title || 'Sem título',
      excerpt: articleData.excerpt || '',
      content: articleData.content || '',
      category: articleData.category || 'Geral',
      readTime: articleData.readTime || '4 min de leitura',
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
      author: articleData.author || 'Werik Oliveira',
      source: 'Amplifica Marketing Blog',
      image: articleData.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    };
    posts.unshift(newPost);
    saveLocalPosts(posts);
    return newPost;
  }
}

// PUT /api/posts/:id - Edit article
export async function updateBlogPost(id: number, articleData: Partial<BlogArticle>): Promise<BlogArticle> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(articleData),
    });
    if (!response.ok) throw new Error('Failed to update article on API');
    return await response.json();
  } catch {
    // Local fallback
    const posts = getLocalPosts();
    const index = posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      posts[index] = { ...posts[index], ...articleData };
      saveLocalPosts(posts);
      return posts[index];
    }
    throw new Error('Article not found');
  }
}

// DELETE /api/posts/:id - Delete article
export async function deleteBlogPost(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete article on API');
    return true;
  } catch {
    // Local fallback
    let posts = getLocalPosts();
    posts = posts.filter((p) => p.id !== id);
    saveLocalPosts(posts);
    return true;
  }
}
