import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("vedtekter-page")
export class VedtekterPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section {
      max-width: 980px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    h1 {
      margin: 0 0 16px;
      font-size: clamp(2rem, 4vw, 2.75rem);
      color: #082f49;
    }

    p {
      margin: 0 0 24px;
      color: #334155;
      line-height: 1.6;
    }

    .button {
      display: inline-block;
      background: #0c4a6e;
      color: white;
      text-decoration: none;
      padding: 14px 22px;
      border-radius: 8px;
      font-weight: 700;
    }

    .button:hover {
      background: #082f49;
    }
  `;

  render() {
    return html`<section aria-labelledby="vedtekter-title">
      <h1 id="vedtekter-title">Vedtekter - Mosjøen båtforening</h1>
      <p>Nedenfor kan du laste ned våre vedtekter som PDF</p>
      <a class="button" href="/pdf/vedtekter.pdf" download
        >Last ned vedtekter (PDF)</a
      >
    </section>`;
  }
}
