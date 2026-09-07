import { useNavigate } from 'react-router-dom';
import { Mic, Hand, Users, GraduationCap, HandHeart, Send, Globe, BookOpen, Heart, Baby, Accessibility, Handshake, Church, Megaphone, Home } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MISSIONS = [
  {
    icon: Mic,
    title: 'Preach',
    fullTitle: 'Proclaim the Gospel',
    desc: 'We proclaim the Gospel of Jesus Christ and boldly share the good news of salvation through Him.',
    scripture: '"Go ye into all the world, and preach the gospel to every creature." — Mark 16:15',
    href: '/preach',
  },
  {
    icon: Hand,
    title: 'Pray',
    fullTitle: 'Prayer & Intercession',
    desc: 'To seek God through prayer and intercession for individuals, families, churches, communities and nations.',
    scripture: null,
    href: '/prayer',
  },
  {
    icon: Globe,
    title: 'Reach',
    fullTitle: 'Reach the Unreached',
    desc: 'We carry the Gospel to villages, communities, cities and places where people need to hear the message of Jesus Christ.',
    scripture: null,
    href: '/missions',
  },
  {
    icon: Heart,
    title: 'Love',
    fullTitle: 'Preach the Love of Jesus Christ',
    desc: 'We proclaim the love, grace, forgiveness and hope found in Jesus Christ — through preaching and compassionate action.',
    scripture: null,
    href: '/about',
  },
  {
    icon: Church,
    title: 'Proclaim',
    fullTitle: 'Proclaim the Death & Resurrection',
    desc: 'We proclaim Jesus Christ crucified and risen again. His death brings salvation, His resurrection is the foundation of our faith.',
    scripture: '"He is not here, but is risen…" — Luke 24:6',
    href: '/preach',
  },
  {
    icon: Megaphone,
    title: 'Win',
    fullTitle: 'Win Souls for Christ',
    desc: 'Soul winning is our passion. Every soul is precious to God. Our desire is to see people repent, believe and receive salvation.',
    scripture: '"For the Son of man is come to seek and to save that which was lost." — Luke 19:10',
    href: '/missions',
  },
  {
    icon: GraduationCap,
    title: 'Equip',
    fullTitle: 'Make Disciples',
    desc: 'We desire not only to see people receive Christ, but also to help them grow in God\'s Word, prayer, faith and obedience.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: Users,
    title: 'Build',
    fullTitle: 'Build & Strengthen Churches',
    desc: 'We desire to encourage, build and strengthen local churches so that they can become strong witnesses for Jesus Christ.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: Handshake,
    title: 'Support',
    fullTitle: 'Support Churches & Ministries',
    desc: 'We desire to support churches, pastors, Gospel workers and ministries engaged in advancing God\'s Kingdom.',
    scripture: null,
    href: '/give',
  },
  {
    icon: HandHeart,
    title: 'Help',
    fullTitle: 'Help the Poor & Needy',
    desc: 'We desire to demonstrate the compassion of Jesus Christ by helping people facing poverty and difficult circumstances.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: Hand,
    title: 'Care',
    fullTitle: 'Support Widows',
    desc: 'We desire to encourage and support widows with compassion, dignity and practical help where possible.',
    scripture: '"…to visit the fatherless and widows in their affliction…" — James 1:27',
    href: '/ministries',
  },
  {
    icon: Baby,
    title: 'Protect',
    fullTitle: 'Care for Orphans & Vulnerable Children',
    desc: 'We desire to support orphans and vulnerable children through care, encouragement, practical assistance and educational support.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: Accessibility,
    title: 'Honor',
    fullTitle: 'Care for the Elderly',
    desc: 'We desire to encourage and support elderly people, including those in old-age homes, with love, dignity, respect and compassion.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: BookOpen,
    title: 'Educate',
    fullTitle: 'Support Education',
    desc: 'We desire to help children from poor families with educational needs. Supporting education helps children develop their God-given potential.',
    scripture: null,
    href: '/ministries',
  },
  {
    icon: Send,
    title: 'Send',
    fullTitle: 'Support Gospel Ministries',
    desc: 'We desire to encourage and support Gospel workers, missionaries, churches and ministries wherever God provides opportunities.',
    scripture: null,
    href: '/partnership',
  },
];

const FLOW_LABELS = MISSIONS.slice(0, 6).map(m => ({ title: m.title, href: m.href }));

export default function Mission() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section id="mission" className="section-padding bg-white">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Mission</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Called to Go. Called to Serve.
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
                  <h3 className="text-xl font-serif font-bold text-ivory-50 mb-1">
                    {m.title}
                    <span className="ml-2 text-gold-400 text-sm">→</span>
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-400/80 mb-3">{m.fullTitle}</p>
                  <p className="text-sm text-ivory-300 leading-relaxed">{m.desc}</p>
                  {m.scripture && (
                    <p className="mt-4 text-xs italic text-gold-300/80 border-l border-gold-400/30 pl-3 leading-relaxed">
                      {m.scripture}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
