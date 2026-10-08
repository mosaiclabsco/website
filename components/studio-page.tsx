import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/locales";
import { Header } from "./header";
import { Brand } from "./brand";
import { Arrow } from "./icons";
import { Artwork } from "./artwork";
import { LessonaraBrand } from "./lessonara-brand";
import { LessonaraShowcase } from "./lessonara-showcase";
import { MosaicPiece } from "./mosaic-piece";
import { MagneticLink } from "./magnetic-link";
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
        <section
          id="top"
          className="hero container"
          aria-labelledby="hero-heading"
        >
          <div className="hero-stage">
            <div className="hero-copy">
              <p className="hero-eyebrow">{d.hero.label}</p>
              <h1 id="hero-heading">
                <span>{d.hero.first}</span>
                <span>{d.hero.second}</span>
              </h1>
              <p className="hero-description">{d.hero.description}</p>
              <MagneticLink href="#products">{d.nav.products}</MagneticLink>
            </div>
            <Artwork />
          </div>
        </section>
        <section
          id="products"
          className="products-section container"
          aria-labelledby="products-heading"
        >
          <div className="products-heading" data-reveal>
            <h2 id="products-heading">{d.products.heading}</h2>
          </div>
          {products.map((product) => {
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
              <article className="product-composition" key={product.slug}>
                <div className="product-information" data-reveal>
                  <p className="product-status">{copy.status}</p>
                  <h3>
                    {product.slug === "lessonara" ? (
                      <LessonaraBrand />
                    ) : (
                      product.name
                    )}
                  </h3>
                  <h4>{copy.tagline}</h4>
                  <p className="product-description">{copy.description}</p>
                  <div className="product-features">
                    {copy.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <MagneticLink href={product.href} external>
                    {copy.cta}
                    <span className="sr-only"> ({d.access.newTab})</span>
                  </MagneticLink>
                </div>
                {product.slug === "lessonara" ? (
                  <LessonaraShowcase text={d.preview} concept={copy.concept} />
                ) : (
                  <div className="product-photo">
                    <img
                      src="/brand/icon.svg"
                      width={256}
                      height={256}
                      alt=""
                    />
                  </div>
                )}
              </article>
            );
          })}
        </section>
        <section
          id="about"
          className="about-section container"
          aria-labelledby="about-heading"
        >
          <div className="about-heading" data-reveal>
            <h2 id="about-heading">{d.studio.heading}</h2>
          </div>
          <div className="about-body" data-reveal>
            <p className="about-intro">{d.studio.intro}</p>
            <p>{d.studio.body}</p>
            <p>{d.studio.ending}</p>
            <div className="studio-signoff">
              <img src="/brand/icon.svg" width={36} height={36} alt="" />
              <span>{d.footer.tagline}</span>
            </div>
          </div>
        </section>
        <section
          id="philosophy"
          className="philosophy-section container"
          aria-labelledby="philosophy-heading"
        >
          <h2 id="philosophy-heading" data-reveal>
            {d.principles.heading}
          </h2>
          <div className="principles">
            {d.principles.items.map((principle, index) => (
              <article className="principle" key={principle.title} data-reveal>
                <div className="principle-symbol-row">
                  <span className="principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <MosaicPiece index={index} />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="contact-section container"
          aria-labelledby="contact-heading"
        >
          <div className="contact-copy" data-reveal>
            <h2 id="contact-heading">{d.contact.heading}</h2>
            <p>{d.contact.text}</p>
          </div>
          <a
            className="contact-email"
            href={`mailto:${site.email}`}
            aria-label={`${d.nav.contact}: ${site.email}`}
          >
            <span>{site.email}</span>
            <Arrow diagonal />
          </a>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <Brand footer label={d.access.home} />
          <span>{d.footer.independent}</span>
          <a className="back-top" href="#top">
            {d.footer.top}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Mosaic Labs. {d.footer.copyright}
          </span>
          <div className="footer-colors" aria-hidden="true">
            {[0, 1, 2, 3].map((index) => (
              <MosaicPiece index={index} key={index} />
            ))}
          </div>
        </div>
      </footer>
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
