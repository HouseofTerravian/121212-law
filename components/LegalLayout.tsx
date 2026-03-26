interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <>
      <section className="section-padding pb-8 bg-background-card">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">{title}</h1>
          {subtitle && (
            <p className="text-dim text-lg max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-invert max-w-none space-y-8 text-dim leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
