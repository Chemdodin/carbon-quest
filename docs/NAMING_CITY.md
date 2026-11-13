# Carbon Quest — Chapter 03: Naming City

Continues Chapter 02 Formula Ruins within the original Site and audience. Built 13 November 2026 (Hong Kong).

## Learning and story map

| District | Prerequisite and interaction | Missions | Handoff |
|---|---|---:|---|
| Prefix Port | Reuse Formula Ruins' skeletal interpretation; name unbranched alkanes including C7 and C10; C1–C10 Atlas | 4 | Carbon count → parent |
| Parent Avenue | Trace connected carbon nodes; route may turn; cannot revisit atoms | 3 | Longest route → parent name |
| Number Street | Compare both directions, repeated locants, symmetric tie | 3 | Numbering → branch address |
| Branch Bazaar | Name methyl/dimethyl alkanes and a monosubstituted cycloalkane; guided ring introduction | 4 | Address → structure |
| Molecule Workshop | Set parent length and add/remove methyl branches; equivalent reversed structures accepted | 3 | Guided building → independent application |
| Atlas Tower | Correct a naming error; name nonane; build 2-methylpentane | 3 | Naming Compass → Isomer Alley preview |

Pearson Edexcel IAL Chemistry 2018, Topic 4.5; supports 4.9–4.11. Source: https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf

This is alkane/cycloalkane naming foundation within the existing Topic 4 journey. Nomenclature of functional groups is introduced when those groups are encountered in later topics. Prefixes extend to C10; this chapter does not claim C10 isomer enumeration is required. Isomer Alley is a preview, not an implemented chapter. Ring/chain choice uses only examples with the ring unambiguously larger than the branch.

## Implementation

- Entry: `dist/naming-city.html`; Formula Ruins has a direct chapter link and completion handoff.
- Existing Formula Ruins content/assets retained; local progress key retained (`cq-ruins-v1`), completion flag added.
- New state key `cq-naming-v1`: current mission, solved missions, attempts, hints, first-try stars, completion. Local browser only; no cross-device accounts or teacher dashboard.
- Six sequential district unlocks; solved districts remain reviewable. First teaching sequence is deterministic.
- Immediate retry feedback; separate mission completion and first-try stars. Hint use removes first-try eligibility; consulting the Atlas does not. Historical first-try stars do not change during review.
- Names accept case differences, outer whitespace and typographic hyphens. Invalid punctuation receives specific feedback. Optional redundant 1- on methylcyclopentane is accepted with simplification advice.
- Builder accepts the equivalent reversal of a numbered parent; branch controls intentionally allow one methyl per internal carbon for its selected missions.
- Chemical drawings use defined molecular graphs and SVG geometry, consistent non-scaling bond weights and clean skeletal notation. No exact chemistry is generated as bitmap art. Numbering and trace markers are explicit learning overlays, not atom labels.
- Decorative artwork reused the established two explorers. New city environment generated with the built-in image generator; final project asset: `dist/naming-city.webp`. Prompt: same ponytail girl in mustard jacket and black-haired boy in teal with backpacks, rich pixel RPG twilight city, copper roofs/canals/clock tower, atlas fragment, no text or chemistry teaching diagrams. Reference: existing `ruins-pixel.png`.

## Verification

- `node --check dist/naming-city.js`
- `node checks/chemistry.cjs`: all molecular graph valences, expected atom counts, parent connectivity, longest-path lengths, named branch locants, 20 mission total, C1–C10 coverage.
- Chromium UI: completed all 20 missions through normal controls; tested wrong naming, punctuation, short trace, wrong numbering, hints, correction, tiles, construction, symmetry, district unlock, completion (20/20 restored, 15/20 first-try after five intentional incorrect attempts), revisit, Atlas and persistence after reload.
- Responsive UI exercised inside a 390px iframe (375px content width due desktop scrollbar); no horizontal document overflow. Builder, map and Atlas verified. This is Chromium responsive QA; no iOS/WebKit or physical-device run.
- The production Site's existing login gate remained in place. Preview UI used the checked-out source; deployment is verified via the Sites native result.
