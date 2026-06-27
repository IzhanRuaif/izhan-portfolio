import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue, AnimatePresence, animate } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, ArrowUpRight, Code2, Cpu, Database,
  Wrench, Sparkles, Award, ExternalLink, MapPin, Trophy,
  Briefcase, GraduationCap, Rocket, FileText, Star, Menu, X, Shield, Brain, Layout,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

/* ─────────── LINKS ─────────── */
const GITHUB_URL = "https://github.com/IzhanRuaif";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohammedizhan/";
const EMAIL = "izhanmohammed08@gmail.com";
const RESUME_URL = "https://drive.google.com/file/d/1HU-7mBjRiduR4BXq2lPhVCTSp5cswsg-/view?usp=sharing";

/* ─────────── DATA ─────────── */
const SKILLS = [
  { icon: Code2, title: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML", "CSS"] },
  { icon: Layout, title: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap", "Thymeleaf", "Java Swing"] },
  { icon: Cpu, title: "Backend", items: ["Node.js", "Express", "Spring Boot", "Flask", "REST APIs", "JWT", "MERN Stack"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "PostgreSQL", "Supabase", "MySQL", "DBMS"] },
  { icon: Brain, title: "AI / ML & Vision", items: ["Scikit-Learn", "Pandas", "YOLOv8", "Computer Vision", "Machine Learning", "Digital Image Processing", "Exploratory Data Analysis"] },
  { icon: Shield, title: "Cloud & Security", items: ["AWS EC2", "Docker", "Cloud Security", "Cybersecurity", "Security Monitoring", "Ransomware Detection", "System Architecture"] },
  { icon: Sparkles, title: "Concepts & Practices", items: ["OOP", "Operating Systems", "Agile", "Full-Stack Development", "UI/UX", "SEO", "Team Management"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Vercel", "Postman", "Linux"] },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Infyzen Software & IT Solutions",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    points: [
      "Built and shipped wholesaleabayahijabs.in — a live B2B e-commerce platform — with React, TypeScript & Tailwind.",
      "Reduced API response handling time by 30% with reusable components and REST integration.",
      "Resolved 15+ cross-browser bugs and improved Lighthouse score in a 4-member team.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "OSSVVEL Tiles — Client Project",
    period: "Feb 2025 – Mar 2025",
    location: "Remote",
    points: [
      "Delivered ossvveltiles.com — a fully responsive 8-page business site with React, TypeScript, Vite & Tailwind.",
      "Cut page load time by 40% via code-splitting; boosted client lead inquiries with on-page SEO and mobile-first UX.",
    ],
  },
];

const PROJECTS = [
  {
    name: "OSSVVEL Tiles",
    tag: "Live · Client Work",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "SEO"],
    desc: "Live business website & digital product showcase for OSSVVEL Tiles — 8 pages, mobile-first, 40% faster load via code-splitting.",
    href: "https://ossvveltiles.com/",
    feature: true,
  },
  {
    name: "Wholesale Abaya Hijabs",
    tag: "Live · Internship",
    stack: ["React", "TypeScript", "Tailwind", "REST"],
    desc: "B2B e-commerce platform built during Infyzen internship — reusable components cut API handling time by 30%.",
    href: "https://wholesaleabayahijabs.in/",
    feature: true,
  },
  {
    name: "Deception-Driven Cloud Auditing",
    tag: "AI Security",
    stack: ["Python", "Flask", "Scikit-Learn", "AWS EC2", "Docker"],
    desc: "Honey-token deception traps + ML models trained on 10k+ audit logs — 92% unauthorized access detection.",
    href: "https://github.com/IzhanRuaif/Deception-Driven-Cloud-Auditing",
    feature: true,
  },
  {
    name: "FamCare — Family Health Platform",
    tag: "Full-Stack · Patented",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "HTML", "CSS", "JS"],
    desc: "Patented health platform with 5 modules, Spring Security and 8 normalized tables.",
    href: "https://github.com/IzhanRuaif/FamCare",
    feature: true,
  },
  {
    name: "Mindora",
    tag: "AI · Mental Health",
    stack: ["Flask", "Supabase", "Gemini API", "Python"],
    desc: "Mental-health support web app with empathetic AI responses powered by Gemini, Supabase auth and data storage.",
    href: "https://github.com/IzhanRuaif/Mindora",
  },
  {
    name: "ThreatSafe — Ransomware Detection",
    tag: "AI · Cybersecurity",
    stack: ["JavaScript", "Python", "ML", "System Architecture"],
    desc: "AI-powered ransomware detection — monitors folders in real time, simulates attacks and quarantines threats.",
    href: "https://github.com/IzhanRuaif/Ransomware",
  },
  {
    name: "FestFusion — College Event Platform",
    tag: "MERN · Full-Stack",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    desc: "Full-stack college event management platform — creation, registration, scheduling and participation in one place.",
    href: "https://github.com/IzhanRuaif/FestFusion",
  },
  {
    name: "YOLOv8 Object Detection",
    tag: "Computer Vision",
    stack: ["Python", "YOLOv8", "OpenCV", "ML"],
    desc: "Real-time object detection & model benchmarking platform built around YOLOv8 with custom evaluation pipelines.",
    href: "https://github.com/IzhanRuaif/YOLOv8-Object-Detection",
  },
  {
    name: "Glassify — 3D Virtual Try-On",
    tag: "Computer Vision",
    stack: ["React", "OpenCV", "Jeeliz VTO", "UI/UX"],
    desc: "Real-time 3D eyewear try-on supporting 50+ models; OpenCV improved frame accuracy by 25%.",
    href: "https://github.com/IzhanRuaif/Glassify",
  },
  {
    name: "SportsFiesta — Tournament Manager",
    tag: "Full-Stack",
    stack: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind", "Java"],
    desc: "Tournament management app — event creation, scheduling, leaderboards and participant flow.",
    href: "https://github.com/IzhanRuaif/SportsFiesta",
  },
];

const ACHIEVEMENTS = [
  { icon: Trophy, title: "BitNBuild 2024 — National Finalist", sub: "#1 in Tamil Nadu · 200+ teams · GDSC Mumbai Grand Finale" },
  { icon: Award, title: "EY Techathon 5.0 — Round 1 Qualifier", sub: "Qualified among thousands of teams nationwide" },
  { icon: Sparkles, title: "Exploratory Data Analysis", sub: "Infosys Springboard Certification" },
  { icon: Star, title: "Neural Nexus AI/ML Hackathon", sub: "Certificate of Participation · Elevate 2024" },
];

const MARQUEE_WORDS = ["FULL-STACK", "★", "AI BUILDER", "★", "PRODUCT-MINDED", "★", "HACKATHON FINALIST", "★", "M.TECH VIT", "★", "FREELANCE", "★"];

/* ─────────── HELPERS ─────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GoldCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40 });
  const sy = useSpring(y, { stiffness: 400, damping: 40 });
  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      aria-hidden
    >
      <div className="-translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / 0.35), transparent 60%)" }} />
    </motion.div>
  );
}

/* ─────────── SCROLL PROGRESS BAR ─────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[110] bg-gradient-gold glow-gold"
    />
  );
}

/* ─────────── PAGE CURTAIN ─────────── */
function PageCurtain() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-5xl sm:text-7xl font-bold shimmer-text"
            >
              MI
            </motion.div>
            <motion.div
              initial={{ width: 0 }} animate={{ width: 120 }} transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-gradient-gold mt-4 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground mt-4"
            >
              Loading portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────── MAGNETIC BUTTON ─────────── */
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const handle = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={handle} onMouseLeave={reset} style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─────────── ANIMATED COUNTER ─────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctl = animate(0, to, {
      duration: 1.8, ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setVal(Math.round(v)),
    });
    return () => ctl.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────── SPOTLIGHT CARD (mouse-tracked light + tilt) ─────────── */
function SpotlightCard({ children, className = "", as: As = "div", ...rest }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const srX = useSpring(rX, { stiffness: 200, damping: 20 });
  const srY = useSpring(rY, { stiffness: 200, damping: 20 });
  const handle = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
    rY.set(((mx / r.width) - 0.5) * 8);
    rX.set(-((my / r.height) - 0.5) * 8);
  };
  const reset = () => { rX.set(0); rY.set(0); };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ rotateX: srX, rotateY: srY, transformStyle: "preserve-3d" }}
      className={`spotlight-card perspective-1000 ${className}`}
      {...rest}
    >
      <As className="block h-full w-full" style={{ transform: "translateZ(0)" }}>
        {children}
      </As>
    </motion.div>
  );
}


/* ─────────── NAV ─────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 ${scrolled ? "glass-noir rounded-full" : ""} transition-all duration-500`}>
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm bg-gradient-gold text-[oklch(0.13_0_0)]">
              MI
              <span className="absolute inset-0 rounded-full ring-1 ring-[oklch(0.78_0.13_85)/0.5] animate-pulse-gold" />
            </div>
            <p className="hidden sm:block font-display text-sm font-bold tracking-wide text-foreground">Mohammed Izhan</p>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                 className="relative px-3 py-2 text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors group">
                {l.label}
                <span className="absolute left-3 right-3 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={RESUME_URL} target="_blank" rel="noreferrer"
               className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-gold text-[oklch(0.13_0_0)] hover:scale-105 transition-transform">
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary">
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-6 glass-noir rounded-2xl p-4 flex flex-col gap-2">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="px-3 py-2 text-sm text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─────────── HERO ─────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-30"
        style={{ background: "conic-gradient(from 0deg, transparent, oklch(0.78 0.13 85 / 0.6), transparent)", filter: "blur(60px)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— Portfolio</span>
              <span className="w-12 h-px bg-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Engineer · Builder · Finalist</span>
            </motion.div>

            <h1 className="font-display font-bold leading-[0.94] text-[clamp(3.7rem,10vw,6.8rem)] xl:text-[7.4rem] max-w-full">
              {["Mohammed", "Izhan"].map((word, wi) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    initial="hidden" animate="show"
                    transition={{ staggerChildren: 0.04, delayChildren: 0.4 + wi * 0.2 }}
                    className={`inline-block ${wi === 1 ? "shimmer-text italic" : "text-foreground"}`}
                  >
                    {word.split("").map((c, ci) => (
                      <motion.span
                        key={ci}
                        variants={{
                          hidden: { y: "110%", opacity: 0, rotateX: -90 },
                          show: { y: 0, opacity: 1, rotateX: 0 },
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block"
                        style={{ transformOrigin: "50% 100%" }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Full-stack engineer & AI builder. I design, build and ship products — from live client websites to ML-driven security systems.
              <span className="inline-block w-[2px] h-5 bg-primary ml-1 align-middle animate-blink" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a href="#projects" className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-[oklch(0.13_0_0)] font-semibold tracking-wide hover:scale-105 transition-transform glow-gold">
                  View projects
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary/30 text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-all">
                  <FileText className="w-4 h-4" /> Download Resume
                </a>
              </Magnetic>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="noir-card rounded-2xl p-6 grain">
              <div className="grain-overlay rounded-2xl" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">— Currently</p>
              <p className="font-display text-xl text-foreground leading-snug">
                M.Tech Integrated (Software Engineering) at <span className="text-gold">VIT Vellore</span> — open to internships, freelance work and collaborations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: 10, suf: "+", l: "Projects" },
                { v: 1, suf: "", pre: "#", l: "TN Rank" },
                { v: 4, suf: "+", l: "Years" },
              ].map((s, i) => (
                <motion.div key={s.l}
                  initial={{ opacity: 0, y: 20, rotateX: -30 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 1.1 + i * 0.1, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="noir-card rounded-xl p-4 text-center">
                  <p className="font-display text-2xl text-gold font-bold">
                    {(s as any).pre || ""}<Counter to={s.v} suffix={s.suf} />
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="mt-16 flex items-center justify-center"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────── MARQUEE ─────────── */
function Marquee() {
  return (
    <section className="relative py-8 border-y border-primary/20 bg-surface overflow-hidden marquee-mask">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
          <span key={i} className={`mx-8 font-display text-4xl sm:text-6xl font-bold ${w === "★" ? "text-primary" : "text-foreground/70"}`}>
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────── SECTION HEADER ─────────── */
function SectionHeader({ label, title, accent }: { label: string; title: string; accent?: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 mb-4">
        <span className="h-px w-10 bg-primary/50" />
        <span className="font-mono text-xs text-primary uppercase tracking-[0.3em] font-semibold">{label}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-6xl font-bold leading-[0.95] text-foreground">
        {title} {accent && <span className="text-gold italic">{accent}</span>}
      </h2>
    </Reveal>
  );
}

/* ─────────── ABOUT ─────────── */
function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="About" title="Engineer by craft," accent="builder by instinct." />

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
            <Reveal delay={1}>
              <p>
                I'm a software engineering student at <span className="text-foreground font-semibold">VIT Vellore</span> who treats every project like a product — measured in performance, polish, and the problems it actually solves.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                From shipping live client websites to training anomaly-detection models on 10k+ audit logs, I move comfortably across the stack — <span className="text-foreground font-medium">React / Next.js</span> on the front, <span className="text-foreground font-medium">Spring Boot / Flask / Node</span> on the back, and <span className="text-foreground font-medium">scikit-learn, YOLOv8 and Gemini</span> when the problem calls for intelligence.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                When I'm not in an IDE, I compete in national hackathons — <span className="text-foreground font-semibold">BitNBuild '24 finalist</span>, ranked <span className="text-gold font-semibold">#1 in Tamil Nadu</span> — and freelance on production sites for real clients.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 space-y-5">
            <Reveal delay={3}>
              <div className="flex flex-wrap gap-2">
                <Pill icon={GraduationCap}>M.Tech Integrated (SE) · 2022–2027</Pill>
                <Pill icon={MapPin}>Vellore, Tamil Nadu</Pill>
                <Pill icon={Rocket}>Open to internships & collabs</Pill>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-primary/25 bg-surface text-xs font-medium text-foreground">
      <Icon className="w-3.5 h-3.5 text-primary" /> {children}
    </span>
  );
}

/* ─────────── SKILLS ─────────── */
function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Skills" title="What I build" accent="with." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full noir-card rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-5">
                    <s.icon className="w-5 h-5 text-[oklch(0.13_0_0)]" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4 text-foreground">{s.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map(it => (
                      <span key={it} className="text-[11px] font-medium px-2.5 py-1 rounded-md border border-primary/20 text-muted-foreground bg-background/40">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── EXPERIENCE ─────────── */
function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label="Experience" title="Where I've" accent="shipped." />
        <div className="mt-16 space-y-6">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i}>
              <motion.div
                whileHover={{ x: 10 }}
                className="group grid md:grid-cols-12 gap-6 noir-card rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{e.period}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{e.location}</p>
                  <div className="mt-4 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[oklch(0.13_0_0)]" />
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl font-bold text-foreground">{e.role}</h3>
                  <p className="text-sm text-gold font-medium mt-1">{e.company}</p>
                  <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    {e.points.map((p, k) => (
                      <li key={k} className="flex gap-3">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── PROJECT CARD ─────────── */
function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const srX = useSpring(rX, { stiffness: 180, damping: 18 });
  const srY = useSpring(rY, { stiffness: 180, damping: 18 });
  const handle = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
    rY.set(((mx / r.width) - 0.5) * 10);
    rX.set(-((my / r.height) - 0.5) * 10);
  };
  const reset = () => { rX.set(0); rY.set(0); };
  return (
    <motion.a
      ref={ref}
      href={p.href} target="_blank" rel="noreferrer"
      onMouseMove={handle} onMouseLeave={reset}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ rotateX: srX, rotateY: srY, transformStyle: "preserve-3d" }}
      className="group spotlight-card perspective-1000 relative block h-full noir-card rounded-3xl overflow-hidden grain min-h-[320px]"
    >
      <div className="grain-overlay rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full p-7 flex flex-col" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-primary/30 text-primary backdrop-blur">
            {p.tag}
          </span>
          <motion.div whileHover={{ rotate: 45, scale: 1.1 }} className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[oklch(0.13_0_0)] transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        <div className="mt-auto pt-10">
          <h3 className={`font-display font-bold text-foreground group-hover:text-gold transition-colors leading-tight ${p.feature ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
            {p.name}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map(s => (
              <span key={s} className="text-[10px] font-medium px-2 py-1 rounded border border-primary/20 text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ─────────── PROJECTS ─────────── */
function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Projects" title="Selected" accent="work." />

        <div className="mt-16 grid md:grid-cols-6 gap-5">
          {PROJECTS.map((p, i) => {
            const span = p.feature ? "md:col-span-3" : "md:col-span-2";
            return (
              <Reveal key={p.name} delay={i} className={span}>
                <ProjectCard p={p} />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={2}>
          <div className="mt-10 text-center">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary hover:gap-4 transition-all">
              All work on GitHub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── AWARDS ─────────── */
function Awards() {
  return (
    <section id="awards" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="Awards" title="Awards &" accent="milestones." />
        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={i} delay={i}>
              <motion.div whileHover={{ y: -4 }} className="noir-card rounded-2xl p-7 flex gap-5 group hover:border-primary/50 transition-colors">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                  <a.icon className="w-6 h-6 text-[oklch(0.13_0_0)]" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-primary/40 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{a.sub}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── CONTACT ─────────── */
function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden bg-surface/60">
      <motion.div
        animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-25"
        style={{ background: "conic-gradient(from 180deg, transparent, oklch(0.78 0.13 85 / 0.6), transparent)", filter: "blur(80px)" }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="font-mono text-xs text-primary uppercase tracking-[0.4em] font-semibold">Contact</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-5xl sm:text-7xl font-bold leading-[0.95] text-foreground">
            Let's build <span className="shimmer-text italic">something great.</span>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Open to internships, freelance projects, and collaborations. I usually reply within a day.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <a href={`mailto:${EMAIL}`}
             className="group inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full bg-gradient-gold text-[oklch(0.13_0_0)] font-semibold text-base sm:text-lg hover:scale-105 transition-transform glow-gold">
            <Mail className="w-5 h-5" />
            {EMAIL}
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            {[
              { Icon: Phone, label: "+91 99409 06427", href: "tel:+919940906427" },
              { Icon: Github, label: "IzhanRuaif", href: GITHUB_URL },
              { Icon: Linkedin, label: "mohammedizhan", href: LINKEDIN_URL },
              { Icon: FileText, label: "Resume", href: RESUME_URL },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                 className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/25 bg-background/40 font-medium text-xs hover:border-primary hover:text-primary transition-colors">
                <Icon className="w-3.5 h-3.5" /> {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/20 py-10 px-6 bg-background">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Mohammed Izhan I · All rights reserved</p>
        <p>Crafted in Vellore, India</p>
      </div>
    </footer>
  );
}

/* ─────────── ROUTE ─────────── */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Izhan — Full-Stack Engineer & AI Builder" },
      { name: "description", content: "Portfolio of Mohammed Izhan I — full-stack developer, AI/ML enthusiast, hackathon finalist building products with React, Node, Python and Spring Boot." },
      { property: "og:title", content: "Mohammed Izhan — Full-Stack Engineer & AI Builder" },
      { property: "og:description", content: "Portfolio of Mohammed Izhan I — full-stack developer, AI/ML enthusiast, hackathon finalist." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="relative">
      <PageCurtain />
      <ScrollProgress />
      <GoldCursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
