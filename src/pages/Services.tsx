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

      {/* 1 section */}
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
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
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
              src="/images/allimgs/service/1.webp"
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
       {/* 1 section */}


 {/* 2 section */}
      {/* ===== ACCESS CONTROL SYSTEM ===== */}
      <section className="py-16 md:py-20 bg-white mt-[-160px]">

        {/* Section Heading */}
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
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
              src="/images/allimgs/service/3.webp"
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
              src="/images/allimgs/service/4.webp"
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

      {/* 2 section */}



       {/* 3 section */}
      <section className="py-16 md:py-20 bg-white mt-[-170px]" >

        {/* Section Heading */}
        <div className="container-custom text-center mb-16">
          
          <br />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg mt-4"
          >
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
             PERI METER & FACILITY PROTECTION
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
              src="/images/allimgs/service/5.webp"
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
            Fencing, Barriers & Bollards
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>High-security perimeter fencing (anti-climb, welded mesh, palisade)
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Crash-rated vehicle barriers and road blockers
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Fixed, retractable, and removable bollards
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Controlled entry points for vehicles and pedestrians
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Structural integration with site layouts and access routes</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Fence-Mounted Intrusion Detection Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Fiber-optic and vibration-based fence sensors
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Microphonic and accelerometer-based detection technologies
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Precise zone identification and alarm localization
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with CCTV for visual verification
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Reduced false alarms through intelligent signal processing</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Radar, Infrared & Motion Sensors
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Ground and perimeter radar systems for wide-area detection

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Infrared (IR) and thermal sensors for low-visibility conditions

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Motion sensors for open and restricted areas

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Detection coverage for complex terrains and large perimeters

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with video analytics and alarm platforms</span>
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
              src="/images/allimgs/service/6.webp"
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
Gate Automation & Access Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Automated sliding, swing, and cantilever gates
 </span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Vehicle access control systems (RFID, ANPR/LPR)
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Safety devices and emergency override mechanisms
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with access control and security platforms
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Centralized monitoring and control</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Integrated Alarms & Alert Mechanisms
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Real-time alarm generation and escalation
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with CCTV, access control, and PSIM platforms
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Audio and visual alerts
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Incident logging and reporting
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Automated response workflows</span>
              </li>
            </ul>

          
          </motion.div>
        </div>
      </section>
       {/* 3 section */}




 {/* 4 section */}
      {/* ===== ACCESS CONTROL SYSTEM ===== */}
      <section className="py-16 md:py-20 bg-white mt-[-160px]">

        {/* Section Heading */}
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
              INSTALLATION & INTEGRATION SERVICES
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
              src="/images/allimgs/service/7.webp"
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
ELV & Low Current Systems Installation
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Installation of CCTV, access control, intrusion detection,
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>intercom & public address systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Deployment of field devices, control panels, and termination points
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Equipment mounting, alignment, and labeling
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with OEM installation manuals and standards
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Site coordination with civil, MEP, and IT teams

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Network & Structured Cabling
</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Network & Structured Cabling
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Copper and fiber optic cabling (backbone and horizontal)
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Rack installation, patch panels, and cable management
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Labeling, testing, and certification
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Network segregation for security systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with international cabling standards and OEM requirements</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
System Integration & Automation
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration of CCTV, access control, intrusion, and perimeter systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Configuration of system workflows and automated responses

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with command & control centers and PSIM platforms

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Alarm correlation and event-driven automation

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>User interface configuration and system dashboards</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Testing, Commissioning & Handover
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Functional and performance testing


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration testing across platforms


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance verification against specifications


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>As-built documentation and manuals


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Operator training and handover support</span>
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
              src="/images/allimgs/service/8.webp"
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

      {/* 4 section */}



      
      {/* 5 section */}
      <section className="py-16 md:py-20 bg-white mt-[-170px]" >

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
             DATA CENTER SOLUTIONS
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
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
             POWER, COOLING & FIRE SYSTEMS
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
              src="/images/allimgs/service/9.webp"
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
              UPS & Power Distribution

            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Uninterruptible Power Supply (UPS) systems with N+1/2N redundancy
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Battery banks and energy storage systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Power Distribution Units (PDUs) and Remote Power Panels (RPPS)
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Busbar trunking systems for scalable power delivery
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Electrical panels, switchgear, and protection devices
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Earthing and grounding systems
</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Precision Cooling Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>CRAC and CRAH units
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>in-row and overhead cooling systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Hot aisle cold aisle containment solutions
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Variable speed fans and intelligent cooling controls
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Redundancy and failover configurations</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Environmental Monitoring
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Temperature and humidity sensors

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Differential pressure monitoring

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Power and energy consumption monitoring

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Leak detection systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Centralized monitoring dashboards and alerts</span>
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
              src="/images/allimgs/service/10.webp"
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
Early Smoke Detection Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Very Early Smoke Detection Apparatus (VESDA)
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Air sampling and aspirating smoke detection
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with fire alarm and suppression systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with Saudi Civil Defense requirements</span>
              </li>
              
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
             Gas-Based Fire Suppression Systems

            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>FM-200, NOVEC 1230, or equivalent gas-based systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Zoned suppression for data halls and technical rooms
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with detection and alarm systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Safety interlocks and emergency shutdown mechanisms</span>
              </li>
              
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
           Chilled Water & Air Distribution Systems

            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span> Chilled water piping and insulation
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Pumps, valves, and control systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Air distribution ductwork and airflow management
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Redundant distribution paths

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with building management systems (BMS)
</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
       {/* 5 section */}




          {/* 6 section */}
      <section className="py-16 md:py-20 bg-white mt-[-170px]" >

        {/* Section Heading */}
       

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
              src="/images/allimgs/service/11.webp"
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
Public Address & Voice Alarm Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>PA/VA system design and speaker layout.

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Emergency voice evacuation systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with fire alarm and security systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Zoning, paging, and announcement controls

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with life safety regulations</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Audio-Visual Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video walls and display systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Control room AV solutions

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Conferencing and presentation systems
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>AV control and automation

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with command and control centers
</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Building Management System (BMS) Integration
</span>
              </li>
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Building Management System (BMS) Integration
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration of HVAC, power, and environmental systems


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Centralizea monitoring and control dashboards


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Alarm and event integration


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Data exchange and system interoperability

</span>
              </li>
             
            </ul>
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Redundant Power Architectures
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Dual power feeds


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Redundant power supplies


</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Automatic failover mechanisms



</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with UPS and backup power systems

</span>
              </li>
             
            </ul>
          </motion.div>
        </div>

        {/* ── Block 2: Desktop → Text Left / Image Right
                       Mobile  → Image Top / Text Bottom ── */}
                        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-2xl font-bold uppercase tracking-wide">
INTEGRATED PLATFORMS            </h3>
          </motion.div>
        </div>

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
              src="/images/allimgs/service/12.webp"
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
Unified Monitoring
</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Centralized dashboards for real-time system status

 </span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Unified monitoring of CCTV, access control, intrusion, perimeter, BMS, and environmental systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Event correlation and real-time alerts

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video walls and operator workstations for control rooms

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Secure remote access for authorized users</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-6">
Interoperability            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration of security, ELV, IT, and building systems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Open architecture and standards-based integration

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Data exchange between platforms and subsystems

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Elimination of system silos

</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Scalability for future technologies and expansions</span>
              </li>
            </ul>

          
          </motion.div>
        </div>
      </section>
       {/* 6 section */}

    </Layout>
  );
};

export default Services;