import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 7 slideshow photos — 5 provided + 2 existing
const SLIDES = [
  {
    src: '/images/slideshow/1001500386.jpg',
    alt: 'Emmanuel Gospel Ministries — Worship Speaker',
    caption: 'Proclaiming the Word of God',
  },
  {
    src: '/images/slideshow/img1.jpg',
    alt: 'Evangelist Emmanuel Abraham — Preaching the Gospel',
    caption: 'Evangelist Emmanuel Abraham',
  },
  {
    src: '/images/slideshow/1001500423.jpg',
    alt: 'Emmanuel Gospel Ministries — Ministry Leaders',
    caption: 'Serving Together in Ministry',
  },
  {
    src: '/images/slideshow/image 3.jpg',
    alt: 'Emmanuel Gospel Ministries — Bible Teaching',
    caption: 'Teaching God\u2019s Word',
  },
  {
    src: '/images/slideshow/image2.jpg',
    alt: 'Evangelist Emmanuel Abraham — Gospel Preaching',
    caption: 'Preaching Christ to the Nations',
  },
  {
    src: '/images/slideshow/790b93a3-9c0a-42a8-8d3f-aaa67b87e1ce.png',
    alt: 'Emmanuel Gospel Ministries — Our Congregation',
    caption: 'Our Congregation \u2014 Gathered in His Name',
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-charcoal-950">
      {/* Slide container */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${i === current
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 z-0'
              }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/10 to-charcoal-900/30" />
            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
              <div className="container-max">
                <div
                  className={`transition-all duration-700 delay-200 ${i === current
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                    }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 mb-2">
                    Emmanuel Gospel Ministries
                  </p>
                  <h3 className="font-serif text-xl md:text-3xl font-bold text-ivory-50">
                    {slide.caption}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivory-50/15 backdrop-blur-sm border border-ivory-50/20 flex items-center justify-center text-ivory-50 transition-all duration-300 hover:bg-ivory-50/30 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivory-50/15 backdrop-blur-sm border border-ivory-50/20 flex items-center justify-center text-ivory-50 transition-all duration-300 hover:bg-ivory-50/30 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${i === current
                ? 'w-8 h-2.5 bg-gold-400'
                : 'w-2.5 h-2.5 bg-ivory-50/40 hover:bg-ivory-50/70'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
