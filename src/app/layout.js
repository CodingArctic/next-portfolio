import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavbarSimple } from "./components/Navbar.js"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clyde Geyer",
  description: "Clyde Geyer's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarSimple/>
        {children}
      </body>
    </html>
  );
}
