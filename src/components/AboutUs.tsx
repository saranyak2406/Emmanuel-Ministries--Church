import { Quote, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const LOGO_IMG     = '/logo.jpg';
const BUILDING_IMG = '/church-building.jpg';

export default function AboutUs() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-50/60 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-50/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div ref={ref} className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Images column ─────────────────────────── */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
            {/* Church building — main large image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={BUILDING_IMG}
                alt="Emmanuel Gospel Ministries church building"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent" />
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
            <div className="absolute -bottom-6 -right-6 z-10 bg-white rounded-2xl shadow-xl p-3 border border-royal-100">
              <img
                src={LOGO_IMG}
                alt="Emmanuel Gospel Ministries logo"
                className="h-24 w-24 object-cover rounded-xl"
              />
            </div>

            {/* Decorative frames */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-royal-400/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-brand-700/20 rounded-2xl -z-10" />
          </div>

          {/* ── Content column ────────────────────────── */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-section font-serif font-bold text-charcoal-900 text-balance">
              Who We Are
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-charcoal-600 leading-relaxed">
              <p>
                Emmanuel Gospel Ministries is a Christian Gospel ministry based in <span className="font-bold text-charcoal-900">Hyderabad, Telangana, India</span>, with a burden to proclaim the Gospel of Jesus Christ and reach people, families, villages, cities and communities with the message of God's love.
              </p>
              <p>
                Our desire is to see people come to know Jesus Christ, experience the transforming power of God's Word, grow in faith and become disciples who serve God's Kingdom.
              </p>
            </div>
          </div>
        </div>

        {/* ── Ministry Focus (Full Width) ────────────────────────── */}
        <div className={`mt-16 lg:mt-24 pt-12 border-t border-ivory-200 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow text-gold-500 mb-6 text-center">OUR FOCUS</p>
          <div className="text-center md:text-left max-w-5xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 text-center mb-10">
              Our Ministry Focus
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-charcoal-700 font-medium">
              {[
                'Gospel evangelism',
                'Prayer and fasting',
                'Revival meetings',
                'Prophetic prayer meetings',
                'Family blessing meetings',
                'Healing and prayer ministry',
                'Deliverance ministry',
                'Youth ministry',
                'Church strengthening',
                'Outreach to villages and remote areas',
                'Helping poor and needy people',
                'Supporting widows and orphans',
                'Caring for elderly people',
                'Gospel meetings and street ministry'
              ].map((focus, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-ivory-200">
                  <div className="text-brand-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
