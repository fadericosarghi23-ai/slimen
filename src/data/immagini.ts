/**
 * Immagini reali del cliente, scaricate da slimencostruzionisrl.com (2026-10-28).
 * NB: sono a BASSA RISOLUZIONE / stock (hero 1024×682, galleria 500×500) →
 * [[DA CHIEDERE AL CLIENTE: foto reali in alta risoluzione]].
 * Il logo è raster → [[DA CHIEDERE AL CLIENTE: logo in SVG]].
 */
import type { Img } from '../lib/media';

const img = (src: string, width: number, height: number, alt: string): Img => ({ src, width, height, alt });

/** Hero carosello (home) — 3 foto del cantiere/edilizia */
export const heroImgs: Img[] = [
  img('/img/slimen/hero-3.jpg', 1024, 682, 'Ponteggi montati su un edificio in costruzione'),
  img('/img/slimen/hero-2.jpg', 1024, 682, 'Facciata di un edificio residenziale in costruzione'),
  img('/img/slimen/hero-1.jpg', 1024, 682, 'Cantiere edile Slimen Costruzioni a Ferrara'),
];

/** Foto per le sezioni servizio */
export const serviziFoto = {
  'impresa-edile': img('/img/slimen/hero-1.jpg', 1024, 682, 'Stretta di mano tra professionisti dell’edilizia in cantiere'),
  'noleggio-ponteggi': img('/img/slimen/hero-2.jpg', 1024, 682, 'Edificio rivestito di ponteggi e reti di protezione'),
  'allestimento-ponteggi': img('/img/slimen/hero-3.jpg', 1024, 682, 'Allestimento di ponteggi a telaio su un edificio'),
} as const;

/** Galleria: foto del cliente (500×500, bassa risoluzione). Riempita in immagini-galleria.ts */
export { galleria } from './immagini-galleria';
