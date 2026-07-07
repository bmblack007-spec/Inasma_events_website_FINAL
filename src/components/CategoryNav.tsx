import {
  Armchair,
  SquareStack,
  Footprints,
  Frame,
  Lightbulb,
  Gem,
  Flower2,
  UtensilsCrossed,
  Circle,
  Wine,
  Disc,
  Shirt,
  Table,
  Layers,
  Trees,
  PackagePlus,
  type LucideIcon,
} from 'lucide-react';
import type { Category } from '../data/products';

interface CategoryNavProps {
  categories: { name: Category; icon: string }[];
  activeCategory: Category | 'All';
  onSelect: (cat: Category | 'All') => void;
}

const iconMap: Record<string, LucideIcon> = {
  Armchair,
  SquareStack,
  Footprints,
  Frame,
  Lightbulb,
  Gem,
  Flower2,
  UtensilsCrossed,
  Circle,
  Wine,
  Disc,
  Shirt,
  Table,
  Layers,
  Trees,
  PackagePlus,
};

export default function CategoryNav({ categories, activeCategory, onSelect }: CategoryNavProps) {
  return (
    <section id="categories" className="pt-10 pb-4 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {/* ALL Button */}
          <button
            onClick={() => onSelect('All')}
            className={`group flex flex-col items-center justify-center gap-3 p-4 md:p-5 border transition-all duration-400 ${
              activeCategory === 'All'
                ? 'border-gold-400 bg-white shadow-[0_4px_30px_rgba(198,147,58,0.12)]'
                : 'border-charcoal-100/70 bg-white/50 hover:border-gold-300 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            }`}
          >
            <div
              className={`transition-colors duration-300 ${
                activeCategory === 'All' ? 'text-gold-500' : 'text-charcoal-300 group-hover:text-gold-400'
              }`}
            >
              <Layers size={22} strokeWidth={1.25} />
            </div>
            <span
              className={`text-[9px] uppercase tracking-widest font-medium text-center leading-tight transition-colors duration-300 ${
                activeCategory === 'All' ? 'text-gold-600' : 'text-charcoal-500 group-hover:text-charcoal-800'
              }`}
            >
              All
            </span>
          </button>

          {/* Category buttons */}
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Gem;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelect(isActive ? 'All' : cat.name)}
                className={`group flex flex-col items-center justify-center gap-3 p-4 md:p-5 border transition-all duration-400 ${
                  isActive
                    ? 'border-gold-400 bg-white shadow-[0_4px_30px_rgba(198,147,58,0.12)]'
                    : 'border-charcoal-100/70 bg-white/50 hover:border-gold-300 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                }`}
              >
                <div
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-gold-500' : 'text-charcoal-300 group-hover:text-gold-400'
                  }`}
                >
                  <Icon size={22} strokeWidth={1.25} />
                </div>
                <span
                  className={`text-[9px] uppercase tracking-widest font-medium text-center leading-tight transition-colors duration-300 ${
                    isActive ? 'text-gold-600' : 'text-charcoal-500 group-hover:text-charcoal-800'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
