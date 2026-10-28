/**
 * Contenuti ripetuti o in lista (home, studio). Testi dai contenuti reali di
 * slimencostruzionisrl.com (crawl 2026-10-28). Testimonianze verbatim (autore anonimo
 * sul sito: "Cliente").
 */
import { heroImgs } from './immagini';

/** Carosello hero della home: 3 slide */
export const heroSlides = [
  { img: heroImgs[0], titolo: 'Noleggio e allestimento ponteggi', luogo: 'Ferrara', href: '/servizi/#noleggio-ponteggi' },
  { img: heroImgs[1], titolo: 'Impresa edile', luogo: 'Ferrara', href: '/servizi/#impresa-edile' },
  { img: heroImgs[2], titolo: 'Cantieri e ristrutturazioni', luogo: 'Ferrara', href: '/servizi/#impresa-edile' },
];

/** Approccio: 3 punti (pagina studio) — dalla filosofia aziendale reale (chi-siamo) */
export const approccio = [
  {
    titolo: 'Innovazione',
    testo:
      'Investiamo costantemente in formazione e tecnologie all’avanguardia per rimanere leader nel panorama edile.',
  },
  {
    titolo: 'Attenzione ai dettagli',
    testo:
      'Ogni progetto è gestito con cura, dalla pianificazione alla consegna, garantendo risultati di alta qualità e il rispetto delle scadenze.',
  },
  {
    titolo: 'Trasparenza',
    testo:
      'La nostra filosofia pone al centro l’innovazione, l’integrità e la trasparenza, con un impegno costante per la soddisfazione del cliente.',
  },
];

/** Elenco competenze nella sezione "La sede" (pagina studio) — dai servizi reali */
export const competenzeStudio = [
  'Impresa edile',
  'Noleggio ponteggi',
  'Allestimento ponteggi',
  'Ristrutturazioni e ricostruzioni chiavi in mano',
  'Coperture, tetti e cappotti',
  'Impianti idrici, elettrici e fotovoltaici',
  'Demolizioni e fognature',
];

/** Testimonianze (home) — verbatim dal sito, autore anonimo "Cliente" */
export const testimonianze = [
  {
    testo:
      'Slimen Costruzioni S.r.l. ha superato le nostre aspettative nel completare il nostro progetto di ristrutturazione. Dal primo incontro alla consegna finale, il loro team si è dimostrato altamente professionale, rispettando tempi e budget. Consiglio vivamente i loro servizi.',
    autore: 'Cliente',
  },
  {
    testo:
      'La competenza e l’impegno di Slimen Costruzioni S.r.l. nella realizzazione del nostro impianto fotovoltaico sono stati eccezionali. Hanno gestito ogni dettaglio con attenzione, garantendo efficienza energetica e risparmio. Grazie per un lavoro straordinario!',
    autore: 'Cliente',
  },
  {
    testo:
      'Ho scelto Slimen Costruzioni S.r.l. per un progetto di demolizione e sono rimasto estremamente soddisfatto. Hanno eseguito il lavoro con precisione, sicurezza e rispetto per l’ambiente. Un team altamente raccomandato per servizi di demolizione.',
    autore: 'Cliente',
  },
];

/** CTA rossa in fondo alle pagine */
export const cta = {
  eyebrow: 'Contatti',
  titolo: 'Richiedi un preventivo gratuito',
  testo: 'Raccontaci il tuo progetto: il nostro team ti ricontatterà al più presto con una soluzione su misura, senza impegno.',
};
