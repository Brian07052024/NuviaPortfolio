import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // Optimizaciones para producción
  build: {
    // Minimizar el tamaño del bundle
    minify: 'terser',
    
    // Configuraciones de Terser para mejor compresión
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    
    // Optimizar assets
    assetsInlineLimit: 4096,
    
    // Configurar chunks para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          emailjs: ['emailjs-com']
        },
        // Nombres de archivos con hash para cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    
    // Comprimir assets
    cssCodeSplit: true,
    
    // Reportar tamaño del bundle
    reportCompressedSize: true,
    
    // Configurar directorio de salida
    outDir: 'dist',
    emptyOutDir: true,
    
    // Source maps para debugging en producción (opcional)
    sourcemap: false
  },
  
  // Optimizar para desarrollo
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Configuración de preview
  preview: {
    port: 4173,
    host: true
  },
  
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'emailjs-com']
  },
  
  // Configurar alias para imports más limpios
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@services': '/src/services',
      '@styles': '/src/styles'
    }
  }
})
