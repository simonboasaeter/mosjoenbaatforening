import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-header")
export class SiteHeader extends LitElement {
  public static styles = css`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    }

    .site-header {
      max-width: 1440px;
      margin: 0 auto;
      min-height: 76px;
      padding: 0 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #082f49;
      text-decoration: none;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      line-height: 1.05;
    }

    .brand-mark {
      width: 44px;
      height: 44px;
      border: 3px solid currentColor;
      border-radius: 12px;
      display: grid;
      place-items: center;
      font-size: 24px;
    }

    .brand-text {
      display: grid;
      gap: 2px;
    }

    .brand-name {
      font-size: 18px;
    }

    .brand-subtitle {
      font-size: 14px;
      letter-spacing: 0.18em;
      font-weight: 600;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 34px;
      font-size: 14px;
      font-weight: 600;
    }

    nav a {
      color: #0f172a;
      text-decoration: none;
    }

    nav a:hover {
      color: #dc2626;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .member-link {
      background: #dc2626;
      color: white;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      box-shadow: 0 10px 24px rgba(220, 38, 38, 0.25);
    }

    .social-link {
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: #082f49;
      color: white;
      display: grid;
      place-items: center;
      text-decoration: none;
      font-weight: 800;
      font-size: 14px;
    }

    @media (max-width: 1000px) {
      nav {
        display: none;
      }

      .site-header {
        padding: 0 24px;
      }
    }

    @media (max-width: 560px) {
      .member-link {
        display: none;
      }

      .brand-name {
        font-size: 15px;
      }

      .brand-subtitle {
        font-size: 12px;
      }
    }
  `;

  public render() {
    return html`
      <header class="site-header">
        <a class="brand" href="/">
          <span class="brand-mark" aria-hidden="true">⚓</span>
          <span class="brand-text">
            <span class="brand-name">Mosjøen</span>
            <span class="brand-subtitle">Båtforening</span>
          </span>
        </a>

        <nav aria-label="Hovedmeny">
          <a href="#">Hjem</a>
          <a href="#om-oss">Om oss</a>
          <a href="#">Havnen</a>
          <a href="#">Fasiliteter</a>
          <a href="#">Medlemskap</a>
          <a href="#">Nyheter</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div class="actions">
          <a class="member-link" href="#">Bli medlem</a>
          <a class="social-link" href="#" aria-label="Facebook">f</a>
        </div>
      </header>
    `;
  }
}
