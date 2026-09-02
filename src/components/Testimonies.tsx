import { Quote, Play, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TESTIMONIES = [
  { title: 'God Answered My Prayer', text: 'I was going through a difficult season and the ministry prayed with me. God answered in ways I could never imagine.', author: 'Verified Testimony', location: 'Andhra Pradesh' },
  { title: 'Healing & Restoration', text: 'After prayer, I experienced healing and a renewed sense of hope. God is faithful and His presence changed everything.', author: 'Verified Testimony', location: 'Telangana' },
  { title: 'A New Beginning in Christ', text: 'I gave my life to Christ at a Gospel meeting. My family and I are now walking with the Lord together.', author: 'Verified Testimony', location: 'India' },
];

export default function Testimonies() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonies" className="section-padding bg-ivory-100">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Testimonies</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Testimonies of God's Faithfulness
          </h2>
          <p className={`mt-4 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            God is still working in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIES.map((t, i) => (
            <div
              key={t.title}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group relative bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:-translate-y-1`}
            >
              <Quote className="h-8 w-8 text-gold-400/40 mb-4" />
              <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-3">{t.title}</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-ivory-200">
                <div>
                  <p className="text-sm font-medium text-charcoal-800">{t.author}</p>
                  <p className="text-xs text-charcoal-400">{t.location}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-700">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonies CTA */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center`}>
          <div className="inline-flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 rounded-full bg-brand-700 flex items-center justify-center cursor-pointer group transition-all duration-300 hover:bg-brand-800 hover:scale-110">
              <Play className="h-8 w-8 text-ivory-50 ml-1 transition-transform group-hover:scale-125" fill="currentColor" />
              <div className="absolute inset-0 rounded-full border-2 border-brand-700 animate-ping opacity-20" />
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group">
              Watch Video Testimonies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
