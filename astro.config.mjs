import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

import tailwind from '@astrojs/tailwind'
import critters from 'astro-critters'
import partytown from '@astrojs/partytown'

const { CF_PAGES_URL, CF_PAGES, CF_PAGES_BRANCH, CUSTOM_DOMAIN } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  '',
)

const getSite = () => {
  if (CUSTOM_DOMAIN) return CUSTOM_DOMAIN
  if (CF_PAGES && !['main'].includes(CF_PAGES_BRANCH)) return CF_PAGES_URL
  return 'http://localhost:4321'
}

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  integrations: [tailwind(), critters(), partytown()],
})
