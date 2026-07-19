import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Lightbulb, Scale } from "lucide-react";
import PageHero from "../_components/page-hero";
import Reveal from "../_components/reveal";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = { title: "About | Horizon Academy", description: "Learn about Horizon Academy's purpose, values and educational approach." };

export default function AboutPage() {
  return <>
    <PageHero eyebrow="About Horizon" title="Rooted in Nepal. Ready for the world." description="We are a purposeful learning community in Pokhara where academic ambition and genuine care belong together." image={nepaliSchoolImages.students} imageAlt="Students and a teacher outside a school in Nepal" />
    <section className="section bg-paper"><Reveal className="section-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24"><div><p className="eyebrow text-gold-dark">Our story</p><h2 className="section-title mt-5">A school where every learner is known.</h2><p className="mt-7 text-lg leading-8 text-muted">Horizon Academy began in 2002 with a clear idea: children do their best work when expectations are high, relationships are strong and learning connects to real life.</p><p className="mt-5 leading-7 text-muted">Today, our community brings together families and educators from across Gandaki Province. We honour Nepali identity while giving students the knowledge, communication skills and confidence to participate anywhere in the world.</p></div><div className="relative aspect-[4/5]"><Image src={nepaliSchoolImages.villageStudents} alt="Nepali students standing together" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div></Reveal></section>
    <section className="section bg-cream"><div className="section-shell"><p className="eyebrow text-gold-dark">What guides us</p><h2 className="section-title mt-5">Values made visible every day.</h2><div className="mt-12 grid gap-px bg-line md:grid-cols-3">{[[Lightbulb,"Curiosity","We ask better questions, test ideas and treat mistakes as part of meaningful learning."],[HeartHandshake,"Care","We listen closely, act kindly and make sure every member of our community belongs."],[Scale,"Integrity","We do honest work, take responsibility and choose what is right even when it is difficult."]].map(([Icon,title,text]) => { const ValueIcon = Icon as typeof Lightbulb; return <article key={title as string} className="bg-paper p-8 lg:p-10"><ValueIcon className="text-gold-dark" size={28} /><h3 className="mt-8 font-serif text-3xl text-forest">{title as string}</h3><p className="mt-4 leading-7 text-muted">{text as string}</p></article>; })}</div><Link href="/contact" className="button button-dark mt-12">Visit our campus <ArrowRight size={17} /></Link></div></section>
  </>;
}
