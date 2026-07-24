import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../_components/forms";
import PageBanner from "../_components/ui/page-banner";
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

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="Contact"
        title="Let&rsquo;s start a conversation."
        description="Ask a question, arrange a school tour, or speak with our admissions office. We would be glad to hear from you."
        image={nepaliSchoolImages.ruralCampus}
        imageAlt="A school setting in Nepal"
      />

      <section className="section-pad bg-warm">
        <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            {/* ---------- contact details, as a hairline list rather than boxed cards ---------- */}
            <div>
              <p className="label">School Office</p>
              <h2 className="heading-md mt-4 font-serif text-ink">
                Visit or contact us
              </h2>
              <p className="text-body mt-4 text-sm">
                Our team is here to help with admissions, school tours, and
                general enquiries.
              </p>
              <div className="mt-10 border-t border-line">
                {contactItems.map(({ icon: Icon, title, content, href }) => (
                  <div
                    key={title}
                    className="flex items-start gap-5 border-b border-line py-6"
                  >
                    <Icon size={19} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-sm font-semibold text-ink">
                        {title}
                      </h3>
                      {href ? (
                        <Link
                          href={href}
                          className="mt-1 block text-sm text-ink-light transition-colors duration-150 hover:text-primary"
                        >
                          {content}
                        </Link>
                      ) : (
                        <p className="mt-1 text-sm text-ink-light">{content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- form, in a bordered panel rather than a shadow card ---------- */}
            <div className="border border-ink/10 p-8 sm:p-10">
              <h2 className="font-serif text-xl text-ink">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-light">
                We normally reply within one working day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-dark py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(255,255,255,0.05) 43px, rgba(255,255,255,0.05) 44px)",
          }}
        />
        <div className="container relative mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="border-l border-white/15 pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              Visit Us
            </p>
            <h2 className="heading-md mt-3 font-serif text-white sm:text-2xl">
              We would love to meet you in person.
            </h2>
            <p className="mt-2 max-w-md text-sm text-stone">
              Tour our campus, meet the educators, and see everyday learning in
              action.
            </p>
          </div>
          <Link
            href="/admissions"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          >
            Start an application
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
