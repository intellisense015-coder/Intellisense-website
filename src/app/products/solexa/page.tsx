import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solexa Inventory & Retail Operations",
  description: "Explore Solexa, a retail operations and inventory workspace with supplied product screens for stock, supplier, sales, product, and business views.",
  alternates: { canonical: "/products/solexa" },
  openGraph: { title: "Solexa Inventory & Retail Operations", description: "A retail workspace for inventory, products, suppliers, purchasing, sales, and business reporting.", url: "/products/solexa", type: "website" },
};
const screens = [
  ["/images/products/solexa/screen-13.webp", "Solexa sales dashboard", "A sales and operations summary shown in the supplied application."],
  ["/images/products/solexa/screen-13-1.webp", "Solexa application access screen", "A product access screen from the supplied Solexa archive."],
  ["/images/products/solexa/screen-14.webp", "Solexa settings workspace", "Configuration and operating preferences in Solexa."],
  ["/images/products/solexa/screen-15.webp", "Solexa business records", "Structured business records presented in the Solexa interface."],
  ["/images/products/solexa/screen-16.webp", "Solexa inventory and stock management", "An inventory-focused view from the supplied product screens."],
  ["/images/products/solexa/screen-17.webp", "Solexa operational metrics", "Retail operations figures and business activity in the application."],
  ["/images/products/solexa/screen-18.webp", "Solexa warehouse and inventory illustration", "A product illustration showing inventory and warehouse context."],
] as const;
export default function SolexaPage() {
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Solexa", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Retail operations and inventory workspace for product, supplier, purchasing, sales, and business reporting workflows.", url: "https://intellisense.cloud/products/solexa", provider: { "@type": "Organization", name: "IntelliSense Cloud" } };
  return <main className="product-page" id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="section-shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#top">Home</Link><span>/</span><Link href="/#products">Products</Link><span>/</span><span aria-current="page">Solexa</span></nav>
      <section className="product-detail-hero solexa-detail"><div><h1>A connected view of retail operations.</h1><p className="product-lead">Solexa brings inventory, suppliers, purchasing, sales, and business activity into one workspace.</p><p>Retail decisions depend on current, consistent information. The supplied Solexa product screens show an operations platform for bringing important product and inventory views together, helping teams spend less time navigating separate records and more time acting on what is happening.</p><div className="service-actions"><Link href="/#contact" className="button button-primary">Discuss Solexa <span aria-hidden="true">↗</span></Link><Link href="/#industries" className="button button-secondary">Explore retail solutions <span aria-hidden="true">↓</span></Link></div></div><div className="product-feature-image"><Image src="/images/products/solexa-cover.jpg" alt="Solexa product cover showing its sign-in experience" fill priority sizes="(max-width: 760px) 92vw, 46vw"/></div></section>
      <section className="product-detail-intro"><h2>Retail workflows, brought into clearer view.</h2><p>Explore how a connected operating workspace can support the information teams use through the retail lifecycle.</p></section>
      <div className="product-feature-grid">{[
        ["Inventory visibility", "Review product and stock information in a shared workspace to support day-to-day inventory decisions."],
        ["Supplier coordination", "Keep supplier-related records and purchasing context close to the stock information they affect."],
        ["Sales and activity", "Give teams a more connected view of sales activity and operating performance."],
        ["Product records", "Organize product information so it is easier to review and use across common retail workflows."],
        ["Operations management", "Bring frequent business tasks into a focused interface built around how the team works."],
        ["Business reporting", "Surface key operational information so managers can review activity and identify follow-up needs."],
      ].map(([title, text]) => <article className="product-feature-card" key={title}><span aria-hidden="true">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <section className="product-gallery-section"><div className="service-section-heading"><h2>Explore the Solexa interface.</h2><p>These product visuals are taken from the Solexa archive supplied for this website update.</p></div><div className="product-gallery">{screens.map(([src, alt, caption]) => <figure key={src}><div><Image src={src} alt={alt} fill sizes="(max-width: 760px) 92vw, 40vw" loading="lazy"/></div><figcaption>{caption}</figcaption></figure>)}</div></section>
      <section className="product-cta"><h2>Bring more clarity to retail operations.</h2><p>Talk with IntelliSense Cloud about inventory, supplier, and retail workflow needs for your team.</p><Link href="/#contact" className="button button-primary">Start a conversation <span aria-hidden="true">↗</span></Link></section>
    </div></main>;
}
