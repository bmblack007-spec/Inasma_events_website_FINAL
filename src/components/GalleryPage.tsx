import { ArrowLeft } from 'lucide-react';
import familyPic from '../assets/Family_pic.jpeg';
import Trent1 from '../assets/gallery/Trent1.jpeg';
import Fam4 from '../assets/gallery/Fam4.jpeg';
import BenTuse from '../assets/gallery/Ben-Tuse.jpeg';
import MelCarly from '../assets/gallery/Mel-Carly.jpeg';
import Temple from '../assets/gallery/Temple.jpeg';
import Fam3 from '../assets/gallery/Fam3.jpeg';
import MelJon from '../assets/gallery/Mel-Jon.jpeg';
import Fam2 from '../assets/gallery/Fam2.jpeg';
import Fam1 from '../assets/gallery/Fam1.jpeg';
import Trent2 from '../assets/gallery/Trent2.jpeg';
import MelAoiki from '../assets/gallery/Mel-Aoiki.jpg';
import BenTuse2 from '../assets/gallery/Ben_Tuse2.jpg';

interface GalleryPageProps {
  onBack: () => void;
}

const galleryImages = [
  { src: familyPic, alt: 'Family Portrait Main' },
  { src: Trent1, alt: 'Trent Portrait 1' },
  { src: Fam1, alt: 'Family Portrait 1' },
  { src: BenTuse, alt: 'Ben & Tuse Portrait' },
  { src: MelCarly, alt: 'Mel & Carly Portrait' },
  { src: Fam4, alt: 'Family Portrait 4' },
  { src: Temple, alt: 'Temple Event Group' },
  { src: Fam3, alt: 'Family Portrait 3' },
  { src: MelJon, alt: 'Mel & Jon Portrait' },
  { src: Fam2, alt: 'Family Portrait 2' },
  { src: Trent2, alt: 'Trent Portrait 2' },
  { src: MelAoiki, alt: 'Mel & Aoiki Portrait' },
  { src: BenTuse2, alt: 'Ben & Tuse Portrait 2' },
];

const packages = [
  {
    title: 'Package 1',
    price: 'R2 000',
    features: [
      '2 hours of photos',
      '130 high resolution digital images',
    ],
  },
  {
    title: 'Package 2',
    price: 'R3 000',
    features: [
      '3 hours of photos',
      '200 high resolution digital images',
    ],
  },
  {
    title: 'Package 3',
    price: 'R4 000',
    features: [
      '4 hours of photos',
      '275 high resolution images',
    ],
  },
];

export default function GalleryPage({ onBack }: GalleryPageProps) {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white pt-28 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-center text-white mb-12">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="border border-gold-400/20 bg-charcoal-900/40 p-8 rounded-lg text-center hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-xl font-medium text-white mb-4">{pkg.title}</h3>
                <div className="w-8 h-px bg-gold-400/40 mx-auto mb-6" />
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-white/70 text-sm font-light">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-serif text-2xl font-light text-gold-300">{pkg.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group inline-flex items-center gap-3 bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-500"
        >
          Enquire Now
        </button>
      </div>

      {/* Gallery Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-white">
          Photography Gallery
        </h2>
        <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Collage Grid - Fluid Masonry Layout to maintain original sizes & aspect ratios */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance] box-border">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative overflow-hidden rounded-lg shadow-lg mb-6 bg-charcoal-900"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-[1.2s] hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
