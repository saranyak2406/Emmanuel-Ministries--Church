import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CORE_VALUES } from '@/lib/constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CoreValuePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const value = CORE_VALUES.find((v) => v.slug === slug);
  const currentIndex = CORE_VALUES.findIndex((v) => v.slug === slug);
  const prevValue = currentIndex > 0 ? CORE_VALUES[currentIndex - 1] : null;
  const nextValue = currentIndex < CORE_VALUES.length - 1 ? CORE_VALUES[currentIndex + 1] : null;

  if (!value) {
    return (
      <div className="min-h-screen bg-ivory-50">
        <Navbar />
        <main className="section-padding">
          <div className="container-max text-center">
            <h1 className="text-display font-serif font-bold text-charcoal-900 mb-4">Core Value Not Found</h1>
            <p className="text-charcoal-600 mb-8">The core value you are looking for does not exist.</p>
            <button onClick={() => navigate('/')} className="btn-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-royal-950 via-charcoal-900 to-brand-950" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="container-max relative z-10">

            <p className="eyebrow text-gold-400 mb-4">Our Core Values</p>
            <h1 className="text-hero font-serif font-bold text-ivory-50 mb-4">
              {value.title}
            </h1>
            <p className="text-xl text-ivory-200 max-w-2xl">
              {value.desc}
            </p>
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className="section-padding bg-ivory-50">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              {/* Full description */}
              <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
                <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed">
                  {value.fullDesc}
                </p>
              </div>

              {/* Scripture */}
              {value.scripture && (
                <div className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mb-12`}>
                  <div className="border-l-4 border-brand-700 bg-brand-50 rounded-r-xl p-8">
                    <p className="font-serif italic text-lg text-charcoal-800 leading-relaxed">
                      {value.scripture}
                    </p>
                  </div>
                </div>
              )}

              {/* Related values */}
              <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                <p className="eyebrow mb-6">Explore Other Core Values</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {CORE_VALUES.filter((v) => v.slug !== slug).slice(0, 4).map((v) => (
                    <button
                      key={v.slug}
                      onClick={() => { navigate(`/core-values/${v.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="text-left p-5 rounded-xl bg-white border border-ivory-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 group"
                    >
                      <h3 className="font-serif font-bold text-charcoal-900 mb-1 group-hover:text-brand-700 transition-colors">{v.title}</h3>
                      <p className="text-sm text-charcoal-600">{v.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prev/Next navigation */}
              <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} flex items-center justify-between pt-8 border-t border-ivory-200`}>
                {prevValue ? (
                  <button
                    onClick={() => { navigate(`/core-values/${prevValue.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-brand-700 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {prevValue.title}
                  </button>
                ) : <div />}
                {nextValue ? (
                  <button
                    onClick={() => { navigate(`/core-values/${nextValue.slug}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-brand-700 transition-colors"
                  >
                    {nextValue.title}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : <div />}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
