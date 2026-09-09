import { ArrowRight, Quote, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Ministry logos / images
const LOGO_IMG     = '/logo.jpg';
const BUILDING_IMG = '/church-building.jpg';

export default function Welcome() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-50/60 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-50/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div ref={ref} className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Images column ─────────────────────────── */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>

            {/* Church building — main large image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={BUILDING_IMG}
                alt="Emmanuel Gospel Ministries church building"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />

              {/* Church name badge over image */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-brand-700/90 backdrop-blur-sm rounded-xl px-5 py-3 flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-ivory-50 shrink-0" />
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-200">
                      Our Church
                    </p>
                    <p className="text-sm font-serif font-bold text-ivory-50 leading-tight">
                      Emmanuel Gospel Ministries
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo — floating card */}
            <div className="absolute -bottom-6 right-2 sm:-right-6 z-10 bg-white rounded-2xl shadow-xl p-3 border border-royal-100">
              <img
                src={LOGO_IMG}
                alt="Emmanuel Gospel Ministries logo"
                className="h-24 w-24 object-cover rounded-xl"
              />
            </div>

            {/* Decorative frames */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-royal-400/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 right-2 sm:-right-4 w-20 h-20 border-2 border-brand-700/20 rounded-2xl -z-10" />
          </div>

          {/* ── Content column ────────────────────────── */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className="eyebrow mb-5">Welcome</p>
            <h2 className="text-section font-serif font-bold text-charcoal-900 text-balance">
              Welcome to Emmanuel Gospel Ministries
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-charcoal-600 leading-relaxed">
              <p>
                Emmanuel Gospel Ministries is a Christ-centered ministry committed to proclaiming the Gospel of Jesus Christ and carrying his message of salvation, hope, faith, healing and restoration to individuals, families, communities and nations.
              </p>
              <p>
                Our desire is to see people encounter the presence of God, grow in the Word of God, become disciples of Jesus Christ and discover God's purpose for their lives.
              </p>
            </div>

            {/* Core Message Highlight */}
            <div className="mt-8 p-6 rounded-xl bg-brand-50 border-l-4 border-brand-700">
              <p className="text-lg font-serif font-bold text-brand-900 leading-relaxed">
                Our heart is simple: Jesus Christ must be proclaimed, souls must be reached, and lives must be transformed for the glory of God.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
