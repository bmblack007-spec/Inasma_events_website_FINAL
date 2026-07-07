import { useState, useCallback } from 'react';
import type { Category } from './data/products';
import { categories, products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import CategoryNav from './components/CategoryNav';
import ProductGallery from './components/ProductGallery';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesSection from './components/ServicesSection';

type Page = 'home' | 'services';

export default function App() {
  const [page, setPage] = useState<Page>('services');
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
      if (section === 'services') {
        setPage('services');
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
      if (section === 'home' || section === 'catalogue' || section === 'categories' || section === 'contact') {
        if (page !== 'home') {
          setPage('home');
          window.scrollTo({ top: 0, behavior: 'auto' });
          setTimeout(() => scrollToSection(section === 'home' ? 'hero' : section), 100);
          return;
        }
        scrollToSection(section === 'home' ? 'hero' : section);
      }
    },
    [page, scrollToSection]
  );

  const handleExploreServices = useCallback(() => {
    scrollToSection('services');
  }, [scrollToSection]);

  if (page === 'services') {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar onNavigate={handleNavigate} variant="services" />
        <ServicesHero onExplore={handleExploreServices} />
        <BrandIntro />
        <ServicesSection />
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onNavigate={handleNavigate} variant="home" />
      <Hero onViewCatalogue={() => scrollToSection('catalogue')} />
      <BrandIntro />
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelect={handleCategorySelect}
      />
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
