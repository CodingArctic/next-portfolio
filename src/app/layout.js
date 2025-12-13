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
        <link rel="preconnect" href="https://clyde.biz" />
        <style dangerouslySetInnerHTML={{__html: `
          :root { --background: #0a0a0a; --foreground: #ededed; }
          body { background: #0a0a0a; color: #ededed; margin: 0; font-family: var(--font-inter), Inter, sans-serif; }
        `}} />
      </head>
      <body className="antialiased">
        <NavbarSimple/>
        {children}
      </body>
    </html>
  );
}
