/**
 * The Essor "decision moment" on the homepage: three requests, three
 * different outcomes. An illustrative simulation on fictional data (the
 * page says so); it replays how the assistant decides and is not connected
 * to B-AGILE's system. Facts behind it: CV and cover letter (typed
 * operations from an allowlist, citations with an evidence threshold,
 * preview + confirmation + idempotency key on every write).
 */
import { frenchSpacing } from './french';

export type Kind = 'refuse' | 'confirm' | 'answer';
export type CheckState = 'pass' | 'fail';

export interface Check {
  label: string;
  state: CheckState;
  note: string;
}

export interface Request {
  id: Kind;
  text: string;
  checks: Check[];
  status: string;
  reply?: string;
  sources?: string[];
  rows?: [string, string, string][];
  why: string;
}

const en = {
  app: 'Essor',
  sub: 'the ERP assistant I built at B-AGILE',
  ask: 'Ask it',
  exitsLabel: 'What it can do with a request',
  exits: {
    answer: { title: 'Answers', line: 'when documents back it up' },
    confirm: { title: 'Asks you first', line: 'before anything changes' },
    refuse: { title: 'Refuses', line: 'what isn’t on its list' },
  },
  idle: 'Pick a request. Three checks decide which way it goes.',
  whyLabel: 'Why',
  more: 'Why it can’t write its own SQL',
  confirm: 'Confirm',
  cancel: 'Cancel',
  saved: 'Saved as REC-0912.',
  again: 'Save it again',
  resent: 'Same idempotency key, so nothing new was written.',
  cancelled: 'Cancelled. Nothing was written.',
  restart: 'Start over',
  before: 'Now',
  after: 'After',
  requests: [
    {
      id: 'refuse',
      text: 'Delete the last three deliveries.',
      checks: [
        { label: 'Understood', state: 'pass', note: 'delete 3 deliveries' },
        { label: 'Evidence', state: 'pass', note: 'found REC-0909 to 0911' },
        { label: 'Allowed', state: 'fail', note: 'no delete operation' },
      ],
      status: 'Refused',
      reply: 'I can’t delete deliveries. If items need to go back, I can prepare a supplier return for you to confirm.',
      why: 'The model can only pick from a fixed list of operations. Delete isn’t on it, so no wording can trigger it.',
    },
    {
      id: 'confirm',
      text: 'Record 40 units of REF-114 on order PO-2031.',
      checks: [
        { label: 'Understood', state: 'pass', note: 'record a delivery' },
        { label: 'Evidence', state: 'pass', note: 'PO-2031 still expects 60' },
        { label: 'Allowed', state: 'pass', note: 'on the list, rules pass' },
      ],
      status: 'Waiting for your OK',
      rows: [
        ['Stock of REF-114', '128', '168'],
        ['PO-2031 received', '40 / 100', '80 / 100'],
      ],
      why: 'Every write shows its effect first and carries an idempotency key, so a double click can’t save it twice.',
    },
    {
      id: 'answer',
      text: 'How do I handle a supplier return for damaged items?',
      checks: [
        { label: 'Understood', state: 'pass', note: 'a question, nothing changes' },
        { label: 'Evidence', state: 'pass', note: '2 strong sources' },
        { label: 'Allowed', state: 'pass', note: 'read-only' },
      ],
      status: 'Answered, with 2 sources',
      reply: 'Create a supplier return from the delivery, reason “non-compliant”, and attach the report. Stock is adjusted once the return is approved.',
      sources: ['Supplier returns procedure, v3, §2', 'Internal note: non-compliant deliveries'],
      why: 'It only answers when search finds strong enough evidence, and it cites it. No source, no answer.',
    },
  ] as Request[],
};

const fr: typeof en = {
  app: 'Essor',
  sub: 'l’assistant ERP que j’ai construit chez B-AGILE',
  ask: 'Demandez-lui',
  exitsLabel: 'Ce qu’il peut faire d’une demande',
  exits: {
    answer: { title: 'Répond', line: 'quand des documents l’appuient' },
    confirm: { title: 'Demande d’abord', line: 'avant de modifier quoi que ce soit' },
    refuse: { title: 'Refuse', line: 'ce qui n’est pas dans sa liste' },
  },
  idle: 'Choisissez une demande. Trois vérifications décident de la suite.',
  whyLabel: 'Pourquoi',
  more: 'Pourquoi il ne peut pas écrire son propre SQL',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  saved: 'Enregistré sous REC-0912.',
  again: 'Enregistrer à nouveau',
  resent: 'Même clé d’idempotence, donc rien de nouveau n’a été écrit.',
  cancelled: 'Annulé. Rien n’a été écrit.',
  restart: 'Recommencer',
  before: 'Avant',
  after: 'Après',
  requests: [
    {
      id: 'refuse',
      text: 'Supprime les trois dernières réceptions.',
      checks: [
        { label: 'Compris', state: 'pass', note: 'supprimer 3 réceptions' },
        { label: 'Preuves', state: 'pass', note: 'REC-0909 à 0911 trouvées' },
        { label: 'Autorisé', state: 'fail', note: 'aucune opération de suppression' },
      ],
      status: 'Refusé',
      reply: 'Je ne peux pas supprimer de réceptions. Si des articles doivent repartir, je peux préparer un retour fournisseur, que vous validerez.',
      why: 'Le modèle ne peut choisir que dans une liste fixe d’opérations. La suppression n’y est pas, donc aucune formulation ne peut la déclencher.',
    },
    {
      id: 'confirm',
      text: 'Enregistre 40 unités de REF-114 sur la commande PO-2031.',
      checks: [
        { label: 'Compris', state: 'pass', note: 'enregistrer une réception' },
        { label: 'Preuves', state: 'pass', note: 'PO-2031 attend encore 60' },
        { label: 'Autorisé', state: 'pass', note: 'dans la liste, règles OK' },
      ],
      status: 'En attente de votre accord',
      rows: [
        ['Stock de REF-114', '128', '168'],
        ['PO-2031 reçu', '40 / 100', '80 / 100'],
      ],
      why: 'Chaque écriture montre son effet d’abord et porte une clé d’idempotence : un double clic ne peut pas l’enregistrer deux fois.',
    },
    {
      id: 'answer',
      text: 'Comment traiter un retour fournisseur pour des articles endommagés ?',
      checks: [
        { label: 'Compris', state: 'pass', note: 'une question, rien ne change' },
        { label: 'Preuves', state: 'pass', note: '2 sources solides' },
        { label: 'Autorisé', state: 'pass', note: 'lecture seule' },
      ],
      status: 'Répondu, avec 2 sources',
      reply: 'Créez un retour fournisseur depuis la réception, motif « non conforme », et joignez le constat. Le stock est ajusté quand le retour est validé.',
      sources: ['Procédure retours fournisseurs, v3, §2', 'Note interne : réceptions non conformes'],
      why: 'Il ne répond que si la recherche trouve des preuves assez solides, et il les cite. Pas de source, pas de réponse.',
    },
  ],
};

export const decide = { en, fr: frenchSpacing(fr) };
