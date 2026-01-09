"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Desktop Navigation */}
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
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
