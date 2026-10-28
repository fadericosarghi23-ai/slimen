/**
 * Galleria. 3 foto reali del cliente (bassa risoluzione, 1024×682).
 * Le foto dei lavori in alta risoluzione vanno fornite dal cliente e aggiunte qui.
 * NB: le foto numerate della galleria originale erano duplicati o non scaricabili
 * (protezione anti-bot del sito sorgente): niente tessere segnaposto in pagina.
 */
import type { Img } from '../lib/media';

const foto = (src: string, width: number, height: number, alt: string): Img => ({ src, width, height, alt });

export const galleria: Img[] = [
  foto('/img/slimen/hero-2.jpg', 1024, 682, 'Edificio residenziale in costruzione a Ferrara'),
  foto('/img/slimen/hero-3.jpg', 1024, 682, 'Ponteggi montati su un edificio'),
  foto('/img/slimen/hero-1.jpg', 1024, 682, 'Cantiere edile di Slimen Costruzioni a Ferrara'),
];
