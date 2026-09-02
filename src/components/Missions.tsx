import { Megaphone, Home, Hand, Users, Heart, Handshake, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MISSION_CARDS = [
  { icon: Megaphone, title: 'Gospel Evangelism',    desc: 'Sharing the message of Jesus Christ in cities, towns, villages and communities across India and beyond.' },
  { icon: Home,      title: 'Village Outreach',      desc: 'Reaching rural communities with the Gospel and prayer — carrying the hope of Christ to those who need it most.' },
  { icon: Hand,      title: 'Prayer Missions',       desc: 'Standing in prayer for communities and nations through dedicated seasons of intercession and fasting.' },
  { icon: Users,     title: 'Gospel Meetings',       desc: 'Organizing and participating in evangelistic gatherings for worship, the Word and responding to the Gospel.' },
  { icon: Heart,     title: 'Community Outreach',    desc: 'Serving people with compassion and practical support, demonstrating the love of Christ in action.' },
  { icon: Handshake, title: 'Mission Partnerships',  desc: 'Working together with believers and ministries to advance the Gospel and strengthen Kingdom work.' },
];

// Indian village/rural outreach image
const MISSIONS_BG =
  'https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export default function Missions() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="missions" className="relative section-padding overflow-hidden">
      {/* Background with strong overlay for readability */}
      <div className="absolute inset-0">
        <img src={MISSIONS_BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal-950/92" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div ref={ref} className="container-max relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow text-gold-300 mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>
            Missions
          </p>
          <h2
            className={`text-display font-serif font-bold text-ivory-50 reveal reveal-delay-1 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            Taking the Gospel to the Nations
          </h2>

          {/* Matthew 28:19 quote */}
          <div
            className={`mt-6 inline-block border-l-2 border-gold-400 pl-5 text-left reveal reveal-delay-2 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            <p className="font-serif italic text-lg text-ivory-200">
              &ldquo;Go ye therefore, and teach all nations…&rdquo;
            </p>
            <p className="mt-1 text-sm text-gold-300 font-medium">— Matthew 28:19</p>
          </div>

          <p
            className={`mt-6 text-base md:text-lg text-ivory-300 leading-relaxed reveal reveal-delay-3 ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            Emmanuel Gospel Ministries has a heart to carry the Gospel beyond the walls of the local
            church and reach people in different communities and nations.
          </p>
        </div>

        {/* Mission cards — solid background for high contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {MISSION_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${
                  isVisible ? 'is-visible' : ''
                } group rounded-2xl bg-charcoal-800 border border-charcoal-700 p-7 transition-all duration-300 hover:bg-charcoal-700 hover:border-gold-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal-950/50`}
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
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Partner With Us in Missions
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
