import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Target, Users, Flame, Heart, Globe, BookOpen, Handshake, ShieldCheck, Sun, Star } from 'lucide-react';

const MISSIONS = [
  { icon: Globe, text: "Preach the Gospel of Jesus Christ." },
  { icon: Users, text: "Reach unreached villages, remote areas and cities." },
  { icon: Target, text: "Lead people to salvation through Jesus Christ." },
  { icon: Flame, text: "Conduct Gospel, prayer, revival and prophetic meetings." },
  { icon: Heart, text: "Encourage families through prayer and God's Word." },
  { icon: BookOpen, text: "Equip believers to grow in faith." },
  { icon: Handshake, text: "Support churches and Gospel workers." },
  { icon: Sun, text: "Help poor, widows, orphans and elderly people." },
  { icon: ShieldCheck, text: "Extend practical compassion to people in need." },
  { icon: Star, text: "Raise prayer warriors, evangelists and Kingdom workers." },
];

export default function Mission() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="mission" className="section-padding bg-white">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Mission</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {MISSIONS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 shadow-lg`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-gold-500/25">
                  <Icon className="h-6 w-6 text-gold-400" />
                </div>
                <p className="text-base text-ivory-100 leading-relaxed font-medium">
                  {m.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
