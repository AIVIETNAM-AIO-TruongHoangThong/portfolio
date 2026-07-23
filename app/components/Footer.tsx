'use client';

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 border-t border-zinc-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#3B82F6 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-zinc-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-primary flex items-center justify-center">
                <span className="font-mono font-bold text-white">&gt;_</span>
              </div>
              <span className="font-display font-medium text-2xl tracking-tighter">
                Thong Truong
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 font-display">
              {t('initializeCollaboration')}
            </h3>
            <p className="text-gray-400 max-w-sm mb-8 font-light text-sm">
              {t('availableForFreelance')}
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/thongtr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-primary hover:bg-primary/20 hover:text-primary flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">IN</span>
              </a>
              <a
                href="https://github.com/AIVIETNAM-AIO-TruongHoangThong"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-primary hover:bg-primary/20 hover:text-primary flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">GH</span>
              </a>
              <a
                href="https://www.youtube.com/@thongtruongnhaonhao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-red-500 hover:bg-red-500/20 hover:text-red-500 flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">YT</span>
              </a>
              <a
                href="https://zalo.me/84859864079"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/20 hover:text-blue-500 flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">ZL</span>
              </a>
              <a
                href="https://wa.me/84859864079"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-700 hover:border-green-500 hover:bg-green-500/20 hover:text-green-500 flex items-center justify-center transition duration-300"
              >
                <span className="text-xs font-bold font-mono">WA</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold font-mono mb-6 text-primary uppercase tracking-widest">
              {t('sitemap')}
            </h4>
            <ul className="space-y-3 text-gray-400 font-mono text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-primary">&gt;</span> {t('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-primary">&gt;</span> {t('projects')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cv"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-primary">&gt;</span> {t('cv')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span className="text-primary">&gt;</span> {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold font-mono mb-6 text-primary uppercase tracking-widest">
              {t('contactInfo')}
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group cursor-pointer">
                <span className="material-icons text-primary text-sm mt-1 group-hover:animate-bounce">
                  email
                </span>
                <a
                  href="mailto:contact@thongtruong.com"
                  className="hover:text-white transition font-mono text-xs"
                >
                  contact@thongtruong.com
                </a>
              </li>
              <li className="flex items-start gap-3 group cursor-pointer">
                <span className="material-icons text-primary text-sm mt-1 group-hover:animate-bounce">
                  phone
                </span>
                <a
                  href="tel:+84859864079"
                  className="hover:text-white transition font-mono text-xs"
                >
                  (+84) 85 986 4079
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm mt-1">
                  place
                </span>
                <span className="font-mono text-xs">{t('location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
          <p>
            © {new Date().getFullYear()} Thong Truong. {t('systemRightsReserved')}
          </p>
          <p>
            {t('executedWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}
