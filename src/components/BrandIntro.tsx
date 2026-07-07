export default function BrandIntro() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-950 text-white relative overflow-hidden">
      {/* Subtle gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold-400" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-gold-400" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-gold-400 text-xs uppercase tracking-widest mb-6">The INASMA Difference</p>
        <blockquote className="font-serif text-2xl md:text-4xl font-light leading-relaxed italic text-white/90">
          "Every detail is an opportunity to elevate the ordinary into the unforgettable. We don't just do events, we curate the backdrop to your most cherished memories."
        </blockquote>
        <div className="w-12 h-px bg-gold-400 mx-auto mt-8 mb-4" />
        <p className="text-white/50 text-sm tracking-wide uppercase">The INASMA Philosophy</p>
      </div>
    </section>
  );
}
