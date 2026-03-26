import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy | 121212 Law',
  description: 'Privacy policy for 121212 Law educational platform.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: January 2025">
      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">1. Information We Collect</h2>
        <p>
          When you use our Find Legal Help form, we collect: your full name, email address, state
          of residence, legal issue type, and a brief description of your situation. We may also
          collect usage data such as pages visited, time spent on the Platform, and referral
          sources through analytics tools.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">2. How We Use Your Information</h2>
        <p>
          Information submitted through the help form is used solely to connect you with relevant
          educational resources and legal aid organizations. We do not sell, rent, or share your
          personal information with third parties for marketing purposes. Usage data helps us
          improve the Platform and understand how our community engages with educational content.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">3. No Attorney-Client Relationship</h2>
        <p>
          Submitting information through any form on this Platform does not create an
          attorney-client relationship. 121212 Law is an educational platform, not a law firm. We
          do not provide legal advice or legal representation. Information you provide is used to
          direct you toward appropriate educational resources and legal aid organizations.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">4. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. However, no method of
          electronic transmission or storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">5. Cookies and Tracking</h2>
        <p>
          The Platform may use cookies and similar technologies to enhance your experience and
          collect usage data. You can control cookie settings through your browser. Disabling
          cookies may affect certain features of the Platform.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">6. Third-Party Links</h2>
        <p>
          The Platform contains links to external organizations and resources. We are not
          responsible for the privacy practices or content of these external sites. We encourage
          you to review the privacy policies of any third-party sites you visit.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated effective date. Your continued use of the Platform after changes
          constitutes acceptance of the updated policy.
        </p>
      </div>
    </LegalLayout>
  );
}
