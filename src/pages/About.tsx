import { motion } from "framer-motion";
import { Shield, Server, Eye, Target, ChevronRight, Cpu, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <Layout>
      <PageBanner title="About Us" />

      {/* About Content */}
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
              <span className="section-label">Who We Are</span>
              <h2 className="section-title mt-3 mb-6">
                Engineering & Technology Company in Saudi Arabia
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in Physical Security Systems, Data Center Infrastructure, Low Current & ELV Systems, and System Integration & Operations Support.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide end-to-end, turnkey solutions covering the complete project lifecycle—starting from concept development, feasibility assessment, and design coordination, through engineering, procurement, installation, system integration, testing, and commissioning, and extending into long-term operations, maintenance, and lifecycle support.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
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
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-section-bg">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title mt-3">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted partner in secure Critical Infrastructure and Data Center solutions across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver end-to-end, secure, and resilient infrastructure and data center solutions through engineering excellence, strict compliance, and disciplined execution—guided by integrity, reliability, and a strong commitment to international standards and localization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Specializations */}
      <section className="py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title mt-3 mb-14 max-w-3xl mx-auto">
            Our Core Specializations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Physical Security Systems", desc: "CCTV, Access Control, Perimeter Protection, Intrusion Detection, and Installation & Integration Services." },
              { icon: Server, title: "Data Center Infrastructure", desc: "Power & Cooling, Fire Suppression, Environmental Monitoring, and ELV & Network Solutions." },
              { icon: Cpu, title: "Low Current & ELV Systems", desc: "Structured Cabling, IP Networks, Audio-Visual, PA/VA Systems, and BMS Integration." },
              { icon: Layers, title: "Integrated Platforms", desc: "Unified Monitoring, Interoperability, and System Integration & Operations Support." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-section-bg rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-border/30 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
