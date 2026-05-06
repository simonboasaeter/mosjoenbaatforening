import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

const pageStyles = css`
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
    color: #334155;
    line-height: 1.7;
  }
  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 20px;
  }
  .content-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
  }
  .resource-link {
    color: #0c4a6e;
    text-decoration: none;
    font-weight: 700;
  }
  iframe,
  .camera-image {
    width: 100%;
    min-height: 320px;
    border: 0;
    border-radius: 12px;
  }
  .camera-placeholder {
    min-height: 180px;
    border-radius: 16px;
    background: linear-gradient(135deg, #e2e8f0, #f8fafc);
    display: grid;
    place-items: center;
    font-size: 48px;
    color: #0f172a;
  }
  @media (min-width: 900px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

@customElement("reglement-page")
export class ReglementPage extends LitElement {
  public static styles = pageStyles;
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">HMS plan</h1>
      <p class="lead-text">
        Nåværende HMS plan kan du se nedenfor. Eller laste den ned som PDF
      </p>
      <article class="content-card">
        <h2>Formål</h2>
        <p>Denne HMS plan beskriver beredskap relatert til MBF.</p>
        <ul>
          <li>alvorlige ulykker</li>
          <li>
            miljøhendelser, f.eks. utslipp av farlige kjemikalier, uønsket
            utslipp til luft, brann/eksplosjon, samt feil bruk av miljøskadelige
            stoffer
          </li>
        </ul>
      </article>
      <p>
        <a class="resource-link" href="#" aria-label="Last ned HMS plan PDF"
          >Last ned HMS plan</a
        >
      </p>
    </section>`;
  }
}

@customElement("fortoyning-page")
export class FortoyningPage extends LitElement {
  public static styles = pageStyles;
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Fortøyning</h1>
      <p class="lead-text">
        Fortøyningsreglement presenteres her som del av den fornyede løsningen.
      </p>
    </section>`;
  }
}
@customElement("beredskapsplan-page")
export class BeredskapsplanPage extends LitElement {
  public static styles = pageStyles;
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Beredskapsplan</h1>
      <p class="lead-text">
        Beredskapsplan presenteres her som del av den fornyede løsningen.
      </p>
    </section>`;
  }
}
@customElement("avfallshandtering-page")
export class AvfallshandteringPage extends LitElement {
  public static styles = pageStyles;
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Avfallshåndtering</h1>
      <p class="lead-text">
        Retningslinjer for avfallshåndtering presenteres her som del av den
        fornyede løsningen.
      </p>
    </section>`;
  }
}

@customElement("historie-page")
export class HistoriePage extends LitElement {
  public static styles = [
    pageStyles,
    css`
      .history-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .history-image {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        min-height: 280px;
      }
      .history-list {
        margin: 0;
        padding-left: 20px;
      }
      .history-links {
        display: grid;
        gap: 10px;
        margin-top: 16px;
      }
      @media (min-width: 950px) {
        .history-layout {
          grid-template-columns: 1.3fr 1fr;
          align-items: start;
        }
      }
    `,
  ];
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Historie - Mosjøen båtforening</h1>
      <div class="history-layout">
        <article class="content-card">
          <h2>Utviklingen</h2>
          <ul class="history-list">
            <li>1960 – Mosjøen båtforening ble stiftet</li>
            <li>1963 – Organisert havn bak Flokkmann</li>
            <li>1980 – Første fellestur – den gikk til Rødøyvågen</li>
            <li>1986 – Ny havn mudret ved Baustein</li>
            <li>1990 – Steinmolo rundt havna og offisiell åpning</li>
            <li>1991 – Dieselfylling i havna</li>
            <li>1993 – Mudring og bygging av brygge 3</li>
            <li>1997 – Havna ble utvidet østover (mot landsida)</li>
            <li>2000 – Opphalingshus og slip</li>
            <li>2008 – Oppstart av stedsutviklingsprosjekt</li>
            <li>2009 – Ny gjestebrygge</li>
            <li>2011 – Ny brygge 2 og 3</li>
            <li>2012 – Ny brygge 1</li>
            <li>2013 – Fyrlykt på plass med lys</li>
            <li>
              2016 – Drivstoffanlegg for bensin og diesel samt ferdigstillelse
              av kaifront
            </li>
            <li>2019 – Nytt klubbhus</li>
            <li>2021 – Asfaltering og oppmerking av p-plass</li>
            <li>2021 – Oppretting av bobilparkering</li>
          </ul>
          <div class="history-links">
            <a class="resource-link" href="#">Klikk her for historiske bilder</a
            ><a class="resource-link" href="#"
              >Historien -> Mosjøen båtforening</a
            ><a class="resource-link" href="#">Ledere Mosjøen båtforening</a>
          </div>
        </article>
        <img
          class="history-image"
          src="./images/Ledere-MBF-historie.jpg"
          alt="Historisk motiv fra Mosjøen båtforening"
        />
      </div>
    </section>`;
  }
}
@customElement("webkamera-page")
export class WebkameraPage extends LitElement {
  public static styles = pageStyles;

  private readonly cameras = [
    {
      title: "Kamera gjestehavn",
      previewImageUrl: "http://51.175.40.173:201/jpg/image.jpg",
      cameraUrl:
        "http://51.175.40.173:201/view/view.shtml?id=2&imagepath=%2Fmjpg%2Fvideo.mjpg&size=1",
    },
    {
      title: "Kamera havn",
      previewImageUrl: "http://51.175.40.173:200/jpg/image.jpg",
      cameraUrl:
        "http://51.175.40.173:200/view/view.shtml?id=2&imagepath=%2Fmjpg%2Fvideo.mjpg&size=1",
    },
    {
      title: "Kamera parkering",
      previewImageUrl: "http://51.175.40.173:203/jpg/image.jpg",
      cameraUrl:
        "http://51.175.40.173:203/view/view.shtml?id=2&imagepath=%2Fmjpg%2Fvideo.mjpg&size=1",
    },
  ];

  public render() {
    return html`
      <section class="page-section">
        <h1 class="page-title">Webkamera Mosjøen Båtforening</h1>

        <div class="card-grid">
          ${this.cameras.map(
            (camera) => html`
              <article class="content-card">
                <img
                  class="camera-image"
                  src="${camera.previewImageUrl}"
                  alt="${camera.title}"
                  loading="lazy"
                />

                <h2>${camera.title}</h2>

                <a
                  class="resource-link"
                  href="${camera.cameraUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Åpne direktesending
                </a>
              </article>
            `,
          )}
        </div>
      </section>
    `;
  }
}
