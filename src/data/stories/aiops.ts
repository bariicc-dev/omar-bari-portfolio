/** AIOps Incident Intelligence. Facts: CV + cover letter (Société Générale ABS, Apr to Jun 2025, prototype). */
import { frenchSpacing } from '../french';
import type { Story } from './types';

const en: Story = {
  slug: 'aiops',
  meta: {
    title: 'What an engineer should see first when an API slows down · Omar Bari',
    description:
      'My internship prototype at Société Générale ABS: anomaly detection and incident classification with scikit-learn, and a search over runbooks that points to the step to check. Replay a fictional incident.',
  },
  context: 'Internship at Société Générale ABS, Casablanca · Apr to Jun 2025 · prototype',
  logos: ['sgabs'],
  tile: { ctx: 'Société Générale ABS · internship, 2025', cta: 'Replay the incident' },
  question: 'An API slows down at 14:02. What should the engineer see first?',
  answer:
    'A flag with a reason, and the runbook step that fits. In my prototype, one model flags the anomaly, a classifier names it, and a search over runbooks finds what to check.',
  artLabel: 'Replay of a fictional incident',
  hard: 'Incidents, API health checks and monitoring events arrive in different shapes, and runbooks are long documents nobody reads in the middle of an incident.',
  chose:
    'Structure the events in PostgreSQL first, then keep detection and documentation apart: scikit-learn models flag and classify, and a semantic search over runbooks suggests where to look.',
  changed: 'Each part can be tested on its own, and what the engineer reads comes from real procedures, not from a model’s guess.',
  deep: [
    {
      kind: 'flow',
      title: 'Two pipelines that meet at triage',
      paths: [
        {
          label: 'Signals',
          nodes: ['Incidents, health checks, monitoring events', 'PostgreSQL', 'Features', 'Anomaly detection + classification', 'FastAPI indicators'],
        },
        { label: 'Runbooks', nodes: ['Technical runbooks', 'Chunks', 'Embeddings', 'Semantic search'] },
      ],
      note: 'The models say what looks wrong. The documents say what to do about it.',
    },
    {
      kind: 'list',
      title: 'What this was, and what it wasn’t',
      items: [
        'A prototype, built and demonstrated during the internship.',
        'Not a production monitoring service. I make no claim about deployment or measured impact.',
        'The replay on this page uses invented numbers, not data from that work.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python, FastAPI, PostgreSQL, Kafka, scikit-learn, NLP, Docker.',
    },
  ],
  next: 'pipeline',
};

const fr: Story = {
  slug: 'aiops',
  meta: {
    title: 'Ce qu’un ingénieur doit voir en premier quand une API ralentit · Omar Bari',
    description:
      'Mon prototype de stage à la Société Générale ABS : détection d’anomalies et classification d’incidents avec scikit-learn, et une recherche dans les runbooks qui indique l’étape à vérifier. Rejouez un incident fictif.',
  },
  context: 'Stage à la Société Générale ABS, Casablanca · avr. à juin 2025 · prototype',
  logos: ['sgabs'],
  tile: { ctx: 'Société Générale ABS · stage, 2025', cta: 'Rejouer l’incident' },
  question: 'Une API ralentit à 14 h 02. Que doit voir l’ingénieur en premier ?',
  answer:
    'Un signalement avec sa raison, et l’étape de runbook qui correspond. Dans mon prototype, un modèle signale l’anomalie, un classifieur la nomme, et une recherche dans les runbooks trouve quoi vérifier.',
  artLabel: 'Rejeu d’un incident fictif',
  hard: 'Incidents, contrôles de santé d’API et événements de supervision arrivent sous des formes différentes, et les runbooks sont de longs documents que personne ne lit en plein incident.',
  chose:
    'Structurer d’abord les événements dans PostgreSQL, puis séparer détection et documentation : des modèles scikit-learn signalent et classent, et une recherche sémantique dans les runbooks indique où regarder.',
  changed: 'Chaque partie se teste seule, et ce que lit l’ingénieur vient de vraies procédures, pas d’une supposition du modèle.',
  deep: [
    {
      kind: 'flow',
      title: 'Deux pipelines qui se rejoignent au tri',
      paths: [
        {
          label: 'Signaux',
          nodes: ['Incidents, contrôles de santé, supervision', 'PostgreSQL', 'Features', 'Détection d’anomalies + classification', 'Indicateurs FastAPI'],
        },
        { label: 'Runbooks', nodes: ['Runbooks techniques', 'Chunks', 'Embeddings', 'Recherche sémantique'] },
      ],
      note: 'Les modèles disent ce qui cloche. Les documents disent quoi faire.',
    },
    {
      kind: 'list',
      title: 'Ce que c’était, et ce que ce n’était pas',
      items: [
        'Un prototype, construit et présenté pendant le stage.',
        'Pas un service de supervision en production. Je ne revendique ni déploiement ni impact mesuré.',
        'Le rejeu de cette page utilise des chiffres inventés, pas des données de ce travail.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python, FastAPI, PostgreSQL, Kafka, scikit-learn, NLP, Docker.',
    },
  ],
  next: 'pipeline',
};

export const aiops = { en, fr: frenchSpacing(fr) };
