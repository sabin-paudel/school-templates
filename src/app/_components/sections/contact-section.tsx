import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight, Clock3 } from "lucide-react";
import { school } from "../../_data/site-content";

const contactItems = [
  { icon: MapPin, label: "Address", value: school.location },
  { icon: Phone, label: "Phone", value: school.phone, href: `tel:${school.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: school.email, href: `mailto:${school.email}` },
  { icon: Clock3, label: "Office Hours", value: school.hours },
];

export default function ContactSection() {
  return (
    <section className="section-pad bg-warm relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <p className="label">Get in Touch</p>
            <h2 className="display-md mt-3 text-ink">We&rsquo;d love to hear from you.</h2>
            <p className="text-muted mt-3 text-sm max-w-md">
              Whether you have a question about admissions, want to tour our campus, or just want to say hello — our team is here.
            </p>

            <div className="mt-10 space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-light uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-ink hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-white rounded-3xl border border-line p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-ink">Ready to visit Aatreya Academy?</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                Schedule a campus tour, meet our educators, and experience everyday learning in action. We look forward to welcoming your family.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <Link href="/admissions" className="btn btn-outline">
                  Start Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
