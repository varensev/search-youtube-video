import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace';
// https://vitejs.dev/config/


const env = {
  'process.env': {
    VITE_REACT_APP_API_KEY: JSON.stringify(process.env.VITE_REACT_APP_API_KEY),
  },
};

export default defineConfig({
  plugins: [react(),
    replace(env),],
})







