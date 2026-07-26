import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";
import { ContactForm } from "../_components/forms";
import PageHero from "../_components/ui/page-hero";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Contact | ${school.name}`,
  description: `Contact ${school.name} or arrange a campus visit in Pokhara, Nepal.`,
};

const contactItems = [
  { icon: MapPin, title: "Address", content: school.location },
  {
    icon: Phone,
    title: "Telephone",
    content: school.phone,
    href: `tel:${school.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: school.email,
    href: `mailto:${school.email}`,
  },
  { icon: Clock3, title: "Office Hours", content: school.hours },
];

const iconBg = [
  "bg-rose-100 text-rose-600",
  "bg-blue-100 text-blue-600",
  "bg-emerald-100 text-emerald-600",
  "bg-amber-100 text-amber-600",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let&rsquo;s start a conversation."
        description="Ask a question, arrange a school tour, or speak with our admissions office. We would be glad to hear from you."
      />

      {/* Contact cards grid */}
      <section className="section-pad bg-white">
        <div className="container">
          <Reveal className="text-center">
            <p className="label">Get in Touch</p>
            <h2 className="heading-md mt-4 text-ink">We are here to help.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ icon: Icon, title, content, href }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="card p-6 text-center transition-shadow duration-200 hover:shadow-lg">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg[index]}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-md mt-5 text-ink">{title}</h3>
                  {href ? (
                    <Link
                      href={href}
                      className="mt-2 block text-sm text-muted transition-colors duration-150 hover:text-primary"
                    >
                      {content}
                    </Link>
                  ) : (
                    <p className="mt-2 text-sm text-muted">{content}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map split */}
      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="card p-8 sm:p-10">
              <h2 className="font-serif text-xl text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-muted">
                We normally reply within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="label">Visit Our Campus</p>
            <h2 className="heading-md mt-4 text-ink">
              Come see everyday learning in action.
            </h2>
            <p className="text-body mt-4 text-sm">
              We welcome families to tour our campus, meet our educators, and
              experience the atmosphere that makes Aatreya Academy unique.
              Appointments are available Sunday through Friday.
            </p>
            <div className="mt-8 rounded-2xl border border-line overflow-hidden bg-white">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-primary/40" />
                  <p className="mt-3 text-sm text-muted px-6">
                    {school.location}
                  </p>
                </div>
              </div>
            </div>
            <Link
              href={`tel:${school.phone.replace(/\s/g, "")}`}
              className="btn btn-outline mt-6 w-fit"
            >
              <Phone size={16} /> Call the school
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaSection
        label="Visit Us"
        title="We would love to meet you in person."
        description="Tour our campus, meet the educators, and see everyday learning in action."
        href="/admissions"
        buttonText="Start an application"
        variant="primary"
      />
    </>
  );
}
