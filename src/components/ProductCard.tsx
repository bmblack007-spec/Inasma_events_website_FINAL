import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const CARD_SHELL = 'group bg-white border border-charcoal-100 overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-gold-200';
const PRICE_LABEL = 'text-[10px] uppercase tracking-widest text-charcoal-300 mb-0.5';

function CardImage({ src, alt, category, onLoad, loaded }: {
  src: string; alt: string; category: string;
  onLoad: () => void; loaded: boolean;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-white">
      {!loaded && <div className="absolute inset-0 bg-charcoal-100 animate-pulse" />}
      <img
        src={src} alt={alt} loading="lazy" onLoad={onLoad}
        className={`w-full h-full object-contain transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal-700 font-medium">
        {category}
      </div>
    </div>
  );
}

function PriceRow({ isEnquire, displayPrice }: { isEnquire: boolean; displayPrice: string }) {
  return (
    <div className="min-w-0">
      <p className={PRICE_LABEL}>{isEnquire ? 'Pricing' : 'Price / unit'}</p>
      <p className={`font-serif text-gold-600 font-medium leading-none ${isEnquire ? 'text-base' : 'text-xl'}`}>
        {isEnquire ? 'Enquire' : displayPrice}
      </p>
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const displayPrice = product.priceLabel ?? `R${product.price.toFixed(2)}`;
  const isEnquire = product.priceLabel === 'Enquire' || product.price === 0;
  const hasColours = (product.colourPalette?.length ?? 0) > 0;
  const hasPaletteImage = !!product.paletteImage;

  // ── Wide: palette photo ────────────────────────────────────────
  if (hasPaletteImage) {
    return (
      <div className={`${CARD_SHELL} flex flex-col sm:flex-row`}>
        <div className="flex flex-col flex-1 min-w-0">
          <CardImage src={product.image} alt={product.title} category={product.category}
            onLoad={() => setImageLoaded(true)} loaded={imageLoaded} />
          <div className="p-5 flex-1 flex flex-col justify-between">
            <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">{product.title}</h3>
            <PriceRow isEnquire={isEnquire} displayPrice={displayPrice} />
          </div>
        </div>
        <div className="w-px bg-charcoal-100 self-stretch my-5" />
        <div className="flex flex-col justify-center gap-4 px-6 py-6 flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-charcoal-300">Available Colours</p>
          <img src={product.paletteImage} alt="Colour palette" className="w-full rounded object-contain" style={{ maxHeight: '160px' }} />
          {hasColours && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {product.colourPalette!.map((s) => (
                <span key={s.name} className="text-charcoal-600 text-xs leading-relaxed">{s.name}</span>
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

  // ── Wide: colour swatches ──────────────────────────────────────
  if (hasColours) {
    return (
      <div className={`${CARD_SHELL} flex flex-col sm:flex-row`}>
        <div className="flex flex-col flex-1 min-w-0">
          <CardImage src={product.image} alt={product.title} category={product.category}
            onLoad={() => setImageLoaded(true)} loaded={imageLoaded} />
          <div className="p-5 flex-1 flex flex-col justify-between">
            <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">{product.title}</h3>
            <PriceRow isEnquire={isEnquire} displayPrice={displayPrice} />
          </div>
        </div>
        <div className="w-px bg-charcoal-100 self-stretch my-5" />
        <div className="flex flex-col justify-center gap-4 px-8 py-6 flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest text-charcoal-300 mb-1">Available Colours</p>
          {product.colourPalette!.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full shadow-sm transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: s.hex, border: s.border ? '1.5px solid #d1c9be' : '1.5px solid transparent' }} />
              <span className="text-charcoal-700 text-sm font-medium flex-1">{s.name}</span>
              {s.qty !== undefined && <span className="text-charcoal-300 text-xs ml-auto whitespace-nowrap">Qty: {s.qty}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Standard ──────────────────────────────────────────────────
  return (
    <div className={CARD_SHELL}>
      <CardImage src={product.image} alt={product.title} category={product.category}
        onLoad={() => setImageLoaded(true)} loaded={imageLoaded} />
      <div className="p-5">
        <h3 className="font-serif text-charcoal-900 text-lg font-medium mb-4 leading-snug line-clamp-2">{product.title}</h3>
        <PriceRow isEnquire={isEnquire} displayPrice={displayPrice} />
      </div>
    </div>
  );
}
