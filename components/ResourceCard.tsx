import { Card, CardContent } from '@/components/ui/Card';
import { ExternalLink } from 'lucide-react';
import type { LegalResource } from '@/data/resources';

interface ResourceCardProps {
  resource: LegalResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 flex flex-col">
        <span className="text-4xl mb-4 block">{resource.emoji}</span>
        <h3 className="font-serif font-bold text-lg text-white mb-2">{resource.name}</h3>
        <p className="text-dim text-sm leading-relaxed mb-3 flex-1">{resource.description}</p>
        <p className="text-xs text-muted mb-4">{resource.focus}</p>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors duration-300"
        >
          Visit
          <ExternalLink size={14} />
        </a>
      </CardContent>
    </Card>
  );
}
