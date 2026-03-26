import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Disclaimer | 121212 Law',
  description: 'Legal disclaimer for 121212 Law educational platform.',
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" subtitle="Please read this disclaimer carefully.">
      <div className="border-l-4 border-brand-red bg-brand-red/10 rounded-r-lg p-6 mb-8">
        <p className="text-white font-semibold text-lg">
          121212 Law is an educational platform. Nothing on this website constitutes legal advice.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">1. Educational Platform Disclaimer</h2>
        <p>
          121212 Law is an educational platform designed to provide general legal information and
          awareness to the public. All content, including articles, guides, policy analyses, and
          resource listings, is provided strictly for educational and informational purposes. This
          platform is not a law firm, does not employ attorneys to provide legal services, and does
          not offer legal advice of any kind.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">2. No Legal Advice</h2>
        <p>
          Nothing on this platform should be construed as legal advice. The information provided
          is general in nature and may not apply to your specific circumstances. Laws vary by
          jurisdiction and change frequently. Do not act or refrain from acting based solely on
          information found on this Platform. Always consult with a qualified, licensed attorney
          in your jurisdiction before making any legal decisions.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">3. No Attorney-Client Relationship</h2>
        <p>
          Your use of this Platform, including submitting information through our forms or
          contacting us, does not create an attorney-client relationship between you and 121212
          Law, its operators, contributors, or any affiliated entity. No confidential or
          attorney-client relationship is formed by your use of this Platform.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">4. Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, 121212 Law makes no
          representations or warranties regarding the accuracy, completeness, or timeliness of
          any information on this Platform. Laws and regulations change frequently, and
          information may become outdated. We are not responsible for errors or omissions in the
          content provided.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">5. External Resources</h2>
        <p>
          Links to external organizations and resources are provided for convenience only. 121212
          Law does not endorse, guarantee, or assume responsibility for any external content,
          services, or organizations. Inclusion of a resource does not constitute a recommendation
          or endorsement.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">6. Emergency Contacts</h2>
        <p className="mb-4">
          If you are experiencing a legal emergency or immediate threat to your safety, please
          contact the appropriate authorities and organizations immediately:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-brand-red font-bold">&bull;</span>
            <span>
              <strong className="text-white">Emergency Services:</strong> Call 911
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold font-bold">&bull;</span>
            <span>
              <strong className="text-white">ACLU:</strong>{' '}
              <a
                href="https://aclu.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                aclu.org
              </a>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold font-bold">&bull;</span>
            <span>
              <strong className="text-white">NAACP Legal Defense Fund:</strong>{' '}
              <a
                href="https://naacpldf.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors duration-300"
              >
                naacpldf.org
              </a>
            </span>
          </li>
        </ul>
      </div>
    </LegalLayout>
  );
}
