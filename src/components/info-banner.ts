import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("info-banner")
export class InfoBanner extends LitElement {
  public static styles = css`
    :host {
      display: block;
      background: #0f172a;
      color: white;
      padding: 30px;
      font-family: system-ui;
    }

    .grid {
      display: flex;
      justify-content: space-around;
    }
  `;

  public render() {
    return html`
      <section class="grid">
        <div>Aktivt miljø</div>
        <div>Åpent hele året</div>
        <div>Trygt og sikkert</div>
        <div>Enkelt medlemskap</div>
      </section>
    `;
  }
}
