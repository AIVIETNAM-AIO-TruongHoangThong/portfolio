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
  title: 'Thong Truong | AI Engineer',
  description:
    'Software engineer building production AI systems—combining foundational machine learning with scalable backend architecture and enterprise cloud integration.',

  keywords: [
    'AI Engineer',
    'Software Engineer',
    'Azure AI',
    'Machine Learning',
    'Deep Learning',
    'GenAI',
    'Computer Vision',
    'NLP',
    'AI Systems',
    'Cloud',
    'AI Solution Architecture',
    'Thong Truong'
  ],
  authors: [{ name: 'Thong Truong' }],
  creator: 'Thong Truong',
  openGraph: {
    title: 'Thong Truong | AI Engineer',
    description:
      'Software engineer building production AI systems—combining foundational machine learning with scalable backend architecture and enterprise cloud integration.',
    url: 'https://thongtruong.com',
    siteName: 'Thong Truong - Portfolio',
    images: [
      {
        url: 'https://thongtruong.com/profile.jpg',
        width: 400,
        height: 533,
        alt: 'Thong Truong | AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thong Truong | AI Engineer',
    description:
      'Software engineer building production AI systems—combining foundational machine learning with scalable backend architecture and enterprise cloud integration.',
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
              "jobTitle": "AI Engineer",
              "description": "Software engineer building production AI systems—combining foundational machine learning with scalable backend architecture and enterprise cloud integration.",
              "url": "https://thongtruong.com",
              "sameAs": [
                "https://github.com/AIVIETNAM-AIO-TruongHoangThong",
                "https://www.linkedin.com/in/thongtr/"
              ],
                "knowsAbout": [
                "AI Engineering",
                "Software Engineering",
                "Machine Learning",
                "Deep Learning",
                "GenAI",
                "Computer Vision",
                "NLP",
                "AI Systems",
                "Cloud",
                "Azure"
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
        {children}
      </body>
    </html>
  );
}