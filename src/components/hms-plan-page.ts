import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hms-plan-page")
export class HmsPlanPage extends LitElement {
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

    .lead-text,
    p,
    li {
      color: #334155;
      line-height: 1.7;
    }

    .content-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
    }

    h2 {
      margin: 0 0 12px;
      color: #0f172a;
    }

    h3 {
      margin: 24px 0 10px;
      color: #0f172a;
      font-size: 1.05rem;
    }

    ul {
      margin: 0;
      padding-left: 20px;
    }

    .download-button {
      display: inline-block;
      margin: 6px 0 24px;
      background: #0c4a6e;
      color: #fff;
      text-decoration: none;
      padding: 12px 18px;
      border-radius: 8px;
      font-weight: 700;
    }
  `;

  public render() {
    return html`<section class="page-section">
      <h1 class="page-title">HMS plan</h1>
      <p class="lead-text">
        Nåværende HMS plan kan du se nedenfor. Eller laste den ned som PDF
      </p>
      <a
        class="download-button"
        href="/pdf/hms-plan2018.pdf"
        download
        aria-label="Last ned HMS plan som PDF"
        >Last ned HMS plan (PDF)</a
      >

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

        <h3>Revisjoner</h3>
        <p>
          Det skal gjøres jevnlige revisjoner av beredskapen for å sjekke at den
          har et hensiktsmessig og tilstrekkelig innhold, herunder
          beredskapsutstyr og ev. HMS sjekkliste og at den er tilfredsstillende
          iverksatt.
        </p>

        <h3>Overvåking og registrering</h3>
        <p>
          Rapporter fra medlemmer, vernerunder, kartlegginger, revisjoner og
          ulykker skal tas opp som et fast punkt i styremøter. Tiltak og
          rapporter dokumenteres i form av møtereferat.
        </p>

        <h3>Håndtering av beredskapshendelser</h3>
        <p>
          Håndtering av beredskapshendelser er beskrevet i foreningens til
          enhver tid gjeldende Beredskapsplan Mosjøen, september 2012
        </p>

        <h3>Sikkerhetsutstyr</h3>
        <p>
          Styret har ansvaret for at nødvendig sikkerhetsutstyr til enhver tid
          er tilgjengelig i havneområdet. Den til enhver tid sittende havnesjef
          har ansvaret for oppsyn av sikkerhetsutstyret.
        </p>

        <h3>Redningsbåt</h3>
        <p>
          Foreningen har utplassert en båt som ligger tilgjengelig på brygge 5
          (gjestebrygga). Båten kan benyttes i tilfeller der en båt er nyttig i
          forbindelse med redningsaksjoner eller annet nødvendig støtte fra en
          “arbeidsbåt”. Ved bruk av båten til normalt arbeid i havene skal dette
          skje etter avtale med havnesjefen.
        </p>
        <p>
          I vintersesongen ligger foreningens båt tilgjengelig på bryggen med
          bobleanlegg for å kunne benyttes som redningsbåt i tilfelle personer
          faller igjennom isen.
        </p>

        <h3>Brannvern</h3>
        <p>
          Det er utplassert brannslukkingsapparater ved klubbhus i havnen og ved
          nedgang til alle bryggene. Det henvises forøvrig til bruk av
          vannslanger på bryggene eller på opplagsplass.
        </p>

        <h3>Oljevernberedskap</h3>
        <p>
          Det er utplassert oljeoppsamlingsutstyr ved miljøbod. Det er
          utplassert presenninger til bruker under båter ved slipe/skrape og
          malingsaktiviteter på opplagsplassen for å unngå forurensning av
          grunnen.
        </p>

        <h3>Redningsbøyer</h3>
        <p>
          Det er utplassert redningsbøyer ved utgangen til hver brygge i havnen
          og på oppheng ute på alle MBFs brygger.
        </p>

        <h3>Vinterhavn / bobleanlegg</h3>
        <p>
          Varslingskilt som varsler om bobleanlegg og fare for usikker is skal
          henge ved utgang til hver brygge. Foreningens arbeidsbåt ligger
          tilgjengelig som redningsbåt på brygge 5, i tilfelle behov for å redde
          personer/ utstyr i perioder med is i havnen. De bryggene som ikke er i
          bruk vinterstid vil bli avstengt i hht fortøyningsreglementet.
        </p>

        <h3>Referanser</h3>
        <ul>
          <li>Kjemikalieforssriften.</li>
          <li>
            Forskrift om klassifisering, merking mv. av farlige kjemikalier.
          </li>
          <li>Stoffkartotekforskriften</li>
          <li>Brannvernloven</li>
          <li>Forurensningsloven</li>
          <li>Brannfarlighetsloven</li>
          <li>Eksplosjonsloven</li>
          <li>Lov om tilsyn med elektriske anlegg og elektrisk utstyr</li>
        </ul>
      </article>
    </section>`;
  }
}
