import { getAllRights } from '@/data/rights';
import RightsCard from '@/components/RightsCard';

export default function RightsPage() {
  const rights = getAllRights();

  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">Know Your Rights</h1>
          <p className="text-dim text-lg max-w-2xl leading-relaxed">
            Understanding your legal rights is the most powerful tool you have. Explore each
            category to learn what protections exist and how to assert them.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((category) => (
              <RightsCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
