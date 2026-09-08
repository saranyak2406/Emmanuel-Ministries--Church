import { Handshake, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Indian worship / praise gathering
const CTA_BG =
  'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt="People in prayer"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-charcoal-900/75" />
      </div>

      <div ref={ref} className="container-max relative z-10 text-center py-20">
        <p className={`eyebrow text-gold-300 mb-5 reveal ${isVisible ? 'is-visible' : ''}`}>
          Let's Advance the Gospel Together
        </p>
        <h2 className={`text-hero font-serif font-bold text-ivory-50 mb-8 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} text-balance`}>
          Pray Believe Go<br />
          <span className="text-gold-300">Proclaim Christ</span>
        </h2>
        <div className={`flex flex-col sm:flex-row justify-center gap-4 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          <button
            onClick={() => { window.location.href = '/partnership'; }}
            className="btn-gold"
          >
            <Handshake className="h-4 w-4" />
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
}
