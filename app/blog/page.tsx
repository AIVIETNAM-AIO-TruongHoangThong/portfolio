'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BLOG_POSTS } from './posts';

export default function BlogListingPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTags = ['All', ...Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between selection:bg-primary selection:text-white">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
              <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase">
                SYSTEM_LOGS // TECHNICAL_WRITING
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Engineering Diary &amp; Perspectives
            </h1>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-mono max-w-3xl leading-relaxed">
              Reflections on artificial intelligence, low-level model mechanics, high-leverage agent architectures, and navigating the modern software engineering paradigm shift.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mb-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-4 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="relative flex-1">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Filter posts by keyword or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 font-mono text-sm focus:outline-none focus:border-primary text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 font-mono text-xs transition-colors whitespace-nowrap border ${
                    selectedTag === tag
                      ? 'bg-primary text-white border-primary font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-primary'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post Section */}
          {featuredPost && selectedTag === 'All' && !searchQuery && (
            <div className="mb-16">
              <div className="font-mono text-xs font-bold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="material-icons text-sm">star</span> FEATURED_PERSPECTIVE
              </div>
              <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all duration-300 shadow-lg p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 font-semibold">
                    {featuredPost.category}
                  </span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-4 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-zinc-600 dark:text-zinc-300 font-display text-lg mb-6 leading-relaxed">
                  {featuredPost.subtitle}
                </p>

                <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 font-mono text-[11px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary hover:translate-x-1 transition-transform"
                  >
                    <span>Read Perspective</span>
                    <span className="material-icons text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div>
            <h2 className="font-mono text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">
              ALL_POSTS ({filteredPosts.length})
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="material-icons text-4xl text-zinc-400 mb-2">find_in_page</span>
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                  No posts match your filter criteria. Try clearing search queries.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-primary transition-all duration-300 p-6 shadow-sm group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4 font-mono text-xs text-zinc-400">
                        <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-semibold border border-zinc-200 dark:border-zinc-700">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-primary transition-colors leading-snug">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">
                        {post.date} • By {post.author}
                      </p>

                      <p className="text-sm font-sans text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 font-mono text-[10px] bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs text-primary font-bold group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read</span>
                        <span className="material-icons text-sm">chevron_right</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
