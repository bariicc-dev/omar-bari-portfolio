/** Essor AI Copilot. Facts: CV + cover letter (B-AGILE, May to Sep 2026). */
import { frenchSpacing } from '../french';
import type { Story } from './types';

const en: Story = {
  slug: 'essor',
  meta: {
    title: 'Why the ERP assistant couldn’t write its own SQL · Omar Bari',
    description:
      'Essor, the ERP assistant I built at B-AGILE: the model picks a typed operation from a short list, and code writes the query. See the same request under both designs.',
  },
  context: 'Internship at B-AGILE, Casablanca · May to Sep 2026',
  logos: ['bagile'],
  tile: { ctx: 'B-AGILE · internship, 2026', cta: 'See the design choice' },
  question: 'Why couldn’t the assistant write its own SQL?',
  answer:
    'Because a model that writes SQL can write the wrong SQL. In Essor, the model only picks an operation from a short list, and my code writes the query.',
  artLabel: 'The same request under two designs',
  hard: 'Requests arrive in everyday French, and some of them change stock. A model that composes its own SQL can delete, or update the wrong rows, before anyone has read the query.',
  chose:
    'A planner that turns each request into a typed operation from an allowlist, checked by Pydantic and business rules. Every write shows a preview, waits for a yes and carries an idempotency key.',
  changed: 'The risky part became a short list I could review and test. Deleting isn’t on it, so no wording can make it happen.',
  deep: [
    {
      kind: 'flow',
      title: 'Two paths through the system',
      paths: [
        {
          label: 'Answers',
          nodes: ['Sanitized documents', 'Chunks + metadata', 'Keyword + vector search', 'RRF fusion', 'Evidence threshold', 'Cited answer'],
        },
        {
          label: 'Actions',
          nodes: ['French request', 'Planner (LLM or rules)', 'Typed operation', 'Pydantic + business rules', 'Preview', 'Confirmation', 'Idempotent write', 'Audit trail'],
        },
      ],
      note: 'Search can support an answer. It never authorizes an action. Only validation does.',
    },
    {
      kind: 'list',
      title: 'Everything I built, end to end',
      items: [
        'A FastAPI and PostgreSQL backend with Pydantic contracts, SQLAlchemy models and Alembic migrations.',
        'The planner, on an NVIDIA-compatible LLM, with a rule-based fallback that handles common requests when the model is down or unsure.',
        'Hybrid search over the documents: chunking, metadata, embeddings, a vector index, keyword and semantic results merged with reciprocal rank fusion, and citations.',
        'Writes with a preview, a confirmation, an idempotency key and an audit trail.',
        'A React interface for purchasing, receptions, stock and supplier returns, running on sanitized exports of business data.',
      ],
    },
    {
      kind: 'list',
      title: 'Tradeoffs I accepted',
      items: [
        'Every new capability needs code and a review. That friction is what makes the list auditable.',
        'Two planners to keep consistent. That is the price of still working when the LLM doesn’t.',
        'Sometimes the honest answer is “I have no source”.',
      ],
    },
    {
      kind: 'text',
      title: 'Team and cadence',
      text: 'I built it with my manager and the other interns, with a daily meeting to share progress and blockers. Stack: Python, FastAPI, Pydantic, PostgreSQL, SQLAlchemy, Alembic, React, Docker.',
    },
  ],
  next: 'aiops',
};

const fr: Story = {
  slug: 'essor',
  meta: {
    title: 'Pourquoi l’assistant ERP ne pouvait pas écrire son propre SQL · Omar Bari',
    description:
      'Essor, l’assistant ERP que j’ai construit chez B-AGILE : le modèle choisit une opération typée dans une courte liste, et le code écrit la requête. Voyez la même demande dans les deux conceptions.',
  },
  context: 'Stage chez B-AGILE, Casablanca · mai à sept. 2026',
  logos: ['bagile'],
  tile: { ctx: 'B-AGILE · stage, 2026', cta: 'Voir le choix de conception' },
  question: 'Pourquoi l’assistant ne pouvait-il pas écrire son propre SQL ?',
  answer:
    'Parce qu’un modèle qui écrit du SQL peut écrire le mauvais SQL. Dans Essor, le modèle choisit seulement une opération dans une courte liste, et c’est mon code qui écrit la requête.',
  artLabel: 'La même demande dans deux conceptions',
  hard: 'Les demandes arrivent en français courant, et certaines modifient le stock. Un modèle qui compose son propre SQL peut supprimer, ou modifier les mauvaises lignes, avant que quiconque ait lu la requête.',
  chose:
    'Un planificateur qui transforme chaque demande en opération typée d’une liste autorisée, vérifiée par Pydantic et par les règles métier. Chaque écriture montre un aperçu, attend un oui et porte une clé d’idempotence.',
  changed: 'La partie risquée est devenue une courte liste que je pouvais relire et tester. La suppression n’y figure pas, donc aucune formulation ne peut la déclencher.',
  deep: [
    {
      kind: 'flow',
      title: 'Deux chemins dans le système',
      paths: [
        {
          label: 'Réponses',
          nodes: ['Documents assainis', 'Chunks + métadonnées', 'Recherche mots-clés + vectorielle', 'Fusion RRF', 'Seuil de preuve', 'Réponse citée'],
        },
        {
          label: 'Actions',
          nodes: ['Demande en français', 'Planificateur (LLM ou règles)', 'Opération typée', 'Pydantic + règles métier', 'Aperçu', 'Confirmation', 'Écriture idempotente', 'Journal d’audit'],
        },
      ],
      note: 'La recherche peut appuyer une réponse. Elle n’autorise jamais une action. Seule la validation le fait.',
    },
    {
      kind: 'list',
      title: 'Tout ce que j’ai construit, de bout en bout',
      items: [
        'Un backend FastAPI et PostgreSQL, avec des contrats Pydantic, des modèles SQLAlchemy et des migrations Alembic.',
        'Le planificateur, sur un LLM compatible NVIDIA, avec un repli à base de règles qui traite les demandes courantes quand le modèle est indisponible ou hésite.',
        'Une recherche hybride dans les documents : découpage, métadonnées, embeddings, index vectoriel, résultats mots-clés et sémantiques fusionnés par reciprocal rank fusion, et citations.',
        'Des écritures avec aperçu, confirmation, clé d’idempotence et journal d’audit.',
        'Une interface React pour les achats, les réceptions, le stock et les retours fournisseurs, sur des exports assainis de données métier.',
      ],
    },
    {
      kind: 'list',
      title: 'Les compromis que j’ai acceptés',
      items: [
        'Chaque nouvelle capacité demande du code et une relecture. C’est cette friction qui rend la liste vérifiable.',
        'Deux planificateurs à garder cohérents. C’est le prix pour fonctionner encore quand le LLM ne répond pas.',
        'Parfois, la réponse honnête est « je n’ai pas de source ».',
      ],
    },
    {
      kind: 'text',
      title: 'Équipe et rythme',
      text: 'Je l’ai construit avec mon manager et les autres stagiaires, avec un point quotidien sur l’avancement et les blocages. Stack : Python, FastAPI, Pydantic, PostgreSQL, SQLAlchemy, Alembic, React, Docker.',
    },
  ],
  next: 'aiops',
};

export const essor = { en, fr: frenchSpacing(fr) };

/** "Same request, two designs". Illustrative: the SQL side is the design I chose not to build. */
export interface Design {
  code: string;
  checks?: { t: string; ok: boolean }[];
  verdict: 'ok' | 'stop';
  result: string;
}
export interface ToggleRequest {
  id: string;
  text: string;
  sql: Design;
  typed: Design;
}

const toggleEn = {
  requestLabel: 'Request',
  designLabel: 'Design',
  designs: { sql: 'If the model wrote SQL', typed: 'What Essor does' },
  outputLabel: { sql: 'The model writes', typed: 'The model picks' },
  note: 'Illustrative, on fictional data. The first design is the one I chose not to build.',
  requests: [
    {
      id: 'delete',
      text: 'Delete the last three deliveries.',
      sql: {
        code: 'DELETE FROM receptions\nWHERE id IN (\n  SELECT id FROM receptions\n  ORDER BY received_at DESC\n  LIMIT 3\n);',
        verdict: 'stop',
        result: 'Runs at once. Three deliveries are gone, and stock no longer matches what’s on the shelves.',
      },
      typed: {
        code: '{\n  "operation": null,\n  "reason": "no operation on the list\n             deletes deliveries"\n}',
        checks: [{ t: 'No matching operation', ok: false }],
        verdict: 'ok',
        result: 'Refused. It offers a supplier return instead, for you to confirm.',
      },
    },
    {
      id: 'record',
      text: 'Record 40 units of REF-114 on order PO-2031.',
      sql: {
        code: "UPDATE stock SET qty = qty + 40\nWHERE item = 'REF-114';\n\nINSERT INTO receptions (po, item, qty)\nVALUES ('PO-2031', 'REF-114', 40);",
        verdict: 'stop',
        result: 'Written at once, with no preview. A double click records the delivery twice.',
      },
      typed: {
        code: '{\n  "operation": "create_reception",\n  "args": {\n    "po_ref": "PO-2031",\n    "item_ref": "REF-114",\n    "qty": 40\n  }\n}',
        checks: [
          { t: 'On the list', ok: true },
          { t: 'Arguments valid', ok: true },
          { t: '40 ≤ 60 still expected', ok: true },
        ],
        verdict: 'ok',
        result: 'Shown as a preview first. Nothing is saved until you say yes, and a double click saves it once.',
      },
    },
  ] as ToggleRequest[],
};

const toggleFr: typeof toggleEn = {
  requestLabel: 'Demande',
  designLabel: 'Conception',
  designs: { sql: 'Si le modèle écrivait du SQL', typed: 'Ce que fait Essor' },
  outputLabel: { sql: 'Le modèle écrit', typed: 'Le modèle choisit' },
  note: 'Illustratif, sur des données fictives. La première conception est celle que j’ai choisi de ne pas construire.',
  requests: [
    {
      id: 'delete',
      text: 'Supprime les trois dernières réceptions.',
      sql: {
        code: 'DELETE FROM receptions\nWHERE id IN (\n  SELECT id FROM receptions\n  ORDER BY received_at DESC\n  LIMIT 3\n);',
        verdict: 'stop',
        result: 'Exécuté aussitôt. Trois réceptions disparaissent, et le stock ne correspond plus aux rayons.',
      },
      typed: {
        code: '{\n  "operation": null,\n  "reason": "aucune opération de la liste\n             ne supprime de réception"\n}',
        checks: [{ t: 'Aucune opération correspondante', ok: false }],
        verdict: 'ok',
        result: 'Refusé. Il propose plutôt un retour fournisseur, que vous validerez.',
      },
    },
    {
      id: 'record',
      text: 'Enregistre 40 unités de REF-114 sur la commande PO-2031.',
      sql: {
        code: "UPDATE stock SET qty = qty + 40\nWHERE item = 'REF-114';\n\nINSERT INTO receptions (po, item, qty)\nVALUES ('PO-2031', 'REF-114', 40);",
        verdict: 'stop',
        result: 'Écrit aussitôt, sans aperçu. Un double clic enregistre la réception deux fois.',
      },
      typed: {
        code: '{\n  "operation": "create_reception",\n  "args": {\n    "po_ref": "PO-2031",\n    "item_ref": "REF-114",\n    "qty": 40\n  }\n}',
        checks: [
          { t: 'Dans la liste', ok: true },
          { t: 'Arguments valides', ok: true },
          { t: '40 ≤ 60 encore attendues', ok: true },
        ],
        verdict: 'ok',
        result: 'Montré d’abord en aperçu. Rien n’est enregistré sans votre oui, et un double clic n’enregistre qu’une fois.',
      },
    },
  ],
};

export const sqlToggle = { en: toggleEn, fr: frenchSpacing(toggleFr) };
