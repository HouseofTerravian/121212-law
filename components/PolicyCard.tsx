import { Card, CardContent } from '@/components/ui/Card';
import type { Policy } from '@/data/policies';

const statusConfig: Record<Policy['status'], { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-status-green/15 text-status-green border-status-green/30' },
  'at-risk': { label: 'At Risk', className: 'bg-status-red/15 text-status-red border-status-red/30' },
  passed: { label: 'Passed', className: 'bg-gold/15 text-gold border-gold-border' },
  pending: { label: 'Pending', className: 'bg-status-slate/15 text-status-slate border-status-slate/30' },
};

interface PolicyCardProps {
  policy: Policy;
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  const status = statusConfig[policy.status];

  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${status.className}`}
          >
            {status.label}
          </span>
          <span className="text-xs text-muted">{policy.scope}</span>
        </div>
        <h3 className="font-serif font-bold text-lg text-white mb-2">{policy.name}</h3>
        <p className="text-dim text-sm leading-relaxed mb-4">{policy.description}</p>
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Impact</p>
          <p className="text-sm text-dim leading-relaxed">{policy.impact}</p>
        </div>
      </CardContent>
    </Card>
  );
}
