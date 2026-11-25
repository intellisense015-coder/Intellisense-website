import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { HeroScene } from "@/components/hero-visual";
import { ProductShowcase } from "@/components/product-showcase";
import { ServicesSection } from "@/components/services-section";
import Footer2 from "@/components/smoothui/blocks/footers/footer-2";
import { company, clients, deliverySteps, industries } from "@/lib/content";

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
function CustomerLogoRow({ direction }: { direction: "forward" | "reverse" }) {
  return <div className="customer-logo-row" aria-label="Customer and partner logos">
    <div className={`customer-logo-track customer-logo-track-${direction}`}>
      {[...clients, ...clients].map((client, index) => <div className="customer-logo" key={`${direction}-${client.name}-${index}`} aria-hidden={index >= clients.length}>
        <Image src={client.image} alt={index >= clients.length ? "" : client.name} width={400} height={350} />
      </div>)}
    </div>
  </div>;
}
function ClientCarousel() {
  return <section className="customer-section" aria-label="Customers and partners">
    <div className="customer-heading"><h2>Built with teams doing real work.</h2></div>
    <div className="customer-logos"><CustomerLogoRow direction="forward" /><CustomerLogoRow direction="reverse" /></div>
  </section>;
}
export default function HomePage() {
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
    <div className="cloud-intro-flow">
      <HeroScene />
      <ClientCarousel />
    </div>

    <ServicesSection />
    <section className="products-section section-pad" id="products"><div className="section-shell"><div className="product-section-intro"><h2>Purpose-built products for real operations.</h2><p>Focused systems that make complex work clearer.</p></div><ProductShowcase /></div></section>

    <section className="delivery-section process-section section-shell section-pad" id="approach"><SectionIntro title="From first question to lasting progress." text="A clear path from idea to dependable software." />
      <ol className="delivery-steps">{deliverySteps.map((step) => <li className="delivery-step glass-surface" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><span className="step-connector" aria-hidden="true"/></li>)}</ol>
      <div className="engagement-models"><div className="engagement-grid"><article className="engagement-card glass-surface"><h3>Project-based</h3><p>A focused build with clear milestones.</p></article><article className="engagement-card glass-surface"><h3>Dedicated teams</h3><p>A consistent team for ongoing product work.</p></article><article className="engagement-card glass-surface"><h3>Staff augmentation</h3><p>Extend your team with specialist capacity.</p></article></div></div>
    </section>

    <section className="industries-section section-shell section-pad" id="industries"><SectionIntro title="Industry context. Practical software." text="Systems shaped around the workflows each business actually runs." />
      <div className="industry-grid">{industries.map((item, i) => <article className={`industry-card industry-${item.visual}`} key={item.label}>
        <div className="industry-image"><Image src={item.image} alt="" fill sizes="(max-width: 760px) 78vw, 25vw" loading="lazy"/></div><div className="industry-content"><span className="industry-number">0{i + 1}</span><h3>{item.label}</h3><p>{item.description}</p></div>
      </article>)}</div>
    </section>

    <section className="leadership-section founder-section section-pad" id="leadership"><div className="section-shell">
      <SectionIntro title="Technology should make business more capable." text="We started IntelliSense Cloud to help ambitious teams solve meaningful problems with thoughtful engineering, dependable systems, and a clear view of what comes next." />
      <div className="founder-profile-grid">
        <span className="founder-profile-connector" aria-hidden="true" />
        <article className="founder-profile-card founder-profile-sohaib">
          <div className="founder-profile-portrait"><Image src="/images/founders/sohaib-asgher.png" alt="Sohaib Asgher" fill sizes="(max-width: 760px) 92vw, 45vw" unoptimized /></div>
          <div className="founder-profile-caption"><span>Founder &amp; CEO</span><h3>Sohaib Asgher</h3></div>
          <div className="founder-profile-detail"><p>At IntelliSense, I focus on turning complex operations into dependable software that teams can use every day. My work sits at the intersection of product engineering, AI systems, and practical automation—not technology for its own sake. I track advances in models, agents, and infrastructure closely, then translate what is genuinely useful into secure systems with a clear business purpose.</p></div>
        </article>
        <article className="founder-profile-card founder-profile-minaal">
          <div className="founder-profile-portrait"><Image src="/images/founders/minaal-rizwan.png" alt="Minaal Rizwan" fill sizes="(max-width: 760px) 92vw, 45vw" unoptimized /></div>
          <div className="founder-profile-caption"><span>Co-Founder</span><h3>Minaal Rizwan</h3></div>
          <div className="founder-profile-detail"><p>I focus on making intelligent products understandable, useful, and grounded in the way people actually work. My role connects operations, product strategy, and client experience so new AI capabilities become practical improvements rather than disconnected experiments. I stay close to changes in the industry, from emerging workflows to the expectations teams bring to digital tools.</p></div>
        </article>
      </div>
    </div></section>

    <section className="contact-section section-shell section-pad" id="contact">
      <div className="contact-panel glass-surface">
        <div className="contact-copy">
          <h2>Let’s talk about what’s next.</h2>
          <p>Tell us what you’re building, improving, or automating. We’ll help you identify the clearest next step.</p>
          <div className="contact-direct"><span>Prefer email?</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
          <div className="contact-next-steps" aria-labelledby="contact-next-title">
            <h3 id="contact-next-title">What happens next</h3>
            <ol>
              <li><span>01</span><p>Tell us about the project.</p></li>
              <li><span>02</span><p>We review your goals and requirements.</p></li>
              <li><span>03</span><p>We suggest a clear next step.</p></li>
            </ol>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    <Footer2 />
  </main>;
}
