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

      {/* Contact details */}
      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeading
            label="Get in Touch"
            title="We are here to help."
            description="Reach the right team quickly with the contact details below."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ title, content, href, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="h-full border-t-2 border-ink pt-6">
                  <Icon size={20} className="text-light" />
                  <h3 className="heading-md mt-5 text-ink">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-body mt-2 block text-sm font-medium text-ink transition-colors hover:text-ink/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-body mt-2 text-sm font-medium text-ink">
                      {content}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map & Campus Visit */}
      <section className="section-pad bg-warm">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <Reveal>
              <div className="border border-line bg-white p-7 sm:p-12">
                <p className="label-dark">Send a Message</p>
                <h2 className="wp-title mt-3 text-3xl">Send us a message</h2>
                <p className="text-body mt-3 text-sm">
                  We normally reply within one working day.
                </p>
                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-8">
                <div className="border border-line bg-white p-2">
                  <iframe
                    title={`Map showing ${school.name} in ${school.city}`}
                    src={school.mapEmbedUrl}
                    width="100%"
                    height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full border-0 grayscale contrast-125"
                  />
                </div>
                <div className="bg-charcoal p-8 text-white sm:p-10">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    Visit our campus
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    We welcome families to tour the campus, meet our
                    educators, and experience the atmosphere that makes{" "}
                    {school.name} unique. Appointments are available Sunday
                    through Friday.
                  </p>
                  <p className="mt-5 flex items-start gap-2.5 text-sm font-semibold text-white">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-white/45" />
                    {school.location}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`tel:${school.phone.replace(/\s/g, "")}`}
                      className="btn btn-white btn-arrow group"
                    >
                      Call the School
                      <ArrowRight size={16} className="btn-arrow-icon" />
                    </a>
                    <a
                      href={school.mapEmbedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light"
                    >
                      Get Directions
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
