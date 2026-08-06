import { school } from "../../_data/site-content";
import SectionHeading from "../ui/section-heading";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export default function GoogleMapSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <SectionHeading
          label="Our Location"
          title="Visit our campus in Pokhara."
          description="Located along Lakeside Road with convenient transportation and easy access from across the valley."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="card p-8 lg:col-span-1 bg-warm">
            <h3 className="wp-title text-xl">Campus Address</h3>
            <div className="mt-2 h-0.5 w-10 bg-accent" />
            <ul className="mt-6 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{school.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href={`tel:${school.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {school.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-primary" />
                <a href={`mailto:${school.email}`} className="hover:text-primary">
                  {school.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>{school.hours}</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-line img-frame lg:col-span-2">
            <iframe
              title={`Map showing ${school.name} in ${school.city}`}
              src={school.mapEmbedUrl}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
