/**
 * Cattura gli screenshot del sito (dev server su :4330) per il PDF di consegna.
 *
 *   node scripts/shot.mjs
 *
 * Usa Chrome vero (chrome-launcher + puppeteer-core), come pdf-doc.mjs.
 */
import { launch } from 'chrome-launcher';
import puppeteer from 'puppeteer-core';
import path from 'node:path';

const BASE = 'http://localhost:4931';
const OUT = (f) => path.resolve('docs/img', f);

const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars'] });
const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}`, defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 } });

async function shot(url, file, { scrollY = 0, height = 860 } = {}) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle0' });
  // forza il caricamento eager di tutte le immagini e aspetta
  await page.evaluate(() => document.querySelectorAll('img').forEach((i) => i.setAttribute('loading', 'eager')));
  await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: OUT(file), clip: { x: 0, y: scrollY, width: 1440, height } });
  console.log('scritto', OUT(file));
  await page.close();
}

try {
  await shot('/', 'home.png', { scrollY: 0, height: 860 });          // hero carosello
  await shot('/servizi/', 'servizi.png', { scrollY: 520, height: 740 }); // primo servizio con foto
} finally {
  await browser.disconnect();
  try { await chrome.kill(); } catch { /* cartella temp di Chrome su Windows */ }
}
