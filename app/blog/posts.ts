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
    subtitle: 'A reflection on the value spectrum of IT—from commodity code to enterprise solutions—and why AI is shifting the center of gravity toward architecture, systems, and outcomes.',
    date: 'August 12, 2026',
    readTime: '9 min read',
    author: 'Thong Truong',
    category: 'Industry & Architecture Strategy',
    tags: ['Enterprise AI', 'Software Engineering', 'AI Architecture', 'Industry Strategy', 'Career Trajectory'],
    excerpt: 'When I first enrolled in AIO 2026, my goal was purely technical: master the math and train models from scratch. But diving into AI made me see the software industry through a completely new lens—understanding why selling developer hours is being commoditized and where true value is moving.',
    featured: true,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug || post.id === slug);
}
