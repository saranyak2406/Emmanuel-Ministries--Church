import { ChevronDown, MapPin } from 'lucide-react';
import { MINISTRY } from '@/lib/constants';

// Church building photo as hero background
const HERO_IMG = '/church-building.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Emmanuel Gospel Ministries church building"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        {/* Deep green-tinted overlay matching logo colours */}
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Extra green tint at top */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/70 via-charcoal-900/50 to-transparent" />
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen items-center pt-24 pb-48">
        <div className="container-max">
          <div className="max-w-4xl">



            <p className="eyebrow !text-olive-300 mb-6 animate-fade-in" style={{ animationDelay: '0.05s', opacity: 0 }}>
              {MINISTRY.location}
            </p>

            <h1 className="text-hero font-serif font-bold text-ivory-50 text-balance">
              <span className="block animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                Proclaiming Jesus Christ
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
                Reaching Souls
              </span>
              <span className="block animate-fade-up text-brand-400" style={{ animationDelay: '0.4s', opacity: 0 }}>
                Raising Disciples
              </span>
            </h1>

            <p
              className="mt-6 text-xl md:text-2xl font-serif italic text-olive-300 animate-fade-up"
              style={{ animationDelay: '0.55s', opacity: 0 }}
            >
              Advancing God's Kingdom
            </p>

            <p
              className="mt-3 max-w-2xl text-base md:text-lg text-ivory-200 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              Emmanuel Gospel Ministries is a Christ-centered ministry committed to proclaiming
              the Gospel of Jesus Christ and carrying His message of salvation, hope, faith,
              healing and restoration to individuals, families, communities and nations.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.85s', opacity: 0 }}
            >
              <button
                onClick={() => document.querySelector('#meetings')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Join a Meeting
              </button>
              <button
                onClick={() => document.querySelector('#prayer')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-light"
              >
                Request Prayer
              </button>
            </div>

            {/* Bible verse */}
            <div
              className="mt-12 border-l-2 border-brand-500/60 pl-5 animate-fade-up"
              style={{ animationDelay: '1s', opacity: 0 }}
            >
              <p className="font-serif italic text-lg text-ivory-100">
                &ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo;
              </p>
              <p className="mt-1 text-sm text-olive-300 font-medium">— Mark 16:15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Evangelist name badge */}
      <div className="absolute bottom-10 right-8 hidden lg:block z-10">
        <div className="flex items-center gap-3 rounded-full bg-charcoal-900/50 backdrop-blur-sm px-5 py-3 border border-brand-400/20">
          <MapPin className="h-4 w-4 text-brand-400" />
          <div className="text-right">
            <p className="text-[0.65rem] uppercase tracking-widest text-ivory-300">Ministry Leader</p>
            <p className="text-sm font-serif font-semibold text-ivory-50">{MINISTRY.leader}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory-200/50">Scroll</span>
        <ChevronDown className="h-5 w-5 text-ivory-200/60 animate-bounce" />
      </div>

    </section>
  );
}
