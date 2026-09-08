import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MINISTRIES_DATA = [
  { id: 'gospel-evangelism',   title: 'Gospel & Evangelism',     image: '/images/slideshow/img1.jpg', desc: 'We proclaim Jesus Christ and invite people to respond to the Gospel.' },
  { id: 'prayer-intercession', title: 'Prayer & Intercession',   image: '/images/slideshow/1001500386.jpg', desc: 'Prayer is central to our ministry. We pray for salvation, families, churches, communities and nations.' },
  { id: 'revival-meetings',    title: 'Revival Meetings',        image: '/images/slideshow/image 3.jpg', desc: 'Special meetings focused on worship, prayer, God\'s Word and spiritual renewal.' },
  { id: 'healing-restoration', title: 'Healing & Restoration',   image: '/images/slideshow/e2659171-d689-4189-9460-01d204a70954.jpg', desc: 'We pray with people who are seeking God\'s intervention, comfort, strength and restoration.' },
  { id: 'family-ministry',     title: 'Family Ministry',         image: '/images/slideshow/image2.jpg', desc: 'Encouraging families to build their relationships upon Christ and biblical principles.' },
  { id: 'youth-ministry',      title: 'Youth Ministry',          image: '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.56 PM.jpeg', desc: 'Encouraging young people to know Christ, discover God\'s purpose and live faithfully for Him.' },
  { id: 'missions-outreach',   title: 'Missions & Outreach',     image: '/images/slideshow/1001500423.jpg', desc: 'Taking the Gospel beyond our regular gatherings and serving people in different communities and locations.' },
  { id: 'bible-teaching',      title: 'Bible Teaching',          image: '/images/slideshow/WhatsApp Image 2026-09-04 at 3.36.57 PM.jpeg', desc: 'Helping believers understand God\'s Word and apply biblical truth to everyday life.' },
];

export default function Ministries() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev < MINISTRIES_DATA.length - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section id="ministries" className="bg-[#f8f9fa] relative overflow-hidden py-24">
      <div ref={ref} className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Header matching the Dribbble design */}
        <div className="mb-12 text-left pl-4 md:pl-10">
          <p className="text-xs font-bold tracking-[0.15em] text-charcoal-500 uppercase mb-4">
            Our Ministries
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal-900 max-w-2xl">
            Explore the different areas of our church where you can connect, serve, and grow.
          </h2>
        </div>

        {/* Accordion Carousel Container */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center px-4 md:px-10">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            disabled={activeIndex === 0}
            className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-charcoal-900/30 text-white backdrop-blur-md hover:bg-charcoal-900/60 transition-all disabled:opacity-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            disabled={activeIndex === MINISTRIES_DATA.length - 1}
            className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-charcoal-900/30 text-white backdrop-blur-md hover:bg-charcoal-900/60 transition-all disabled:opacity-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Flex Container */}
          <div className="flex w-full h-full gap-2 md:gap-4 justify-center">
            {MINISTRIES_DATA.map((ministry, index) => {
              const isActive = index === activeIndex;
              
              // On mobile, hide cards that are far away from active index
              if (isMobile && Math.abs(index - activeIndex) > 1 && !isActive) return null;

              return (
                <div
                  key={ministry.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-full rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 ${
                    isActive 
                      ? 'w-[280px] md:w-[450px] lg:w-[600px] shadow-2xl' 
                      : 'w-[60px] md:w-[80px] lg:w-[100px] opacity-80 hover:opacity-100 shadow-md'
                  }`}
                >
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 ease-out"
                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

                  {/* Content for Active Card */}
                  <div 
                    className={`absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col items-center text-center transition-all duration-700 delay-200 transform ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                    }`}
                  >
                    <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-3">
                      {ministry.title}
                    </h3>
                    <p className="text-gray-200 text-sm md:text-base mb-6 max-w-sm line-clamp-2">
                      {ministry.desc}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/ministry/${ministry.id}`);
                      }}
                      className="px-6 py-2.5 rounded-full border border-white/50 text-white font-medium text-sm hover:bg-white hover:text-charcoal-900 transition-colors backdrop-blur-sm"
                    >
                      Explore Ministry
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
