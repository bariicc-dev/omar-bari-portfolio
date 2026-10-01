/**
 * AIOps incident replay. A FICTIONAL incident with made-up numbers, shown
 * on the page as such. It illustrates how the pieces of the Société
 * Générale ABS prototype fit together (signal, detection, classification,
 * runbook retrieval); it is not data from that work and not a production
 * monitoring service.
 */
import { frenchSpacing } from './french';

/** one point per minute from 13:40 */
export const START_MINUTE = 13 * 60 + 40;
export const LATENCY = [188, 192, 185, 197, 190, 186, 194, 199, 191, 187, 193, 196, 189, 184, 192, 198, 195, 188, 190, 197, 201, 205, 420, 780, 910, 870, 640, 380, 260, 225, 214, 205, 198, 193, 190, 189];
export const SCORE = [0.08, 0.09, 0.07, 0.1, 0.08, 0.07, 0.09, 0.11, 0.08, 0.07, 0.09, 0.1, 0.08, 0.06, 0.09, 0.11, 0.1, 0.08, 0.08, 0.1, 0.12, 0.14, 0.46, 0.94, 0.97, 0.96, 0.88, 0.61, 0.33, 0.2, 0.16, 0.13, 0.11, 0.1, 0.09, 0.08];
export const THRESHOLD = 0.8;
/** index where the replay pauses: the incident is fully explained here */
export const FOCUS = 24;

export type Phase = 'normal' | 'rising' | 'flagged' | 'explained' | 'recovering';
export const phaseAt = (i: number): Phase =>
  i < 22 ? 'normal' : i === 22 ? 'rising' : i === 23 ? 'flagged' : i <= 27 ? 'explained' : 'recovering';

export type Led = 'idle' | 'ok' | 'warn' | 'info';
export interface StageCopy {
  name: string;
  byPhase: Record<Phase, { led: Led; text: string }>;
}

const en = {
  ui: {
    sim: 'Replay · fictional incident',
    note: 'Made-up numbers. The real work was a prototype at Société Générale ABS, not a production monitoring service.',
    chartTitle: 'p95 latency of an internal API (ms)',
    replay: 'Replay the incident',
    replayAgain: 'Replay again',
    jump: 'Jump to the incident',
    slider: 'Time',
    flagged: 'flagged',
    threshold: 'score ≥ 0.8',
    tooltipScore: 'anomaly score',
    tableSummary: 'Show the data',
    tableCols: ['Time', 'p95 latency (ms)', 'Anomaly score'],
    retrievedLabel: 'Runbook sections found',
    dropped: 'Dropped: “Disk pressure”, similarity 0.22.',
  },
  stages: [
    {
      name: 'Signal',
      byPhase: {
        normal: { led: 'ok', text: 'Normal. p95 latency around 190 ms.' },
        rising: { led: 'warn', text: 'p95 latency jumps from about 200 to 420 ms.' },
        flagged: { led: 'warn', text: 'Still climbing: 780 ms.' },
        explained: { led: 'warn', text: 'Peak at 910 ms.' },
        recovering: { led: 'ok', text: 'Back under 250 ms.' },
      },
    },
    {
      name: 'Detection',
      byPhase: {
        normal: { led: 'ok', text: 'Anomaly score around 0.1, far under the 0.8 threshold.' },
        rising: { led: 'info', text: 'Score 0.46. Unusual, but not flagged yet.' },
        flagged: { led: 'warn', text: 'Flagged: score 0.94, over the 0.8 threshold.' },
        explained: { led: 'warn', text: 'Flagged: score 0.97, over the 0.8 threshold.' },
        recovering: { led: 'ok', text: 'Score back to normal. The flag stays on the record.' },
      },
    },
    {
      name: 'Classification',
      byPhase: {
        normal: { led: 'idle', text: 'Nothing to classify.' },
        rising: { led: 'idle', text: 'Waits for a flag.' },
        flagged: { led: 'info', text: 'Classifying the flagged event…' },
        explained: { led: 'info', text: 'Looks like API degradation (0.81). Next guess: dependency timeout (0.12).' },
        recovering: { led: 'info', text: 'Filed as API degradation (0.81).' },
      },
    },
    {
      name: 'Runbook',
      byPhase: {
        normal: { led: 'idle', text: 'Nothing to look up.' },
        rising: { led: 'idle', text: 'Nothing to look up yet.' },
        flagged: { led: 'idle', text: 'Waits for the class.' },
        explained: { led: 'ok', text: 'Best match: “Slow API responses”, step 2. Check the connection pool, then the upstream dependency.' },
        recovering: { led: 'ok', text: 'Kept with the incident: “Slow API responses”, step 2.' },
      },
    },
  ] as StageCopy[],
  sources: ['0.83 · Slow API responses, step 2', '0.71 · Timeouts on downstream calls, step 1'],
};

const fr: typeof en = {
  ui: {
    sim: 'Rejeu · incident fictif',
    note: 'Chiffres inventés. Le vrai travail était un prototype à la Société Générale ABS, pas un service de supervision en production.',
    chartTitle: 'Latence p95 d’une API interne (ms)',
    replay: 'Rejouer l’incident',
    replayAgain: 'Rejouer encore',
    jump: 'Aller à l’incident',
    slider: 'Heure',
    flagged: 'signalé',
    threshold: 'score ≥ 0,8',
    tooltipScore: 'score d’anomalie',
    tableSummary: 'Voir les données',
    tableCols: ['Heure', 'Latence p95 (ms)', 'Score d’anomalie'],
    retrievedLabel: 'Sections de runbook trouvées',
    dropped: 'Écarté : « Pression disque », similarité 0,22.',
  },
  stages: [
    {
      name: 'Signal',
      byPhase: {
        normal: { led: 'ok', text: 'Normal. Latence p95 autour de 190 ms.' },
        rising: { led: 'warn', text: 'La latence p95 passe d’environ 200 à 420 ms.' },
        flagged: { led: 'warn', text: 'Elle grimpe encore : 780 ms.' },
        explained: { led: 'warn', text: 'Pic à 910 ms.' },
        recovering: { led: 'ok', text: 'Retour sous 250 ms.' },
      },
    },
    {
      name: 'Détection',
      byPhase: {
        normal: { led: 'ok', text: 'Score d’anomalie autour de 0,1, très loin du seuil de 0,8.' },
        rising: { led: 'info', text: 'Score 0,46. Inhabituel, mais pas encore signalé.' },
        flagged: { led: 'warn', text: 'Signalé : score 0,94, au-dessus du seuil de 0,8.' },
        explained: { led: 'warn', text: 'Signalé : score 0,97, au-dessus du seuil de 0,8.' },
        recovering: { led: 'ok', text: 'Score revenu à la normale. Le signalement reste dans l’historique.' },
      },
    },
    {
      name: 'Classification',
      byPhase: {
        normal: { led: 'idle', text: 'Rien à classer.' },
        rising: { led: 'idle', text: 'Attend un signalement.' },
        flagged: { led: 'info', text: 'Classement de l’événement signalé…' },
        explained: { led: 'info', text: 'Ressemble à une dégradation d’API (0,81). Deuxième hypothèse : timeout d’une dépendance (0,12).' },
        recovering: { led: 'info', text: 'Classé en dégradation d’API (0,81).' },
      },
    },
    {
      name: 'Runbook',
      byPhase: {
        normal: { led: 'idle', text: 'Rien à chercher.' },
        rising: { led: 'idle', text: 'Rien à chercher pour l’instant.' },
        flagged: { led: 'idle', text: 'Attend la classe.' },
        explained: { led: 'ok', text: 'Meilleure correspondance : « API lente », étape 2. Vérifier le pool de connexions, puis la dépendance amont.' },
        recovering: { led: 'ok', text: 'Gardé avec l’incident : « API lente », étape 2.' },
      },
    },
  ],
  sources: ['0,83 · API lente, étape 2', '0,71 · Timeouts sur les appels aval, étape 1'],
};

export const aiopsSim = { en, fr: frenchSpacing(fr) };
