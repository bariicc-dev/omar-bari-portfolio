/**
 * Lead pipeline simulation: fictional records (ACME, Globex and Initech are
 * placeholder company names, .example domains are reserved). Shown on the
 * page as a labelled simulation.
 */
import { frenchSpacing } from './french';

export interface Rule {
  name: string;
  eng: string;
  ok: boolean;
}

export interface Attempt {
  ok: boolean;
  text: string;
}

export interface LeadRecord {
  id: string;
  label: string;
  hint: string;
  rawId: string;
  attempts: Attempt[];
  raw: [string, string][];
  rules: Rule[];
  to: 'clean' | 'review';
  out: [string, string][];
  idle: string;
  running: string;
  done: string;
  again: string;
}

const acmeRules = (lang: 'en' | 'fr'): Rule[] =>
  lang === 'en'
    ? [
        { name: 'Name trimmed', eng: 'company_name: strip()', ok: true },
        { name: 'Website becomes a full URL', eng: 'website: format uri', ok: true },
        { name: 'Headcount fits a band', eng: 'employees_range: enum', ok: true },
        { name: 'Sector is on the list', eng: 'sector: enum', ok: true },
        { name: 'Country is a 2-letter code', eng: 'country: ^[A-Z]{2}$', ok: true },
      ]
    : [
        { name: 'Nom nettoyé', eng: 'company_name: strip()', ok: true },
        { name: 'Site web en URL complète', eng: 'website: format uri', ok: true },
        { name: 'Effectif dans une tranche', eng: 'employees_range: enum', ok: true },
        { name: 'Secteur dans la liste', eng: 'sector: enum', ok: true },
        { name: 'Pays en code à 2 lettres', eng: 'country: ^[A-Z]{2}$', ok: true },
      ];

const en = {
  ui: {
    name: 'Lead pipeline',
    sim: 'Simulation · fictional records',
    pickLabel: 'Pick a record',
    source: 'Source · public directory page',
    notFetched: 'Not fetched yet',
    raw: { title: 'RAW', sub: 'Stored as scraped. Never edited.' },
    gate: { title: 'Validation', sub: 'JSON Schema and cleaning rules' },
    clean: { title: 'CLEANED', sub: 'Valid records, linked back to RAW' },
    review: { title: 'Review', sub: 'Records that fail wait here' },
    waiting: 'Waiting',
    run: 'Run the pipeline',
    again: 'Run it again',
    reset: 'Reset',
  },
  records: [
    {
      id: 'initech',
      label: 'Initech Labs',
      hint: 'Flaky source',
      rawId: 'raw_c41f07',
      attempts: [
        { ok: false, text: 'attempt 1 · timeout after 10 s · retry in 2 s' },
        { ok: false, text: 'attempt 2 · HTTP 503 · retry in 4 s' },
        { ok: true, text: 'attempt 3 · fetched' },
      ],
      raw: [
        ['Company', '"Initech Labs"'],
        ['web', '"initech.example"'],
        ['Employees', '"10-49"'],
        ['Sector', '"iot security"'],
        ['country', '"FR"'],
      ],
      rules: acmeRules('en'),
      to: 'clean',
      out: [
        ['lead_id', '"ld_9a02"'],
        ['company_name', '"Initech Labs"'],
        ['website', '"https://initech.example"'],
        ['employees_range', '"10-49"'],
        ['sector', '"iot-security"'],
        ['country', '"FR"'],
        ['raw_ref', '"raw_c41f07"'],
      ],
      idle: 'This source fails a lot at night. Run the pipeline anyway.',
      running: 'The source is failing. Retrying with a longer wait each time…',
      done: 'Third attempt worked. One record in RAW, one in CLEANED, no half-written rows.',
      again: 'Second run: the source answers, the record is already there. Nothing was duplicated.',
    },
    {
      id: 'acme',
      label: 'ACME Cyber',
      hint: 'Messy but complete',
      rawId: 'raw_0b8c31',
      attempts: [{ ok: true, text: 'attempt 1 · fetched' }],
      raw: [
        ['Company', '"  ACME Cyber  "'],
        ['web', '"acme-cyber.example"'],
        ['Employees', '"50-100 ?"'],
        ['Sector', '"cybersecurite"'],
        ['country', '"FR "'],
      ],
      rules: acmeRules('en'),
      to: 'clean',
      out: [
        ['lead_id', '"ld_4e91"'],
        ['company_name', '"ACME Cyber"'],
        ['website', '"https://acme-cyber.example"'],
        ['employees_range', '"50-99"'],
        ['sector', '"cybersecurity"'],
        ['country', '"FR"'],
        ['raw_ref', '"raw_0b8c31"'],
      ],
      idle: 'A public directory page is waiting to be scraped.',
      running: 'Fetching, storing the raw record, then checking it…',
      done: 'Stored in CLEANED. The RAW record stays exactly as scraped.',
      again: 'Second run: same source key, same content. Nothing was duplicated.',
    },
    {
      id: 'globex',
      label: 'Globex Data',
      hint: 'Missing fields',
      rawId: 'raw_7d2e90',
      attempts: [{ ok: true, text: 'attempt 1 · fetched' }],
      raw: [
        ['Company', '"Globex Data"'],
        ['web', '""'],
        ['Employees', '"n/a"'],
        ['Sector', '"data"'],
        ['country', '"DE"'],
      ],
      rules: [
        { name: 'Name trimmed', eng: 'company_name: strip()', ok: true },
        { name: 'Website is present', eng: 'website: required', ok: false },
        { name: 'Headcount fits a band', eng: 'employees_range: enum ("n/a")', ok: false },
        { name: 'Sector is on the list', eng: 'sector: enum', ok: true },
        { name: 'Country is a 2-letter code', eng: 'country: ^[A-Z]{2}$', ok: true },
      ],
      to: 'review',
      out: [
        ['raw_ref', '"raw_7d2e90"'],
        ['error', 'website is required'],
        ['error', '"n/a" is not a headcount band'],
      ],
      idle: 'A public directory page is waiting to be scraped.',
      running: 'Fetching, storing the raw record, then checking it…',
      done: 'Sent to review with two reasons. Nothing reached CLEANED, and RAW still has it.',
      again: 'Second run: still invalid, still one review entry. Nothing was duplicated.',
    },
  ] as LeadRecord[],
};

const fr: typeof en = {
  ui: {
    name: 'Pipeline de leads',
    sim: 'Simulation · données fictives',
    pickLabel: 'Choisissez un enregistrement',
    source: 'Source · page d’annuaire public',
    notFetched: 'Pas encore récupérée',
    raw: { title: 'RAW', sub: 'Stocké tel que scrapé. Jamais modifié.' },
    gate: { title: 'Validation', sub: 'JSON Schema et règles de nettoyage' },
    clean: { title: 'CLEANED', sub: 'Enregistrements valides, reliés à RAW' },
    review: { title: 'Revue', sub: 'Les enregistrements refusés attendent ici' },
    waiting: 'En attente',
    run: 'Lancer le pipeline',
    again: 'Relancer',
    reset: 'Réinitialiser',
  },
  records: [
    {
      id: 'initech',
      label: 'Initech Labs',
      hint: 'Source instable',
      rawId: 'raw_c41f07',
      attempts: [
        { ok: false, text: 'essai 1 · timeout après 10 s · nouvel essai dans 2 s' },
        { ok: false, text: 'essai 2 · HTTP 503 · nouvel essai dans 4 s' },
        { ok: true, text: 'essai 3 · récupéré' },
      ],
      raw: [
        ['Company', '"Initech Labs"'],
        ['web', '"initech.example"'],
        ['Employees', '"10-49"'],
        ['Sector', '"iot security"'],
        ['country', '"FR"'],
      ],
      rules: acmeRules('fr'),
      to: 'clean',
      out: [
        ['lead_id', '"ld_9a02"'],
        ['company_name', '"Initech Labs"'],
        ['website', '"https://initech.example"'],
        ['employees_range', '"10-49"'],
        ['sector', '"iot-security"'],
        ['country', '"FR"'],
        ['raw_ref', '"raw_c41f07"'],
      ],
      idle: 'Cette source échoue souvent la nuit. Lancez quand même le pipeline.',
      running: 'La source échoue. Nouvel essai, avec une attente plus longue à chaque fois…',
      done: 'Le troisième essai a marché. Un enregistrement dans RAW, un dans CLEANED, aucune ligne à moitié écrite.',
      again: 'Deuxième run : la source répond, l’enregistrement est déjà là. Aucun doublon.',
    },
    {
      id: 'acme',
      label: 'ACME Cyber',
      hint: 'Désordonné mais complet',
      rawId: 'raw_0b8c31',
      attempts: [{ ok: true, text: 'essai 1 · récupéré' }],
      raw: [
        ['Company', '"  ACME Cyber  "'],
        ['web', '"acme-cyber.example"'],
        ['Employees', '"50-100 ?"'],
        ['Sector', '"cybersecurite"'],
        ['country', '"FR "'],
      ],
      rules: acmeRules('fr'),
      to: 'clean',
      out: [
        ['lead_id', '"ld_4e91"'],
        ['company_name', '"ACME Cyber"'],
        ['website', '"https://acme-cyber.example"'],
        ['employees_range', '"50-99"'],
        ['sector', '"cybersecurity"'],
        ['country', '"FR"'],
        ['raw_ref', '"raw_0b8c31"'],
      ],
      idle: 'Une page d’annuaire public attend d’être scrapée.',
      running: 'Récupération, stockage brut, puis vérification…',
      done: 'Stocké dans CLEANED. L’enregistrement RAW reste tel que scrapé.',
      again: 'Deuxième run : même clé source, même contenu. Aucun doublon.',
    },
    {
      id: 'globex',
      label: 'Globex Data',
      hint: 'Champs manquants',
      rawId: 'raw_7d2e90',
      attempts: [{ ok: true, text: 'essai 1 · récupéré' }],
      raw: [
        ['Company', '"Globex Data"'],
        ['web', '""'],
        ['Employees', '"n/a"'],
        ['Sector', '"data"'],
        ['country', '"DE"'],
      ],
      rules: [
        { name: 'Nom nettoyé', eng: 'company_name: strip()', ok: true },
        { name: 'Site web présent', eng: 'website: required', ok: false },
        { name: 'Effectif dans une tranche', eng: 'employees_range: enum ("n/a")', ok: false },
        { name: 'Secteur dans la liste', eng: 'sector: enum', ok: true },
        { name: 'Pays en code à 2 lettres', eng: 'country: ^[A-Z]{2}$', ok: true },
      ],
      to: 'review',
      out: [
        ['raw_ref', '"raw_7d2e90"'],
        ['erreur', 'site web obligatoire'],
        ['erreur', '"n/a" n’est pas une tranche d’effectif'],
      ],
      idle: 'Une page d’annuaire public attend d’être scrapée.',
      running: 'Récupération, stockage brut, puis vérification…',
      done: 'Envoyé en revue avec deux motifs. Rien n’est arrivé dans CLEANED, et RAW le garde.',
      again: 'Deuxième run : toujours invalide, toujours une seule entrée en revue. Aucun doublon.',
    },
  ],
};

export const leadsSim = { en, fr: frenchSpacing(fr) };
