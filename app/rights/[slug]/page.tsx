import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { getAllRights, getRightsBySlug } from '@/data/rights';
import Button from '@/components/ui/Button';

export function generateStaticParams() {
  return getAllRights().map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getRightsBySlug(params.slug);
  if (!category) return {};
  return {
    title: `${category.title} | 121212 Law`,
    description: category.description,
  };
}

export default function RightsDetailPage({ params }: { params: { slug: string } }) {
  const category = getRightsBySlug(params.slug);
  if (!category) notFound();

  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <Link
            href="/rights"
            className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Know Your Rights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{category.emoji}</span>
            <h1 className="heading-primary">{category.title}</h1>
          </div>
          <p className="text-dim text-lg max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6 mb-16">
            {category.content.map((paragraph, i) => (
              <p key={i} className="text-dim leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-background-card border border-white/10 rounded-[14px] p-8 mb-16">
            <h2 className="font-serif font-bold text-2xl text-white mb-6">Key Points</h2>
            <ul className="space-y-4">
              {category.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-dim leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gold/10 border border-gold-border rounded-[14px] p-8 text-center">
            <h3 className="font-serif font-bold text-2xl text-white mb-3">Need Legal Help?</h3>
            <p className="text-dim mb-6">
              Connect with legal aid organizations and educational resources in your area.
            </p>
            <Link href="/find-help">
              <Button variant="gold" size="lg">
                Find Legal Help
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
