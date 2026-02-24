import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import {
  ChevronRight, Shield, Server, Cpu, Layers,
  ArrowRight, Globe, Zap, Lock, CheckCircle2,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-datacenter.jpg";

// ─────────────────────────────────────────────────────────────
// Add to index.html:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
// Brand primary: #02377D
// ─────────────────────────────────────────────────────────────

// ── Animated Counter ──────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Floating Orb ──────────────────────────────────────────────
const Orb = ({ style, className }: { style?: React.CSSProperties; className?: string }) => (
  <motion.div
    className={`absolute rounded-full blur-[110px] pointer-events-none ${className ?? ""}`}
    style={style}
    animate={{ scale: [1, 1.14, 1], x: [0, 22, 0], y: [0, -22, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
);

// ── Services data ─────────────────────────────────────────────
const services = [
  {
    title: "Physical Security Systems",
    description: "CCTV, Access Control, Perimeter Protection & Intrusion Detection",
    image: "/images/service-physical-security.webp",
    icon: Shield,
    accent: "#02377D",
    tag: "Security",
  },
  {
    title: "Data Center Infrastructure",
    description: "Power, Cooling, Fire Suppression & Environmental Monitoring",
    image: "/images/service-data-center.webp",
    icon: Server,
    accent: "#0352B8",
    tag: "Infrastructure",
  },
  {
    title: "Low Current & ELV Systems",
    description: "Structured Cabling, IP Networks, Audio-Visual & BMS Integration",
    image: "/images/service-elv.webp",
    icon: Cpu,
    accent: "#F59E0B",
    tag: "ELV",
  },
  {
    title: "Integrated Platforms",
    description: "Unified Monitoring, Interoperability & Operations Support",
    image: "/images/service-integration.webp",
    icon: Layers,
    accent: "#10B981",
    tag: "Integration",
  },
];

const overviewItems = [
  "Physical Security Systems",
  "Data Center Infrastructure",
  "Low Current & ELV Systems",
  "System Integration & Operations Support",
];

const stats = [
  { value: 15,  suffix: "+", label: "Years of Excellence" },
  { value: 300, suffix: "+", label: "Projects Delivered"  },
  { value: 50,  suffix: "+", label: "Enterprise Clients"  },
  { value: 100, suffix: "%", label: "KSA Coverage"        },
];

// ── Main ──────────────────────────────────────────────────────
const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY     = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const heroOp    = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <Layout>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[640px] md:h-[780px] flex items-center overflow-hidden">
        {/* Parallax BG */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, y: heroY, scale: heroScale }}
        />

        {/* Layered overlays */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(135deg, rgba(2,55,125,0.92) 0%, rgba(2,55,125,0.75) 50%, rgba(3,82,184,0.55) 100%)" }} />
        <div className="absolute inset-0 opacity-30"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
               backgroundSize: "60px 60px",
             }} />

        {/* Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 -top-32 -right-32 pointer-events-none"
             style={{ background: "#3B82F6" }} />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[90px] opacity-20 bottom-0 left-0 pointer-events-none"
             style={{ background: "#60A5FA" }} />

        {/* Content */}
        <motion.div style={{ opacity: heroOp }} className="relative z-10 w-full">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-white/90">
                  AL-AZHAR AL-ARABIA
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Physical Security &amp;{" "}
                <span style={{ color: "#F59E0B" }}>Data Center</span>
                <br />Infrastructure Solutions
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg text-white/70 mb-10 max-w-xl leading-relaxed"
              >
                End-to-end engineering solutions for mission-critical environments across Saudi Arabia — where reliability, compliance, and security are essential.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ background: "#F59E0B", color: "#02377D", boxShadow: "0 8px 30px rgba(245,158,11,0.35)" }}
                >
                  OUR SERVICES <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-black text-sm tracking-wider px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating stat chips */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute right-8 bottom-28 hidden lg:flex flex-col gap-3"
        >
          {[
            { icon: Lock, label: "Mission-Critical Certified" },
            { icon: Globe, label: "KSA Nationwide Coverage"   },
            { icon: Zap,  label: "99.99% Uptime SLA"          },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md"
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <chip.icon className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs font-semibold">{chip.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 50 900 0 720 20C540 40 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-14 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-1 transition-all duration-300"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#02377D" }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="w-8 h-0.5 mx-auto mb-2 rounded-full transition-all duration-300 group-hover:w-14"
                     style={{ background: "#02377D" }} />
                <p className="text-gray-500 text-sm font-medium tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Bottom divider */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════════════════
          COMPANY OVERVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Soft brand orb */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none -top-32 -right-32"
             style={{ background: "#02377D" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.035]"
             style={{ backgroundImage: "radial-gradient(circle, #02377D 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
                   style={{ background: "#02377D0D", borderColor: "#02377D33" }}>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                  Company Overview
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-black leading-tight mb-6 text-gray-900"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Powering Data —{" "}
                <span style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Protecting Critical Infrastructure
                </span>
              </h2>

              <p className="text-gray-500 leading-relaxed mb-6 text-[15px]">
                AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in:
              </p>

              <ul className="space-y-3 mb-8">
                {overviewItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.09 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#02377D" }} />
                    <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-gray-500 leading-relaxed mb-10 text-[15px]">
                We provide end-to-end, turnkey solutions covering the complete project lifecycle—from concept development through engineering, installation, commissioning, and long-term operations support.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-black text-sm tracking-wider px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", boxShadow: "0 8px 24px #02377D30" }}
              >
                READ MORE <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden"
                   style={{ boxShadow: "0 30px 70px #02377D18" }}>
                <img
                  src="/images/overview-diagram.webp"
                  alt="Data Center Infrastructure Diagram"
                  className="w-full rounded-3xl"
                />
                {/* Overlay shine */}
                <div className="absolute inset-0 rounded-3xl"
                     style={{ background: "linear-gradient(135deg, #02377D0A, transparent 60%)" }} />
              </div>
              {/* Decorative corners */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl -z-10"
                   style={{ background: "linear-gradient(135deg, #F59E0B33, #F59E0B11)" }} />
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl -z-10"
                   style={{ background: "linear-gradient(135deg, #02377D22, #02377D0A)" }} />

              {/* Floating info badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-10 bg-white rounded-2xl px-5 py-4 flex items-center gap-3 hidden lg:flex"
                style={{ boxShadow: "0 12px 40px #02377D20", border: "1px solid #02377D14" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg, #02377D, #0352B8)" }}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold">End-to-End Solutions</p>
                  <p className="text-gray-400 text-xs">Full lifecycle coverage</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Section BG */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(160deg, #F8FAFF 0%, #EEF4FF 50%, #F5F8FF 100%)" }} />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.09] pointer-events-none top-0 right-0"
             style={{ background: "#02377D" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px]"
            >
              <div className="absolute top-0 left-0 right-12 bottom-12 rounded-3xl overflow-hidden"
                   style={{ boxShadow: "0 25px 60px #02377D18", border: "1px solid #02377D0F" }}>
                <img src="/images/about-img-1.webp" alt="Server infrastructure"
                     className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                     style={{ background: "linear-gradient(to top, #02377D22, transparent)" }} />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden"
                   style={{ boxShadow: "0 20px 50px #02377D14", border: "1px solid #02377D0F" }}>
                <img src="/images/about-img-2.webp" alt="Security technology"
                     className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                     style={{ background: "linear-gradient(to top, #02377D1A, transparent)" }} />
              </div>

              {/* Floating years badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-0 bg-white rounded-2xl px-5 py-4 flex items-center gap-3"
                style={{ boxShadow: "0 12px 40px #02377D1A", border: "1px solid #02377D14" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black"
                     style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", fontFamily: "'Syne',sans-serif" }}>
                  15+
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold">Years of</p>
                  <p className="text-gray-400 text-xs">Excellence in KSA</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
                   style={{ background: "#02377D0D", borderColor: "#02377D33" }}>
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                  About Us
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-black leading-tight mb-6 text-gray-900"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Engineering &amp; Technology{" "}
                <span style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Excellence in KSA
                </span>
              </h2>

              <p className="text-gray-500 leading-relaxed mb-10 text-[15px]">
                Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
              </p>

              {/* Vision & Mission mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group relative rounded-2xl p-6 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ border: "1px solid #02377D14", boxShadow: "0 4px 20px #02377D08" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px #02377D18"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px #02377D08"; }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                       style={{ background: "linear-gradient(90deg, #02377D, #0352B8)" }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                       style={{ background: "linear-gradient(135deg, #02377D, #0352B8)" }}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-2"
                      style={{ fontFamily: "'Syne', sans-serif" }}>Vision</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    To be the trusted partner in secure Critical Infrastructure and Data Center solutions.
                  </p>
                </motion.div>

                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 }}
                  className="group relative rounded-2xl p-6 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ border: "1px solid #F59E0B22", boxShadow: "0 4px 20px #F59E0B08" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px #F59E0B18"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px #F59E0B08"; }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-amber-500 to-orange-400" />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-amber-500 to-orange-400">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-2"
                      style={{ fontFamily: "'Syne', sans-serif" }}>Mission</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    To deliver end-to-end, secure, and resilient infrastructure solutions through engineering excellence.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.07] pointer-events-none bottom-0 left-0"
             style={{ background: "#02377D" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border"
              style={{ background: "#02377D0D", borderColor: "#02377D33" }}
            >
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 max-w-3xl mx-auto leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Specialized in{" "}
              <span style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Critical Infrastructure
              </span>{" "}Solutions
            </motion.h2>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl h-[420px] cursor-pointer"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.10)" }}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 transition-opacity duration-500"
                     style={{ background: `linear-gradient(to top, #02377Dee 0%, #02377D88 45%, transparent 100%)`, opacity: 0.88 }} />

                {/* Hover color wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `linear-gradient(135deg, ${service.accent}44, #02377D88)` }} />

                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                     style={{ background: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  {service.tag}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                       style={{ background: `${service.accent}33`, border: `1px solid ${service.accent}55` }}>
                    <service.icon className="w-5 h-5" style={{ color: service.accent === "#F59E0B" ? "#F59E0B" : "white" }} />
                  </div>
                  <h3 className="font-black text-white text-lg leading-tight mb-2"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-5">{service.description}</p>

                  {/* Learn more — slides up on hover */}
                  <div className="flex items-center gap-2 text-xs font-bold text-white/0 group-hover:text-white/90 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-black text-sm tracking-wider px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", boxShadow: "0 8px 24px #02377D28" }}
            >
              VIEW ALL SERVICES <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRAND DIVIDER BAND
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(135deg, #02377D 0%, #0352B8 50%, #02377D 100%)" }} />
        <div className="absolute inset-0 opacity-[0.07]"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),
                                 linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)`,
               backgroundSize: "40px 40px",
             }} />
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "rgba(0,0,0,0.1)" }} />

        <div className="relative container mx-auto px-6 lg:px-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-black text-white/90 tracking-wide"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Trusted by Saudi Arabia's most critical facilities —
            <span style={{ color: "#F59E0B" }}> built to last.</span>
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLIENTS SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(160deg, #F8FAFF 0%, #EEF4FF 60%, #F5F8FF 100%)" }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.07] pointer-events-none -top-32 left-1/2 -translate-x-1/2"
             style={{ background: "#02377D" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border"
              style={{ background: "#02377D0D", borderColor: "#02377D33" }}
            >
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                Trusted By
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Clients
            </motion.h2>
          </div>

          {/* Client logo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group bg-white rounded-2xl p-3 flex items-center justify-center h-20 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid #02377D0F",
                  boxShadow: "0 2px 12px rgba(2,55,125,0.06)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(2,55,125,0.14)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#02377D22";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(2,55,125,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#02377D0F";
                }}
              >
                <img
                  src={`https://al-azhar-awvy.vercel.app/assets/images/allimgs/clients/${num}.webp`}
                  alt={`Client ${num}`}
                  className="max-h-10 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-400"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(135deg, #02377D 0%, #0352B8 50%, #02377D 100%)" }} />
        <div className="absolute inset-0 opacity-[0.07]"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),
                                 linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)`,
               backgroundSize: "40px 40px",
             }} />
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.18] -top-16 -left-16 pointer-events-none"
             style={{ background: "#38BDF8" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.12] -bottom-16 -right-16 pointer-events-none"
             style={{ background: "#60A5FA" }} />
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

        <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl md:text-4xl font-black text-white mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Secure Your Infrastructure?
            </h3>
            <p className="text-white/60 text-[15px]">Let's build something mission-critical together.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-black text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: "white", color: "#02377D", boxShadow: "0 8px 32px rgba(2,55,125,0.30)" }}
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-black text-sm tracking-wider px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;