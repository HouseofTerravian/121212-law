import { getAllRights } from '@/data/rights';
import RightsCard from '@/components/RightsCard';

export default function RightsGrid() {
  const rights = getAllRights();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary mb-4">Know Your Rights</h2>
        <p className="text-dim text-lg mb-12 max-w-2xl">
          Understanding your legal rights is the foundation of protecting yourself and your
          community. Explore the categories below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((category) => (
            <RightsCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
