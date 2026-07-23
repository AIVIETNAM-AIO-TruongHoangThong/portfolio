'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

export default function CVPage() {
  const { t } = useLanguage();
  const pdfUrl = "https://drive.google.com/file/d/16IbuylI_uXwdOkehW1z9VreA2TzUjITN/view?usp=sharing";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-between">
      <Navigation />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Download Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100">
                TRUONG HOANG THONG
              </h1>
              <p className="text-primary font-mono text-sm font-semibold mt-1">
                Software Engineer | AI & Data Focus
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-2">
                <a href="https://github.com/AIVIETNAM-AIO-TruongHoangThong" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                  github.com/AIVIETNAM-AIO-TruongHoangThong
                </a>
                <span>•</span>
                <span>(+84) 85 986 4079</span>
                <span>•</span>
                <a href="mailto:contact@thongtruong.com" className="hover:text-primary underline">
                  contact@thongtruong.com
                </a>
              </div>
            </div>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-mono font-bold text-sm shadow-lg shadow-primary/20 transition-all shrink-0"
            >
              <span className="material-icons text-lg">download</span>
              <span>Download PDF Resume</span>
            </a>
          </div>

          {/* CV Content Document */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12 shadow-xl space-y-10 font-sans text-zinc-800 dark:text-zinc-200">
            
            {/* Professional Summary */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-primary tracking-widest uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Professional Summary
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                Software Engineer focused on AI & Data with a strong background in developing web applications, data-intensive systems, and intelligent machine learning solutions. Specializes in Python and TypeScript development with a focus on traditional machine learning, deep learning models, RAG pipelines, and data-centric software architecture. Dual-degree graduate (B.S. Information Technology, B.A. Japanese Studies), fluent in English (IELTS 7.5) with JLPT N2 Japanese (certified 2020), and a proven track record of technical team leadership and AI-assisted workflows.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-primary tracking-widest uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Technical Skills
              </h2>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li><strong className="text-zinc-900 dark:text-zinc-100">AI & Data Science:</strong> NumPy, Pandas, Scikit-learn, PyTorch, Machine Learning (Classification, Clustering, Regression), Deep Learning, Computer Vision, Natural Language Processing (NLP), RAG & Vector Search.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">Front-End Development:</strong> React.js, TypeScript, Next.js, Angular, Vite, HTML5/CSS3, Tailwind CSS.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">Backend & APIs:</strong> Python (FastAPI, SQLAlchemy, SQLModel), Java, REST APIs, Dramatiq, Redis, AsyncIO, PHP (WordPress).</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">Databases & Storage:</strong> PostgreSQL, pgvector, MySQL.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">DevOps & Tooling:</strong> Docker, Git, GitOps, Crawl4AI.</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">Languages:</strong> English (IELTS 7.5 - Professional Working), Japanese (JLPT N2 Certified 2020 - Reading & Basic Conversational).</li>
              </ul>
            </section>

            {/* Professional Experience */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono font-bold text-primary tracking-widest uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Professional Experience
              </h2>

              {/* Nexus Tech Global */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Co-Founder & Technical Lead (Data & AI) <span className="font-normal text-zinc-500">| Nexus Tech Global (Project: SiteBotic)</span></h3>
                  <span className="font-mono text-xs text-zinc-400">March 2025 – Present | Adelaide, Australia</span>
                </div>
                <p className="text-xs text-zinc-500 italic">SiteBotic is a multi-tenant AI chatbot SaaS platform that crawls websites, builds knowledge bases, and deploys embeddable chatbot widgets.</p>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pl-1">
                  <li><strong>Data Pipeline Architecture:</strong> Designed core vector search pipelines using PostgreSQL/pgvector for scalable semantic data retrieval.</li>
                  <li><strong>Ingestion Optimization:</strong> Integrated Crawl4AI to parse website content, supporting JavaScript-rendered SPAs and resolving container memory crashes during heavy ingestion loads.</li>
                  <li><strong>Backend Concurrency:</strong> Refactored Dramatiq background workers to use a single persistent AsyncIO event loop, resolving thread-safety and connection pool issues.</li>
                  <li><strong>AI-Assisted Software Development:</strong> Utilized AI coding workflows to accelerate development, enforce coding standards, and mentor team members.</li>
                  <li><strong>Application Security:</strong> Configured session-only cookie management to isolate user histories, resolving cross-session data leaks.</li>
                </ul>
              </div>

              {/* PALTech */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Software Engineer <span className="font-normal text-zinc-500">| PALTech</span></h3>
                  <span className="font-mono text-xs text-zinc-400">February 2024 – Present | Ho Chi Minh City, Vietnam</span>
                </div>
                <p className="text-xs text-zinc-500 italic">PALTech operates high-throughput web platforms processing real-time transaction feeds and user activities.</p>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pl-1">
                  <li><strong>Front-End Development:</strong> Developed and maintained user interface components using Angular, TypeScript, and modern styling practices.</li>
                  <li><strong>Backend API Development:</strong> Built and updated web APIs using Java, implementing business logic and routing for transaction histories.</li>
                  <li><strong>Database Optimization:</strong> Designed and optimized database queries and schemas using MySQL to improve data retrieval performance.</li>
                  <li><strong>Team Collaboration:</strong> Partnered with DBAs and QA engineers to align frontend features with backend services in Agile sprints.</li>
                </ul>
              </div>

              {/* BeSmartee */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Web Engineer <span className="font-normal text-zinc-500">| BeSmartee</span></h3>
                  <span className="font-mono text-xs text-zinc-400">April 2022 – January 2024 | Ho Chi Minh City, Vietnam</span>
                </div>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pl-1">
                  <li><strong>WordPress & PHP Development:</strong> Built, customized, and maintained platform sub-pages and plugins using PHP and WordPress.</li>
                  <li><strong>API & DB Integrations:</strong> Integrated third-party APIs and managed schema migrations on MySQL databases.</li>
                </ul>
              </div>

              {/* Freelance */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">Freelance Web Developer (WordPress & PHP) <span className="font-normal text-zinc-500">| Self-Employed</span></h3>
                  <span className="font-mono text-xs text-zinc-400">October 2020 – April 2022 | Ho Chi Minh City, Vietnam</span>
                </div>
                <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-300 space-y-1 pl-1">
                  <li><strong>Full-Stack Development:</strong> Developed and maintained custom WordPress sites for local clients writing custom PHP templates and styling.</li>
                </ul>
              </div>
            </section>

            {/* Key Projects & Research */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono font-bold text-primary tracking-widest uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Key Projects & Research
              </h2>

              {/* SiteBotic */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    SiteBotic - AI-Powered Chatbot Platform <span className="font-normal text-zinc-400">| <a href="https://sitebotic.com" target="_blank" rel="noopener noreferrer" className="underline text-primary">sitebotic.com</a></span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">Lead AI Engineer</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Built a production-grade multi-tenant SaaS platform featuring automated website crawling, vector search knowledge bases, and embeddable widgets.</p>
                <p className="text-xs font-mono text-zinc-400"><strong>Tech Stack:</strong> Python, FastAPI, pgvector, PostgreSQL, Dramatiq, Redis, Crawl4AI, React, Docker.</p>
              </div>

              {/* Multimodal Similarity */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Multimodal Similarity Matching for Images & Texts <span className="font-normal text-zinc-400">| AI VIET NAM - AIO 2026</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">Team Leader</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Implemented and benchmarked image–text similarity matching approaches, including baseline ResNet50, Least-Squares linear projection (W), and CLIP contrastive embeddings.</p>
                <div className="flex flex-wrap gap-3 text-xs font-mono pt-1">
                  <a href="https://gist.github.com/AIVIETNAM-AIO-TruongHoangThong/02732ffb5dcfbdb1841a8243b4ee11f8" target="_blank" rel="noopener noreferrer" className="text-primary underline">Gist Link</a>
                  <a href="https://www.youtube.com/watch?v=CljX-IhiE7w" target="_blank" rel="noopener noreferrer" className="text-primary underline">Demo Video</a>
                  <a href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold underline">Verified Certificate</a>
                </div>
              </div>

              {/* Shot Zone */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Shot Zone & Quality Clustering <span className="font-normal text-zinc-400">| AI VIET NAM - AIO 2026</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">AI Engineer (Model)</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Analyzing feature scaling impact on K-Means clustering and KNN classification using a World Cup soccer dataset (Hudl Open Data), validating clusters against goal rates and xG.</p>
                <a href="https://github.com/hudl/open-data" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary underline block">Dataset Repo (Hudl Open Data)</a>
              </div>

              {/* Customer 360 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                    Customer 360 Risk Scoring System <span className="font-normal text-zinc-400">| Capstone Project</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-400">Lead Developer</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Designed and built an end-to-end data pipeline to ingest, clean, and model user transaction data into a risk analytics warehouse.</p>
                <a href="https://github.com/23210287thongtruong/customer360-risk" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary underline block">GitHub Link</a>
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="space-y-3">
              <h2 className="text-xs font-mono font-bold text-primary tracking-widest uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Education & Certifications
              </h2>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-100">AIO 2026 AI Program</strong> | AI VIET NAM (<a href="https://aivietnam.edu.vn" target="_blank" rel="noopener noreferrer" className="text-primary underline">aivietnam.edu.vn</a>)<br />
                  <span className="text-xs text-zinc-500 font-mono">June 2026 – Present • <a href="https://lms.aivietnam.edu.vn/verification/accomplishments/78243493" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold underline">Verified Module 01 Certificate</a></span>
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-100">Bachelor of Information Technology</strong> | University of Information Technology (VNU-HCM)<br />
                  <span className="text-xs text-zinc-500 font-mono">Graduated with "Very Good" classification (2026) • GPA: 3.5 / 4.0</span>
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-100">Bachelor of Arts in Japanese Studies</strong> | University of Social Sciences and Humanities (VNU-HCM)<br />
                  <span className="text-xs text-zinc-500 font-mono">Graduated in 2020 • GPA: 3.0 / 4.0</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Bottom Download Bar */}
          <div className="mt-8 text-center">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-blue-600 text-white font-mono font-bold text-base shadow-xl transition-all"
            >
              <span className="material-icons text-xl">download</span>
              <span>Download Official PDF Resume</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}