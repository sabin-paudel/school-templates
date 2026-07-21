import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { school } from "../../_data/site-content";
import Reveal from "../ui/reveal";

export default function ContactStrip() {
  return (
    <section id="contact" className="border-t border-line bg-snow py-14">
      <div className="container-main">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="font-serif text-2xl text-navy">Get in touch</h2>
              <p className="prose-body mt-3 text-sm">
                We welcome enquiries from prospective families and community partners.
              </p>
              <Link href="/contact" className="btn btn-primary mt-6 text-[13px]">
                Contact Us
              </Link>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-navy">Address</p>
                <p className="mt-1 text-sm text-slate">{school.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-navy">Telephone</p>
                <a
                  href={`tel:${school.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-sm text-slate hover:text-navy"
                >
                  {school.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-navy">Email & Hours</p>
                <a
                  href={`mailto:${school.email}`}
                  className="mt-1 block text-sm text-slate hover:text-navy"
                >
                  {school.email}
                </a>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-slate">
                  <Clock size={12} />
                  {school.hours}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
