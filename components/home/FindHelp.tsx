import { Shield, DollarSign, Clock, MapPin } from 'lucide-react';
import HelpForm from '@/components/HelpForm';

const bulletPoints = [
  { icon: Shield, text: 'Confidential and secure' },
  { icon: DollarSign, text: 'No income requirement' },
  { icon: Clock, text: 'Response within 1-3 business days' },
  { icon: MapPin, text: 'Resources available in all 50 states + DC' },
];

export default function FindHelp() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="heading-secondary mb-4">Need legal help?</h2>
            <p className="text-dim text-lg mb-8 leading-relaxed">
              We connect you with educational resources and legal aid organizations in your area.
              Fill out the form and our team will point you toward the right support.
            </p>
            <ul className="space-y-4">
              {bulletPoints.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold-border flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <span className="text-dim">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HelpForm />
          </div>
        </div>
      </div>
    </section>
  );
}
