/**
 * SERVIZI. Usati in: home (griglia), /servizi/ (una sezione per servizio, alternate),
 * footer, select del form contatti, JSON-LD.
 * Testi dai testi reali di slimencostruzionisrl.com (pagine servizio). I paragrafi sono
 * verbatim ripuliti dalle frasi di riempimento "SEO" dell'agenzia [RISCRITTO parziale].
 * I `punti` sono i servizi reali elencati in /cosa-offriamo/.
 */
import type { Icona } from './icone';
import type { Img } from '../lib/media';
import { serviziFoto } from './immagini';

export type Servizio = {
  id: string;
  nome: string;
  breve: string;
  icona: Icona;
  paragrafi: string[];
  punti: string[];
  foto: Img;
};

export const servizi: Servizio[] = [
  {
    id: 'impresa-edile',
    nome: 'Impresa Edile',
    breve: 'Impresa edile a Ferrara: qualità, affidabilità e innovazione per progetti di ogni dimensione.',
    icona: 'pianta',
    paragrafi: [
      'Slimen Costruzioni S.r.l. è la scelta primaria per le vostre esigenze edili a Ferrara. La nostra impresa edile è sinonimo di qualità, affidabilità e innovazione.',
      'Il nostro team di professionisti altamente qualificati gestisce progetti di varie dimensioni con attenzione ai dettagli e rispetto per le scadenze.',
    ],
    punti: [
      'Ricostruzioni chiavi in mano',
      'Ristrutturazioni complete',
      'Rifacimento bagni',
      'Pavimenti e rivestimenti',
      'Coperture tetto e cappotti',
      'Imbiancatura, demolizioni e fognature',
    ],
    foto: serviziFoto['impresa-edile'],
  },
  {
    id: 'noleggio-ponteggi',
    nome: 'Noleggio Ponteggi',
    breve: 'Noleggio ponteggi a norma per cantieri residenziali e commerciali, in piena sicurezza.',
    icona: 'telaio',
    paragrafi: [
      'Per progetti edili sicuri ed efficienti a Ferrara, siamo la scelta principale nel noleggio ponteggi. Offriamo soluzioni su misura, garantendo sicurezza sul cantiere e massima efficienza.',
      'I nostri ponteggi, conformi alle normative più recenti, sono disponibili per ogni tipo di lavoro, dall’edilizia residenziale a quella commerciale.',
    ],
    punti: [
      'Ponteggi conformi alle normative',
      'Soluzioni su misura',
      'Edilizia residenziale',
      'Edilizia commerciale',
      'Sicurezza sul cantiere',
    ],
    foto: serviziFoto['noleggio-ponteggi'],
  },
  {
    id: 'allestimento-ponteggi',
    nome: 'Allestimento Ponteggi',
    breve: 'Installazione e configurazione di ponteggi con sicurezza, precisione e nel rispetto delle normative.',
    icona: 'casco',
    paragrafi: [
      'Siamo il partner di fiducia per un allestimento ponteggi impeccabile a Ferrara. Il nostro team esperto si occupa dell’installazione e della configurazione dei ponteggi, garantendo sicurezza e funzionalità ottimali sul cantiere.',
      'Ogni progetto è gestito con precisione, rispettando rigorose normative di sicurezza.',
    ],
    punti: [
      'Installazione ponteggi',
      'Configurazione su misura',
      'Rispetto rigoroso delle normative',
      'Sicurezza e funzionalità',
    ],
    foto: serviziFoto['allestimento-ponteggi'],
  },
];
