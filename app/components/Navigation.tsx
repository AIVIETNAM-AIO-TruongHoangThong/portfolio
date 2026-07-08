'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    return `px-4 py-2 text-sm font-mono transition-all ${
      isActive
        ? 'text-primary bg-white dark:bg-zinc-800 font-bold border border-zinc-200 dark:border-zinc-700'
        : 'text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-zinc-800 border border-transparent'
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    return `px-4 py-2 text-sm font-mono transition-all ${
      isActive
        ? 'text-primary bg-zinc-100 dark:bg-zinc-800 font-bold border-l-4 border-primary'
        : 'text-zinc-600 dark:text-zinc-300 hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800 border-l-4 border-transparent'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 border-b border-zinc-300 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="font-mono font-bold text-xl text-primary">&gt;_</span>
            </div>
            <span className="font-display font-medium text-xl tracking-tight hidden sm:block">
              Thong Truong<span className="text-primary">.py</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex space-x-1 items-center bg-zinc-100 dark:bg-zinc-900/50 p-1 border border-zinc-300 dark:border-zinc-700">
              <Link href="/" className={getLinkClass('/')}>
                {t('home')}
              </Link>
              <Link href="/projects" className={getLinkClass('/projects')}>
                {t('projects')}
              </Link>
              <Link href="/cv" className={getLinkClass('/cv')}>
                {t('cv')}
              </Link>
              <Link href="/contact" className={getLinkClass('/contact')}>
                {t('contact')}
              </Link>
            </div>

            <LanguageToggle />
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-sm font-mono font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              init_contact()
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-primary focus:outline-none p-2"
            >
              <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-300 dark:border-zinc-800">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/')}>
                {t('home')}
              </Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/projects')}>
                {t('projects')}
              </Link>
              <Link href="/cv" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/cv')}>
                {t('cv')}
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/contact')}>
                {t('contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
