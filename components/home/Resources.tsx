import { getAllResources } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';

export default function Resources() {
  const resources = getAllResources();

  return (
    <section className="section-padding bg-background-card/50">
      <div className="container-custom">
        <h2 className="heading-secondary mb-4">Legal Resources</h2>
        <p className="text-dim text-lg mb-12 max-w-2xl">
          Trusted organizations fighting for justice. Connect with legal aid, civil rights
          defenders, and advocacy groups.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.name} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
