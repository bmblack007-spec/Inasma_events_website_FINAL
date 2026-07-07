import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import logoWhite from '../assets/Logo_white_transparentBG.png';

export default function Footer() {
  const whatsappHref = `https://wa.me/27813566058?text=${encodeURIComponent("Hello INASMA, I'd like to inquire about your décor hire services.")}`;

  return (
    <footer id="contact" className="bg-charcoal-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoWhite}
                alt="INASMA Logo"
                className="h-8 w-auto object-contain"
              />
              <h3 className="font-serif text-3xl tracking-widest font-light">INASMA</h3>
            </div>
            <div className="w-10 h-px bg-gold-400 mb-4" />
            <p className="font-serif italic text-white/60 text-lg leading-relaxed">
              Transforming Space For Lifetime Memories
            </p>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-400 mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:0813566058" className="flex items-center gap-3 text-white/70 hover:text-gold-300 transition-colors group">
                <Phone size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm tracking-wide">081 356 6058</span>
              </a>
              <a href="tel:0798874131" className="flex items-center gap-3 text-white/70 hover:text-gold-300 transition-colors group">
                <Phone size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm tracking-wide">079 887 4131</span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-gold-300 transition-colors group">
                <MessageCircle size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm tracking-wide">WhatsApp Us</span>
              </a>
              <a
                href="https://www.instagram.com/inasma._decor?igsh=YzF6OWI3czFsMGxs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-gold-300 transition-colors group"
              >
                <Instagram size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm tracking-wide">inasma._decor</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <Mail size={16} className="text-gold-400" />
                <span className="text-sm tracking-wide">b.r.maxwell00@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-sm tracking-wide">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold-400 mb-6">Follow Inasma Events</h4>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Stay connected for the latest additions to our collection and behind-the-scenes glimpses of our events.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/inasma._decor?igsh=YzF6OWI3czFsMGxs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:border-gold-400 hover:text-gold-300 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:border-gold-400 hover:text-gold-300 hover:scale-110 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            {new Date().getFullYear()} INASMA Holdings
          </p>
        </div>
      </div>
    </footer>
  );
}
