export interface Policy {
  slug: string;
  name: string;
  status: 'active' | 'at-risk' | 'passed' | 'pending';
  scope: string;
  description: string;
  impact: string;
}

const policies: Policy[] = [
  {
    slug: 'john-lewis-voting-rights',
    name: 'John R. Lewis Voting Rights Advancement Act',
    status: 'active',
    scope: 'Federal',
    description: 'Restores and strengthens portions of the Voting Rights Act of 1965, requiring federal approval for changes to voting laws in jurisdictions with a history of discrimination.',
    impact: 'Would protect millions of Black voters from discriminatory voting restrictions and redistricting practices across multiple states.',
  },
  {
    slug: 'george-floyd-policing-act',
    name: 'George Floyd Justice in Policing Act',
    status: 'at-risk',
    scope: 'Federal',
    description: 'Addresses police misconduct, excessive force, and racial bias in policing. Includes provisions for banning chokeholds, ending qualified immunity, and creating a national police misconduct registry.',
    impact: 'Would fundamentally transform accountability in law enforcement and address systemic patterns of excessive force in Black communities.',
  },
  {
    slug: 'fair-chance-housing',
    name: 'Fair Chance Housing Ordinances',
    status: 'passed',
    scope: 'State / Local',
    description: 'Prohibits landlords from conducting criminal background checks during the initial rental application process, giving formerly incarcerated individuals a fair chance at securing housing.',
    impact: 'Directly benefits the disproportionate number of Black individuals affected by mass incarceration who face housing discrimination after serving their sentences.',
  },
  {
    slug: 'crown-act',
    name: 'CROWN Act',
    status: 'pending',
    scope: 'Federal + 24 States',
    description: 'Creating a Respectful and Open World for Natural Hair. Prohibits discrimination based on hair texture and protective hairstyles in workplaces and schools.',
    impact: 'Protects Black individuals from race-based hair discrimination that has led to job losses, school suspensions, and denied opportunities nationwide.',
  },
];

export function getAllPolicies(): Policy[] {
  return policies;
}

export function getPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
