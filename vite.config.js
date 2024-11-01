import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["fsevents"]
  },
  server: {
    hmr: {
      overlay: false  // HMR 오버레이 비활성화
    }
  }
})
