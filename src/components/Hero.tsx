import { useState, useEffect } from 'react';
import QuickLinks from './QuickLinks';

// The user will manually add photos to public/images/home-slideshow/
// Add the exact filenames here once you have uploaded them.
const DESKTOP_SLIDES = [
  '/images/home-slideshow/gospel1.png',
  '/images/home-slideshow/gospel2.png',
  '/images/home-slideshow/gospel3.png',
];

const MOBILE_SLIDES = [
  '/images/home-slideshow/mobile1.png.png',
  '/images/home-slideshow/mobile2.png.png',
  '/images/home-slideshow/mobile3.png.png',
];

export default function Hero() {
  const HEADING = "EMMANUEL GOSPEL MINISTRIES";
  const [revealedCount, setRevealedCount] = useState(0);
  const [showSupport, setShowSupport] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Assuming both arrays are the same length, but we use Math.max just in case
      const maxSlides = Math.max(DESKTOP_SLIDES.length, MOBILE_SLIDES.length);
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < HEADING.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowSupport(true), 200);
          return prev;
        }
      });
    }, 30); // 30ms per character

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showSupport) {
      const timer = setTimeout(() => setShowButtons(true), 400);
      return () => clearTimeout(timer);
    }
  }, [showSupport]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-[80px] bg-charcoal-950 overflow-hidden shadow-[0_20px_50px_rgba(10,18,46,1)] z-20"
    >
      {/* Full Screen Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-charcoal-950 overflow-hidden">
        {/* Desktop Images */}
        {DESKTOP_SLIDES.map((slide, index) => (
          <img
            key={`desktop-${slide}`}
            src={slide}
            alt={`Desktop Slide ${index + 1}`}
            className={`hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          />
        ))}

        {/* Mobile Images */}
        {MOBILE_SLIDES.map((slide, index) => (
          <img
            key={`mobile-${slide}`}
            src={slide}
            alt={`Mobile Slide ${index + 1}`}
            className={`md:hidden absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          />
        ))}
        {/* Subtle dark overlay for text readability but keeping image very visible */}
        <div className="absolute inset-0 bg-charcoal-950/40 md:bg-charcoal-950/50" />

        {/* Seamless fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal-950 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-2 md:px-4 flex flex-col items-center text-center max-w-5xl mx-auto pt-10 pb-20 md:py-0 w-full">

        {/* Welcome Text (No Card Background) */}
        <div className="max-w-6xl mx-auto mb-8 drop-shadow-2xl flex flex-col items-center mt-4">

          <h2 className="text-center mb-6 max-w-full px-2">
            <span className={`block font-['Playball'] text-4xl md:text-6xl mb-6 md:mb-8 transition-all duration-700 luxury-gold-text ${showSupport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Welcome to
            </span>
            <span className="block font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.05em] sm:tracking-[0.1em] leading-snug md:leading-tight neon-text-red" style={{ fontVariant: 'small-caps' }}>
              {"Emmanuel Gospel Ministries".split(' ').map((word, wordIndex, wordsArr) => {
                const prevCharsCount = wordsArr.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);
                return (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mx-1 md:mx-2 mb-2">
                    {word.split('').map((char, charIndex) => {
                      const charOverallIndex = prevCharsCount + charIndex;
                      return (
                        <span
                          key={charIndex}
                          className="inline-block transition-opacity duration-300"
                          style={{ opacity: charOverallIndex < revealedCount ? 1 : 0 }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </span>
          </h2>

          <div className={`w-full max-w-lg mx-auto mb-10 transition-all duration-1000 ${showSupport ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glowing-line-wrapper"></div>
          </div>

          <p className={`text-xs sm:text-sm md:text-base text-ivory-50 leading-relaxed md:leading-relaxed max-w-4xl mx-auto font-medium font-['Montserrat'] text-center px-6 md:px-4 w-full transition-all duration-1000 transform ${showSupport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ textShadow: '1px 2px 4px rgba(10,18,46,0.8)' }}>
            <strong>Emmanuel Gospel Ministries</strong> is a Christ-centered Christian Gospel ministry based in <strong>Hyderabad, Telangana, India</strong>, committed to proclaiming the Gospel of Jesus Christ and reaching people, families, villages, cities, and communities with the message of God’s love, salvation, prayer, faith, and hope.
            <br /><br />
            Our desire is to see people come to know Jesus Christ, experience the transforming power of God’s Word, grow in faith, and become devoted disciples who serve God’s Kingdom.
          </p>
        </div>

        {/* Quick Links Overlay */}
        <div
          className={`w-full transition-all duration-1000 transform ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} pb-12`}
        >
          <QuickLinks />
        </div>

      </div>
    </section>
  );
}
