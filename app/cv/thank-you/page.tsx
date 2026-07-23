'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { useLanguage } from '../../components/LanguageProvider';

export default function CVThankYouPage() {
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem('cv_form_submitted');

    if (!hasSubmitted) {
      router.push('/cv');
      return;
    }

    sessionStorage.removeItem('cv_form_submitted');
  }, [router]);
  return (
    <>
      <Navigation />

      <main className="flex-grow pt-20 relative z-10 min-h-screen">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 tech-grid opacity-[0.4]"></div>
        </div>
        <div className="fixed top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 opacity-20 pointer-events-none z-0"></div>
        <div className="fixed bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent/20 opacity-20 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <span className="material-icons text-6xl text-primary mb-4">check_circle</span>
              <h1 className="text-4xl font-display font-medium text-zinc-900 dark:text-white mb-4">
                {t('cvThanksTitle')}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                {t('cvThanksBody')}
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://drive.google.com/file/d/16IbuylI_uXwdOkehW1z9VreA2TzUjITN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-blue-600 font-mono transition-all duration-300 hover:-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <span className="mr-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&gt;</span>
                <span className="material-icons text-xl mr-2">download</span>
                {t('downloadCV')}
                <span className="ml-2 material-icons text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

              <div className="pt-6 border-t border-zinc-300 dark:border-zinc-700">
                <Link
                  href="/"
                  className="inline-flex items-center text-primary hover:text-blue-600 font-mono text-sm transition-colors"
                >
                  <span className="material-icons text-sm mr-1">arrow_back</span>
                  {t('backToHome')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}