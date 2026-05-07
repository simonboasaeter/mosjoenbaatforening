import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-footer")
export class SiteFooter extends LitElement {
  public static styles = css`
    :host {
      display: block;
      background:
        radial-gradient(
          circle at 18% 24%,
          rgba(14, 165, 233, 0.12),
          transparent 320px
        ),
        linear-gradient(135deg, #06223a 0%, #031525 100%);
      color: white;
    }

    .site-footer {
      max-width: 1440px;
      margin: 0 auto;
      padding: 48px;
      display: grid;
      grid-template-columns: 1.1fr 1.1fr 0.8fr 2fr 0.8fr;
      gap: 48px;
      align-items: start;
    }

    .brand {
      display: grid;
      gap: 20px;
    }

    .brand-row {
      display: flex;
      align-items: center;
      gap: 14px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      font-weight: 800;
      line-height: 1.05;
    }

    .brand-logo {
      width: 58px;
      height: 58px;
      border-radius: 999px;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.85);
    }

    .brand-name {
      font-size: 20px;
    }

    .brand-subtitle {
      font-size: 15px;
      font-weight: 600;
    }

    .brand-description {
      margin: 0;
      max-width: 230px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 18px;
      line-height: 1.5;
    }

    .accent-line {
      width: 36px;
      height: 3px;
      background: #dc2626;
    }

    h2 {
      margin: 0 0 18px;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    address {
      display: grid;
      gap: 12px;
      color: rgba(255, 255, 255, 0.86);
      font-style: normal;
      font-size: 14px;
      line-height: 1.5;
    }

    .footer-links {
      display: grid;
      gap: 12px;
    }

    a {
      color: rgba(255, 255, 255, 0.86);
      text-decoration: none;
      font-size: 14px;
    }

    a:hover {
      color: white;
    }

    .map-card {
      overflow: hidden;
      border-radius: 18px;
      border: 2px solid rgba(255, 255, 255, 0.72);
      min-height: 210px;
      background: rgba(255, 255, 255, 0.08);
    }

    .map-card img {
      display: block;
      width: 100%;
      height: 230px;
      object-fit: cover;
    }

    .map-card iframe {
      width: 100%;
      min-height: 230px;
      border: 0;
    }

    .social-links {
      display: flex;
      gap: 14px;
      margin-bottom: 44px;
    }

    .social-link {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: white;
      color: #082f49;
      display: grid;
      place-items: center;
      font-weight: 900;
    }

    .copyright {
      margin: 0;
      color: rgba(255, 255, 255, 0.66);
      font-size: 13px;
      line-height: 1.6;
    }

    @media (max-width: 1180px) {
      .site-footer {
        grid-template-columns: 1fr 1fr;
      }

      .map-card {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 720px) {
      .site-footer {
        grid-template-columns: 1fr;
        padding: 40px 24px;
      }

      .map-card {
        grid-column: auto;
      }
    }
  `;

  public render() {
    return html`
      <footer id="kontakt" class="site-footer">
        <section class="brand" aria-label="Mosjøen Båtforening">
          <div class="brand-row">
            <img
              class="brand-logo"
              src="/images/logo.jpg"
              alt="Mosjøen Båtforening logo"
            />
            <span>
              <span class="brand-name">Mosjøen</span><br />
              <span class="brand-subtitle">Båtforening</span>
            </span>
          </div>

          <p class="brand-description">Et godt fellesskap for båtfolk</p>
          <span class="accent-line" aria-hidden="true"></span>
        </section>

        <section>
          <h2>Sentralt plassert</h2>
          <address>
            <span>Mosjøen Båtforening<br />Ørbradden 10, 8663 Mosjøen</span>
            <span>2 min fra Mosjøen sentrum<br />Gratis parkering</span>
            <span>+47 902 60 515</span>
            <span>post@mosjoenbf.no</span>
          </address>
        </section>

        <section>
          <h2>Hurtiglenker</h2>
          <nav class="footer-links" aria-label="Hurtiglenker">
            <a href="/">Hjem</a>
            <a href="/organisering/kontaktpersoner">Kontaktpersoner</a>
            <a href="/organisering/vedtekter">Vedtekter</a>
            <a href="/reglement/hms-plan">HMS plan</a>
            <a href="/organisering/kontaktpersoner">Kontakt</a>
          </nav>
        </section>

        <figure class="map-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1632.1040360421778!2d13.193770700000002!3d65.85374519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46745a71368fc4cf%3A0x4f6c7ac7abad6dc4!2sMosjoen%20small%20boat%20marina!5e0!3m2!1sen!2sno!4v1778073269583!5m2!1sen!2sno"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>

        <section>
          <h2>Følg oss</h2>
          <div class="social-links">
            <a
              class="social-link"
              href="https://www.facebook.com/profile.php?id=100064471488887"
              aria-label="Facebook"
              >f</a
            >
          </div>

          <p class="copyright">
            © 2026 Mosjøen Båtforening<br />
            Alle rettigheter reservert.
          </p>
        </section>
      </footer>
    `;
  }
}
