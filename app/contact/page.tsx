'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("mykgzwwg");
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    sector: t('dataEngineering'),
    message: ''
  }));

  if (state.succeeded) {
    return (
      <>
        <Navigation />
        <main className="flex-grow pt-20 relative z-10 min-h-screen">
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 tech-grid opacity-[0.4]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <span className="material-icons text-6xl text-primary mb-4">check_circle</span>
                <h1 className="text-4xl font-display font-medium text-zinc-900 dark:text-white mb-4">
                  {t('successTitle')}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {t('successBody')}
                </p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary hover:bg-blue-600 font-mono transition-all duration-300 hover:-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                {t('successSendAnother')}
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-primary font-mono text-xs font-semibold tracking-wider uppercase">
                    {t('contactInitialize')}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-display font-medium text-zinc-900 dark:text-white mb-6 leading-tight">
                  {t('contactHeroTitleLine1')} <br />
                  <span className="text-zinc-900 dark:text-zinc-100">
                    {t('contactHeroTitleHighlight')}
                  </span>
                </h1>
                
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-10">
                  {t('contactHeroDescription')}
                </p>
                
                {/* Contact Methods */}
                <div className="grid grid-cols-1 gap-4 mb-10">
                  <a
                    href="mailto:contact@thongtruong.com"
                    className="flex items-center p-4 border border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 bg-white dark:bg-white/5 hover:bg-blue-50/50 dark:hover:bg-white/10 transition-all group"
                  >
                    <div className="h-12 w-12 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mr-5">
                      <span className="material-icons text-2xl">email</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider mb-0.5">
                        {t('contactDirectLine')}
                      </p>
                      <p className="text-zinc-900 dark:text-white font-medium text-lg">
                        contact@thongtruong.com
                      </p>
                    </div>
                  </a>
                  
                  <div
                    className="flex items-center p-4 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 opacity-60 cursor-not-allowed group"
                  >
                    <div className="h-12 w-12 bg-primary/10 flex items-center justify-center text-primary mr-5">
                      <span className="material-icons text-2xl">schedule</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider mb-0.5">
                        {t('contactSyncUp')}
                      </p>
                      <p className="text-zinc-900 dark:text-white font-medium text-lg">
                        {t('contactBookSlot')}
                      </p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mono">
                        {t('comingSoon')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Block */}
              <div className="hidden lg:block p-6 bg-surface-dark border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 tech-grid opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2.5 h-2.5 bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 bg-green-500/80"></div>
                  </div>
                  <div className="font-mono text-xs leading-relaxed">
                    <div className="text-gray-400">
                      <span className="text-primary">while</span>{' '}
                      <span className="text-text-dark">project_active</span>:
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-accent">await</span>{' '}
                      <span className="text-yellow-300">input</span>
                      (<span className="text-green-400">&quot;New Idea&quot;</span>)
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-text-dark">build_solution</span>()
                    </div>
                    <div className="pl-4 text-gray-500">
                      <span className="text-primary">deploy</span>()
                    </div>
                  </div>
                </div>
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
                      {t('contactFormTitle')}
                    </h3>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-primary animate-pulse delay-150"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                      >
                        {t('labelName')}
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
                        {t('labelEmail')}
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
                  </div>
                  
                  <div className="group">
                    <label
                      htmlFor="sector"
                      className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                    >
                      {t('labelSector')}
                    </label>
                    <div className="relative">
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white focus:border-primary focus:ring-0 py-3 px-4 transition-all appearance-none"
                      >
                        <option>{t('dataEngineering')}</option>
                        <option>{t('sectorOptionBackend')}</option>
                        <option>{t('sectorOptionDataPlatform')}</option>
                        <option>{t('sectorOptionConsulting')}</option>
                        <option>{t('sectorOptionOther')}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-icons text-sm">expand_more</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors"
                    >
                      {t('labelMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('placeholderMessage')}
                      rows={6}
                      className="block w-full border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-black/40 text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:ring-0 py-3 px-4 transition-all resize-none"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full group flex items-center justify-center py-4 px-4 border border-transparent -primary/20 text-sm font-mono font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all uppercase tracking-wide overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12"></span>
                    <span className="mr-2">{state.submitting ? t('buttonSending') : t('buttonSendTransmission')}</span>
                    <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
                      {state.submitting ? 'hourglass_empty' : 'send'}
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
