import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import vitePluginRawMd from './vite-plugin-raw-md'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), vitePluginRawMd()],
})
