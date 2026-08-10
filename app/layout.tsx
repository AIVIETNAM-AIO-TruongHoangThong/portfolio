import type { Metadata } from 'next';
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Thong Truong - Machine Learning Engineer',
  description:
    'Machine Learning Engineer specializing in Deep Learning, Computer Vision, and NLP. Focused on building, productionizing, and optimizing end-to-end AI systems with robust MLOps pipelines.',

  keywords: [
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'MLOps',
    'AI Systems',
    'LLM',
    'Python',
    'PyTorch',
    'FastAPI',
    'Bilingual Developer',
    'Japanese/English',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong - Machine Learning Engineer',
    description:
      'Machine Learning Engineer specializing in Deep Learning, Computer Vision, and NLP. Focused on building, productionizing, and optimizing end-to-end AI systems with robust MLOps pipelines.',
    url: 'https://thongtruong.com',
    siteName: 'Thong Truong - Portfolio',
    images: [
      {
        url: 'https://thongtruong.com/profile.jpg',
        width: 400,
        height: 533,
        alt: 'Thong Truong - Machine Learning Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thong Truong - Machine Learning Engineer',
    description:
      'Machine Learning Engineer specializing in Deep Learning, Computer Vision, and NLP. Focused on building, productionizing, and optimizing end-to-end AI systems with robust MLOps pipelines.',
    images: ['https://thongtruong.com/profile.jpg'],
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
              "jobTitle": "Machine Learning Engineer",
              "description": "Machine Learning Engineer specializing in Deep Learning, Computer Vision, and NLP. Focused on building, productionizing, and optimizing end-to-end AI systems with robust MLOps pipelines.",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/AIVIETNAM-AIO-TruongHoangThong",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "NLP",
                "MLOps",
                "Python",
                "PyTorch",
                "FastAPI",
                "Generative AI",
                "Japanese/English Bilingual"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Machine Learning Engineer",
                "occupationalCategory": "Engineering"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}