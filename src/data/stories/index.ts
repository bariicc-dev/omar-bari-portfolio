import type { Lang } from '../ui';
import type { Slug, Story } from './types';
import { essor } from './essor';
import { aiops } from './aiops';
import { pipeline } from './pipeline';
import { querypilot } from './querypilot';

export const stories: Record<Slug, Record<Lang, Story>> = { essor, aiops, pipeline, querypilot };

export const storyHref = (lang: Lang, slug: Slug) => `${lang === 'fr' ? '/fr' : ''}/work/${slug}/`;
