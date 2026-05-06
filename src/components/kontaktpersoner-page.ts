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

    .card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
    }

    .bulk-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 12px;
    }

    li {
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 12px;
    }

    li:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }

    h2 {
      margin: 0 0 12px;
      font-size: 1.15rem;
    }

    h3 {
      margin: 0;
      font-size: 1rem;
      color: #0f172a;
    }

    .role {
      color: #475569;
      margin: 4px 0;
      font-size: 0.95rem;
    }

    a {
      color: #0c4a6e;
      text-decoration: none;
    }

    @media (min-width: 960px) {
      .bulk-grid {
        grid-template-columns: 1fr 1fr;
        align-items: start;
      }
    }
  `;

  render() {
    return html`<section aria-labelledby="kontaktpersoner-title">
      <h1 id="kontaktpersoner-title">Kontaktpersoner</h1>
      <p>Her finner du kontaktinformasjon til Mosjøen båtforening.</p>

      <article class="card" aria-labelledby="kontaktinfo-title">
        <h2 id="kontaktinfo-title">Kontaktinfo Mosjøen båtforening</h2>
        <p>
          E-post: <a href="mailto:post@mosjoenbf.no">post@mosjoenbf.no</a><br />
          Telefon: <a href="tel:+4790260515">902 60 515</a>
        </p>
      </article>

      <div class="bulk-grid">
        <article class="card" aria-labelledby="styret-title">
          <h2 id="styret-title">Styret</h2>
          <ul>
            <li>
              <h3>Finn Rune Hagen</h3>
              <p class="role">
                Leder –
                <a href="mailto:leder@mosjoenbf.no">leder@mosjoenbf.no</a>
              </p>
            </li>
            <li>
              <h3>Petter Jessen</h3>
              <p class="role">
                Nestleder –
                <a href="mailto:nestleder@mosjoenbf.no"
                  >nestleder@mosjoenbf.no</a
                >
              </p>
            </li>
            <li>
              <h3>Stian Johansen</h3>
              <p class="role">
                Havnesjef –
                <a href="mailto:havnesjef@mosjoenbf.no"
                  >havnesjef@mosjoenbf.no</a
                >
              </p>
            </li>
            <li>
              <h3>John Egil Marken</h3>
              <p class="role">
                Kasserer –
                <a href="mailto:kasserer@mosjoenbf.no">kasserer@mosjoenbf.no</a>
              </p>
            </li>
            <li>
              <h3>Robert Antonsen</h3>
              <p class="role">
                Sekretær –
                <a href="mailto:sekretar@mosjoenbf.no">sekretar@mosjoenbf.no</a>
              </p>
            </li>
            <li>
              <h3>Rune Sørgård</h3>
              <p class="role">
                Styremedlem –
                <a href="mailto:styremedlem1@mosjoenbf.no"
                  >styremedlem1@mosjoenbf.no</a
                >
              </p>
            </li>
            <li>
              <h3>Tone Kjenstad</h3>
              <p class="role">
                Styremedlem –
                <a href="mailto:styremedlem2@mosjoenbf.no"
                  >styremedlem2@mosjoenbf.no</a
                >
              </p>
            </li>
            <li>
              <h3>Johnny Vålamo</h3>
              <p class="role">
                Varamedlem –
                <a href="mailto:varamedlem2@mosjoenbf.no"
                  >varamedlem2@mosjoenbf.no</a
                >
              </p>
            </li>
            <li>
              <h3>Rita Fjelldavli</h3>
              <p class="role">
                Varamedlem –
                <a href="mailto:varamedlem1@mosjoenbf.no"
                  >varamedlem1@mosjoenbf.no</a
                >
              </p>
            </li>
          </ul>
        </article>

        <article class="card" aria-labelledby="brygge-title">
          <h2 id="brygge-title">Bryggeformenn</h2>
          <ul>
            <li>
              <h3>Brygge 1</h3>
              <p class="role">Olaf Hansen</p>
            </li>
            <li>
              <h3>Brygge 2</h3>
              <p class="role">Eskild Heide</p>
            </li>
            <li>
              <h3>Brygge 3</h3>
              <p class="role">Ronny Forsmo</p>
            </li>
            <li>
              <h3>Brygge 4</h3>
              <p class="role">Jan Erik Johansen</p>
            </li>
            <li>
              <h3>Brygge 5</h3>
              <p class="role">Ole Sivert Tverå</p>
            </li>
          </ul>
        </article>
      </div>
    </section>`;
  }
}
