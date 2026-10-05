"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { products } from "@/lib/content";

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const product = products[active];
  return <div className="product-showcase">
    <div className={`product-stage product-${product.accent}`}>
      <div className="product-light product-light-a"/><div className="product-light product-light-b"/>
      <AnimatePresence mode="wait"><motion.div className={`product-screen-main product-image-${product.accent}`} key={product.name} initial={reduced ? false : { opacity: 0, y: 12, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .3 }}>
        <Image src={product.image} alt={`${product.name} product interface supplied by IntelliSense Cloud`} fill sizes="(max-width: 760px) 92vw, 52vw" priority={active === 0} />
      </motion.div></AnimatePresence>
    </div>
    <div className="product-copy"><div className="product-switcher" role="tablist" aria-label="Choose a product">{products.map((item, i) => <button key={item.name} type="button" role="tab" aria-selected={active === i} aria-controls="product-panel" id={`product-tab-${i}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>{item.name}<span aria-hidden="true">↗</span></button>)}</div>
      <div id="product-panel" role="tabpanel" aria-labelledby={`product-tab-${active}`} className="product-detail" aria-live="polite"><AnimatePresence mode="wait"><motion.div key={product.name} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .22 }}><h3>{product.tagline}</h3><p className="product-description">{product.description}</p><ul className="product-features">{product.features.map(feature => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><a className="text-link" href={product.href}>{product.action}<span aria-hidden="true">↗</span></a></motion.div></AnimatePresence></div>
    </div>
  </div>;
}
