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

@customElement("beredskapsplan-page")
export class BeredskapsplanPage extends LitElement {
  public static styles = [
    pageStyles,
    css`
      .plan-subtitle {
        margin: 0;
        color: #0f172a;
        font-size: 1.25rem;
      }
      .emergency-box {
        margin-top: 20px;
        background: #fee2e2;
        border: 1px solid #fca5a5;
        border-radius: 12px;
        padding: 20px;
      }
      .emergency-title {
        margin: 0 0 10px;
        color: #7f1d1d;
        font-size: 1.1rem;
      }
      .emergency-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .emergency-pill {
        background: #b91c1c;
        color: #fff;
        border-radius: 999px;
        padding: 8px 14px;
        font-weight: 700;
      }
      .plan-list {
        margin: 8px 0 0;
        padding-left: 20px;
        line-height: 1.7;
      }
      .download-button {
        display: inline-flex;
        margin-top: 18px;
        background: #0c4a6e;
        color: #fff;
        text-decoration: none;
        padding: 10px 16px;
        border-radius: 10px;
        font-weight: 700;
      }
      .symbol-grid {
        margin-top: 12px;
        display: grid;
        gap: 8px;
      }
      .symbol-item {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 10px 12px;
      }
    `,
  ];
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Beredskapsplan</h1>
      <p class="lead-text">
        Nåværende beredskapsplan kan du se nedenfor. Eller laste den ned som
        PDF.
      </p>

      <article class="content-card">
        <h2 class="plan-subtitle">
          Beredskapsplan for Mosjøen Båtforening (MBF)
        </h2>

        <div class="emergency-box" role="status" aria-live="polite">
          <h3 class="emergency-title">Nødtelefon ved brann og ulykker</h3>
          <div class="emergency-numbers">
            <span class="emergency-pill">BRANN - 110</span>
            <span class="emergency-pill">POLITI - 112</span>
            <span class="emergency-pill">AMBULANSE - 113</span>
          </div>
        </div>

        <h3>Ved brann</h3>
        <ul class="plan-list">
          <li>
            Forsøk å slukke brannen (benytt utplassert brannvernsutstyr ved
            nedgang til bryggene/klubbhus).
          </li>
          <li>Varsle andre som kan være i fare.</li>
          <li>Forsøk å begrense fare for spredning av brannen.</li>
          <li>Tilkall brannvesen.</li>
        </ul>

        <h3>Ved miljøforurensning / oljesøl. Akutte tiltak</h3>
        <ul class="plan-list">
          <li>Begrense omfanget av søl etter beste evne.</li>
          <li>
            Om mulig benytt oljeoppsamlings sand som står lagret ved miljøboden
            i havnen.
          </li>
          <li>Ved større hendelser kontakt politi eller brannvesen.</li>
          <li>Ved fare for liv og helse kontakt ambulanse.</li>
        </ul>

        <p>
          <strong>Alle miljøhendelser skal rapporteres til havnesjefen!</strong>
        </p>

        <h3>Symbolforklaring – områdeoversikt</h3>
        <div class="symbol-grid">
          <div class="symbol-item">Brannslukningsapparat</div>
          <div class="symbol-item">Oljevernberedskap</div>
          <div class="symbol-item">Informasjonstavle</div>
          <div class="symbol-item">Redningsbøye</div>
        </div>

        <a
          class="download-button"
          href="/beredskapsplan-mosjoen-baatforening.pdf"
          aria-label="Last ned beredskapsplan som PDF"
          download
          >Last ned beredskapsplan</a
        >
      </article>
    </section>`;
  }
}
@customElement("avfallshandtering-page")
export class AvfallshandteringPage extends LitElement {
  public static styles = [
    pageStyles,
    css`
      .waste-layout {
        display: grid;
        gap: 20px;
      }
      .side-image {
        display: none;
      }
      .waste-image {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        min-height: 220px;
      }
      .waste-list {
        margin: 0;
        padding-left: 20px;
        line-height: 1.7;
      }
      .section-title {
        margin-bottom: 8px;
      }
      .note-box {
        margin-top: 16px;
        background: #f1f5f9;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        padding: 12px 14px;
      }
      @media (min-width: 950px) {
        .waste-layout {
          grid-template-columns:
            minmax(180px, 0.8fr) minmax(460px, 1.6fr)
            minmax(180px, 0.8fr);
          align-items: start;
        }
        .side-image {
          display: block;
        }
      }
    `,
  ];
  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">Avfallshåndtering</h1>
      <div class="waste-layout">
        <aside class="side-image" aria-hidden="true">
          <img class="waste-image" src="/images/søppelforklaring.jpg" alt="" />
        </aside>

        <article class="content-card">
          <h2>
            Avfallshåndteringsplan for: Mosjøen Båtforening – Pålgarden marina
          </h2>

          <h3 class="section-title">Bakgrunn</h3>
          <p>
            Denne avfallsplanen kommer i tillegg til det generelle
            havnereglementet. Hensikten er å sikre at foreningen og foreningens
            medlemmer er kjent med hvordan man håndterer avfall på en god og
            sikker måte og i henhold til gjeldende lovgivning og forskrifter.
          </p>

          <h3 class="section-title">Ansvarlig</h3>
          <p>
            Ansvar for revidering og oppdatering av denne planen påhviler det
            til enhver tid det sittende styre i MBF ved styrets ledere.
          </p>

          <h3 class="section-title">Behov</h3>
          <p>
            MBF er en båtforening for beboerne i Vefsn-regionen. For tiden har
            båtforeningen 196 båtplasser fordelt på 5 flytebrygger. Båtene
            ligger ved faste plasser, i tillegg har vi en gjestebrygge for
            besøkende.
          </p>

          <h3 class="section-title">Håndtering av avfall</h3>
          <p>
            Båtforeningens miljøbod er utstyrt med et system for kildesortering.
            Systemet ivaretas av styrets 1. varamann. Foreningen har i dag
            avtale med NordMiljø som sørger for tømming.
          </p>

          <h3 class="section-title">Spesialavfall</h3>
          <p>
            Ved sliping av maling / bunnstoff på MBF sin opplagsplass er båteier
            pliktig til å legge ut presenning for å forhindre forurensing av
            området. Det oppsamlede stoffet samles i miljøstasjonen på anvist
            plass.
          </p>

          <h3 class="section-title">Septikktømming</h3>
          <p>
            Det er ikke tillatt å pumpe ut septikk i havnebassenget, foreningen
            har ikke per dato mottaksanlegg på land.
          </p>

          <h3 class="section-title">SHMIL</h3>
          <p>
            SHMIL har satt ut dunker til fritidsrenovasjon. Her kan man levere
            avfall, dunkene er plassert rett over vegen ved foreningens
            klubbhus.
          </p>

          <p class="note-box">
            <strong>SHMIL = Søndre Helgeland Miljøverk IKS</strong>
          </p>
        </article>

        <aside class="side-image" aria-hidden="true">
          <img class="waste-image" src="/images/kildesortering.jpg" alt="" />
        </aside>
      </div>
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
