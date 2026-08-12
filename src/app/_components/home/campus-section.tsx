import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { school } from "../../_data/site-content";
import { nepaliSchoolImages } from "../../_data/site-images";
import Reveal from "../ui/reveal";

export default function CampusSection() {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      {/* Panoramic background */}
      <div className="absolute inset-0">
        <Image
          src={nepaliSchoolImages.ruralCampus}
          alt={`${school.name} campus in ${school.city}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/55 to-near-black/30"
        />
      </div>

      <div className="container relative flex min-h-[80vh] flex-col justify-end py-20 lg:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="label flex items-center gap-4 !text-white/55">
              <span className="h-px w-12 bg-white/50" aria-hidden />
              Our Campus
            </p>
            <h2 className="display-lg mt-6 text-white">
              Lakeside Road,
              <br />
              Pokhara.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Set close to the calm of Phewa Lake and the ridge of the Annapurna
              range, our campus is a place where students can breathe, explore,
              and focus.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="btn btn-white btn-lg btn-arrow group">
                Plan a Campus Visit
                <ArrowRight size={18} className="btn-arrow-icon" />
              </Link>
              <span className="text-sm text-white/60">
                Tours available {school.hoursShort}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}