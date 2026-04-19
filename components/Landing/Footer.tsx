"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#2d3748] py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Srishti Universe</h4>
            <p className="text-white/70 text-sm mb-4">
              Connecting generations through technology and shared heritage.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578171212524"
                className="text-white/70 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/Srishti.universe/"
                className="text-white/70 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features/family-tree"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Family Tree
                </Link>
              </li>
              <li>
                <Link
                  href="/features/event"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/features/finance"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/features/heritage-sites"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://shristiuniverse.com/legal/privacy-policy/"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Srishti Universe. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
