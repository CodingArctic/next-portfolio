import "./globals.css";

import { NavbarSimple } from "./components/Navbar.js"

export const metadata = {
  title: "Clyde Geyer",
  description: "Clyde Geyer's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{backgroundColor: "#0a0a0a", color: "#ededed"}}>
      <body className="antialiased">
        <NavbarSimple/>
        {children}
      </body>
    </html>
  );
}
