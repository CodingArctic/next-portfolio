import "./globals.css";
import localFont from 'next/font/local';

import { NavbarSimple } from "./components/Navbar.js"

const inter = localFont({
  src: '../../public/fonts/Inter-VariableFont.ttf',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata = {
  title: "Clyde Geyer",
  description: "Clyde Geyer's Portfolio Website",
  metadataBase: new URL('https://clyde.biz'),
  openGraph: {
    title: "Clyde Geyer",
    description: "Clyde Geyer's Portfolio Website",
    images: ['/opengraph-image.png'],
    url: 'https://clyde.biz',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} style={{backgroundColor: "#0a0a0a", color: "#ededed"}}>
      <head>
        <link rel="preload" as="image" href="/images/projects/golf-640w.webp" imageSrcSet="/images/projects/golf-640w.webp 640w, /images/projects/golf-1024w.webp 1024w, /images/projects/golf.webp 1200w" imageSizes="(max-width: 768px) 100vw, 672px" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/projects/ischool-640w.webp" imageSrcSet="/images/projects/ischool-640w.webp 640w, /images/projects/ischool-1024w.webp 1024w, /images/projects/ischool.webp 1200w" imageSizes="(max-width: 768px) 100vw, 672px" fetchPriority="high" />
      </head>
      <body className="antialiased">
        <NavbarSimple/>
        {children}
      </body>
    </html>
  );
}
