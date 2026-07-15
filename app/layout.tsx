import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const h = Libre_Baskerville({ subsets: ["latin"], variable: "--font-h", weight: ["400", "700"] });
const b = Source_Sans_3({ subsets: ["latin"], variable: "--font-b" });

export const metadata: Metadata = {
  title: "Adhikara Law \u2014 Firma Hukum & Konsultan Legal | Jakarta",
  description: "Adhikara Law adalah firma hukum dengan advokat berpengalaman di bidang korporasi, litigasi, dan legal compliance. Konsultasi pertama gratis.",
  openGraph: {
    title: "Adhikara Law \u2014 Mitra Hukum Terpercaya",
    description: "Adhikara Law adalah firma hukum dengan advokat berpengalaman di bidang korporasi, litigasi, dan legal compliance. Konsultasi pertama gratis.",
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {"@context": "https://schema.org", "@type": "LegalService", "name": "Adhikara Law", "description": "Firma hukum korporasi, litigasi, dan legal compliance"};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${h.variable} ${b.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
