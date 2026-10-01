# Omar Bari · Portfolio

Bilingual (EN/FR) portfolio, built with [Astro](https://astro.build) as a static site.

```bash
npm install
npm run dev        # local dev server, http://localhost:4321
npm run build      # static build to dist/
npm run preview    # serve the build
```

Deploy `dist/` to any static host (build command `npm run build`, output `dist`). No environment variables, no trackers.

## The idea

Every screen is a question, a choice and a visible result.

1. **Opening.** Who Omar is, one sentence about the kind of work, the original photo at its real size, and one action: "Try to make it delete something".
2. **First discovery.** Essor, the ERP assistant from the B-AGILE internship, as a live (simulated) interface. Pick a request and three checks decide whether it answers with sources, asks first, or refuses.
3. **Choose another problem.** Four entries, each led by a question and a small drawing of the work: a decision list (Essor), an incident signal (AIOps), a raw-to-clean record (lead pipeline) and two walls (QueryPilot, smaller).
4. **Depth on demand.** Each entry opens a short story page (`/work/<slug>/`): the question answered at once, an interactive artifact, three beats (the hard part, what I chose, what it changed) and technical detail in closed panels.
5. **Ending.** A short introduction, experience and education with the organisations' logos, and contact.

| What | Where |
| --- | --- |
| Homepage copy | `src/data/home.ts` |
| Essor decision widget (requests, checks, outcomes) | `src/data/decide.ts`, `src/components/home/Decide.astro` |
| Project stories, plus the Essor toggle and QueryPilot walls data | `src/data/stories/*.ts` |
| AIOps replay and lead pipeline simulations | `src/data/aiopsSim.ts`, `src/data/leadsSim.ts` |
| Shared strings | `src/data/ui.ts` |
| Organisation names and logo sizes | `src/data/orgs.ts`, logos in `src/assets/logos/` |
| Contact links, CV path, domain | `src/data/site.ts` |
| Design tokens | `src/styles/global.css` |

French objects are typed against English ones, so a missing translation is a type error. French punctuation spacing is added automatically (`src/data/french.ts`), and `src/components/Nb.astro` keeps hyphenated names like B-AGILE or PO-2031 from breaking across lines.

## Visual identity

Deep navy, cool white, and one accent (lime) that also means "allowed". Amber means "waiting for you", coral means "stopped". Type is Mona Sans (its width axis gives the headlines their shape) with Martian Mono for data. Motion only shows cause and effect: checks ticking, a result arriving, a line being replayed. Under `prefers-reduced-motion` results appear at once. Nothing depends on hover, and without JavaScript every simulation shows its results (the Essor toggle and the QueryPilot walls still work, as they are built on radio buttons).

## The photo

`src/assets/portrait.jpg` is the original 200 × 200 photo. It is served byte for byte (no resizing, no re-encoding, background kept) and shown at 84 px, or 68 px on phones, so it is never enlarged on normal screens. If a larger original becomes available, replace that file; nothing else needs to change.

## Logos

Local copies of each organisation's own official files, taken from their websites in September 2026 (only transparent margins trimmed). They appear only beside the internship, degree or project they give context to, never as a wall of names and never as clients, partners or endorsements.

| Organisation | Source | Where it appears |
| --- | --- | --- |
| B-AGILE | bagile-systems.com | Experience, Essor story |
| Société Générale ABS | societegenerale.com/en/societe-generale-logo | Experience, AIOps story |
| A.G.T.T | agtt.ma | Experience |
| ESILV | esilv.fr/presse | Education, pipeline story |
| Université Internationale de Casablanca | uic.ac.ma | Education |
| Red Alert Labs | redalertlabs.com | Pipeline story (an ESILV project collaboration) |

Société Générale ABS is the group's IT subsidiary in Casablanca and works under the Société Générale name, so the group logo is shown unaltered, as the group's rules require. The A.G.T.T and Red Alert Labs files are small (199×80 and 300×74).

## Social previews

`assets-src/og.html` renders ten 1200×630 cards (home and each story, in English and French) into `public/og/`. Its strings mirror the site's copy; update both together, then run:

```powershell
powershell -File assets-src/render-assets.ps1   # CV PDF, social cards, touch icon
```

The `og:image` tags need absolute URLs, so they only appear once `SITE_URL` is set.

## Going live

Set `SITE_URL` in `src/data/site.ts`. Until then, canonical URLs, hreflang, `og:url`, `og:image` and the sitemap are left out on purpose. Then uncomment the `Sitemap:` line in `public/robots.txt`.

On Windows, `astro.config.mjs` pins the project root to its on-disk path: building from a terminal whose path case differs (VS Code often opens `c:\` in lower case) otherwise drops every page's stylesheet.

## Facts and labels

Every claim comes from the CV and cover letter. QueryPilot links to its public repository and its claims match that README. All four interactions run on fictional data and say so; none is connected to a real system. The downloadable CV (`public/Omar-Bari-CV.pdf`, generated from `assets-src/cv.html`) contains the phone number; the site does not.
