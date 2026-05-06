import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const shared = css`
  :host { display:block; }
  section { max-width: 1100px; margin: 0 auto; padding: 64px 24px; }
  h1 { margin:0 0 16px; color:#082f49; font-size:clamp(1.8rem,4vw,2.6rem); }
  h2 { margin:24px 0 10px; }
  p, li { line-height:1.6; color:#334155; }
  .card { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin:16px 0; }
  .btn { display:inline-block; background:#0c4a6e; color:#fff; text-decoration:none; padding:12px 18px; border-radius:8px; font-weight:700; }
  .media-grid{display:grid;grid-template-columns:1fr;gap:14px;margin:20px 0}
  .media-grid img,.feature-img{width:100%;border-radius:10px;display:block;object-fit:cover;min-height:180px}
  @media(min-width:900px){.media-grid{grid-template-columns:repeat(2,1fr)}}
`;

@customElement("gjest-i-havna-page")
export class GjestIHavnaPage extends LitElement { static styles = shared; render(){ return html`<section><h1>Velkommen som gjest i Pålgarden Marina</h1><h2>Dette kan vi tilby:</h2><p>Vi har 65 meter med gjestebrygge. Som gjest hos oss har du tilgang til klubbhuset (kode til ytterdør kommer i GoMarina app).</p><p>I klubbhuset har vi oppholdsrom med kjøkkenfasiliteter, tolett/dusj og vaskemaskin/tørketrommel. Bruk av dusj/vaskemaskin/tørketrommel betales med GoMarina app.</p><div class="card"><h2>Priser</h2><ul><li>Båt inntil 19 fot: kr 100 pr. døgn</li><li>Båt inntil 29 fot: kr 150 pr. døgn</li><li>Båt inntil 39 fot: kr 200 pr. døgn</li><li>Båt over 40 fot: kr 250 pr. døgn</li></ul><p>Prisene er inkl. strøm.</p></div><h2>Pålgarden Marina ligger innerst i Vefsnfjorden</h2><p>Innseiling til marinaen kan gjøres inn Vefsnfjorden via Sandnessjøen eller ved innseiling fra sør mellom Tjøtta og Rødøya.</p><div class="card"><h2>Avstander</h2><ul><li>Bystranda: 200 meter</li><li>Til bysentrum: ca 2 km</li><li>Helgelandstrappa: 3,5 km</li><li>Vefsnfjorden - innseiling</li></ul></div><div class="media-grid"><img src="/images/hero.jpg" alt="Gjestebrygge ved marinaen"/><img src="/images/båtplass.jpg" alt="Båtplasser i havna"/><img src="/images/hero.jpg" alt="Klubbhus fasiliteter"/><img src="/images/båtplass.jpg" alt="Innseiling mot marina"/></div><a class="btn" href="mailto:post@mosjoenbf.no">Kontakt oss</a></section>`;}}

@customElement("severdigheter-page")
export class SeverdigheterPage extends LitElement { static styles = [shared, css`.layout{display:grid;gap:20px}.links{display:grid;gap:8px}@media(min-width:900px){.layout{grid-template-columns:1.2fr 1fr}} a{color:#0c4a6e}`]; render(){return html`<section><h1>Atraksjoner / severdigheter - Mosjøen</h1><p>Linker til opplevelser i Mosjøen og omeng:</p><div class="layout"><iframe width="100%" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Mosjøen video" loading="lazy"></iframe><nav class="links" aria-label="Opplevelser"><a href="#">Bystranda</a><a href="#">Sjøgata</a><a href="#">Helgelandstrappa</a><a href="#">Mosjøen Zipline</a><a href="#">Mosjøen Via ferrata</a><a href="#">Helgeland Museum</a><a href="#">YouTube video – Mosjøen (Lundis)</a><a href="#">Visit Norway – Mosjøen</a></nav></div></section>`;}}

@customElement("slipoppsett-page")
export class SlipoppsettPage extends LitElement { static styles = shared; render(){return html`<section><h1>Vi tilbyr muligheter for slipoppsett</h1><img class="feature-img" src="/images/båtplass.jpg" alt="Slipvogn ved marina"/><p>Mosjøen båtforening har to slipvogner og opphalingshus.</p><div class="card"><h2>Slipvogn liten / opphalingshus</h2><p>Vogn nummer 1 (liten) for båter inntil 6 tonn med mulighet for å dra båten inn i oppvarmet opphalingshus, max høyde 4.40 meter.</p><p>Opphalingshus er romslig, oppvarmet og godt belyst. Lengdekapasitet 38 fot.</p><h3>Priser medlemmer med fast båtplass</h3><ul><li>Oppsett/utsett samme dag kr 800.-</li><li>Inntil to dager kr 900,-</li><li>Inntil tre dager kr 1000,-</li><li>Inntil fire dager kr 1100,-</li><li>Tillegg opphalingshus kr 300 pr døgn</li></ul><h3>Priser uten fast båtplass/ikke-medlemmer</h3><ul><li>Oppsett/utsett samme dag kr 1200.-</li><li>Inntil to dager kr 1400,-</li><li>Inntil tre dager kr 1600,-</li><li>Inntil fire dager kr 1800,-</li><li>Tillegg opphalingshus kr 500 pr døgn</li></ul><a class="btn" href="#">Klikk her for å komme til booking</a></div><div class="card"><h2>Slipvogn stor</h2><ul><li>Samme dag kr 700.- (medlemmer fast båtplass)</li><li>2 dager kr 800,-</li><li>3 dager kr 900,-</li><li>4 dager kr 1000,-</li></ul><ul><li>Samme dag kr 1000.- (ikke-medlemmer)</li><li>2 dager kr 1200,-</li><li>3 dager kr 1400,-</li><li>4 dager kr 1600,-</li></ul><a class="btn" href="#">Klikk her for å komme til booking</a></div></section>`;}}

@customElement("oppstilling-page")
export class OppstillingPage extends LitElement { static styles = shared; render(){return html`<section><h1>Oppstilling av båter/hengere på landområdet</h1><img class="feature-img" src="/images/båtplass.jpg" alt="Oppstilling av båter på landområde"/></section>`;}}

@customElement("vare-priser-page")
export class VarePriserPage extends LitElement { static styles = shared; render(){return html`<section><h1>Priser</h1><div class="card"><h2>Leie Båtplass (pr. sesong)</h2><ul><li>Båt intill 20 fot - kr 3750</li><li>Båt intill 25 fot - kr 3970</li><li>Båt intill 30 fot - kr 4620</li><li>Båt intill 35 fot - kr 5240</li><li>Båt intill 40 fot - kr 5920</li></ul><h2>Båtutsett</h2><p>NOK 50/pr. gang</p><h2>Medlemskap</h2><p>NOK 400/år</p><h2>Vipps</h2><p># 107707</p></div></section>`;}}

@customElement("bilder-page")
export class BilderPage extends LitElement { static styles = shared; render(){return html`<section><h1>Bilder</h1><div class="media-grid"><img src="/images/hero.jpg" alt="Marina bilde 1"/><img src="/images/båtplass.jpg" alt="Marina bilde 2"/><img src="/images/hero.jpg" alt="Marina bilde 3"/><img src="/images/båtplass.jpg" alt="Marina bilde 4"/></div></section>`;}}
