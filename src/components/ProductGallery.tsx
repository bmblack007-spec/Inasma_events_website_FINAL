import { useState } from 'react';
import type { Product, Category } from '../data/products';
import ProductCard from './ProductCard';

interface ProductGalleryProps {
  products: Product[];
  activeCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
  categories: { name: Category; icon: string }[];
}

export default function ProductGallery({
  products,
  activeCategory,
  onCategoryChange,
  categories,
}: ProductGalleryProps) {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filtered =
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  const filterOptions: (Category | 'All')[] = ['All', ...categories.map((c) => c.name)];

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
        <div className="max-w-2xl mx-auto mb-12 border border-gold-200 bg-white px-6 py-5 text-center">
          <p className="text-sm text-charcoal-600 leading-relaxed">
            All orders and queries are handled via{' '}
            <a href="mailto:b.r.maxwell00@gmail.com" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">email</a>,{' '}
            <a href="https://wa.me/27813566058" target="_blank" rel="noopener noreferrer" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">WhatsApp</a>, or{' '}
            <a href="tel:0813566058" className="text-gold-600 font-medium hover:text-gold-500 transition-colors">phone</a>.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col gap-5 mb-10">
          {/* Category pills — horizontally scrollable */}
          <div className="overflow-x-auto pb-2 -mx-6 px-6">
            <div className="flex gap-2 w-max">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onCategoryChange(opt)}
                  className={`flex-shrink-0 px-4 py-2 text-[10px] uppercase tracking-widest font-medium border transition-all duration-300 whitespace-nowrap ${
                    activeCategory === opt
                      ? 'bg-charcoal-900 text-white border-charcoal-900'
                      : 'bg-transparent text-charcoal-500 border-charcoal-200 hover:border-gold-400 hover:text-gold-500'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Sort + count row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs uppercase tracking-widest text-charcoal-400">
              {sorted.length} {sorted.length === 1 ? 'item' : 'items'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-charcoal-400">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white border border-charcoal-200 text-charcoal-700 text-xs uppercase tracking-widest px-3 py-2 focus:outline-none focus:border-gold-400 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product grid */}
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-charcoal-400 text-xl">No items found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {sorted.map((product, idx) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
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
