import { Megaphone, Heart, Flame, HeartPulse, BookOpen, Globe, Users, Sparkles, BookText, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MINISTRIES = [
  { icon: Megaphone, title: 'Gospel & Evangelism',     desc: 'Proclaiming the good news of Jesus Christ and reaching people with the message of salvation.' },
  { icon: Heart,     title: 'Prayer & Intercession',   desc: 'Standing before God in prayer for individuals, families, churches, communities and nations.' },
  { icon: Flame,     title: 'Revival Meetings',         desc: 'Gathering believers and seekers together to worship God, hear His Word and seek spiritual renewal.' },
  { icon: HeartPulse,title: 'Healing & Restoration',   desc: 'Ministering God\u2019s Word and praying with people who need healing, restoration, hope and encouragement.' },
  { icon: BookOpen,  title: 'Discipleship & Teaching', desc: 'Helping believers grow in faith and develop a deeper relationship with Jesus Christ through God\u2019s Word.' },
  { icon: Globe,     title: 'Missions & Outreach',     desc: 'Taking the Gospel beyond familiar places and serving communities with the love of Christ.' },
  { icon: Users,     title: 'Family Ministry',         desc: 'Strengthening families and helping them build their lives on biblical principles.' },
  { icon: Sparkles,  title: 'Youth Ministry',          desc: 'Guiding young people to know Christ, grow in faith, and live out God\u2019s purpose.' },
  { icon: BookText,  title: 'Bible Teaching',          desc: 'Teaching God\u2019s Word faithfully to equip believers for life and ministry.' },
];

export default function Ministries() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="ministries" className="bg-ivory-100">

      {/* ── Banner image ── */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/ministries-banner.jpg"
          alt="Indian Christian women in ministry discussion"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />

        {/* Text over image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-max">
            <p className="eyebrow text-gold-300 mb-2">Our Ministries</p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-ivory-50">
              A Ministry Built Around Christ
            </h2>
          </div>
        </div>
      </div>

      {/* ── Cards section ── */}
      <div ref={ref} className="container-max section-padding">
        <p className={`mt-0 mb-12 text-lg text-charcoal-600 text-center max-w-3xl mx-auto reveal ${isVisible ? 'is-visible' : ''}`}>
          Every ministry area exists to proclaim Jesus Christ, serve people, and strengthen the Church.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINISTRIES.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:border-gold-400/40 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-700">
                  <Icon className="h-7 w-7 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{m.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <button
            onClick={() => window.location.href = '/missions'}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group"
          >
            Explore All Ministries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
