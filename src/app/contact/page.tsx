import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../_components/forms";
import PageBanner from "../_components/ui/page-banner";
import Reveal from "../_components/ui/reveal";
import { school } from "../_data/site-content";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: `Contact | ${school.name}`,
  description: `Contact ${school.name} or arrange a campus visit in Pokhara, Nepal.`,
};

const contactItems = [
  { icon: MapPin, title: "Address", content: school.location, href: undefined },
  { icon: Phone, title: "Telephone", content: school.phone, href: `tel:${school.phone.replace(/\s/g, "")}` },
  { icon: Mail, title: "Email", content: school.email, href: `mailto:${school.email}` },
  { icon: Clock3, title: "Office Hours", content: school.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="Contact"
        title="Let's start a conversation."
        description="Ask a question, arrange a school tour, or speak with our admissions office. We would be glad to hear from you."
        image={nepaliSchoolImages.ruralCampus}
        imageAlt="A school setting in Nepal"
      />

      <section className="section-pad bg-warm">
        <div className="container-main grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="label">School Office</p>
            <h2 className="heading-md mt-4 text-ink">Visit or contact us</h2>
            <div className="mt-10 space-y-4">
              {contactItems.map(({ icon: Icon, title, content, href }) => (
                <div key={title} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-light shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-ink">{title}</h3>
                    {href ? (
                      <Link
                        href={href}
                        className="mt-0.5 block text-sm text-ink-light hover:text-primary transition-colors duration-150"
                      >
                        {content}
                      </Link>
                    ) : (
                      <p className="mt-0.5 text-sm text-ink-light">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white p-6 sm:p-10 rounded-xl shadow-sm">
              <h2 className="text-lg font-bold text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-light">
                We normally reply within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-main relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
              Visit Us
            </p>
            <h2 className="mt-3 heading-md text-white sm:text-2xl">
              We would love to meet you in person.
            </h2>
          </div>
          <Link href="/admissions" className="inline-flex items-center gap-2 rounded-lg bg-white/15 text-white hover:bg-white/25 px-6 py-3 text-sm font-semibold shadow-md transition-all duration-200">
            Start an application <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
