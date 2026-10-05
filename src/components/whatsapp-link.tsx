import { company } from "@/lib/content";

export function WhatsAppLink() {
  const message = encodeURIComponent("Hi IntelliSense Cloud, I’d like to talk about a project.");
  return <a className="whatsapp-link" href={`https://wa.me/${company.whatsapp}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with IntelliSense Cloud on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.02 3.2A12.62 12.62 0 0 0 5.18 22.27L3.5 28.4l6.28-1.65A12.62 12.62 0 1 0 16.02 3.2Zm0 22.97a10.3 10.3 0 0 1-5.25-1.44l-.38-.22-3.73.98.99-3.64-.25-.4a10.34 10.34 0 1 1 8.62 4.72Zm5.67-7.74c-.31-.16-1.84-.91-2.12-1.02-.28-.1-.49-.16-.69.16-.21.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.07-.31-.16-1.3-.48-2.48-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.69-1.67-.95-2.29-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58s1.1 2.99 1.26 3.19c.15.21 2.17 3.31 5.27 4.64.74.32 1.32.51 1.77.65.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.47.26-.73.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z"/></svg></a>;
}
