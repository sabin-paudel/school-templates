import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../_components/forms";
import PageHero from "../_components/page-hero";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = {
  title: "Contact | Aatreya Academy",
  description:
    "Contact Aatreya Academy or arrange a campus visit in Pokhara, Nepal.",
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Aatreya"
        title="Let’s start a conversation."
        description="Ask a question, arrange a school tour or speak with our admissions office. We would be glad to hear from you."
        image={nepaliSchoolImages.ruralCampus}
        imageAlt="A school setting in Nepal"
      />
      <section className="section bg-cream">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold-dark">School office</p>
            <h2 className="mt-5 font-serif text-4xl text-forest">
              Visit or contact us
            </h2>
            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-gold-dark" />
                <div>
                  <h3 className="font-bold text-forest">Address</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Lakeside Road, Pokhara 33700
                    <br />
                    Gandaki Province, Nepal
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="shrink-0 text-gold-dark" />
                <div>
                  <h3 className="font-bold text-forest">Telephone</h3>
                  <Link
                    href="tel:+97761555555"
                    className="mt-1 block text-sm text-muted hover:text-forest"
                  >
                    +977 61 555555
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="shrink-0 text-gold-dark" />
                <div>
                  <h3 className="font-bold text-forest">Email</h3>
                  <Link
                    href="mailto:info@horizonacademy.edu.np"
                    className="mt-1 block text-sm text-muted hover:text-forest"
                  >
                    info@horizonacademy.edu.np
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="shrink-0 text-gold-dark" />
                <div>
                  <h3 className="font-bold text-forest">Office hours</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Sunday–Friday · 8:00 AM–4:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-line bg-paper p-6 sm:p-9 lg:p-12">
            <h2 className="font-serif text-3xl text-forest">
              Send us a message
            </h2>
            <p className="mb-8 mt-3 text-sm leading-6 text-muted">
              We normally reply within one working day.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
