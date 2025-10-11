import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
