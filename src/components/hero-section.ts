import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hero-section")
export class HeroSection extends LitElement {
  public static styles = css`
    :host {
      display: block;
    }

    .hero-section {
      position: relative;
      min-height: 560px;
      display: grid;
      align-items: center;
      overflow: hidden;
      isolation: isolate;
    }

    .hero-section::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -2;
      background: url("./images/hero.jpg") center / cover no-repeat;
    }

    .hero-section::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        linear-gradient(
          90deg,
          rgba(3, 29, 54, 0.92) 0%,
          rgba(3, 29, 54, 0.72) 32%,
          rgba(3, 29, 54, 0.18) 72%
        ),
        linear-gradient(0deg, rgba(3, 29, 54, 0.28), rgba(3, 29, 54, 0.28));
    }

    .hero-content {
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      padding: 92px 48px 88px;
      box-sizing: border-box;
    }

    .hero-inner {
      max-width: 620px;
    }

    h1 {
      margin: 0;
      color: white;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(48px, 6vw, 82px);
      line-height: 0.98;
      letter-spacing: -0.05em;
      font-weight: 800;
    }

    .hero-lead {
      margin: 24px 0 0;
      color: rgba(255, 255, 255, 0.92);
      font-size: 18px;
      font-weight: 500;
    }

    .hero-lead span {
      color: #ef4444;
      padding: 0 10px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-top: 34px;
    }

    .hero-link {
      min-width: 174px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 24px;
      border-radius: 4px;
      color: white;
      text-decoration: none;
      font-size: 13px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .hero-link-primary {
      background: #dc2626;
      box-shadow: 0 16px 30px rgba(220, 38, 38, 0.25);
    }

    .hero-link-secondary {
      border: 2px solid rgba(255, 255, 255, 0.72);
      background: rgba(255, 255, 255, 0.04);
    }

    @media (max-width: 760px) {
      .hero-section {
        min-height: 620px;
      }

      .hero-content {
        padding: 76px 24px;
      }

      .hero-link {
        width: 100%;
      }
    }
  `;

  public render() {
    return html`
      <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-content">
          <div class="hero-inner">
            <h1 id="hero-title">Mosjøen båtforening</h1>

            <p class="hero-lead">
              198 båtplasser <span>•</span> 300 medlemmer <span>•</span> Moderne
              servicebygg
            </p>

            <div class="hero-actions">
              <a class="hero-link hero-link-primary" href="/organisering/kontaktpersoner">Kontakt oss</a>
              <a class="hero-link hero-link-secondary" href="https://www.havneweb.no/mosjoenbf/?mod=sokplass" target="_blank" rel="noopener noreferrer">Bli medlem</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
