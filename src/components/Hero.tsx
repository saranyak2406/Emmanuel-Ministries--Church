import { useState, useEffect } from 'react';
import QuickLinks from './QuickLinks';

// The user will manually add photos to public/images/home-slideshow/
// Add the exact filenames here once you have uploaded them.
const SLIDES = [
  '/images/home-slideshow/pexels-arth-443963208-36124692.jpg.jpeg',
  '/images/home-slideshow/pexels-jersonmfotos-34634375.jpg.jpeg',
  '/images/home-slideshow/pexels-lucasandrade-31542998.jpg.jpeg',
  '/images/home-slideshow/pexels-suthee-pakcharoen-76943299-8788077.jpg.jpeg',
];

export default function Hero() {
  const HEADING = "EMMANUEL GOSPEL MINISTRIES";
  const [revealedCount, setRevealedCount] = useState(0);
  const [showSupport, setShowSupport] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
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
      className="relative min-h-screen w-full flex items-center justify-center pt-[80px] bg-charcoal-950 overflow-hidden shadow-[0_20px_50px_rgba(10,18,46,1)] z-20"
    >
      {/* Full Screen Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-charcoal-950">
        {SLIDES.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}
        {/* Subtle dark overlay for text readability but keeping image very visible */}
        <div className="absolute inset-0 bg-charcoal-950/40" />
        
        {/* Seamless fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal-950 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Welcome Text (No Card Background) */}
        <div className="max-w-6xl mx-auto mb-8 drop-shadow-2xl flex flex-col items-center mt-4">
          
          <h2 className="text-center mb-4 max-w-full px-2">
            <span className={`block font-['Playball'] text-gold-400 text-3xl md:text-5xl mb-2 transition-all duration-700 ${showSupport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ textShadow: '2px 2px 4px rgba(10,18,46,0.8)' }}>
              Welcome to
            </span>
            <span className="block font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-[0.05em] sm:tracking-[0.1em] leading-tight" style={{ textShadow: '2px 4px 8px rgba(10,18,46,0.6)', minHeight: '1.2em' }}>
              {HEADING.split(' ').map((word, wordIndex, wordsArr) => {
                const prevCharsCount = wordsArr.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);
                return (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mx-1">
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

          <div className={`flex items-center gap-4 w-full max-w-sm mx-auto mb-6 transition-all duration-1000 ${showSupport ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold-400/50"></div>
            <div className="w-2 h-2 rotate-45 bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold-400/50"></div>
          </div>

          <p className={`text-sm md:text-base text-ivory-50 leading-relaxed max-w-4xl mx-auto font-medium font-['Montserrat'] text-center px-4 w-full transition-all duration-1000 transform ${showSupport ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ textShadow: '1px 2px 4px rgba(10,18,46,0.8)' }}>
            <strong>Emmanuel Gospel Ministries</strong> is a Christ-centered Christian Gospel ministry based in <strong>Hyderabad, Telangana, India</strong>, committed to proclaiming the Gospel of Jesus Christ and reaching people, families, villages, cities, and communities with the message of God’s love, salvation, prayer, faith, and hope.
            <br/><br/>
            Our desire is to see people come to know Jesus Christ, experience the transforming power of God’s Word, grow in faith, and become devoted disciples who serve God’s Kingdom. Through prayer, evangelism, discipleship, and compassionate service, we seek to share the love of Christ and bring hope and spiritual transformation to communities.
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
