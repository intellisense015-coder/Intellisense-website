"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/#top"],
  ["About", "/#leadership"],
  ["Products", "/#products"],
  ["Services", "/#services"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell glass-surface">
        <Link href="/#top" className="brand" aria-label="IntelliSense Cloud home" onClick={() => setOpen(false)}>
          <Image src="/images/intellisense-mark.png" width={42} height={46} alt="" priority />
          <span>IntelliSense<span className="brand-cloud"> Cloud</span></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} navigation</span><span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>Start project </Link>
        </nav>
      </div>
    </header>
  );
}
