/**
 * Official logos, local copies from each organisation's own site (see
 * orgs.ts and the README for sources). Only transparent margins were
 * trimmed; the Société Générale mark is unaltered.
 */
import type { ImageMetadata } from 'astro';
import type { OrgKey } from './orgs';
import bagile from '../assets/logos/b-agile.png';
import sgabs from '../assets/logos/societe-generale.png';
import agtt from '../assets/logos/agtt.png';
import esilv from '../assets/logos/esilv.png';
import uic from '../assets/logos/uic.jpg';
import ral from '../assets/logos/red-alert-labs.png';

export const logos: Record<OrgKey, ImageMetadata> = { bagile, sgabs, agtt, esilv, uic, ral };
