import { getAllResources } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';

export const metadata = {
  title: 'Legal Resources | 121212 Law',
  description: 'Trusted legal organizations fighting for justice and civil rights.',
};

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">Legal Resources</h1>
          <p className="text-dim text-lg max-w-2xl leading-relaxed">
            Trusted organizations fighting for justice. These legal aid groups, civil rights
            defenders, and advocacy organizations serve communities nationwide.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.name} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
