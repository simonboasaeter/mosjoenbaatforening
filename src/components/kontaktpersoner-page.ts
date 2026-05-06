import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("kontaktpersoner-page")
export class KontaktpersonerPage extends LitElement {
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
      margin: 0 0 12px;
      font-size: clamp(2rem, 4vw, 2.75rem);
      color: #082f49;
    }

    p {
      margin: 0 0 28px;
      color: #334155;
      line-height: 1.6;
      max-width: 70ch;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 16px;
    }

    li {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
    }

    h2 {
      margin: 0 0 8px;
      font-size: 1.15rem;
    }

    a {
      color: #0c4a6e;
      text-decoration: none;
    }
  `;

  render() {
    return html`<section aria-labelledby="kontaktpersoner-title">
      <h1 id="kontaktpersoner-title">Kontaktpersoner</h1>
      <p>
        Her finner du kontaktinformasjon til styret og relevante kontaktpersoner
        i Mosjøen båtforening.
      </p>
      <ul>
        <li>
          <h2>Styreleder</h2>
          <p>Navn: Ola Nordmann<br />Telefon: <a href="tel:+4790123456">+47 90 12 34 56</a><br />E-post:
          <a href="mailto:styreleder@mosjoen-batforening.no">styreleder@mosjoen-batforening.no</a></p>
        </li>
        <li>
          <h2>Havneansvarlig</h2>
          <p>Navn: Kari Hansen<br />Telefon: <a href="tel:+4798765432">+47 98 76 54 32</a><br />E-post:
          <a href="mailto:havn@mosjoen-batforening.no">havn@mosjoen-batforening.no</a></p>
        </li>
      </ul>
    </section>`;
  }
}
