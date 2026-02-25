import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const GradientBullet = () => (
  <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[#03377E] shadow-md" />
);

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Physical Security" />

      {/* ===== SURVEILLANCE & MONITORING ===== */}
      <section className="py-16 md:py-20 bg-white">

        {/* Section Heading */}
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block text-[#03377E] px-8 py-4 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              PHYSICAL SECURITY
            </h2>
          </motion.div>
          <br />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg mt-4"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              Surveillance &amp; Monitoring
            </h3>
          </motion.div>
        </div>

        {/* ── Block 1: Desktop → Image Left / Text Right
                       Mobile  → Image Top / Text Bottom ── */}
        <div className="container-custom flex flex-col lg:flex-row gap-12 mb-20">

          {/* Image — on mobile: order-1 (top), on desktop: left (natural order) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative order-1 lg:order-1 lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/images/allimgs/service/2.webp"
              alt="CCTV surveillance control room with multiple monitors"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text — on mobile: order-2 (bottom), on desktop: right (natural order) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-2 lg:order-2 lg:w-1/2 w-full bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              CCTV &amp; Video Surveillance Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>High-resolution IP cameras (fixed, PTZ, thermal, low-light)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Indoor and outdoor surveillance solutions</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video Management Systems (VMS) with scalable storage</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Redundant recording and failover architecture</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with regulatory and data-handling requirements</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Intrusion Detection Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Motion sensors and detectors</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Door and window contact sensors</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Perimeter and fence-mounted detection systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Alarm management and alert mechanisms</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with CCTV and access control systems</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Block 2: Desktop → Text Left / Image Right
                       Mobile  → Image Top / Text Bottom ── */}
        <div className="container-custom flex flex-col lg:flex-row gap-12 mb-20">

          {/* Image — on mobile: order-1 (top), on desktop: order-2 (right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative order-1 lg:order-2 lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/images/allimgs/service/2.webp"
              alt="AI-powered video analytics monitoring dashboard"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text — on mobile: order-2 (bottom), on desktop: order-1 (left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-2 lg:order-1 lg:w-1/2 w-full bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              AI-Powered Video Analytics
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Anomaly and behavior detection</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Intrusion and loitering detection</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Object classification and tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Automated alerts and event prioritization</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with security dashboards and PSIM platforms</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Central &amp; Remote Monitoring Solutions
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Security Operations Centers (SOC)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video walls and operator workstations</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Remote monitoring platforms</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Secure network connectivity and redundancy</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Real-time alerting and escalation workflows</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Integration with Command &amp; Control Centers
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>PSIM platforms</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Multi-system data visualization</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Inter-system automation and response workflows</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== ACCESS CONTROL SYSTEM ===== */}
      <section className="py-16 md:py-20 bg-white">

        {/* Section Heading */}
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              ACCESS CONTROL SYSTEM
            </h3>
          </motion.div>
        </div>

        {/* ── Block 3: Desktop → Image Left / Text Right
                       Mobile  → Image Top / Text Bottom ── */}
        <div className="container-custom flex flex-col lg:flex-row gap-12 mb-20">

          {/* Image — on mobile: order-1 (top), on desktop: order-1 (left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative order-1 lg:order-1 lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/images/allimgs/service/2.webp"
              alt="Electronic access control system with biometric reader"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text — on mobile: order-2 (bottom), on desktop: order-2 (right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-2 lg:order-2 lg:w-1/2 w-full bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              Electronic Access Control Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Key card-based access systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Biometric authentication (fingerprint, facial recognition, iris)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Proximity, smart card, and multi-factor readers</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Door controllers, relays, and monitoring devices</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Zoning, time-based access rules, and role-based permissions</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Visitor Management Systems (VMS)
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Visitor pre-registration and approval workflows</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>ID verification and badge issuance</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Temporary access rights and expiry controls</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Visitor logs, reports, and compliance records</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with access control and security systems</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Block 4: Desktop → Text Left / Image Right
                       Mobile  → Image Top / Text Bottom ── */}
        <div className="container-custom flex flex-col lg:flex-row gap-12 mb-20">

          {/* Image — on mobile: order-1 (top), on desktop: order-2 (right) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative order-1 lg:order-2 lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
            style={{ minHeight: "300px" }}
          >
            <img
              src="/images/allimgs/service/2.webp"
              alt="Key management and mobile credential security systems"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text — on mobile: order-2 (bottom), on desktop: order-1 (left) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-2 lg:order-1 lg:w-1/2 w-full bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              Mechanical Locks &amp; Key Management
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>High-security mechanical locks</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Master key systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Electronic key cabinets and tracking systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Key issuance, return, and audit logs</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with electronic access control policies</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Integration with Enterprise &amp; Security Platforms
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Human Resources systems for automated access provisioning</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>CCTV systems for video-based event verification</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Intrusion detection and alarm systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Central security management platforms</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
              Card-Based &amp; Mobile Credential Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Smart cards and proximity credentials</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Mobile credentials using secure smartphone applications</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Encrypted authentication protocols</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Credential lifecycle management (issuance, revocation, renewal)</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </section>
    </Layout>
  );
};

export default Services;