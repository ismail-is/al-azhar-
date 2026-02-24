import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Lets Talk Us",
    detail: "+966 13 363 3369",
    href: "tel:+966133633369",
  },
  {
    icon: MapPin,
    title: "Address",
    detail: "DAHRAN TOWER, #103, Custodian of the Two Holy Mosque Road, Al-Khobar, Kingdom of Saudi Arabia",
  },
  {
    icon: Mail,
    title: "Send Us Email",
    detail: "info@alazharalarabia.com",
    href: "mailto:info@alazharalarabia.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We will get back to you soon." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageBanner title="Contact Us" />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label">Contact Us</span>
            <h2 className="section-title mt-3">Get in Touch With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-section-bg rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.detail}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="section-label">Contact</span>
              <h2 className="section-title mt-3 mb-8">Get In Touch Here</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 bg-section-bg rounded-lg border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-5 py-4 bg-section-bg rounded-lg border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-section-bg rounded-lg border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-5 py-4 bg-section-bg rounded-lg border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 bg-section-bg rounded-lg border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-heading text-sm tracking-wider font-semibold px-10 py-4 rounded-full hover:bg-royal transition-colors"
                >
                  SUBMIT NOW
                </button>
              </form>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <img
                src="/images/contact-banner.webp"
                alt="Contact us"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
