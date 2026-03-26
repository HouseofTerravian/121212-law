export interface ContributionType {
  emoji: string;
  title: string;
  description: string;
}

const contributionTypes: ContributionType[] = [
  {
    emoji: '\u{1F4D6}',
    title: 'Know Your Rights Stories',
    description: 'Share real experiences navigating legal situations. Your story helps others understand what to expect and how to protect themselves in similar circumstances.',
  },
  {
    emoji: '\u{1F3DB}\u{FE0F}',
    title: 'Local Ordinance Breakdowns',
    description: 'Break down city and county laws in plain language. Help your community understand local regulations that affect housing, policing, business, and daily life.',
  },
  {
    emoji: '\u{1F4CA}',
    title: 'Policy Analyses',
    description: 'Analyze pending legislation and its potential impact on Black communities. Your analysis helps the community understand and advocate for meaningful policy change.',
  },
  {
    emoji: '\u{1F4E5}',
    title: 'Resource Submissions',
    description: 'Submit legal organizations, pro-bono attorneys, legal aid clinics, and advocacy groups serving your area. Help build the most comprehensive legal resource directory.',
  },
];

export function getAllContributions(): ContributionType[] {
  return contributionTypes;
}
