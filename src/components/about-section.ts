import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("about-section")
export class AboutSection extends LitElement {
  public static styles = css`
    :host {
      display: block;
      background:
        radial-gradient(
          circle at 92% 18%,
          rgba(8, 47, 73, 0.06),
          transparent 220px
        ),
        #f8fafc;
    }

    .about-section {
      max-width: 1440px;
      margin: 0 auto;
      padding: 48px;
      display: grid;
      grid-template-columns: minmax(360px, 0.88fr) minmax(420px, 1.12fr);
      gap: 64px;
      align-items: center;
    }

    .image-card {
      margin: 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
    }

    img {
      display: block;
      width: 100%;
      height: 430px;
      object-fit: cover;
    }

    .eyebrow {
      display: inline-block;
      margin-bottom: 12px;
      color: #dc2626;
      font-size: 13px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    h2 {
      margin: 0;
      color: #102a43;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(32px, 4vw, 48px);
      line-height: 1.05;
      letter-spacing: -0.04em;
    }

    .content {
      margin-top: 20px;
      display: grid;
      gap: 12px;
      color: #263849;
      font-size: 15px;
      line-height: 1.62;
    }

    p {
      margin: 0;
    }

    @media (max-width: 980px) {
      .about-section {
        grid-template-columns: 1fr;
        gap: 36px;
      }

      img {
        height: 360px;
      }
    }

    @media (max-width: 620px) {
      .about-section {
        padding: 36px 24px;
      }

      img {
        height: 280px;
      }
    }
  `;

  public render() {
    return html`
      <section id="om-oss" class="about-section" aria-labelledby="about-title">
        <figure class="image-card">
          <img
            src="./images/båtplass.jpg"
            alt="Brygge og båter ved Mosjøen marina"
          />
        </figure>

        <article>
          <span class="eyebrow">Om Mosjøen Båtforening</span>
          <h2 id="about-title">Velkommen til Mosjøen Båtforening</h2>

          <div class="content">
            <p>
              Mosjøen Båtforening tilbyr for deg som kommer sjøvegen 65 meter
              gjestebrygge med vann/strøm og i vårt servicebygg finnes kjøkken,
              toaletter/dusj, vaskemaskin, tørketrommel, oppholdsrom og mulighet
              for kaste avfall.
            </p>

            <p>
              Kommer du med bobil kan vi tilby 9 oppstillingsplasser med
              mulighet for strøm. Når du betaler får du kode til servicebygget
              og kode til trådløst internett.
            </p>

            <p>
              Området rundt marinaen er meget innbydende, både for våre
              medlemmer / båtgjester og kommunens befolkning som i økende grad
              bruker båthavna til turmål og rekreasjon.
            </p>

            <p>
              Mosjøen Båtforening ble stiftet i august 1960 og feiret i 2020
              sitt 60-årsjubileum. Båtforeningen er i dag en av de større
              båtforeningen i Nordland med 198 båtplasser og med ca. 300
              medlemmer.
            </p>

            <p>
              Informasjonstavler rundt om i havna beskriver blant annet MBF's
              historie, Baustein gjennom historien, sagbrukene i området, byens
              to store båtbyggere og tømmerfløting.
            </p>

            <p>
              Mosjøen Båtforening har til mål å gjøre havneområdet attraktivt og
              tilgjengelig for alle.
            </p>
          </div>
        </article>
      </section>
    `;
  }
}
