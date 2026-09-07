import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type CarouselItem = {
  id: string | number;
  image: string;
  category?: string;
  title?: string;
  [key: string]: any; // Allow extra data
};

interface CoverflowCarouselProps {
  items: CarouselItem[];
  categories?: string[];
  onItemClick?: (item: CarouselItem) => void;
  title?: string;
  subtitle?: string;
  size?: 'small' | 'large';
}

export default function CoverflowCarousel({ items, categories, onItemClick, title, subtitle, size = 'small' }: CoverflowCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = categories && activeCategory !== 'All' 
    ? items.filter(item => item.category === activeCategory)
    : items;

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(Math.floor(filteredItems.length / 2) || 0);
  }, [activeCategory, filteredItems.length]);

  const goTo = (index: number) => {
    if (index >= 0 && index < filteredItems.length) {
      setCurrentIndex(index);
    }
  };

  const next = () => goTo(Math.min(currentIndex + 1, filteredItems.length - 1));
  const prev = () => goTo(Math.max(currentIndex - 1, 0));

  if (filteredItems.length === 0) return null;

  const containerHeightClass = size === 'large' 
    ? 'h-[380px] md:h-[450px] lg:h-[600px]' 
    : 'h-[280px] md:h-[380px] lg:h-[450px]';

  const cardSizeClass = size === 'large'
    ? 'w-[280px] h-[380px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[600px]'
    : 'w-[200px] h-[280px] md:w-[280px] md:h-[380px] lg:w-[350px] lg:h-[450px]';

  return (
    <div className="relative w-full pb-4 pt-0 flex flex-col items-center">
      
      {/* Header section */}
      {(title || subtitle) && (
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-widest text-brand-600 uppercase mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-2">{title}</h2>
          <p className="text-charcoal-500 max-w-md mx-auto">{subtitle}</p>
        </div>
      )}

      {/* Category Pills */}
      {categories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === 'All' 
              ? 'bg-charcoal-900 text-white border-charcoal-900' 
              : 'bg-transparent text-charcoal-600 border-charcoal-300 hover:border-charcoal-900 hover:text-charcoal-900'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-charcoal-900 text-white border-charcoal-900' 
                : 'bg-transparent text-charcoal-600 border-charcoal-300 hover:border-charcoal-900 hover:text-charcoal-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* 3D Carousel Container */}
      <div className={`relative w-full max-w-[1400px] mx-auto ${containerHeightClass} flex items-center justify-center [perspective:1200px]`}>
        {filteredItems.map((item, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          
          if (absOffset > 4) return null;

          const zIndex = 50 - absOffset * 10;
          const scale = offset === 0 ? 1 : 1 - (absOffset * 0.15); 
          
          // Calculate X position taking into account the -50% base centering
          const translateX = offset === 0 
            ? '-50%' 
            : offset < 0 
              ? `calc(-50% - ${45 + absOffset * 15}% + ${absOffset * 20}px)`
              : `calc(-50% + ${45 + absOffset * 15}% - ${absOffset * 20}px)`;

          const rotateY = offset === 0 ? '0deg' : offset < 0 ? '25deg' : '-25deg';
          const blur = offset === 0 ? '0px' : `${absOffset * 2}px`;
          const brightness = offset === 0 ? 1 : 1 - (absOffset * 0.2);

          return (
            <div
              key={item.id}
              onClick={() => {
                if (offset === 0 && onItemClick) onItemClick(item);
                else goTo(index);
              }}
              className={`absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer ${cardSizeClass} ${
                offset === 0 ? 'shadow-[0_20px_50px_rgba(0,0,0,0.3)]' : 'shadow-lg'
              }`}
              style={{
                zIndex,
                transform: `translateX(${translateX}) translateY(-50%) scale(${scale}) rotateY(${rotateY})`,
                filter: `blur(${blur}) brightness(${brightness})`,
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative group bg-charcoal-100 flex items-center justify-center shadow-inner">
                <img 
                  src={item.image} 
                  alt={item.title || 'Gallery image'} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {item.title && (
                   <div className={`absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/40 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-700 ${offset === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                      {item.category && (
                        <span className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                      )}
                      <h3 className="text-white text-2xl md:text-3xl font-serif font-bold leading-snug">
                        {item.title}
                      </h3>
                   </div>
                )}

                {/* Dark overlay for side items */}
                <div className={`absolute inset-0 bg-charcoal-900 transition-opacity duration-700 pointer-events-none ${offset === 0 ? 'opacity-0' : 'opacity-50'}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-8 md:mt-12">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          disabled={currentIndex === filteredItems.length - 1}
          className="w-12 h-12 rounded-full border border-charcoal-200 flex items-center justify-center text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
