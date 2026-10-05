import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities, company } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";

const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  "ai-software": { src: "/images/services/ai-software.png", alt: "AI software interface and artificial intelligence illustration" },
  "custom-software": { src: "/images/services/custom-software.png", alt: "Custom software developer working with a project dashboard" },
  "erp-os-systems": { src: "/images/services/erp-os-systems.png", alt: "Operations team reviewing ERP and business system dashboards" },
  "app-engineering": { src: "/images/services/app-engineering.png", alt: "App engineer working at a desktop coding workstation" },
  "ai-automations": { src: "/images/services/ai-automations.png", alt: "AI automation robot using a workflow interface" },
  "web-apps": { src: "/images/services/web-apps.png", alt: "Web application dashboard on a desktop computer" },
  "ai-data-systems": { src: "/images/services/ai-data-systems.png", alt: "AI and data systems connecting insight, analytics, and business tools" },
  "cloud-infrastructure": { src: "/images/services/cloud-infrastructure.png", alt: "Cloud infrastructure with connected and protected systems" },
};

const serviceMetaDescriptions: Record<string, string> = {
  "ai-software": "Develop AI software with business data, task-focused assistants, document intelligence, and human review designed into the product.",
  "custom-software": "Build custom business software, SaaS platforms, portals, and workflow tools shaped around your teams and processes.",
  "erp-os-systems": "Connect ERP, finance, inventory, purchasing, and operations workflows with business systems built around your processes.",
  "app-engineering": "Plan, design, and engineer reliable web and mobile apps, from product architecture through launch and ongoing improvement.",
  "ai-automations": "Automate repetitive business workflows with connected AI tools, clear approvals, and people kept in control.",
  "web-apps": "Build accessible, responsive web applications, customer portals, business dashboards, and commerce platforms.",
  "ai-data-systems": "Connect business data, analytics, reporting, and AI workflows with practical governance and access controls.",
  "cloud-infrastructure": "Design secure cloud infrastructure, deployment workflows, monitoring, and recovery practices for business software.",
};
const serviceMetaTitles: Record<string, string> = {
  "ai-software": "AI Software Development",
  "custom-software": "Custom Software Development",
  "erp-os-systems": "ERP & Business Systems",
  "app-engineering": "Web & Mobile App Development",
  "ai-automations": "AI Workflow Automation",
  "web-apps": "Web Application Development",
  "ai-data-systems": "AI & Data Engineering",
  "cloud-infrastructure": "Cloud Infrastructure Services",
};

export function generateStaticParams() { return capabilities.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  const detail = servicePages[slug];
  return item && detail ? {
    title: serviceMetaTitles[slug] ?? detail.title, description: serviceMetaDescriptions[slug] ?? detail.description,
    alternates: { canonical: `/services/${slug}` }, openGraph: { title: serviceMetaTitles[slug] ?? detail.title, description: serviceMetaDescriptions[slug] ?? detail.description, url: `/services/${slug}`, type: "website" },
  } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = capabilities.find((capability) => capability.slug === slug);
  const detail = servicePages[slug];
  if (!item || !detail) notFound();
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: detail.title, serviceType: detail.title, provider: { "@type": "Organization", name: company.name, url: company.domain }, description: detail.description, url: `${company.domain}/services/${slug}` };
  return <main className="service-page" id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <div className="section-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#top">Home</Link><span>/</span><Link href="/#services">Capabilities</Link><span>/</span><span aria-current="page">{detail.title}</span></nav>
      <section className="service-hero">
        <div className="service-hero-copy"><h1>{detail.title}</h1><p className="service-lead">{detail.lead}</p><p>{detail.description}</p><div className="service-actions"><Link href="/#contact" className="button button-primary">Talk to an expert <span aria-hidden="true">↗</span></Link><Link href="/#products" className="button button-secondary">Explore our products <span aria-hidden="true">↓</span></Link></div></div>
        <div className="service-hero-image"><Image src={serviceHeroImages[slug].src} alt={serviceHeroImages[slug].alt} fill priority sizes="(max-width: 760px) 92vw, 42vw" /></div>
      </section>
      <section className="service-outcomes"><h2>What this makes possible</h2><ul>{detail.outcomes.map((outcome) => <li key={outcome}><span aria-hidden="true">↗</span>{outcome}</li>)}</ul></section>
      <section className="service-detail-section"><div className="service-section-heading"><h2>Capability built around your priorities.</h2><p>Start with the business question, then bring the right product, engineering, data, and delivery practices to solve it.</p></div><div className="service-capability-grid">{detail.capabilities.map((feature, index) => <article className="service-capability" key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
      <section className="service-detail-section service-scenarios"><div className="service-section-heading"><h2>Where teams use it.</h2><p>These are common starting points. We shape scope and implementation to your existing systems, users, and operating requirements.</p></div><div className="service-scenario-grid">{detail.scenarios.map((scenario) => <article className="service-scenario" key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></article>)}</div></section>
      <section className="service-process"><div><h2>A delivery path with clear decisions.</h2><p>We make assumptions visible early, review progress in useful increments, and plan for the people who will operate the solution after launch.</p><Link className="text-link" href="/#approach">See how we work <span aria-hidden="true">↗</span></Link></div><ol>{detail.delivery.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol></section>
      <section className="service-faq"><h2>Questions teams often ask.</h2>{detail.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</section>
      <section className="service-cta"><div><h2>Let’s make the next step clear.</h2><p>Tell us what your team is working through. An IntelliSense expert can help shape a practical starting point.</p></div><Link href="/#contact" className="button button-primary">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </div>
  </main>;
}
