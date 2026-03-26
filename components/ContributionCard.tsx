import { Card, CardContent } from '@/components/ui/Card';
import type { ContributionType } from '@/data/contributions';

interface ContributionCardProps {
  contribution: ContributionType;
}

export default function ContributionCard({ contribution }: ContributionCardProps) {
  return (
    <Card className="h-full">
      <CardContent>
        <span className="text-4xl mb-4 block">{contribution.emoji}</span>
        <h3 className="font-serif font-bold text-lg text-white mb-2">{contribution.title}</h3>
        <p className="text-dim text-sm leading-relaxed">{contribution.description}</p>
      </CardContent>
    </Card>
  );
}
