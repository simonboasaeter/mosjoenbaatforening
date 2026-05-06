import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("contact-section")
export class ContactSection extends LitElement {
  public static styles = css`
    :host {
      display: block;
      padding: 60px 40px;
      font-family: system-ui;
    }

    .layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .map {
      background: #ddd;
      height: 300px;
    }
  `;

  public render() {
    return html`
      <section class="layout">
        <div>
          <h3>Sentralt plassert</h3>
          <p>Mosjøen</p>
        </div>
        <div class="map"></div>
      </section>
    `;
  }
}
