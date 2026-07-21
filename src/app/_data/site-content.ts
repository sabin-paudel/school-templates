import { nepaliSchoolImages } from "./site-images";

export const school = {
  name: "Aatreya Academy",
  tagline: "Excellence in Education Since 2002",
  motto: "Learn · Lead · Inspire",
  location: "Lakeside Road, Pokhara 33700, Gandaki Province, Nepal",
  phone: "+977 61 555555",
  email: "info@aatreya.edu.np",
  founded: 2002,
  ages: "Ages 3–16",
  hours: "Sunday–Friday · 8:00 AM–4:30 PM",
} as const;

export const stats = [
  { value: "24", suffix: "+", label: "Years of excellence" },
  { value: "700", suffix: "+", label: "Students enrolled" },
  { value: "14", suffix: ":1", label: "Student–teacher ratio" },
  { value: "98", suffix: "%", label: "Board exam success" },
] as const;

export const programs = [
  {
    id: "early-years",
    stage: "01",
    title: "Early Years",
    ages: "Ages 3–5",
    description:
      "A nurturing foundation built on play, language development, and confident first steps into structured learning.",
    image: nepaliSchoolImages.students,
    highlights: ["Play-based curriculum", "Social-emotional growth", "Bilingual exposure"],
  },
  {
    id: "primary",
    stage: "02",
    title: "Primary School",
    ages: "Grades 1–5",
    description:
      "Strong literacy and numeracy foundations enriched by inquiry, collaborative projects, and creative expression.",
    image: nepaliSchoolImages.classroom,
    highlights: ["Inquiry-led learning", "STEM foundations", "Arts integration"],
  },
  {
    id: "secondary",
    stage: "03",
    title: "Secondary School",
    ages: "Grades 6–10",
    description:
      "Rigorous academics with personal mentorship, preparing students for national examinations and life beyond.",
    image: nepaliSchoolImages.schoolGroup,
    highlights: ["Exam preparation", "Career guidance", "Leadership development"],
  },
] as const;

export const facilities = [
  {
    title: "Science & Technology Labs",
    description:
      "Purpose-built laboratories where students conduct experiments, build prototypes, and develop scientific reasoning.",
    image: nepaliSchoolImages.classroom,
  },
  {
    title: "Library & Learning Commons",
    description:
      "A quiet resource centre with thousands of volumes, digital archives, and dedicated study spaces for every age group.",
    image: nepaliSchoolImages.kathmanduSchool,
  },
  {
    title: "Sports & Recreation",
    description:
      "Football pitch, basketball courts, and indoor facilities supporting physical education and inter-school competition.",
    image: nepaliSchoolImages.students,
  },
  {
    title: "Arts & Performance Spaces",
    description:
      "Music rooms, art studios, and an auditorium for assemblies, drama productions, and cultural celebrations.",
    image: nepaliSchoolImages.villageStudents,
  },
] as const;

export const achievements = [
  { year: "2026", title: "Regional science fair champions", detail: "Three projects advanced to national finals." },
  { year: "2025", title: "District football cup winners", detail: "Senior team undefeated across the season." },
  { year: "2025", title: "98% board examination pass rate", detail: "Consistent above-national-average results." },
  { year: "2024", title: "Environmental leadership award", detail: "Recognised for campus sustainability initiatives." },
] as const;

export const studentLife = [
  {
    title: "Athletics & Sport",
    description: "Football, basketball, badminton, and athletics build fitness, teamwork, and school pride.",
    image: nepaliSchoolImages.students,
  },
  {
    title: "Creative Arts",
    description: "Music, visual arts, and drama programmes help every student discover and develop their voice.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    title: "Clubs & Societies",
    description: "Robotics, debate, environment, and service clubs turn interests into lasting capabilities.",
    image: nepaliSchoolImages.schoolJourney,
  },
] as const;

export const events = [
  { date: "25 Jul", month: "2026", title: "Parent–teacher meetings", venue: "Main campus" },
  { date: "02 Aug", month: "2026", title: "Inter-house sports day", venue: "Sports grounds" },
  { date: "15 Aug", month: "2026", title: "Annual cultural programme", venue: "School auditorium" },
  { date: "01 Sep", month: "2026", title: "New academic session begins", venue: "All campuses" },
] as const;

export const news = [
  {
    date: "18 July 2026",
    category: "Achievement",
    title: "Students lead the regional science showcase",
    excerpt: "Three research projects from our secondary programme advanced to the national finals.",
    image: nepaliSchoolImages.classroom,
  },
  {
    date: "02 July 2026",
    category: "Campus",
    title: "A week of books, authors and storytelling",
    excerpt: "Book week brought visiting authors, student readings, and a community book fair.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    date: "24 June 2026",
    category: "Sports",
    title: "Senior football team wins district cup",
    excerpt: "An undefeated season culminated in victory at the Gandaki district tournament.",
    image: nepaliSchoolImages.students,
  },
] as const;

export const notices = [
  {
    date: "19 July 2026",
    category: "Admissions",
    title: "Admissions open for the 2026–27 academic session",
    text: "Applications are now being accepted from Early Years through Grade 9. Families may apply online or arrange a campus visit.",
    pinned: true,
  },
  {
    date: "16 July 2026",
    category: "Academic",
    title: "First term assessment schedule published",
    text: "The assessment timetable and subject guidance have been shared with students and are available through the school office.",
    pinned: false,
  },
  {
    date: "11 July 2026",
    category: "Event",
    title: "Parent–teacher meeting: Saturday, 25 July",
    text: "Appointments will run from 9:00 AM to 2:00 PM. Families are asked to confirm their preferred slot with the class teacher.",
    pinned: false,
  },
  {
    date: "05 July 2026",
    category: "Transport",
    title: "Monsoon transport route update",
    text: "Two morning bus routes have revised collection times due to seasonal road conditions. Please review the updated schedule.",
    pinned: false,
  },
  {
    date: "28 June 2026",
    category: "Activities",
    title: "Inter-house sports registration",
    text: "Students interested in football, basketball, badminton and athletics can register with their house coordinator this week.",
    pinned: false,
  },
] as const;

export const faqs = [
  {
    question: "What age groups does Aatreya Academy accept?",
    answer:
      "We welcome students from age 3 through Grade 10, covering Early Years, Primary, and Secondary programmes.",
  },
  {
    question: "How do I apply for admission?",
    answer:
      "Complete the online enquiry form on our admissions page. Our team will contact you within two working days to arrange a campus visit and guide you through the process.",
  },
  {
    question: "Can we visit the school before applying?",
    answer:
      "Absolutely. We encourage families to tour the campus and observe a regular school day. Tours are available Sunday through Friday by appointment.",
  },
  {
    question: "What curriculum does the school follow?",
    answer:
      "Our programme follows Nepal's national curriculum, enriched with inquiry-based learning, digital literacy, arts, and a global outlook.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Merit-based and need-based scholarships are available for qualifying students. Please contact the admissions office for current criteria and deadlines.",
  },
] as const;

export const values = [
  {
    title: "Curiosity",
    description:
      "We ask better questions, test ideas, and treat mistakes as essential steps in meaningful learning.",
  },
  {
    title: "Care",
    description:
      "We listen closely, act kindly, and ensure every member of our community feels they belong.",
  },
  {
    title: "Integrity",
    description:
      "We do honest work, take responsibility, and choose what is right even when it is difficult.",
  },
] as const;

export const galleryPhotos = [
  { src: nepaliSchoolImages.students, title: "Together at school", credit: "Robert Stansfield / DFID", span: "large" as const },
  { src: nepaliSchoolImages.villageStudents, title: "Friends and classmates", credit: "Bhupendra Shrestha", span: "normal" as const },
  { src: nepaliSchoolImages.ruralCampus, title: "Learning close to nature", credit: "Nirajan Pant", span: "normal" as const },
  { src: nepaliSchoolImages.schoolJourney, title: "The journey to school", credit: "Peeyush Tiwari", span: "tall" as const },
  { src: nepaliSchoolImages.kathmanduSchool, title: "School life in Kathmandu", credit: "Kamal Ratna Tuladhar", span: "wide" as const },
  { src: nepaliSchoolImages.schoolGroup, title: "Students and educators", credit: "Shree Tapi Secondary School", span: "normal" as const },
  { src: nepaliSchoolImages.classroom, title: "Focused learning", credit: "DFID UK", span: "normal" as const },
] as const;

export const principal = {
  name: "Dr. Sunita Thapa",
  title: "Principal",
  image: nepaliSchoolImages.schoolGroup,
  message:
    "For over two decades, Aatreya Academy has stood for a simple conviction: every child deserves to be known, challenged, and supported. We combine rigorous academics with genuine care, preparing students not just for examinations but for lives of purpose and contribution.",
} as const;

export const testimonial = {
  quote:
    "Our daughter is challenged academically, but what matters most is that she is happy, confident, and genuinely excited to go to school each morning.",
  authors: "Anisha & Rohan Shrestha",
  role: "Parents of a Grade 7 student",
  image: nepaliSchoolImages.schoolJourney,
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "School Life", href: "/school-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
] as const;
