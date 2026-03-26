import { getAllPolicies } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';

export default function PolicyWatch() {
  const policies = getAllPolicies();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="heading-secondary mb-4">Policy Watch</h2>
        <p className="text-dim text-lg mb-12 max-w-2xl">
          Tracking legislation that directly impacts Black communities. Stay informed on the
          policies shaping your rights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy) => (
            <PolicyCard key={policy.slug} policy={policy} />
          ))}
        </div>
      </div>
    </section>
  );
}
