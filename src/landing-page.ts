import { LitElement, css, html, type TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/site-header";
import "./components/hero-section";
import "./components/about-section";
import "./components/site-footer";
import "./components/kontaktpersoner-page";
import "./components/vedtekter-page";
import "./components/informasjon-pages";
import "./components/site-extra-pages";
import "./components/hms-plan-page";
import "./components/fortoyning-page";

type RouteConfig = {
  readonly title: string;
  readonly description: string;
  readonly render: () => TemplateResult;
};

const HOME_ROUTE = "/";
const SITE_URL = "https://mosjoenbf.no";
const DEFAULT_TITLE = "Mosjøen Båtforening";
const DEFAULT_DESCRIPTION =
  "Mosjøen Båtforening tilbyr gjestehavn, båtplasser, informasjon om reglement og kontaktpersoner i Pålgarden marina.";

const ROUTES: Readonly<Record<string, RouteConfig>> = {
  "/organisering/kontaktpersoner": {
    title: "Kontaktpersoner | Mosjøen Båtforening",
    description: "Kontaktpersoner og kontaktinformasjon for Mosjøen Båtforening.",
    render: () => html`<kontaktpersoner-page></kontaktpersoner-page>`,
  },
  "/organisering/vedtekter": {
    title: "Vedtekter | Mosjøen Båtforening",
    description: "Vedtekter for Mosjøen Båtforening i PDF-format.",
    render: () => html`<vedtekter-page></vedtekter-page>`,
  },
  "/informasjon/gjest-i-havna": { title: "Gjest i havna | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<gjest-i-havna-page></gjest-i-havna-page>` },
  "/informasjon/severdigheter": { title: "Severdigheter | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<severdigheter-page></severdigheter-page>` },
  "/informasjon/slipoppsett": { title: "Slipoppsett | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<slipoppsett-page></slipoppsett-page>` },
  "/informasjon/oppstilling-landomrade": { title: "Oppstilling landområde | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<oppstilling-page></oppstilling-page>` },
  "/informasjon/vare-priser": { title: "Våre priser | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<vare-priser-page></vare-priser-page>` },
  "/informasjon/bilder": { title: "Bilder | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<bilder-page></bilder-page>` },
  "/reglement/hms-plan": { title: "HMS-plan | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<hms-plan-page></hms-plan-page>` },
  "/reglement/fortoyning": { title: "Fortøyning | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<fortoyning-page></fortoyning-page>` },
  "/reglement/beredskapsplan": { title: "Beredskapsplan | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<beredskapsplan-page></beredskapsplan-page>` },
  "/reglement/avfallshandtering": { title: "Avfallshåndtering | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<avfallshandtering-page></avfallshandtering-page>` },
  "/linker": { title: "Linker | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<severdigheter-page></severdigheter-page>` },
  "/historie": { title: "Historie | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<historie-page></historie-page>` },
  "/webkamera": { title: "Webkamera | Mosjøen Båtforening", description: DEFAULT_DESCRIPTION, render: () => html`<webkamera-page></webkamera-page>` },
};

@customElement("landing-page")
export class LandingPage extends LitElement {
  public static styles = css`
    :host { display: block; min-height: 100vh; background: #f8fafc; color: #102a43; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  `;

  public connectedCallback(): void {
    super.connectedCallback();
    this.updateMetadata();
  }

  private updateMetadata(): void {
    const route = ROUTES[window.location.pathname];
    const title = route?.title ?? DEFAULT_TITLE;
    const description = route?.description ?? DEFAULT_DESCRIPTION;
    document.title = title;

    const canonical = `${SITE_URL}${window.location.pathname === HOME_ROUTE ? HOME_ROUTE : window.location.pathname}`;
    this.setMetaTag("name", "description", description);
    this.setMetaTag("property", "og:title", title);
    this.setMetaTag("property", "og:description", description);
    this.setMetaTag("property", "og:type", "website");
    this.setMetaTag("property", "og:url", canonical);
    this.setMetaTag("property", "og:image", `${SITE_URL}/images/logo.jpg`);

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonical;
    document.head.append(canonicalLink);
  }

  private setMetaTag(attribute: "name" | "property", key: string, value: string): void {
    const selector = `meta[${attribute}="${key}"]`;
    const metaElement = document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
    metaElement.setAttribute(attribute, key);
    metaElement.content = value;
    document.head.append(metaElement);
  }

  public render(): TemplateResult {
    const route = ROUTES[window.location.pathname];
    return html`<site-header></site-header><main>${route ? route.render() : html`<hero-section></hero-section><about-section></about-section>`}</main><site-footer></site-footer>`;
  }
}
