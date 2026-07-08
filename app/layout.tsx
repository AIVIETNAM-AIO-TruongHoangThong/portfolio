import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './components/LanguageProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thong Truong - AI/ML Engineer | Machine Learning & Backend Development',
  description:
    'AI/ML Engineer and Backend Developer specializing in Machine Learning, Deep Learning, and backend systems. Bilingual (Japanese/English) developer with dual degrees in IT and Japanese Studies.',

  keywords: [
    'AI/ML Engineer',
    'Backend Developer',
    'Machine Learning',
    'Deep Learning',
    'Backend Development',
    'Data Pipelines',
    'LLM Systems',
    'Python',
    'FastAPI',
    'PyTorch',
    'Bilingual Developer',
    'Japanese/English',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - AI/ML Engineer | Machine Learning & Backend Development',
    description:
      'AI/ML Engineer and Backend Developer specializing in Machine Learning, Deep Learning, and backend systems. Bilingual (Japanese/English) developer with dual degrees in IT and Japanese Studies.',
    url: 'https://thongtruong.com',
    siteName: 'Thong Truong - Portfolio',
    images: [
      {
        url: 'https://thongtruong.com/profile.jpg',
        width: 400,
        height: 533,
        alt: 'Thong Truong - AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thong Truong",
              "jobTitle": "AI/ML Engineer | Machine Learning & Backend Development",
              "description": "AI/ML Engineer and Backend Developer specializing in Machine Learning, Deep Learning, and backend systems. Bilingual (Japanese/English) developer with dual degrees in IT and Japanese Studies.",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/thongtr-dev",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "Machine Learning",
                "Backend Development",
                "Data Pipelines",
                "LLM Systems",
                "Python",
                "FastAPI",
                "PyTorch",
                "Vector Search",
                "Generative AI",
                "Japanese/English Bilingual"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "AI Engineer",
                "occupationalCategory": "Engineering"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}