export const company = {
  name: "IntelliSense Cloud",
  domain: "https://intellisense.cloud",
  email: "info@intellisense.cloud",
  phone: "+923090098555",
  phoneDisplay: "+92 309 0098555",
  instagram: "https://www.instagram.com/intellisense.cloud/",
  linkedIn: "https://www.linkedin.com/company/intellisense15/",
  whatsapp: "923090098555",
};

export const capabilities = [
  { slug: "ai-software", title: "AI Software", description: "Make useful intelligence part of your product and day-to-day operations, from assistants to decision-support tools.", icon: "✳" },
  { slug: "custom-software", title: "Custom Software", description: "Build business platforms, dashboards, and SaaS products around the way your teams actually work.", icon: "⌘" },
  { slug: "erp-os-systems", title: "ERP & Business Systems", description: "Connect ERP, operations, finance, inventory, and purchasing workflows in systems shaped for your organization.", icon: "◫" },
  { slug: "app-engineering", title: "App Engineering", description: "Design and engineer reliable web and mobile applications from first concept through launch.", icon: "▣" },
  { slug: "ai-automations", title: "AI Automations", description: "Reduce repetitive work with connected automations that keep people informed and in control.", icon: "⤳" },
  { slug: "web-apps", title: "Web Apps", description: "Create responsive browser-based products with clear interfaces and dependable foundations.", icon: "▤" },
  { slug: "ai-data-systems", title: "AI & Data Systems", description: "Connect data, analytics, and AI workflows to give teams a more useful view of their business.", icon: "⌁" },
  { slug: "cloud-infrastructure", title: "Cloud & Infrastructure", description: "Build secure cloud foundations, integrations, and deployment workflows that can grow with demand.", icon: "☁" },
];

export const products = [
  {
    slug: "autobiz", name: "AutoBiz", category: "AI business workspace",
    tagline: "Move routine work forward with connected AI tools.",
    description: "AutoBiz brings AI chat, document intelligence, email assistance, image generation, and connected tools into one business workspace. Teams can explore focused assistants and automation workflows through the supplied product interface.",
    features: ["AI chat and assistants", "Document intelligence", "Email and content workflows", "Connected tools and automations"],
    image: "/images/products/autobiz/cover.webp", accent: "blue", action: "Explore AutoBiz", href: "/products/autobiz",
  },
  {
    slug: "solexa", name: "Solexa", category: "Inventory and retail operations",
    tagline: "A clearer view of inventory, purchasing, and operations.",
    description: "Solexa brings day-to-day retail operations into a single workspace, with supplied screens covering inventory, products, suppliers, sales, and operational reporting. It is designed to help teams work from more connected business information.",
    features: ["Inventory and product records", "Supplier and purchasing workflows", "Sales and operations views", "Business reporting"],
    image: "/images/products/solexa-cover.jpg", accent: "cyan", action: "Explore Solexa", href: "/products/solexa",
  },
];

export const industries = [
  { label: "Clothing & retail", description: "Connect product, stock, sales, and fulfilment workflows so teams can act on current information.", outcome: "Better visibility from merchandising to operations.", image: "https://images.unsplash.com/photo-1768758533474-5cd148638a98?auto=format&fit=crop&w=1200&q=82", visual: "retail", credit: "Luca, Unsplash — clothing store interior" },
  { label: "Legal services", description: "Digitize document-heavy work and create clearer client, matter, and review workflows.", outcome: "More organized case and client operations.", image: "https://images.unsplash.com/photo-1749648329134-75ed14f7dae5?auto=format&fit=crop&w=1200&q=82", visual: "legal", credit: "Vinícius Marçall, Unsplash — professional working at desk" },
  { label: "Industrial gas & chemical production", description: "Support operational teams with connected records, dependable reporting, and practical automation.", outcome: "More connected operational information.", image: "https://images.unsplash.com/photo-1768128834332-7d3479c8d634?auto=format&fit=crop&w=1200&q=82", visual: "industrial", credit: "waa towaw, Unsplash — industrial complex" },
  { label: "E-commerce", description: "Bring commerce, customer journeys, and backend operations into a cohesive digital experience.", outcome: "Smoother workflows across the customer lifecycle.", image: "https://images.unsplash.com/photo-1769355104335-acef3aa4c9b6?auto=format&fit=crop&w=1200&q=82", visual: "commerce", credit: "Guilherme Mendes, Unsplash — ecommerce packaging and warehouse" },
  { label: "Commercial real estate", description: "Give property teams a more useful view of leads, assets, lease information, and portfolio activity.", outcome: "Clearer portfolio and leasing workflows.", image: "https://images.unsplash.com/photo-1762456415242-155132cd7ff4?auto=format&fit=crop&w=1200&q=82", visual: "property", credit: "Richard Williams, Unsplash — commercial office architecture" },
];

export const clients = [
  { name: "International Trading Company", slug: "itc", image: "/images/clients/itc.pdf.webp" },
  { name: "CLE’ Monde", slug: "cle-monde", image: "/images/clients/cle-monde-clear.png" },
  { name: "Sharif Oxygen", slug: "sharif-oxygen", image: "/images/clients/sharif-oxygen.pdf.webp" },
  { name: "Rangoli Kurta", slug: "rangoli-kurta", image: "/images/clients/rangoli-kurta.webp" },
  { name: "The Cubicle", slug: "the-cubicle", image: "/images/clients/the-cubicle.png" },
];

export const deliverySteps = [
  { number: "01", title: "Strategic Discovery & Architecture", description: "Align on business goals, users, constraints, and a technical direction before committing to a build." },
  { number: "02", title: "Agile Engineering & AI Integration", description: "Build in clear increments, bring in AI where it adds value, and keep decisions visible as the product takes shape." },
  { number: "03", title: "Quality Assurance & Deployment", description: "Validate the experience, security, and reliability, then prepare a measured release into production." },
  { number: "04", title: "Continuous Optimization & Scaling", description: "Use real-world feedback to improve performance, extend workflows, and scale the product responsibly." },
];

export const proofPoints = [
  { value: "99%", title: "Customer Satisfaction", description: "A relationship-first approach to delivery and support." },
  { value: "24/7", title: "Enterprise Support", description: "Support coverage for business-critical systems." },
  { value: "10x", title: "Deployment Velocity", description: "Automation and focused delivery to help teams move faster." },
  { value: "Zero", title: "Downtime Architecture", description: "Resilient design practices built around service continuity." },
];
