import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nosotros: resolve(__dirname, 'nosotros.html'),
                soluciones: resolve(__dirname, 'soluciones.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                factoria: resolve(__dirname, 'factoria.html'),
                confianzaDigital: resolve(__dirname, 'soluciones/confianza-digital.html'),
                tecnologiaContratos: resolve(__dirname, 'soluciones/tecnologia-contratos.html'),
                activosDigitales: resolve(__dirname, 'soluciones/activos-digitales.html'),
                grcIa: resolve(__dirname, 'soluciones/grc-ia.html'),
            },
        },
    },
    server: {
        port: 5173,
        open: true,
    },
});
