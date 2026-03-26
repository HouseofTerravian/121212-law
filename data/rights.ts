export interface RightsCategory {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  content: string[];
  keyPoints: string[];
}

const rightsCategories: RightsCategory[] = [
  {
    slug: 'housing',
    emoji: '\u{1F3E0}',
    title: 'Housing Rights',
    description: 'Fair housing, tenant protections, eviction defense, and your right to safe, discrimination-free housing.',
    content: [
      'The Fair Housing Act of 1968 prohibits discrimination in housing based on race, color, national origin, religion, sex, familial status, and disability. Despite these protections, housing discrimination remains one of the most pervasive civil rights issues in the United States, particularly affecting Black communities.',
      'Tenant protections vary by state but generally include the right to habitable living conditions, protection from retaliatory evictions, and the right to due process before being removed from your home. Many states require landlords to provide written notice and go through formal court proceedings before evicting a tenant.',
      'Eviction defense is critical knowledge for every renter. You have the right to receive proper notice, appear in court, present your case, and in many jurisdictions, access free legal representation. Knowing these rights can mean the difference between keeping and losing your home.',
      'Redlining and its legacy continue to shape housing access. Understanding how systemic discrimination has affected property values, lending practices, and neighborhood investment helps contextualize current housing challenges and informs advocacy for equitable policy reform.',
    ],
    keyPoints: [
      'The Fair Housing Act protects against discrimination based on race, color, religion, sex, national origin, familial status, and disability',
      'Landlords must provide habitable living conditions and cannot retaliate against tenants who report violations',
      'Eviction requires proper legal notice and court proceedings in most states',
      'You have the right to request reasonable accommodations for disabilities',
      'Housing discrimination complaints can be filed with HUD at no cost',
      'Many cities offer free legal representation for tenants facing eviction',
    ],
  },
  {
    slug: 'criminal-justice',
    emoji: '\u{2696}\u{FE0F}',
    title: 'Criminal Justice',
    description: 'Your rights during police stops, searches, arrests, and navigating the criminal justice system.',
    content: [
      'The Fourth Amendment protects you from unreasonable searches and seizures. Police generally need a warrant, your consent, or probable cause to search your person, vehicle, or home. Understanding when and how to assert these rights is essential for protecting yourself during encounters with law enforcement.',
      'During a traffic stop, you have the right to remain silent beyond providing identification and vehicle documentation. You do not have to consent to a vehicle search. If an officer asks to search your car, you can clearly and calmly state that you do not consent to the search.',
      'If you are arrested, you have the right to remain silent and the right to an attorney. These Miranda rights must be read to you before any custodial interrogation. Anything you say can and will be used against you in court. Exercise your right to remain silent until you have legal representation.',
      'The criminal justice system disproportionately impacts Black communities. From policing practices to sentencing disparities, understanding the systemic nature of these challenges is the first step toward advocacy and reform. Knowledge of your rights is your most powerful tool.',
    ],
    keyPoints: [
      'You have the right to remain silent during any police encounter',
      'Officers need a warrant, consent, or probable cause to search your property',
      'You can refuse consent to a vehicle search during a traffic stop',
      'If arrested, invoke your right to an attorney immediately',
      'You have the right to record police interactions in public spaces',
      'Excessive force by law enforcement is a violation of your civil rights',
    ],
  },
  {
    slug: 'voting',
    emoji: '\u{1F5F3}\u{FE0F}',
    title: 'Voting Rights',
    description: 'Voter ID laws, registration rights, polling access, and protecting your voice in democracy.',
    content: [
      'The Voting Rights Act of 1965 was landmark legislation that prohibited racial discrimination in voting. While the Supreme Court weakened key provisions in 2013, the fight to protect voting access continues. Understanding current voter ID laws, registration deadlines, and your rights at the polls is fundamental to civic participation.',
      'Voter ID requirements vary significantly by state. Some states require photo identification, others accept non-photo ID, and some have no ID requirement at all. If you lack proper ID, most states offer provisional ballots that allow you to vote and verify your identity later.',
      'Voter suppression tactics continue to evolve, from polling place closures in minority communities to purging voter rolls. Being aware of these tactics helps you prepare and ensures your vote counts. Check your voter registration status well before Election Day.',
      'Early voting, mail-in ballots, and same-day registration are expanding access in many states. Know the options available in your state and plan your voting strategy in advance. If you experience any issues at the polls, document everything and contact a voter protection hotline.',
    ],
    keyPoints: [
      'You have the right to vote without intimidation or harassment',
      'Provisional ballots are available if there are questions about your eligibility',
      'Voter ID requirements vary by state; check your state laws before Election Day',
      'Employers must allow reasonable time off to vote in most states',
      'You can report voter suppression to the DOJ Civil Rights Division',
      'Many states offer early voting and no-excuse mail-in voting options',
    ],
  },
  {
    slug: 'employment',
    emoji: '\u{1F4BC}',
    title: 'Employment Law',
    description: 'Protection against workplace discrimination, wrongful termination, wage theft, and harassment.',
    content: [
      'Title VII of the Civil Rights Act of 1964 prohibits employment discrimination based on race, color, religion, sex, and national origin. This covers hiring, firing, promotions, pay, and all terms and conditions of employment. If you believe you have been discriminated against, you can file a charge with the Equal Employment Opportunity Commission (EEOC).',
      'Wage theft costs workers billions of dollars annually and disproportionately affects workers of color. This includes unpaid overtime, minimum wage violations, misclassification as independent contractors, and illegal deductions. Keep detailed records of your hours worked and pay received.',
      'Wrongful termination occurs when an employer fires you for illegal reasons, such as discrimination, retaliation for reporting violations, or exercising your legal rights. Even in at-will employment states, these protections apply. Document everything if you suspect wrongful termination.',
      'Workplace harassment, including racial harassment, creates a hostile work environment and is illegal under federal law. Your employer has a legal obligation to address harassment complaints. If internal reporting fails, you can escalate to the EEOC or your state labor agency.',
    ],
    keyPoints: [
      'Title VII prohibits discrimination based on race, color, religion, sex, and national origin',
      'You have 180 days to file a discrimination charge with the EEOC (300 days in some states)',
      'Wage theft includes unpaid overtime, tip stealing, and misclassification',
      'Retaliation for reporting workplace violations is illegal',
      'You have the right to discuss wages with coworkers under the NLRA',
      'Employers must provide reasonable accommodations for religious practices and disabilities',
    ],
  },
  {
    slug: 'business',
    emoji: '\u{1F4B0}',
    title: 'Business Formation',
    description: 'LLCs, contracts, intellectual property, and building generational wealth through business ownership.',
    content: [
      'Business formation is a critical path to generational wealth in Black communities. Whether forming an LLC, corporation, or sole proprietorship, understanding the legal structures available to you protects your personal assets and establishes your business on solid legal ground.',
      'An LLC (Limited Liability Company) is one of the most popular structures for small businesses. It provides personal liability protection, pass-through taxation, and operational flexibility. Formation requirements vary by state but typically involve filing articles of organization and paying a filing fee.',
      'Contracts are the backbone of business relationships. Every significant business arrangement should be documented in writing, including partnerships, vendor agreements, client contracts, and employment agreements. A well-drafted contract protects both parties and prevents costly disputes.',
      'Intellectual property (IP) protection is essential for preserving the value of your creative work and brand. This includes trademarks for your brand name and logo, copyrights for creative works, and patents for inventions. Securing your IP early prevents others from profiting from your ideas.',
    ],
    keyPoints: [
      'An LLC provides personal asset protection from business debts and liabilities',
      'Business formation requirements and costs vary by state',
      'All significant business agreements should be documented in written contracts',
      'Trademark registration protects your brand name, logo, and slogans',
      'An EIN (Employer Identification Number) is free from the IRS and required for most businesses',
      'Separate business and personal finances from day one to maintain liability protection',
    ],
  },
  {
    slug: 'family',
    emoji: '\u{1F46A}',
    title: 'Family Law',
    description: 'Custody rights, child support, CPS interactions, domestic violence protections, and family legal matters.',
    content: [
      'Family law encompasses some of the most personal and impactful legal matters you may face. Understanding your rights in custody disputes, child support proceedings, and interactions with Child Protective Services can significantly affect outcomes for you and your children.',
      'Custody decisions are made based on the best interests of the child. Courts consider factors including each parent\'s relationship with the child, stability of the home environment, and the child\'s own preferences (depending on age). Both mothers and fathers have equal rights to seek custody.',
      'Child support is calculated using state-specific guidelines that consider both parents\' income, the number of children, and custody arrangements. If your financial circumstances change significantly, you have the right to request a modification of your child support order through the court.',
      'Domestic violence protections include emergency protective orders, restraining orders, and access to shelters and support services. If you are experiencing domestic violence, know that help is available. The National Domestic Violence Hotline (1-800-799-7233) provides confidential support 24 hours a day.',
    ],
    keyPoints: [
      'Both parents have equal rights to seek custody regardless of gender',
      'Custody decisions are based on the best interest of the child standard',
      'Child support orders can be modified when financial circumstances change significantly',
      'You have the right to an attorney in CPS proceedings; request one immediately',
      'Protective orders are available at no cost for domestic violence victims',
      'Document everything in custody disputes: communications, schedules, and incidents',
    ],
  },
];

export function getAllRights(): RightsCategory[] {
  return rightsCategories;
}

export function getRightsBySlug(slug: string): RightsCategory | undefined {
  return rightsCategories.find((r) => r.slug === slug);
}
