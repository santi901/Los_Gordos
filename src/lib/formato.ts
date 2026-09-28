const pesos = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });

/** 2900 → "$2.900" */
export const precio = (valor: number) => `$${pesos.format(valor)}`;
