import { motion, useInView } from "framer-motion";
import {
  Shield, Server, Eye, Target, Cpu, Layers,
  ArrowRight, Globe, Zap, Lock,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

// ─────────────────────────────────────────────────────────────
// NOTE: Add to your global CSS or index.html:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500&display=swap" rel="stylesheet">
//
// Brand primary: #02377D  (deep navy blue)
// ─────────────────────────────────────────────────────────────

// ── Animated Counter ─────────────────────────────────────────
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

// ── Floating Orb ─────────────────────────────────────────────
const Orb = ({ className, style }: { className: string; style?: React.CSSProperties }): JSX.Element => (
  <motion.div
    className={`absolute rounded-full blur-[110px] pointer-events-none ${className}`}
    style={style}
    animate={{ scale: [1, 1.13, 1], x: [0, 20, 0], y: [0, -20, 0] }}
    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
  />
);

// ── Spec Card ────────────────────────────────────────────────
const SpecCard = ({
  icon: Icon, title, desc, hoverBg, barColor, iconBg, index,
}: {
  icon: any; title: string; desc: string;
  hoverBg: string; barColor: string; iconBg: string; index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 h-full
                      shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#02377D]/10">
        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${barColor}`} />
        {/* Hover wash */}
        <div className={`absolute inset-0 ${hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconBg} shadow-md`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-black text-gray-900 text-lg mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}>
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-gray-400
                          group-hover:text-[#02377D] transition-colors">
            Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Main ─────────────────────────────────────────────────────
const About = () => {
  const stats = [
    { value: 15,  suffix: "+", label: "Years of Excellence" },
    { value: 300, suffix: "+", label: "Projects Delivered"  },
    { value: 50,  suffix: "+", label: "Enterprise Clients"  },
    { value: 100, suffix: "%", label: "KSA Coverage"        },
  ];

  const specializations = [
    {
      icon: Shield,
      title: "Physical Security Systems",
      desc: "CCTV surveillance, access control, perimeter protection, intrusion detection, and full installation & integration services.",
      hoverBg:  "bg-gradient-to-br from-[#02377D]/5 to-[#02377D]/10",
      barColor: "bg-[#02377D]",
      iconBg:   "bg-gradient-to-br from-[#02377D] to-[#0352B8]",
    },
    {
      icon: Server,
      title: "Data Center Infrastructure",
      desc: "Precision power & cooling, fire suppression, environmental monitoring, and ELV & network solutions for mission-critical facilities.",
      hoverBg:  "bg-gradient-to-br from-sky-50 to-[#02377D]/10",
      barColor: "bg-gradient-to-r from-[#02377D] to-sky-500",
      iconBg:   "bg-gradient-to-br from-sky-500 to-[#02377D]",
    },
    {
      icon: Cpu,
      title: "Low Current & ELV Systems",
      desc: "Structured cabling, IP networks, audio-visual, PA/VA systems, and BMS integration for intelligent buildings.",
      hoverBg:  "bg-gradient-to-br from-amber-50 to-orange-50",
      barColor: "bg-gradient-to-r from-amber-500 to-orange-400",
      iconBg:   "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      icon: Layers,
      title: "Integrated Platforms",
      desc: "Unified monitoring, cross-system interoperability, and end-to-end system integration & operations support.",
      hoverBg:  "bg-gradient-to-br from-emerald-50 to-teal-50",
      barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      iconBg:   "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
  ];

  return (
    <Layout>
      {/* ══════════════════════════════════════════
          HERO — Original PageBanner (unchanged)
      ══════════════════════════════════════════ */}
      <PageBanner title="About Us" />

      {/* ══════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Orbs using brand color */}
        <Orb className="w-[500px] h-[500px] opacity-[0.12] -top-40 -right-40"
             style={{ background: "#02377D" } as any} />
        <Orb className="w-[380px] h-[380px] opacity-[0.07] bottom-0 -left-32"
             style={{ background: "#02377D" } as any} />

        {/* Inline style orbs since Tailwind can't use arbitrary hex in bg- */}
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[110px] opacity-[0.10] pointer-events-none -top-40 -right-40"
             style={{ background: "radial-gradient(circle, #02377D, transparent)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-[110px] opacity-[0.06] pointer-events-none bottom-0 -left-32"
             style={{ background: "radial-gradient(circle, #02377D, transparent)" }} />

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
              {/* Label pill */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
                   style={{ background: "#02377D0D", borderColor: "#02377D33" }}>
                <Globe className="w-3.5 h-3.5" style={{ color: "#02377D" }} />
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 text-gray-900"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                Engineering &amp;{" "}
                <span style={{ background: "linear-gradient(135deg, #02377D, #0352B8, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Technology
                </span>
                <br />Company in KSA
              </h2>

              <div className="space-y-4">
                {[
                  "AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in Physical Security Systems, Data Center Infrastructure, Low Current & ELV Systems, and System Integration & Operations Support.",
                  "We provide end-to-end, turnkey solutions covering the complete project lifecycle—starting from concept development, feasibility assessment, and design coordination, through engineering, procurement, installation, system integration, testing, and commissioning.",
                  "Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.",
                ].map((text, i) => (
                  <motion.p key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-gray-500 leading-relaxed text-[15px]">
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mt-10">
                {["ISO Certified", "Saudi Vision 2030", "SASO Compliant", "Turnkey Delivery"].map((tag, i) => (
                  <motion.span key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="px-4 py-2 rounded-full border border-gray-200 text-xs text-gray-600 font-semibold
                               bg-gray-50 cursor-default transition-all duration-300"
                    style={{ transition: "all 0.3s" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "#02377D0D";
                      (e.currentTarget as HTMLElement).style.borderColor = "#02377D44";
                      (e.currentTarget as HTMLElement).style.color = "#02377D";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "";
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                      (e.currentTarget as HTMLElement).style.color = "";
                    }}>
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[500px]"
            >
              {/* Main image */}
              <div className="absolute top-0 left-0 right-12 bottom-12 rounded-3xl overflow-hidden border border-gray-100"
                   style={{ boxShadow: "0 25px 60px #02377D18" }}>
                <img src="/images/about-img-1.webp" alt="Server infrastructure"
                     className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                     style={{ background: "linear-gradient(to top, #02377D22, transparent)" }} />
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden border border-gray-100"
                   style={{ boxShadow: "0 20px 50px #02377D14" }}>
                <img src="/images/about-img-2.webp" alt="Security technology"
                     className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                     style={{ background: "linear-gradient(to top, #02377D1A, transparent)" }} />
              </div>

              {/* Badge — Mission Critical */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-0 bg-white rounded-2xl p-4 flex items-center gap-3"
                style={{ border: "1px solid #02377D1A", boxShadow: "0 12px 40px #02377D20" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                     style={{ background: "linear-gradient(135deg, #02377D, #0352B8)" }}>
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold leading-tight">Mission-Critical</p>
                  <p className="text-gray-400 text-xs">Certified Operations</p>
                </div>
              </motion.div>

              {/* Badge — Uptime */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-4 bg-white rounded-2xl p-4 flex items-center gap-3"
                style={{ border: "1px solid #10B98122", boxShadow: "0 12px 40px #10B98120" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                     style={{ background: "linear-gradient(135deg, #10B981, #0D9488)" }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-bold leading-tight">99.99% Uptime</p>
                  <p className="text-gray-400 text-xs">Guaranteed SLA</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        {/* Brand gradient */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(135deg, #02377D 0%, #0352B8 50%, #02377D 100%)" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),
                                 linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)`,
               backgroundSize: "40px 40px",
             }} />
        {/* Shine lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "rgba(0,0,0,0.12)" }} />

        {/* Glowing orbs inside bar */}
        <div className="absolute w-72 h-72 rounded-full blur-[80px] opacity-20 -left-16 top-1/2 -translate-y-1/2"
             style={{ background: "#3B82F6" }} />
        <div className="absolute w-72 h-72 rounded-full blur-[80px] opacity-15 -right-16 top-1/2 -translate-y-1/2"
             style={{ background: "#60A5FA" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                {/* Divider line between cols on desktop */}
                <div className="text-4xl md:text-5xl font-black text-white mb-2"
                     style={{ fontFamily: "'Syne', sans-serif" }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-white/60 text-sm font-medium tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISION & MISSION
      ══════════════════════════════════════════ */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Brand-tinted orb */}
        <div className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-[0.07] pointer-events-none top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
             style={{ background: "#02377D" }} />
        {/* Diagonal stripe */}
        <div className="absolute inset-0 opacity-[0.022]"
             style={{
               backgroundImage: "repeating-linear-gradient(45deg, #02377D 0, #02377D 1px, transparent 0, transparent 50%)",
               backgroundSize: "24px 24px",
             }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border"
              style={{ background: "#02377D0D", borderColor: "#02377D33" }}>
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: "#02377D" }}>
                Our Purpose
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Vision &amp; Mission
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl overflow-hidden bg-white
                         transition-all duration-500 hover:-translate-y-2"
              style={{ border: "1px solid #02377D1A", boxShadow: "0 8px 30px #02377D0A" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px #02377D18"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px #02377D0A"; }}
            >
              {/* Top bar */}
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #02377D, #0352B8, #3B82F6)" }} />
              {/* Hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: "linear-gradient(135deg, #02377D07, #0352B810)" }} />

              <div className="relative p-10">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ background: "linear-gradient(135deg, #02377D, #0352B8)", boxShadow: "0 8px 24px #02377D30" }}>
                  <Eye className="w-7 h-7 text-white" />
                </motion.div>

                <div className="text-[11px] font-black tracking-[0.25em] mb-3 uppercase"
                     style={{ color: "#02377D" }}>Vision</div>
                <h3 className="text-2xl font-black text-gray-900 mb-5"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                  Trusted Critical Infrastructure Partner
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  To be the trusted partner in secure Critical Infrastructure and Data Center solutions
                  across the Kingdom of Saudi Arabia, where reliability, compliance, security, and
                  uninterrupted operations are essential.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="group relative rounded-3xl overflow-hidden bg-white
                         transition-all duration-500 hover:-translate-y-2"
              style={{ border: "1px solid #F59E0B22", boxShadow: "0 8px 30px #F59E0B0A" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 60px #F59E0B18"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px #F59E0B0A"; }}
            >
              {/* Top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-400" />
              {/* Hover wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                              bg-gradient-to-br from-amber-50/80 to-orange-50/60" />

              <div className="relative p-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400
                             flex items-center justify-center mb-8 shadow-lg shadow-amber-200">
                  <Target className="w-7 h-7 text-white" />
                </motion.div>

                <div className="text-[11px] font-black text-amber-500 tracking-[0.25em] mb-3 uppercase">
                  Mission
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-5"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                  Engineering Excellence &amp; Integrity
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  To deliver end-to-end, secure, and resilient infrastructure and data center solutions
                  through engineering excellence, strict compliance, and disciplined execution—guided by
                  integrity, reliability, and a strong commitment to international standards and localization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CORE SPECIALIZATIONS
      ══════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(160deg, #F8FAFF 0%, #EEF4FF 50%, #F5F8FF 100%)" }} />
        {/* Brand orb */}
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.09] pointer-events-none
                        top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
             style={{ background: "#02377D" }} />

        <div className="relative container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-100">
              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">What We Do</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 max-w-2xl mx-auto leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Our Core Specializations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 mt-4 max-w-lg mx-auto text-[15px]">
              Four pillars of expertise powering Saudi Arabia's most critical infrastructure.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((item, i) => (
              <SpecCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        {/* Brand primary gradient */}
        <div className="absolute inset-0"
             style={{ background: "linear-gradient(135deg, #02377D 0%, #0352B8 45%, #02377D 100%)" }} />

        {/* Grid mesh */}
        <div className="absolute inset-0 opacity-[0.07]"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),
                                 linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)`,
               backgroundSize: "40px 40px",
             }} />

        {/* Glowing cyan accent orb */}
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.18] -top-16 -left-16"
             style={{ background: "#38BDF8" }} />
        <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.12] -bottom-16 -right-16"
             style={{ background: "#60A5FA" }} />

        {/* Shine line */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

        <div className="relative container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2"
                style={{ fontFamily: "'Syne', sans-serif" }}>
              Ready to Secure Your Infrastructure?
            </h3>
            <p className="text-white/60 text-[15px]">Let's build something mission-critical together.</p>
          </motion.div>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl bg-white
                       font-bold text-sm tracking-wide transition-shadow"
            style={{ color: "#02377D", boxShadow: "0 8px 32px rgba(2,55,125,0.35)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(2,55,125,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(2,55,125,0.35)"; }}>
            Get In Touch <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>
    </Layout>
  );
};

export default About;