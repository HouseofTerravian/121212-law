import Link from 'next/link';
import { getAllContributions } from '@/data/contributions';
import ContributionCard from '@/components/ContributionCard';
import Button from '@/components/ui/Button';

export default function Community() {
  const contributions = getAllContributions();

  return (
    <section className="section-padding bg-background-card/50">
      <div className="container-custom">
        <h2 className="heading-secondary mb-4">The community teaches the community.</h2>
        <p className="text-dim text-lg mb-12 max-w-2xl">
          121212 Law is built by the people it serves. Share your knowledge, experiences, and
          resources to strengthen legal awareness across the community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contributions.map((c) => (
            <ContributionCard key={c.title} contribution={c} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/contribute">
            <Button variant="gold" size="lg">
              Submit Your Knowledge
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
