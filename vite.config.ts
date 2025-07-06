import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import vitePluginRawMd from './vite-plugin-raw-md'
import type { UserConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isGithubPages = process.env.GITHUB_PAGES === 'true' || mode === 'production';
    return {
        plugins: [react(), tailwindcss(), vitePluginRawMd()],
        base: isGithubPages ? '/<リポジトリ名>/' : '/', // <リポジトリ名>はご自身のものに
    } as UserConfig;
});
