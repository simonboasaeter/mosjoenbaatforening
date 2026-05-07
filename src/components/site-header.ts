import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-header")
export class SiteHeader extends LitElement {
  public static styles = css`
    :host { display: block; position: sticky; top: 0; z-index: 20; background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(15, 23, 42, 0.08); }
    .site-header { max-width: 1440px; margin: 0 auto; min-height: 76px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .brand { display: flex; align-items: center; gap: 12px; color: #082f49; text-decoration: none; font-weight: 800; text-transform: uppercase; line-height: 1.05; }
    .brand-logo { width: 52px; height: 52px; object-fit: contain; border-radius: 8px; }
    .brand-text { display: grid; } .brand-name { font-size: 18px; } .brand-subtitle { font-size: 13px; letter-spacing: 0.16em; }
    .navigation { display: flex; align-items: center; gap: 20px; font-size: 14px; font-weight: 600; flex-wrap: wrap; }
    a, summary { color: #0f172a; text-decoration: none; }
    details { position: relative; }
    summary { list-style: none; cursor: pointer; }
    summary::-webkit-details-marker { display: none; }
    .dropdown-menu { position: absolute; top: calc(100% + 8px); left: 0; min-width: 220px; background: white; border: 1px solid rgba(15, 23, 42, 0.12); border-radius: 8px; box-shadow: 0 12px 26px rgba(15, 23, 42, 0.16); padding: 8px; display: grid; gap: 4px; }
    .dropdown-menu a { padding: 10px 12px; border-radius: 6px; }
    .dropdown-menu a:hover, .dropdown-menu a:focus-visible, .member-link:focus-visible, .navigation a:focus-visible, summary:focus-visible { outline: 2px solid #082f49; outline-offset: 2px; }
    .member-link { background: #dc2626; color: white; padding: 12px 18px; border-radius: 4px; font-size: 13px; font-weight: 800; text-transform: uppercase; }
    @media (max-width: 1000px) { .navigation { display: none; } }
    @media (max-width: 560px) { .member-link { display: none; } .brand-name { font-size: 15px; } }
  `;

  public render() {
    return html`<header class="site-header"><a class="brand" href="/"><img class="brand-logo" src="/images/logo.jpg" alt="Mosjøen Båtforening logo" /><span class="brand-text"><span class="brand-name">Mosjøen</span><span class="brand-subtitle">Båtforening</span></span></a>
      <nav class="navigation" aria-label="Hovedmeny">
        <a href="/">Hjem</a>
        <details><summary>Organisering</summary><div class="dropdown-menu"><a href="/organisering/kontaktpersoner">Kontaktpersoner</a><a href="/organisering/vedtekter">Vedtekter</a></div></details>
        <details><summary>Informasjon</summary><div class="dropdown-menu"><a href="/informasjon/gjest-i-havna">Gjest i havna</a><a href="/informasjon/severdigheter">Severdigheter</a><a href="/informasjon/slipoppsett">Slipoppsett</a><a href="/informasjon/oppstilling-landomrade">Oppstilling landområde</a><a href="/informasjon/vare-priser">Våre priser</a><a href="/informasjon/bilder">Bilder</a></div></details>
        <details><summary>Reglement</summary><div class="dropdown-menu"><a href="/reglement/hms-plan">HMS plan</a><a href="/reglement/fortoyning">Fortøyning</a><a href="/reglement/beredskapsplan">Beredskapsplan</a><a href="/reglement/avfallshandtering">Avfallshåndtering</a></div></details>
        <a href="/historie">Historie</a><a href="/webkamera">Webkamera</a>
      </nav><a class="member-link" href="https://www.havneweb.no/mosjoenbf/?mod=sokplass" target="_blank" rel="noopener noreferrer">Bli medlem</a></header>`;
  }
}
