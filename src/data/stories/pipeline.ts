/** B2B Lead Qualification Engine. Facts: CV (ESILV project with Red Alert Labs, October 2025). */
import { frenchSpacing } from '../french';
import type { Story } from './types';

const raw = `{
  "src": "public-directory/fr",
  "scraped_at": "2025-10-07T22:14:09Z",
  "Company": "  ACME Cyber  ",
  "web": "acme-cyber.example",
  "Employees": "50-100 ?",
  "Sector": "cybersecurite",
  "country": "FR "
}`;

const clean = `{
  "lead_id": "ld_4e91",
  "company_name": "ACME Cyber",
  "website": "https://acme-cyber.example",
  "employees_range": "50-99",
  "sector": "cybersecurity",
  "country": "FR",
  "raw_ref": "raw_0b8c31"
}`;

const en: Story = {
  slug: 'pipeline',
  meta: {
    title: 'What happens when the scraper dies at night · Omar Bari',
    description:
      'A B2B lead pipeline from an ESILV project with Red Alert Labs: untouched RAW records, JSON Schema validation into a separate CLEANED layer, and idempotent runs, so a failed night is fixed by running it again.',
  },
  context: 'ESILV project, in collaboration with Red Alert Labs · October 2025',
  logos: ['esilv', 'ral'],
  tile: { ctx: 'ESILV project with Red Alert Labs · 2025', cta: 'Watch it recover' },
  question: 'The scraper dies halfway through the night. Now what?',
  answer:
    'You run it again. Raw pages are stored untouched first, cleaning writes to a separate layer, and every write is idempotent, so a rerun fills the gap and duplicates nothing.',
  artLabel: 'A record going from RAW to CLEANED',
  hard: 'Public directory pages are messy, sources fail at night, and a cleaning bug can quietly damage the only copy of the data.',
  chose:
    'Every record lands untouched in a RAW collection. JSON Schema validation writes valid records to a separate CLEANED collection, each linked back to its raw original. Flaky sources get retries, failed nights get backfills.',
  changed: 'Recovering became a command, not a cleanup job. When a rule changes, CLEANED is rebuilt from RAW, and any lead can be traced to where it came from.',
  deep: [
    {
      kind: 'flow',
      title: 'One direction of flow, two stores',
      paths: [
        {
          label: 'Pipeline',
          nodes: ['Public sources', 'Ingestion (idempotent, retries)', 'RAW · MongoDB', 'JSON Schema', 'CLEANED · MongoDB', 'Qualification', 'Airtable'],
        },
      ],
      note: 'Loops only where reality demands them: retries for flaky sources, backfills for failed nights.',
    },
    {
      kind: 'pair',
      title: 'One record in both layers',
      left: { label: 'RAW, as scraped (fictional)', code: raw },
      right: { label: 'CLEANED, validated (fictional)', code: clean },
      note: 'Every CLEANED record keeps raw_ref, so traceability is a field, not a promise.',
    },
    {
      kind: 'list',
      title: 'Only what’s needed',
      items: [
        'Public, company-level data, and only the fields needed to qualify a lead.',
        'GDPR shaped the design from the start. It’s a design choice, not a compliance certificate.',
      ],
    },
    {
      kind: 'list',
      title: 'Tradeoffs I accepted',
      items: [
        'Twice the storage of a single table. Storage is cheap; data nobody can explain is not.',
        'Rebuilding CLEANED after a rule change takes a full pass over RAW. That is the price of never editing the original.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python, MongoDB, web scraping, JSON Schema, Airtable.',
    },
  ],
  next: 'querypilot',
};

const fr: Story = {
  slug: 'pipeline',
  meta: {
    title: 'Quand le scraper plante en pleine nuit · Omar Bari',
    description:
      'Un pipeline de leads B2B, projet ESILV avec Red Alert Labs : données RAW intactes, validation par JSON Schema vers une couche CLEANED séparée, et runs idempotents, donc une nuit ratée se répare en relançant.',
  },
  context: 'Projet ESILV, en collaboration avec Red Alert Labs · octobre 2025',
  logos: ['esilv', 'ral'],
  tile: { ctx: 'Projet ESILV avec Red Alert Labs · 2025', cta: 'Le voir repartir' },
  question: 'Le scraper plante au milieu de la nuit. Et maintenant ?',
  answer:
    'On relance. Les pages brutes sont stockées intactes d’abord, le nettoyage écrit dans une couche séparée, et chaque écriture est idempotente : relancer comble le trou sans rien dupliquer.',
  artLabel: 'Un enregistrement qui passe de RAW à CLEANED',
  hard: 'Les pages d’annuaires publics sont désordonnées, les sources tombent la nuit, et un bug de nettoyage peut abîmer en silence la seule copie des données.',
  chose:
    'Chaque enregistrement arrive intact dans une collection RAW. La validation par JSON Schema écrit les enregistrements valides dans une collection CLEANED séparée, chacun relié à son original brut. Les sources instables ont des retries, les nuits ratées des backfills.',
  changed: 'Récupérer est devenu une commande, pas un chantier de nettoyage. Quand une règle change, CLEANED se reconstruit depuis RAW, et chaque lead remonte à sa source.',
  deep: [
    {
      kind: 'flow',
      title: 'Un seul sens de circulation, deux stockages',
      paths: [
        {
          label: 'Pipeline',
          nodes: ['Sources publiques', 'Ingestion (idempotente, retries)', 'RAW · MongoDB', 'JSON Schema', 'CLEANED · MongoDB', 'Qualification', 'Airtable'],
        },
      ],
      note: 'Des boucles seulement là où la réalité l’exige : retries pour les sources instables, backfills pour les nuits ratées.',
    },
    {
      kind: 'pair',
      title: 'Un enregistrement dans les deux couches',
      left: { label: 'RAW, tel que scrapé (fictif)', code: raw },
      right: { label: 'CLEANED, validé (fictif)', code: clean },
      note: 'Chaque enregistrement CLEANED garde raw_ref : la traçabilité est un champ, pas une promesse.',
    },
    {
      kind: 'list',
      title: 'Seulement le nécessaire',
      items: [
        'Des données publiques, au niveau de l’entreprise, et seulement les champs utiles pour qualifier un lead.',
        'Le RGPD a guidé la conception dès le départ. C’est un choix de conception, pas une certification de conformité.',
      ],
    },
    {
      kind: 'list',
      title: 'Les compromis que j’ai acceptés',
      items: [
        'Deux fois le stockage d’une seule table. Le stockage coûte peu ; des données inexplicables coûtent cher.',
        'Reconstruire CLEANED après un changement de règle demande un passage complet sur RAW. C’est le prix de ne jamais modifier l’original.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python, MongoDB, web scraping, JSON Schema, Airtable.',
    },
  ],
  next: 'querypilot',
};

export const pipeline = { en, fr: frenchSpacing(fr) };
