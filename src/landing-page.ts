import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/site-header";
import "./components/hero-section";
import "./components/about-section";
import "./components/site-footer";
import "./components/kontaktpersoner-page";
import "./components/vedtekter-page";

@customElement("landing-page")
export class LandingPage extends LitElement {
  public static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f8fafc;
      color: #102a43;
      font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }

    main {
      display: block;
    }
  `;

  public render() {
    const pathName = window.location.pathname;

    return html`
      <site-header></site-header>

      <main>
        ${pathName === "/organisering/kontaktpersoner"
          ? html`<kontaktpersoner-page></kontaktpersoner-page>`
          : pathName === "/organisering/vedtekter"
            ? html`<vedtekter-page></vedtekter-page>`
            : html`
                <hero-section></hero-section>
                <about-section></about-section>
              `}
      </main>

      <site-footer></site-footer>
    `;
  }
}
