import dobleChocolate from '../assets/img/sabor-doble-chocolate.svg?url';
import dulceDeLeche from '../assets/img/sabor-dulce-de-leche.svg?url';
import nuezYSal from '../assets/img/sabor-nuez-y-sal.svg?url';
import redVelvet from '../assets/img/sabor-red-velvet.svg?url';

export interface Sabor {
  id: string;
  nombre: string;
  precio: number;
  foto: string;
  alt: string;
  /** Frase corta: se usa en el inicio y como bajada en la página de sabores */
  bajada: string;
  /** Etiqueta chica arriba del nombre, en la página de sabores */
  etiqueta: string;
  texto: string;
  lleva: string;
  idealPara: string;
  contiene: string;
}

// Ingredientes, "ideal para" y alérgenos son textos de ejemplo para completar.
export const sabores: Sabor[] = [
  {
    id: 'doble-chocolate',
    nombre: 'Doble Chocolate',
    precio: 2900,
    foto: dobleChocolate,
    alt: 'Cookie de masa de cacao con chips de chocolate',
    bajada: 'Masa de cacao con chips que se derriten al morder.',
    etiqueta: 'Para los chocolateros',
    texto: 'Arrancamos con una masa de cacao bien oscura y le sumamos el doble de chips de chocolate semiamargo. Sale del horno con el centro húmedo y los chips todavía blandos. Si te gusta el chocolate, esta es la tuya.',
    lleva: 'Cacao amargo, chips de chocolate semiamargo, manteca, azúcar mascabo y una pizca de sal.',
    idealPara: 'La merienda con un vaso de leche.',
    contiene: 'Gluten, huevo y leche.',
  },
  {
    id: 'dulce-de-leche',
    nombre: 'Dulce de Leche',
    precio: 3100,
    foto: dulceDeLeche,
    alt: 'Cookie rellena de dulce de leche',
    bajada: 'Relleno hasta el borde, como tiene que ser.',
    etiqueta: 'La más nuestra',
    texto: 'Masa de vainilla con un corazón de dulce de leche repostero que llega hasta el borde. Arriba le ponemos unas gotas más, porque nunca alcanza.',
    lleva: 'Dulce de leche repostero, manteca, azúcar mascabo y esencia de vainilla.',
    idealPara: 'Acompañar el mate de la tarde.',
    contiene: 'Gluten, huevo y leche.',
  },
  {
    id: 'nuez-y-sal',
    nombre: 'Nuez y Sal',
    precio: 3000,
    foto: nuezYSal,
    alt: 'Cookie con nueces tostadas y escamas de sal',
    bajada: 'Nueces tostadas y una pizca de sal marina.',
    etiqueta: 'Dulce con un toque salado',
    texto: 'Masa de manteca tostada con nueces partidas a mano y escamas de sal marina por arriba. El toque salado hace que lo dulce se sienta todavía más.',
    lleva: 'Nueces tostadas, manteca, azúcar mascabo y escamas de sal marina.',
    idealPara: 'Un café a media mañana.',
    contiene: 'Gluten, huevo, leche y frutos secos.',
  },
  {
    id: 'red-velvet',
    nombre: 'Red Velvet',
    precio: 3200,
    foto: redVelvet,
    alt: 'Cookie red velvet con trozos de crema de queso',
    bajada: 'Roja como el logo, con crema de queso.',
    etiqueta: 'Roja como el logo',
    texto: 'Masa de cacao suave, bien roja, con trozos de crema de queso que se ponen cremosos en el horno. Es la más vistosa de la caja.',
    lleva: 'Cacao suave, crema de queso, manteca y azúcar.',
    idealPara: 'Regalar (o no).',
    contiene: 'Gluten, huevo y leche.',
  },
];
