'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';


export default function HomePage() {
  
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
                      {"Software Engineer | AI & Data Focus"}
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-display font-medium text-zinc-900 dark:text-white leading-[1.05] tracking-tight border-l-8 border-primary pl-6">
                  {"Uncovering"} <br />
                  <span className="text-primary italic">{"Insights through"}</span><br />
                  {"Data Science"} <br />
                  {"& AI"}
                </h1>
              </div>
              
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 max-w-2xl shadow-none">
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-widest">{/* SYSTEM.LOG_BIO_LOADED */}</p>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                  {"Software Engineer focused on AI & Data, with hands-on experience analyzing datasets, building predictive models, and applying machine learning and deep learning algorithms to uncover actionable insights."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-2">
                <Link 
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary font-mono focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    {"View_Projects"} <span className="material-icons text-sm">arrow_forward</span>
                  </span>
                </Link>
                
                <Link 
                  href="/cv"
                  className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-zinc-700 dark:text-zinc-200 bg-transparent border-2 border-zinc-300 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-all font-mono"
                >
                  <span className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary">&gt;</span>
                  {"Download CV"}
                </Link>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-8 text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest border-t border-zinc-300 dark:border-zinc-800 mt-8">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-primary">storage</span>
                  {"Machine Learning"}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-lg text-blue-400">code</span>
                  {"Data Analysis & Visualization"}
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
              <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white mb-2">{"Selected Works"}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm">{/* Executed_Projects_List */}</p>
            </div>
            <Link 
              href="/projects"
              className="text-primary font-medium font-mono text-sm hover:text-blue-700 transition flex items-center gap-2 group border-b border-transparent hover:border-primary pb-0.5"
            >
              {"view_all_projects()"} <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Bento Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Card 1: SiteBotic (Hero / Flagship Production SaaS - lg:col-span-7) */}
            <div className="lg:col-span-7 md:col-span-2 group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-8 sm:aspect-h-7 overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <span className="bg-primary text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">AI SaaS</span>
                  <span className="bg-green-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    Production
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">2025</div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="/sitebotic-thumbnail.png"
                  alt="SiteBotic AI Chatbot Platform"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-primary font-semibold tracking-wider uppercase">Flagship Production Platform</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">SiteBotic</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                    {"Lead AI Engineer — Architected an automated Crawl4AI web extraction pipeline and pgvector RAG engine with GPT-5-mini for domain-specific chatbot generation."}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["FastAPI", "React", "TypeScript", "pgvector", "Dramatiq", "Redis", "Docker"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-white dark:bg-zinc-900 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a 
                    href="https://sitebotic.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">language</span>
                    Website
                  </a>
                  <a 
                    href="https://sitebotic.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white hover:bg-primary/90 text-xs font-mono transition duration-200 font-semibold"
                  >
                    <span className="material-icons text-sm">open_in_new</span>
                    Launch App
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Player Style Clustering (Spotlight Research - lg:col-span-5) */}
            <div className="lg:col-span-5 md:col-span-2 group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-8 sm:aspect-h-7 overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <span className="bg-amber-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">AIO Research</span>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">2026</div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"
                  alt="Player Style Clustering from Football Event Data"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase">Module 02 Research Paper</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Player Style Clustering
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                    {"Tactical behavioral profiling across 1,140 European matches (StatsBomb Open Data). RobustScaler K-Means (k=5) with 96.6% KNN stability."}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {["K-Means", "RobustScaler", "StatsBomb", "KNN Stability", "PCA"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-white dark:bg-zinc-900 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a 
                    href="https://github.com/AIVIETNAM-AIO-Kaisye/football-shot-clustering" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">code</span>
                    GitHub
                  </a>
                  <a 
                    href="/learning" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">terminal</span>
                    Learning Log
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Multimodal Similarity Matching (lg:col-span-4) */}
            <div className="lg:col-span-4 md:col-span-1 group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-purple-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">AIO Research</span>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">2026</div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800"
                  alt="Similarity Matching for Images and Texts"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Similarity Matching (CLIP)
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-3">
                    {"Benchmarking image-text similarity models with ResNet50 baseline, Least-Squares projection, and OpenAI CLIP."}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {["ResNet50", "CLIP", "PyTorch"].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-white dark:bg-zinc-900 text-[9px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <a 
                    href="https://github.com/AIVIETNAM-AIO-TruongHoangThong/AIO2026-Conquer-Module-01" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-xs">code</span>
                    GitHub
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=CljX-IhiE7w&t=1432s" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-xs">play_circle</span>
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Customer 360 Risk Scoring (lg:col-span-4) */}
            <div className="lg:col-span-4 md:col-span-1 group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">Data Engineering</span>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">2025</div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                  alt="Customer 360 Risk Scoring System"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Customer 360 Risk Scoring
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-3">
                    {"End-to-end data pipeline building 360-degree customer views and risk analytics with PySpark, Airflow, and Metabase."}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {["PySpark", "Airflow", "PostgreSQL"].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-white dark:bg-zinc-900 text-[9px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <a 
                    href="https://github.com/23210287thongtruong/customer360-risk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-xs">code</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5: Book Recommendation System (lg:col-span-4) */}
            <div className="lg:col-span-4 md:col-span-2 lg:col-span-4 group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute top-3 left-3 z-20">
                  <span className="bg-emerald-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">ML &amp; Web</span>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">2025</div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
                  alt="Book Recommendation System"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    Book Recommendation System
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-3">
                    {"Hybrid recommendation engine combining collaborative filtering (SVD) and content-based filtering (TF-IDF) with React UI."}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {["Scikit-learn", "FastAPI", "React"].map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 bg-white dark:bg-zinc-900 text-[9px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <a 
                    href="https://github.com/23210287thongtruong/recommendation-system" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-xs">code</span>
                    GitHub
                  </a>
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
                <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">{"Education"}</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white">{"Certifications & Degrees"}</h3>
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
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{"Google Cloud | Coursera"}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{"Google Cloud Data Engineer Specialization"}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{"Comprehensive specialization covering Google Cloud infrastructure, deployment, and highly scalable architectures."}</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/LYM33YOBPSG0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {"Verify Credential"}
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
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{"Duke University | Coursera"}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{"Java Programming Fundamentals Specialization"}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{"Foundational training in core programming concepts, software engineering, and object-oriented design using Java."}</p>
                </div>
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/FHEWGD14O2HV" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {"Verify Credential"}
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
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{"AIO | AI VIET NAM"}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{"AI VIET NAM - AIO 2026 (Module 01)"}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{"Intensive academic program focusing on machine learning, deep learning, computer vision, and NLP."}</p>
                </div>
                <a 
                  href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-blue-700 font-bold mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full group/btn"
                >
                  {"Verify Credential"}
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
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{"UIT - VNUHCM"}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{"B.S. Information Technology"}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{"Rigorous computer science curriculum covering data structures, algorithms, databases, and software engineering. Graduated with a \"Very Good\" classification."}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full cursor-default">
                  <span className="material-icons text-xs text-green-500">workspace_premium</span>
                  {"Academic Degree"}
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
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{"USSH - VNUHCM"}</span>
                  </div>
                  <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3">{"B.A. Japanese Studies"}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{"In-depth study of Japanese language, culture, society, and cross-cultural communication."}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800 w-full cursor-default">
                  <span className="material-icons text-xs text-purple-500">workspace_premium</span>
                  {"Academic Degree"}
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
              {"Looking for a Software Engineer focused on AI & Data?"}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10">
              {"I develop machine learning models, analyze complex datasets, and build intelligent data-driven software solutions."}
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary hover:bg-blue-600 font-mono transition-all duration-300 hover:-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {"Let's_Talk()"}
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
