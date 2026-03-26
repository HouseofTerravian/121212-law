import { getAllPolicies } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';

export const metadata = {
  title: 'Policy Watch | 121212 Law',
  description: 'Tracking legislation that directly impacts Black communities.',
};

export default function PolicyPage() {
  const policies = getAllPolicies();

  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">Policy Watch</h1>
          <p className="text-dim text-lg max-w-2xl leading-relaxed mb-6">
            Tracking legislation that directly impacts Black communities. Stay informed on the
            policies shaping your rights, your access, and your future.
          </p>
          <p className="text-muted text-sm max-w-2xl leading-relaxed">
            Policy Watch monitors federal, state, and local legislation relevant to the legal
            rights of Black communities. We track the status, scope, and impact of each policy so
            you can stay informed and take action.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <PolicyCard key={policy.slug} policy={policy} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
