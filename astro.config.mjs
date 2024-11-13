// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian';
import * as constants from './src/styles/constants';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gordonstevens.ca/',
  integrations: [
    starlight({
      favicon: constants.SiteSetup.Favicon,
      // Add ICO favicon fallback for Safari on head  
      head: [
        { tag: 'link', attrs: { rel: 'icon', href: constants.SiteSetup.Favicon, sizes: '32x32', }, },
      ],
      title: constants.SiteSetup.GordonLambdaTitle,
      customCss: ["./src/styles/astro-starlight-tailwind-" + constants.SiteSetup.GordonLambdaTheme + ".css",],
      social: {},
      disable404Route: true,
      plugins: [
        // -gs: ADDED - Generate the Obsidian vault pages. REF (Astro Starlight Obsidian Configuration): https://starlight-obsidian.vercel.app/configuration/
        starlightObsidian({
          vault: constants.SiteSetup.ObsidianVault,
          sidebar: { collapsedFolders: true, }
        }),
      ],
      sidebar: [
        obsidianSidebarGroup,   // Add the generated sidebar group to the sidebar.
      ],
    }), 
    tailwind(),
  ],
});
