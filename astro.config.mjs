// @ts-check
import { defineConfig } from 'astro/config';

// El sitio se publica en GitHub Pages, en https://santi901.github.io/TP-losGordos/
// Si se publica en la raíz de un dominio propio, cambiá `site` y borrá `base`.
export default defineConfig({
  site: 'https://santi901.github.io',
  base: '/TP-losGordos',
});
