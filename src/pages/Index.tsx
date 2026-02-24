import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Shield, Server, Cpu, Layers, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-datacenter.jpg";

const services = [
  {
    title: "Physical Security Systems",
    description: "CCTV, Access Control, Perimeter Protection & Intrusion Detection",
    image: "/images/service-physical-security.webp",
    icon: Shield,
  },
  {
    title: "Data Center Infrastructure",
    description: "Power, Cooling, Fire Suppression & Environmental Monitoring",
    image: "/images/service-data-center.webp",
    icon: Server,
  },
  {
    title: "Low Current & ELV Systems",
    description: "Structured Cabling, IP Networks, Audio-Visual & BMS Integration",
    image: "/images/service-elv.webp",
    icon: Cpu,
  },
  {
    title: "Integrated Platforms",
    description: "Unified Monitoring, Interoperability & Operations Support",
    image: "/images/service-integration.webp",
    icon: Layers,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[720px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/70 to-primary/40" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block font-heading text-xs tracking-[0.3em] text-gold font-bold uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full"
            >
              AL-AZHAR AL-ARABIA
            </motion.span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground uppercase leading-[1.1] mb-6">
              Physical Security &{" "}
              <span className="text-gold">Data Center</span>{" "}
              Infrastructure Solutions
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-xl leading-relaxed">
              End-to-end engineering solutions for mission-critical environments across Saudi Arabia — where reliability, compliance, and security are essential.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gold text-navy font-heading text-sm tracking-wider font-bold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors"
              >
                OUR SERVICES
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-heading text-sm tracking-wider font-semibold px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 50 900 0 720 20C540 40 240 0 0 30L0 60Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="section-label">Company Overview</span>
              <h2 className="section-title mt-3 mb-6">
                Powering Data – Protecting Critical Infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Physical Security Systems",
                  "Data Center Infrastructure",
                  "Low Current & ELV Systems",
                  "System Integration & Operations Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide end-to-end, turnkey solutions covering the complete project lifecycle—from concept development through engineering, installation, commissioning, and long-term operations support.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider font-semibold px-8 py-4 rounded-full hover:bg-royal transition-colors"
              >
                READ MORE
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="relative">
                <img
                  src="/images/overview-diagram.webp"
                  alt="Data Center Infrastructure Diagram"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-section-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/about-img-1.webp"
                alt="Server infrastructure"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
              />
              <img
                src="/images/about-img-2.webp"
                alt="Security technology"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover mt-8"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <span className="section-label">About Us</span>
              <h2 className="section-title mt-3 mb-6">
                Engineering & Technology Excellence in Saudi Arabia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2">Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be the trusted partner in secure Critical Infrastructure and Data Center solutions.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                  <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Server className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2">Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To deliver end-to-end, secure, and resilient infrastructure solutions through engineering excellence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">Our Services</span>
            <h2 className="section-title mt-3 max-w-3xl mx-auto">
              Specialized in Critical Infrastructure Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl h-[380px] cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mb-3">
                    <service.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-foreground leading-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm tracking-wider font-semibold px-8 py-4 rounded-full hover:bg-royal transition-colors"
            >
              VIEW ALL SERVICES
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-section-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Trusted By</span>
            <h2 className="section-title mt-3">Our Clients</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <motion.div
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={num * 0.2}
                className="bg-background rounded-xl p-3 shadow-sm border border-border/30 flex items-center justify-center h-20 hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://al-azhar-awvy.vercel.app/assets/images/allimgs/clients/${num}.webp`}
                  alt={`Client ${num}`}
                  className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
