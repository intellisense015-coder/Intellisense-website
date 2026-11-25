import Link from "next/link";
import ShapeHero, { type HeroShape } from "@/components/kokonutui/shape-hero";

const shapeClass = "shape-capability h-14 px-7 font-medium text-[13px]";
const ballClass = "shape-capability shape-capability-ball size-14";
const capabilityShapes: HeroShape[] = [
  { id: "automation", content: "AI Automation", className: `${shapeClass} shape-capability-solid` },
  { id: "agents", content: "Agentic AI", className: `${shapeClass} shape-capability-outline` },
  { id: "rag", content: "RAG Systems", className: `${shapeClass} shape-capability-soft` },
  { id: "workflows", content: "Workflows", className: `${shapeClass} shape-capability-solid` },
  { id: "web", content: "Web Apps", className: `${shapeClass} shape-capability-outline` },
  { id: "mobile", content: "Mobile Apps", className: `${shapeClass} shape-capability-soft` },
  { id: "data", content: "Data", className: `${shapeClass} shape-capability-solid` },
  { id: "systems", content: "Connected Systems", className: `${shapeClass} shape-capability-outline` },
  { id: "custom-software", content: "Custom Software", className: `${shapeClass} shape-capability-soft` },
  { id: "erp", content: "ERP Systems", className: `${shapeClass} shape-capability-solid` },
  { id: "app-engineering", content: "App Engineering", className: `${shapeClass} shape-capability-outline` },
  { id: "cloud", content: "Cloud Infrastructure", className: `${shapeClass} shape-capability-soft` },
  { id: "digital-products", content: "Digital Products", className: `${shapeClass} shape-capability-solid` },
  { id: "api-integrations", content: "API Integrations", className: `${shapeClass} shape-capability-outline` },
  { id: "data-systems", content: "Data Systems", className: `${shapeClass} shape-capability-soft` },
  { id: "knowledge", content: "Knowledge Systems", className: `${shapeClass} shape-capability-solid` },
  { id: "discovery", content: "Technical Discovery", className: `${shapeClass} shape-capability-outline` },
  { id: "ball-indigo", className: `${ballClass} shape-capability-solid` },
  { id: "ball-lilac", className: `${ballClass} shape-capability-soft` },
  { id: "ball-mint", className: `${ballClass} shape-capability-mint` },
  { id: "ball-blue", className: `${ballClass} shape-capability-blue` },
  { id: "ball-white", className: `${ballClass} shape-capability-white` },
  { id: "ball-violet", className: `${ballClass} shape-capability-violet` },
  { id: "ball-mint-soft", className: `${ballClass} shape-capability-mint-soft` },
];

export function HeroScene() {
  return (
    <ShapeHero
      className="intellisense-shape-hero"
      title={
        <>
          Build Smarter.
          <br />
          Automate Faster.
          <br />
          <span>Scale with Intelligence.</span>
        </>
      }
      description="Intellisense designs and ships custom web, mobile, AI, and automation systems that connect your work and reduce manual effort."
      shapes={capabilityShapes}
      fill={0.26}
      actions={
        <>
          <Link className="shape-hero-button shape-hero-button-primary" href="#contact">
            Book a technical discovery
          </Link>
          <Link className="shape-hero-button shape-hero-button-secondary" href="#products">
            See what we build
          </Link>
        </>
      }
      as="h1"
    />
  );
}
