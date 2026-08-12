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
  {
    id: 'learning-ai-changed-how-i-see-software-industry',
    slug: 'learning-ai-changed-how-i-see-software-industry',
    title: 'I Started Learning AI. I Didn\'t Expect It to Change How I See the Software Industry.',
    subtitle: 'A reflection on technology consulting, the illusion of pure engineering, and why building the model isn\'t the same as building the solution.',
    date: 'August 12, 2026',
    readTime: '7 min read',
    author: 'Thong Truong',
    category: 'Career & Industry',
    tags: ['Technology Consulting', 'Software Engineering', 'Enterprise AI', 'Career Path'],
    excerpt: 'When I first enrolled in an intensive Machine Learning program, my goal was purely technical. I wanted to understand the math behind Transformers and how to train models. I didn\'t realize it would completely shift my understanding of where the actual value lies in the software industry.',
    featured: true,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug || post.id === slug);
}
