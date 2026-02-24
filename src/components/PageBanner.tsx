import { motion } from "framer-motion";
import heroImage from "@/assets/hero-datacenter.jpg";

interface PageBannerProps {
  title: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, backgroundImage }: PageBannerProps) => {
  return (
    <section
      className="page-banner"
      style={{
        backgroundImage: `url(${backgroundImage || heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-custom relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-wider"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageBanner;
