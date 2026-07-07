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
  const hasColours = product.colourPalette && product.colourPalette.length > 0;

  const hasPaletteImage = !!product.paletteImage;

  // ── Wide variant — palette IMAGE (photo of all colours) ───────
  if (hasPaletteImage) {
    return (
      <div className="group bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-gold-200 flex flex-col sm:flex-row">
        {/* LEFT – product image + info */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            {!imageLoaded && <div className="absolute inset-0 bg-charcoal-100 animate-pulse" />}
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-contain transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal-700 font-medium">
              {product.category}
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">
                {product.title}
              </h3>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-charcoal-300 mb-0.5">
                  {isEnquire ? 'Pricing' : 'Price / unit'}
                </p>
                <p className={`font-serif text-gold-600 font-medium leading-none ${isEnquire ? 'text-base' : 'text-xl'}`}>
                  {isEnquire ? 'Enquire' : displayPrice}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-charcoal-100 self-stretch my-5" />

        {/* RIGHT – palette photo + colour names */}
        <div className="flex flex-col justify-center gap-4 px-6 py-6 flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-charcoal-300">
            Available Colours
          </p>
          {/* Palette photo */}
          <img
            src={product.paletteImage}
            alt="Colour palette"
            className="w-full rounded object-contain"
            style={{ maxHeight: '160px' }}
          />
          {/* Colour name labels – 2-column grid */}
          {product.colourPalette && product.colourPalette.length > 0 && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {product.colourPalette.map((swatch) => (
                <span key={swatch.name} className="text-charcoal-600 text-xs leading-relaxed">
                  {swatch.name}
                </span>
              ))}
            </div>
          )}
          <p className="text-charcoal-300 text-[10px] italic leading-relaxed">
            If colour choice is not included, please enquire as there are multiple options available.
          </p>
        </div>
      </div>
    );
  }

  // ── Wide variant — colour swatches (circles) ──────────────────

  if (hasColours) {
    return (
      <div className="group bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-gold-200 flex flex-col sm:flex-row">
        {/* LEFT – image + info */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            {!imageLoaded && <div className="absolute inset-0 bg-charcoal-100 animate-pulse" />}
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-contain transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Category badge */}
            <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal-700 font-medium">
              {product.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">
                {product.title}
              </h3>
            </div>
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

        {/* Divider */}
        <div className="w-px bg-charcoal-100 self-stretch my-5" />

        {/* RIGHT – colour palette */}
        <div className="flex flex-col justify-center gap-4 px-8 py-6 flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-charcoal-300 mb-1">
            Available Colours
          </p>
          {product.colourPalette!.map((swatch) => (
            <div key={swatch.name} className="flex items-center gap-4">
              {/* Swatch circle */}
              <span
                className="flex-shrink-0 w-9 h-9 rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
                style={{
                  backgroundColor: swatch.hex,
                  border: swatch.border ? '1.5px solid #d1c9be' : '1.5px solid transparent',
                }}
              />
              {/* Label */}
              <span className="text-charcoal-700 text-sm font-medium flex-1">{swatch.name}</span>
              {/* Qty */}
              {swatch.qty !== undefined && (
                <span className="text-charcoal-300 text-xs ml-auto whitespace-nowrap">Qty: {swatch.qty}</span>
              )}
            </div>
          ))}



        </div>
      </div>
    );
  }

  // ── Standard variant ─────────────────────────────────────────
  return (
    <div className="group bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-gold-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {!imageLoaded && <div className="absolute inset-0 bg-charcoal-100 animate-pulse" />}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain transition-opacity duration-700 ${
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
        <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">
          {product.title}
        </h3>
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
