"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const fieldClass = "mt-2 w-full border border-line bg-paper px-4 py-3.5 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-gold/35";
const labelClass = "text-sm font-bold text-forest";

function SuccessMessage({ title }: { title: string }) {
  return <div className="border border-forest/20 bg-cream p-8 text-center"><CheckCircle2 className="mx-auto text-forest" size={38} /><h3 className="mt-4 font-serif text-2xl text-forest">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">This demo saved no personal data. Connect the form to your school backend before launch.</p></div>;
}

export function AdmissionForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <SuccessMessage title="Application received" />;

  return (
    <form onSubmit={submit} className="grid gap-6" aria-label="Student admission form">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>Student’s full name<input className={fieldClass} name="studentName" autoComplete="name" required /></label>
        <label className={labelClass}>Date of birth<input className={fieldClass} type="date" name="dateOfBirth" required /></label>
        <label className={labelClass}>Applying for<select className={fieldClass} name="grade" required defaultValue=""><option value="" disabled>Select grade</option><option>Early Years</option><option>Grade 1</option><option>Grade 2</option><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option><option>Grade 7</option><option>Grade 8</option><option>Grade 9</option><option>Grade 10</option></select></label>
        <label className={labelClass}>Current school<input className={fieldClass} name="currentSchool" /></label>
        <label className={labelClass}>Parent / guardian<input className={fieldClass} name="guardianName" autoComplete="name" required /></label>
        <label className={labelClass}>Phone number<input className={fieldClass} type="tel" name="phone" autoComplete="tel" required /></label>
        <label className={labelClass}>Email address<input className={fieldClass} type="email" name="email" autoComplete="email" required /></label>
        <label className={labelClass}>Preferred contact<select className={fieldClass} name="contactMethod"><option>Phone</option><option>Email</option><option>WhatsApp</option></select></label>
      </div>
      <label className={labelClass}>Anything we should know?<textarea className={`${fieldClass} min-h-32 resize-y`} name="notes" placeholder="Learning needs, interests or questions for our admissions team" /></label>
      <label className="flex items-start gap-3 text-sm leading-6 text-muted"><input type="checkbox" required className="mt-1 size-4 accent-[#123c33]" />I confirm that the information provided is correct and agree to be contacted about this application.</label>
      <button type="submit" className="button button-dark w-fit">Submit application <Send size={17} /></button>
    </form>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <SuccessMessage title="Message sent" />;

  return (
    <form onSubmit={submit} className="grid gap-6" aria-label="Contact form">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>Full name<input className={fieldClass} name="name" autoComplete="name" required /></label>
        <label className={labelClass}>Email address<input className={fieldClass} type="email" name="email" autoComplete="email" required /></label>
        <label className={labelClass}>Phone number<input className={fieldClass} type="tel" name="phone" autoComplete="tel" /></label>
        <label className={labelClass}>Enquiry type<select className={fieldClass} name="subject"><option>Admissions</option><option>Campus visit</option><option>Academics</option><option>General enquiry</option></select></label>
      </div>
      <label className={labelClass}>Your message<textarea className={`${fieldClass} min-h-40 resize-y`} name="message" required /></label>
      <button type="submit" className="button button-dark w-fit">Send message <Send size={17} /></button>
    </form>
  );
}
