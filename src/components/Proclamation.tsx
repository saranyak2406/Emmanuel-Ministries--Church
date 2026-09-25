import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Proclamation() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 bg-charcoal-900 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cross.jpg"
          alt="Cross at sunset" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Dark gradient overlay to blend seamlessly with Hero section */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/70 to-charcoal-950/90" />
      </div>

      <div ref={ref} className={`relative z-10 container-max px-4 text-center reveal ${isVisible ? 'is-visible' : ''}`}>
        
        {/* Main Slogan */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-['Cormorant_Garamond'] font-bold text-white mb-16 uppercase tracking-[0.2em] leading-relaxed" style={{ textShadow: '2px 4px 8px rgba(10,18,46,0.8)' }}>
          <span className="block mb-2 md:inline md:mb-0">Proclaiming Jesus Christ</span>
          <span className="hidden md:inline text-gold-400 mx-4 text-3xl">✝</span>
          <span className="block mb-2 md:inline md:mb-0">Reaching Souls</span>
          <span className="hidden lg:inline text-gold-400 mx-4 text-3xl">✝</span>
          <br className="hidden lg:block" />
          <span className="block mb-2 lg:mt-6 md:inline md:mb-0">Raising Disciples</span>
          <span className="hidden md:inline text-gold-400 mx-4 text-3xl">✝</span>
          <span className="block mb-2 md:inline md:mb-0">Advancing God's Kingdom</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Bible Verse */}
          <p className="font-['Playball'] text-3xl md:text-5xl lg:text-6xl text-gold-400 mb-6 leading-normal" style={{ textShadow: '2px 2px 4px rgba(10,18,46,0.9)' }}>
            "Go ye into all the world, and preach the gospel to every creature."
          </p>
          <p className="font-['Montserrat'] text-sm md:text-lg text-ivory-200 font-bold tracking-widest uppercase mb-12">
            — Mark 16:15
          </p>
          
          {/* Name */}
          <div className="inline-block border-t border-gold-400/30 pt-8 px-4 sm:px-12 max-w-full">
            <p className="font-['Montserrat'] text-sm sm:text-base md:text-xl text-white tracking-[0.1em] sm:tracking-[0.2em] uppercase font-semibold" style={{ textShadow: '1px 2px 4px rgba(10,18,46,0.8)' }}>
              Evangelist Emmanuel Abraham
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
