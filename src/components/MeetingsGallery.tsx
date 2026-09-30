import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.44 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.56 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.57 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.58 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.47.56 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.47.56 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.47.57 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.00 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.00 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.01 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.03 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.03 PM (2).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.03 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.04 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.04 PM (2).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.04 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.06 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.08 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-28 at 2.48.10 PM (1).jpeg',
  '/images/slideshow/e2659171-d689-4189-9460-01d204a70954.jpg',
  '/images/slideshow/image 3.jpg',
  '/images/slideshow/image2.jpg',
  '/images/slideshow/img1.jpg'
];

export default function MeetingsGallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <section className="py-24 bg-ivory-50 overflow-hidden relative">
      <div ref={ref} className="container-max px-4 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Column: The Slideshow with Decorative Elements */}
          <div className={`relative reveal ${isVisible ? 'is-visible' : ''}`}>
            
            {/* Decorative Offset Outlines */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-32 h-32 border border-gold-300 rounded-3xl rounded-br-[64px] z-0 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border border-brand-300 rounded-3xl rounded-tl-[64px] z-0 pointer-events-none" />

            {/* Main Slideshow Container */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 group bg-charcoal-950">
              
              {/* Images */}
              {IMAGES.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div 
                    className={`w-full h-full transform transition-transform duration-[10000ms] ease-linear flex items-center justify-center ${
                      index === currentIndex ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <img 
                      src={src} 
                      alt={`Ministry Meeting ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Navigation Arrows (visible on hover) */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/80 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-colors"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/80 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-colors"><ChevronRight className="w-6 h-6" /></button>
              </div>

              {/* Bottom Decorative Gold Bar & Slide Controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between shadow-lg z-20 overflow-hidden">
                <div className="text-white min-w-0 pr-3">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-85 mb-0.5 truncate">Global Reach</p>
                  <p className="font-serif font-bold text-base sm:text-lg leading-none truncate">Ministry Events</p>
                </div>
                
                {/* Slide Counter & Controls */}
                <div className="flex items-center gap-1.5 shrink-0 bg-black/25 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-white border border-white/20 shadow-inner">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="p-0.5 hover:bg-white/25 active:scale-90 rounded-full transition-all text-white/90 hover:text-white"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-semibold tracking-wider px-1 font-mono select-none">
                    {String(currentIndex + 1).padStart(2, '0')}&nbsp;<span className="opacity-40 font-normal">/</span>&nbsp;{String(IMAGES.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="p-0.5 hover:bg-white/25 active:scale-90 rounded-full transition-all text-white/90 hover:text-white"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Progress line along bottom of the gold card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
                  <div 
                    className="h-full bg-white/90 transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / IMAGES.length) * 100}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className={`text-center lg:text-left reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">
              Ministry Impact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-8 leading-tight">
              National & <br/>International <br/>Meetings
            </h2>
            
            <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed mb-10">
              <p>
                Participating in national and international gatherings, prayer meetings, conventions, and ministry events.
              </p>
              <p>
                We are dedicated to sharing the Gospel, receiving prayers and blessings, and connecting with people and ministries across different communities.
              </p>
            </div>

            <div className="relative pl-8 border-l-4 border-gold-400">
              <p className="font-serif italic text-xl text-charcoal-800 leading-relaxed">
                “Our desire is not to build our name, but to make the name of Jesus Christ known and to serve His Kingdom.”
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
