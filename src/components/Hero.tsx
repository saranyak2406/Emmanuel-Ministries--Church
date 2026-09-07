import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { MINISTRY } from '@/lib/constants';

const SLIDES = [
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.56 PM.jpeg',
  '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.57 PM.jpeg',
  '/images/slideshow/e2659171-d689-4189-9460-01d204a70954.jpg',
  '/images/slideshow/img1.jpg',
  '/images/slideshow/image2.jpg',
  '/images/slideshow/image 3.jpg',
  '/images/slideshow/1001500386.jpg',
  '/images/slideshow/1001500423.jpg',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex bg-ivory-50">
      
      {/* Right Side - Image Slideshow (Fills the right half perfectly) */}
      <div className="absolute right-0 bottom-0 top-[60vh] lg:top-0 w-full lg:w-[50%] z-0 bg-charcoal-950">
        
        {/* Crisp Image Layer (Fills area, aligned to top so heads aren't cut off) */}
        {SLIDES.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}

      </div>

      {/* Slideshow Controls (Left and Right Edges) */}
      <div className="absolute inset-x-0 top-[80%] lg:top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-50 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-charcoal-950/70 text-white hover:bg-gold-400 hover:text-charcoal-950 transition-colors backdrop-blur-sm border border-ivory-200/20 shadow-lg pointer-events-auto"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-charcoal-950/70 text-white hover:bg-gold-400 hover:text-charcoal-950 transition-colors backdrop-blur-sm border border-ivory-200/20 shadow-lg pointer-events-auto"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Left Chevron Overlay (Gold Border) */}
      <div 
        className="absolute top-0 left-0 w-full lg:w-[56%] h-[60vh] lg:h-full bg-gold-400 z-10 transition-all duration-500 lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)] pointer-events-none"
      />

      {/* Left Chevron Overlay (Deep Blue Background with Content) */}
      <div 
        className="absolute top-0 left-0 w-full lg:w-[55%] h-[59vh] lg:h-full bg-brand-900 z-20 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 transition-all duration-500 lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)] pb-10 lg:pb-0"
      >
        <div className="max-w-xl animate-fade-in text-left pointer-events-auto pt-16 sm:pt-20 lg:pt-0">
          <p className="eyebrow !text-gold-400 mb-3 lg:mb-6" style={{ animationDelay: '0.05s' }}>
            Hyderabad, Telangana, India
          </p>

          <h1 className="text-display text-4xl sm:text-5xl md:text-[4rem] font-serif font-medium text-white leading-[1.1] tracking-tight mb-3 lg:mb-6">
            <span className="block animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Proclaiming Jesus Christ
            </span>
            <span className="block animate-fade-up text-white mt-1 lg:mt-2" style={{ animationDelay: '0.25s' }}>
              Reaching Souls
            </span>
          </h1>

          <p
            className="mt-2 lg:mt-6 text-base sm:text-lg lg:text-2xl font-serif italic text-gold-400 animate-fade-up font-medium"
            style={{ animationDelay: '0.4s' }}
          >
            Raising Disciples & Advancing God’s Kingdom
          </p>

          <p
            className="mt-2 lg:mt-4 text-sm lg:text-lg text-ivory-200 leading-relaxed animate-fade-up hidden sm:block"
            style={{ animationDelay: '0.55s' }}
          >
            Emmanuel Gospel Ministries is a Christ-centered ministry committed to carrying His message of salvation, hope, and healing to nations.
          </p>

          <div
            className="mt-5 lg:mt-10 flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s' }}
          >
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="btn-primary !text-charcoal-900 relative z-50 cursor-pointer shadow-lg w-full sm:w-auto"
            >
              Join a Meeting
            </button>
            <button
              onClick={() => document.querySelector('#prayer')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-light !bg-transparent !border-gold-400 !text-gold-400 hover:!bg-gold-400 hover:!text-charcoal-900 relative z-50 cursor-pointer w-full sm:w-auto"
            >
              Request Prayer
            </button>
          </div>
        </div>
      </div>

      {/* Join Meeting Modal */}
      {isJoinModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/80 backdrop-blur-sm p-4"
          onClick={() => setIsJoinModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-md shadow-2xl bg-white flex flex-col p-8 md:p-10 text-center animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-charcoal-50 flex items-center justify-center text-charcoal-500 hover:bg-charcoal-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h2 className="text-3xl font-serif font-medium text-charcoal-900 mb-3">Join Our Meetings</h2>
            <p className="text-charcoal-600 mb-8 leading-relaxed">
              We would love to have you worship and grow with us! Join us in-person or watch us live online.
            </p>
            
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center gap-4 p-4 rounded-md bg-ivory-50 border border-charcoal-100">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-700"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-charcoal-900">In-Person Gatherings</h4>
                  <p className="text-sm text-charcoal-500">Hyderabad, Telangana & Kakinada, AP</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-md bg-ivory-50 border border-charcoal-100">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-charcoal-900">Watch Online</h4>
                  <a href="https://www.youtube.com/@emmanuelgospelministries" target="_blank" rel="noreferrer" className="text-sm text-brand-700 font-medium hover:underline">
                    Subscribe on YouTube
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsJoinModalOpen(false);
                document.querySelector('#meetings')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 bg-brand-900 hover:bg-charcoal-950 text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors shadow-sm"
            >
              See Upcoming Schedule
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
