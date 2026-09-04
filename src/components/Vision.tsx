import { useScrollReveal } from '@/hooks/useScrollReveal';

const PILLARS = [
  { num: '01', title: 'Win Souls', desc: 'To proclaim the Gospel and lead people toward a saving relationship with Jesus Christ.' },
  { num: '02', title: 'Make Disciples', desc: 'To help believers grow in God\u2019s Word, prayer and obedience to Christ.' },
  { num: '03', title: 'Strengthen Families', desc: 'To encourage families to build their lives upon biblical principles.' },
  { num: '04', title: 'Reach Communities', desc: 'To carry the Gospel to people and places that need hope and encouragement.' },
  { num: '05', title: 'Advance the Kingdom', desc: 'To work together with churches, ministries and believers in taking the Gospel forward.' },
];

const VISION_LIST = [
  'People come to know Jesus Christ',
  'Souls won for Christ',
  'The Gospel reach unreached places',
  'Believers grow in God\u2019s Word',
  'Churches built and strengthened',
  'Pastors and ministries encouraged',
  'Families strengthened',
  'Poor and needy people helped',
  'Widows supported',
  'Orphans and vulnerable children cared for',
  'Elderly people supported with dignity and compassion',
  'Education opportunities provided for children from poor families',
  'Gospel ministries and missionaries supported',
  'Communities impacted by the love of Christ',
];

export default function Vision() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vision" className="section-padding bg-charcoal-900/85 backdrop-blur-md text-ivory-50 relative overflow-hidden">
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
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold-400/0 via-gold-400/40 to-gold-400/0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} relative text-center lg:text-left`}
              >
                {/* Number circle */}
                <div className="flex justify-center lg:justify-start mb-5">
                  <div className="relative w-16 h-16 rounded-full bg-charcoal-800 border border-gold-400/30 flex items-center justify-center transition-all duration-300 hover:border-gold-400 hover:scale-110">
                    <span className="font-serif text-xl font-bold text-gold-400">{p.num}</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-ivory-50 mb-2">{p.title}</h3>
                <p className="text-sm text-ivory-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Vision List */}
        <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-gold-400 mb-8">
              We Desire to See
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VISION_LIST.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-800/50 border border-ivory-200/5 hover:border-gold-400/20 transition-colors duration-200"
                >
                  <span className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  </span>
                  <span className="text-sm text-ivory-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
