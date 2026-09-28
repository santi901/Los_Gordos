export interface Pack {
  nombre: string;
  etiqueta: string;
  precio: number;
  cantidad: 3 | 6 | 12;
  color: 'blanco' | 'rojo' | 'negro';
  destacado?: boolean;
  descripcion: string;
  incluye: string;
  entrega: string;
  idealPara: string;
  /** Mensaje que se precarga en WhatsApp desde la página de packs */
  mensaje: string;
}

export const packs: Pack[] = [
  {
    nombre: 'Trío',
    etiqueta: 'Para uno',
    precio: 8400,
    cantidad: 3,
    color: 'blanco',
    descripcion: '3 cookies a elección. El antojo bajo control.',
    incluye: '3 cookies, del sabor que quieras.',
    entrega: 'Retiro en el local.',
    idealPara: 'Un antojo o un regalo chiquito.',
    mensaje: 'Hola Los Gordos! Quiero el pack Trío',
  },
  {
    nombre: 'Media docena',
    etiqueta: 'Más vendido',
    precio: 15900,
    cantidad: 6,
    color: 'rojo',
    destacado: true,
    descripcion: '6 cookies + envío gratis. Mezclá los sabores.',
    incluye: '6 cookies, combinando los sabores como quieras.',
    entrega: 'Envío gratis o retiro en el local.',
    idealPara: 'La merienda con amigos.',
    mensaje: 'Hola Los Gordos! Quiero el pack Media docena',
  },
  {
    nombre: 'Caja Gorda',
    etiqueta: 'Para el barrio',
    precio: 29500,
    cantidad: 12,
    color: 'negro',
    descripcion: '12 cookies y dos sabores de edición.',
    incluye: '12 cookies, con dos sabores de edición limitada.',
    entrega: 'Envío gratis o retiro en el local.',
    idealPara: 'Cumpleaños, la oficina o el barrio entero.',
    mensaje: 'Hola Los Gordos! Quiero la Caja Gorda',
  },
];

/** Lo que sale cada cookie dentro del pack, redondeado */
export const precioPorCookie = (pack: Pack) => Math.round(pack.precio / pack.cantidad);
