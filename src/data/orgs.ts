/**
 * Organisations behind the work. Their official logos (src/assets/logos,
 * taken from each organisation's own site in September 2026) appear only
 * next to the internship, degree or project they give context to, never
 * as a wall of names, and never as clients, partners or endorsements.
 *
 * Société Générale ABS (African Business Services) is the group's IT
 * subsidiary in Casablanca and operates under the Société Générale name,
 * so the group logo is shown, unaltered as the group's rules require.
 */
export type OrgKey = 'bagile' | 'sgabs' | 'agtt' | 'esilv' | 'uic' | 'ral';

export const orgNames: Record<OrgKey, string> = {
  bagile: 'B-AGILE',
  sgabs: 'Société Générale ABS',
  agtt: 'A.G.T.T',
  esilv: 'ESILV',
  uic: 'Université Internationale de Casablanca',
  ral: 'Red Alert Labs',
};

/** display height in px, tuned so the marks look equally weighted at small size */
export const logoHeight: Record<OrgKey, number> = {
  bagile: 26,
  sgabs: 17,
  agtt: 24,
  esilv: 30,
  uic: 22,
  ral: 20,
};
