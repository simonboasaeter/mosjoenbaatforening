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
  public render() { return html`<section class="page-section"><h1 class="page-title">HMS plan</h1><p class="lead-text">Nåværende HMS plan kan du se nedenfor. Eller laste den ned som PDF</p><article class="content-card"><h2>Formål</h2><p>Denne HMS plan beskriver beredskap relatert til MBF.</p><ul><li>alvorlige ulykker</li><li>miljøhendelser, f.eks. utslipp av farlige kjemikalier, uønsket utslipp til luft, brann/eksplosjon, samt feil bruk av miljøskadelige stoffer</li></ul></article><p><a class="resource-link" href="#" aria-label="Last ned HMS plan PDF">Last ned HMS plan</a></p></section>`; }
}

@customElement("fortoyning-page")
export class FortoyningPage extends LitElement { public static styles = pageStyles; public render() { return html`<section class="page-section"><h1 class="page-title">Fortøyning</h1><p class="lead-text">Fortøyningsreglement presenteres her som del av den fornyede løsningen.</p></section>`; } }
@customElement("beredskapsplan-page")
export class BeredskapsplanPage extends LitElement { public static styles = pageStyles; public render() { return html`<section class="page-section"><h1 class="page-title">Beredskapsplan</h1><p class="lead-text">Beredskapsplan presenteres her som del av den fornyede løsningen.</p></section>`; } }
@customElement("avfallshandtering-page")
export class AvfallshandteringPage extends LitElement { public static styles = pageStyles; public render() { return html`<section class="page-section"><h1 class="page-title">Avfallshåndtering</h1><p class="lead-text">Retningslinjer for avfallshåndtering presenteres her som del av den fornyede løsningen.</p></section>`; } }

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
