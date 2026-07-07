import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const displayPrice = product.priceLabel
    ? product.priceLabel
    : `R${product.price.toFixed(2)}`;

  const isEnquire = product.priceLabel === 'Enquire' || product.price === 0;

  return (
    <div className="group bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-gold-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-50">
        {!imageLoaded && <div className="absolute inset-0 bg-charcoal-100 animate-pulse" />}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal-700 font-medium">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-2 leading-snug line-clamp-2">
          {product.title}
        </h3>
        <p className="text-charcoal-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-widest text-charcoal-300 mb-0.5">
              {isEnquire ? 'Pricing' : 'Price / unit'}
            </p>
            <p
              className={`font-serif text-gold-600 font-medium leading-none ${
                isEnquire ? 'text-base' : 'text-xl'
              }`}
            >
              {isEnquire ? 'Enquire' : displayPrice}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
