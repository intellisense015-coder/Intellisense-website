import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Read how IntelliSense Cloud collects, uses, protects, and retains information submitted through its website contact form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main className="privacy-page section-shell"><h1>Privacy notice</h1><p className="privacy-updated">Last updated: September 2026</p><h2>Information you submit</h2><p>If you use the project enquiry form, we receive the name, email, company (if supplied), area of interest, and project message you submit. The website sends this information to IntelliSense by email so we can respond. It is not written to a website database by this version of the site.</p><h2>How we use it</h2><p>We use enquiry details to reply, understand the request, and follow up about the project. Please do not submit passwords, payment details, confidential client records, or other sensitive information through this form.</p><h2>Service providers and security</h2><p>The form uses an email delivery provider and a rate-limiting service when configured for production. Those providers process limited information needed to send or protect the enquiry. The site applies request validation and security controls, but no internet transmission can be guaranteed risk-free.</p><h2>Retention and requests</h2><p>Enquiry emails are retained in the company mailbox under its normal retention practices. To ask about, correct, or request deletion of an enquiry, contact <a href={`mailto:${company.email}`}>{company.email}</a>.</p><h2>Cookies and analytics</h2><p>This version does not add advertising trackers or analytics scripts. Hosting providers may process basic technical request data to operate and secure the service.</p><p className="privacy-back"><Link href="/#contact">Return to IntelliSense ↗</Link></p></main>;
}
