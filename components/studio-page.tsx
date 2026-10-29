import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/locales";
import { markPieces, palette } from "@/lib/mark";
import { products, site } from "@/lib/site";
import { LanguageSelect } from "./language-select";
import { TileWall } from "./tile-wall";
import s from "./studio-page.module.css";

export function StudioPage({ locale, d }: { locale: Locale; d: Dictionary }) {
  const product = products.find((p) => p.slug === "lessonara")!;
  const copy = d.products.catalog.lessonara;
  return (
    <div className={s.root} id="top">
      <a className={s.skip} href="#main">{d.access.skip}</a>
      <header className={s.top}>
        <a href="#top" className={s.brand} aria-label={d.access.home}>
          <img src="/brand/icon-text.png" alt="Mosaic Labs" width="144" height="32" className={s.wordmark} />
          <img src="/brand/icon.svg" alt="Mosaic Labs" width="30" height="30" className={s.symbol} />
        </a>
        <nav aria-label={d.access.open}>
          <a href="#studio">{d.nav.studio}</a>
          <a href="#products">{d.nav.products}</a>
          <a href="#approach">{d.nav.approach}</a>
          <LanguageSelect locale={locale} label={d.nav.language} />
          <a href={`mailto:${site.email}`} className={s.pill}>{d.nav.contact}</a>
        </nav>
      </header>

      <main id="main">
        <section className={s.hero}>
          <div>
            <p className={s.eyebrow}>(00) {d.hero.label}</p>
            <h1>{d.hero.first}<br /><em>{d.hero.second}</em></h1>
            <p className={s.lede}>{d.hero.description}</p>
            <p className={s.hint}>↘ {d.wall.hint}</p>
          </div>
          <TileWall label={d.access.art} copy={d.wall} />
        </section>

        <section id="studio" className={s.studio}>
          <aside className={s.side}>
            <span className={s.num}>01</span>
            <span className={s.label}>{d.studio.label}</span>
            <div className={s.mini} aria-hidden="true">
              {palette.map((c, i) => <i key={c} style={{ background: c, animationDelay: `${i * -1.5}s` }} />)}
            </div>
          </aside>
          <div>
            <h2>{d.studio.heading}</h2>
            <p className={s.statement}>{d.studio.intro}</p>
            <div className={s.two}>
              <p>{d.studio.body}</p>
              <p>{d.studio.ending}</p>
            </div>
          </div>
        </section>

        <section id="products" className={s.products}>
          <div className={s.sectionHead}>
            <span className={s.num}>02</span>
            <h2>{d.products.heading}</h2>
            <p>{d.products.note}</p>
          </div>
          <a className={s.card} href={product.href} target="_blank" rel="noreferrer">
            <div className={s.cardShot}>
              <img src="/images/lessonara-login.png" alt={copy.imageAlt} width="3301" height="1298" />
            </div>
            <div className={s.cardInfo}>
              <span className={s.tag}>{copy.status}</span>
              <h3>{product.name}</h3>
              <p className={s.cardTag}>{copy.tagline}</p>
              <p>{copy.description}</p>
              <ul>{copy.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <span className={s.cta}>{copy.cta} → <span className={s.srOnly}>({d.access.newTab})</span></span>
            </div>
          </a>
          <div className={s.slots}>
            {[2, 3, 4].map((n) => <span key={n} className={s.slot} aria-hidden="true"><i />{`00${n}`}</span>)}
            <p>{d.products.next}</p>
          </div>
        </section>

        <section id="approach" className={s.approach}>
          <div className={s.sectionHead}>
            <span className={s.num}>03</span>
            <h2>{d.principles.heading}</h2>
            <p>{d.principles.note}</p>
          </div>
          <div className={s.principles}>
            {d.principles.items.map((p, i) => (
              <article key={p.title} style={{ background: palette[i], color: i === 2 ? "#0f172a" : "#f8f5ef" }}>
                <span className={s.idx}>0{i + 1}</span>
                <svg viewBox={markPieces[i].box} aria-hidden="true">
                  <path d={markPieces[i].d} fill="currentColor" />
                </svg>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={s.contact}>
          <span className={s.num}>04 — {d.contact.label}</span>
          <h2>{d.contact.heading}</h2>
          <p>{d.contact.text}</p>
          <a href={`mailto:${site.email}`} className={s.mail}>{site.email}</a>
        </section>
      </main>

      <footer className={s.foot}>
        <span>© {new Date().getFullYear()} {site.name}. {d.footer.copyright}</span>
        <span>{d.footer.independent}</span>
        <a href="#top">{d.footer.top} ↑</a>
      </footer>
    </div>
  );
}
