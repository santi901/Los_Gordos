// Arma las URLs internas respetando el `base` de astro.config.mjs,
// así los links funcionan igual en local y en GitHub Pages.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const ruta = (camino = '') => `${base}/${camino.replace(/^\//, '')}`;

export type Pagina = 'inicio' | 'sabores' | 'packs';
