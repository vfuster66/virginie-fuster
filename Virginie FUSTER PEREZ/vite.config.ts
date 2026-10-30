import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Chemins relatifs : le site fonctionne quel que soit le nom du dépôt
export default defineConfig({
  plugins: [vue()],
  base: './',
})
