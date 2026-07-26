"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Sparkles,
  Bell,
  School,
  Users,
  Play,
} from "lucide-react";
import { school, stats } from "./_data/site-content";
import { nepaliSchoolImages } from "./_data/site-images";
import PulseDashboard from "./_components/sections/pulse-dashboard";
import AcademicPathways from "./_components/sections/academic-pathways";
import CampusExperience from "./_components/sections/campus-experience";
import VoicesBoard from "./_components/sections/voices-board";
import AdmissionsFaq from "./_components/sections/admissions-faq";
import ContactSection from "./_components/sections/contact-section";

export default function HomePage() {
  const [userRole, setUserRole] = useState<string>("visitor");
  const [campusStatus, setCampusStatus] = useState({
    open: false,
    label: "Closed",
    time: "",
  });

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const nepalFormat = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23",
      });
      const dayName = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        weekday: "long",
      }).format(now);
      const displayTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      const parts = nepalFormat.formatToParts(now);
      const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0");
      const minute = parseInt(
        parts.find((p) => p.type === "minute")?.value || "0",
      );

      const isWeekend = dayName === "Saturday" || dayName === "Sunday";
      const isOpenHours = hour >= 10 && hour < 16;
      const open = !isWeekend && isOpenHours;
      const statusLabel = isWeekend
        ? "Weekend"
        : open
          ? "Open Now"
          : hour < 10
            ? "Not yet open"
            : "Closed";

      setCampusStatus({ open, label: statusLabel, time: displayTime });
    };
    updateStatus();
    const timer = setInterval(updateStatus, 10000);
    return () => clearInterval(timer);
  }, []);

  const getRoleActions = () => {
    switch (userRole) {
      case "parent":
        return {
          title: "Parent Resource Center",
          description:
            "Access academic reports, register for parent-teacher meetings, or connect with counselors.",
          links: [
            { label: "Book Meeting (July 25)", href: "/notices" },
            { label: "Term Syllabus", href: "/academics" },
            { label: "School Calendar", href: "/notices" },
          ],
        };
      case "student":
        return {
          title: "Student Portal Quick Access",
          description:
            "Check notice boards, register for co-curricular clubs, or view sports schedules.",
          links: [
            { label: "House Sports Signup", href: "/school-life" },
            { label: "First Term Timetable", href: "/notices" },
            { label: "Robotics & Debate Club", href: "/school-life" },
          ],
        };
      default:
        return {
          title: "Explore Aatreya Academy",
          description:
            "Welcome to Pokhara's premier learning community. Start your journey with our core pathways.",
          links: [
            { label: "Admissions Guide", href: "/admissions" },
            { label: "Virtual School Tour", href: "/gallery" },
            { label: "Fee & Scholar Details", href: "/admissions" },
          ],
        };
    }
  };

  const roleActions = getRoleActions();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-white min-h-screen text-ink overflow-hidden font-sans">
      {/* Announcement bar */}
      <div className="bg-primary text-white py-2 px-4 text-xs font-bold relative z-50">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-2 bg-success rounded-full animate-ping shrink-0" />
            <span className="flex items-center gap-1.5 uppercase tracking-wider">
              <Bell size={12} className="text-success" />
              Live Notice:
            </span>
            <span className="font-semibold line-clamp-1">
              Admissions open for the 2026&ndash;27 academic session (Early
              Years to Grade 9)
            </span>
          </div>
          <Link
            href="/admissions"
            className="flex items-center gap-1.5 hover:text-primary-light border-b border-white/30 hover:border-white transition-colors duration-200 py-0.5 shrink-0"
          >
            <span>Apply Online Now</span>
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[95dvh] flex items-center bg-warm pt-10 pb-16 lg:py-24 overflow-hidden border-b border-line"
      >
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-noise opacity-[0.02]" />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-bold tracking-wider uppercase border border-primary/10"
              >
                <Sparkles size={14} className="animate-pulse text-accent" />
                Empowering Generations Since 2002
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="display-lg text-ink text-balance leading-tight tracking-tight"
                >
                  Shaping{" "}
                  <span className="text-accent relative">Visionaries</span>,{" "}
                  <br />
                  Inspiring{" "}
                  <span className="text-primary font-extrabold">Leaders</span>.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-muted max-w-xl leading-relaxed text-balance"
                >
                  At {school.name}, we fuse high academic standards with deep
                  character development, guiding students in Pokhara to inquire,
                  learn, and lead globally.
                </motion.p>
              </div>

              {/* Portal selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-3xl border border-line shadow-xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light rounded-full blur-2xl -z-10" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-line pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-light">
                      Select Your Portal
                    </span>
                    <h3 className="text-sm font-bold text-ink">
                      Customized Quick Pathways
                    </h3>
                  </div>
                  <div className="flex bg-warm p-1 rounded-xl border border-line gap-1 shrink-0">
                    {(["visitor", "parent", "student"] as const).map((role) => (
                      <button
                        key={role}
                        onClick={() => setUserRole(role)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all capitalize ${
                          userRole === role
                            ? "bg-white text-primary shadow-sm"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.div
                  key={userRole}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-bold text-primary flex items-center gap-2">
                    <School size={18} className="text-accent shrink-0" />
                    {roleActions.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {roleActions.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {roleActions.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="px-4 py-2 bg-warm hover:bg-primary-light border border-line hover:border-primary/20 rounded-full text-xs font-bold text-ink hover:text-primary transition-all flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform text-light group-hover:text-primary"
                        />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link href="/admissions" className="btn btn-primary group">
                  <GraduationCap size={20} />
                  <span>Start Admission</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link href="/about" className="btn btn-outline group">
                  <span>Discover Our Legacy</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[3rem] overflow-hidden shadow-2xl bg-line border border-line"
              >
                <Image
                  src={nepaliSchoolImages.campus}
                  alt="Aatreya Academy Campus"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                <motion.div
                  style={{ y: y2 }}
                  initial={{ opacity: 0, x: 30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute right-6 bottom-6 w-1/3 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white hidden sm:block"
                >
                  <Image
                    src={nepaliSchoolImages.students}
                    alt="Active Learning at Aatreya"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute left-6 top-6 glass px-4 py-3 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3">
                  <div className={`size-3 rounded-full shrink-0 ${campusStatus.open ? "bg-success animate-pulse" : "bg-muted"}`} />
                  <div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-wider leading-none">Pokhara, Nepal</div>
                    <div className="text-sm font-extrabold text-ink mt-0.5 tracking-tight">{campusStatus.time || "08:00 AM"}</div>
                    <div className={`text-[9px] font-bold uppercase tracking-widest mt-0.5 leading-none ${campusStatus.open ? "text-success" : "text-muted"}`}>{campusStatus.label}</div>
                  </div>
                </div>

                <div className="absolute left-6 bottom-6 glass-dark text-white px-5 py-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-accent flex items-center justify-center text-white shrink-0">
                    <Users size={22} />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold tracking-tight">
                      700+
                    </div>
                    <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-none">
                      Enrollment
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -inset-4 border-2 border-primary/5 rounded-[3.5rem] -z-10 translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      <PulseDashboard />
      <AcademicPathways />
      <CampusExperience />
      <VoicesBoard />
      <AdmissionsFaq />
      <ContactSection />
    </div>
  );
}
