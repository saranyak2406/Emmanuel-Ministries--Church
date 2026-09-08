import { Heart, HandHeart, Globe, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PARTNERSHIPS = [
  {
    icon: Heart,
    title: 'Pray For Us',
    desc: 'Commit to praying for our ministry, meetings and outreaches.',
  },
  {
    icon: HandHeart,
    title: 'Serve With Us',
    desc: 'Join our volunteer team for meetings and outreach programs.',
  },
  {
    icon: DollarSign,
    title: 'Support Us',
    desc: 'Stand with us financially to help advance the Gospel.',
  },
];

export default function Partnership() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="partnership" className="section-padding bg-ivory-50">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>PARTNERSHIP</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Partner With Us
          </h2>
          <p className={`mt-6 text-xl font-bold text-brand-700 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} text-balance`}>
            Together, we can reach more people with the Gospel.
          </p>
          <p className={`mt-4 text-base text-charcoal-600 leading-relaxed reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            Gospel partnership is a biblical principle. When you partner with us, you are joining hands to proclaim Christ, reach the unreached, help the needy and advance God's Kingdom. Your prayers and support make a difference.
          </p>
          <div className="mt-8 bg-brand-50 border-l-4 border-brand-700 p-6 text-left max-w-2xl mx-auto rounded-r-lg">
            <p className="font-serif italic text-lg text-charcoal-800">
              "I thank my God upon every remembrance of you, for your fellowship in the gospel from the first day until now."
            </p>
            <p className="mt-2 text-sm font-bold tracking-widest uppercase text-brand-700">
              — Philippians 1:3,5
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">HOW YOU CAN PARTNER</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIPS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:border-brand-200 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-700 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{p.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            BECOME A PARTNER
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
