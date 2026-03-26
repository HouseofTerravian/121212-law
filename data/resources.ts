export interface LegalResource {
  name: string;
  emoji: string;
  description: string;
  url: string;
  focus: string;
}

const resources: LegalResource[] = [
  {
    name: 'NAACP Legal Defense Fund',
    emoji: '\u{2696}\u{FE0F}',
    description: 'America\'s premier legal organization fighting for racial justice. Founded in 1940, LDF has been at the forefront of nearly every major civil rights case in U.S. history.',
    url: 'https://naacpldf.org',
    focus: 'Civil rights litigation, voter protection, criminal justice reform',
  },
  {
    name: 'Legal Aid Society',
    emoji: '\u{1F4DC}',
    description: 'The nation\'s oldest and largest not-for-profit legal services organization. Provides free legal assistance to low-income individuals and families across civil, criminal, and juvenile rights matters.',
    url: 'https://legalaid.org',
    focus: 'Free legal representation for low-income individuals',
  },
  {
    name: 'Know Your Rights Camp',
    emoji: '\u{270A}',
    description: 'Founded by Colin Kaepernick, this organization provides education and resources to empower Black and Brown communities through know-your-rights training, legal defense, and community advocacy.',
    url: 'https://knowyourrightscamp.com',
    focus: 'Know-your-rights education, youth empowerment, legal clinics',
  },
  {
    name: 'ACLU',
    emoji: '\u{1F6E1}\u{FE0F}',
    description: 'The American Civil Liberties Union works in courts, legislatures, and communities to defend and preserve individual rights and liberties guaranteed by the Constitution and laws of the United States.',
    url: 'https://aclu.org',
    focus: 'Constitutional rights, criminal justice reform, voting rights',
  },
  {
    name: 'Innocence Project',
    emoji: '\u{1F50D}',
    description: 'Dedicated to exonerating wrongly convicted individuals through DNA testing and reforming the criminal justice system to prevent injustice. The majority of exonerees are Black.',
    url: 'https://innocenceproject.org',
    focus: 'Wrongful conviction exoneration, criminal justice reform',
  },
  {
    name: 'Black Legal Action Centre',
    emoji: '\u{1F310}',
    description: 'A not-for-profit community legal clinic that provides free legal services to low and no-income Black Canadians, addressing anti-Black racism in housing, employment, education, and the justice system.',
    url: 'https://blacklegalactioncentre.ca',
    focus: 'Anti-Black racism, human rights complaints, legal education',
  },
];

export function getAllResources(): LegalResource[] {
  return resources;
}
