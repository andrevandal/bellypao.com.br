import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import critters from 'astro-critters'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), critters(), partytown()],
})
