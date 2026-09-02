import { Heart, HandHeart, Globe, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PARTNERSHIPS = [
  {
    icon: Heart,
    title: 'Prayer Partnership',
    desc: 'Stand with us in prayer for Gospel meetings, missions, families and souls. Prayer is the foundation of everything we do.',
  },
  {
    icon: HandHeart,
    title: 'Ministry Partnership',
    desc: 'Work together with us in Gospel outreach and ministry initiatives. Partner in the work of proclaiming Christ.',
  },
  {
    icon: Globe,
    title: 'Mission Partnership',
    desc: 'Support Gospel missions and outreach opportunities, helping us carry the message of Christ to unreached communities.',
  },
  {
    icon: Calendar,
    title: 'Event Partnership',
    desc: 'Partner with us in organizing Gospel and prayer gatherings — helping to create opportunities for people to encounter God.',
  },
  {
    icon: DollarSign,
    title: 'Financial Partnership',
    desc: 'Support ministry activities through approved and transparent giving channels, helping to advance Gospel outreach and missions.',
  },
];

export default function Partnership() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="partnership" className="section-padding bg-ivory-100">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Partnership</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Partner with the Gospel
          </h2>
          <p className={`mt-6 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} text-balance`}>
            Together, We Can Reach More People With the Gospel of Jesus Christ.
          </p>
          <p className={`mt-3 text-base text-charcoal-500 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            Ministry becomes stronger when believers pray, serve and work together. You can partner
            with Emmanuel Gospel Ministries through:
          </p>
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
            Become a Partner
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
