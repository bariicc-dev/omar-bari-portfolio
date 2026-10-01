import type { OrgKey } from '../orgs';

export type Slug = 'essor' | 'aiops' | 'pipeline' | 'querypilot';

export type DeepPanel =
  | { kind: 'flow'; title: string; paths: { label: string; nodes: string[] }[]; note?: string }
  | { kind: 'code'; title: string; label: string; code: string; note?: string }
  | { kind: 'pair'; title: string; left: { label: string; code: string }; right: { label: string; code: string }; note?: string }
  | { kind: 'list'; title: string; items: string[] }
  | { kind: 'text'; title: string; text: string };

/** One project, told as: a question, its answer, the artifact, then the hard part, the choice and what it changed. */
export interface Story {
  slug: Slug;
  meta: { title: string; description: string };
  /** where and when, shown with the organisation's logo */
  context: string;
  logos: OrgKey[];
  /** the homepage entry */
  tile: { ctx: string; cta: string };
  question: string;
  answer: string;
  artLabel: string;
  hard: string;
  chose: string;
  changed: string;
  deep: DeepPanel[];
  next: Slug;
}
