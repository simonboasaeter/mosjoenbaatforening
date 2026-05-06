import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const pageStyles = css`
  :host { display:block; }
  .page-section { max-width: 1100px; margin:0 auto; padding:64px 24px; }
  .page-title { margin:0 0 16px; color:#082f49; font-size:clamp(2rem,4vw,2.8rem); }
  .lead-text { color:#334155; line-height:1.7; }
  .card-grid { display:grid; grid-template-columns:1fr; gap:16px; margin-top:20px; }
  .content-card { background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; }
  .resource-link { color:#0c4a6e; text-decoration:none; font-weight:700; }
  iframe,.camera-image{ width:100%; min-height:320px; border:0; border-radius:12px; }
  @media(min-width:900px){ .card-grid{ grid-template-columns:repeat(2,1fr);} }
`;

@customElement("reglement-page")
export class ReglementPage extends LitElement {
  public static styles = pageStyles;
  public render() { return html`<section class="page-section"><h1 class="page-title">HMS plan</h1><p class="lead-text">Nåværende HMS plan kan du se nedenfor. Eller laste den ned som PDF</p><article class="content-card"><h2>Formål</h2><p>Denne HMS plan beskriver beredskap relatert til MBF.</p><ul><li>alvorlige ulykker</li><li>miljøhendelser, f.eks. utslipp av farlige kjemikalier, uønsket utslipp til luft, brann/eksplosjon, samt feil bruk av miljøskadelige stoffer</li></ul><h2>Revisjoner</h2><p>Det skal gjøres jevnlige revisjoner av beredskapen for å sjekke at den har et hensiktsmessig og tilstrekkelig innhold, herunder beredskapsutstyr og ev. HMS sjekkliste og at den er tilfredsstillende iverksatt.</p><h2>Overvåking og registrering</h2><p>Rapporter fra medlemmer, vernerunder, kartlegginger, revisjoner og ulykker skal tas opp som et fast punkt i styremøter. Tiltak og rapporter dokumenteres i form av møtereferat.</p><h2>Håndtering av beredskapshendelser</h2><p>Håndtering av beredskapshendelser er beskrevet i foreningens til enhver tid gjeldende Beredskapsplan Mosjøen, september 2012.</p><h2>Sikkerhetsutstyr</h2><p>Styret har ansvaret for at nødvendig sikkerhetsutstyr til enhver tid er tilgjengelig i havneområdet. Den til enhver tid sittende havnesjef har ansvaret for oppsyn av sikkerhetsutstyret.</p><h2>Redningsbåt</h2><p>Foreningen har utplassert en båt som ligger tilgjengelig på brygge 5 (gjestebrygga). Båten kan benyttes i tilfeller der en båt er nyttig i forbindelse med redningsaksjoner eller annet nødvendig støtte fra en “arbeidsbåt”. Ved bruk av båten til normalt arbeid i havene skal dette skje etter avtale med havnesjefen.</p><p>I vintersesongen ligger foreningens båt tilgjengelig på bryggen med bobleanlegg for å kunne benyttes som redningsbåt i tilfelle personer faller igjennom isen.</p><h2>Brannvern</h2><p>Det er utplassert brannslukkingsapparater ved klubbhus i havnen og ved nedgang til alle bryggene. Det henvises forøvrig til bruk av vannslanger på bryggene eller på opplagsplass.</p><h2>Oljevernberedskap</h2><p>Det er utplassert oljeoppsamlingsutstyr ved miljøbod. Det er utplassert presenninger til bruker under båter ved slipe/skrape og malingsaktiviteter på opplagsplassen for å unngå forurensning av grunnen.</p><h2>Redningsbøyer</h2><p>Det er utplassert redningsbøyer ved utgangen til hver brygge i havnen og på oppheng ute på alle MBFs brygger.</p><h2>Vinterhavn / bobleanlegg</h2><p>Varslingskilt som varsler om bobleanlegg og fare for usikker is skal henge ved utgang til hver brygge. Foreningens arbeidsbåt ligger tilgjengelig som redningsbåt på brygge 5, i tilfelle behov for å redde personer/ utstyr i perioder med is i havnen. De bryggene som ikke er i bruk vinterstid vil bli avstengt i hht fortøyningsreglementet.</p><h2>Referanser</h2><ul><li>Kjemikalieforssriften.</li><li>Forskrift om klassifisering, merking mv. av farlige kjemikalier.</li><li>Stoffkartotekforskriften</li><li>Brannvernloven</li><li>Forurensningsloven</li><li>Brannfarlighetsloven</li><li>Eksplosjonsloven</li><li>Lov om tilsyn med elektriske anlegg og elektrisk utstyr</li></ul></article><p><a class="resource-link" href="https://www.mosjoenbf.no/hms-plan/" target="_blank" rel="noopener" aria-label="Last ned HMS plan PDF">Last ned HMS plan</a></p><h2>Andre reglement</h2><div class="card-grid"><article class="content-card"><h3>Fortøyning</h3><a class="resource-link" href="https://www.mosjoenbf.no/fortoyning/">Åpne fortøyningsreglement</a></article><article class="content-card"><h3>Beredskapsplan</h3><a class="resource-link" href="https://www.mosjoenbf.no/beredskapsplan/">Åpne beredskapsplan</a></article><article class="content-card"><h3>Avfallshåndtering</h3><a class="resource-link" href="https://www.mosjoenbf.no/avfallshantering/">Åpne avfallshåndtering</a></article></div></section>`; }
}

@customElement("linker-page")
export class LinkerPage extends LitElement {
  public static styles = pageStyles;
  public render() { return html`<section class="page-section"><h1 class="page-title">Nyttige linker</h1><div class="card-grid"><article class="content-card"><a class="resource-link" href="https://www.facebook.com/mosjoenbf/" target="_blank" rel="noopener">MBF – Facebook</a></article><article class="content-card"><a class="resource-link" href="https://www.kartverket.no/til-sjos/se-havniva/tidevann-og-vannstand" target="_blank" rel="noopener">Tidevann – Mosjøen</a></article><article class="content-card"><a class="resource-link" href="https://www.redningsselskapet.no/" target="_blank" rel="noopener">Redningsselskapet</a></article><article class="content-card"><a class="resource-link" href="https://velihavn.no/" target="_blank" rel="noopener">Vel i Havn</a></article><article class="content-card"><a class="resource-link" href="https://knbf.no/" target="_blank" rel="noopener">KNBF</a></article></div></section>`; }
}

@customElement("historie-page")
export class HistoriePage extends LitElement {
  public static styles = pageStyles;
  public render() { return html`<section class="page-section"><h1 class="page-title">Historie</h1><p class="lead-text">Les hele historien om Mosjøen båtforening via siden under.</p><iframe src="https://www.mosjoenbf.no/historie-mosjoen-batforening/" title="Historie Mosjøen båtforening" loading="lazy"></iframe></section>`; }
}

@customElement("webkamera-page")
export class WebkameraPage extends LitElement {
  public static styles = pageStyles;
  public render() { return html`<section class="page-section"><h1 class="page-title">Webkamera Mosjøen Båtforening</h1><div class="card-grid"><article class="content-card"><h2>Kamera gjestehavn</h2><img class="camera-image" src="http://mosjoenbf.axiscam.net:203/axis-cgi/jpg/image.cgi" alt="Webkamera ved gjestehavn" /></article><article class="content-card"><h2>Kamera havn</h2><img class="camera-image" src="http://mosjoenbf.axiscam.net:203/axis-cgi/jpg/image.cgi" alt="Webkamera i havneområdet" /></article></div></section>`; }
}
