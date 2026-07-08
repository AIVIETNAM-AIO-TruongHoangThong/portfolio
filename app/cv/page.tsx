'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

export default function CVPage() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xlgranez");
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  if (state.succeeded) {
    sessionStorage.setItem('cv_form_submitted', 'true');
    router.push('/cv/thank-you');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary font-mono text-xs font-semibold tracking-wider uppercase">
                    {t('cvBadge')}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-display font-medium text-zinc-900 dark:text-white mb-6 leading-tight">
                  {t('cvHeroTitleLine1')} <br />
                  <span className="text-zinc-900 dark:text-zinc-100">
                    {t('cvHeroTitleHighlight')}
                  </span>
                </h1>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6">
                  {t('cvHeroParagraph1')}
                </p>

                <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {t('cvHeroParagraph2')}
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <div className="relative h-full">
                <div className="absolute -inset-1 opacity-20 dark:opacity-30"></div>

                <form
                  onSubmit={handleSubmit}
                  className="relative h-full flex flex-col justify-center space-y-8 bg-white dark:bg-zinc-900 p-8 lg:p-12 border border-gray-100 dark:border-white/10"
                >
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/5 pb-6">
                    <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white">
                      {t('cvFormTitle')}
                    </h3>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse delay-150"></div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        {t('labelName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('placeholderName')}
                        className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all"
                        required
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        {t('labelEmail')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('placeholderEmail')}
                        className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        {t('labelCompanyOptional')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company || ''}
                        onChange={handleChange}
                        placeholder={t('placeholderCompany')}
                        className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all"
                      />
                      <ValidationError prefix="Company" field="company" errors={state.errors} />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        {t('labelMessageOptional')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('cvPlaceholderMessage')}
                        rows={4}
                        className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all resize-none"
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full group flex items-center justify-center py-4 px-4 border border-transparent -primary/20 text-sm font-mono font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all uppercase tracking-wide overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12"></span>
                    <span className="mr-2">{state.submitting ? t('cvButtonProcessing') : t('cvButtonGet')}</span>
                    <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
                      {state.submitting ? 'hourglass_empty' : 'download'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}