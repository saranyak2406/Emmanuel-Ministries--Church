import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Quote, Play, ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ALL_TESTIMONIES = [
  { title: 'God Healed My Family', text: 'We were going through a very difficult time, and my health was failing. I attended the prayer meeting and Evangelist Emmanuel Abraham prayed for me. By the grace of God, I was completely healed, and my family found peace in Jesus Christ.', author: 'Sarah M.', location: '' },
  { title: 'A New Beginning', text: 'I lived without hope and didn\'t know the purpose of my life. After hearing the Gospel at one of the revival meetings, I accepted Jesus Christ as my Savior. My life has completely changed, and I now walk in faith.', author: 'David K.', location: '' },
  { title: 'Provision in Hard Times', text: 'During the pandemic, our family struggled to find food and work. The ministry provided us with groceries and prayed for us. It showed us the true love of Christ.', author: 'Priya R.', location: '' },
];

export default function TestimonialsPage() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-royal-950 to-charcoal-900" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="container-max relative z-10">
            <p className="eyebrow text-gold-400 mb-4">Testimonies</p>
            <h1 className="text-hero font-serif font-bold text-ivory-50 mb-6 text-balance">
              Changed Lives.<br />
              <span className="text-gold-400">Transformed Hearts.</span>
            </h1>
            <p className="text-xl font-bold text-ivory-200 max-w-2xl leading-relaxed">
              Read stories of God's grace, healing and provision.
            </p>
          </div>
        </section>

        {/* Written Testimonies */}
        <section ref={ref} className="section-padding bg-ivory-50">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Written Testimonies</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                What God Has Done
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {ALL_TESTIMONIES.map((t, i) => (
                <div
                  key={t.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
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
                      <Star className="h-3 w-3" />
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} text-center`}>
              <button onClick={() => navigate('/contact')} className="btn-primary">
                SHARE YOUR TESTIMONY
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
