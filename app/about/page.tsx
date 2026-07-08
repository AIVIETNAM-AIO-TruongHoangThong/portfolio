'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

import Timeline, { TimelineNode } from '../components/Timeline';

export default function AboutPage() {
  const { t, language } = useLanguage();

  const timelineItems: TimelineNode[] = [
    {
      id: 'early-days',
      icon: 'school',
      title: t('earlyDaysTitle'),
      colorTheme: 'primary',
      content: (
        <>
          <p>{t('earlyDaysContent1')}</p>
          <p>{t('earlyDaysContent2')}</p>
          <p>{t('earlyDaysContent3')}</p>
        </>
      ),
    },
    {
      id: 'self-taught',
      icon: 'sports_esports',
      title: t('selfTaughtTitle'),
      colorTheme: 'accent',
      content: (
        <>
          <p>{t('selfTaughtContent1')}</p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 border-l-4 border-accent my-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">{t('tryMyGames')}</p>
            <div className="space-y-2">
              <a
                href="https://liam-vessalius.itch.io/dash-quest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-mono text-sm underline block"
              >
                Dash Quest - https://liam-vessalius.itch.io/dash-quest
              </a>
              <a
                href="https://liam-vessalius.itch.io/hitnshoot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-mono text-sm underline block"
              >
                Hit&apos;n Shoot - https://liam-vessalius.itch.io/hitnshoot
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {t('gameTimeKiller')}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
              {t('pSLiamNote')}
            </p>
          </div>
          <p>{t('selfTaughtContent2')}</p>
          <p>{t('selfTaughtContent3')}</p>
          <p>{t('selfTaughtContent4')}</p>
          <p>{t('selfTaughtContent5')}</p>
        </>
      ),
    },
    {
      id: 'professional-growth',
      icon: 'work',
      title: t('professionalGrowthTitle'),
      colorTheme: 'blue',
      content: (
        <>
          <p>{t('professionalGrowthContent1')}</p>
          <p>{t('professionalGrowthContent2')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('professionalGrowthContent3') }} />
        </>
      ),
    },
    {
      id: 'future-goals',
      icon: 'flag',
      title: t('futureGoalsTitle'),
      colorTheme: 'green',
      content: (
        <>
          <p>{t('futureGoalsContent1')}</p>
          <p>{t('futureGoalsContent2')}</p>
          <p>{t('futureGoalsContent3')}</p>
        </>
      ),
    }
  ];

  return (
    <>
      <Navigation />

      <main className="pt-32 pb-20 min-h-screen">
        {/* Alert/Notice Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="/10 /10 border border-primary/20 p-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20">
                <span className="material-icons text-primary text-sm">info</span>
                <span className="font-mono text-primary text-sm font-bold">{t('importantNotice')}</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-display font-medium text-zinc-900 dark:text-white">
                {t('beforeDownloadCV')}
              </h2>

              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                {t('cvNotice')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <button
                  onClick={() => {
                    document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {t('readMyStory')} <span className="material-icons text-sm">arrow_downward</span>
                  </span>
                </button>

                <Link
                  href="/cv"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-zinc-700 dark:text-zinc-200 bg-transparent border-2 border-zinc-300 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {t('proceedToDownload')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story-section" className="w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 w-full mx-auto">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-medium text-zinc-900 dark:text-white leading-tight">
                {t('myJourney')}
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 font-light max-w-3xl mx-auto">
                {t('journeySubtitle')}
              </p>
            </div>

            <Timeline items={timelineItems} />

            {/* Call to Action */}
            <div className="text-center space-y-6 pt-8">
              {language !== 'ja' && (
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                  {t('storyCTA')}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/cv"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {t('downloadCV')} <span className="material-icons text-sm">download</span>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-zinc-700 dark:text-zinc-200 bg-transparent border-2 border-zinc-300 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {t('getInTouch')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}