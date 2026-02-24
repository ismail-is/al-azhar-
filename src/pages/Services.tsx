import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Shield, Server, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { serviceSections } from "@/data/servicesData";
import type { ServiceCategory } from "@/data/servicesData";

const sectionIcons: Record<string, typeof Shield> = {
  "physical-security": Shield,
  "data-center": Server,
  "integrated-platforms": Layers,
};

const sectionColors: Record<string, string> = {
  "physical-security": "from-primary to-royal",
  "data-center": "from-navy to-primary",
  "integrated-platforms": "from-royal to-navy",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CategoryCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp}
      className="bg-background rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border/50"
    >
      {/* Category Image Header */}
      <div className="relative h-[220px] md:h-[260px] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-wide">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Items Preview */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {category.items.slice(0, expanded ? category.items.length : 3).map((item) => (
            <span
              key={item.title}
              className="text-xs font-heading font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-primary/10 text-primary"
            >
              {item.title}
            </span>
          ))}
          {!expanded && category.items.length > 3 && (
            <span className="text-xs font-heading font-semibold tracking-wider px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
              +{category.items.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary font-heading text-sm font-semibold tracking-wider uppercase hover:text-royal transition-colors"
        >
          {expanded ? "COLLAPSE" : "VIEW DETAILS"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-6">
                {category.items.map((item, j) => (
                  <div key={item.title} className="border-l-2 border-primary/30 pl-5">
                    <h4 className="font-heading text-base font-bold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.points.map((point, k) => (
                        <li key={k} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <ChevronRight className="w-3.5 h-3.5 text-gold mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <Layout>
      <PageBanner title="Our Services" />

      {/* Service Sections Navigation */}
      <section className="py-8 bg-section-bg border-b border-border/50 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceSections.map((section) => {
              const Icon = sectionIcons[section.id];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all font-heading text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground hover:text-primary"
                >
                  <Icon className="w-4 h-4" />
                  {section.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {serviceSections.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-24 ${sIdx % 2 === 1 ? "bg-section-bg" : ""}`}
        >
          <div className="container-custom">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <div
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r ${sectionColors[section.id]} mb-5`}
              >
                {(() => {
                  const Icon = sectionIcons[section.id];
                  return <Icon className="w-4 h-4 text-primary-foreground" />;
                })()}
                <span className="font-heading text-xs font-bold tracking-[0.2em] text-primary-foreground uppercase">
                  {section.title}
                </span>
              </div>
              <h2 className="section-title max-w-3xl mx-auto">{section.title}</h2>
            </motion.div>

            {/* Category Cards Grid */}
            <div
              className={`grid gap-8 ${
                section.categories.length === 1
                  ? "grid-cols-1 max-w-3xl mx-auto"
                  : "grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {section.categories.map((cat, cIdx) => (
                <CategoryCard key={cat.title} category={cat} index={cIdx} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Services;
