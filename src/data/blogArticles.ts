export interface BlogArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  source: string;
  image: string;
}

// Blog starts empty as requested by user
export const BLOG_ARTICLES: BlogArticle[] = [];
