import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Spectral, JetBrains_Mono, Bricolage_Grotesque } from 'next/font/google';
import { ClientLayout } from '@/components/client-layout';

config.autoAddCss = false;

const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-spectral',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Isaac Beale's Portfolio",
  description: "Software engineer portfolio website for Isaac Beale. Isaac Beale has an M.S in Software Engineering with a focus in cybersecurity along with a B.S. in Industrial Engineering with a minor in Computer Science. He is currently in pursuit of an M.S. in Software Engineering at Arizona State University. This website provides background information about Isaac including his previous education, employment, and software projects he has written on the side.",
  metadataBase: new URL('https://www.isaacbeale.com'),
  openGraph: {
    title: "Isaac Beale's Portfolio",
    description: "Software engineer portfolio website for Isaac Beale. Isaac Beale has an M.S in Software Engineering with a focus in cybersecurity along with a B.S. in Industrial Engineering with a minor in Computer Science.",
    url: 'https://isaacbeale.com/',
    siteName: 'Isaac Beale',
    images: [
      {
        url: '/images/ogImage.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac Beale',
    description: 'Software engineer portfolio website for Isaac Beale.',
    images: ['/images/ogImage.png'],
    site: '@ibeale',
    creator: '@ibeale',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spectral.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable}`}>
      <body className="antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
