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
                {"Current Module: 02 (Player Style Clustering)"}
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
            
            {/* Module 02 - Nearly Completed */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm">hourglass_top</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-amber-500/40 dark:border-amber-500/40 shadow-lg shadow-amber-500/5 group-hover:border-amber-500 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    NEARLY COMPLETED (DEMO VIDEO TONIGHT)
                  </span>
                  <span className="font-mono text-xs text-zinc-400">07/2026 - 08/2026 (Month 2)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{"[MODULE_02] Player Style Clustering from Football Event Data (Research Stream)"}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                  {"Unsupervised behavioral profiling of 1,016 players across 1,140 matches in Premier League, La Liga, and Serie A (2015/16). Benchmarking feature scalers, K-Means (k=5), and hierarchical tactical sub-clustering."}
                </p>

                {/* Video Pending Banner */}
                <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-sm text-xs font-mono text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <span className="material-icons text-base text-amber-500">videocam</span>
                  <span><strong>Demo Video:</strong> Recording & uploading to YouTube tonight. Embed will be published upon submission.</span>
                </div>
                
                <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-2 mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-primary">&gt;</span> 
                    <span>Dataset: </span>
                    <a 
                      href="https://github.com/statsbomb/open-data" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary underline hover:opacity-80 transition-opacity"
                    >
                      StatsBomb Open Data (1,140 matches, 1,016 players &ge; 900 mins)
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span>Pipeline: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">RobustScaler + K-Means (k=5) + Hierarchical Sub-Clustering</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span>Validation: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">Purity: 69.7% | NMI: 0.546 | KNN 5-fold CV: 96.6% &plusmn; 0.8%</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span className="text-amber-600 dark:text-amber-400">Status: All code, modeling &amp; LaTeX report complete &bull; Video demo recording tonight</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://github.com/AIVIETNAM-AIO-Kaisye/football-shot-clustering" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">code</span>
                    GitHub Repository
                  </a>
                  <a 
                    href="https://github.com/statsbomb/open-data" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">dataset</span>
                    StatsBomb Open Data
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
