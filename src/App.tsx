import { useState, useCallback } from 'react';
import type { Category } from './data/products';
import { categories, products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import ProductGallery from './components/ProductGallery';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesSection from './components/ServicesSection';
import GalleryPage from './components/GalleryPage';

type Page = 'home' | 'catalogue' | 'gallery';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const scrollToSection = useCallback((id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleCategorySelect = useCallback(
    (cat: Category | 'All') => {
      setActiveCategory(cat);
      scrollToSection('catalogue');
    },
    [scrollToSection]
  );

  const handleNavigate = useCallback(
    (section: string) => {
      if (section === 'home') {
        if (page !== 'home') {
          setPage('home');
          window.scrollTo({ top: 0, behavior: 'auto' });
          return;
        }
        scrollToSection('hero');
      } else if (section === 'services') {
        if (page !== 'home') {
          setPage('home');
          window.scrollTo({ top: 0, behavior: 'auto' });
          setTimeout(() => scrollToSection('services'), 100);
          return;
        }
        scrollToSection('services');
      } else if (section === 'catalogue' || section === 'categories') {
        if (page !== 'catalogue') {
          setPage('catalogue');
          window.scrollTo({ top: 0, behavior: 'auto' });
          if (section === 'categories') {
            setTimeout(() => scrollToSection('catalogue'), 100);
          }
          return;
        }
        scrollToSection(section === 'catalogue' ? 'hero' : 'catalogue');
      } else if (section === 'contact') {
        if (page === 'gallery') {
          setPage('home');
          window.scrollTo({ top: 0, behavior: 'auto' });
          setTimeout(() => scrollToSection('contact'), 100);
          return;
        }
        scrollToSection('contact');
      }
    },
    [page, scrollToSection]
  );

  const handleExploreServices = useCallback(() => {
    scrollToSection('services');
  }, [scrollToSection]);

  if (page === 'gallery') {
    return (
      <div className="min-h-screen bg-charcoal-950">
        <Navbar onNavigate={handleNavigate} />
        <GalleryPage onBack={() => handleNavigate('services')} />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar onNavigate={handleNavigate} />
        <ServicesHero onExplore={handleExploreServices} onViewCatalogue={() => handleNavigate('catalogue')} />
        <BrandIntro />
        <ServicesSection 
          onViewGallery={() => { setPage('gallery'); window.scrollTo({ top: 0, behavior: 'auto' }); }} 
          onViewCatalogue={() => handleNavigate('catalogue')} 
        />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onNavigate={handleNavigate} />
      <Hero onViewCatalogue={() => scrollToSection('catalogue')} />
      
      {/* Catalogue Information Banner */}
      <div className="bg-cream py-6 sm:py-8 border-b border-gold-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gold-200 p-4 sm:p-6 md:p-8 shadow-[0_4px_25px_rgba(198,147,58,0.05)]">
            <ul className="space-y-3 text-charcoal-600 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-gold-500 font-bold select-none">•</span>
                <span>Please Enquire about Quantities / Date availability</span>
              </li>
              <li className="flex items-start gap-2.5 font-semibold text-charcoal-900">
                <span className="text-gold-500 font-bold select-none">•</span>
                <span>We are not Limited to the stock items on this catalogue, please enquire about any specific products required</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold-500 font-bold select-none">•</span>
                <span>Please Note: Colours shown on screen might differ slightly from the naked eye</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold-500 font-bold select-none">•</span>
                <span>We provide a delivery service at an additional charge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ProductGallery
        products={products}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={categories}
      />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
