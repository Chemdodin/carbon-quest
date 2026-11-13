# Carbon Quest

An interactive IAL Chemistry Topic 4 adventure, from laboratory safety and organic families to free-radical substitution and the restored Atlas.

## Play

Open the GitHub Pages website linked in this repository. Start at Guild Entrance, then follow the journey map through Carbon Forest, Formula Ruins, Naming City, Mirror Caverns, Refinery Tower, Smoke District, Sky Council, Reaction Dojo, Electron Shrine, UV Citadel and Restore the Atlas.

## Run locally

No build tools or external services are required. From the repository folder, run:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Checks

With Node.js installed, run from the repository folder:

```sh
node checks/chemistry.cjs
node checks/mirror.cjs
node checks/origin.cjs
node checks/atlas.cjs
node checks/journey.cjs
```

These check molecular representations, answer data, equation balance, storage fallback and local navigation links. They do not replace classroom or real-device testing.

## Hosting and progress

GitHub Pages serves the `main` branch from `/ (root)`. All game assets use relative paths. The `.nojekyll` file keeps the site static.

Student progress is saved in the current browser only. It does not synchronise between devices. Clearing site storage removes saved progress; blocked storage falls back to a temporary session.

## Source layout

The HTML, CSS, JavaScript and images at the repository root are the complete application. `checks/` contains verification scripts; `docs/` contains the development audit and curriculum notes.

The audit was completed before this GitHub export. Browser storage on this new hostname starts separately from any earlier hosted copy.
