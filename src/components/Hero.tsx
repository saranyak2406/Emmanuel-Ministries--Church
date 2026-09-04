import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { MINISTRY } from '@/lib/constants';

const SLIDES = [
  '/images/slideshow/img1.jpg',
  '/images/slideshow/image2.jpg',
  '/images/slideshow/image 3.jpg',
  '/images/slideshow/1001500386.jpg',
  '/images/slideshow/1001500423.jpg',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">

      {/* Background Church Photo */}
      <div className="absolute inset-0">
        <img
          src="/church-building.jpg"
          alt="Church background"
          className="h-full w-full object-cover animate-slow-zoom opacity-50"
        />
      </div>

      {/* Dark Overlay for Text Readability over the church background */}
      <div className="absolute inset-0 bg-charcoal-950/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent" />

      {/* Content */}
      <div className="container-max relative z-20 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Text Column (Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow !text-gold-400 mb-6 animate-fade-in" style={{ animationDelay: '0.05s' }}>
              {MINISTRY.location}
            </p>

            <h1 className="text-display md:text-[3.5rem] font-serif font-bold text-ivory-50 text-balance leading-tight">
              <span className="block animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Proclaiming Jesus Christ
              </span>
              <span className="block animate-fade-up text-brand-400 mt-1" style={{ animationDelay: '0.25s' }}>
                Reaching Souls
              </span>
            </h1>

            <p
              className="mt-6 text-xl md:text-2xl font-serif italic text-gold-200 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              Raising Disciples &amp; Advancing God&rsquo;s Kingdom
            </p>

            <p
              className="mt-4 max-w-lg text-base md:text-lg text-ivory-300 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.55s' }}
            >
              Emmanuel Gospel Ministries is a Christ-centered ministry committed to carrying His message of salvation, hope, and healing to nations.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <button
                onClick={() => document.querySelector('#meetings')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Join a Meeting
              </button>
              <button
                onClick={() => document.querySelector('#prayer')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-light"
              >
                Request Prayer
              </button>
            </div>
          </div>

          {/* Image Slideshow Column (Right) - Uncropped! */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* The glass frame for the uncut image */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-4 lg:p-8">

              {SLIDES.map((slide, index) => (
                <img
                  key={slide}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  // object-contain ensures the image is NEVER cut!
                  className={`absolute max-w-[95%] max-h-[95%] w-auto h-auto rounded-lg object-contain transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                />
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory-200/50">Scroll</span>
        <ChevronDown className="h-5 w-5 text-ivory-200/60 animate-bounce" />
      </div>

    </section>
  );
}
