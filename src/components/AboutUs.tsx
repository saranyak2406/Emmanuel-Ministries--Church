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
              About Emmanuel Gospel Ministries
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-charcoal-600 leading-relaxed">
              <p>
                Emmanuel Gospel Ministries is a Christian ministry based in <span className="font-bold text-charcoal-900">Hyderabad, Telangana, India</span>, with a heart to proclaim Jesus Christ and serve people through Gospel ministry, prayer, evangelism, discipleship, revival meetings and missions.
              </p>
              <p>
                The ministry seeks to create opportunities for people to hear the Gospel, encounter God through prayer and worship, grow in biblical understanding and become faithful followers of Jesus Christ.
              </p>
            </div>

            {/* Our Heart */}
            <div className="mt-8 p-6 rounded-xl bg-brand-50 border-l-4 border-brand-700">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-700 mb-2">
                OUR HEART
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed">
                We believe that the Gospel of Jesus Christ is the good news that every person needs to hear. Our desire is to take this message to cities, villages, communities and nations and to serve wherever God opens a door.
              </p>
            </div>

            {/* Leader */}
            <div className="mt-10 border-t border-ivory-200 pt-8">
              <p className="eyebrow text-gold-500 mb-4">OUR LEADER</p>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-700 to-charcoal-900 flex items-center justify-center shrink-0 shadow-lg">
                  <span className="font-serif text-xl font-bold text-gold-400">EA</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                    Evangelist Emmanuel Abraham
                  </h3>
                  <div className="mt-3 space-y-3 text-sm md:text-base text-charcoal-600 leading-relaxed">
                    <p>
                      Evangelist Emmanuel Abraham serves in Gospel ministry with a passion for proclaiming Jesus Christ, praying for people, encouraging believers and reaching communities with the message of the Gospel.
                    </p>
                    <p>
                      Through Gospel meetings, prayer gatherings, evangelistic outreaches and ministry events, the desire is to point people to Jesus Christ and encourage them to walk according to God's Word.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-start gap-3 bg-ivory-50 p-4 rounded-lg border border-ivory-200">
                    <Quote className="h-5 w-5 text-gold-500 shrink-0" />
                    <div>
                      <p className="font-serif italic text-base text-charcoal-800">
                        "For we preach not ourselves, but Christ Jesus the Lord..."
                      </p>
                      <p className="text-sm font-bold tracking-widest uppercase text-brand-700 mt-2">
                        — 2 Corinthians 4:5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
