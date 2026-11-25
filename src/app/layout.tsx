import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppLink } from "@/components/whatsapp-link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://intellisense.cloud"),
  title: { default: "AI Software & Custom Development | IntelliSense Cloud", template: "%s | IntelliSense Cloud" },
  description: "IntelliSense Cloud builds custom software, AI applications, workflow automation, web and mobile apps, data platforms, and cloud systems for businesses.",
  applicationName: "IntelliSense Cloud",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://intellisense.cloud", siteName: "IntelliSense Cloud", title: "AI Software, Automation & Custom Development", description: "Custom software, AI applications, workflow automation, web and mobile apps, data platforms, and cloud systems for businesses.", images: [{ url: "/images/intellisense-social.png", width: 1200, height: 630, alt: "IntelliSense Cloud — AI software, automation, and custom development." }] },
  twitter: { card: "summary_large_image", title: "AI Software & Custom Development | IntelliSense Cloud", description: "Custom software, AI applications, workflow automation, web and mobile apps, data platforms, and cloud systems for businesses.", images: ["/images/intellisense-social.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f5f7fb" };
// The proxy issues a fresh script nonce per request, so render request-specific HTML.
export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") || undefined;
  return <html lang="en"><body><Script nonce={nonce} src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" /><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<WhatsAppLink /></body></html>;
}
