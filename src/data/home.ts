/**
 * Homepage copy, EN + FR. Facts: CV and cover letter only.
 * The project entries themselves come from src/data/stories.
 */
import { frenchSpacing } from './french';
import type { OrgKey } from './orgs';
import type { Slug } from './stories/types';

export interface Row {
  org: OrgKey;
  role: string;
  where: string;
  when: string;
  note?: string;
  story?: Slug;
}

const en = {
  meta: {
    title: 'Omar Bari · Data & AI engineering student in Paris',
    description:
      'Final-year Data & AI engineering student at ESILV, Paris. I build AI tools that show their sources and ask before they act. Open to a six-month internship from February 2027.',
  },
  hero: {
    alt: 'Omar Bari',
    role: 'Data & AI engineering student · ESILV, Paris',
    title: 'I build AI tools that ask before they act.',
    lede: 'At B-AGILE I built an ERP assistant that cites its sources, waits for a yes before it writes, and refuses what it wasn’t built to do.',
    try: 'Try to make it delete something',
    avail: 'Open to a 6-month internship from February 2027',
  },
  work: {
    title: 'What else could go wrong?',
    lede: 'Every project I’ve worked on started with a question like one of these. Pick one.',
    order: ['essor', 'aiops', 'pipeline'] as Slug[],
    small: 'querypilot' as Slug,
  },
  about: {
    title: 'Hi, I’m Omar.',
    p: 'I’m finishing an engineering degree in Data & AI at ESILV in Paris, after a first degree in Casablanca in computer science applied to management. I like working in a team: at B-AGILE we met every day with our manager and the other interns to share progress and blockers. I speak Arabic, French and English.',
    expTitle: 'Experience',
    eduTitle: 'Education',
    storyLink: 'Read the story',
    exp: [
      {
        org: 'bagile',
        role: 'Data & AI engineering intern',
        where: 'B-AGILE SARL, Casablanca',
        when: 'May to Sep 2026',
        story: 'essor',
      },
      {
        org: 'agtt',
        role: 'Data analyst intern',
        where: 'A.G.T.T (Agence Générale de Transit et de Transports), Casablanca',
        when: 'Jun to Aug 2025',
        note: 'Python and SQL ETL to consolidate operational data, automated Excel reports and data-quality checks.',
      },
      {
        org: 'sgabs',
        role: 'Software engineering intern, AIOps & machine learning',
        where: 'Société Générale ABS, Casablanca',
        when: 'Apr to Jun 2025',
        story: 'aiops',
      },
    ] as Row[],
    edu: [
      {
        org: 'esilv',
        role: 'Engineering degree in Data & AI, final year',
        where: 'ESILV, De Vinci Engineering School, Paris',
        when: '2025 to 2027',
      },
      {
        org: 'uic',
        role: 'Licence MIAGE, computer science applied to management',
        where: 'Université Internationale de Casablanca',
        when: '2022 to 2025',
      },
    ] as Row[],
  },
};

const fr: typeof en = {
  meta: {
    title: 'Omar Bari · Étudiant ingénieur Data & IA à Paris',
    description:
      'Étudiant ingénieur Data & IA en dernière année à l’ESILV, à Paris. Je conçois des outils d’IA qui montrent leurs sources et demandent avant d’agir. Disponible pour un stage de six mois dès février 2027.',
  },
  hero: {
    alt: 'Omar Bari',
    role: 'Étudiant ingénieur Data & IA · ESILV, Paris',
    title: 'Je conçois des outils d’IA qui demandent avant d’agir.',
    lede: 'Chez B-AGILE, j’ai construit un assistant ERP qui cite ses sources, attend un oui avant d’écrire et refuse ce pour quoi il n’est pas fait.',
    try: 'Essayez de lui faire supprimer quelque chose',
    avail: 'Disponible pour un stage de 6 mois dès février 2027',
  },
  work: {
    title: 'Qu’est-ce qui pourrait encore mal tourner ?',
    lede: 'Chacun de mes projets est parti d’une question comme celles-ci. Choisissez-en une.',
    order: ['essor', 'aiops', 'pipeline'],
    small: 'querypilot',
  },
  about: {
    title: 'Bonjour, moi c’est Omar.',
    p: 'Je termine un diplôme d’ingénieur en Data & IA à l’ESILV, à Paris, après une licence à Casablanca en informatique appliquée à la gestion. J’aime travailler en équipe : chez B-AGILE, nous faisions un point chaque jour avec notre manager et les autres stagiaires sur l’avancement et les blocages. Je parle arabe, français et anglais.',
    expTitle: 'Expérience',
    eduTitle: 'Formation',
    storyLink: 'Lire l’histoire',
    exp: [
      {
        org: 'bagile',
        role: 'Stagiaire ingénieur Data & IA',
        where: 'B-AGILE SARL, Casablanca',
        when: 'mai à sept. 2026',
        story: 'essor',
      },
      {
        org: 'agtt',
        role: 'Stagiaire data analyst',
        where: 'A.G.T.T (Agence Générale de Transit et de Transports), Casablanca',
        when: 'juin à août 2025',
        note: 'ETL Python et SQL pour consolider les données opérationnelles, rapports Excel automatisés et contrôles de qualité des données.',
      },
      {
        org: 'sgabs',
        role: 'Stagiaire ingénieur logiciel, AIOps & machine learning',
        where: 'Société Générale ABS, Casablanca',
        when: 'avr. à juin 2025',
        story: 'aiops',
      },
    ],
    edu: [
      {
        org: 'esilv',
        role: 'Diplôme d’ingénieur Data & IA, dernière année',
        where: 'ESILV, école d’ingénieurs De Vinci, Paris',
        when: '2025 à 2027',
      },
      {
        org: 'uic',
        role: 'Licence MIAGE, informatique appliquée à la gestion',
        where: 'Université Internationale de Casablanca',
        when: '2022 à 2025',
      },
    ],
  },
};

export const home = { en, fr: frenchSpacing(fr) };
