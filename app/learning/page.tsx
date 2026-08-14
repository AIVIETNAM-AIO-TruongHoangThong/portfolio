'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CurriculumSelector from './components/CurriculumSelector';

export default function LearningPage() {
  const [module2View, setModule2View] = useState<'video' | 'archetypes' | 'forwards'>('video');
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <CurriculumSelector />

          {/* Terminal Header */}
          <div className="mb-12 flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                {"Current Module: 03 (Traditional Machine Learning & Time-Series Data)"}
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
            
            {/* Module 03 - In Progress */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm animate-spin-slow">sync</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-1 flex items-center gap-1.5 border border-blue-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    IN PROGRESS
                  </span>
                  <span className="font-mono text-xs text-zinc-400">08/2026 - Present (Month 3)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {"[MODULE_03] Traditional Machine Learning & Time-Series Data"}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                  {"Deep dive into tree-based algorithms (Decision Trees, Random Forest, AdaBoost, Gradient Boosting, XGBoost, LightGBM) and Time-Series Data Analysis (Aggregation, Decomposition, Medical & Energy Analytics)."}
                </p>
                
                {/* Media Container Placeholder */}
                <div className="relative w-full h-[250px] bg-zinc-100 dark:bg-black border border-dashed border-zinc-300 dark:border-zinc-700 overflow-hidden flex flex-col items-center justify-center mb-4 transition-colors">
                  <span className="material-icons text-3xl text-zinc-300 dark:text-zinc-700 mb-2">construction</span>
                  <p className="font-mono text-xs text-zinc-400 text-center px-4">Research Media & Visualizers <br/> Will Be Published Upon Completion</p>
                </div>

                {/* Terminal Specs Box */}
                <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-2 mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-blue-500">&gt;</span> 
                    <span>Dataset: </span>
                    <span className="text-zinc-700 dark:text-zinc-300 animate-pulse">To Be Determined...</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-500">&gt;</span> 
                    <span>Pipeline: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">Tree-based Models & Time-Series Forecasting</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-500">&gt;</span> 
                    <span>Validation: </span>
                    <span className="text-zinc-700 dark:text-zinc-300 animate-pulse">Pending Assignments...</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-500">&gt;</span> 
                    <span className="text-blue-500">Status: Currently studying concepts and working on assignments...</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 opacity-60">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-zinc-300 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 cursor-not-allowed">
                    <span className="material-icons text-sm">lock_clock</span>
                    Interactive Demo
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-zinc-300 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 cursor-not-allowed">
                    <span className="material-icons text-sm">lock_clock</span>
                    GitHub Repository
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-zinc-300 dark:border-zinc-700 text-xs font-mono text-zinc-500 dark:text-zinc-400 cursor-not-allowed">
                    <span className="material-icons text-sm">lock_clock</span>
                    YouTube Demo
                  </span>
                </div>
              </div>
            </div>

            {/* Module 02 - Completed */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm">check</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-primary dark:text-primary bg-primary/10 px-2 py-1 flex items-center gap-1.5 border border-primary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    COMPLETED
                  </span>
                  <span className="font-mono text-xs text-zinc-400">07/2026 - 08/2026 (Month 2)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  {"[MODULE_02] Player Style Clustering from Football Event Data (Research Stream)"}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                  {"Unsupervised behavioral profiling of 1,016 players across 1,140 matches in Premier League, La Liga, and Serie A (2015/16). Benchmarking feature scalers, K-Means (k=5), and hierarchical tactical sub-clustering."}
                </p>

                {/* Interactive Media Switcher Tabs */}
                <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex flex-wrap gap-1 bg-zinc-100 dark:bg-zinc-950 p-1 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setModule2View('video')}
                      className={`px-2 py-1 transition-all flex items-center gap-1 ${
                        module2View === 'video'
                          ? 'bg-white dark:bg-zinc-800 text-primary font-bold shadow-sm border border-zinc-300 dark:border-zinc-700'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="material-icons text-xs">play_circle</span>
                      <span>Video</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModule2View('archetypes')}
                      className={`px-2 py-1 transition-all flex items-center gap-1 ${
                        module2View === 'archetypes'
                          ? 'bg-primary text-white font-bold shadow-sm'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="material-icons text-xs">bubble_chart</span>
                      <span>5 Archetypes Map</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModule2View('forwards')}
                      className={`px-2 py-1 transition-all flex items-center gap-1 ${
                        module2View === 'forwards'
                          ? 'bg-primary text-white font-bold shadow-sm'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      <span className="material-icons text-xs">scatter_plot</span>
                      <span>Forwards Sub-Clusters</span>
                    </button>
                  </div>

                  {module2View !== 'video' && (
                    <a
                      href={module2View === 'archetypes' ? '/reports/interactive/all_players_clustering.html' : '/reports/interactive/forwards_clustering.html'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-primary hover:underline"
                      title="Open full interactive demo in new tab"
                    >
                      <span>Fullscreen</span>
                      <span className="material-icons text-xs">open_in_new</span>
                    </a>
                  )}
                </div>

                {/* Media Container */}
                <div className="relative bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 overflow-hidden group-hover:border-primary/50 transition-colors mb-4">
                  {module2View === 'video' && (
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <iframe 
                        src="https://www.youtube.com/embed/x0ZeIlDp7_4" 
                        title="AIO 2026: Module 02 Summary - Player Style Clustering"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  )}

                  {module2View === 'archetypes' && (
                    <div className="h-[440px] w-full">
                      <iframe 
                        src="/reports/interactive/all_players_clustering.html" 
                        title="Interactive 5 Tactical Archetypes Demo"
                        className="w-full h-full border-0"
                      ></iframe>
                    </div>
                  )}

                  {module2View === 'forwards' && (
                    <div className="h-[440px] w-full">
                      <iframe 
                        src="/reports/interactive/forwards_clustering.html" 
                        title="Interactive Forwards Sub-Clustering Demo"
                        className="w-full h-full border-0"
                      ></iframe>
                    </div>
                  )}
                </div>
                
                {/* Terminal Specs Box */}
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
                    <span className="text-primary">Status: All code, modeling, interactive visualizers, YouTube video demo &amp; verified certificate published</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="/reports/interactive/all_players_clustering.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 hover:border-primary text-xs font-mono text-primary font-medium transition duration-200"
                  >
                    <span className="material-icons text-sm">bubble_chart</span>
                    5 Archetypes Map
                  </a>
                  <a 
                    href="/reports/interactive/forwards_clustering.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 hover:border-primary text-xs font-mono text-primary font-medium transition duration-200"
                  >
                    <span className="material-icons text-sm">scatter_plot</span>
                    Forwards Sub-Clusters
                  </a>
                  <a 
                    href="https://youtu.be/x0ZeIlDp7_4" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">play_circle</span>
                    YouTube Demo
                  </a>
                  <a 
                    href="https://github.com/AIVIETNAM-AIO-TruongHoangThong/player-style-clustering" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">code</span>
                    GitHub Repository
                  </a>
                  <a 
                    href="https://lms.aivietnam.edu.vn/verification/accomplishments/79530055" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 bg-primary/10 text-primary dark:text-primary hover:border-primary text-xs font-mono transition duration-200 font-bold"
                  >
                    <span className="material-icons text-sm text-primary">verified</span>
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Module 01 - Completed */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="material-icons text-sm">check</span>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md group-hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-primary dark:text-primary bg-primary/10 px-2 py-1 flex items-center gap-1.5 border border-primary/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    COMPLETED
                  </span>
                  <span className="font-mono text-xs text-zinc-400">06/2026 - 07/2026 (Month 1)</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                  {"[MODULE_01] Multimodal Similarity Matching for Images and Texts (Research Stream)"}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono leading-relaxed mb-4">
                  {"Implemented and benchmarked multiple image-text similarity matching approaches using ResNet50 baseline, Least-Squares projection matrix (W), and OpenAI CLIP contrastive multimodal embeddings."}
                </p>
                
                {/* Video Demo Embed */}
                <div className="aspect-w-16 aspect-h-9 relative bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 overflow-hidden group-hover:border-primary/50 transition-colors mb-4">
                  <iframe 
                    src="https://www.youtube.com/embed/CljX-IhiE7w" 
                    title="AIO 2026: Module 01 Summary - Multimodal Similarity Matching"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Terminal Specs Box */}
                <div className="bg-zinc-100 dark:bg-zinc-950 p-4 border border-zinc-200 dark:border-zinc-800 font-mono text-xs text-zinc-500 dark:text-zinc-400 space-y-2 mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-primary">&gt;</span> 
                    <span>Dataset: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">Flickr8k (8,000 images, 40,000 paired text captions)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span>Pipeline: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">ResNet50 + TF-IDF vs. Least-Squares Projection vs. CLIP (ViT-B/32)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span>Validation: </span>
                    <span className="text-zinc-700 dark:text-zinc-300">Mean Reciprocal Rank (MRR), Recall@1, Recall@5, Recall@10</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary">&gt;</span> 
                    <span className="text-primary">Status: All code, report, verified certificate &amp; YouTube video demo published</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.youtube.com/watch?v=CljX-IhiE7w&t=1432s" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">play_circle</span>
                    YouTube Demo
                  </a>
                  <a 
                    href="https://github.com/AIVIETNAM-AIO-TruongHoangThong/AIO2026-Conquer-Module-01" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">code</span>
                    GitHub Repo
                  </a>
                  <a 
                    href="https://gist.github.com/AIVIETNAM-AIO-TruongHoangThong/02732ffb5dcfbdb1841a8243b4ee11f8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                  >
                    <span className="material-icons text-sm">description</span>
                    View Gist
                  </a>
                  <a 
                    href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/40 bg-primary/10 text-primary dark:text-primary hover:border-primary text-xs font-mono transition duration-200 font-bold"
                  >
                    <span className="material-icons text-sm text-primary">verified</span>
                    Verify Certificate
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
