export type ServicePageContent = {
  title: string; lead: string; description: string; outcomes: string[];
  capabilities: { title: string; text: string }[];
  scenarios: { title: string; text: string }[];
  delivery: string[]; faqs: { question: string; answer: string }[];
};

export const servicePages: Record<string, ServicePageContent> = {
  "ai-software": {
    title: "AI Software", lead: "Put useful intelligence inside the software your team already depends on.",
    description: "We design AI-enabled products around real user tasks: finding information, understanding documents, making recommendations, and completing work with the right level of human review. The result is a product experience that makes AI understandable, measurable, and fit for its operating context.",
    outcomes: ["AI features grounded in your own approved business data", "Clear human review for important decisions", "Product experiences that explain what AI can and cannot do"],
    capabilities: [
      { title: "AI product discovery", text: "Map user jobs, available data, risk, and expected value before selecting models or adding AI to a workflow." },
      { title: "Assistants and copilots", text: "Build task-focused conversational interfaces that retrieve trusted information and help users take the next step." },
      { title: "Document intelligence", text: "Extract, classify, summarize, and search business documents while keeping review paths available for uncertain results." },
      { title: "Evaluation and governance", text: "Define quality checks, access controls, monitoring, and escalation rules that fit the sensitivity of the use case." },
    ],
    scenarios: [
      { title: "Knowledge discovery", text: "Help staff find answers across policies, product material, contracts, and internal documentation." },
      { title: "Decision support", text: "Bring relevant context and recommendations into operational screens while leaving accountability with people." },
      { title: "AI-enabled products", text: "Add carefully scoped AI capabilities to SaaS platforms, customer portals, and internal business tools." },
    ],
    delivery: ["Select a specific workflow and success measure", "Prepare approved data and set access boundaries", "Prototype, test, and evaluate with representative users", "Launch with monitoring, human review, and ongoing tuning"],
    faqs: [
      { question: "Can an AI feature use our own business data?", answer: "Yes. We can design retrieval and integration patterns around data sources your organization authorizes, with permissions and retention requirements agreed during architecture." },
      { question: "How do you keep people in control?", answer: "We define where AI may assist, where a person must review, and how uncertain or sensitive outcomes are routed before implementation." },
      { question: "Do we need a complete AI strategy first?", answer: "No. A focused discovery can evaluate one high-value workflow and establish a practical first release before expanding." },
    ],
  },
  "custom-software": {
    title: "Custom Software", lead: "Build a business platform around the way your organization actually works.",
    description: "Off-the-shelf tools can leave important processes fragmented or force teams into awkward workarounds. We map the people, rules, integrations, and decisions behind your operation, then engineer software that addresses those needs and can evolve with the business.",
    outcomes: ["Workflows shaped to your business rules", "Connected records across teams and tools", "A maintainable foundation for new capabilities"],
    capabilities: [
      { title: "Business platforms", text: "Bring critical operational processes into focused internal tools, portals, and workflow systems." },
      { title: "SaaS product engineering", text: "Develop the foundations of a new digital product, from account and permission models to feature delivery." },
      { title: "Modernization", text: "Replace brittle legacy workflows incrementally, preserving the business logic and information people depend on." },
      { title: "Integrations and APIs", text: "Connect systems through documented interfaces, stable data flows, and clear ownership of shared records." },
    ],
    scenarios: [
      { title: "Operations with unique rules", text: "Digitize approval paths, exceptions, and handoffs that generic tools do not represent well." },
      { title: "Customer and partner portals", text: "Give external users a simpler way to submit requests, access information, and track progress." },
      { title: "Product growth", text: "Extend an established application with new modules, roles, and workflows without losing consistency." },
    ],
    delivery: ["Clarify users, business rules, and integration boundaries", "Agree an architecture and a thin first release", "Ship in reviewable increments with automated checks", "Measure use and extend the platform in deliberate stages"],
    faqs: [
      { question: "How do you scope a custom software project?", answer: "We start by understanding target users, operating constraints, systems, and desired outcomes, then define a prioritized release plan with clear assumptions." },
      { question: "Can you work with our existing platform?", answer: "Yes. We can assess current architecture and integrations and recommend extending, modernizing, or replacing specific parts based on risk and fit." },
      { question: "Who owns the delivered software?", answer: "Project ownership, source code, and third-party dependencies are documented in the engagement terms before development begins." },
    ],
  },
  "erp-os-systems": {
    title: "ERP & Business Systems", lead: "Connect the business records and workflows that keep operations moving.",
    description: "ERP and operating platforms are most useful when finance, inventory, purchasing, people, and operations can work from consistent information. We help teams plan, build, integrate, or modernize systems so that important processes are visible and business data is easier to trust.",
    outcomes: ["Fewer disconnected handoffs between departments", "Clearer ownership of core business records", "Operational views aligned to real processes"],
    capabilities: [
      { title: "Workflow and process mapping", text: "Document current processes, exceptions, controls, and data ownership before choosing an implementation path." },
      { title: "ERP integration", text: "Connect finance, sales, inventory, purchasing, and operations systems through explicit integration contracts." },
      { title: "Operational workspaces", text: "Create focused screens and process tools around the daily work users need to complete." },
      { title: "Migration and modernization", text: "Plan data migration, validation, and incremental change to reduce operational disruption." },
    ],
    scenarios: [
      { title: "Inventory and purchasing", text: "Make stock availability, replenishment, suppliers, and purchasing status easier to review together." },
      { title: "Finance and operations", text: "Reduce duplicate entry and clarify how operational events flow into finance and management reporting." },
      { title: "Multi-team processes", text: "Give teams a consistent route for requests, approvals, service actions, and exception handling." },
    ],
    delivery: ["Map core processes, roles, and source-of-truth data", "Prioritize the integration and workflow sequence", "Configure or build in controlled stages with reconciliation", "Train users and monitor adoption, data quality, and exceptions"],
    faqs: [
      { question: "Do we need to replace our existing ERP?", answer: "Not necessarily. We assess whether integration, configuration, targeted extensions, or replacement best addresses the business need and implementation risk." },
      { question: "Can a new system integrate with our current tools?", answer: "Usually. Integration feasibility depends on vendor APIs, data quality, access, and licensing; we validate these early and document constraints." },
      { question: "How do you reduce disruption during rollout?", answer: "We plan migration and cutover around operational priorities, validate critical records, and can stage releases by workflow or team." },
    ],
  },
  "app-engineering": {
    title: "App Engineering", lead: "Turn a product idea into an application people can rely on.",
    description: "Strong applications balance useful product design with sound architecture, accessible interaction, and disciplined testing. Our engineers work across discovery, interface design, application development, integrations, and release preparation to help teams launch confidently and keep improving.",
    outcomes: ["A product experience centered on user tasks", "Reliable behavior across supported devices", "Engineering practices that make future change safer"],
    capabilities: [
      { title: "Product architecture", text: "Choose a maintainable application structure, data model, and integration approach that fits the product roadmap." },
      { title: "Web and mobile experiences", text: "Build responsive browser experiences and mobile applications with consistent interaction patterns." },
      { title: "Quality engineering", text: "Combine automated tests, manual exploratory testing, accessibility review, and release checks." },
      { title: "Release and observability", text: "Prepare deployment workflows, error reporting, and application monitoring for production use." },
    ],
    scenarios: [
      { title: "New digital products", text: "Design and develop a first product release that tests the highest-priority customer needs." },
      { title: "Application modernization", text: "Improve performance, accessibility, security posture, and maintainability in an existing app." },
      { title: "Connected customer journeys", text: "Unify account, ordering, service, and support experiences through coherent application flows." },
    ],
    delivery: ["Understand audience, jobs, and product constraints", "Prototype critical journeys and agree technical foundations", "Deliver features iteratively with continuous quality checks", "Release, observe real usage, and prioritize improvements"],
    faqs: [
      { question: "Do you support both web and mobile apps?", answer: "Yes. The right platform depends on the user context, device requirements, distribution needs, and how the product will be maintained." },
      { question: "Can you join an existing product team?", answer: "Yes. We can add engineering and product capacity to an established team, subject to onboarding and access arrangements." },
      { question: "How is product quality handled?", answer: "Quality is built through agreed acceptance criteria, automated checks where appropriate, manual testing, accessibility considerations, and staged releases." },
    ],
  },
  "ai-automations": {
    title: "AI Automations", lead: "Remove repetitive friction while keeping people in control of important work.",
    description: "Automation is most valuable when it removes predictable effort without hiding important decisions. We identify repeatable tasks, connect the systems involved, and design workflows with clear ownership, exception paths, and human approval where judgment matters.",
    outcomes: ["Less manual copying and chasing between systems", "Visible workflow status and exception handling", "Human approval preserved for sensitive decisions"],
    capabilities: [
      { title: "Workflow discovery", text: "Trace triggers, inputs, decision points, exceptions, and the teams affected before automating a process." },
      { title: "System orchestration", text: "Connect business applications, APIs, notifications, and records in observable workflows." },
      { title: "AI-assisted steps", text: "Apply classification, extraction, summarization, and drafting where they reduce effort and can be reviewed." },
      { title: "Governance and monitoring", text: "Set permissions, run logs, retry rules, alerting, and human intervention paths for live workflows." },
    ],
    scenarios: [
      { title: "Document intake", text: "Classify incoming information, route it to the right queue, and request review when details are unclear." },
      { title: "Approvals and requests", text: "Move routine requests through an accountable process with status updates and escalation rules." },
      { title: "Cross-tool administration", text: "Synchronize records and notifications across systems while reducing repeated manual entry." },
    ],
    delivery: ["Measure repetition, risk, and current cycle time", "Select the safest high-value automation candidate", "Build with logs, retries, approvals, and exception routes", "Review outcomes and expand only when the workflow is stable"],
    faqs: [
      { question: "Which work should be automated first?", answer: "Start with frequent, rules-based, well-understood tasks where errors and exceptions can be identified and the expected benefit is measurable." },
      { question: "Can a workflow include human approvals?", answer: "Yes. Review and approval steps can be designed into the process for decisions that need context, accountability, or policy judgment." },
      { question: "What happens when an automated step fails?", answer: "A production workflow should make failures visible, record enough context for diagnosis, apply safe retries where appropriate, and route unresolved cases to a person." },
    ],
  },
  "web-apps": {
    title: "Web Applications", lead: "Create a faster, clearer digital experience for customers and teams.",
    description: "A web application is often the working interface between a business and its customers, staff, or partners. We build responsive, accessible web experiences with useful information architecture, predictable interactions, secure application foundations, and a content structure search engines can understand.",
    outcomes: ["Responsive interfaces that work across screen sizes", "Clear journeys for the tasks that matter most", "Search-friendly structure and maintainable components"],
    capabilities: [
      { title: "Customer portals", text: "Create account-based experiences for requests, records, support, and self-service workflows." },
      { title: "Business dashboards", text: "Present operational data in context, with filters and actions designed around user decisions." },
      { title: "Commerce and web platforms", text: "Build content and commerce experiences that connect product discovery with business operations." },
      { title: "Accessibility and SEO", text: "Use semantic structure, accessible controls, metadata, and performance-minded rendering patterns." },
    ],
    scenarios: [
      { title: "Self-service experiences", text: "Help customers or partners find answers and complete common tasks without unnecessary handoffs." },
      { title: "Internal tools", text: "Replace spreadsheet-heavy processes with more structured, role-aware browser applications." },
      { title: "Public-facing platforms", text: "Improve the discoverability, usability, and conversion paths of a content-rich or transactional website." },
    ],
    delivery: ["Prioritize audience tasks and information structure", "Design and validate responsive page flows", "Build using reusable components and semantic markup", "Measure performance, accessibility, and real user behavior"],
    faqs: [
      { question: "Can you redesign an existing website or application?", answer: "Yes. We can evaluate the current experience and plan a targeted redesign, a technical modernization, or a phased replacement." },
      { question: "How do you approach search engine readiness?", answer: "We structure pages semantically, provide page-specific metadata and canonical URLs, and add relevant structured data where it accurately describes the page." },
      { question: "Do you account for mobile accessibility?", answer: "Yes. We design and test responsive layouts, keyboard interaction, focus visibility, contrast, and appropriately labeled form controls." },
    ],
  },
  "ai-data-systems": {
    title: "AI & Data Systems", lead: "Turn scattered business information into a dependable base for action.",
    description: "Analytics and AI are only as useful as the information, definitions, and permissions behind them. We help teams connect data sources, establish practical models and reporting, and introduce AI-enabled analysis with clear controls over access, quality, and interpretation.",
    outcomes: ["A more consistent view of important business measures", "Less time reconciling disconnected reports", "Governed data access for analytics and AI"],
    capabilities: [
      { title: "Data integration", text: "Connect operational sources and document how key fields, transformations, and ownership work." },
      { title: "Analytics and reporting", text: "Create dashboards and decision views that answer defined business questions rather than showing metrics without context." },
      { title: "Data quality and governance", text: "Set validation, access, lineage, retention, and stewardship practices appropriate to the data." },
      { title: "AI over business information", text: "Build search, summaries, and analytical workflows on curated sources with permission-aware access." },
    ],
    scenarios: [
      { title: "Management reporting", text: "Bring core operational indicators into consistent views with documented definitions." },
      { title: "Inventory and sales analysis", text: "Connect product, supplier, sales, and stock records for more useful planning conversations." },
      { title: "Knowledge and document search", text: "Make approved content easier to discover and summarize without broadly exposing sensitive records." },
    ],
    delivery: ["Identify priority questions, data sources, and owners", "Profile data quality and agree common definitions", "Build secure pipelines and decision-focused views", "Monitor freshness, quality, usage, and access"],
    faqs: [
      { question: "Can you work with multiple data sources?", answer: "Yes. We first confirm how each source can be accessed, how records relate, and which system remains authoritative for each data domain." },
      { question: "How do you protect sensitive information?", answer: "Data access, minimization, retention, and audit requirements are considered in the design; the precise controls depend on the data and deployment environment." },
      { question: "Can AI answer questions over internal information?", answer: "Yes, where the source data, access model, evaluation plan, and review expectations are defined. We scope this carefully to avoid treating generated text as an unquestioned source of truth." },
    ],
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure", lead: "Give your software a secure, observable foundation that can grow with demand.",
    description: "Cloud architecture should reflect the needs of the workload, the team operating it, and the consequences of service failure. We design and improve cloud environments, deployment workflows, and operational controls so releases are repeatable and systems are easier to understand and recover.",
    outcomes: ["Clearer environment and deployment ownership", "Reliability and security controls considered together", "Operational visibility for incident response and improvement"],
    capabilities: [
      { title: "Cloud architecture", text: "Plan application hosting, networking, identity, data, and service boundaries around workload needs." },
      { title: "DevOps and delivery", text: "Automate build, test, and deployment steps to reduce manual release effort and improve consistency." },
      { title: "Security foundations", text: "Apply least-privilege access, secrets handling, configuration management, and dependency hygiene." },
      { title: "Reliability and observability", text: "Define service health signals, backup and recovery expectations, alerting, and operational runbooks." },
    ],
    scenarios: [
      { title: "Cloud readiness", text: "Assess architecture, costs, access, operational practices, and migration constraints before a move." },
      { title: "Production hardening", text: "Improve deployment safety, environment separation, monitoring, and recovery procedures." },
      { title: "Scaling applications", text: "Address bottlenecks and capacity needs using measured workload behavior rather than premature complexity." },
    ],
    delivery: ["Review system behavior, risk, and service requirements", "Design environments, access, deployment, and recovery", "Implement infrastructure changes with reviewable automation", "Observe production signals and refine operational controls"],
    faqs: [
      { question: "Can you support our current cloud provider?", answer: "We can assess your existing environment and work within the provider and tooling your organization has selected, subject to access and technical fit." },
      { question: "Do you promise zero downtime?", answer: "No architecture can honestly guarantee zero downtime. We design for availability goals, tested recovery, controlled releases, and transparent service-level expectations." },
      { question: "Can you help with cloud migration?", answer: "Yes. We can plan migration by workload, identify dependencies and risks, and define validation and rollback strategies before production cutover." },
    ],
  },
};
