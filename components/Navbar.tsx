"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we should show navigation links
  const shouldShowNav =
    pathname?.startsWith("/features") || pathname === "/about";

  // Navigation items
  const navLinks = [
    { href: "/features", label: "Our Features" },
    { href: "/features/family-tree", label: "Family Tree" },
    { href: "/features/event", label: "Event" },
    { href: "/features/finance", label: "Finance" },
    { href: "/features/heritage-sites", label: "Heritage" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="bg-white w-full fixed top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="w-32 sm:w-40 lg:w-56">
              <img
                src="/assets/images/shristi_logo.png"
                alt="Shristi Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation - Nav Links (shown on features and about pages) */}
          {shouldShowNav && (
            <nav className="hidden lg:flex items-center space-x-1 mx-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors group"
                  >
                    <span
                      className={
                        isActive
                          ? "text-[#5d87ff]"
                          : "text-gray-700 hover:text-[#5d87ff]"
                      }
                    >
                      {link.label}
                    </span>
                    {/* Active indicator slider - animated */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#5d87ff] rounded-full transition-all duration-300 ease-out ${
                        isActive ? "w-12 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Desktop Auth Buttons */}
          <nav className="hidden md:flex items-center space-x-2 ml-auto">
            <a
              href="https://shristiuniverse.com/login"
              className="px-4 py-2 text-sm text-gray-700 hover:text-blue-500 transition-colors"
            >
              <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Login
              </button>
            </a>
            <a href="https://shristiuniverse.com/register">
              <button className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Sign Up
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-blue-500 p-2 relative z-50 bg-white rounded-full border border-gray-200 shadow"
              style={{ minWidth: 40, minHeight: 40 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Desktop Nav Links - Below main navbar on smaller screens */}
        {shouldShowNav && (
          <div className="hidden md:flex lg:hidden border-t border-gray-100 py-2">
            <nav className="flex items-center space-x-1 mx-auto overflow-x-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 text-xs font-medium whitespace-nowrap transition-colors"
                  >
                    <span
                      className={
                        isActive
                          ? "text-[#5d87ff]"
                          : "text-gray-700 hover:text-[#5d87ff]"
                      }
                    >
                      {link.label}
                    </span>
                    {/* Active indicator slider - animated */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#5d87ff] rounded-full transition-all duration-300 ease-out ${
                        isActive ? "w-10 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {/* Nav Links in Mobile Menu (shown on features and about pages) */}
            {shouldShowNav && (
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  Navigation
                </p>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? "text-[#5d87ff] bg-[#5d87ff]/5 font-medium"
                            : "text-gray-700 hover:text-[#5d87ff] hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}

            {/* Auth Links */}
            <nav className="flex flex-col space-y-3">
              <a
                href="https://shristiuniverse.com/login"
                className="px-3 py-2 text-gray-700 hover:text-blue-500 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <div className="px-3 py-2">
                <a
                  href="https://shristiuniverse.com/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="w-full px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Sign Up
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
