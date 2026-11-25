"use client";

import Image from "next/image";
import CardFlip from "@/components/kokonutui/card-flip";

type ProductStudioItem = {
  name: string;
  category: string;
  image: string;
  alt: string;
  imageFit?: "cover" | "contain";
  phrases: Array<{ label: string; description?: string }>;
  back: string;
  href?: string;
};

const productStudioItems: ProductStudioItem[] = [
  {
    name: "Fleet Maintenance",
    category: "Fleet Operations",
    image: "/images/products/fleet-maintenance-reference.png",
    alt: "Fleet Maintenance software interface",
    imageFit: "cover",
    phrases: ["Service scheduling", "Vehicle health", "Repair history", "Cost visibility"].map((label) => ({ label })),
    back: "A connected fleet operations system for managing vehicles, service schedules, repair history, maintenance costs, and operational visibility.",
  },
  {
    name: "Coworking OS",
    category: "Workspace Operations",
    image: "/images/products/coworking-os-reference.png",
    alt: "Coworking OS software interface",
    imageFit: "cover",
    phrases: ["Member operations", "Room bookings", "Visitors and access", "Invoices and payments"].map((label) => ({ label })),
    back: "An operations platform for managing members, bookings, visitors, invoices, spaces, and daily coworking workflows.",
    href: "/products/coworking-os",
  },
  {
    name: "Solexa",
    category: "Retail Operations",
    image: "/images/products/solexa-logo.png",
    alt: "Solexa ERP software interface",
    imageFit: "contain",
    phrases: [
      { label: "Inventory visibility" },
      { label: "Supplier coordination" },
      { label: "Sales and activity" },
      { label: "Product records" },
      { label: "Operations management" },
      { label: "Business reporting" },
      { label: "Manufacturing records" },
    ],
    back: "A retail ERP for managing inventory, suppliers, purchases, sales, exchanges, buybacks, and reporting.",
    href: "/products/solexa",
  },
  {
    name: "AutoBiz",
    category: "AI Business Workspace",
    image: "/images/products/autobiz-reference.png",
    alt: "AutoBiz automation software interface",
    imageFit: "cover",
    phrases: [
      { label: "AI chat and assistants" },
      { label: "Document intelligence" },
      { label: "Email assistance" },
      { label: "Image generation" },
      { label: "Connected tools" },
      { label: "Automation workspace" },
    ],
    back: "An AI-powered workspace for capturing leads, automating follow-ups, connecting workflows, and improving sales visibility.",
    href: "/products/autobiz",
  },
];

function ProductCardFront({ product }: { product: ProductStudioItem }) {
  return <div className="product-flip-front-content">
    <div className={`product-flip-image product-flip-image-${product.imageFit || "cover"}`}><Image src={product.image} alt={product.alt} fill sizes="(max-width: 760px) 88vw, 24vw" /></div>
    <div className="product-flip-copy">
      <span>{product.category}</span>
      <h3>{product.name}</h3>
      <ul>{product.phrases.map((phrase) => <li key={phrase.label}><span>{phrase.label}</span>{phrase.description ? <small>{phrase.description}</small> : null}</li>)}</ul>
    </div>
  </div>;
}

export function ProductShowcase() {
  return <div className="product-flip-experience">
    <div className="product-flip-arc" role="region" aria-label="Intellisense products. Flick a card to reveal more information.">
      {productStudioItems.map((item, index) => <div className={`product-flip-arc-card product-flip-arc-card-${index + 1}`} key={item.name}>
        <CardFlip
          axis="y"
          label={`${item.name} product card`}
          className={`product-flip-card${item.phrases.some((phrase) => phrase.description) ? " product-flip-card-feature-rich" : ""}`}
          faceClassName="product-flip-face"
          front={<ProductCardFront product={item} />}
          back={<div className="product-flip-back-content"><span>Product note</span><h3>{item.name}</h3><p>{item.back}</p></div>}
        />
      </div>)}
    </div>
  </div>;
}
