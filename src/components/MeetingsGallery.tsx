import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.44 PM (1).jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.56 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.57 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.58 PM.jpeg',
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
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-gold-300 rounded-3xl rounded-br-[64px] z-0" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-brand-300 rounded-3xl rounded-tl-[64px] z-0" />

            {/* Main Slideshow Container */}
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 group">
              
              {/* Images */}
              {IMAGES.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div 
                    className={`w-full h-full transform transition-transform duration-[10000ms] ease-linear ${
                      index === currentIndex ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <img 
                      src={src} 
                      alt={`Ministry Meeting ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}

              {/* Navigation Arrows (visible on hover) */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/80 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-colors"><ChevronLeft className="w-6 h-6" /></button>
                <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/80 text-charcoal-900 flex items-center justify-center hover:bg-white shadow-md transition-colors"><ChevronRight className="w-6 h-6" /></button>
              </div>

              {/* Bottom Decorative Gold Bar & Dots */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-gold-600 to-gold-500 rounded-2xl p-4 flex items-center justify-between shadow-lg z-20">
                <div className="text-white">
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-0.5">Global Reach</p>
                  <p className="font-serif font-bold text-lg leading-none">Ministry Events</p>
                </div>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                        index === currentIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
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
