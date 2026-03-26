'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';

interface HelpFormData {
  fullName: string;
  email: string;
  state: string;
  issueType: string;
  description: string;
}

const stateOptions = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
].map((s) => ({ value: s, label: s }));

const issueOptions = [
  { value: 'housing', label: 'Housing / Eviction' },
  { value: 'criminal-defense', label: 'Criminal Defense' },
  { value: 'voting', label: 'Voting Rights' },
  { value: 'employment', label: 'Employment / Discrimination' },
  { value: 'business', label: 'Business / Contracts' },
  { value: 'family', label: 'Family Law / Custody' },
  { value: 'police-misconduct', label: 'Police Misconduct' },
  { value: 'immigration', label: 'Immigration' },
  { value: 'consumer', label: 'Consumer Rights' },
  { value: 'other', label: 'Other' },
];

export default function HelpForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelpFormData>();

  const onSubmit = (_data: HelpFormData) => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-background-card border border-gold/30 rounded-[14px] p-8 text-center">
        <CheckCircle size={48} className="text-status-green mx-auto mb-4" />
        <h3 className="font-serif font-bold text-2xl text-white mb-2">Request Submitted</h3>
        <p className="text-dim">
          We have received your information. A legal resource specialist will connect you with
          relevant educational materials and local legal aid organizations within 1-3 business days.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Full Name"
          id="fullName"
          placeholder="Your full name"
          error={errors.fullName?.message}
          {...register('fullName', { required: 'Full name is required' })}
        />

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
        />

        <Select
          label="State"
          id="state"
          placeholder="Select your state"
          options={stateOptions}
          error={errors.state?.message}
          {...register('state', { required: 'State is required' })}
        />

        <Select
          label="Legal Issue Type"
          id="issueType"
          placeholder="Select issue type"
          options={issueOptions}
          error={errors.issueType?.message}
          {...register('issueType', { required: 'Issue type is required' })}
        />

        <Textarea
          label="Brief Description"
          id="description"
          placeholder="Briefly describe your situation..."
          error={errors.description?.message}
          {...register('description', { required: 'Description is required' })}
        />

        <Button type="submit" variant="gold" size="md" className="w-full">
          Submit Request
        </Button>
      </form>

      <div className="mt-6 border-l-4 border-brand-red bg-brand-red/10 rounded-r-lg p-4">
        <p className="text-xs text-dim leading-relaxed">
          <strong className="text-brand-red">Important:</strong> This form connects you with
          educational resources and legal aid organizations. Submitting this form does not create an
          attorney-client relationship. If you are in immediate danger, call 911.
        </p>
      </div>
    </div>
  );
}
