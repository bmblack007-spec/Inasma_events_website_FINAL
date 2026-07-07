import { CalendarHeart, Armchair, UtensilsCrossed, Camera } from 'lucide-react';
import familyPic from '../assets/Family_pic.jpeg';
import meatballs from '../assets/meatballs.jpg';
import eventsCoord from '../assets/Events_coord.jpg';
import gradBalloons from '../assets/grad_balloons.png';

interface Service {
  id: string;
  title: string;
  icon: typeof CalendarHeart;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 'events-coordination',
    title: 'Events Coordination',
    icon: CalendarHeart,
    description:
      'From intimate gatherings to grand celebrations, our experienced coordinators manage every aspect of your event — timelines, vendors, logistics, and on-the-day execution — so you can be fully present in the moment. Enquire now for a consultation.',
    image: eventsCoord,
  },
  {
    id: 'decor-hire',
    title: 'Décor Hire',
    icon: Armchair,
    description:
      'An extensive catalogue of décor items— chairs, tables, backdrops, centrepieces, lighting, and more — available for hire to transform any venue into a setting your guests will never forget.',
    image: gradBalloons,
  },
  {
    id: 'catering',
    title: 'Catering',
    icon: UtensilsCrossed,
    description:
      'Tailored menus crafted with care, from elegant plated dinners to generous buffet spreads. We provide full catering equipment and professional service to suit all events. Enquire now for a consultation.',
    image: meatballs,
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: Camera,
    description:
      'Capture every fleeting moment with our professional photography services. From candid guest reactions to carefully styled portraits, we preserve the story of your day in timeless imagery.',
    image: familyPic,
  },
];

interface ServicesSectionProps {
  onViewGallery?: () => void;
  onViewCatalogue?: () => void;
}

export default function ServicesSection({ onViewGallery, onViewCatalogue }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-cream">
      {services.map((service, idx) => {
        const Icon = service.icon;
        const reversed = idx % 2 === 1;

        return (
          <div
            key={service.id}
            id={service.id}
            className={`max-w-7xl mx-auto flex flex-col lg:items-center ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } pt-12 sm:pt-16 md:pt-20 lg:pt-28 pb-0 px-4 sm:px-6`}
          >
            {/* Image (0.7x size: lg:w-[35%] and adjusted heights) */}
            <div className="w-full lg:w-[35%] relative overflow-hidden h-[200px] sm:h-[260px] md:h-[336px] lg:min-h-[392px] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 to-transparent" />
            </div>

            {/* Content (occupies remaining 65% width) */}
            <div className="w-full lg:w-[65%] flex items-center px-0 sm:px-4 md:px-12 lg:px-20 py-8 lg:py-16">
              <div className="max-w-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-gold-300 flex items-center justify-center text-gold-500">
                    <Icon size={22} strokeWidth={1.25} />
                  </div>
                  <div className="w-12 h-px bg-gold-400" />
                </div>

                <h2 className="font-serif text-charcoal-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-5 leading-tight">
                  {service.title}
                </h2>
                <p className="text-charcoal-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                {service.id === 'events-coordination' && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="mt-8 group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
                  >
                    Enquire Now
                  </button>
                )}
                {service.id === 'decor-hire' && onViewCatalogue && (
                  <button
                    onClick={onViewCatalogue}
                    className="mt-8 group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
                  >
                    See Catalogue
                  </button>
                )}
                {service.id === 'catering' && (
                  <button
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="mt-8 group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
                  >
                    Enquire Now
                  </button>
                )}
                {service.id === 'photography' && onViewGallery && (
                  <button
                    onClick={onViewGallery}
                    className="mt-8 group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
                  >
                    More Info
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* CTA strip */}
      <div className="bg-charcoal-950 py-20 md:py-28 mt-20 md:mt-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold-400 text-xs uppercase tracking-widest mb-6">Ready to Begin?</p>
          <h3 className="font-serif text-white text-2xl md:text-4xl font-light leading-relaxed mb-8">
            Let's bring your vision to life — together.
          </h3>
          <div className="w-12 h-px bg-gold-400 mx-auto mb-8" />
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Get in touch to discuss your event. All orders and queries are handled via email,
            WhatsApp, or phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:b.r.maxwell00@gmail.com"
              className="inline-flex items-center gap-3 border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300"
            >
              Send an Email
            </a>
            <a
              href="https://wa.me/27813566058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-400 text-charcoal-900 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-300 transition-all duration-300"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:0798874131"
              className="inline-flex items-center gap-3 border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300"
            >
              Phone Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
