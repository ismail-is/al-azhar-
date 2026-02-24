import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="cta-banner py-12">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl md:text-2xl text-primary-foreground font-bold">
              Need any help? <span className="text-gold ml-1">Contact us!</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm mt-1">We're available 24/7 for your critical infrastructure needs</p>
          </div>
          <a
            href="tel:+966133633369"
            className="flex items-center gap-3 bg-gold/20 border border-gold/30 text-primary-foreground font-heading text-lg md:text-xl font-bold hover:bg-gold/30 transition-colors px-6 py-3 rounded-full"
          >
            <Phone className="w-5 h-5 text-gold" />
            +966 13 363 3369
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-primary-foreground py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div>
              <img src="/images/logo.png" alt="AL-AZHAR AL-ARABIA" className="h-14 mb-6 brightness-0 invert" />
              <p className="text-sm leading-relaxed opacity-70">
                AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in Physical Security Systems, Data Center Infrastructure, and System Integration.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="mailto:info@alazharalarabia.com" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="tel:+966133633369" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", path: "/" },
                  { label: "About Us", path: "/about" },
                  { label: "Services", path: "/services" },
                  { label: "Contact", path: "/contact" },
                ].map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-gold" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 tracking-wider">OUR SERVICES</h4>
              <ul className="space-y-3">
                {[
                  "Physical Security Systems",
                  "Data Center Infrastructure",
                  "Low Current & ELV Systems",
                  "System Integration & Operations Support",
                ].map((service) => (
                  <li key={service}>
                    <Link to="/services" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-all flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-gold" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-6 tracking-wider">CONTACT INFO</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm opacity-70">
                    DAHRAN TOWER, #103, Custodian of the Two Holy Mosque Road, Al-Khobar, Kingdom of Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <a href="tel:+966133633369" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    +966 13 363 3369
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <a href="mailto:info@alazharalarabia.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    info@alazharalarabia.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
            <p className="text-sm opacity-50">
              © {new Date().getFullYear()} AL-AZHAR AL-ARABIA. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
