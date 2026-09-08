import { Megaphone, Home, Hand, Users, Heart, Handshake, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';

const MISSION_CARDS = [
  { icon: Home,      title: 'Village Outreach',             href: '/mission/village-outreach',    desc: 'Many villages are still waiting to hear the Gospel. We travel to these places, preach the Word, pray for the sick and distribute Christian literature.' },
  { icon: Megaphone, title: 'Gospel Tract Distribution',    href: '/mission/gospel-tracts',       desc: 'We distribute Gospel tracts in public places, markets and during special outreaches to share the message of salvation.' },
  { icon: Heart,     title: 'Compassion Ministry',          href: '/mission/compassion',          desc: 'As God provides, we support poor families, widows, orphans and those in need with basic necessities, demonstrating the love of Christ in action.' },
];

// Local slideshow image for missions backdrop
const MISSIONS_BG = '/images/slideshow/img1.jpg';

export default function Missions() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section id="missions" className="relative section-padding overflow-hidden">
      {/* Background image without heavy dark overlay */}
      <div className="absolute inset-0">
        <img src={MISSIONS_BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div ref={ref} className="container-max relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow text-brand-800 mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>
            MISSIONS
          </p>
          <h2
            className={`text-display font-serif font-bold text-charcoal-950 reveal reveal-delay-1 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            Reaching the Unreached
          </h2>

          <p
            className={`mt-6 text-base md:text-lg text-charcoal-800 font-bold leading-relaxed reveal reveal-delay-2 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            Taking the Gospel to villages, communities and places that need Jesus Christ.
          </p>
        </div>

        {/* Mission cards — solid background for high contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {MISSION_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                onClick={() => navigate(card.href)}
                className={`reveal reveal-delay-${(i % 3) + 1} ${
                  isVisible ? 'is-visible' : ''
                } group rounded-2xl bg-charcoal-800 border border-charcoal-700 p-7 transition-all duration-300 hover:bg-charcoal-700 hover:border-gold-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal-950/50 cursor-pointer`}
              >
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-400/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold-500/30 group-hover:border-gold-400/50">
                  <Icon className="h-6 w-6 text-gold-400" />
                </div>

                <h3 className="text-lg font-serif font-semibold text-ivory-50 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-ivory-300 leading-relaxed">{card.desc}</p>

                {/* Hover underline accent */}
                <div className="mt-4 h-px w-0 bg-gold-400/60 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        <div
          className={`text-center reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}
        >
          <button
            className="btn-gold"
            onClick={() => navigate('/partnership')}
          >
            Partner With Us in Missions
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
