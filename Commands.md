### Starlight Links:

[Starlight Configuration](https://starlight.astro.build/reference/configuration/)
[Starlight Deployment](https://docs.astro.build/en/guides/deploy/)

### Rebase manually the whole thing
npm create astro@latest -- --template starlight
--> Start up the instance, build the .astro: npm run-script build
npm run dev
ctrl-c
npx astro add tailwind
npm install @astrojs/starlight-tailwind
npm i starlight-obsidian
npm run-script build
npm run dev
--> copy files over from old build
ensure config files are situated properly
npx astro sync
npm run-script build

### Update Starlight

Pick one (npm/pnpm/Yarn):

npx @astrojs/upgrade
pnpm dlx @astrojs/upgrade
yarn dlx @astrojs/upgrade

### Run in development mode with obsidian-starlight compilation:

Pick one (npm/pnpm/Yarn):

npm run dev
pnpm dev
yarn dev

### Sync

npx astro sync
