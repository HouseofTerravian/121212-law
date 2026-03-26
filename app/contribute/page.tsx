import Link from 'next/link';
import { getAllContributions } from '@/data/contributions';
import ContributionCard from '@/components/ContributionCard';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Contribute | 121212 Law',
  description: 'Share your legal knowledge and resources with the community.',
};

export default function ContributePage() {
  const contributions = getAllContributions();

  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">Contribute Your Knowledge</h1>
          <p className="text-dim text-lg max-w-2xl leading-relaxed">
            121212 Law is built by the people it serves. Your experiences, research, and local
            knowledge strengthen legal awareness across the entire community.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contributions.map((c) => (
              <ContributionCard key={c.title} contribution={c} />
            ))}
          </div>
          <div className="text-center">
            <Link href="mailto:contribute@121212.law">
              <Button variant="gold" size="lg">
                Submit Your Knowledge
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
