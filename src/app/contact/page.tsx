import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
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
  {
    icon: MapPin,
    title: "Address",
    content: school.location,
    href: undefined,
  },
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
  {
    icon: Clock3,
    title: "Office Hours",
    content: school.hours,
    href: undefined,
  },
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

      <section className="section-pad bg-white">
        <div className="container-main grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="label">School Office</p>
            <h2 className="heading-section mt-4 text-navy">Visit or contact us</h2>
            <div className="mt-10 space-y-8">
              {contactItems.map(({ icon: Icon, title, content, href }) => (
                <div key={title} className="flex gap-4">
                  <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-sm font-medium text-navy">{title}</h3>
                    {href ? (
                      <Link
                        href={href}
                        className="mt-1 block text-sm text-slate hover:text-navy"
                      >
                        {content}
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm text-slate">{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-line bg-snow p-6 sm:p-10">
              <h2 className="font-serif text-2xl text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-slate">
                We normally reply within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
