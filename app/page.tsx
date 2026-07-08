'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';
import { useLanguage } from './components/LanguageProvider';

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden tech-grid min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-primary/20 bg-primary/5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="font-mono text-primary text-xs font-bold tracking-wide uppercase">
                      {t('founderEngineer')}
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-display font-medium text-zinc-900 dark:text-white leading-[1.05] tracking-tight border-l-8 border-primary pl-6">
                  {t('building')} <br />
                  <span className="text-primary italic">{t('dataDriven')}</span><br />
                  {t('solutionsAt')} <br />
                  {t('scale')}
                </h1>
              </div>
              
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 max-w-2xl shadow-none">
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-widest">{/* SYSTEM.LOG_BIO_LOADED */}</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                  {t('heroBio')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <Link 
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {t('viewProjects')} <span className="material-icons text-sm">arrow_forward</span>
                  </span>
                </Link>
                
                <Link 
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-zinc-700 dark:text-zinc-200 bg-transparent border-2 border-zinc-300 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {t('downloadCV')}
                </Link>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-8 text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest border-t border-zinc-300 dark:border-zinc-800 mt-8">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-primary">storage</span>
                  {t('dataEngineering')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-blue-400">code</span>
                  {t('fullStack')}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group">
                {/* Removed spinning borders for a brutalist static feel */}
                <div className="relative bg-zinc-100 dark:bg-zinc-900 p-3 border border-zinc-300 dark:border-zinc-700">
                  <div className="corner-bracket corner-bracket-tl"></div>
                  <div className="corner-bracket corner-bracket-tr"></div>
                  <div className="corner-bracket corner-bracket-bl"></div>
                  <div className="corner-bracket corner-bracket-br"></div>
                  
                  <div className="relative overflow-hidden bg-zinc-950 aspect-[3/4] transition-all duration-500 border border-zinc-800">
                    <div className="scanlines absolute inset-0 z-20 opacity-40 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    
                    <Image
                      src="/profile.jpg"
                      alt="Thong Truong - Professional Portrait"
                      width={400}
                      height={533}
                      className="relative w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition duration-700"
                      priority
                      unoptimized
                    />
                    
                    <div className="absolute top-4 left-4 z-30 flex flex-col gap-1">
                      <span className="bg-black/80 text-primary text-[10px] font-mono px-2 py-0.5 border-l-2 border-primary">
                        ID: T_TRUONG
                      </span>
                      <span className="bg-black/80 text-white/70 text-[10px] font-mono px-2 py-0.5 border-l-2 border-accent">
                        ROLE: DEV
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 /90 z-30">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-accent text-xs font-mono mb-1">STATUS: AVAILABLE</p>
                          <div className="h-1 w-24 bg-gray-700 overflow-hidden">
                            <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                          </div>
                        </div>
                        <span className="material-icons text-white/50 text-2xl">fingerprint</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex justify-between items-center px-1">
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">IMG_SRC_001.JPG</span>
                    <span className="text-[10px] font-mono text-primary">100% RENDERED</span>
                  </div>
                </div>
                
                <div className="absolute -right-6 bottom-20 bg-white dark:bg-zinc-900 p-3 border border-zinc-300 dark:border-zinc-700 hidden md:block z-40 transform translate-x-4 group-hover:translate-x-0 transition duration-500">
                  <div className="flex gap-1.5 mb-2 border-b border-gray-100 dark:border-zinc-800 pb-2">
                    <div className="w-2 h-2 bg-red-500"></div>
                    <div className="w-2 h-2 bg-yellow-500"></div>
                    <div className="w-2 h-2 bg-green-500"></div>
                  </div>
                  <pre className="font-mono text-[10px] leading-tight text-gray-500 dark:text-gray-400">
                    <span className="text-purple-500">def</span> <span className="text-blue-500">build_future</span>():
    <span className="text-purple-500">return</span> <span className="text-green-500">&quot;Innovation&quot;</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Selected Projects Preview */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white mb-2">{t('selectedWorksHeading')}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">{/* Executed_Projects_List */}</p>
            </div>
            <Link 
              href="/projects"
              className="text-primary font-medium font-mono text-sm hover:text-blue-700 transition flex items-center gap-2 group border-b border-transparent hover:border-primary pb-0.5"
            >
              {t('viewAllProjects')} <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold mb-4">{t('productLeadershipHeading')}</h4>
              <div className="grid grid-cols-1 gap-6">
                <div className="group block border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 transition overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">{t('productionBadge')}</div>
                    <Image
                      src="/nexus-tech-global-thumbnail.png"
                      alt="Nexus Tech Global"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-medium text-lg">Nexus Tech Global</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{t('nexusSelectedDescription')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <a 
                        href="https://nexustechglobal.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">language</span>
                        Website
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group block border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 transition overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">{t('productionBadge')}</div>
                    <Image
                      src="/sitebotic-thumbnail.png"
                      alt="SiteBotic AI Chatbot Platform"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-medium text-lg">SiteBotic</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{t('siteboticSelectedDescription')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <a 
                        href="https://sitebotic.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">language</span>
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">{t('handsOnTechnicalHeading')}</h4>
              <div className="grid grid-cols-1 gap-6">
                <div className="group block border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 transition overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">AIO Research</div>
                    <Image
                      src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800"
                      alt="Similarity Matching for Images and Texts"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-medium text-lg">Similarity Matching (CLIP & PyTorch)</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{t('projectSimilarityDescription')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <a 
                        href="https://github.com/AIVIETNAM-AIO-TruongHoangThong/AIO2026-Conquer-Module-01" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">code</span>
                        GitHub
                      </a>
                      <a 
                        href="https://www.youtube.com/watch?v=CljX-IhiE7w&t=1432s" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">play_circle</span>
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group block border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 transition overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">University</div>
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                      alt="Customer 360 Risk Scoring System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-medium text-lg">Customer 360 Risk Scoring</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{t('projectCustomer360Description')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <a 
                        href="https://github.com/23210287thongtruong/customer360-risk" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">code</span>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group block border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 transition overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">University</div>
                    <Image
                      src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
                      alt="Book Recommendation System"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h5 className="font-display font-medium text-lg">Book Recommendation System</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{t('projectBookRecDescription')}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <a 
                        href="https://github.com/23210287thongtruong/recommendation-system" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                      >
                        <span className="material-icons text-sm">code</span>
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications & Degrees Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-primary"></span>
                <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">{t('certificationsLabel')}</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white">{t('certificationsHeading')}</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Google Cloud */}
            <div className="group bg-white dark:bg-zinc-900 p-1 hover: hover:-primary/10 transition duration-300">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 p-7 border border-zinc-300 dark:border-zinc-800 group-hover:border-primary/50 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-icons text-2xl">cloud</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t('cert1Issuer')}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{t('cert1Title')}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('cert1Desc')}</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/LYM33YOBPSG0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {t('verifyCredential')}
                  <span className="material-icons text-xs group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Card 2: Java Specialization */}
            <div className="group bg-white dark:bg-zinc-900 p-1 hover: hover:-primary/10 transition duration-300">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 p-7 border border-zinc-300 dark:border-zinc-800 group-hover:border-primary/50 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                      <span className="material-icons text-2xl">code</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t('cert2Issuer')}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{t('cert2Title')}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('cert2Desc')}</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/FHEWGD14O2HV" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {t('verifyCredential')}
                  <span className="material-icons text-xs group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Card 3: AIO */}
            <div className="group bg-white dark:bg-zinc-900 p-1 hover: hover:-primary/10 transition duration-300">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 p-7 border border-zinc-300 dark:border-zinc-800 group-hover:border-primary/50 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                      <span className="material-icons text-2xl">psychology</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t('cert3Issuer')}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{t('cert3Title')}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('cert3Desc')}</p>
                </div>
                <a 
                  href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {t('verifyCredential')}
                  <span className="material-icons text-xs group-hover/btn:translate-x-0.5 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Card 4: UIT Degree */}
            <div className="group bg-white dark:bg-zinc-900 p-1 hover: hover:-primary/10 transition duration-300">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 p-7 border border-zinc-300 dark:border-zinc-800 group-hover:border-primary/50 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                      <span className="material-icons text-2xl">school</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t('cert4Issuer')}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{t('cert4Title')}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('cert4Desc')}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full cursor-default">
                  <span className="material-icons text-xs text-green-500">workspace_premium</span>
                  {t('academicDegree')}
                </div>
              </div>
            </div>

            {/* Card 5: USSH Degree */}
            <div className="group bg-white dark:bg-zinc-900 p-1 hover: hover:-primary/10 transition duration-300">
              <div className="h-full bg-zinc-50 dark:bg-zinc-950 p-7 border border-zinc-300 dark:border-zinc-800 group-hover:border-primary/50 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20">
                      <span className="material-icons text-2xl">translate</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{t('cert5Issuer')}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{t('cert5Title')}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{t('cert5Desc')}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full cursor-default">
                  <span className="material-icons text-xs text-purple-500">workspace_premium</span>
                  {t('academicDegree')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white mb-6">
              {t('projectsCTAHeading')}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10">
              {t('projectsCTADescription')}
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary hover:bg-blue-600 font-mono transition-all duration-300 hover:-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {t('projectsCTAButton')}
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
