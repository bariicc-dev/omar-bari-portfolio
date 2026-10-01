/**
 * Shared interface strings. `fr` is typed against `en`, so a missing
 * French string is a type error.
 */
import { frenchSpacing } from './french';

export type Lang = 'en' | 'fr';

const en = {
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    home: 'Omar Bari, home',
    work: 'Projects',
    about: 'About',
    contact: 'Contact',
    cv: 'CV',
    cvTitle: 'Download my CV (PDF)',
    lang: 'FR',
    langTitle: 'Lire en français',
  },
  contact: {
    title: 'Looking for a six-month internship from February 2027.',
    line: 'Data engineering, applied AI or machine learning, in or around Paris. Email is the fastest way to reach me.',
    subject: 'Internship from February 2027',
    copy: 'Copy email',
    copied: 'Copied',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV (PDF)',
  },
  footer: {
    rights: '© 2026 Omar Bari',
    note: 'No cookies, no trackers.',
    top: 'Back to top',
  },
  sim: 'Simulation · fictional data',
  story: {
    back: 'All projects',
    hard: 'The hard part',
    chose: 'What I chose',
    changed: 'What it changed',
    details: 'Want the technical detail?',
    detailsLine: 'Open what you need. Nothing here is required to follow the story.',
    kinds: { flow: 'Diagram', code: 'Code', pair: 'Data', list: 'Notes', text: 'Context' },
    next: 'Next problem',
    repo: 'Code on GitHub',
  },
  misc: {
    notFoundTitle: 'Nothing here.',
    notFoundBody: 'This page does not exist.',
    notFoundCta: 'Back to the homepage',
  },
};

const fr: typeof en = {
  skip: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    home: 'Omar Bari, accueil',
    work: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    cv: 'CV',
    cvTitle: 'Télécharger mon CV (PDF, en anglais)',
    lang: 'EN',
    langTitle: 'Read in English',
  },
  contact: {
    title: 'Je cherche un stage de six mois à partir de février 2027.',
    line: 'Data engineering, IA appliquée ou machine learning, à Paris ou en Île-de-France. Le plus rapide, c’est un email.',
    subject: 'Stage à partir de février 2027',
    copy: 'Copier l’email',
    copied: 'Copié',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'CV (PDF)',
  },
  footer: {
    rights: '© 2026 Omar Bari',
    note: 'Sans cookies, sans traceurs.',
    top: 'Haut de page',
  },
  sim: 'Simulation · données fictives',
  story: {
    back: 'Tous les projets',
    hard: 'Ce qui était difficile',
    chose: 'Ce que j’ai choisi',
    changed: 'Ce que ça a changé',
    details: 'Envie du détail technique ?',
    detailsLine: 'Ouvrez ce qui vous intéresse. Rien ici n’est nécessaire pour suivre l’histoire.',
    kinds: { flow: 'Schéma', code: 'Code', pair: 'Données', list: 'Notes', text: 'Contexte' },
    next: 'Problème suivant',
    repo: 'Code sur GitHub',
  },
  misc: {
    notFoundTitle: 'Rien ici.',
    notFoundBody: 'Cette page n’existe pas.',
    notFoundCta: 'Retour à l’accueil',
  },
};

export const ui = { en, fr: frenchSpacing(fr) };
