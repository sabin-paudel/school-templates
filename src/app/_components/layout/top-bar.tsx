import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { school } from "../../_data/site-content";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./social-icons";

export default function TopBar() {
  return (
    <div className="bg-primary-darker text-white/80">
      <div className="container flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-5 py-2">
          <a
            href={`tel:${school.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex"
          >
            <Phone size={12} className="text-accent" aria-hidden />
            {school.phone}
          </a>
          <a
            href={`mailto:${school.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
          >
            <Mail size={12} className="text-accent" aria-hidden />
            {school.email}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-accent" aria-hidden />
            <span className="hidden lg:inline">{school.location}</span>
            <span className="lg:hidden">{school.city}</span>
          </span>
          <span className="hidden items-center gap-1.5 lg:flex">
            <Clock3 size={12} className="text-accent" aria-hidden />
            {school.hoursShort}
          </span>
        </div>

        <div className="flex items-center gap-3 py-2">
          <span className="hidden items-center gap-1.5 font-medium text-accent md:flex">
            Admissions Open {school.admissionSession}
          </span>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2.5">
            <a
              href={school.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-white"
            >
              <FacebookIcon size={13} />
            </a>
            <a
              href={school.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <InstagramIcon size={13} />
            </a>
            <a
              href={school.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="transition-colors hover:text-white"
            >
              <YoutubeIcon size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
