/** llms.txt generato dai dati: nessun testo da tenere allineato a mano. */
import type { APIRoute } from 'astro';
import { site, abs } from '../data/site';
import { servizi } from '../data/servizi';

export const GET: APIRoute = () => {
  const righe = [
    `# ${site.nome}`,
    '',
    `> ${site.descrizione}`,
    '',
    '## Dati essenziali',
    '',
    `- Nome: ${site.nome} (${site.ragioneSociale})`,
    `- Sito: ${abs('/')}`,
    `- Sede: ${site.indirizzo.via}, ${site.indirizzo.cap} ${site.indirizzo.citta} (${site.indirizzo.provincia}), Italia`,
    `- Telefono: ${site.telefono}`,
    `- Email: ${site.email}`,
    ...site.social.map((s) => `- ${s.nome}: ${s.url}`),
    `- Aree servite: ${site.areeServite.map((a) => a.nome).join(', ')}`,
    '',
    '## Pagine principali',
    '',
    `- [Home](${abs('/')}): panoramica, servizi, testimonianze e contatti.`,
    `- [Chi Siamo](${abs('/studio/')}): chi siamo e cosa ci distingue.`,
    `- [Servizi](${abs('/servizi/')}): impresa edile, noleggio e allestimento ponteggi.`,
    `- [Galleria](${abs('/galleria/')}): foto dei lavori.`,
    `- [Contatti](${abs('/contatti/')}): recapiti, mappa e modulo di richiesta preventivo.`,
    '',
    '## Servizi',
    '',
    ...servizi.map((s) => `- [${s.nome}](${abs(`/servizi/#${s.id}`)}): ${s.breve}`),
    '',
  ];
  return new Response(righe.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
