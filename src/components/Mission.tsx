import { useNavigate } from 'react-router-dom';
import { Mic, Hand, Globe, GraduationCap, Heart, Send } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MISSIONS = [
  {
    icon: Mic,
    title: 'PREACH',
    desc: 'To proclaim the Gospel of Jesus Christ faithfully.',
    href: '/preach',
  },
  {
    icon: Hand,
    title: 'PRAY',
    desc: 'To seek God through prayer and intercession.',
    href: '/prayer',
  },
  {
    icon: Globe,
    title: 'REACH',
    desc: 'To reach people with the love and message of Christ.',
    href: '/missions',
  },
  {
    icon: GraduationCap,
    title: 'EQUIP',
    desc: 'To equip believers through biblical teaching and discipleship.',
    href: '/ministries',
  },
  {
    icon: Heart,
    title: 'SERVE',
    desc: 'To serve people and communities with compassion and integrity.',
    href: '/ministries',
  },
  {
    icon: Send,
    title: 'SEND',
    desc: 'To encourage and support Gospel workers and missions as God provides opportunities.',
    href: '/partnership',
  },
];

const FLOW_LABELS = MISSIONS.map(m => ({ title: m.title, href: m.href }));

export default function Mission() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section id="mission" className="section-padding bg-white">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Mission</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Our Mission
          </h2>
        </div>

        {/* Flow chain */}
        <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-16`}>
          {FLOW_LABELS.map((item, i) => (
            <div key={item.title} className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => navigate(item.href)}
                className="font-serif text-sm md:text-base font-semibold text-brand-700 uppercase tracking-wider hover:text-brand-900 underline underline-offset-4 decoration-brand-300 hover:decoration-brand-600 transition-all cursor-pointer"
              >
                {item.title}
              </button>
              {i < FLOW_LABELS.length - 1 && (
                <span className="text-gold-500 text-xl font-light">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Mission blocks — all 15 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISSIONS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.fullTitle}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                onClick={() => navigate(m.href)}
              >
                {/* Decorative number */}
                <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-ivory-50/5 transition-colors duration-300 group-hover:text-gold-400/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gold-500/25">
                    <Icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ivory-50 mb-4">
                    {m.title}
                    <span className="ml-2 text-gold-400 text-sm">→</span>
                  </h3>
                  <p className="text-sm text-ivory-300 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
