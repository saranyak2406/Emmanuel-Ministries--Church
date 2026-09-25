import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const MINISTRIES_DATA = [
  { id: 'revival-meetings',    title: 'Revival Meetings',        image: '/images/ministries-aspects/Revival Meetings/Spiritual Awakening/IMG-20260922-WA0056.jpg', desc: 'Special meetings focused on worship, prayer, God\'s Word and spiritual renewal.' },
  { id: 'prophetic-prayer',    title: 'Prophetic Prayer Meetings', image: '/images/ministries-aspects/Prophetic Prayer Meetings/Strengthening/IMG-20260922-WA0285.jpg', desc: 'Experiencing the prophetic voice of God for guidance and encouragement.' },
  { id: 'prayer-ministry',     title: 'Prayer Ministry',         image: '/images/ministries-aspects/Prayer Ministry/Corporate Prayer/IMG-20260922-WA0310.jpg', desc: 'Standing with individuals and families in prayer for their spiritual, personal and family needs.' },
  { id: 'gospel-evangelism',   title: 'Gospel Evangelism',       image: '/images/ministries-aspects/Gospel Evangelism/Personal Evangelism/IMG-20260922-WA0285.jpg', desc: 'We proclaim Jesus Christ and invite people to respond to the Gospel.' },
  { id: 'fasting-prayer',      title: 'Fasting Prayer',          image: '/images/ministries-aspects/Fasting Prayer/Spiritual Breakthrough/IMG-20260922-WA0141.jpg', desc: 'Seeking God through prayer and fasting for breakthrough and national revival.' },
  { id: 'healing-deliverance', title: 'Healing & Deliverance Prayer', image: '/images/ministries-aspects/Healing & Deliverance Prayer/Physical Healing/IMG-20260922-WA0146.jpg', desc: 'We pray with people who are seeking God\'s intervention, comfort, strength and restoration.' },
  { id: 'family-ministry',     title: 'Family Ministry',         image: '/images/ministries-aspects/Family Ministry/Household Peace/IMG-20260922-WA0301.jpg', desc: 'Encouraging families to build their relationships upon Christ and biblical principles.' },
];

export default function Ministries() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
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
    <section id="ministries" className="bg-ivory-50 relative py-24">
      <div ref={ref} className={`container-max reveal ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Header */}
        <div className="mb-12 text-left pl-4 md:pl-10">
          <p className="text-xs font-bold tracking-[0.15em] text-brand-700 uppercase mb-4">
            Our Ministries
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal-900 max-w-2xl">
            Explore the different areas of our church where you can connect, serve, and grow.
          </h2>
        </div>

        {/* Mobile View: Single Column showing all images & ministries */}
        <div className="lg:hidden flex flex-col gap-6 px-4 mb-16">
          {MINISTRIES_DATA.map((ministry) => (
            <div
              key={`mobile-${ministry.id}`}
              onClick={() => navigate(`/ministry/${ministry.id}`)}
              className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={ministry.image}
                alt={ministry.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start text-left">
                <h3 className="text-white text-2xl font-serif font-bold mb-2">
                  {ministry.title}
                </h3>
                <p className="text-ivory-200 text-sm mb-4 line-clamp-2">
                  {ministry.desc}
                </p>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-charcoal-900 font-semibold text-xs transition-colors backdrop-blur-md border border-white/30">
                  Explore Ministry <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Accordion Carousel Container */}
        <div className="hidden lg:flex relative w-full max-w-[100vw] h-[500px] md:h-[600px] items-center justify-center px-4 md:px-10 mb-20 overflow-hidden">
          
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

              return (
                <div
                  key={`slide-${ministry.id}`}
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`} />

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
