import type { Metadata } from "next";
import SiteHeader from "./_components/layout/site-header";
import SiteFooter from "./_components/layout/site-footer";
import { school } from "./_data/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${school.name} | ${school.tagline}`,
    template: `%s | ${school.name}`,
  },
  description: `${school.name} is a prestigious school in Pokhara offering excellent academics, caring teachers, and a rich student life from early years through secondary school.`,
  keywords: [
    "school in Pokhara",
    "Aatreya Academy",
    "Nepal school",
    "admissions Pokhara",
    "Early Years",
    "Primary School",
    "Secondary School",
  ],
  metadataBase: new URL("https://aatreya.example.com"),
  openGraph: {
    title: `${school.name} | ${school.tagline}`,
    description:
      "A leading school in Pokhara combining rigorous academics with genuine care for every child.",
    type: "website",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
