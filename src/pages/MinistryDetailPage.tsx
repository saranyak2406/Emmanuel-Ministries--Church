import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Music, Video } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MINISTRY_DETAILS } from '@/lib/ministryDetails';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Reusing the ministries banner
const HERO_IMG = '/ministries-banner.jpg';

export default function MinistryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  if (!slug || !MINISTRY_DETAILS[slug]) {
    // If the slug is invalid, redirect to ministries page
    return <Navigate to="/ministries" replace />;
  }

  const detail = MINISTRY_DETAILS[slug];

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal-900/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent" />
          </div>
          <div className="container-max relative z-10 text-center pt-8">
            <p className="eyebrow text-gold-400 mb-4">Our Ministries</p>
            <h1 className="text-display md:text-[4rem] font-serif font-bold text-ivory-50 mb-6 text-balance">
              {detail.title}
            </h1>
          </div>
        </section>

        {detail.scripture && (
          <section className="py-16 bg-brand-700">
            <div className="container-max text-center">
              <p className="font-serif italic text-xl md:text-2xl text-ivory-50 max-w-3xl mx-auto">
                {detail.scripture.split('—')[0].trim()}
              </p>
              {detail.scripture.split('—')[1] && (
                <p className="mt-3 text-sm text-gold-300 font-medium">&mdash; {detail.scripture.split('—')[1].trim()}</p>
              )}
            </div>
          </section>
        )}

        <section className="section-padding">
          <div ref={ref} className="container-max">
            <div className="max-w-4xl mx-auto">
              

              <div className="text-center mb-16">
                <p className={`eyebrow mb-4 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                  About This Ministry
                </p>
                <h2 className={`text-display font-serif font-bold text-charcoal-900 mb-6 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.title}
                </h2>
                <p className={`text-lg text-charcoal-600 leading-relaxed max-w-3xl mx-auto reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.heroDesc}
                </p>
              </div>

              {/* Aspects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

              {/* Online Sermons / Media Section */}
              <div className={`mb-24 reveal ${isVisible ? 'is-visible' : ''}`}>
                <div className="text-center mb-12">
                  <h2 className="text-display font-serif font-bold text-charcoal-900 mb-4">
                    Online Sermons
                  </h2>
                  <p className="text-charcoal-600">
                    Couldn't attend a service? Watch or listen anytime.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { id: 1, title: "Living with Purpose: God's Plan for Your Life", date: 'March 24, 11:55 AM', img: '/images/slideshow/img1.jpg' },
                    { id: 2, title: "Living with Purpose: God's Plan for Your Life", date: 'March 24, 11:55 AM', img: '/images/slideshow/image2.jpg' },
                    { id: 3, title: 'The Power of Prayer: Connecting with God', date: 'March 24, 11:55 AM', img: '/images/slideshow/1001500386.jpg' },
                    { id: 4, title: 'Walking in Faith in Uncertain Times', date: 'March 24, 11:55 AM', img: '/images/slideshow/1001500423.jpg' },
                  ].map((sermon) => (
                    <div key={sermon.id} className="bg-white rounded-md overflow-hidden shadow-sm border border-charcoal-100 group cursor-pointer hover:shadow-lg transition-all duration-300">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img 
                          src={sermon.img} 
                          alt={sermon.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Audio / Video Icons Overlay */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                          <button className="w-8 h-8 rounded-full bg-brand-800/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-700 transition-colors">
                            <Music className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-brand-800/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-700 transition-colors">
                            <Video className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif font-medium text-lg leading-snug text-charcoal-900 mb-6 group-hover:text-brand-700 transition-colors">
                          {sermon.title}
                        </h3>
                        <p className="text-xs text-charcoal-400 font-medium tracking-wide">
                          {sermon.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
