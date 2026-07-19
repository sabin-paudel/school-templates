import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../_components/page-hero";
import { nepaliSchoolImages } from "../_data/site-images";

export const metadata: Metadata = { title: "Gallery | Horizon Academy", description: "Explore student life, learning and community moments from Horizon Academy." };
const photos=[
  {src:nepaliSchoolImages.students,title:"Together at school",credit:"Robert Stansfield / DFID",wide:true},
  {src:nepaliSchoolImages.villageStudents,title:"Friends and classmates",credit:"Bhupendra Shrestha"},
  {src:nepaliSchoolImages.ruralCampus,title:"Learning close to nature",credit:"Nirajan Pant"},
  {src:nepaliSchoolImages.schoolJourney,title:"The journey to school",credit:"Peeyush Tiwari"},
  {src:nepaliSchoolImages.kathmanduSchool,title:"School life in Kathmandu",credit:"Kamal Ratna Tuladhar",wide:true},
  {src:nepaliSchoolImages.schoolGroup,title:"Students and educators",credit:"Shree Tapi Secondary School"},
  {src:nepaliSchoolImages.classroom,title:"Focused learning",credit:"DFID UK"},
];
export default function GalleryPage(){return <><PageHero eyebrow="School gallery" title="Learning, friendship and everyday discovery." description="A glimpse into the people, places and shared experiences that make a school community feel alive." image={nepaliSchoolImages.kathmanduSchool} imageAlt="A school building and students in Kathmandu, Nepal"/><section className="section bg-paper"><div className="section-shell"><div className="mb-10 flex flex-wrap gap-3 text-sm font-bold"><span className="bg-forest px-5 py-2.5 text-white">All moments</span><span className="border border-line px-5 py-2.5 text-muted">Learning</span><span className="border border-line px-5 py-2.5 text-muted">Community</span><span className="border border-line px-5 py-2.5 text-muted">Campus</span></div><div className="grid auto-rows-[310px] gap-5 md:grid-cols-2 lg:grid-cols-3">{photos.map((photo)=><figure key={photo.title} className={`group relative overflow-hidden ${photo.wide ? "lg:col-span-2" : ""}`}><Image src={photo.src} alt={photo.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/><figcaption className="absolute inset-x-0 bottom-0 bg-forest/90 p-5 text-white"><p className="font-serif text-xl">{photo.title}</p><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/55">Photo: {photo.credit} · Wikimedia Commons</p></figcaption></figure>)}</div><div className="mt-12 border border-line bg-cream p-7 text-sm leading-6 text-muted">Photography is sourced from Wikimedia Commons and depicts school communities across Nepal. Images are used under their respective Creative Commons licences.</div><Link href="/contact" className="button button-dark mt-10">Arrange a school visit <ArrowRight size={17}/></Link></div></section></>}
