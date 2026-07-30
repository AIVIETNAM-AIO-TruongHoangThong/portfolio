'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LearningPage() {
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Terminal Header */}
          <div className="mb-12 flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                {"Current Module: 02 (Shot Zone Clustering)"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {"Live Learning Log"}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-mono">
              A chronological terminal of my journey through the{' '}
              <a
                href="https://aivietnam.edu.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80 transition-opacity font-semibold"
              >
                AI VIET NAM (AIO 2026)
              </a>{' '}
              Intensive AI/ML Program.
            </p>
          </div>

          {/* Timeline container */}
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-700 before:to-transparent">
            
            {/* Module 02 - In Progress */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-green-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm">construction</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-green-500/30 dark:border-green-500/30 shadow-lg shadow-green-500/5 group-hover:border-green-500 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1">IN PROGRESS</span>
                  <span className="font-mono text-xs text-zinc-400">07/2026 - 08/2026 (Month 2)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{"[MODULE_02] Shot Zone & Quality Clustering (Research Stream)"}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-6">
                  {"Analyzing feature scaling effects on K-Means clustering using a World Cup soccer dataset. Validating clusters against actual goal rates and xG."}
                </p>
                
                <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-2 mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-primary">&gt;</span> 
                    <span>Dataset: </span>
                    <a 
                      href="https://github.com/hudl/open-data" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary underline hover:opacity-80 transition-opacity"
                    >
                      Hudl StatsBomb Open Data
                    </a>
                  </div>
                  <div className="flex gap-2"><span className="text-primary">&gt;</span> <span>Algorithms: K-Means, KNN Classification</span></div>
                  <div className="flex gap-2"><span className="text-primary">&gt;</span> <span className="animate-pulse">Status: Training Models...</span></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/hudl/open-data" 
                    target="_blank" 
                      rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">dataset</span>
                    View Dataset Repo
                  </a>
                  <a 
                    href="https://aivietnam.edu.vn/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">open_in_new</span>
                    AI VIET NAM Program
                  </a>
                </div>
              </div>
            </div>

            {/* Module 01 - Completed (Video) */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm">check</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1">COMPLETED</span>
                  <span className="font-mono text-xs text-zinc-400">06/2026 - 07/2026 (Month 1)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{"[MODULE_01] Multimodal Similarity Matching (Research Stream)"}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-6">
                  {"Implementing and benchmarking multiple image-text similarity matching approaches using ResNet50, TF-IDF, and CLIP contrastive embeddings."}
                </p>
                
                <div className="aspect-w-16 aspect-h-9 relative bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 overflow-hidden group-hover:border-primary/50 transition-colors mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/CljX-IhiE7w" 
                    title="AIO 2026: Module 01 Summary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://gist.github.com/AIVIETNAM-AIO-TruongHoangThong/02732ffb5dcfbdb1841a8243b4ee11f8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">code</span>
                    View Module 01 Gist
                  </a>
                  <a 
                    href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400 hover:border-green-500 text-xs font-mono transition duration-200 font-bold"
                  >
                    <span className="material-icons text-sm text-green-500">verified</span>
                    Verify Certificate
                  </a>
                  <a 
                    href="https://aivietnam.edu.vn/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">open_in_new</span>
                    aivietnam.edu.vn
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
