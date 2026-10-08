import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/locales";
import { Header } from "./header";
import { Brand } from "./brand";
import { Arrow } from "./icons";
import { Artwork } from "./artwork";
import { LessonaraPreview } from "./lessonara-preview";
import { Reveal } from "./reveal";
import { site, products } from "@/lib/site";

export function StudioPage({ locale, d }: { locale: Locale; d: Dictionary }) {
  return (
    <>
      <a className="skip-link" href="#main">
        {d.access.skip}
      </a>
      <Header locale={locale} nav={d.nav} access={d.access} />
      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-eyebrow">
              <span>{d.hero.label}</span>
              <span>MOSAIC LABS / {new Date().getFullYear()}</span>
            </div>
            <div className="hero-stage">
              <div className="hero-copy">
                <h1 id="hero-heading">
                  <span>{d.hero.first}</span>
                  <span>{d.hero.second}</span>
                </h1>
                <div className="hero-details">
                  <p>{d.hero.description}</p>
                  <a className="hero-cta" href="#products">
                    {d.hero.cta}
                    <Arrow diagonal />
                  </a>
                </div>
              </div>
              <Artwork caption={d.hero.caption} />
            </div>
            <div className="hero-bottom">
              <span>{d.hero.note}</span>
              <a href="#products">
                {d.hero.scroll}
                <span>↓</span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="products-section container section"
          aria-labelledby="products-heading"
        >
          <div className="section-heading" data-reveal>
            <div className="section-label">
              <span>01</span>
              {d.products.label}
            </div>
            <div className="section-heading-main">
              <h2 id="products-heading">{d.products.heading}</h2>
              <p>{d.products.note}</p>
            </div>
          </div>
          {products.map((product, index) => {
            const copy = (
              d.products.catalog as Record<
                string,
                typeof d.products.catalog.lessonara
              >
            )[product.slug];
            if (!copy)
              throw new Error(
                `Missing ${locale} copy for product ${product.slug}`,
              );
            return (
              <article className="product-card" key={product.slug} data-reveal>
                <div className="product-information">
                  <div className="product-topline">
                    <span>
                      {String(index + 1).padStart(2, "0")} / {copy.category}
                    </span>
                    <span className="product-status">
                      <i />
                      {copy.status}
                    </span>
                  </div>
                  <div className="product-description">
                    <h3>{product.name}</h3>
                    <h4>{copy.tagline}</h4>
                    <p>{copy.description}</p>
                    <div className="feature-tags">
                      {copy.features.map((feature, index) => (
                        <span key={feature}>
                          <span className="feature-number">0{index + 1}</span>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      className="product-link"
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.cta}
                      <Arrow diagonal />
                      <span className="sr-only"> ({d.access.newTab})</span>
                    </a>
                  </div>
                </div>
                {product.slug === "lessonara" ? (
                  <LessonaraPreview text={d.preview} concept={copy.concept} />
                ) : (
                  <div className="future-product-visual">
                    <img
                      src="/brand/icon.svg"
                      width="200"
                      height="200"
                      alt=""
                    />
                    <span>{product.name}</span>
                  </div>
                )}
              </article>
            );
          })}
          <div className="products-afterword">
            <span>{d.products.next}</span>
            <div className="color-track" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="about-section section"
          aria-labelledby="about-heading"
        >
          <div className="container about-grid" data-reveal>
            <div>
              <div className="section-label">
                <span>02</span>
                {d.studio.label}
              </div>
              <h2 id="about-heading">{d.studio.heading}</h2>
              <div className="studio-signoff">
                <img src="/brand/icon.svg" alt="" width="44" height="44" />
                <span>{d.footer.tagline}</span>
              </div>
            </div>
            <div className="about-text">
              <p className="about-intro">{d.studio.intro}</p>
              <p>{d.studio.body}</p>
              <p>{d.studio.ending}</p>
            </div>
          </div>
        </section>
        <section
          id="philosophy"
          className="philosophy-section section container"
          aria-labelledby="philosophy-heading"
        >
          <div className="philosophy-grid">
            <div className="philosophy-intro" data-reveal>
              <div className="section-label">
                <span>03</span>
                {d.principles.label}
              </div>
              <h2 id="philosophy-heading">{d.principles.heading}</h2>
              <p>{d.principles.note}</p>
            </div>
            <div className="principles">
              {d.principles.items.map((principle, index) => (
                <details
                  className={`principle principle-${index}`}
                  key={principle.title}
                  open={index === 0}
                  data-reveal
                >
                  <summary>
                    <span className="principle-number">0{index + 1}</span>
                    <h3>{principle.title}</h3>
                    <span className="principle-plus" aria-hidden="true" />
                  </summary>
                  <div className="principle-body">
                    <p>{principle.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="section-label">
              <span>04</span>
              {d.contact.label}
            </div>
            <div className="contact-grid" data-reveal>
              <h2 id="contact-heading">{d.contact.heading}</h2>
              <div>
                <p>{d.contact.text}</p>
                <a className="contact-cta" href={`mailto:${site.email}`}>
                  {d.contact.cta}
                  <Arrow diagonal />
                </a>
              </div>
            </div>
            <a className="email-link" href={`mailto:${site.email}`}>
              {site.email}
              <Arrow diagonal />
            </a>
            <footer className="site-footer">
              <div className="footer-top">
                <Brand footer label={d.access.home} />
                <span>{d.footer.independent}</span>
                <a href="#top">
                  {d.footer.top}
                  <span>↑</span>
                </a>
              </div>
              <div className="footer-bottom">
                <span>
                  © {new Date().getFullYear()} Mosaic Labs.{" "}
                  {d.footer.copyright}
                </span>
                <span className="footer-palette" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </footer>
          </div>
        </section>
      </main>
      <Reveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            logo: `${site.url}/brand/icon.svg`,
            description: d.meta.description,
            slogan: site.tagline,
          }),
        }}
      />
    </>
  );
}
