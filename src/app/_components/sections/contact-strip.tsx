import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { school } from "../../_data/site-content";

export default function ContactStrip() {
  return (
    <section id="contact" className="border-t border-line bg-warm py-14">
      <div className="container-main">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold text-ink">Get in touch</h2>
            <p className="text-body mt-2 text-sm">
              We welcome enquiries from prospective families and community
              partners.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary mt-5"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-ink">Address</p>
              <p className="mt-1 text-sm text-ink-light">{school.location}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-ink">Telephone</p>
              <a
                href={`tel:${school.phone.replace(/\s/g, "")}`}
                className="mt-1 block text-sm text-ink-light hover:text-ink transition-colors duration-150"
              >
                {school.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-ink">Email</p>
              <a
                href={`mailto:${school.email}`}
                className="mt-1 block text-sm text-ink-light hover:text-ink transition-colors duration-150"
              >
                {school.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
