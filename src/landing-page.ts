import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/site-header";
import "./components/hero-section";
import "./components/about-section";
import "./components/site-footer";
import "./components/kontaktpersoner-page";
import "./components/vedtekter-page";
import "./components/informasjon-pages";
import "./components/site-extra-pages";

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
            : pathName === "/informasjon/gjest-i-havna"
              ? html`<gjest-i-havna-page></gjest-i-havna-page>`
              : pathName === "/informasjon/severdigheter"
                ? html`<severdigheter-page></severdigheter-page>`
                : pathName === "/informasjon/slipoppsett"
                  ? html`<slipoppsett-page></slipoppsett-page>`
                  : pathName === "/informasjon/oppstilling-landomrade"
                    ? html`<oppstilling-page></oppstilling-page>`
                    : pathName === "/informasjon/vare-priser"
                      ? html`<vare-priser-page></vare-priser-page>`
                      : pathName === "/informasjon/bilder"
                        ? html`<bilder-page></bilder-page>`
                        : pathName === "/reglement"
                          ? html`<reglement-page></reglement-page>`
                          : pathName === "/linker"
                            ? html`<linker-page></linker-page>`
                            : pathName === "/historie"
                              ? html`<historie-page></historie-page>`
                              : pathName === "/webkamera"
                                ? html`<webkamera-page></webkamera-page>`
            : html`
                <hero-section></hero-section>
                <about-section></about-section>
              `}
      </main>

      <site-footer></site-footer>
    `;
  }
}
