/**
 * QueryPilot. Every claim is checked against the public README of
 * github.com/bariicc-dev/text-to-sql-analytics-agent (read September
 * 2026). The queries on the page are illustrative.
 */
import { frenchSpacing } from '../french';
import type { Story } from './types';

const en: Story = {
  slug: 'querypilot',
  meta: {
    title: 'Can a model write SQL and still only read? · QueryPilot · Omar Bari',
    description:
      'QueryPilot, a text-to-SQL agent I built on my own time: a validator that only accepts SELECT and WITH, and a separate read-only PostgreSQL role. Try to get a query past both walls.',
  },
  context: 'Personal project · code on GitHub',
  logos: [],
  tile: { ctx: 'Personal project · on GitHub', cta: 'Try to get past it' },
  question: 'Can a model write SQL and still only read?',
  answer:
    'Yes, if two separate walls stand between the model and the data: a validator that only accepts SELECT and WITH, and a database role that can only read five tables.',
  artLabel: 'Generated queries against the two walls',
  hard: 'Generated SQL can be anything: a write, a lock, a look at system tables, or a query that never finishes.',
  chose:
    'A validator that only accepts SELECT and WITH, a separate querypilot_reader role limited to five demo tables, plus a statement timeout, a row cap and a fixed search path.',
  changed: 'Even a query that slips past the validator hits a role that cannot write. Here, letting the model write SQL is safe. In Essor, which changes business data, it wasn’t.',
  deep: [
    {
      kind: 'flow',
      title: 'Two gates between the model and the data',
      paths: [
        {
          label: 'Query',
          nodes: ['Question + schema context', 'SQL generation (demo or LLM)', 'Validator: SELECT / WITH only', 'querypilot_reader: 5 tables', 'Timeout, row cap, fixed search path', 'Results', 'Log + feedback'],
        },
      ],
      note: 'Every generated query crosses two independent gates before it touches data.',
    },
    {
      kind: 'list',
      title: 'How I know it works',
      items: [
        'An evaluation set runs against both providers: a deterministic demo provider that needs no API key, and an NVIDIA-compatible LLM provider behind the same interface.',
        'Each result records the expected and actual category, the expected and actual safety status, and pass or fail with a reason.',
        'Query logs and user feedback are stored. Tests run in GitHub Actions.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python 3.12, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, pytest, Docker Compose, GitHub Actions, on synthetic e-commerce data.',
    },
  ],
  next: 'essor',
};

const fr: Story = {
  slug: 'querypilot',
  meta: {
    title: 'Un modèle peut-il écrire du SQL sans rien pouvoir modifier ? · QueryPilot · Omar Bari',
    description:
      'QueryPilot, un agent text-to-SQL construit sur mon temps libre : un validateur qui n’accepte que SELECT et WITH, et un rôle PostgreSQL séparé en lecture seule. Essayez de faire passer une requête au-delà des deux murs.',
  },
  context: 'Projet personnel · code sur GitHub',
  logos: [],
  tile: { ctx: 'Projet personnel · sur GitHub', cta: 'Essayer de passer' },
  question: 'Un modèle peut-il écrire du SQL sans rien pouvoir modifier ?',
  answer:
    'Oui, si deux murs indépendants séparent le modèle des données : un validateur qui n’accepte que SELECT et WITH, et un rôle de base de données qui ne peut lire que cinq tables.',
  artLabel: 'Des requêtes générées face aux deux murs',
  hard: 'Le SQL généré peut être n’importe quoi : une écriture, un verrou, un coup d’œil aux tables système, ou une requête qui ne finit jamais.',
  chose:
    'Un validateur qui n’accepte que SELECT et WITH, un rôle querypilot_reader séparé limité à cinq tables de démo, plus un timeout, un plafond de lignes et un search path fixe.',
  changed: 'Même une requête qui passerait le validateur se heurte à un rôle qui ne peut pas écrire. Ici, laisser le modèle écrire du SQL est sans danger. Dans Essor, qui modifie des données métier, ça ne l’était pas.',
  deep: [
    {
      kind: 'flow',
      title: 'Deux barrières entre le modèle et les données',
      paths: [
        {
          label: 'Requête',
          nodes: ['Question + contexte du schéma', 'Génération SQL (démo ou LLM)', 'Validateur : SELECT / WITH seulement', 'querypilot_reader : 5 tables', 'Timeout, plafond de lignes, search path fixe', 'Résultats', 'Log + retours'],
        },
      ],
      note: 'Chaque requête générée franchit deux barrières indépendantes avant de toucher aux données.',
    },
    {
      kind: 'list',
      title: 'Comment je sais que ça marche',
      items: [
        'Un jeu d’évaluation tourne sur les deux providers : un provider de démo déterministe, sans clé d’API, et un provider LLM compatible NVIDIA derrière la même interface.',
        'Chaque résultat enregistre la catégorie attendue et obtenue, le statut de sécurité attendu et obtenu, et la réussite ou l’échec avec une raison.',
        'Les logs de requêtes et les retours des utilisateurs sont conservés. Les tests tournent dans GitHub Actions.',
      ],
    },
    {
      kind: 'text',
      title: 'Stack',
      text: 'Python 3.12, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, pytest, Docker Compose, GitHub Actions, sur des données e-commerce synthétiques.',
    },
  ],
  next: 'essor',
};

export const querypilot = { en, fr: frenchSpacing(fr) };

/** The two walls. walls: indices of the gates that would stop the query (0 validator, 1 read-only role, 2 limits). */
export interface GateQuery {
  id: string;
  sql: string;
  walls: number[];
  result: string;
}

const gatesEn = {
  pick: 'Pick a query the model generated',
  note: 'Illustrative queries. The rules are the ones in the repository.',
  gates: [
    { name: 'Validator', line: 'Only SELECT and WITH. No writes, locks, internal tables, system schemas or admin functions.' },
    { name: 'Read-only role', line: 'querypilot_reader can only select from five demo tables.' },
    { name: 'Limits', line: 'Statement timeout, row cap, fixed search path.' },
  ],
  data: 'Data',
  runs: 'Runs',
  stopped: 'Stopped here',
  also: 'Would stop it too',
  queries: [
    { id: 'join', sql: 'SELECT … FROM orders JOIN customers …', walls: [], result: 'Runs, capped at the row limit.' },
    { id: 'cte', sql: 'WITH monthly AS (SELECT …) SELECT …', walls: [], result: 'Runs. WITH is allowed, as long as it only reads.' },
    { id: 'delete', sql: 'DELETE FROM orders …', walls: [0, 1], result: 'Blocked by the validator. Had it slipped through, the role can’t write either.' },
    { id: 'lock', sql: 'SELECT … FROM orders FOR UPDATE', walls: [0], result: 'Blocked by the validator: locking clauses aren’t allowed.' },
    { id: 'system', sql: 'SELECT … FROM pg_catalog.pg_roles', walls: [0], result: 'Blocked by the validator: system schemas are off limits.' },
    { id: 'logs', sql: 'SELECT … FROM query_logs', walls: [0, 1], result: 'Blocked by the validator, and the role can’t read the app’s own tables anyway.' },
    { id: 'slow', sql: 'SELECT … (a query that never ends)', walls: [2], result: 'Passes both walls, then the statement timeout stops it.' },
  ] as GateQuery[],
};

const gatesFr: typeof gatesEn = {
  pick: 'Choisissez une requête générée par le modèle',
  note: 'Requêtes illustratives. Les règles sont celles du dépôt.',
  gates: [
    { name: 'Validateur', line: 'Seulement SELECT et WITH. Ni écriture, ni verrou, ni tables internes, schémas système ou fonctions d’administration.' },
    { name: 'Rôle en lecture seule', line: 'querypilot_reader ne peut lire que cinq tables de démo.' },
    { name: 'Limites', line: 'Timeout, plafond de lignes, search path fixe.' },
  ],
  data: 'Données',
  runs: 'Exécutée',
  stopped: 'Arrêtée ici',
  also: 'L’arrêterait aussi',
  queries: [
    { id: 'join', sql: 'SELECT … FROM orders JOIN customers …', walls: [], result: 'Exécutée, dans la limite du plafond de lignes.' },
    { id: 'cte', sql: 'WITH monthly AS (SELECT …) SELECT …', walls: [], result: 'Exécutée. WITH est autorisé, tant qu’il ne fait que lire.' },
    { id: 'delete', sql: 'DELETE FROM orders …', walls: [0, 1], result: 'Bloquée par le validateur. Même si elle était passée, le rôle ne peut pas écrire.' },
    { id: 'lock', sql: 'SELECT … FROM orders FOR UPDATE', walls: [0], result: 'Bloquée par le validateur : les clauses de verrouillage sont interdites.' },
    { id: 'system', sql: 'SELECT … FROM pg_catalog.pg_roles', walls: [0], result: 'Bloquée par le validateur : les schémas système sont hors limites.' },
    { id: 'logs', sql: 'SELECT … FROM query_logs', walls: [0, 1], result: 'Bloquée par le validateur, et le rôle ne peut de toute façon pas lire les tables de l’application.' },
    { id: 'slow', sql: 'SELECT … (une requête sans fin)', walls: [2], result: 'Elle passe les deux murs, puis le timeout l’arrête.' },
  ],
};

export const gates = { en: gatesEn, fr: frenchSpacing(gatesFr) };
