import { CalendarHeart, Armchair, UtensilsCrossed, Camera, Phone } from 'lucide-react';

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
      'From intimate gatherings to grand celebrations, our experienced coordinators manage every aspect of your event — timelines, vendors, logistics, and on-the-day execution — so you can be fully present in the moment.',
    image:
      'https://images.pexels.com/photos/16791596/pexels-photo-16791596.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'decor-hire',
    title: 'Decor Hire',
    icon: Armchair,
    description:
      'An extensive catalogue of premium decor — chairs, tables, backdrops, centrepieces, lighting, and more — available for hire to transform any venue into a setting your guests will never forget.',
    image:
      'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'catering',
    title: 'Catering',
    icon: UtensilsCrossed,
    description:
      'Tailored menus crafted with care, from elegant plated dinners to generous buffet spreads. We provide full catering equipment and professional service to suit events of any scale.',
    image:
      'https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: Camera,
    description:
      'Capture every fleeting moment with our professional photography services. From candid guest reactions to carefully styled portraits, we preserve the story of your day in timeless imagery.',
    image:
      'https://images.pexels.com/photos/313702/pexels-photo-313702.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream">
      {services.map((service, idx) => {
        const Icon = service.icon;
        const reversed = idx % 2 === 1;

        return (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${
              idx !== 0 ? 'pt-20 md:pt-28' : 'pt-20 md:pt-28'
            } pb-0`}
          >
            {/* Image */}
            <div className="lg:w-1/2 relative overflow-hidden h-[320px] md:h-[480px] lg:h-auto lg:min-h-[560px]">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-16 lg:py-24">
              <div className="max-w-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-gold-300 flex items-center justify-center text-gold-500">
                    <Icon size={22} strokeWidth={1.25} />
                  </div>
                  <div className="w-12 h-px bg-gold-400" />
                </div>

                <p className="text-gold-500 text-xs uppercase tracking-widest mb-3">
                  Service {String(idx + 1).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-charcoal-900 text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-charcoal-500 text-base md:text-lg leading-relaxed font-light">
                  {service.description}
                </p>
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
              href="https://wa.me/27813566058"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-400 text-charcoal-900 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-300 transition-all duration-300"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:b.r.maxwell00@gmail.com"
              className="inline-flex items-center gap-3 border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300"
            >
              Send an Email
            </a>
            <a
              href="tel:0798874131"
              className="inline-flex items-center gap-3 border border-gold-400 text-gold-300 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300"
            >
              <Phone size={16} />
              Phone Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
