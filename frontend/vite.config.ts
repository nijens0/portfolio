import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
    root: 'src',
    plugins: [react(), tailwindcss(), svgr()],
})
