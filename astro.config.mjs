// @ts-check
import { defineConfig } from 'astro/config';

// En Vercel el sitio se sirve en la raíz del dominio, así que no lleva `base`.
// En GitHub Pages se publica en https://santi901.github.io/TP-losGordos/
const enVercel = !!process.env.VERCEL;

export default defineConfig({
  site: enVercel ? undefined : 'https://santi901.github.io',
  base: enVercel ? '/' : '/TP-losGordos',
});