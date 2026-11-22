import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
    root: 'src',
    envDir: '..',
    plugins: [react(), tailwindcss(), svgr()],
    server: {
        proxy: {
            '/api/v1': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
            },
        },
    },
})
