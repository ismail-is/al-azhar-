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
  <span className="w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-br from-[#03377E] to-[#03377E] shadow-md" />
);

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Physical Security" />

      <section className="py-16 md:py-20 bg-white">
        {/* Center Heading with Banner Style */}
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
          </motion.div><br/>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              Surveillance & Monitoring
            </h3>
          </motion.div>
        </div>

        {/* Block 1: Image Left / Text Right */}
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/images/allimgs/service/2.webp"
              alt="CCTV surveillance control room with multiple monitors displaying security camera feeds"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              CCTV & Video Surveillance Systems
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

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-4">
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
      </section>

      {/* Section 2 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              Access Control & Command Center
            </h3>
          </motion.div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              Access Control Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Biometric authentication (fingerprint, facial recognition)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Card-based and mobile credential systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Multi-factor authentication for high-security areas</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Centralized access management and audit trails</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with HR systems for automated provisioning</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-4">
              Command & Control Centers
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>24/7 centralized monitoring and incident response</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Real-time alert management and escalation protocols</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video wall integration and multi-system visualization</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Emergency communication and mass notification systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Redundant infrastructure for continuous operations</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/command-control-center.jpg"
              alt="Modern command and control center with large video wall and multiple workstations for security monitoring"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              Perimeter Security & Advanced Analytics
            </h3>
          </motion.div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/perimeter-security-fence.jpg"
              alt="Outdoor perimeter security system with fence-mounted sensors and surveillance cameras"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-3">
              Perimeter Security Systems
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Fiber optic and vibration sensor technology</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Microwave and infrared barrier systems</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Radar-based detection and tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Electric fencing and security gates</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Vehicle access control and barrier systems</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3 mt-4">
              AI-Powered Video Analytics
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Facial recognition and people counting</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>License plate recognition (ANPR/LPR)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Behavioral analysis and anomaly detection</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Object detection and tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Heat mapping and crowd management</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Automated alerts for security breaches</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              About Us
            </h3>
          </motion.div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-2xl font-bold text-[#0B3E81] mb-4">
              Leading Provider of Security Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              With years of industry experience, we deliver comprehensive physical security solutions tailored to protect your assets, people, and infrastructure. Our integrated approach combines cutting-edge technology with expert knowledge to create secure environments for businesses, government facilities, and critical infrastructure.
            </p>
            <p className="text-gray-700 mb-4">
              We understand that each facility has unique security requirements. Our team works closely with clients to assess vulnerabilities, design appropriate solutions, and implement systems that provide reliable protection while maintaining operational efficiency.
            </p>
            <ul className="space-y-3 text-gray-700 mt-4">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>End-to-end security system design and integration</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>24/7 technical support and maintenance</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Compliance with industry standards and regulations</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Scalable solutions for future growth</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/security-team-professionals.jpg"
              alt="Professional security team in command center monitoring surveillance systems and coordinating security operations"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5: Integration & Managed Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block bg-[#03377E] text-white px-8 py-4 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">
              Integration & Managed Services
            </h3>
          </motion.div>
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/integrated-security-systems.jpg"
              alt="Integrated security systems dashboard showing CCTV, access control, and alarm monitoring in one unified platform"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-[#f9f9f9] p-8 rounded-lg shadow"
          >
            <h3 className="text-lg font-bold text-[#0B3E81] mb-3">
              System Integration
            </h3>
            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Unified platform for CCTV, access control, and intrusion detection</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Integration with building management systems (BMS)</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>API connectivity for third-party applications</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Mobile applications for remote monitoring and control</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-[#0B3E81] mb-3">
              Managed Security Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>24/7 remote monitoring and incident response</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Regular system health checks and maintenance</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Software updates and cybersecurity protection</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Video verification and alarm monitoring</span>
              </li>
              <li className="flex items-center gap-3">
                <GradientBullet />
                <span>Detailed reporting and compliance documentation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;