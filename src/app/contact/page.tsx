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
  { icon: Phone, title: "Telephone", content: school.phone, href: `tel:${school.phone.replace(/\s/g, "")}` },
  { icon: Mail, title: "Email", content: school.email, href: `mailto:${school.email}` },
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

      <section className="section-pad bg-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-light to-transparent hidden lg:block" />
        <div className="container-main relative">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <p className="label">School Office</p>
              <h2 className="heading-md mt-4 text-ink">Visit or contact us</h2>
              <p className="text-body mt-4 text-sm">
                Our team is here to help with admissions, school tours, and general enquiries.
              </p>
              <div className="mt-10 space-y-4">
                {contactItems.map(({ icon: Icon, title, content, href }) => (
                  <div
                    key={title}
                    className="flex gap-5 p-6 bg-white rounded-2xl shadow-sm border border-line hover:shadow-md hover:border-primary transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary shrink-0">
                      <Icon size={20} className="text-white" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{title}</h3>
                      {href ? (
                        <Link
                          href={href}
                          className="mt-1 block text-sm text-ink-light hover:text-primary transition-colors duration-150"
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

            <div>
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-line">
                <h2 className="text-xl font-bold text-ink">Send us a message</h2>
                <p className="mt-2 text-sm text-ink-light">
                  We normally reply within one working day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-primary-dark via-primary to-primary py-16 sm:py-20">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="container-main relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
                Visit Us
              </p>
              <h2 className="mt-3 heading-md text-white sm:text-2xl">
                We would love to meet you in person.
              </h2>
              <p className="mt-2 text-sm text-stone max-w-md">
                Tour our campus, meet the educators, and see everyday learning in action.
              </p>
            </div>
            <Link
              href="/admissions"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Start an application
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
