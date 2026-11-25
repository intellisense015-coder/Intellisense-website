import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coworking OS | IntelliSense Cloud",
  description: "A placeholder product direction for connected coworking and flexible workspace operations.",
  alternates: { canonical: "/products/coworking-os" },
};

export default function CoworkingOsPage() {
  return <main className="product-page" id="main">
    <div className="section-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#top">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">Coworking OS</span></nav>
      <section className="product-detail-hero coworking-os-detail">
        <div>
          <span className="product-placeholder-label">Product direction</span>
          <h1>Workspace operations, connected.</h1>
          <p className="product-lead">Coworking OS is a placeholder product concept for calmer, more connected flexible workspace operations.</p>
          <p>We’ll add the fuller product story, workflows, and visuals here later. For now, this page gives the hero teaser a stable destination and keeps the product in the IntelliSense Cloud portfolio.</p>
          <div className="service-actions"><Link href="/#contact" className="button button-primary">Discuss Coworking OS</Link><Link href="/products" className="button button-secondary">Back to products</Link></div>
        </div>
        <div className="coworking-os-placeholder" role="img" aria-label="Abstract Coworking OS workspace preview">
          <div className="coworking-placeholder-sidebar"><span /><span /><span /><span /></div>
          <div className="coworking-placeholder-main"><div><b /><b /><b /></div><section><i /><i /><i /></section><section><em /><em /></section></div>
        </div>
      </section>
      <section className="product-detail-intro"><h2>A simple operating layer for flexible work.</h2><p>The future version can bring member operations, bookings, availability, and daily workspace workflows into one clear view.</p></section>
      <div className="product-feature-grid"><article className="product-feature-card"><span>01</span><h3>Member operations</h3><p>Keep member information and the work around it easier to coordinate.</p></article><article className="product-feature-card"><span>02</span><h3>Booking coordination</h3><p>Make rooms, desks, and workspace availability easier to understand.</p></article><article className="product-feature-card"><span>03</span><h3>Daily workspace flow</h3><p>Give operators a connected view of the work that keeps the space moving.</p></article></div>
    </div>
  </main>;
}
