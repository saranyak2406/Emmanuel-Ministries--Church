import { Play, ImageIcon, ArrowRight, Youtube, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CATEGORIES = [
  { label: 'Sermons', icon: Play },
  { label: 'Bible Teachings', icon: Play },
  { label: 'Prayer', icon: Play },
  { label: 'Revival Meetings', icon: Play },
  { label: 'Short Messages', icon: Play },
  { label: 'Photos', icon: ImageIcon },
];

// Indian worship / ministry gathering thumbnails
const THUMBNAILS = [
  'https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
];

const SOCIALS = [
  { label: 'YouTube', icon: Youtube, color: 'hover:bg-red-600 hover:text-white' },
  { label: 'Facebook', icon: Facebook, color: 'hover:bg-blue-600 hover:text-white' },
  { label: 'Instagram', icon: Instagram, color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:text-white' },
  { label: 'WhatsApp', icon: MessageCircle, color: 'hover:bg-green-600 hover:text-white' },
];

export default function Media() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="media" className="section-padding bg-ivory-50">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Media</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Watch &bull; Listen &bull; Learn &bull; Share
          </h2>
        </div>

        {/* Category pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.label}
                className="inline-flex items-center gap-2 rounded-full border border-ivory-300 bg-ivory-100 px-5 py-2.5 text-sm font-medium text-charcoal-700 transition-all duration-300 hover:border-brand-600 hover:bg-brand-700 hover:text-ivory-50 hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Media grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          {THUMBNAILS.map((thumb, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={thumb}
                alt={`Media ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-12 h-12 rounded-full bg-ivory-50/90 flex items-center justify-center">
                  <Play className="h-5 w-5 text-brand-700 ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs font-medium text-ivory-50">Media Item {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className={`flex flex-col items-center gap-6 reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-ivory-100 border border-ivory-300 text-charcoal-700 transition-all duration-300 hover:-translate-y-1 ${s.color}`}
                  aria-label={s.label}
                >
                  <Icon className="h-5 w-5" />
                </button>
              );
            })}
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group">
            Explore Media
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
