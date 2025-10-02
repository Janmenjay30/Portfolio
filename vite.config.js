import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect deployment environment
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/portfolio/' for GitHub Pages, '/' for Vercel and other hosts
  base: isGithubPages ? '/portfolio/' : '/',
})
