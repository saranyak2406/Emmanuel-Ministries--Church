import { useNavigate } from 'react-router-dom';
import { Quote, Play, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TESTIMONIES = [
  { title: 'God Answered My Prayer', text: 'I was going through a difficult season and the ministry prayed with me. God answered in ways I could never imagine.', author: 'Verified Testimony', location: 'Andhra Pradesh' },
  { title: 'Healing & Restoration', text: 'After prayer, I experienced healing and a renewed sense of hope. God is faithful and His presence changed everything.', author: 'Verified Testimony', location: 'Telangana' },
  { title: 'A New Beginning in Christ', text: 'I gave my life to Christ at a Gospel meeting. My family and I are now walking with the Lord together.', author: 'Verified Testimony', location: 'India' },
];

const VIDEO_TESTIMONIES = [
  {
    title: 'Salvation Testimony',
    thumbnail: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    youtubeUrl: 'https://youtube.com/@evangelistemmanuelabraham',
  },
  {
    title: 'Healing Testimony',
    thumbnail: 'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    youtubeUrl: 'https://youtube.com/@evangelistemmanuelabraham',
  },
];

export default function Testimonies() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();

  const goToTestimonials = () => {
    navigate('/testimonials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="testimonies" className="section-padding bg-ivory-50">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Testimonies</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Testimonies of God&rsquo;s Faithfulness
          </h2>
          <p className={`mt-4 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            God is still working in people&rsquo;s lives.
          </p>
        </div>

        {/* Clickable testimony cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIES.map((t, i) => (
            <div
              key={t.title}
              onClick={goToTestimonials}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group relative bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:-translate-y-1 cursor-pointer`}
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
                  Verified
                </span>
              </div>
              {/* Click indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-4 w-4 text-brand-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {VIDEO_TESTIMONIES.map((v, i) => (
            <a
              key={i}
              href={v.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg cursor-pointer block`}
            >
              <img
                src={v.thumbnail}
                alt={v.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full bg-brand-700/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">
                  <Play className="h-7 w-7 text-ivory-50 ml-1" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full border-2 border-brand-700 animate-ping opacity-20" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">Video Testimony</p>
                <p className="font-serif text-lg font-bold text-ivory-50">{v.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} text-center`}>
          <button
            onClick={goToTestimonials}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group"
          >
            View All Testimonies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
