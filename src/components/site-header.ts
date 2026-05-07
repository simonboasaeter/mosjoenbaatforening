import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("site-header")
export class SiteHeader extends LitElement {
  @state() private mobileMenuOpen = false;

  public static styles = css`
    :host { display: block; position: sticky; top: 0; z-index: 20; background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(15, 23, 42, 0.08); }
    .site-header { max-width: 1440px; margin: 0 auto; min-height: 76px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .brand { display: flex; align-items: center; gap: 12px; color: #082f49; text-decoration: none; font-weight: 800; text-transform: uppercase; line-height: 1.05; }
    .brand-logo { width: 52px; height: 52px; object-fit: contain; border-radius: 8px; }
    .brand-text { display: grid; }
    .brand-name { font-size: 18px; }
    .brand-subtitle { font-size: 13px; letter-spacing: 0.16em; }
    .navigation { display: flex; align-items: center; gap: 20px; font-size: 14px; font-weight: 600; flex-wrap: wrap; }
    .navigation a, .dropdown-button { color: #0f172a; text-decoration: none; background: transparent; border: 0; font: inherit; cursor: pointer; padding: 0; }
    .dropdown-button { display: inline-flex; align-items: center; gap: 6px; }
    .dropdown-button::after { content: "▾"; font-size: 12px; line-height: 1; color: #475569; transform: translateY(-1px); }
    .dropdown { position: relative; }
    .dropdown::after { content: ""; position: absolute; inset: 100% 0 auto; height: 12px; }
    .dropdown-menu { position: absolute; top: calc(100% + 8px); left: 0; min-width: 220px; background: white; border: 1px solid rgba(15, 23, 42, 0.12); border-radius: 8px; box-shadow: 0 12px 26px rgba(15, 23, 42, 0.16); padding: 8px; display: none; z-index: 30; }
    .dropdown:hover .dropdown-menu, .dropdown:focus-within .dropdown-menu { display: grid; gap: 4px; }
    .dropdown:hover .dropdown-button::after, .dropdown:focus-within .dropdown-button::after { transform: rotate(180deg) translateY(1px); }
    .dropdown-menu a { padding: 10px 12px; border-radius: 6px; display: block; }
    .dropdown-menu a:hover, .dropdown-menu a:focus-visible, .member-link:focus-visible, .navigation a:focus-visible, .dropdown-button:focus-visible, .mobile-menu-button:focus-visible, .mobile-nav a:focus-visible, .mobile-nav details summary:focus-visible {
      outline: 2px solid #082f49;
      outline-offset: 2px;
    }
    .member-link { background: #dc2626; color: white; padding: 12px 18px; border-radius: 4px; font-size: 13px; font-weight: 800; text-transform: uppercase; text-decoration: none; }
    .mobile-menu-button { display: none; width: 44px; height: 44px; background: transparent; border: 1px solid rgba(15, 23, 42, 0.2); border-radius: 8px; color: #0f172a; cursor: pointer; align-items: center; justify-content: center; }
    .mobile-menu-icon { position: relative; width: 20px; height: 14px; display: inline-block; }
    .mobile-menu-icon::before,
    .mobile-menu-icon::after,
    .mobile-menu-icon span { content: ""; position: absolute; left: 0; width: 100%; height: 2px; background: currentColor; border-radius: 2px; transition: transform 0.2s ease, opacity 0.2s ease; }
    .mobile-menu-icon::before { top: 0; }
    .mobile-menu-icon span { top: 6px; }
    .mobile-menu-icon::after { top: 12px; }
    .mobile-menu-button[aria-expanded="true"] .mobile-menu-icon::before { transform: translateY(6px) rotate(45deg); }
    .mobile-menu-button[aria-expanded="true"] .mobile-menu-icon span { opacity: 0; }
    .mobile-menu-button[aria-expanded="true"] .mobile-menu-icon::after { transform: translateY(-6px) rotate(-45deg); }
    .mobile-nav { display: none; border-top: 1px solid rgba(15, 23, 42, 0.08); padding: 12px 24px 18px; }
    .mobile-nav-links { display: grid; gap: 6px; }
    .mobile-nav a { display: block; color: #0f172a; text-decoration: none; padding: 10px 0; font-size: 15px; font-weight: 600; }
    .mobile-nav details { border-bottom: 1px solid rgba(15, 23, 42, 0.08); padding: 6px 0; }
    .mobile-nav details:last-child { border-bottom: 0; }
    .mobile-nav details summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; color: #0f172a; font-size: 15px; font-weight: 700; padding: 8px 0; }
    .mobile-nav details summary::-webkit-details-marker { display: none; }
    .mobile-nav details summary::after { content: "▾"; font-size: 12px; color: #475569; transition: transform 0.2s ease; }
    .mobile-nav details[open] summary::after { transform: rotate(180deg); }
    .mobile-nav details a { padding-left: 12px; }

    @media (max-width: 1000px) {
      .navigation { display: none; }
      .mobile-menu-button { display: inline-flex; align-items: center; }
      .mobile-nav[open] { display: block; }
    }

    @media (max-width: 560px) {
      .member-link { display: none; }
      .brand-name { font-size: 15px; }
      .site-header { padding: 0 16px; }
      .mobile-nav { padding: 12px 16px 18px; }
    }
  `;

  private toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  public render() {
    return html`
      <header class="site-header">
        <a class="brand" href="/" @click=${this.closeMobileMenu}><img class="brand-logo" src="/images/logo.jpg" alt="Mosjøen Båtforening logo" /><span class="brand-text"><span class="brand-name">Mosjøen</span><span class="brand-subtitle">Båtforening</span></span></a>
        <nav class="navigation" aria-label="Hovedmeny">
          <a href="/">Hjem</a>
          <div class="dropdown"><button class="dropdown-button" type="button">Organisering</button><div class="dropdown-menu"><a href="/organisering/kontaktpersoner">Kontaktpersoner</a><a href="/organisering/vedtekter">Vedtekter</a></div></div>
          <div class="dropdown"><button class="dropdown-button" type="button">Informasjon</button><div class="dropdown-menu"><a href="/informasjon/gjest-i-havna">Gjest i havna</a><a href="/informasjon/severdigheter">Severdigheter</a><a href="/informasjon/slipoppsett">Slipoppsett</a><a href="/informasjon/oppstilling-landomrade">Oppstilling landområde</a><a href="/informasjon/vare-priser">Våre priser</a><a href="/informasjon/bilder">Bilder</a></div></div>
          <div class="dropdown"><button class="dropdown-button" type="button">Reglement</button><div class="dropdown-menu"><a href="/reglement/hms-plan">HMS plan</a><a href="/reglement/fortoyning">Fortøyning</a><a href="/reglement/beredskapsplan">Beredskapsplan</a><a href="/reglement/avfallshandtering">Avfallshåndtering</a></div></div>
          <a href="/historie">Historie</a><a href="/webkamera">Webkamera</a>
        </nav>
        <button class="mobile-menu-button" type="button" aria-label="Åpne meny" aria-expanded=${this.mobileMenuOpen ? "true" : "false"} aria-controls="mobile-navigation" @click=${this.toggleMobileMenu}>
          <span class="mobile-menu-icon" aria-hidden="true"><span></span></span>
        </button>
        <a class="member-link" href="https://www.havneweb.no/mosjoenbf/?mod=sokplass" target="_blank" rel="noopener noreferrer">Bli medlem</a>
      </header>

      <nav id="mobile-navigation" class="mobile-nav" ?open=${this.mobileMenuOpen} aria-label="Mobilmeny">
        <div class="mobile-nav-links">
          <a href="/" @click=${this.closeMobileMenu}>Hjem</a>
          <details>
            <summary>Organisering</summary>
            <a href="/organisering/kontaktpersoner" @click=${this.closeMobileMenu}>Kontaktpersoner</a>
            <a href="/organisering/vedtekter" @click=${this.closeMobileMenu}>Vedtekter</a>
          </details>
          <details>
            <summary>Informasjon</summary>
            <a href="/informasjon/gjest-i-havna" @click=${this.closeMobileMenu}>Gjest i havna</a>
            <a href="/informasjon/severdigheter" @click=${this.closeMobileMenu}>Severdigheter</a>
            <a href="/informasjon/slipoppsett" @click=${this.closeMobileMenu}>Slipoppsett</a>
            <a href="/informasjon/oppstilling-landomrade" @click=${this.closeMobileMenu}>Oppstilling landområde</a>
            <a href="/informasjon/vare-priser" @click=${this.closeMobileMenu}>Våre priser</a>
            <a href="/informasjon/bilder" @click=${this.closeMobileMenu}>Bilder</a>
          </details>
          <details>
            <summary>Reglement</summary>
            <a href="/reglement/hms-plan" @click=${this.closeMobileMenu}>HMS plan</a>
            <a href="/reglement/fortoyning" @click=${this.closeMobileMenu}>Fortøyning</a>
            <a href="/reglement/beredskapsplan" @click=${this.closeMobileMenu}>Beredskapsplan</a>
            <a href="/reglement/avfallshandtering" @click=${this.closeMobileMenu}>Avfallshåndtering</a>
          </details>
          <a href="/historie" @click=${this.closeMobileMenu}>Historie</a>
          <a href="/webkamera" @click=${this.closeMobileMenu}>Webkamera</a>
        </div>
      </nav>
    `;
  }
}
