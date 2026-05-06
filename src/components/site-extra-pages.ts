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
  public render() { return html`<section class="page-section"><h1 class="page-title">Reglement</h1><p class="lead-text">Velg ønsket dokument under.</p><div class="card-grid"><article class="content-card"><h2>HMS plan</h2><a class="resource-link" href="https://www.mosjoenbf.no/hms-plan/">Åpne HMS plan</a></article><article class="content-card"><h2>Fortøyning</h2><a class="resource-link" href="https://www.mosjoenbf.no/fortoyning/">Åpne fortøyningsreglement</a></article><article class="content-card"><h2>Beredskapsplan</h2><a class="resource-link" href="https://www.mosjoenbf.no/beredskapsplan/">Åpne beredskapsplan</a></article><article class="content-card"><h2>Avfallshåndtering</h2><a class="resource-link" href="https://www.mosjoenbf.no/avfallshantering/">Åpne avfallshåndtering</a></article></div></section>`; }
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
