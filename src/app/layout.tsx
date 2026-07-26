import type { Metadata } from "next";
import SiteFooter from "./_components/layout/site-footer";
import SiteHeader from "./_components/layout/site-header";
import { school } from "./_data/site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${school.name} | ${school.motto}`,
  description:
    "Aatreya Academy is a prestigious school in Pokhara offering excellent academics, caring teachers, and a rich student life from early years through secondary school.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
