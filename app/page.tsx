import { Header } from "@/components/header";
import { Brand } from "@/components/brand";
import { Arrow } from "@/components/icons";
import { LessonaraPreview } from "@/components/lessonara-preview";
import { Reveal } from "@/components/reveal";
import { products, site } from "@/lib/site";

const principles = [
  { number: "01", title: "Build with purpose.", text: "Start with a real need. Make thoughtful decisions. Give every product a reason to exist.", color: "blue" },
  { number: "02", title: "Keep it simple.", text: "Find the essential. Remove the friction. Good software should make life feel a little easier.", color: "coral" },
  { number: "03", title: "Experiment & iterate.", text: "Stay curious. Try something new. Listen, learn, and make the next version better.", color: "yellow" },
  { number: "04", title: "Make it matter.", text: "Build things that are useful beyond their first impression. Small details. Lasting value.", color: "teal" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section id="top" className="hero container" aria-labelledby="hero-heading">
          <div className="hero-eyebrow"><span className="status-dot" />Independent software & product studio</div>
          <div className="hero-grid">
            <div className="hero-copy"><h1 id="hero-heading">Different ideas.<br />One bigger<br /><span className="picture-word">picture.<svg viewBox="0 0 450 20" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M4 13C113 1 280 1 445 10" stroke="currentColor" strokeWidth="7" strokeLinecap="round" /></svg></span></h1><p>We build thoughtful digital products, turning independent ideas into meaningful experiences.</p><a className="button button-dark" href="#products">Explore our products<Arrow /></a></div>
            <div className="hero-art" aria-hidden="true"><span className="art-label art-label-top">A collection of possibilities.</span><div className="art-canvas"><div className="art-grid" /><span className="registration-mark mark-tl">+</span><span className="registration-mark mark-tr">+</span><span className="registration-mark mark-bl">+</span><span className="registration-mark mark-br">+</span><img className="hero-symbol" src="/brand/icon.svg" alt="" width="400" height="400" /><span className="art-note note-top">Ideas,</span><span className="art-note note-bottom">coming together.</span></div><div className="art-footer"><span>Four pieces. Endless possibilities.</span><span className="color-chips"><i /><i /><i /><i /></span></div></div>
          </div>
          <div className="hero-bottom"><span>Small beginnings. Thoughtful ambitions.</span><a href="#about">Meet the studio <span>↓</span></a></div>
        </section>

        <section id="about" className="about-section section" aria-labelledby="about-heading">
          <div className="container about-grid" data-reveal><div className="section-label"><span className="tiny-square blue" />01 / THE STUDIO</div><div><h2 id="about-heading">Different pieces.<br />Shared possibilities.</h2><div className="about-text"><p>A mosaic starts with individual pieces. Each one different. Each one with something to add.</p><p>That’s how we think about software. Mosaic Labs is an independent studio creating a growing collection of digital products — connected by curiosity, care, and the belief that useful things are worth building.</p><p>We’re starting small, exploring openly, and giving each idea the space to become something meaningful.</p></div><div className="studio-signoff"><img src="/brand/icon.svg" alt="" width="30" height="30" /><span>Build Ideas Together.</span></div></div></div>
        </section>

        <section id="products" className="products-section section container" aria-labelledby="products-heading">
          <div className="section-heading" data-reveal><div><div className="section-label"><span className="tiny-square coral" />02 / OUR PRODUCTS</div><h2 id="products-heading">Ideas taking shape.</h2></div><p>Independent products.<br />One shared attention to detail.</p></div>
          {products.map((product, index) => <article className="product-card" key={product.slug} data-reveal><div className="product-information"><div className="product-topline"><span className="product-index">{String(index + 1).padStart(2, "0")} /</span><span className="product-status"><i />{product.status}</span></div><div className="product-description"><span className="product-category">{product.category}</span><h3>{product.name}<span>↗</span></h3><h4>{product.tagline}</h4><p>{product.description}</p><div className="feature-tags">{product.features.map((feature) => <span key={feature}>{feature}</span>)}</div><a className="product-link" href={product.href} target="_blank" rel="noopener noreferrer">Discover {product.name}<Arrow diagonal /><span className="sr-only"> (opens in a new tab)</span></a></div><span className="product-footnote">The first piece of a bigger picture.</span></div><LessonaraPreview /></article>)}
          <div className="products-afterword"><span className="small-spark">✳</span><p>Every good collection starts with one.<br /><span>More ideas are finding their shape.</span></p></div>
        </section>

        <section id="philosophy" className="philosophy-section section" aria-labelledby="philosophy-heading"><div className="container"><div className="section-heading" data-reveal><div><div className="section-label"><span className="tiny-square yellow" />03 / OUR APPROACH</div><h2 id="philosophy-heading">The way we build.</h2></div><p>A few simple principles.<br />In everything we make.</p></div><div className="principles">{principles.map((principle) => <article className="principle" key={principle.number} data-reveal><div className="principle-top"><span>{principle.number}</span><span className={`principle-mark ${principle.color}`} aria-hidden="true" /></div><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>

        <section id="contact" className="contact-section container section" aria-labelledby="contact-heading"><div className="contact-panel" data-reveal><div className="section-label"><span className="tiny-square teal" />04 / SAY HELLO</div><div className="contact-grid"><div><h2 id="contact-heading">Good things start<br />with a conversation<span>.</span></h2><p>An idea, a question, or just a hello.<br />We’d love to hear from you.</p></div><a className="contact-arrow" href={`mailto:${site.email}`} aria-label={`Email Mosaic Labs at ${site.email}`}><Arrow diagonal /></a></div><a className="email-link" href={`mailto:${site.email}`}>{site.email}<Arrow diagonal /></a></div></section>
      </main>
      <footer className="site-footer container"><div className="footer-top"><Brand footer /><span>{site.tagline}</span><a href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mosaic Labs</span><span>Independent by design. Thoughtful by nature.</span><span className="footer-palette" aria-hidden="true"><i /><i /><i /><i /></span></div></footer>
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, logo: `${site.url}/brand/icon.svg`, description: site.description, slogan: site.tagline }) }} />
    </>
  );
}
