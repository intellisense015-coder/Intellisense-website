import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products | IntelliSense Cloud",
  description: "Explore IntelliSense Cloud products for AI work, retail operations, and connected workspace operations.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <main className="product-page" id="main">
    <div className="section-shell">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#top">Home</Link><span>/</span><span aria-current="page">Products</span></nav>
      <header className="products-index-header">
        <span>IntelliSense Cloud products</span>
        <h1>Purpose-built products for clearer work.</h1>
        <p>Explore focused product directions for AI workspaces, retail operations, and the systems behind flexible work.</p>
      </header>
      <div className="products-index-grid">
        {products.map((product) => <Link className="products-index-card" href={product.href} key={product.slug}>
          <span className={`products-index-icon product-${product.accent}`} aria-hidden="true">{product.name === "Solexa" ? "▦" : product.name === "Coworking OS" ? "⌂" : "✳"}</span>
          <span className="products-index-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span className="products-index-link">Explore {product.name} <span aria-hidden="true">↗</span></span>
        </Link>)}
      </div>
    </div>
  </main>;
}
