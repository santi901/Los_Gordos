# Los Gordos · Landing (Astro)

Landing page de **Los Gordos**, "las cookies más generosas del barrio", hecha con
[Astro](https://astro.build). Es la misma página que la versión en HTML: el mismo diseño,
el mismo CSS y el mismo HTML final, pero armada con componentes para no repetir el
encabezado, el pie ni los datos de los sabores y packs en cada página.

Respeta el **Manual de Identidad Corporativa** de la marca: paleta, tipografías,
logotipo y misión / visión / valores.

## Cómo verla

Hace falta [Node.js](https://nodejs.org) 22 o más nuevo.

```bash
npm install      # la primera vez
npm run dev      # abre http://localhost:4321/TP-losGordos/ y se recarga solo al guardar
npm run build    # genera el sitio final en dist/
npm run preview  # muestra lo que quedó en dist/
```

## Publicar en GitHub Pages

El repo trae `.github/workflows/deploy.yml`, que compila y publica el sitio cada vez que
se sube algo a `main`. Hay que activarlo una sola vez: **Settings → Pages → Source: GitHub Actions**.

El sitio queda en `https://santi901.github.io/TP-losGordos/`. Esa dirección sale de `site`
y `base` en `astro.config.mjs`: si el repo cambia de nombre o se usa un dominio propio,
se cambia ahí y todos los links se actualizan solos.

## Estructura

```
astro.config.mjs          Dirección del sitio (site y base)
public/favicon.svg        Se copia tal cual al sitio final
src/
  pages/                  Cada archivo es una página
    index.astro           Inicio: la landing con todas las secciones
    sabores.astro         Detalle de cada sabor y cómo se hacen          → /sabores/
    packs.astro           Detalle de cada pack, cómo pedir y preguntas   → /packs/
  layouts/Base.astro      <head>, encabezado, pie y scripts compartidos
  components/
    Encabezado.astro      Píldora flotante con logo y menú
    Pie.astro             Pie con logo, menú y lema
    Logo.astro            Logo "Mono · Blanco" (normal o apilado)
    Cinta.astro           Cinta inclinada de valores
    CabeceraPagina.astro  Cabecera de Sabores y Packs (migas, título, datos rápidos)
    TarjetaPack.astro     Tarjeta de pack (versión corta y versión con detalle)
    Etiqueta.astro        Etiqueta de sección con número (01, 02…)
    Pasos.astro           Pasos numerados
    Ficha.astro           Lista de datos (Lleva / Ideal para / Contiene…)
  data/
    sabores.ts            Los cuatro sabores: nombre, precio, foto, textos
    packs.ts              Los tres packs: precio, cantidad, textos
    sitio.ts              WhatsApp, dirección, horarios, mail y valores
  styles/styles.css       Estilos: variables de marca, layout y responsive
  scripts/main.js         Menú mobile, sección activa en el menú y velocidad de la cinta
  assets/
    fonts/                Alfa Slab One y Roboto (auto-alojadas)
    img/                  Ilustraciones provisorias
```

## Qué se cambia dónde

- **Precios, nombres o textos de un sabor o pack**: en `src/data/sabores.ts` o
  `src/data/packs.ts`. El cambio aparece a la vez en el inicio y en su página de detalle.
  Los precios se escriben como número (`2900`) y se muestran como `$2.900`.
  Lo que sale cada cookie en los packs se calcula solo.
- **WhatsApp, dirección, horarios, mail y teléfono**: en `src/data/sitio.ts`
  (hoy son datos de ejemplo). Todos los botones de "Pedir por WhatsApp" salen de ahí.
- **Menú o pie**: en `src/components/Encabezado.astro` y `src/components/Pie.astro`,
  una sola vez para las tres páginas.
- **Fotos**: las imágenes de `src/assets/img/` son ilustraciones provisorias. Para usar
  fotos reales, copialas ahí y cambiá el `import` correspondiente (en `data/sabores.ts`
  para los sabores, en `pages/index.astro` y `pages/packs.astro` para el hero y el obrador).
  Se recortan solas con `object-fit: cover`:
  - `hero-cookie`: cookie en plano cenital (cuadrada, se ve en un círculo).
  - `sabor-*`: una foto por sabor (cuadrada, se ve en un círculo).
  - `obrador`: foto del obrador o del equipo (vertical 4:5, se ve con forma de arco).

## Navegación

| Botón del menú | Adónde lleva |
|----------------|--------------|
| Sabores        | `/sabores/`, con cada sabor explicado en detalle |
| Nosotros       | Baja a la sección "Nosotros" del inicio (misión, visión y valores) |
| Packs          | `/packs/`, con cada pack, cómo pedir y preguntas frecuentes |
| Pedí ahora     | Baja a la sección "Pedidos" del inicio (WhatsApp, dirección y horarios) |

En el inicio, Sabores, Nosotros y Packs se marcan en el menú mientras su sección está en pantalla.

## Secciones del inicio

1. **Encabezado** flotante con logo y menú (hamburguesa en celulares).
2. **Hero**: "Las cookies más generosas", con los botones a packs y sabores.
3. **Cinta animada e inclinada** con los valores: Diversión · Accesibilidad · Abundancia.
4. **01 Sabores**: las cuatro cookies con su precio.
5. **02 Nosotros**: misión, visión y valores, tomados del manual.
6. **03 Packs**: Trío, Media docena y Caja Gorda.
7. **04 Pedidos**: WhatsApp, dirección, horarios y contacto.
8. **Pie** con logo, menú y lema.

## Identidad aplicada (manual de marca)

| Color    | Hex       | Variable CSS |
|----------|-----------|--------------|
| Rojo     | `#E63329` | `--rojo`     |
| Amarillo | `#F5C518` | `--amarillo` |
| Blanco   | `#FFFFFF` | `--blanco`   |
| Negro    | `#1A1A1A` | `--negro`    |

- **Tipografías**: Alfa Slab One (principal, para titulares) y Roboto (complementaria, para textos).
  Son de Google Fonts, con licencia SIL Open Font License.
- **Logotipo**: isotipo circular "LG" + "Los Gordos". En el encabezado y el pie se usa la
  variante *Mono · Blanco*, la que el manual indica para fondos negros.
- **Usos indebidos** que se respetan: el logo no se deforma, no lleva sombras ni efectos y
  "Los" y "Gordos" van siempre juntos. No se usan colores fuera de la paleta (solo grises
  neutros para textos secundarios).
- Las etiquetas numeradas de cada sección (01, 02, 03…) replican el estilo de las láminas del manual.

## Formas y divisiones

La página evita los cortes rectos y las cajas cuadradas, con formas "gorditas" como la marca:

- **Entre secciones**: ondas y un goteo de chocolate en lugar de líneas rectas.
  Se aplican con clases: `onda-arriba` (con las variantes `--b` e `--invertida`) y `goteo-abajo`.
- **Encabezado**: una píldora flotante en vez de una barra de lado a lado.
- **Cinta de valores**: inclinada.
- **Sabores**: cookies en círculos, precio como sticker y la grilla escalonada en zigzag.
- **Nosotros**: foto con forma de arco y tarjetas escalonadas.
- **Packs**: cajas en abanico, con la del medio más arriba.
- **Separadores**: puntos redondos y un garabato ondulado en vez de líneas.

Las formas son máscaras SVG guardadas como variables (`--forma-*`) al principio de `src/styles/styles.css`.

## Ramas

- `desarrollo`: donde se prueban los cambios.
- `main`: versión aprobada (se publica sola en GitHub Pages).
