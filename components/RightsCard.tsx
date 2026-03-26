import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import type { RightsCategory } from '@/data/rights';

interface RightsCardProps {
  category: RightsCategory;
}

export default function RightsCard({ category }: RightsCardProps) {
  return (
    <Card className="group h-full flex flex-col">
      <CardContent className="flex-1 flex flex-col">
        <span className="text-4xl mb-4 block">{category.emoji}</span>
        <h3 className="font-serif font-bold text-xl text-white mb-2">{category.title}</h3>
        <p className="text-dim text-sm leading-relaxed mb-4 flex-1">{category.description}</p>
        <Link
          href={`/rights/${category.slug}`}
          className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors duration-300 group-hover:gap-3"
        >
          Learn More
          <ArrowRight size={16} />
        </Link>
      </CardContent>
    </Card>
  );
}
