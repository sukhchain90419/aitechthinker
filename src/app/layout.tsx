"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const metadata = {
  title: "AI Tech Thinker",
  description: "Arduino, AI, Coding, Web & App Development Tutorials",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Save dark mode preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/coding", label: "Coding" },
    { href: "/videos", label: "Videos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300">
        {/* Navbar */}
        <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-700 dark:text-blue-400">
              AI Tech Thinker
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === link.href ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-3 py-1 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 border-t dark:border-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block hover:text-blue-600 dark:hover:text-blue-400 ${
                    pathname === link.href ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-3 w-full px-3 py-2 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? "🌙 Dark" : "☀️ Light"}
              </button>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">AI Tech Thinker</h3>
              <p className="text-sm leading-relaxed">
                Learn Arduino, Coding, AI, Web & App Development with tutorials
                and projects made simple.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4 text-lg">
                <a href="#" target="_blank" className="hover:text-blue-400">🌐</a>
                <a href="#" target="_blank" className="hover:text-red-500">📺</a>
                <a href="#" target="_blank" className="hover:text-sky-400">🐦</a>
                <a href="#" target="_blank" className="hover:text-blue-600">📘</a>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} AI Tech Thinker. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
