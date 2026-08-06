import { nepaliSchoolImages, portraitImages } from "./site-images";

export const school = {
  name: "Aatreya Academy",
  shortName: "AA",
  tagline: "Excellence in Education Since 2002",
  motto: "Learn · Lead · Inspire",
  location: "Lakeside Road, Pokhara 33700, Gandaki Province, Nepal",
  addressLine: "Lakeside Road, Pokhara",
  city: "Pokhara, Nepal",
  phone: "+977 61 555555",
  email: "info@aatreya.edu.np",
  founded: 2002,
  ages: "Ages 3–16",
  hours: "Sunday–Friday · 8:00 AM–4:30 PM",
  hoursShort: "Sun–Fri · 8:00 AM–4:30 PM",
  admissionSession: "2026–27",
  admissionNote: "Admissions open for the 2026–27 session (Early Years to Grade 9).",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Lakeside%20Road%2C%20Pokhara%2C%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/97761555555",
  },
} as const;

export const stats = [
  { value: "24", suffix: "+", label: "Years of Excellence" },
  { value: "700", suffix: "+", label: "Students Enrolled" },
  { value: "14", suffix: ":1", label: "Student–Teacher Ratio" },
  { value: "98", suffix: "%", label: "Board Exam Success" },
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
    learning: [
      { subject: "Literacy & Phonics", hours: "Daily" },
      { subject: "Creative Play & Arts", hours: "Daily" },
      { subject: "Movement & Motor Skills", hours: "Daily" },
    ],
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
    learning: [
      { subject: "Nepali, English & Maths", hours: "Core" },
      { subject: "Science & Social Studies", hours: "Core" },
      { subject: "Computing & Arts", hours: "Weekly" },
    ],
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
    learning: [
      { subject: "National Curriculum (NEB)", hours: "Core" },
      { subject: "Laboratory Sciences", hours: "Practical" },
      { subject: "Optional Mathematics & Computer", hours: "Elective" },
    ],
  },
] as const;

export const facilities = [
  {
    title: "Science & Technology Labs",
    description:
      "Purpose-built laboratories where students conduct experiments, build prototypes, and develop scientific reasoning.",
    image: nepaliSchoolImages.classroom,
    features: ["Physics, Chemistry & Biology", "Robotics corner"],
  },
  {
    title: "Computer & Innovation Lab",
    description:
      "Technology-rich spaces for digital literacy, coding, design, and hands-on problem solving.",
    image: nepaliSchoolImages.ruralCampus,
    features: ["1:1 devices in lessons", "Coding & design studio"],
  },
  {
    title: "Library & Learning Commons",
    description:
      "A quiet resource centre with thousands of volumes, digital archives, and dedicated study spaces for every age group.",
    image: nepaliSchoolImages.kathmanduSchool,
    features: ["8,000+ print & digital titles", "Group study rooms"],
  },
  {
    title: "Sports & Recreation",
    description:
      "Football pitch, basketball courts, and indoor facilities supporting physical education and inter-school competition.",
    image: nepaliSchoolImages.students,
    features: ["Football & basketball", "Athletics track"],
  },
  {
    title: "Arts & Performance Spaces",
    description:
      "Music rooms, art studios, and an auditorium for assemblies, drama productions, and cultural celebrations.",
    image: nepaliSchoolImages.villageStudents,
    features: ["Music & practice rooms", "400-seat auditorium"],
  },
  {
    title: "Safe Transportation",
    description:
      "Organised school bus routes designed for safe, dependable daily travel across the Pokhara valley.",
    image: nepaliSchoolImages.schoolJourney,
    features: ["GPS-tracked fleet", "Trained attendants"],
  },
] as const;

export const achievements = [
  {
    year: "2026",
    category: "Academics",
    title: "Regional science fair champions",
    detail: "Three projects advanced to national finals.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    year: "2025",
    category: "Sports",
    title: "District football cup winners",
    detail: "Senior team undefeated across the season.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    year: "2025",
    category: "Academics",
    title: "98% board examination pass rate",
    detail: "Consistent above-national-average results.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    year: "2024",
    category: "Community",
    title: "Environmental leadership award",
    detail: "Recognised for campus sustainability initiatives.",
    image: nepaliSchoolImages.villageStudents,
  },
] as const;

export const studentLife = [
  {
    title: "Athletics & Sport",
    description:
      "Football, basketball, badminton, and athletics build fitness, teamwork, and school pride.",
    image: nepaliSchoolImages.students,
  },
  {
    title: "Creative Arts",
    description:
      "Music, visual arts, and drama programmes help every student discover and develop their voice.",
    image: nepaliSchoolImages.villageStudents,
  },
  {
    title: "Clubs & Societies",
    description:
      "Robotics, debate, environment, and service clubs turn interests into lasting capabilities.",
    image: nepaliSchoolImages.schoolJourney,
  },
] as const;

export const events = [
  { date: "25 Jul", month: "2026", title: "Parent–teacher meetings", venue: "Main campus" },
  { date: "02 Aug", month: "2026", title: "Inter-house sports day", venue: "Sports grounds" },
  { date: "15 Aug", month: "2026", title: "Annual cultural programme", venue: "School auditorium" },
  { date: "01 Sep", month: "2026", title: "New academic session begins", venue: "All campuses" },
  { date: "20 Sep", month: "2026", title: "Science exhibition", venue: "STEM block" },
] as const;

export const news = [
  {
    date: "18 July 2026",
    category: "Achievement",
    title: "Students lead the regional science showcase",
    excerpt:
      "Three research projects from our secondary programme advanced to the national finals.",
    body: "Our secondary students presented engineering, environmental, and computer-science projects at the Gandaki regional science showcase. After two days of judging, three projects were selected to represent the region at the national finals later this year.",
    image: nepaliSchoolImages.classroom,
    featured: true,
  },
  {
    date: "02 July 2026",
    category: "Campus",
    title: "A week of books, authors and storytelling",
    excerpt:
      "Book week brought visiting authors, student readings, and a community book fair.",
    body: "From read-aloud mornings to a community book fair in the library, Book Week celebrated the joy of reading. Visiting authors led workshops and every student left with a book from the swap table.",
    image: nepaliSchoolImages.villageStudents,
    featured: false,
  },
  {
    date: "24 June 2026",
    category: "Sports",
    title: "Senior football team wins district cup",
    excerpt:
      "An undefeated season culminated in victory at the Gandaki district tournament.",
    body: "Our senior football side completed an unbeaten campaign, lifting the district cup after a 3–1 final win. Congratulations to the players, coaches, and the whole school community for their support.",
    image: nepaliSchoolImages.students,
    featured: false,
  },
  {
    date: "10 June 2026",
    category: "Campus",
    title: "New innovation lab opens to students",
    excerpt:
      "Coding, robotics, and design kits now live in the brand-new innovation lab.",
    body: "The innovation lab opened this term with 3D printers, robotics kits, and a dedicated coding curriculum for Primary and Secondary students.",
    image: nepaliSchoolImages.ruralCampus,
    featured: false,
  },
  {
    date: "28 May 2026",
    category: "Community",
    title: "Alumni share career insights at assembly",
    excerpt:
      "Former students returned to speak about university life and careers.",
    body: "Alumni now studying in Kathmandu, the United States, and Australia joined our assembly to share honest advice about university life, choosing pathways, and giving back.",
    image: nepaliSchoolImages.schoolGroup,
    featured: false,
  },
  {
    date: "15 May 2026",
    category: "Achievement",
    title: "Environmental club earns national recognition",
    excerpt:
      "The student-led green team was honoured for its campus sustainability work.",
    body: "From the school garden to a campus-wide recycling drive, our environmental club has been recognised nationally for sustainability leadership.",
    image: nepaliSchoolImages.kathmanduSchool,
    featured: false,
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
  image: portraitImages.principal,
  degree: "Ph.D. in Educational Psychology",
  message:
    "For over two decades, Aatreya Academy has stood for a simple conviction: every child deserves to be known, challenged, and supported. We combine rigorous academics with genuine care, preparing students not just for examinations but for lives of purpose and contribution.",
} as const;

export const teachers = [
  {
    name: "Dr. Sunita Thapa",
    role: "Principal",
    subject: "Educational Leadership",
    image: portraitImages.principal,
    bio: "Two decades of leadership in Nepali schools, committed to a child-first culture.",
  },
  {
    name: "Rajan Karki",
    role: "Head of Secondary",
    subject: "Mathematics",
    image: portraitImages.teacherSecondary,
    bio: "Mentors students through rigorous exam preparation with a problem-solving mindset.",
  },
  {
    name: "Binita Sharma",
    role: "Head of Primary",
    subject: "Early Literacy",
    image: portraitImages.teacherPrimary,
    bio: "Champions play-based literacy and joyful classrooms in the primary years.",
  },
  {
    name: "Dipak Adhikari",
    role: "Science Coordinator",
    subject: "Physics",
    image: portraitImages.teacherScience,
    bio: "Leads our laboratory programme and the award-winning science club.",
  },
  {
    name: "Sarita Gurung",
    role: "Teacher",
    subject: "English & Literature",
    image: portraitImages.teacherEnglish,
    bio: "Brings storytelling, debate, and a global outlook into every lesson.",
  },
  {
    name: "Anil Poudel",
    role: "Sports & PE",
    subject: "Physical Education",
    image: portraitImages.teacherSports,
    bio: "Trains inter-house teams and leads the district-champion football side.",
  },
  {
    name: "Nisha Shrestha",
    role: "Teacher",
    subject: "Arts & Music",
    image: portraitImages.teacherArts,
    bio: "Guides students in music, visual arts, and annual stage productions.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The dedication of the teachers here is unmatched. They foster deep academic understanding while nurturing the unique talents of our children.",
    author: "Ramesh & Sunita Adhikari",
    role: "Parents of a Grade 5 student",
    image: portraitImages.parentOne,
  },
  {
    quote:
      "Our son blossomed in the secondary programme, excelling in both sciences and sports. Aatreya stands out as the finest academy in Pokhara.",
    author: "Anjana Sharma",
    role: "Parent of a Grade 9 student",
    image: portraitImages.parentTwo,
  },
  {
    quote:
      "What sets Aatreya apart is the genuine care every teacher shows. My daughter has grown in confidence and academic ability beyond what we imagined possible.",
    author: "Prakash & Meera Ghimire",
    role: "Parents of a Grade 7 student",
    image: portraitImages.parentThree,
  },
] as const;

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "About School",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Principal's Message", href: "/about#principal" },
      { label: "Faculty", href: "/about#teachers" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Early Years", href: "/academics#early-years" },
      { label: "Primary School", href: "/academics#primary" },
      { label: "Secondary School", href: "/academics#secondary" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "About School", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Notice Board", href: "/notices" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const footerProgramLinks = [
  { label: "Early Years (Ages 3–5)", href: "/academics#early-years" },
  { label: "Primary School (Grades 1–5)", href: "/academics#primary" },
  { label: "Secondary School (Grades 6–10)", href: "/academics#secondary" },
  { label: "Curriculum & Methodology", href: "/academics" },
  { label: "Fee Structure", href: "/admissions#fees" },
] as const;
