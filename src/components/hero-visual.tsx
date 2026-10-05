"use client";

import Image from "next/image";

export function HeroScene() {
  return (
    <section className="hero-scroll-track" id="top" aria-label="IntelliSense Cloud introduction">
      <div className="hero section-shell">
        <div className="hero-copy">
          <h1 id="hero-title">Build Smarter.<br /><span>Automate Faster.</span><br />Scale with Intelligence.</h1>
          <p className="hero-description">We design and build intelligent software, AI automations, and digital products for teams ready to improve how work gets done. From first architecture to ongoing optimization, we turn complex workflows into dependable tools that help businesses move forward.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start Project <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#products">Explore Products <span aria-hidden="true">↓</span></a>
            <a className="hero-expert-link" href="https://wa.me/923090098555" target="_blank" rel="noopener noreferrer">Talk to an Expert <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="IntelliSense Cloud animated robot">
          <Image
            className="hero-robot-image"
            src="/images/robot/hero-robot.gif"
            alt=""
            width={1080}
            height={1350}
            unoptimized
            priority
            sizes="(max-width: 760px) 80vw, 44vw"
          />
        </div>
      </div>
    </section>
  );
}
