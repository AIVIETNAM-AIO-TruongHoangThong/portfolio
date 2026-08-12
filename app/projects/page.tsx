"use client";

import { useState } from 'react';
import Image from 'next/image';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const projects = [
  {
    id: 8,
    title: "Player Style Clustering from Football Event Data",
    description: "Unsupervised machine learning study discovering tactical player archetypes from StatsBomb event data across 1,140 matches.",
    longDescription: "Unsupervised behavioral profiling of 1,016 players across top European leagues using StatsBomb event data. Discovered distinct tactical playing archetypes and position sub-clusters with verified cluster stability.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    tags: [
      "K-Means",
      "RobustScaler",
      "Scikit-learn",
      "StatsBomb",
      "Python",
      "KNN Stability",
      "PCA",
    ],
    version: "AIO Research",
    year: "2026",
    category: "AI & Research",
    website: "https://youtu.be/x0ZeIlDp7_4",
    github: "https://github.com/AIVIETNAM-AIO-TruongHoangThong/player-style-clustering",
    demos: [
      { label: "5 Archetypes Map", href: "/reports/interactive/all_players_clustering.html", icon: "bubble_chart" },
      { label: "Forwards Sub-Clusters", href: "/reports/interactive/forwards_clustering.html", icon: "scatter_plot" },
    ],
  },
  {
    id: 3,
    title: "Similarity Matching Methods for Images and Texts",
    description: "Research project benchmarking image-text similarity models, including ResNet50, Least-Squares projection, and CLIP.",
    longDescription: "Led a five-member research team (Trang Giay Trang Team) to implement and benchmark multiple image–text similarity matching approaches, including a baseline (ResNet50 + TF-IDF), a Least-Squares-based linear projection model (W), and OpenAI's CLIP contrastive embedding framework.",
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=800",
    tags: [
      "ResNet50",
      "CLIP",
      "NumPy",
      "Matplotlib",
      "Python",
    ],
    version: "AIO Research",
    year: "2026",
    category: "AI & Research",
    website: "https://www.youtube.com/watch?v=CljX-IhiE7w&t=1432s",
    github: "https://github.com/AIVIETNAM-AIO-TruongHoangThong/AIO2026-Conquer-Module-01",
  },
  {
    id: 2,
    title: "SiteBotic",
    description: "Production-grade RAG platform that crawls websites, builds vector search knowledge bases, and deploys embeddable AI agents.",
    longDescription: "Production-grade applied AI platform enabling organizations to deploy custom AI agents. Engineered automated Crawl4AI ingestion pipelines, PostgreSQL/pgvector semantic search, and Dramatiq/Redis background workers for reliable knowledge base retrieval.",
    image: "/sitebotic-thumbnail.png",
    tags: [
      "FastAPI",
      "React",
      "TypeScript",
      "pgvector",
      "Dramatiq",
      "Redis",
      "Docker",
    ],
    version: "Production",
    year: "2025",
    category: "Applied AI",
    website: "https://sitebotic.com",
    liveApp: "https://sitebotic.com",
  },
  {
    id: 4,
    title: "Customer 360 Risk Scoring System",
    description: "End-to-end data engineering solution building Customer 360 views and risk analytics with ETL pipelines.",
    longDescription: "Data engineering platform with ETL pipelines for data extraction & transformation, Apache Spark for distributed analytics, Airflow for workflow orchestration, and Metabase BI dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: [
      "Apache Spark",
      "PySpark",
      "Apache Airflow",
      "PostgreSQL",
      "Metabase",
    ],
    version: "University",
    year: "2025",
    category: "Data Engineering",
    github: "https://github.com/23210287thongtruong/customer360-risk",
  },
  {
    id: 5,
    title: "Book Recommendation System",
    description: "Full-stack ML platform implementing collaborative filtering, content-based filtering, and hybrid algorithms.",
    longDescription: "Machine learning recommendation system with collaborative filtering (SVD), content-based filtering (TF-IDF), hybrid engine combining algorithms, and FastAPI REST API with React frontend.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    tags: ["Scikit-learn", "FastAPI", "React", "TypeScript", "Vite"],
    version: "University",
    year: "2025",
    category: "Machine Learning",
    github: "https://github.com/23210287thongtruong/recommendation-system",
  },
  {
    id: 6,
    title: "Pet Clinic Management System",
    description: "Java desktop application with complete CRUD operations for veterinary clinic management using DAO pattern.",
    longDescription: "Desktop application implementing DAO pattern for clean architecture, event-driven GUI with Java Swing, CRUD operations for clinic management, and MySQL database integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    tags: ["Java", "Java Swing", "MySQL", "JDBC", "DAO Pattern"],
    version: "University",
    year: "2025",
    category: "Desktop App",
    github:
      "https://github.com/23210287thongtruong/pet-clinic-management-system",
  },
  {
    id: 7,
    title: "Real-Time Price Tracker (BGU118)",
    description: "Real-time data ingestion platform tracking Bitcoin, gold, and USD-VND rates with automated ETL pipeline.",
    longDescription: "Data pipeline with async API calls using httpx for concurrent data fetching, SQLite with SQLModel ORM for time-series data, React + Chart.js for visualizations, and integration with multiple external APIs.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    tags: ["Python", "httpx", "SQLite", "SQLModel", "React", "Chart.js"],
    version: "University",
    year: "2025",
    category: "Data Pipeline",
    github: "https://github.com/23210287thongtruong/bgu118",
  },
];

const categories = [
  { label: "All Projects", value: "ALL" },
  { label: "AI & Research", value: "AI & Research" },
  { label: "Applied AI", value: "Applied AI" },
  { label: "Data Engineering", value: "Data Engineering" },
  { label: "Machine Learning & Systems", value: "Machine Learning & Systems" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "Machine Learning & Systems") {
      return ["Machine Learning", "Desktop App", "Data Pipeline"].includes(project.category);
    }
    return project.category === activeCategory;
  });

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden tech-grid">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">{"// Portfolio & Works"}</h2>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 dark:text-white mb-6 leading-tight">
                {"Building Production AI Systems"} <br />{"across the Cloud."}
              </h1>
              
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {"Explore my technical journey transitioning from traditional enterprise architecture and data pipelines to end-to-end intelligent applications."}
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter & Projects Bento Grid */}
        <section className="py-16 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.value;
                  const count = cat.value === "ALL" 
                    ? projects.length 
                    : cat.value === "Machine Learning & Systems"
                    ? projects.filter(p => ["Machine Learning", "Desktop App", "Data Pipeline"].includes(p.category)).length
                    : projects.filter(p => p.category === cat.value).length;

                  return (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-white border border-primary shadow-sm"
                          : "bg-zinc-100 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 hover:border-primary/50"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="font-mono text-xs text-zinc-500">
                <span>Displaying: </span>
                <span className="text-zinc-900 dark:text-white font-bold">{filteredProjects.length}</span> projects
              </div>
            </div>

            {/* Bento Mosaic Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${activeCategory === "ALL" ? "lg:grid-cols-12" : "lg:grid-cols-3"} gap-6`}>
              {filteredProjects.map((project) => {
                const isHero = activeCategory === "ALL" && project.id === 2; // SiteBotic Hero
                const isSpotlight = activeCategory === "ALL" && project.id === 8; // Player Style Clustering
                const isPair = activeCategory === "ALL" && (project.id === 3 || project.id === 4); // Research & Data Eng
                
                const colSpanClass = activeCategory === "ALL"
                  ? isHero
                    ? "lg:col-span-8 md:col-span-2"
                    : isSpotlight
                    ? "lg:col-span-4 md:col-span-2"
                    : isPair
                    ? "lg:col-span-6 md:col-span-1"
                    : "lg:col-span-4 md:col-span-1"
                  : "";

                return (
                  <div
                    key={project.id}
                    id={project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                    className={`group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-primary/60 transition duration-300 flex flex-col justify-between overflow-hidden ${colSpanClass}`}
                  >
                    {/* Visual Preview */}
                    <div className={`relative overflow-hidden border-b border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 ${
                      isHero ? "aspect-w-16 aspect-h-8" : "aspect-w-16 aspect-h-9"
                    }`}>
                      <div className="absolute top-3 left-3 z-20 flex gap-1.5 flex-wrap">
                        <span className="bg-primary text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                          {project.category}
                        </span>
                        {project.version === "Production" && (
                          <span className="bg-green-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                            Production
                          </span>
                        )}
                        {project.version === "AIO Research" && (
                          <span className="bg-amber-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                            AIO Research
                          </span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 z-20 bg-black/80 text-zinc-300 text-[10px] font-mono px-2 py-0.5">
                        {project.year}
                      </div>
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                    
                    {/* Content Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm leading-relaxed mb-4">
                          {isHero || isSpotlight ? project.longDescription : project.description}
                        </p>
                        
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-white dark:bg-zinc-900 text-[10px] font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Action Links */}
                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                        {project.demos && project.demos.map((demo) => (
                          <a
                            key={demo.href}
                            href={demo.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 hover:border-primary text-xs font-mono text-primary font-semibold transition duration-200"
                          >
                            <span className="material-icons text-sm">{demo.icon || 'open_in_new'}</span>
                            {demo.label}
                          </a>
                        ))}
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                          >
                            <span className="material-icons text-sm">code</span>
                            GitHub
                          </a>
                        )}
                        {project.website && (
                          <a 
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
                          >
                            <span className="material-icons text-sm">
                              {project.website.includes('youtube.com') || project.website.includes('youtu.be') ? 'play_circle' : 'language'}
                            </span>
                            {project.website.includes('youtube.com') || project.website.includes('youtu.be') ? 'YouTube' : 'Website'}
                          </a>
                        )}
                        {project.liveApp && project.liveApp !== project.website && (
                          <a 
                            href={project.liveApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white hover:bg-primary/90 text-xs font-mono transition duration-200 font-semibold"
                          >
                            <span className="material-icons text-sm">open_in_new</span>
                            Live App
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 dark:text-white mb-6">
                {"Looking for an AI Engineer?"}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10">
                {"I combine software engineering foundations, cloud architecture, and modern AI/ML to build and scale production systems."}
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
      </main>
      
      <Footer />
    </>
  );
}
