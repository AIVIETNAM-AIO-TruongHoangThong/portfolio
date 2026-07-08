"use client";

import Image from 'next/image';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageProvider';

const projects = [
  {
    id: 3,
    title: "Similarity Matching Methods for Images and Texts",
    descriptionKey: "projectSimilarityDescription",
    longDescriptionKey: "projectSimilarityLongDescription",
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
    id: 1,
    title: "Nexus Tech Global",
    descriptionKey: "projectNexusDescription",
    longDescriptionKey: "projectNexusLongDescription",
    image: "/nexus-tech-global-thumbnail.png",
    tags: ["RAG Platforms", "System Architecture", "Backend Engineering"],
    version: "Production",
    year: "2025",
    category: "Company",
    website: "https://nexustechglobal.com",
  },
  {
    id: 2,
    title: "SiteBotic",
    descriptionKey: "projectSiteboticDescription",
    longDescriptionKey: "projectSiteboticLongDescription",
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
    category: "AI & SaaS",
    website: "https://sitebotic.com",
    liveApp: "https://sitebotic.com",
  },
  {
    id: 4,
    title: "Customer 360 Risk Scoring System",
    descriptionKey: "projectCustomer360Description",
    longDescriptionKey: "projectCustomer360LongDescription",
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
    descriptionKey: "projectBookRecDescription",
    longDescriptionKey: "projectBookRecLongDescription",
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
    descriptionKey: "projectPetClinicDescription",
    longDescriptionKey: "projectPetClinicLongDescription",
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
    descriptionKey: "projectPriceTrackerDescription",
    longDescriptionKey: "projectPriceTrackerLongDescription",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    tags: ["Python", "httpx", "SQLite", "SQLModel", "React", "Chart.js"],
    version: "University",
    year: "2025",
    category: "Data Pipeline",
    github: "https://github.com/23210287thongtruong/bgu118",
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden tech-grid">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-primary"></span>
                <h2 className="text-sm font-mono text-primary font-bold uppercase tracking-widest">{/* Portfolio */}</h2>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 dark:text-white mb-8 leading-tight">
                {t('projectsHeroTitleLine1')} <br />{t('projectsHeroTitleLine2')}
              </h1>
              
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {t('projectsHeroDescription')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-24 bg-white dark:bg-zinc-900 relative border-t border-zinc-300 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                return (
                  <div
                    key={project.id}
                    id={project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
                    className="group relative bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 hover:border-primary/50 transition duration-300 flex flex-col h-full"
                  >
                  {/* Project Image */}
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden border-b border-zinc-300 dark:border-zinc-700">
                    <div className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-mono px-2 py-1">
                      {project.version}
                    </div>
                    <div className="absolute top-2 left-2 z-20 bg-primary/80 text-white text-[10px] font-mono px-2 py-1">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition duration-500 z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-gray-500">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-medium text-zinc-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3">
                        {project.descriptionKey ? t(project.descriptionKey) : ''}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => {
                          const normalized = tag.replace(/[^A-Za-z0-9]/g, '');
                          return (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white dark:bg-gray-800 text-[10px] font-mono font-bold text-primary border border-zinc-300 dark:border-zinc-700 uppercase"
                            >
                              {t(`tag_${normalized}`)}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
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
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 hover:border-primary text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-primary transition duration-200"
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
      </main>
      
      <Footer />
    </>
  );
}
