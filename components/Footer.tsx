// components/Footer.tsx
'use client';

import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-10 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          WanderWise ✈️
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Your smart companion for discovering the world — powered by AI.
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-500 transition">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-500 transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-700 transition">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Contact" className="text-gray-500 hover:text-green-600 transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} WanderWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
