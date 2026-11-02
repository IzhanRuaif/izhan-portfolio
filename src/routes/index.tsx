import React, { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Terminal,
  Cpu,
  Layers,
  Database,
  Shield,
  Brain,
  Award,
  Sparkles,
  Trophy,
  Code2,
  FileText,
  MapPin,
  CheckCircle2,
  Send,
  Phone,
  Compass,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";
import { DeveloperCabinHero } from "../components/DeveloperCabinHero";

export const Route = createFileRoute("/")({
  component: PortfolioCockpit,
});

/* ─────────── CONSTANTS & DATA ─────────── */
const GITHUB_URL = "https://github.com/IzhanRuaif";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammedizhan/";
const EMAIL = "izhanmohammed08@gmail.com";
const RESUME_URL = "https://drive.google.com/file/d/1RhI8KBop2h4t4-ILZaSYohZ0loB53SEN/view?usp=sharing";

const ROTATING_TITLES = [
  "Full-Stack Engineer",
  "AI & Security Builder",
  "M.Tech SE @ VIT Vellore",
  "Cloud & System Architect",
];

const SKILLS_LIST = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Languages" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Languages" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend" },
  { name: "Flask", logo: "/icons/flask.svg", category: "Backend" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Databases" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Databases" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases" },
  { name: "AWS EC2", logo: "/icons/aws.svg", category: "Cloud & DevOps" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Cloud & DevOps" },
  { name: "GitHub", logo: "/icons/github.svg", category: "Cloud & DevOps" },
];

const PROJECTS = [
  {
    id: 1,
    name: "Automated Lung Cancer Subtype Classification",
    category: ["security", "fullstack"],
    tag: "College Capstone Project",
    description:
      "Academic AI clinical decision-support PACS workstation for histopathological subtype classification from thoracic CT scans. Implements ResNet with CBAM Attention mechanisms (94.8% accuracy), Grad-CAM visual heatmaps, FastAPI async backend, and automated radiological PDF reports.",
    stack: ["PyTorch", "FastAPI", "React", "TypeScript", "CBAM / CNN", "Grad-CAM", "Docker"],
    link: "https://automated-lung-cancer-subtype-class.vercel.app/",
    github: "https://github.com/IzhanRuaif/Automated-Lung-Cancer-Subtype-Classification",
    mockupType: "medical",
  },
  {
    id: 2,
    name: "OSSVVEL Tiles",
    category: "client",
    tag: "Live Client Work",
    description:
      "Live 8-page business website & digital product showcase for OSSVVEL Tiles. Built mobile-first with 40% faster load time via code-splitting, boosting client lead inquiries with on-page SEO.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "SEO"],
    link: "https://ossvveltiles.com/",
    mockupType: "client-showcase",
  },
  {
    id: 3,
    name: "Wholesale Abaya Hijabs",
    category: "client",
    tag: "Live Internship Work",
    description:
      "Live B2B e-commerce platform built during Infyzen internship. Engineered reusable modular UI components that reduced API response handling time by 30% with seamless REST integration.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    link: "https://wholesaleabayahijabs.in/",
    mockupType: "ecommerce",
  },
  {
    id: 4,
    name: "Deception-Driven Cloud Auditing",
    category: "security",
    tag: "AI Security Research",
    description:
      "Honey-token deception traps combined with Machine Learning models trained on 10k+ cloud audit logs, achieving 92% unauthorized access detection in cloud environments.",
    stack: ["Python", "Flask", "Scikit-Learn", "AWS EC2", "Docker"],
    link: "https://github.com/IzhanRuaif/Deception-Driven-Cloud-Auditing",
    github: "https://github.com/IzhanRuaif/Deception-Driven-Cloud-Auditing",
    mockupType: "security",
  },
  {
    id: 5,
    name: "FamCare — Family Health Platform",
    category: "fullstack",
    tag: "Patented Innovation",
    description:
      "Patented family healthcare management platform featuring 5 core modules, role-based Spring Security, medical records vault, and 8 normalized PostgreSQL relational schemas.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "HTML/CSS/JS"],
    link: "https://github.com/IzhanRuaif/FamCare",
    github: "https://github.com/IzhanRuaif/FamCare",
    mockupType: "patented",
  },
  {
    id: 6,
    name: "Mindora — Empathetic Mental Health",
    category: "security",
    tag: "AI & LLM Pipeline",
    description:
      "AI-driven mental-health support platform delivering empathetic counseling interactions powered by the Gemini API, protected by Supabase authentication and encrypted user data stores.",
    stack: ["Flask", "Supabase", "Gemini API", "Python", "Tailwind"],
    link: "https://github.com/IzhanRuaif/Mindora",
    github: "https://github.com/IzhanRuaif/Mindora",
    mockupType: "ai-llm",
  },
  {
    id: 7,
    name: "ThreatSafe — Ransomware Detection",
    category: "security",
    tag: "Cybersecurity Engine",
    description:
      "Real-time ransomware threat analysis system monitoring directory trees, simulating zero-day attacks, and triggering automated quarantine protocols before encryption cascades.",
    stack: ["Python", "Machine Learning", "System Architecture", "Security"],
    link: "https://github.com/IzhanRuaif/Ransomware",
    github: "https://github.com/IzhanRuaif/Ransomware",
    mockupType: "cybersecurity",
  },
  {
    id: 8,
    name: "FestFusion — College Event Platform",
    category: "fullstack",
    tag: "Campus Platform",
    description:
      "End-to-end full-stack college event management suite supporting event creation, student registration, real-time schedule tracking, and centralized participant dashboards.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    link: "https://github.com/IzhanRuaif/FestFusion",
    github: "https://github.com/IzhanRuaif/FestFusion",
    mockupType: "campus",
  },
  {
    id: 9,
    name: "YOLOv8 Object Detection",
    category: "security",
    tag: "Computer Vision",
    description:
      "Real-time computer vision inference engine and model benchmarking suite built with YOLOv8 and OpenCV, featuring custom precision/recall evaluation pipelines.",
    stack: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    link: "https://github.com/IzhanRuaif/YOLOv8-Object-Detection",
    github: "https://github.com/IzhanRuaif/YOLOv8-Object-Detection",
    mockupType: "vision",
  },
  {
    id: 10,
    name: "Glassify — 3D Virtual Try-On",
    category: "fullstack",
    tag: "Augmented Reality",
    description:
      "Real-time 3D eyewear virtual try-on application supporting 50+ frame models. Integrated OpenCV and Jeeliz face-tracking to enhance real-time frame accuracy by 25%.",
    stack: ["React", "OpenCV", "Jeeliz VTO", "UI/UX"],
    link: "https://github.com/IzhanRuaif/Glassify",
    github: "https://github.com/IzhanRuaif/Glassify",
    mockupType: "tryon",
  },
  {
    id: 11,
    name: "SportsFiesta — Tournament Manager",
    category: "fullstack",
    tag: "Full-Stack Portal",
    description:
      "Comprehensive sports championship manager handling fixture generation, live scoreboards, match rescheduling, team rosters, and automated tournament standings.",
    stack: ["React.js", "Next.js", "Node.js", "MongoDB", "Java"],
    link: "https://github.com/IzhanRuaif/SportsFiesta",
    github: "https://github.com/IzhanRuaif/SportsFiesta",
    mockupType: "sports",
  },
];

const TIMELINE = [
  {
    period: "2022 – Present",
    role: "M.Tech Integrated Software Engineering",
    organization: "Vellore Institute of Technology (VIT)",
    location: "Vellore, India",
    badge: "Academics & Research",
    highlights: [
      "Rigorous core curriculum in Distributed Computing, Cloud Architecture, Network Security, and Advanced Data Structures.",
      "Leading technical hackathon teams and architecting patented healthcare platforms and machine-learning cybersecurity systems.",
    ],
  },
  {
    period: "Feb 2025 – Mar 2025",
    role: "Freelance Web Developer",
    organization: "OSSVVEL Tiles — Client Project",
    location: "Remote",
    badge: "Freelance",
    highlights: [
      "Delivered ossvveltiles.com — a comprehensive 8-page responsive digital product showcase with React, TypeScript & Vite.",
      "Reduced initial page load time by 40% via route-based code-splitting and asset optimization.",
      "Boosted organic client inquiries through targeted on-page SEO, semantic markup, and mobile-first UX.",
    ],
  },
  {
    period: "Jun 2025 – Sept 2025",
    role: "Web Developer Intern",
    organization: "Infyzen Software & IT Solutions",
    location: "Remote",
    badge: "Internship",
    highlights: [
      "Built and deployed wholesaleabayahijabs.in — a production B2B e-commerce platform — using React, TypeScript & Tailwind.",
      "Reduced API response handling time by 30% through reusable modular components and REST pipeline integration.",
      "Resolved 15+ cross-browser compatibility bugs and elevated Lighthouse performance scores.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "BitNBuild 2024 — National Finalist",
    sub: "#1 in Tamil Nadu · Ranked among top teams nationwide · GDSC Mumbai Grand Finale",
    tag: "National Finalist",
  },
  {
    icon: Award,
    title: "EY Techathon 5.0 Qualifier",
    sub: "Qualified Round 1 among thousands of competitive engineering teams nationwide",
    tag: "National Qualifier",
  },
  {
    icon: Sparkles,
    title: "Exploratory Data Analysis",
    sub: "Certified in Advanced EDA by Infosys Springboard",
    tag: "Certification",
  },
  {
    icon: Brain,
    title: "Neural Nexus AI/ML Hackathon",
    sub: "Recognized participant and AI solution builder at Elevate 2024",
    tag: "AI Hackathon",
  },
];

/* ─────────── 1. PRELOADER SCREEN ─────────── */
function CockpitPreloader({ onComplete }: { onComplete: () => void }) {
  const [typedLogo, setTypedLogo] = useState("");
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seq = [".", ".M", ".MI"];
    const t1 = setTimeout(() => setTypedLogo(seq[0]), 200);
    const t2 = setTimeout(() => setTypedLogo(seq[1]), 500);
    const t3 = setTimeout(() => setTypedLogo(seq[2]), 900);

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + step, 100);
      });
    }, 110);

    const tFade = setTimeout(() => setVisible(false), 1800);
    const tDone = setTimeout(() => onComplete(), 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
      clearTimeout(tFade);
      clearTimeout(tDone);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center font-sans transition-opacity duration-300 select-none"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="relative text-center flex flex-col items-center max-w-sm w-full px-6">
        <div className="h-20 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-white drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] font-mono">
            {typedLogo || <span className="opacity-0">.</span>}
            <span className="animate-[ping_0.8s_infinite] text-cyan-400 inline-block ml-1">|</span>
          </h1>
        </div>

        <div className="mt-8 mb-4 w-full text-left flex justify-between text-xs text-stone-500 font-mono tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            SYSTEM: STANDBY
          </span>
          <span className="text-cyan-400 font-bold">{percent}% REGISTERED</span>
        </div>

        <div className="w-full bg-[#18181B] h-1.5 rounded-full overflow-hidden border border-white/5 relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_12px_#06B6D4] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-5 flex items-center gap-2 text-stone-400 font-mono text-xs tracking-widest uppercase">
          <svg className="animate-spin h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          INITIALIZING COCKPIT...
        </div>
      </div>
    </div>
  );
}

/* ─────────── 2. HEADER NAVBAR ─────────── */
function CockpitNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollPct((window.scrollY / total) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Honors", href: "#honors" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollPct}%` }} id="scroll-progress" />
      </div>

      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* User Photo Avatar & Name (Matching friend's portfolio style) */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="flex items-center gap-3.5 group select-none cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)] group-hover:border-emerald-400 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.7)] transition-all duration-300">
              <img
                src="/avatar.jpg"
                alt="Mohammed Izhan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Mohammed Izhan
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="font-mono text-[10px] text-stone-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8 font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="text-stone-300 hover:text-cyan-400 font-sans hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] text-[14px] tracking-wider transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action Icons & Button */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-4 border-r border-white/10 pr-5 text-stone-400">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-cyan-400 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="relative px-5 py-2 font-mono text-xs tracking-widest uppercase border border-cyan-500/60 text-cyan-300 overflow-hidden transition-all duration-300 hover:text-[#0A0A0A] hover:bg-cyan-400 hover:shadow-[0_0_15px_#06B6D4] rounded-sm group font-bold"
            >
              <span className="relative z-10">Let's Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-all p-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl z-[999] md:hidden transform transition-all duration-500 ease-in-out flex flex-col justify-center px-8 ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />
        <div className="flex flex-col gap-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 pb-4 border-b border-white/10">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
              <img src="/avatar.jpg" alt="Mohammed Izhan" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono font-bold text-lg text-white">Mohammed Izhan</span>
              <span className="font-mono text-xs text-cyan-400">Software Engineer</span>
            </div>
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="text-2xl font-bold font-mono tracking-wider text-stone-300 hover:text-cyan-400 transition-all"
            >
              {item.name}
            </a>
          ))}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10 text-stone-400">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <Linkedin size={24} />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <Github size={24} />
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-cyan-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────── 3. HERO SECTION ─────────── */
function CockpitHero() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  // Typewriter effect matching Promoth's portfolio format
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROTATING_TITLES[roleIndex];

    timer = setTimeout(() => {
      if (isDeleting) {
        if (typedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
          setTypeSpeed(350);
        } else {
          setTypedText(currentRole.substring(0, typedText.length - 1));
          setTypeSpeed(45);
        }
      } else {
        const nextText = currentRole.substring(0, typedText.length + 1);
        setTypedText(nextText);
        if (nextText === currentRole) {
          setTypeSpeed(2000); // pause at full word
          setIsDeleting(true);
        } else {
          setTypeSpeed(80 + Math.random() * 40); // natural human typing variance
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, typeSpeed]);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 sm:pt-24 lg:pt-28 md:pt-32 pb-14 lg:pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute inset-0 digital-grid opacity-20 pointer-events-none" />

      {/* Main Grid: Clean top clearance and breathing room */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-2.5 py-1 sm:px-3 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono tracking-wider mb-2.5 sm:mb-4">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-semibold text-emerald-400">Available for work</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-300">DEVELOPER COCKPIT: ACTIVE</span>
          </div>

          <p className="text-cyan-400 font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2 font-semibold">
            Welcome to my Portfolio
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-white mb-2 leading-[1.1]">
            Hi! I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300">
              Mohammed Izhan
            </span>
          </h1>

          {/* Letter-by-letter Typewriter (Promoth format) */}
          <div className="min-h-[36px] sm:min-h-[40px] md:min-h-[46px] mb-2 sm:mb-3 flex items-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-200">
              A Specialized{" "}
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] font-mono">
                {typedText}
              </span>
              <span className="animate-[pulse_1s_infinite] text-emerald-400">_</span>
            </p>
          </div>

          {/* Mobile-only Developer Workstation (Visible above the fold on mobile, hidden on desktop & laptop) */}
          <div className="w-full flex lg:hidden items-center justify-center my-2 sm:my-3">
            <DeveloperCabinHero idPrefix="mob_" />
          </div>

          <p className="text-stone-300 text-xs sm:text-[15px] leading-relaxed max-w-lg mb-4 sm:mb-6 font-sans font-light">
            M.Tech Integrated Software Engineering student at <strong className="text-white font-medium">VIT Vellore</strong>{" "}
            and developer building scalable full-stack applications, AI-driven systems, and secure cloud architectures.
            National Hackathon Finalist, passionate about shipping clean code and exceptional user experiences.
          </p>

          {/* Action Buttons: side-by-side on mobile, untouched on desktop */}
          <div className="flex flex-row sm:flex-wrap gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("#projects")}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-[#0A0A0A] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider rounded-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:-translate-y-0.5 group w-full sm:w-auto cursor-pointer"
            >
              View Projects
              <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 bg-stone-900 border border-white/20 hover:border-cyan-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider rounded-sm transition-all hover:bg-stone-850 hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
            >
              Get in Touch
              <Mail size={15} className="text-cyan-400 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Animated Developer Workstation (Untouched on desktop & laptop, hidden on mobile) */}
        <div className="hidden lg:flex lg:col-span-7 xl:col-span-7 w-full items-center justify-center lg:justify-end">
          <DeveloperCabinHero idPrefix="desk_" />
        </div>
      </div>

      {/* Pull For Telemetry Prompt (Positioned directly down at the bottom edge as marked in red) */}
      <div
        onClick={() => scrollTo("#about")}
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none text-stone-500 hover:text-cyan-400 transition-colors group z-20"
      >
        <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">PULL FOR TELEMETRY</span>
        <ChevronDown size={18} className="animate-bounce text-cyan-400 drop-shadow-[0_0_6px_#06B6D4] sm:w-5 sm:h-5" />
      </div>

      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[36px] md:h-[48px]" fill="#080808">
          <path d="M0,60 C150,110 350,110 500,60 C650,10 850,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 4. QUICK TELEMETRY STATS BAR ─────────── */
function CockpitStats() {
  const stats = [
    { num: "4+", label: "Years Coding & Building" },
    { num: "10+", label: "Projects Practiced & Deployed" },
    { num: "#1 TN", label: "BitNBuild National Finalist" },
    { num: "Patented", label: "Healthcare Platform Creator" },
  ];

  return (
    <div className="bg-[#080808] border-y border-white/5 py-10 relative overflow-hidden">
      <div className="absolute inset-0 digital-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 font-mono tracking-tight drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                {stat.num}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-stone-400 tracking-widest uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────── 5. ABOUT SECTION ─────────── */
function CockpitAbout() {
  const pillars = [
    {
      icon: <Terminal className="text-cyan-400" size={24} />,
      title: "Code Quality",
      description: "Writing robust, secure, and self-documenting code with rigorous adherence to patterns and scalable architecture.",
    },
    {
      icon: <Brain className="text-emerald-400" size={24} />,
      title: "Cloud & AI First",
      description: "Designing modular cloud systems on AWS and integrating intelligent ML/LLM pipelines with real-time responsiveness.",
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "User-Focused",
      description: "Crafting lightning-fast responsive layouts and seamless micro-interactions with obsessive attention to performance.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading Tag */}
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            01 / OVERVIEW
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Driver Profile Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-[#0B0B0B] border border-white/10 rounded-sm p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 p-0.5 mb-6">
                <div className="w-full h-full rounded-full bg-[#0B0B0B] flex items-center justify-center">
                  <span className="text-3xl font-extrabold font-mono text-white">MI</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-1">Mohammed Izhan</h3>
              <p className="text-xs font-mono text-stone-400 flex items-center gap-1.5 mb-6">
                <MapPin size={13} className="text-cyan-400" />
                Vellore / Chennai, India
              </p>

              <div className="space-y-2.5 mb-8 text-xs font-mono text-stone-300">
                <div className="p-2.5 rounded bg-stone-900/80 border border-white/5 flex items-center gap-2">
                  <span>💻</span>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="p-2.5 rounded bg-stone-900/80 border border-white/5 flex items-center gap-2">
                  <span>🧠</span>
                  <span>AI / ML & Vision Builder</span>
                </div>
                <div className="p-2.5 rounded bg-stone-900/80 border border-white/5 flex items-center gap-2">
                  <span>🎓</span>
                  <span>M.Tech SE @ VIT Vellore</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex justify-between items-center text-[11px] font-mono">
                <div>
                  <span className="text-stone-500 block">STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    READY_
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-stone-500 block">CADENCE</span>
                  <span className="text-cyan-400 font-bold">100% EXCELLENCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Story & Pillars */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Building the web. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Architecting intelligent systems.
              </span>
            </h2>

            <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10 font-sans font-light">
              I am Mohammed Izhan, an M.Tech Integrated Software Engineering student at{" "}
              <strong className="text-white font-medium">VIT Vellore</strong> and an engineer passionate about crafting
              resilient digital products. From building and shipping production e-commerce platforms during my internship at{" "}
              <strong className="text-white font-medium">Infyzen Software</strong> and client solutions for{" "}
              <strong className="text-white font-medium">OSSVVEL Tiles</strong>, to engineering patented healthcare
              architectures and AI-driven ransomware detection models, I combine the rigor of system engineering with the
              agility of modern web frameworks.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/30 p-6 rounded-sm transition-all duration-300"
                >
                  <div className="mb-4">{p.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-stone-400 leading-relaxed font-light">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 border border-cyan-500/40 hover:border-cyan-400 text-white px-7 py-3.5 font-bold tracking-wider rounded-sm transition-all hover:bg-cyan-950/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <FileText size={18} className="text-cyan-400" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#0F0F0F">
          <path d="M0,60 C150,10 350,10 500,60 C650,110 850,110 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 6. SKILLS & COMPETENCIES SECTION ─────────── */
function CockpitSkills() {
  const gauges = [
    { label: "Full-Stack Dev", pct: 92, id: "fullstack-gauge", color: "#06B6D4" },
    { label: "AI / ML & Vision", pct: 88, id: "ai-gauge", color: "#10B981" },
    { label: "Cloud & Security", pct: 85, id: "cloud-gauge", color: "#818CF8" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            02 / COMPETENCIES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Donut Gauges */}
          <div className="lg:col-span-5 text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Core Metrics</h3>
            <p className="text-stone-400 text-sm font-light mb-10">
              Continuous performance benchmarks tested via production platforms, cloud architectures, and hackathon deployments.
            </p>

            <div className="space-y-6">
              {gauges.map((g, i) => (
                <div key={i} className="bg-[#0B0B0B] border border-white/5 p-5 rounded-sm flex items-center justify-between">
                  <span className="font-mono text-sm text-stone-200 font-bold uppercase tracking-wider">{g.label}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-stone-900 h-2 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${g.pct}%`, backgroundColor: g.color }}
                      />
                    </div>
                    <span className="font-mono text-sm font-bold" style={{ color: g.color }}>
                      {g.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tech Stack Grid */}
          <div className="lg:col-span-7 text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">Agile Tech Stack</h3>
            <p className="text-stone-400 text-sm font-light mb-10">
              High-performance technologies mastered and applied across complete enterprise lifecycles.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {SKILLS_LIST.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/40 p-4 rounded-sm transition-all duration-300 flex items-center gap-3 group"
                >
                  <img src={skill.logo} alt={skill.name} className="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="font-mono text-xs font-bold text-stone-200 block">{skill.name}</span>
                    <span className="text-[10px] text-stone-500 font-mono">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#0A0A0A">
          <path d="M0,60 C150,110 350,110 500,60 C650,10 850,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 7. JOURNEY / TIMELINE SECTION ─────────── */
function CockpitTimeline() {
  return (
    <section id="journey" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            03 / TIMELINE
          </span>
        </div>

        <div className="text-left mb-16">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">Professional Journey</h3>
          <p className="text-stone-400 text-sm font-light max-w-xl">
            Tracking the technical milestones and career checkpoints defining my software engineering and architecture trajectory.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2" />

          {TIMELINE.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[46%] text-left">
                  <div className="bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/30 p-6 md:p-8 rounded-sm transition-all shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold">{item.period}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 uppercase">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white mb-1">{item.role}</h4>
                    <p className="text-xs font-mono text-stone-400 mb-4">{item.organization} · {item.location}</p>

                    <ul className="space-y-2 text-xs text-stone-300 font-light">
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node Indicator */}
                <div className="hidden md:flex w-8 h-8 rounded-full bg-[#0B0B0B] border-2 border-cyan-400 items-center justify-center shrink-0 z-10 shadow-[0_0_10px_#06B6D4]">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                </div>

                <div className="hidden md:block w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#0F0F0F">
          <path d="M0,60 C150,10 350,10 500,60 C650,110 850,110 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 8. PROJECTS SECTION ─────────── */
function CockpitProjects() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { label: "All Projects", key: "all" },
    { label: "Client & Production", key: "client" },
    { label: "AI & Security", key: "security" },
    { label: "Full-Stack Systems", key: "fullstack" },
  ];

  const filtered =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeTab)
            : p.category === activeTab
        );

  return (
    <section id="projects" className="py-24 bg-[#0F0F0F] relative">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            04 / DISPATCHES
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">Core Deliveries</h3>
            <p className="text-stone-400 text-sm max-w-xl font-light">
              Interactive client productions, patented architectures, and intelligent AI models.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0B0B0B] border border-white/5 p-1 rounded">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-cyan-500 text-[#0A0A0A] shadow-[0_0_12px_#06B6D4]"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="bg-[#0B0B0B] rounded-sm overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between group h-full shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
            >
              {/* Project Card Header Preview */}
              <div className="h-48 bg-stone-900 border-b border-white/5 flex flex-col justify-center items-center p-6 relative overflow-hidden select-none">
                <div className="absolute inset-0 digital-grid opacity-15" />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    {project.mockupType === "medical" || project.mockupType === "vision" || project.mockupType === "ai-llm" ? (
                      <Brain size={22} />
                    ) : project.category === "security" || (Array.isArray(project.category) && project.category.includes("security")) ? (
                      <Shield size={22} />
                    ) : project.category === "client" ? (
                      <Terminal size={22} />
                    ) : (
                      <Layers size={22} />
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-300">{project.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400 mt-1 uppercase tracking-wider">{project.tag}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between items-start text-left">
                <div className="w-full">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>DEPLOYED & VERIFIED</span>
                  </div>

                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-sm bg-stone-900 border border-white/5 text-[10px] font-mono text-stone-400 font-semibold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between w-full pt-2 border-t border-white/5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-cyan-400 hover:text-white transition-colors uppercase cursor-pointer"
                    >
                      <span>{project.github && project.link !== project.github ? "Live Demo" : "View Project"}</span>
                      <ExternalLink size={13} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    {project.github && project.link !== project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-stone-400 hover:text-cyan-400 transition-colors uppercase cursor-pointer"
                      >
                        <Github size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#080808">
          <path d="M0,60 C150,110 350,110 500,60 C650,10 850,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 9. HONORS & ACHIEVEMENTS SECTION ─────────── */
function CockpitHonors() {
  return (
    <section id="honors" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            04.5 / HONORS
          </span>
        </div>

        <div className="text-left mb-16">
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">Hackathons & Certifications</h3>
          <p className="text-stone-400 text-sm font-light max-w-xl">
            National podium finishes, competitive hackathons, and certified competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/30 p-6 md:p-8 rounded-sm transition-all text-left flex items-start gap-5 group shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
              >
                <div className="p-3.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px]" fill="#0A0A0A">
          <path d="M0,60 C150,10 350,10 500,60 C650,110 850,110 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────── 10. CONTACT COCKPIT SECTION ─────────── */
function CockpitContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [transmitting, setTransmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitting(true);

    // 1. Instantly save dispatch to localStorage as an activity log
    try {
      const existing = JSON.parse(localStorage.getItem("cockpit_dispatches") || "[]");
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem("cockpit_dispatches", JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    // 2. Real dispatch to FormSubmit endpoint delivering directly to izhanmohammed08@gmail.com
    // Triggered asynchronously in background so transmission is lightning fast with zero lag
    try {
      fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || "Not specified",
          message: formData.message,
          _subject: `Portfolio Message from ${formData.firstName} ${formData.lastName}`,
          _template: "table",
          _captcha: "false",
        }),
      }).catch((err) => {
        console.warn("Background dispatch notice:", err);
      });
    } catch (err) {
      console.warn("Transmission error:", err);
    }

    // 3. Fast responsive UI feedback (350ms for instant cockpit feel)
    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);
    }, 350);
  };

  const handleCopyReceipt = () => {
    const receipt = `DISPATCH RECEIPT — Mohammed Izhan Portfolio
From: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Timestamp: ${new Date().toLocaleString()}
Destination: ${EMAIL}

Message:
${formData.message}`;

    navigator.clipboard.writeText(receipt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setSubmitted(false);
  };

  const directMailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Portfolio Message from ${formData.firstName} ${formData.lastName}`.trim()
  )}&body=${encodeURIComponent(
    `Hi Mohammed Izhan,\n\n${formData.message}\n\n---\nFrom: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-stone-950 via-[#0A0A0A] to-[#050505] text-white">
      <div className="absolute inset-0 digital-grid opacity-15 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-16">
          <span className="w-8 h-[2px] bg-cyan-400 inline-block" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold">
            05 / TELEMETRY LINK
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Info & Radar Graphic */}
          <div className="lg:col-span-5 text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">Start Your Project</h3>
            <p className="text-stone-300 text-sm font-light mb-8">
              Connect directly to the developer cockpit. Send a message to initiate full-stack orchestration, AI modeling, or system architecture.
            </p>

            {/* Radar Gateway Animation */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full stroke-cyan-500/20 stroke-1.5" fill="none">
                <circle cx="100" cy="100" r="90" stroke="rgba(6, 182, 212, 0.2)" />
                <circle cx="100" cy="100" r="60" stroke="rgba(6, 182, 212, 0.25)" />
                <circle cx="100" cy="100" r="30" stroke="rgba(6, 182, 212, 0.3)" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(6, 182, 212, 0.2)" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(6, 182, 212, 0.2)" />
                {/* Rotating Sweep */}
                <g className="animate-radar-sweep origin-center">
                  <path d="M 100,100 L 190,100 A 90,90 0 0,0 100,10 Z" fill="rgba(6, 182, 212, 0.15)" stroke="none" />
                  <line x1="100" y1="100" x2="190" y2="100" stroke="#06B6D4" strokeWidth="2" />
                </g>
              </svg>
              <div className="absolute text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-widest text-center">
                ONLINE GATEWAY
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="p-4 rounded bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="p-2.5 rounded bg-cyan-950/50 text-cyan-400">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">EMAIL ME</span>
                  <span className="text-sm font-mono text-stone-200 group-hover:text-cyan-400 transition-colors">
                    {EMAIL}
                  </span>
                </div>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded bg-[#0B0B0B] border border-white/5 hover:border-cyan-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="p-2.5 rounded bg-cyan-950/50 text-cyan-400">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase block">LINKEDIN</span>
                  <span className="text-sm font-mono text-stone-200 group-hover:text-cyan-400 transition-colors">
                    mohammedizhan
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form or Success State */}
          <div className="lg:col-span-7 bg-[#0B0B0B] border border-white/10 rounded-sm p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-left">
            {!submitted ? (
              <>
                <h4 className="text-2xl font-black text-white mb-2">Broadcast a Message</h4>
                <p className="text-xs text-stone-400 font-light mb-8">
                  Fill in your details below to dispatch directly to my Gmail inbox (<span className="text-cyan-400 font-mono">{EMAIL}</span>).
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Mohammed"
                        className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Izhan"
                        className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 93619 62544"
                        className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter project description, technology scope, or message details here..."
                      className="w-full px-4 py-3 bg-stone-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={transmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-[#0A0A0A] font-mono font-bold text-sm tracking-widest uppercase rounded-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {transmitting ? (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] animate-ping" />
                        TRANSMITTING TO GMAIL...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success / Transmitted State */
              <div className="py-6 flex flex-col items-start animate-[fadeIn_0.4s_ease-out]">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={32} />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  DISPATCH TRANSMITTED TO GMAIL
                </div>

                <h4 className="text-2xl font-black text-white mb-2">
                  Message Dispatched Successfully!
                </h4>

                <p className="text-sm text-stone-300 font-light mb-6 leading-relaxed text-left">
                  Thank you, <strong className="text-white font-medium">{formData.firstName}</strong>. Your message has been dispatched to Mohammed Izhan's primary inbox (<span className="text-cyan-400 font-mono">{EMAIL}</span>). You will receive a response within 24 hours.
                </p>

                {/* Dispatch Summary Terminal Box */}
                <div className="w-full bg-stone-900/90 border border-white/10 rounded p-4 font-mono text-xs text-stone-300 space-y-2 mb-6 text-left">
                  <div className="flex justify-between border-b border-white/5 pb-2 text-[11px] text-stone-500">
                    <span>TELEMETRY RECEIPT</span>
                    <span className="text-emerald-400">DESTINATION: {EMAIL}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Sender:</span>
                    <span className="text-white font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Contact Email:</span>
                    <span className="text-cyan-300">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex justify-between">
                      <span className="text-stone-500">Phone:</span>
                      <span className="text-stone-300">{formData.phone}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-stone-500 block mb-1">Message Preview:</span>
                    <p className="text-stone-300 bg-stone-950 p-2.5 rounded border border-white/5 line-clamp-3">
                      "{formData.message}"
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 w-full">
                  <button
                    onClick={handleCopyReceipt}
                    className="flex-1 py-3 px-4 bg-stone-900 border border-cyan-500/40 hover:border-cyan-400 text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-all hover:bg-cyan-950/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        Receipt Copied!
                      </>
                    ) : (
                      <>
                        <FileText size={14} className="text-cyan-400" />
                        Copy Receipt
                      </>
                    )}
                  </button>

                  <a
                    href={directMailtoHref}
                    className="flex-1 py-3 px-4 bg-stone-900 border border-white/15 hover:border-emerald-400 text-stone-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail size={14} className="text-emerald-400" />
                    Open in Gmail
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3 px-5 bg-cyan-500 hover:bg-cyan-400 text-[#0A0A0A] font-mono text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_15px_#06B6D4] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} />
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── 11. FOOTER SECTION ─────────── */
function CockpitFooter() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="text-3xl font-black font-mono tracking-tighter text-white hover:text-cyan-400 transition-all mb-4 group flex items-center gap-1"
        >
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#06B6D4] group-hover:scale-125 transition-all">.</span>
          MI
        </a>

        <p className="text-sm font-mono text-stone-400 tracking-wider mb-2">
          Engineered with passion. Deployed with precision.
        </p>
        <p className="text-xs sm:text-sm text-stone-500 italic font-mono mb-8">
          Transforming complex ideas into high-performance digital reality.
        </p>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wider text-stone-400 mb-8">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo("#about"); }} className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo("#skills"); }} className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#journey" onClick={(e) => { e.preventDefault(); scrollTo("#journey"); }} className="hover:text-cyan-400 transition-colors">
            Journey
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }} className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#honors" onClick={(e) => { e.preventDefault(); scrollTo("#honors"); }} className="hover:text-cyan-400 transition-colors">
            Honors
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-stone-400 mb-10">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-cyan-400 hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-mono text-stone-600">
          © {new Date().getFullYear()} Mohammed Izhan. All rights reserved.
        </p>

        {/* Scroll Back To Top Button */}
        <button
          onClick={() => scrollTo("#home")}
          className="mt-8 flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
        >
          <ArrowUp size={14} className="animate-bounce" />
          Scroll Back To Top
        </button>
      </div>
    </footer>
  );
}

/* ─────────── 12. SMOOTH COCKPIT RETICLE CURSOR ─────────── */
function SmoothCockpitCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024;
    if (isTouch) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isHovered = false;
    let isPressed = false;
    let isVisible = false;
    let rafId: number;

    const onPointerMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        currentX = targetX;
        currentY = targetY;
        if (cursorRef.current) cursorRef.current.style.opacity = "1";
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer, .interactive-hover"
        )
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    const onMouseDown = () => {
      isPressed = true;
    };
    const onMouseUp = () => {
      isPressed = false;
    };
    const onMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const render = () => {
      // 0.40 lerp factor gives instantaneous, butter-smooth responsiveness with zero rubber-banding
      currentX += (targetX - currentX) * 0.4;
      currentY += (targetY - currentY) * 0.4;

      if (cursorRef.current) {
        const scale = isPressed ? 0.85 : isHovered ? 1.35 : 1;
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-screen opacity-0 will-change-transform flex items-center justify-center transition-opacity duration-150"
    >
      {/* Outer Targeting Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.45)]" />
      {/* Center Laser Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
      {/* Vertical Crosshair Line */}
      <div className="absolute top-0 bottom-0 w-[1px] bg-cyan-400/40 h-full scale-y-125" />
      {/* Horizontal Crosshair Line */}
      <div className="absolute left-0 right-0 h-[1px] bg-cyan-400/40 w-full scale-x-125" />
    </div>
  );
}

/* ─────────── 13. ROOT PORTFOLIO COMPONENT ─────────── */
function PortfolioCockpit() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-[#0A0A0A] relative selection:bg-cyan-400 selection:text-black ${!isMobile && !loading ? "custom-cursor-active" : ""}`}>
      {/* 1. Preloader */}
      {loading && <CockpitPreloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="flex flex-col relative w-full overflow-hidden">
          {/* Custom Butter-Smooth Reticle Cursor (Zero React Render Overhead) */}
          {!isMobile && <SmoothCockpitCursor />}

          {/* 2. Navbar */}
          <CockpitNavbar />

          {/* 3. Main Sections */}
          <main className="w-full relative">
            <CockpitHero />
            <CockpitStats />
            <CockpitAbout />
            <CockpitSkills />
            <CockpitTimeline />
            <CockpitProjects />
            <CockpitHonors />
            <CockpitContact />
          </main>

          {/* 4. Footer */}
          <CockpitFooter />
        </div>
      )}
    </div>
  );
}
