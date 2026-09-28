/* ==========================================================================
   LOS GORDOS · Interacciones
   1. Menú mobile (abrir / cerrar)
   2. Marca en el menú la sección que se está viendo (en el inicio)
   3. Velocidad pareja de la cinta de valores (en el inicio)
   ========================================================================== */

(() => {
  'use strict';

  /* ---------- 1. Menú mobile ---------- */
  const encabezado = document.querySelector('.encabezado');
  const boton = document.querySelector('.menu-boton');
  const menu = document.getElementById('menu');

  if (encabezado && boton && menu) {
    const textoBoton = boton.querySelector('.visualmente-oculto');
    const estaAbierto = () => boton.getAttribute('aria-expanded') === 'true';

    const abrirMenu = (abrir) => {
      boton.setAttribute('aria-expanded', String(abrir));
      menu.classList.toggle('esta-abierto', abrir);
      textoBoton.textContent = abrir ? 'Cerrar menú' : 'Abrir menú';
    };

    boton.addEventListener('click', () => abrirMenu(!estaAbierto()));

    // Al elegir una opción, el menú se cierra
    menu.addEventListener('click', (evento) => {
      if (evento.target.closest('a')) abrirMenu(false);
    });

    // Un clic fuera del encabezado también lo cierra
    document.addEventListener('click', (evento) => {
      if (estaAbierto() && !encabezado.contains(evento.target)) abrirMenu(false);
    });

    // Escape lo cierra y devuelve el foco al botón
    document.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape' && estaAbierto()) {
        abrirMenu(false);
        boton.focus();
      }
    });

    // Si la pantalla se agranda, el menú vuelve a su estado normal
    window.matchMedia('(min-width: 760px)').addEventListener('change', (evento) => {
      if (evento.matches) abrirMenu(false);
    });
  }

  /* ---------- 2. Sección activa en el menú (solo en el inicio) ---------- */
  // Cada link con data-seccion se marca mientras su sección está en pantalla,
  // aunque el link lleve a otra página (Sabores y Packs).
  const links = [...document.querySelectorAll('.menu__link[data-seccion]')];

  if ('IntersectionObserver' in window && links.length) {
    const linkPorSeccion = new Map();
    links.forEach((link) => {
      const seccion = document.getElementById(link.dataset.seccion);
      if (seccion) linkPorSeccion.set(seccion, link);
    });

    // Una sección está "activa" cuando cruza la franja central de la pantalla
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        const link = linkPorSeccion.get(entrada.target);
        if (entrada.isIntersecting) {
          links.forEach((otro) => otro.classList.remove('esta-activo'));
          link.classList.add('esta-activo');
        } else {
          link.classList.remove('esta-activo');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    linkPorSeccion.forEach((link, seccion) => observador.observe(seccion));
  }

  /* ---------- 3. Cinta de valores ---------- */
  // La animación recorre el ancho de un grupo: calculamos la duración
  // para que avance siempre a la misma velocidad, sin importar la pantalla.
  const PIXELES_POR_SEGUNDO = 55;
  const pista = document.querySelector('.cinta__pista');
  const grupo = pista && pista.querySelector('.cinta__grupo');

  const ajustarCinta = () => {
    pista.style.animationDuration = `${grupo.offsetWidth / PIXELES_POR_SEGUNDO}s`;
  };

  if (grupo) {
    ajustarCinta();
    window.addEventListener('resize', ajustarCinta);
    // Cuando carga Alfa Slab One cambia el ancho del texto
    document.fonts?.ready.then(ajustarCinta);
  }
})();
