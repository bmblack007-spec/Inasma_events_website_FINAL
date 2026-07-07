import { useState, useMemo } from 'react';
import {
  Search, X,
  Armchair, SquareStack, Footprints, Frame, Lightbulb, Gem, Flower2,
  UtensilsCrossed, Circle, Wine, Disc, Shirt, Table, Layers, Trees, PackagePlus,
  type LucideIcon,
} from 'lucide-react';
import type { Product, Category } from '../data/products';
import ProductCard from './ProductCard';

const iconMap: Record<string, LucideIcon> = {
  Armchair, SquareStack, Footprints, Frame, Lightbulb, Gem, Flower2,
  UtensilsCrossed, Circle, Wine, Disc, Shirt, Table, Layers, Trees, PackagePlus,
};

interface ProductGalleryProps {
  products: Product[];
  activeCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
  categories: { name: Category; icon: string }[];
}

// ── Fuzzy helpers ──────────────────────────────────────────────
function levenshtein(a: string, b: string): number {
  if (a.length > b.length) {
    const tmp = a; a = b; b = tmp;
  }
  const la = a.length;
  const lb = b.length;
  if (la === 0) return lb;
  
  const prevRow = new Int32Array(la + 1);
  for (let i = 0; i <= la; i++) {
    prevRow[i] = i;
  }
  
  for (let i = 1; i <= lb; i++) {
    let prevDiag = prevRow[0];
    prevRow[0] = i;
    const bChar = b[i - 1];
    for (let j = 1; j <= la; j++) {
      const temp = prevRow[j];
      if (a[j - 1] === bChar) {
        prevRow[j] = prevDiag;
      } else {
        prevRow[j] = 1 + Math.min(prevRow[j - 1], prevRow[j], prevDiag);
      }
      prevDiag = temp;
    }
  }
  return prevRow[la];
}

function fuzzyTokenMatch(qTokens: string[], lowerSearchText: string, tTokens: string[]): boolean {
  return qTokens.every((qt) => {
    if (lowerSearchText.includes(qt)) return true;
    const maxDist = qt.length <= 4 ? 1 : 2;
    return tTokens.some((tt) => levenshtein(qt, tt) <= maxDist);
  });
}
// ──────────────────────────────────────────────────────────────

interface SearchableProduct {
  product: Product;
  lowerSearchText: string;
  tokens: string[];
}

export default function ProductGallery({
  products,
  activeCategory,
  onCategoryChange,
  categories,
}: ProductGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Precompute searchable content for all products to avoid allocations on search keystrokes
  const searchableProducts = useMemo<SearchableProduct[]>(() => {
    return products.map((p) => {
      const swatchNames = (p.colourPalette ?? []).map((s) => s.name).join(' ');
      const text = [p.title, p.category, p.description ?? '', swatchNames].join(' ').toLowerCase();
      const tokens = text.split(/\s+/).filter(Boolean);
      return {
        product: p,
        lowerSearchText: text,
        tokens,
      };
    });
  }, [products]);

  const sorted = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) {
      return activeCategory === 'All'
        ? products
        : products.filter((p) => p.category === activeCategory);
    }
    const qTokens = q.split(/\s+/).filter(Boolean);
    const filtered = activeCategory === 'All'
      ? searchableProducts
      : searchableProducts.filter((sp) => sp.product.category === activeCategory);
      
    return filtered
      .filter((sp) => fuzzyTokenMatch(qTokens, sp.lowerSearchText, sp.tokens))
      .map((sp) => sp.product);
  }, [products, searchableProducts, activeCategory, searchQuery]);

  const hasSearch = searchQuery.trim().length > 0;

  return (
    <section id="catalogue" className="pt-2 pb-20 md:pb-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-gold-500 text-xs uppercase tracking-widest mb-3">Our Collection</p>
          <h2 className="font-serif text-charcoal-900 text-2xl sm:text-3xl md:text-5xl font-light">
            The Catalogue
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-6" />
        </div>



        {/* ── Search bar ── */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative group">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-400 pointer-events-none transition-colors group-focus-within:text-gold-500"
            />
            <input
              id="catalogue-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items, colours, categories…"
              className="w-full pl-10 pr-10 py-3 bg-white border border-charcoal-200 text-sm text-charcoal-700 placeholder-charcoal-300 outline-none transition-all duration-300 focus:border-gold-400 focus:shadow-[0_0_0_3px_rgba(198,147,58,0.12)] tracking-wide"
            />
            {hasSearch && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-300 hover:text-charcoal-600 transition-colors"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Category icon grid — scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-8">
          <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 w-max sm:w-auto">
          {/* ALL button */}
          <button
            onClick={() => onCategoryChange('All')}
            className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 border transition-all duration-400 w-[70px] sm:w-auto ${
              activeCategory === 'All'
                ? 'border-gold-400 bg-white shadow-[0_4px_30px_rgba(198,147,58,0.12)]'
                : 'border-charcoal-100/70 bg-white/50 hover:border-gold-300 hover:bg-white'
            }`}
          >
            <div className={`transition-colors duration-300 ${
              activeCategory === 'All' ? 'text-gold-500' : 'text-charcoal-300'
            }`}>
              <Layers size={18} strokeWidth={1.25} />
            </div>
            <span className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-medium text-center leading-tight transition-colors duration-300 ${
              activeCategory === 'All' ? 'text-gold-600' : 'text-charcoal-500'
            }`}>
              All
            </span>
          </button>

          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Gem;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onCategoryChange(isActive ? 'All' : cat.name)}
                className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 border transition-all duration-400 w-[70px] sm:w-auto ${
                  isActive
                    ? 'border-gold-400 bg-white shadow-[0_4px_30px_rgba(198,147,58,0.12)]'
                    : 'border-charcoal-100/70 bg-white/50 hover:border-gold-300 hover:bg-white'
                }`}
              >
                <div className={`transition-colors duration-300 ${
                  isActive ? 'text-gold-500' : 'text-charcoal-300'
                }`}>
                  <Icon size={18} strokeWidth={1.25} />
                </div>
                <span className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-medium text-center leading-tight transition-colors duration-300 ${
                  isActive ? 'text-gold-600' : 'text-charcoal-500'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
          </div>
        </div>

        {/* Count row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-10">
          <p className="text-xs uppercase tracking-widest text-charcoal-400">
            {sorted.length} {sorted.length === 1 ? 'item' : 'items'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {hasSearch && ` matching "${searchQuery.trim()}"`}
          </p>
        </div>

        {/* Product grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-charcoal-400 text-xl">
              {hasSearch
                ? `No results for "${searchQuery.trim()}" — try different keywords.`
                : 'No items found in this category.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sorted.map((product, idx) => (
              <div
                key={product.id}
                className={`animate-fade-in-up ${(product.colourPalette || product.paletteImage) ? 'sm:col-span-2' : ''}`}
                style={{ animationDelay: `${(idx % 8) * 0.07}s`, opacity: 0 }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        {/* Enquire Button Section */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href="https://wa.me/27813566058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold-400 text-charcoal-900 px-8 sm:px-10 py-4 sm:py-5 text-xs uppercase tracking-widest font-medium hover:bg-gold-300 hover:shadow-[0_4px_25px_rgba(198,147,58,0.15)] transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}

