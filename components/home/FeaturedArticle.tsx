import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';

const policeStopGuide = [
  { num: 1, title: 'Stay Calm', instruction: 'Keep your hands visible. Do not make sudden movements. Speak clearly and politely.' },
  { num: 2, title: 'Identify Yourself', instruction: 'Provide your name and ID if required by your state. You do not have to answer other questions.' },
  { num: 3, title: 'Invoke Your Rights', instruction: 'Clearly state: "I am exercising my right to remain silent." You do not have to consent to searches.' },
  { num: 4, title: 'Do Not Resist', instruction: 'Even if you believe the stop is unlawful, do not physically resist. Challenge it later in court.' },
  { num: 5, title: 'Document Everything', instruction: 'Note officer names, badge numbers, patrol car numbers, and the time and location of the stop.' },
  { num: 6, title: 'File a Complaint', instruction: 'If your rights were violated, file a formal complaint with the department and contact the ACLU or NAACP LDF.' },
];

const sidebarArticles = [
  { title: 'Tenant Rights: What Landlords Cannot Legally Do', href: '/rights/housing', tag: 'Housing' },
  { title: 'Wage Theft: How to Recognize and Fight Back', href: '/rights/employment', tag: 'Employment' },
  { title: 'LLC Formation: Protect Your Business and Your Assets', href: '/rights/business', tag: 'Business' },
];

export default function FeaturedArticle() {
  return (
    <section className="section-padding bg-background-card/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardContent className="p-0">
                <span className="inline-block bg-brand-red/15 text-brand-red text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 border border-brand-red/30">
                  Must Read
                </span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-8">
                  What to Do When You&apos;re Stopped by Police
                </h3>
                <div className="space-y-6">
                  {policeStopGuide.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-gold/15 border border-gold-border flex items-center justify-center">
                        <span className="text-gold font-bold text-sm">{step.num}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-dim text-sm leading-relaxed">{step.instruction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {sidebarArticles.map((article) => (
              <Link key={article.href} href={article.href}>
                <Card className="p-5 mb-6">
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    {article.tag}
                  </span>
                  <h4 className="font-serif font-bold text-white mt-2 leading-snug">
                    {article.title}
                  </h4>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
