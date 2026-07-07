import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import type { Product, Category } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGalleryProps {
  products: Product[];
  activeCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
  categories: { name: Category; icon: string }[];
}

// ── Fuzzy helpers ──────────────────────────────────────────────
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function fuzzyTokenMatch(query: string, target: string): boolean {
  const qTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const tTokens = target.toLowerCase().split(/\s+/).filter(Boolean);
  return qTokens.every((qt) => {
    if (target.toLowerCase().includes(qt)) return true;
    const maxDist = qt.length <= 4 ? 1 : 2;
    return tTokens.some((tt) => levenshtein(qt, tt) <= maxDist);
  });
}

function productSearchText(p: Product): string {
  const swatchNames = (p.colourPalette ?? []).map((s) => s.name).join(' ');
  return [p.title, p.category, p.description ?? '', swatchNames].join(' ');
}
// ──────────────────────────────────────────────────────────────

export default function ProductGallery({
  products,
  activeCategory,
  onCategoryChange,
  categories,
}: ProductGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categoryFiltered = useMemo(
    () => (activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)),
    [products, activeCategory]
  );

  const sorted = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return categoryFiltered;
    return categoryFiltered.filter((p) => fuzzyTokenMatch(q, productSearchText(p)));
  }, [categoryFiltered, searchQuery]);

  const filterOptions: (Category | 'All')[] = ['All', ...categories.map((c) => c.name)];
  const hasSearch = searchQuery.trim().length > 0;

  return (
    <section id="catalogue" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-xs uppercase tracking-widest mb-3">Our Collection</p>
          <h2 className="font-serif text-charcoal-900 text-3xl md:text-5xl font-light">
            The Catalogue
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Ordering info banner */}
        <div className="max-w-2xl mx-auto mb-10 border border-gold-200 bg-white px-6 py-5 text-center">
          <p className="text-sm text-charcoal-600 leading-relaxed">
            All orders and queries are handled via{' '}
            <a href="mailto:b.r.maxwell00@gmail.com" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">email</a>,{' '}
            <a href="https://wa.me/27813566058" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">WhatsApp</a>, or{' '}
            <a href="tel:0813566058" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">phone</a>.
          </p>
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

        {/* Filter bar */}
        <div className="flex flex-col gap-5 mb-10">
          {/* Category pills — horizontally scrollable */}
          <div className="flex items-end gap-2">
            <span className="flex-shrink-0 text-gold-400 font-light text-lg select-none pointer-events-none translate-y-2">&lt;</span>
            <div className="overflow-x-auto pb-2 flex-1 min-w-0">
              <div className="flex gap-2 w-max">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => onCategoryChange(opt)}
                    className={`flex-shrink-0 px-4 py-2 text-[10px] uppercase tracking-widest font-medium border transition-all duration-300 whitespace-nowrap ${activeCategory === opt
                        ? 'bg-charcoal-900 text-white border-charcoal-900'
                        : 'bg-transparent text-charcoal-500 border-charcoal-200 hover:border-gold-400 hover:text-gold-500'
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <span className="flex-shrink-0 text-gold-400 font-light text-lg select-none pointer-events-none translate-y-2">&gt;</span>
          </div>

          {/* Count row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs uppercase tracking-widest text-charcoal-400">
              {sorted.length} {sorted.length === 1 ? 'item' : 'items'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {hasSearch && ` matching "${searchQuery.trim()}"`}
            </p>
          </div>
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
      </div>
    </section>
  );
}

