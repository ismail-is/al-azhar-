import { motion, Variants, easeOut } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

// ✅ Fixed fadeUp variant with proper easing
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut, // use Framer Motion easing function
    },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+966 13 363 3369",
    href: "tel:+966133633369",
  },
  {
    icon: MapPin,
    title: "Address",
    detail:
      "DAHRAN TOWER, #103, Custodian of the Two Holy Mosque Road, Al-Khobar, Kingdom of Saudi Arabia",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@alazharalarabia.com",
    href: "mailto:info@alazharalarabia.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We will get back to you soon.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageBanner title="Contact Us" />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#0B3E81] font-semibold uppercase tracking-wide">
              Contact Us
            </span>
            <h2 className="text-3xl font-bold text-[#0B3E81] mt-2">
              Get In Touch
            </h2>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-[#f9f9f9] rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0B3E81]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#0B3E81]" />
                </div>
                <h3 className="text-base font-semibold text-[#0B3E81] mb-2">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-gray-600 hover:text-[#0B3E81] transition-colors"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{info.detail}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-[#f9f9f9] p-8 rounded-lg shadow"
            >
              <h2 className="text-2xl font-bold text-[#0B3E81] mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#0B3E81" }}
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#0B3E81" }}
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#0B3E81" }}
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#0B3E81" }}
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none"
                  />
                </div>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: "#0B3E81" }}
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#0B3E81] text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-[#072c5e] transition-colors"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.1242914111117!2d50.20041049999999!3d26.3375746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8b9b8e64ddb%3A0x302e4d362d595388!2sDhahran%20Tower%20Compound!5e1!3m2!1sen!2sin!4v1771957442266!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
