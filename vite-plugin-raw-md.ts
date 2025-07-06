import { Plugin } from 'vite';

export default function vitePluginRawMd(): Plugin {
    return {
        name: 'vite-plugin-raw-md',
        transform(src, id) {
            if (id.endsWith('.md')) {
                return {
                    code: `export default ${JSON.stringify(src)};`,
                    map: null,
                };
            }
        },
    };
}
