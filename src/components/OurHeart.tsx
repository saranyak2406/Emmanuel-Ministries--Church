import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CORE_VALUES } from '@/lib/constants';

const STEPS = [
  { num: '01', title: 'Preach Christ', desc: 'We begin with the Gospel — proclaiming Jesus Christ crucified, risen, and coming again.' },
  { num: '02', title: 'Win Souls', desc: 'We invite people to respond to the Gospel and turn to Christ in faith and repentance.' },
  { num: '03', title: 'Serve People', desc: 'We demonstrate Christ\u2019s love through compassionate service to individuals and communities.' },
  { num: '04', title: 'Strengthen the Church', desc: 'We partner with churches and believers to build up the body of Christ for lasting impact.' },
];

export default function OurHeart() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-gradient-to-b from-ivory-50 to-ivory-100">
      <div ref={ref} className="container-max">

        {/* Our Heart — Fourfold Focus */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Heart</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            The Heart Behind Everything We Do
          </h2>
          <p className={`mt-3 text-lg md:text-xl text-charcoal-600 font-semibold reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            JESUS CHRIST IS OUR MESSAGE. SOULS ARE OUR BURDEN.
          </p>
          <p className={`mt-2 text-base text-charcoal-500 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            THE GOSPEL IS OUR MISSION. PEOPLE ARE OUR RESPONSIBILITY. THE CHURCH IS OUR FAMILY.
          </p>
          <p className={`mt-6 text-lg md:text-xl font-serif italic text-brand-700 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} text-balance`}>
            &ldquo;We preach the Gospel with our words and demonstrate the love of Christ through our actions.&rdquo;
          </p>
        </div>

        {/* Four-step visual journey */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} text-center group`}>
                  {/* Number */}
                  <div className="relative inline-flex items-center justify-center mb-5">
                    <div className="w-20 h-20 rounded-full bg-ivory-50 border-2 border-gold-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-brand-600 group-hover:shadow-lg group-hover:shadow-brand-700/10">
                      <span className="font-serif text-2xl font-bold text-brand-700">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow between steps */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 items-center justify-center">
                    <svg className="h-6 w-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
                {i < STEPS.length - 1 && (
                  <div className="flex lg:hidden justify-center mt-4 mb-2">
                    <svg className="h-5 w-5 text-gold-400 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 1 John 3:18 quote */}
        <div className={`max-w-2xl mx-auto text-center mb-20 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <div className="border-l-2 border-r-2 border-gold-400/40 px-8 py-6">
            <p className="font-serif italic text-xl text-charcoal-700">
              &ldquo;Let us not love in word, neither in tongue; but in deed and in truth.&rdquo;
            </p>
            <p className="mt-2 text-sm text-gold-600 font-medium">&mdash; 1 John 3:18</p>
          </div>
        </div>

        {/* Core Values — Clickable */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Core Values</p>
          <h2 className={`text-section font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            The Values That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {CORE_VALUES.map((val, i) => (
            <button
              key={val.title}
              onClick={() => { navigate(`/core-values/${val.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`reveal reveal-delay-${(i % 4) + 1} ${isVisible ? 'is-visible' : ''} group bg-white rounded-2xl p-6 border border-ivory-200 hover:shadow-lg hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300 text-left relative`}
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-700 transition-colors duration-300">
                <span className="font-serif text-sm font-bold text-brand-700 group-hover:text-ivory-50 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-serif font-bold text-charcoal-900 mb-2 uppercase tracking-wide">{val.title}</h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">{val.desc}</p>
              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-4 w-4 text-brand-600" />
              </div>
            </button>
          ))}
        </div>

        {/* Declaration */}
        <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} relative rounded-2xl overflow-hidden bg-charcoal-900 p-10 md:p-14 text-center`}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative z-10">
            <p className="eyebrow text-gold-400 mb-6">Our Declaration</p>
            <div className="max-w-3xl mx-auto space-y-2 font-serif text-base md:text-lg text-ivory-200 leading-relaxed">
              <p>We will preach the Gospel. We will proclaim Jesus Christ.</p>
              <p>We will proclaim His death and resurrection. We will reach the unreached.</p>
              <p>We will win souls for Christ. We will make disciples.</p>
              <p>We will build and strengthen churches.</p>
              <p>We will support Gospel ministries. We will help the poor and needy.</p>
              <p>We will care for widows and orphans. We will honor and support the elderly.</p>
              <p>We will encourage education for children in need. We will serve communities with compassion.</p>
              <p className="text-gold-300 font-semibold">We will advance the Gospel to the nations.</p>
              <p className="text-ivory-50 font-bold text-xl mt-4">FOR THE GLORY OF JESUS CHRIST.</p>
            </div>
            <div className="mt-8 border-t border-ivory-200/10 pt-6">
              <p className="font-serif italic text-ivory-300">
                &ldquo;For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.&rdquo;
              </p>
              <p className="mt-2 text-sm text-gold-400 font-medium">&mdash; Romans 11:36</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
