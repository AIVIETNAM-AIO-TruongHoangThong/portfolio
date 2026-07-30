export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'is-ai-engineering-just-api-plumbing',
    slug: 'is-ai-engineering-just-api-plumbing',
    title: 'Is AI Engineering Just API Plumbing? (Or: Where Does the Real CS Live?)',
    subtitle: 'A personal journey through confusion, abstraction layers, and trying to figure out where a software engineer actually belongs in the age of LLMs.',
    date: 'July 30, 2026',
    readTime: '8 min read',
    author: 'Thong Truong',
    category: 'AI & Systems Architecture',
    tags: ['AI Engineering', 'PyTorch', 'Pydantic AI', 'Systems Architecture', 'First Principles'],
    excerpt: 'To be completely honest, I spent months feeling skeptical about the AI hype. Aren\'t we all just calling external APIs and gluing JSON strings together? Here is how peeling back the abstraction layers changed my perspective.',
    featured: true,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug || post.id === slug);
}
