import Link from 'next/link';

const rightsLinks = [
  { href: '/rights/housing', label: 'Housing Rights' },
  { href: '/rights/criminal-justice', label: 'Criminal Justice' },
  { href: '/rights/voting', label: 'Voting Rights' },
  { href: '/rights/employment', label: 'Employment Law' },
  { href: '/rights/business', label: 'Business Formation' },
  { href: '/rights/family', label: 'Family Law' },
];

const platformLinks = [
  { href: '/resources', label: 'Legal Resources' },
  { href: '/policy', label: 'Policy Watch' },
  { href: '/find-help', label: 'Find Legal Help' },
  { href: '/contribute', label: 'Contribute' },
];

const empireLinks = [
  { href: 'https://121212.black', label: '121212.black', external: true },
  { href: 'https://121212empire.com', label: '121212empire.com', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-background-footer border-t border-white/10">
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif font-bold text-gold text-lg mb-4">Know Your Rights</h3>
            <ul className="space-y-3">
              {rightsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-gold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-gold text-lg mb-4">121212 Empire</h3>
            <ul className="space-y-3">
              {empireLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-l-4 border-brand-red bg-brand-red/10 rounded-r-lg p-4">
          <p className="text-sm text-dim leading-relaxed">
            <strong className="text-brand-red">Educational Disclaimer:</strong> 121212 Law is an
            educational platform. Nothing on this website constitutes legal advice, creates an
            attorney-client relationship, or should be relied upon as a substitute for consultation
            with a licensed attorney in your jurisdiction.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted">
            <p>&copy; 2025 121212 Law. All rights reserved. Educational use only.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-gold transition-colors duration-300">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-gold transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/disclaimer" className="hover:text-gold transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </div>
          <p className="text-sm text-muted">
            Part of the{' '}
            <a
              href="https://121212empire.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors duration-300"
            >
              121212 Empire
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
