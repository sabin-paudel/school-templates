import type { Metadata } from "next";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "../_components/forms";
import PageBanner from "../_components/ui/page-banner";
import SectionHeading from "../_components/ui/section-heading";
import CtaSection from "../_components/ui/cta-section";
import Reveal from "../_components/ui/reveal";
import { school } from "../_data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${school.name} or arrange a campus visit in Pokhara, Nepal.`,
};

const contactItems = [
  { title: "Address", content: school.location, icon: MapPin },
  {
    title: "Telephone",
    content: school.phone,
    href: `tel:${school.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    title: "Email",
    content: school.email,
    href: `mailto:${school.email}`,
    icon: Mail,
  },
  { title: "Office Hours", content: school.hours, icon: Clock },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        breadcrumb="Contact"
        title="Let&rsquo;s start a conversation."
        description="Ask a question, arrange a school tour, or speak with our admissions office. We would be glad to hear from you."
      />

      {/* Contact cards */}
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading
            label="Get in Touch"
            title="We are here to help."
            description="Reach the right team quickly with the contact details below."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ title, content, href, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="card h-full flex flex-col justify-between p-7 text-center">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="wp-title mt-4 text-xl">{title}</h3>
                  </div>
                  <div className="mt-4">
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-muted transition-colors hover:text-primary"
                      >
                        {content}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-muted">
                        {content}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map & Campus Visit */}
      <section className="section-pad bg-warm">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
            <Reveal>
              <div className="rounded-lg border border-line bg-white p-8 sm:p-10 shadow-sm">
                <p className="label">Send a Message</p>
                <h2 className="wp-title mt-2 text-3xl">Send us a message</h2>
                <p className="text-body mt-2 text-sm">
                  We normally reply within one working day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-lg border border-line img-frame">
                  <iframe
                    title={`Map showing ${school.name} in ${school.city}`}
                    src={school.mapEmbedUrl}
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full border-0"
                  />
                </div>
                <div className="rounded-lg bg-primary p-8 text-white shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="wp-title text-2xl !text-white">
                      Visit our campus
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      We welcome families to tour the campus, meet our
                      educators, and experience the atmosphere that makes{" "}
                      {school.name} unique. Appointments are available Sunday
                      through Friday.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-accent">
                      {school.location}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${school.phone.replace(/\s/g, "")}`}
                      className="btn btn-accent"
                    >
                      Call the School
                    </a>
                    <a
                      href={school.mapEmbedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-white-outline"
                    >
                      Get Directions <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        label="Visit Us"
        title="We would love to meet you in person."
        description="Tour our campus, meet the educators, and see everyday learning in action."
        primaryHref="/admissions"
        primaryText="Start an Application"
        secondaryHref="/academics"
        secondaryText="Explore Academics"
        variant="accent"
      />
    </>
  );
}
