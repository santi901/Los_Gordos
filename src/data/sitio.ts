// Datos de contacto de ejemplo: reemplazar por los reales.
export const contacto = {
  whatsapp: '5491100000000',
  telefono: '+54 9 11 0000 0000',
  telefonoLink: '+5491100000000',
  mail: 'hola@losgordos.com',
  direccion: 'Av. del Barrio 1234, local 2',
  direccionMapa: 'Av. del Barrio 1234',
  horarios: ['Lun a Vie · 10 a 20 h', 'Sáb · 11 a 21 h', 'Dom · cerrado (descansamos)'],
};

export const MENSAJE_PEDIDO = 'Hola Los Gordos! Quiero hacer un pedido';

/** Link de WhatsApp con el mensaje ya escrito */
export const whatsapp = (mensaje = MENSAJE_PEDIDO) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;

export const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contacto.direccionMapa)}`;

export const valores = ['Diversión', 'Accesibilidad', 'Abundancia'];
