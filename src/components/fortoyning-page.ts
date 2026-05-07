import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("fortoyning-page")
export class FortoyningPage extends LitElement {
  public static styles = css`
    :host {
      display: block;
    }

    .page-section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 64px 24px;
    }

    .page-title {
      margin: 0 0 16px;
      color: #082f49;
      font-size: clamp(2rem, 4vw, 2.8rem);
    }

    .lead-text {
      margin: 0 0 24px;
      color: #334155;
      line-height: 1.7;
    }

    .content-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
    }

    .content-row img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      display: block;
    }

    .content-row p {
      margin: 0;
      color: #334155;
      line-height: 1.7;
    }

    @media (min-width: 960px) {
      .content-row {
        grid-template-columns: 1.15fr 1fr;
      }
    }
  `;

  public render() {
    return html`
      <section class="page-section">
        <h1 class="page-title">Fortøyning</h1>
        <p class="lead-text">
          Her finner du informasjon om fortøyning av båter i småbåthavnen.
        </p>

        <article class="content-row">
          <p>
            Her ser dere en skisse med fortøningsbeskrivelse for alle som har
            båt i Mosjøen båtforening (Pålgarden marina)
          </p>
          <img
            src="/images/fortøyningsprinsipp.png"
            alt="Skisse med fortøyningsbeskrivelse"
          />
        </article>
      </section>
    `;
  }
}
