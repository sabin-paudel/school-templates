import type { Metadata } from "next";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon Academy | Learn, Lead, Inspire",
  description:
    "Horizon Academy is a welcoming school in Pokhara offering excellent academics, caring teachers and a rich student life from early years through secondary school.",
};

type PublicLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
