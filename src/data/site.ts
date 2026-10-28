/**
 * IDENTITÀ DEL CLIENTE — unico punto da cui header, footer, contatti, JSON-LD,
 * meta, privacy, cookie, robots e llms.txt leggono i dati dello studio.
 *
 * Riempito dai dati reali di slimencostruzionisrl.com (crawl 2026-10-28).
 * I buchi (P.IVA, PEC, ragione sociale completa, orari) sono marcati
 * [[DA CHIEDERE AL CLIENTE: ...]]: la build passa, ma vanno raccolti prima del go.
 */

export const site = {
  /** Nome breve usato ovunque (title, header, footer, JSON-LD) */
  nome: 'Slimen Costruzioni',
  /** Denominazione completa/ragione sociale (JSON-LD legalName, privacy) */
  ragioneSociale: 'Slimen Costruzioni S.r.l.',
  /** Varianti del nome (JSON-LD alternateName) */
  nomiAlternativi: ['Slimen Costruzioni S.r.l.', 'Slimen Costruzioni Ferrara'],
  /** Alt del logo: nome + discipline */
  logoAlt: 'Slimen Costruzioni S.r.l. — impresa edile e noleggio ponteggi a Ferrara',
  /** Tipo di attività in 2-4 parole, usato in eyebrow e meta */
  attivita: 'Impresa edile e ponteggi',
  /** Slogan breve (JSON-LD slogan, footer) — da «incarniamo l'eccellenza nel settore edile» */
  slogan: 'Eccellenza nel settore edile',
  /** Descrizione dello studio in 1 frase (meta description di default, JSON-LD, llms.txt) — [RISCRITTO] dai testi reali */
  descrizione:
    'Slimen Costruzioni S.r.l., impresa edile e noleggio ponteggi a Ferrara: soluzioni costruttive, ristrutturazioni e allestimento ponteggi con professionalità e affidabilità.',
  /** Frase del footer sotto il logo — grounded sui servizi reali */
  footerClaim: 'Impresa edile e noleggio ponteggi a Ferrara. Soluzioni costruttive su misura.',

  // ── Dominio e tecnici ───────────────────────────────────────────────
  /** Dominio canonico SENZA slash finale. Tenere allineato con SITE_URL in astro.config.mjs */
  dominio: 'https://slimencostruzionisrl.com',
  /** Colore della barra del browser: deve coincidere con --accent in global.css */
  themeColor: '#d30105',
  /** Codice ISO regione/provincia per meta geo.region */
  geoRegion: 'IT-FE',

  // ── Contatti ────────────────────────────────────────────────────────
  email: 'slimencostruzionisrl@gmail.com',
  /** Telefono come si legge a schermo */
  telefono: '+39 320 114 7915',
  /** Telefono per i link tel: in formato E.164 senza spazi */
  telefonoE164: '+393201147915',
  pec: '[[DA CHIEDERE AL CLIENTE: PEC]]',
  piva: '[[DA CHIEDERE AL CLIENTE: partita IVA]]',

  indirizzo: {
    via: 'Via Modena, 120',
    cap: '44122',
    citta: 'Ferrara',
    provincia: 'FE',
    paese: 'IT',
  },
  /** Zona/quartiere in cui si trova lo studio (testo libero per "Dove siamo") */
  zona: '[[DA CHIEDERE AL CLIENTE: zona o quartiere della sede]]',
  /** Coordinate per la mappa OpenStreetMap (dall'embed Google Maps del sito) */
  geo: { lat: 44.845595, lng: 11.596083 } as null | { lat: number; lng: number },
  /** Link "Apri in Google Maps / Indicazioni stradali" */
  mapsUrl: 'https://maps.app.goo.gl/xXp9ETtT54ScASHAA',
  /** Modalità di ricevimento (pagina contatti) */
  ricevimento: '[[DA CHIEDERE AL CLIENTE: orari e modalità di ricevimento]]',

  /** Social: nessun profilo social trovato sul sito. Lasciato vuoto (blocco nascosto). */
  social: [] as { nome: string; url: string; icona: 'facebook' | 'instagram' | 'linkedin' }[],

  /** Aree servite (JSON-LD areaServed, llms.txt) */
  areeServite: [
    { tipo: 'City', nome: 'Ferrara' },
    { tipo: 'AdministrativeArea', nome: 'Provincia di Ferrara' },
    { tipo: 'State', nome: 'Emilia-Romagna' },
  ],
  /** Competenze (JSON-LD knowsAbout) — dai servizi reali */
  competenze: [
    'Impresa edile',
    'Noleggio ponteggi',
    'Allestimento ponteggi',
    'Ristrutturazioni e ricostruzioni chiavi in mano',
    'Coperture, tetti e cappotti',
    'Impianti idrici, elettrici e fotovoltaici',
  ],

  /** Form contatti. endpoint vuoto = il form NON invia (submit bloccato con avviso).
   *  Sul sito originale era Contact Form 7 (WordPress): va ricollegato a Netlify Forms o endpoint. */
  form: {
    netlify: false,
    endpoint: '', // [[DA CHIEDERE AL CLIENTE: collegamento del form (Netlify Forms o endpoint)]]
  },

  /** Analytics/pixel: nessuno nella base */
  analytics: null as null | string,

  /** Anno per il copyright */
  anno: new Date().getFullYear(),
};

export const indirizzoRiga = `${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta}`;
export const abs = (p: string) => site.dominio + p;
