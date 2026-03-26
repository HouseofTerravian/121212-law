import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] opacity-[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        {'\u2696\uFE0F'}
      </span>

      <div className="container-custom px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold-border rounded-full px-4 py-2 mb-8">
            <span className="text-gold text-sm font-medium">121212 Empire</span>
            <span className="text-muted text-sm">&mdash;</span>
            <span className="text-dim text-sm">Legal Education</span>
          </div>

          <h1 className="heading-primary mb-6">
            Knowledge is Your
            <br />
            <span className="text-gradient-gold">First Defense.</span>
          </h1>

          <p className="text-dim text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-balance">
            Empowering Black communities with the legal knowledge to protect themselves, their
            families, and their futures. Know your rights. Demand justice. Build power.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/rights">
              <Button variant="gold" size="lg">
                Know Your Rights
              </Button>
            </Link>
            <Link href="/find-help">
              <Button variant="outline" size="lg">
                Find Legal Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
