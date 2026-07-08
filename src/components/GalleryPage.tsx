import { ArrowLeft } from 'lucide-react';

interface GalleryPageProps {
  onBack: () => void;
}

// Images served from /public/images/gallery/ — not bundled into JS
const galleryImages = [
  { src: '/images/gallery/Family_pic.jpeg',    alt: 'Family Portrait Main' },
  { src: '/images/gallery/Trent1.jpeg',     alt: 'Trent Portrait 1' },
  { src: '/images/gallery/Fam1.jpeg',       alt: 'Family Portrait 1' },
  { src: '/images/gallery/Ben-Tuse.jpeg',   alt: 'Ben & Tuse Portrait' },
  { src: '/images/gallery/Mel-Carly.jpeg',  alt: 'Mel & Carly Portrait' },
  { src: '/images/gallery/Fam4.jpeg',       alt: 'Family Portrait 4' },
  { src: '/images/gallery/Temple.jpeg',     alt: 'Temple Event Group' },
  { src: '/images/gallery/Fam3.jpeg',       alt: 'Family Portrait 3' },
  { src: '/images/gallery/Mel-Jon.jpeg',    alt: 'Mel & Jon Portrait' },
  { src: '/images/gallery/Fam2.jpeg',       alt: 'Family Portrait 2' },
  { src: '/images/gallery/Trent2.jpeg',     alt: 'Trent Portrait 2' },
  { src: '/images/gallery/Mel-Aoiki.jpg',   alt: 'Mel & Aoiki Portrait' },
  { src: '/images/gallery/Ben_Tuse2.jpg',   alt: 'Ben & Tuse Portrait 2' },
];

const packages = [
  { title: 'Package 1', price: 'R2 000', features: ['2 hours of photos', '130 high resolution digital images'] },
  { title: 'Package 2', price: 'R3 000', features: ['3 hours of photos', '200 high resolution digital images'] },
  { title: 'Package 3', price: 'R4 000', features: ['4 hours of photos', '275 high resolution images'] },
];

const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

export default function GalleryPage({ onBack }: GalleryPageProps) {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <button onClick={onBack} className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white mb-12">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {packages.map((pkg) => (
            <div key={pkg.title} className="border border-gold-400/20 bg-charcoal-900/40 p-8 rounded-lg text-center hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-medium text-white mb-4">{pkg.title}</h3>
                <div className="w-8 h-px bg-gold-400/40 mx-auto mb-6" />
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="text-white/70 text-sm font-light">{feat}</li>
                  ))}
                </ul>
              </div>
              <p className="font-serif text-2xl font-light text-gold-300">{pkg.price}</p>
            </div>
          ))}
        </div>
        <button onClick={scrollToContact} className="inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500">
          Enquire Now
        </button>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">Photography Gallery</h2>
        <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]">
          {galleryImages.map((img) => (
            <div key={img.src} className="break-inside-avoid relative overflow-hidden rounded-lg shadow-lg mb-6 bg-charcoal-900">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-contain transition-transform duration-[1.2s] hover:scale-[1.02]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
