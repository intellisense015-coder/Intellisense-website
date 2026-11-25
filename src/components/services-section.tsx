import { AppWindow, Boxes, Bot, Code2, Globe2, Workflow, type LucideIcon } from "lucide-react";
import { capabilities } from "@/lib/content";

const serviceIcons: Record<string, LucideIcon> = {
  "ai-software": Bot,
  "custom-software": Code2,
  "erp-os-systems": Boxes,
  "app-engineering": AppWindow,
  "ai-automations": Workflow,
  "web-apps": Globe2,
};

const serviceCards = capabilities.slice(0, 6).map((service) => ({
  ...service,
  Icon: serviceIcons[service.slug],
}));

export function ServicesSection() {
  return <section className="systems-services section-pad" id="services">
    <div className="section-shell systems-services-shell">
      <div className="systems-services-intro">
        <h2>Software systems designed around the way your business works.</h2>
        <p>From custom platforms to intelligent automation, Intellisense turns complex workflows into dependable digital products.</p>
      </div>

      <div className="systems-services-list" role="list" aria-label="Intellisense service pillars">
        {serviceCards.map((service, index) => {
          const Icon = service.Icon;

          return <article className="systems-service-card" key={service.slug} role="listitem">
            <div className="systems-service-card-top">
              <span className="systems-service-number">0{index + 1}</span>
              <span className="systems-service-mark" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="systems-service-link" aria-hidden="true">Explore capability</span>
          </article>;
        })}
      </div>

    </div>
  </section>;
}
