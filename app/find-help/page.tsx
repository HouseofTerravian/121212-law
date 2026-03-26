import HelpForm from '@/components/HelpForm';

export const metadata = {
  title: 'Find Legal Help | 121212 Law',
  description: 'Connect with legal aid organizations and educational resources in your area.',
};

export default function FindHelpPage() {
  return (
    <>
      <section className="section-padding pb-8">
        <div className="container-custom">
          <h1 className="heading-primary mb-4">Find Legal Help</h1>
          <p className="text-dim text-lg max-w-2xl leading-relaxed">
            We connect you with educational resources and legal aid organizations in your area.
            Fill out the form below and our team will point you toward the right support.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-custom max-w-2xl">
          <div className="border-l-4 border-brand-red bg-brand-red/10 rounded-r-lg p-4 mb-8">
            <p className="text-sm text-dim leading-relaxed">
              <strong className="text-brand-red">Educational Disclaimer:</strong> 121212 Law is an
              educational platform. Submitting this form does not create an attorney-client
              relationship. Nothing on this platform constitutes legal advice. If you are in
              immediate danger, call 911.
            </p>
          </div>
          <HelpForm />
        </div>
      </section>
    </>
  );
}
