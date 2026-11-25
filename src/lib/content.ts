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
  {
    slug: "coworking-os", name: "Coworking OS", category: "Workspace operations",
    tagline: "A calmer operating layer for flexible workspaces.",
    description: "Coworking OS is a placeholder product concept for connecting member operations, bookings, and the daily work of running a flexible workspace. The dedicated page is ready for the fuller product details to be added later.",
    features: ["Member operations", "Booking coordination", "Workspace availability", "Daily operating workflows"],
    image: "/images/products/coworking-os-placeholder.svg", accent: "violet", action: "Explore Coworking OS", href: "/products/coworking-os",
  },
];

export const industries = [
  { label: "Retail & e-commerce", description: "Digital systems for products, orders, inventory, and customer journeys.", image: "https://images.unsplash.com/photo-1768758533474-5cd148638a98?auto=format&fit=crop&w=1200&q=82", visual: "retail" },
  { label: "Legal services", description: "Clearer workflows for client information, documents, and case operations.", image: "/images/industries/legal-services.png", visual: "legal" },
  { label: "Industrial operations", description: "Connected tools for records, reporting, maintenance, and daily execution.", image: "/images/industries/industrial-operations.png", visual: "industrial" },
  { label: "Commercial real estate", description: "Better visibility across leads, properties, leases, and portfolio activity.", image: "/images/industries/commercial-real-estate.png", visual: "property" },
];

export const clients = [
  { name: "International Trading Company", slug: "itc", image: "/images/clients/itc.pdf.webp" },
  { name: "CLE’ Monde", slug: "cle-monde", image: "/images/clients/cle-monde-clear.png" },
  { name: "Sharif Oxygen", slug: "sharif-oxygen", image: "/images/clients/sharif-oxygen.pdf.webp" },
  { name: "Rangoli Kurta", slug: "rangoli-kurta", image: "/images/clients/rangoli-kurta.webp" },
  { name: "The Cubicle", slug: "the-cubicle", image: "/images/clients/the-cubicle.png" },
  { name: "Messi Groups", slug: "messi-groups", image: "/images/clients/messi-groups.png" },
  { name: "ZHK Mobiles", slug: "zhk-mobiles", image: "/images/clients/zhk-mobiles.png" }
];

export const deliverySteps = [
  { number: "01", title: "Strategic Discovery & Architecture", description: "Align goals and technical direction." },
  { number: "02", title: "Agile Engineering & AI Integration", description: "Build in clear, visible increments." },
  { number: "03", title: "Quality Assurance & Deployment", description: "Validate, secure, and release with confidence." },
  { number: "04", title: "Continuous Optimization & Scaling", description: "Learn, improve, and scale responsibly." },
];
