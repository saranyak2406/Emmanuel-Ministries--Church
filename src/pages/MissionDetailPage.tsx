import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MISSION_DETAILS } from '@/lib/missionDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// We reuse the missions banner for the background
const HERO_IMG = '/images/slideshow/img1.jpg';

export default function MissionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (!slug || !MISSION_DETAILS[slug]) {
    // If the slug is invalid, redirect to missions page or home
    return <Navigate to="/missions" replace />;
  }

  const detail = MISSION_DETAILS[slug];

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div ref={ref} className="container-max">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-4 reveal reveal-delay-1 text-brand-700 ${isVisible ? 'is-visible' : ''}`}>
                  Our Mission
                </p>
                <h1 className={`text-display md:text-[4rem] font-serif font-bold text-charcoal-900 mb-6 text-balance reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.title}
                </h1>
                <p className={`text-lg text-charcoal-600 leading-relaxed max-w-3xl mx-auto reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.heroDesc}
                </p>
              </div>

              {detail.scripture && (
                <div className={`reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''} bg-brand-50/50 border-l-4 border-brand-700 p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center mb-24 shadow-sm`}>
                  <p className="font-serif italic text-xl md:text-2xl text-charcoal-700">"{detail.scripture.split('—')[0].trim()}"</p>
                  {detail.scripture.split('—')[1] && (
                    <p className="mt-6 text-sm font-bold text-brand-700 uppercase tracking-[0.15em]">— {detail.scripture.split('—')[1].trim()}</p>
                  )}
                </div>
              )}

            {/* Aspects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {detail.aspects.map((aspect, i) => {
                const Icon = aspect.icon;
                return (
                  <div 
                    key={aspect.title}
                    className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} bg-white p-8 rounded-2xl shadow-sm border border-charcoal-100 hover:shadow-md transition-shadow`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-brand-700" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-3">
                      {aspect.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed text-sm">
                      {aspect.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className={`reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''} bg-gradient-to-br from-brand-900 to-charcoal-900 rounded-3xl p-8 md:p-12 text-center shadow-xl`}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory-50 mb-4">
                {detail.ctaTitle}
              </h2>
              <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
                {detail.ctaDesc}
              </p>
              <Link to={detail.ctaLink} className="btn-primary bg-gold-500 hover:bg-gold-600 text-charcoal-900 border-none inline-flex items-center justify-center">
                {detail.ctaButton}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
