'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/rights', label: 'Know Your Rights' },
  { href: '/resources', label: 'Resources' },
  { href: '/policy', label: 'Policy' },
  { href: '/find-help', label: 'Find Legal Help' },
  { href: '/contribute', label: 'Contribute' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[68px] bg-background/95 backdrop-blur border-b border-white/10">
      <div className="container-custom h-full flex items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <span className="text-gold font-serif font-bold text-xl">121212</span>
          <span className="text-white font-serif text-xl">.law</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-dim hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/find-help">
            <Button variant="gold" size="sm">
              Get Help Now
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur border-b border-white/10">
          <nav className="container-custom px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dim hover:text-gold transition-colors duration-300 py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/find-help" onClick={() => setMobileOpen(false)}>
              <Button variant="gold" size="sm" className="w-full mt-2">
                Get Help Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
