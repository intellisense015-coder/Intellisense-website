"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

function SocialIcon({ kind }: { kind: "linkedin" | "instagram" }) {
  return kind === "linkedin" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.4H2.1V22h3.1V8.4ZM3.65 2A1.82 1.82 0 1 0 3.7 5.64 1.82 1.82 0 0 0 3.65 2ZM22 13.9c0-4.1-2.2-6-5.2-6a4.5 4.5 0 0 0-4 2.2V8.4H9.7V22h3.1v-6.7c0-1.8.34-3.55 2.58-3.55 2.2 0 2.22 2.06 2.22 3.67V22H22v-8.1Z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="18" cy="6.4" r=".8" className="social-fill" /></svg>
  );
}

const exploreLinks = [
  ["Products", "/#products"],
  ["Services", "/#services"],
] as const;

const companyLinks = [
  ["Leadership", "/#leadership"],
  ["How we work", "/#approach"],
  ["Contact", "/#contact"],
] as const;

export default function Footer2() {
  return (
    <footer className="smooth-footer">
      <div className="smooth-footer-orbit smooth-footer-orbit-one" aria-hidden="true" />
      <div className="smooth-footer-orbit smooth-footer-orbit-two" aria-hidden="true" />
      <div className="section-shell smooth-footer-shell">
        <div className="smooth-footer-lead">
          <div className="smooth-footer-brand-block">
            <Link className="smooth-footer-brand" href="/#top" aria-label="IntelliSense Cloud home">
              <Image src="/images/intellisense-mark.png" width={49} height={53} alt="" />
              <span>IntelliSense <b>Cloud</b></span>
            </Link>
            <p>Build smarter. Automate faster.<br />Scale with intelligence.</p>
            <div className="smooth-footer-direct">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            </div>
          </div>
        </div>

        <div className="smooth-footer-links">
          <div className="smooth-footer-social-block">
            <span className="smooth-footer-label">Stay connected</span>
            <p>Useful software starts with a clear conversation.</p>
            <div className="smooth-footer-socials">
              <a href={company.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon kind="linkedin" /></a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SocialIcon kind="instagram" /></a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <div className="smooth-footer-column"><span className="smooth-footer-label">Explore</span>{exploreLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
            <div className="smooth-footer-column"><span className="smooth-footer-label">Company</span>{companyLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
            <div className="smooth-footer-column"><span className="smooth-footer-label">Contact</span><a href={`mailto:${company.email}`}>Email us</a><a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a><Link href="/privacy">Privacy</Link></div>
          </nav>
        </div>

        <div className="smooth-footer-bottom">
          <span>© 2026 IntelliSense Cloud. All rights reserved.</span>
          <div><Link href="/privacy">Privacy</Link><Link href="/#top">Back to top</Link></div>
        </div>
      </div>
    </footer>
  );
}
