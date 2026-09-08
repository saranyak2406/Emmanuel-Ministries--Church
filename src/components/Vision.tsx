import { useScrollReveal } from '@/hooks/useScrollReveal';

const PILLARS = [
  { num: '01', title: 'Win Souls', desc: 'To proclaim the Gospel and lead people toward a saving relationship with Jesus Christ.' },
  { num: '02', title: 'Make Disciples', desc: 'To help believers grow in God\u2019s Word, prayer and obedience to Christ.' },
  { num: '03', title: 'Strengthen Families', desc: 'To encourage families to build their lives upon biblical principles.' },
  { num: '04', title: 'Reach Communities', desc: 'To carry the Gospel to people and places that need hope and encouragement.' },
  { num: '05', title: 'Advance the Kingdom', desc: 'To work together with churches, ministries and believers in taking the Gospel forward.' },
];


export default function Vision() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vision" className="section-padding bg-charcoal-900 text-ivory-50 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div ref={ref} className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className={`eyebrow text-gold-400 mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Vision</p>
          <h2 className={`text-display font-serif font-bold reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} text-balance`}>
            A Vision for Christ-Centered Transformation
          </h2>
          <p className={`mt-6 text-lg md:text-xl font-serif italic text-gold-200 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} text-balance`}>
            &ldquo;To proclaim Jesus Christ, reach the unreached, strengthen families, raise disciples and see
            communities transformed by the Gospel and the presence of God.&rdquo;
          </p>
        </div>

        {/* Five pillars journey */}
        <div className="relative mb-20">
          {/* Connecting line (from center of circle 1 to center of circle 5) */}
          <div className="hidden lg:block absolute top-8 left-8 right-[calc(20%-2rem)] h-[1px] bg-gold-400/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} relative text-center lg:text-left z-10`}
              >
                {/* Number circle */}
                <div className="flex justify-center lg:justify-start mb-5">
                  <div className="relative w-16 h-16 rounded-full bg-charcoal-900 border border-gold-400/30 flex items-center justify-center transition-all duration-300 hover:border-gold-400 hover:scale-110 shadow-[0_0_15px_rgba(26,24,22,1)]">
                    <span className="font-serif text-xl font-bold text-gold-400">{p.num}</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-ivory-50 mb-2">{p.title}</h3>
                <p className="text-sm text-ivory-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
