import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '27813566058';
  const message = encodeURIComponent("Hello INASMA, I'd like to inquire about your décor hire services.");
  const href = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300">
          <MessageCircle size={26} className="text-white" fill="white" strokeWidth={1.5} />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-charcoal-900 text-white text-xs whitespace-nowrap px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Chat with us
        </div>
      </div>
    </a>
  );
}
