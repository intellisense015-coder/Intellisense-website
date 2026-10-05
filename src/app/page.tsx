import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-visual";
import { ProductShowcase } from "@/components/product-showcase";
import { company, capabilities, clients, industries, deliverySteps, proofPoints } from "@/lib/content";

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: company.name, "@id": `${company.domain}/#organization`,
  url: company.domain, logo: `${company.domain}/images/intellisense-mark.png`, email: company.email,
  telephone: company.phoneDisplay, sameAs: [company.instagram, company.linkedIn],
  description: "IntelliSense Cloud builds intelligent software, AI automations, and connected business systems.",
};
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: company.name, url: company.domain, publisher: { "@id": `${company.domain}/#organization` } };
const softwareSchema = {
  "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AutoBiz", applicationCategory: "BusinessApplication",
  operatingSystem: "Web", url: `${company.domain}/products/autobiz`,
  description: "An AI-enabled business workspace for connected workflows, automation, and business insights.", offers: { "@type": "Offer", availability: "https://schema.org/OnlineOnly" },
};
function SectionIntro({ title, text }: { title: string; text: string }) {
  return <div className="section-intro"><h2>{title}</h2><p>{text}</p></div>;
}
function ClientCarousel() {
  return <section className="client-strip section-shell" aria-label="Trusted client organizations"><div className="client-strip-heading"><h2>Trusted by teams across industries</h2></div><div className="client-marquee"><div className="client-marquee-track">{[...clients, ...clients].map((client, index) => <div className={`client-logo client-${client.slug} glass-surface`} key={`${client.name}-${index}`} aria-hidden={index >= clients.length}><Image src={client.image} alt={index >= clients.length ? "" : client.name} width={400} height={350} /></div>)}</div></div></section>;
}
function SocialIcon({ kind }: { kind: "linkedin" | "instagram" }) {
  return kind === "linkedin" ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.4H2.1V22h3.1V8.4ZM3.65 2A1.82 1.82 0 1 0 3.7 5.64 1.82 1.82 0 0 0 3.65 2ZM22 13.9c0-4.1-2.2-6-5.2-6a4.5 4.5 0 0 0-4 2.2V8.4H9.7V22h3.1v-6.7c0-1.8.34-3.55 2.58-3.55 2.2 0 2.22 2.06 2.22 3.67V22H22v-8.1Z"/></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6.4" r=".8" className="social-fill"/></svg>;
}
export default function HomePage() {
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    <HeroScene />
    <ClientCarousel />

    <section className="capabilities-section section-shell section-pad" id="services">
      <SectionIntro title="Engineering for the next stage of your business." text="From focused product builds to connected enterprise systems, bring your next idea to a team that understands both the technology and the work around it." />
      <div className="capability-grid">{capabilities.map((item, i) => <article className="capability-card glass-surface" key={item.slug}>
        <div className="capability-top"><span className="capability-number">0{i + 1}</span><span className="capability-icon" aria-hidden="true">{item.icon}</span></div><h3>{item.title}</h3><p>{item.description}</p><a href={`/services/${item.slug}`} aria-label={`Explore ${item.title}`}>Explore capability</a>
      </article>)}</div>
    </section> 
    <section className="products-section section-pad" id="products"><div className="section-shell"><SectionIntro title="Purpose-built products for real operating needs." text="Explore IntelliSense Cloud products designed to bring routine work, business information, and decision-making into a more connected view." /><ProductShowcase /></div></section>

    <section className="industries-section section-shell section-pad" id="industries"><SectionIntro title="Industry context. Practical software." text="Every industry has its own workflows, constraints, and opportunities. We shape digital systems around the way each business needs to operate." />
      <div className="industry-grid">{industries.map((item, i) => <article className={`industry-card industry-${item.visual}`} key={item.label}>
        <div className="industry-image"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 92vw, 32vw" loading="lazy"/><span className="industry-image-wash"/></div><div className="industry-content"><span className="industry-number">0{i + 1}</span><h3>{item.label}</h3><p>{item.description}</p><div className="industry-outcome"><b>Outcome</b><span>{item.outcome}</span></div></div>
      </article>)}</div>
    </section>

    <section className="leadership-section section-pad" id="leadership"><div className="section-shell">
      <SectionIntro title="Technology should make business more capable." text="We started IntelliSense Cloud to help ambitious teams solve meaningful problems with thoughtful engineering, dependable systems, and a clear view of what comes next." />
      <div className="founder-story-grid"><article className="founder-card" tabIndex={0}><div className="founder-half founder-half-sohaib"><Image src="/images/founders/founders-pair.png" alt="Sohaib Asgher, Founder and CEO of IntelliSense Cloud" fill unoptimized sizes="(max-width: 760px) 92vw, 45vw"/></div><div className="founder-card-content"><div className="founder-card-heading"><span>Founder & CEO</span><h3>Sohaib Asgher</h3></div><div className="founder-card-message"><p>Businesses do important work through systems that are often disconnected, repetitive, or harder to use than they should be. We started IntelliSense Cloud to make that work easier to understand and improve.</p><p>Our approach begins by listening to the people closest to the problem. We look for the process behind the request, the constraints behind the system, and the outcome that would make a meaningful difference.</p><p>Then we bring software engineering, practical AI, and product thinking together to build tools around real operating needs. The technology should make work clearer, more reliable, and easier to grow.</p><p>We want to be a thoughtful long-term partner to teams navigating change: helping them take a confident first step, learn from what they build, and keep moving forward with purpose.</p></div></div></article><article className="founder-card" tabIndex={0}><div className="founder-half founder-half-minaal"><Image src="/images/founders/founders-pair.png" alt="Minaal Rizwan, Co-Founder of IntelliSense Cloud" fill unoptimized sizes="(max-width: 760px) 92vw, 45vw"/></div><div className="founder-card-content"><div className="founder-card-heading"><span>Co-Founder</span><h3>Minaal Rizwan</h3></div><div className="founder-card-message"><p>We believe technology should make complex work feel more manageable. Minaal’s co-founder vision brings product thinking and close client partnership together, helping teams turn good ideas into useful tools and lasting progress.</p></div></div></article></div>
    </div></section>

    <section className="delivery-section section-shell section-pad" id="approach"><SectionIntro title="From first question to lasting progress." text="A clear delivery path helps teams make informed decisions, build with confidence, and keep improving after launch." />
      <ol className="delivery-steps">{deliverySteps.map((step) => <li className="delivery-step glass-surface" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><span className="step-connector" aria-hidden="true"/></li>)}</ol>
      <div className="engagement-models"><h3>Flexible ways to work together.</h3><div className="engagement-grid"><article className="engagement-card glass-surface"><h3>Project-based</h3><p>A focused team for a defined product, system, or workflow with clear milestones.</p></article><article className="engagement-card glass-surface"><h3>Dedicated teams</h3><p>A consistent cross-functional team to build and improve your product over time.</p></article><article className="engagement-card glass-surface"><h3>Staff augmentation</h3><p>Bring in engineering and product expertise to extend your existing team.</p></article></div></div>
    </section>

    <section className="proof-section section-pad"><div className="section-shell"><SectionIntro title="Built for dependable business outcomes." text="Clear measures matter. These delivery commitments describe the standards we work toward across each engagement." /><div className="proof-grid">{proofPoints.map((item) => <article className="proof-card glass-surface" key={item.title}><span className="proof-value">{item.value}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>

    <section className="contact-section section-shell section-pad" id="contact"><div className="contact-panel glass-surface"><div className="contact-copy"><h2>Let’s Talk What’s Next</h2><p>Tell us what you want to build, improve, or automate. We’ll help you shape a clear first step and connect you with the right people to move it forward.</p><div className="contact-direct"><span>Prefer email?</span><a href={`mailto:${company.email}`}>{company.email}</a></div></div><ContactForm /></div></section>

    <footer className="site-footer"><div className="section-shell footer-main"><div className="footer-brand"><Link className="brand" href="/#top" aria-label="IntelliSense Cloud home"><span className="footer-mark-wrap"><Image src="/images/intellisense-mark.png" width={55} height={59} alt=""/></span><span>IntelliSense Cloud</span></Link><p>Build smarter. Automate faster.<br/>Scale with intelligence.</p><a className="footer-email" href={`mailto:${company.email}`}>{company.email}</a><a className="footer-phone" href={`tel:${company.phone}`}>{company.phoneDisplay}</a></div><div className="footer-nav"><div><b>Explore</b><Link href="/#products">Products</Link><Link href="/#services">Services</Link><Link href="/#industries">Industries</Link></div><div><b>Company</b><Link href="/#leadership">Leadership</Link><Link href="/#approach">How we work</Link><Link href="/#contact">Contact</Link></div><div><b>Connect</b><a href={company.linkedIn} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin"/>LinkedIn</a><a href={company.instagram} target="_blank" rel="noopener noreferrer"><SocialIcon kind="instagram"/>Instagram</a><Link href="/privacy">Privacy</Link></div></div></div><div className="section-shell footer-bottom"><span>© 2026 IntelliSense Cloud. All rights reserved.</span></div></footer>
  </main>;
}
