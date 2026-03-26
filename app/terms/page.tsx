import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Terms of Use | 121212 Law',
  description: 'Terms of use for 121212 Law educational platform.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" subtitle="Last updated: January 2025">
      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using 121212 Law (&quot;the Platform&quot;), part of the 121212 Empire,
          you agree to be bound by these Terms of Use. If you do not agree to these terms, do not
          use the Platform. 121212 Law is an educational platform designed to provide legal
          education and awareness.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">2. Educational Purpose Only</h2>
        <p>
          All content on 121212 Law is provided for educational and informational purposes only.
          Nothing on this platform constitutes legal advice, creates an attorney-client
          relationship, or should be relied upon as a substitute for consultation with a licensed
          attorney in your jurisdiction. Always seek professional legal counsel for your specific
          situation.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">3. Use of the Platform</h2>
        <p>
          You agree to use the Platform only for lawful purposes and in accordance with these
          Terms. You may not use the Platform in any way that could damage, disable, or impair
          the Platform or interfere with any other party&apos;s use. You may not attempt to gain
          unauthorized access to any part of the Platform.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">4. User Submissions</h2>
        <p>
          If you submit content to the Platform, including but not limited to stories, analyses,
          or resource submissions, you grant 121212 Law a non-exclusive, royalty-free license to
          use, display, and distribute such content on the Platform. You represent that you have
          the right to submit such content and that it does not violate any third-party rights.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">5. Intellectual Property</h2>
        <p>
          All content on the Platform, including text, graphics, logos, and software, is the
          property of 121212 Law, Part of the 121212 Empire, and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or create derivative
          works without prior written consent.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">6. Disclaimer of Warranties</h2>
        <p>
          The Platform is provided &quot;as is&quot; and &quot;as available&quot; without warranties
          of any kind, either express or implied. We do not warrant that the Platform will be
          uninterrupted, error-free, or free of harmful components. We make no guarantees about the
          accuracy, reliability, or completeness of any content.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">7. Limitation of Liability</h2>
        <p>
          In no event shall 121212 Law, its operators, or affiliates be liable for any indirect,
          incidental, special, consequential, or punitive damages arising from your use of the
          Platform. Our total liability shall not exceed the amount paid by you, if any, for
          accessing the Platform.
        </p>
      </div>

      <div>
        <h2 className="font-serif font-bold text-2xl text-white mb-4">8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective
          immediately upon posting. Your continued use of the Platform after changes constitutes
          acceptance of the modified Terms. We encourage you to review these Terms periodically.
        </p>
      </div>
    </LegalLayout>
  );
}
