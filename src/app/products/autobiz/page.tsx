import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoBiz AI Business Workspace",
  description: "Explore AutoBiz, an AI business workspace with assistants, document intelligence, email workflows, image generation, and connected tools.",
  alternates: { canonical: "/products/autobiz" },
  openGraph: { title: "AutoBiz AI Business Workspace", description: "AI assistants, document intelligence, email workflows, image generation, and connected business tools in one workspace.", url: "/products/autobiz", type: "website" },
};
const screens = [
  ["/images/products/autobiz/dashboard.webp", "AutoBiz workspace dashboard", "A single home for recent activity and connected business tools."],
  ["/images/products/autobiz/ai-chat.webp", "AutoBiz AI chat interface", "A focused chat workspace for asking questions and moving tasks forward."],
  ["/images/products/autobiz/document-intelligence.webp", "AutoBiz document intelligence", "An interface for reviewing uploaded documents and extracting useful information."],
  ["/images/products/autobiz/email.webp", "AutoBiz email workflow", "Email assistance and drafting tools shown in the product interface."],
  ["/images/products/autobiz/image-generation.webp", "AutoBiz image generation", "The image generation workspace included in the supplied product screens."],
  ["/images/products/autobiz/integrations.webp", "AutoBiz integrations", "Connected tools displayed in the supplied AutoBiz product interface."],
] as const;
export default function AutobizPage() {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "AutoBiz", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "AI assistants, document intelligence, email workflows, image generation, and connected business automations in one workspace.", url: "https://intellisense.cloud/products/autobiz", provider: { "@type": "Organization", name: "IntelliSense Cloud" } };
  return <main className="product-page" id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="section-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#top">Home</Link><span>/</span><Link href="/#products">Products</Link><span>/</span><span aria-current="page">AutoBiz</span></nav>
      <section className="product-detail-hero autobiz-detail"><div><h1>AI that fits the way your business works.</h1><p className="product-lead">AutoBiz brings practical AI tools and connected workflows together in one business workspace.</p><p>Explore AI chat, document intelligence, email assistance, image generation, and integrations through the real product screens provided by IntelliSense Cloud. Designed as a portfolio product, AutoBiz shows how focused AI capabilities can live alongside everyday business work.</p><div className="service-actions"><a className="button button-primary" target="_blank" rel="noopener noreferrer">View AutoBiz portfolio <span aria-hidden="true">↗</span></a><Link href="/#contact" className="button button-secondary">Discuss a similar solution <span aria-hidden="true">↓</span></Link></div></div><div className="product-feature-image"><Image src="/images/products/autobiz/cover.webp" alt="AutoBiz AI automation and agentic workspace portfolio cover" fill priority sizes="(max-width: 760px) 92vw, 46vw"/></div></section>
      <section className="product-detail-intro"><h2>One workspace, several useful AI capabilities.</h2><p>Each feature has a distinct role. Teams can start with one focused task and connect additional workflows as the product needs become clearer.</p></section>
      <div className="product-feature-grid">{[
        ["AI chat and assistants", "Explore a conversational interface for questions, task support, and guided actions."],
        ["Document intelligence", "Bring document upload, summarization, and question workflows into a more organized experience."],
        ["Email assistance", "Support routine writing and communication tasks inside a dedicated email workflow."],
        ["Image generation", "Give creative work a focused product surface for generating and reviewing visual assets."],
        ["Connected tools", "View integrations together so users can understand which business tools are part of the workspace."],
        ["Automation workspace", "Organize AI capabilities around business tasks, so users can move between tools with less context switching."],
      ].map(([title, text]) => <article className="product-feature-card" key={title}><span aria-hidden="true">✳</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <section className="product-gallery-section"><div className="service-section-heading"><h2>See AutoBiz in the product.</h2><p>The images below are screenshots and artwork supplied in the AutoBiz portfolio archive.</p></div><div className="product-gallery">{screens.map(([src, alt, caption]) => <figure key={src}><div><Image src={src} alt={alt} fill sizes="(max-width: 760px) 92vw, 40vw" loading="lazy"/></div><figcaption>{caption}</figcaption></figure>)}</div></section>
      <section className="product-cta"><h2>Have a workflow that could work smarter?</h2><p>We can help scope an AI product or automation around your team’s goals, information, and review requirements.</p><Link href="/#contact" className="button button-primary autobiz-expert-button">Talk to an IntelliSense expert <span aria-hidden="true">↗</span></Link></section>
    </div></main>;
}
