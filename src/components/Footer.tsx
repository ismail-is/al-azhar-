import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      

      {/* Footer */}
      
 <footer className="relative text-white py-16 overflow-hidden"> 
  {/* Background Layers */} <div className="absolute inset-0" 
  style={{ background: "linear-gradient(135deg, #02377D 0%, #0352B8 50%, #02377D 100%)", }} /> 
  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)`, backgroundSize: "40px 40px", }} />
   <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.18] -top-16 -left-16 pointer-events-none animate-pulse" style={{ background: "#38BDF8" }} /> <div className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-[0.12] -bottom-16 -right-16 pointer-events-none animate-pulse" style={{ background: "#60A5FA" }} /> 
   <div className="absolute top-0 left-0 w-full h-px bg-white/20" /> {/* Content */}
   <div className="relative container-custom"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Logo & About */} <div> <img src="/images/allimgs/al-azharwhite.png" alt="AL-AZHAR AL-ARABIA" className="h-14 mb-6 brightness-0 invert" />
    <p className="text-sm leading-relaxed text-white/70 max-w-md"> AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in Physical Security Systems, Data Center Infrastructure, and System Integration. </p> <div className="flex items-center gap-3 mt-5"> <a href="mailto:info@alazharalarabia.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110" > 
    <Mail className="w-4 h-4 text-white" /> </a> <a href="tel:+966133633369" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110" > <Phone className="w-4 h-4 text-white" /> </a> </div> </div> {/* Quick Links */} 
    <div> <h4 className="font-heading text-xl font-bold mb-6 tracking-wide"> QUICK LINKS </h4> <ul className="space-y-3"> {[ { label: "Home", path: "/" }, { label: "About Us", path: "/about" }, { label: "Services", path: "/services" }, { label: "Contact", path: "/contact" }, ].map((link) => ( <li key={link.path}> <Link to={link.path} className="text-sm text-white/70 hover:text-white transition-all flex items-center gap-2 group" >
     <ChevronRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform duration-300" /> <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300"> {link.label} </span> </Link> </li> ))} </ul> </div> {/* Services */} <div> <h4 className="font-heading text-xl font-bold mb-6 tracking-wide"> OUR SERVICES </h4> <ul className="space-y-3"> {[ "Physical Security Systems", "Data Center Infrastructure", "Low Current & ELV Systems", "System Integration & Operations Support", ].map((service) => ( <li key={service}> <Link to="/services" className="text-sm text-white/70 hover:text-white transition-all flex items-center gap-2 group" >
      <ChevronRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform duration-300" /> 
     <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-300"> {service} </span> </Link> </li> ))} </ul> </div> {/* Contact */} <div> <h4 className="font-heading text-xl font-bold mb-6 tracking-wide"> CONTACT INFO </h4> <ul className="space-y-4"> <li className="flex items-start gap-3"> <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110"> <MapPin className="w-4 h-4 text-white" /> </div> <span className="text-sm text-white/70"> DAHRAN TOWER, #103, Custodian of the Two Holy Mosque Road, Al-Khobar, Kingdom of Saudi Arabia </span> </li> <li className="flex items-center gap-3">
       <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"> <Phone className="w-4 h-4 text-white" /> </div> <a href="tel:+966133633369" className="text-sm text-white/70 hover:text-white transition-colors duration-300" > +966 13 363 3369 </a> </li> <li className="flex items-center gap-3"> <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"> <Mail className="w-4 h-4 text-white" /> </div> <a href="mailto:info@alazharalarabia.com" className="text-sm text-white/70 hover:text-white transition-colors duration-300" > info@alazharalarabia.com </a> </li> </ul> </div> </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white"> <p className="text-sm text-white"> © {new Date().getFullYear()} AL-AZHAR AL-ARABIA. All Rights Reserved. </p> </div> </div> </footer>

    </>
  );
};

export default Footer;
