import { useState } from 'react';
import { Calendar, MapPin, Clock, User, Building2, Navigation, Info, Share2, Star, Youtube, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const EVENTS = [
  {
    name: 'Three Days Special Fasting & Prayer Meetings',
    location: 'Sarpavaram, Kakinada, Andhra Pradesh',
    date: 'September 8–10, 2026',
    time: '6:00 PM – 9:00 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Emmanuel Gospel Ministries',
    desc: 'Come together in fasting and prayer as we seek God\'s presence, direction and breakthrough.',
    featured: true,
    youtubeUrl: null,
  },
  {
    name: 'Gospel Revival Meeting',
    location: 'Hyderabad, Telangana',
    date: 'October 15, 2026',
    time: '6:30 PM – 8:30 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Local Church Partner',
    desc: 'An evening of worship, Word, and prayer for spiritual renewal.',
    featured: false,
    youtubeUrl: 'https://www.youtube.com/@emmanuelgospelministries', // placeholder — replace with actual URL
  },
  {
    name: 'Healing & Restoration Service',
    location: 'To Be Announced',
    date: 'November 2026',
    time: '7:00 PM – 9:00 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Emmanuel Gospel Ministries',
    desc: 'Ministering God\'s Word and praying for healing and restoration.',
    featured: false,
    youtubeUrl: null,
  },
];

// ── YouTube Modal ───────────────────────────────────────────────
function YoutubeModal({ url, onClose }: { url: string; onClose: () => void }) {
  // Convert watch URL to embed URL if needed
  const embedUrl = url.includes('watch?v=')
    ? url.replace('watch?v=', 'embed/')
    : url.includes('youtu.be/')
    ? url.replace('youtu.be/', 'www.youtube.com/embed/')
    : url;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-charcoal-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-charcoal-900/80 flex items-center justify-center text-ivory-50 hover:bg-brand-700 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        <iframe
          src={embedUrl}
          title="Meeting Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// ── Event Card ──────────────────────────────────────────────────
function EventCard({
  event,
  index,
  isVisible,
  onYoutubeClick,
}: {
  event: (typeof EVENTS)[0];
  index: number;
  isVisible: boolean;
  onYoutubeClick: (url: string) => void;
}) {
  const handleDirections = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: event.name,
      text: `Join us for ${event.name} on ${event.date} at ${event.time}. Location: ${event.location}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert('Event details copied to clipboard!');
    }
  };

  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''} ${
        event.featured
          ? 'lg:col-span-3 bg-gradient-to-br from-brand-800 to-brand-950 text-ivory-50'
          : 'bg-ivory-50 border border-ivory-200'
      } rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
    >
      {event.featured ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: congregation photo */}
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <img
              src="/meeting-congregation.jpg"
              alt="Congregation gathered at Emmanuel Gospel Ministries meeting"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/50 to-brand-950/20" />
            <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-gold-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-900">
              <Star className="h-3 w-3 fill-current" />
              Featured Event
            </div>
          </div>
          {/* Right: content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-balance">{event.name}</h3>
            <p className="text-ivory-200 mb-6 leading-relaxed">{event.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <InfoRow icon={MapPin}     label="Location" value={event.location} />
              <InfoRow icon={Calendar}   label="Date"     value={event.date}     />
              <InfoRow icon={Clock}      label="Time"     value={event.time}     />
              <InfoRow icon={User}       label="Speaker"  value={event.speaker}  />
              <InfoRow icon={Building2}  label="Host"     value={event.host}     />
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleDirections} className="btn-gold !py-2.5 !px-5 !text-xs">
                <Navigation className="h-3.5 w-3.5" />
                Get Directions
              </button>
              <button className="btn-light !py-2.5 !px-5 !text-xs border-ivory-200/30">
                <Info className="h-3.5 w-3.5" />
                Event Details
              </button>
              <button onClick={handleShare} className="btn-light !py-2.5 !px-5 !text-xs border-ivory-200/30">
                <Share2 className="h-3.5 w-3.5" />
                Share Event
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Calendar className="h-5 w-5 text-brand-700" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">{event.date}</span>
          </div>
          <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{event.name}</h3>
          <p className="text-sm text-charcoal-600 mb-5 leading-relaxed">{event.desc}</p>
          <div className="space-y-2 mb-5">
            <SmallInfoRow icon={MapPin} value={event.location} />
            <SmallInfoRow icon={Clock}  value={event.time}     />
            <SmallInfoRow icon={User}   value={event.speaker}  />
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={handleDirections} className="btn-secondary !py-2 !px-4 !text-xs">
              <Navigation className="h-3 w-3" />
              Directions
            </button>
            <button onClick={handleShare} className="btn-secondary !py-2 !px-4 !text-xs">
              <Share2 className="h-3 w-3" />
              Share
            </button>
            {/* YouTube button — shown only when a URL is provided */}
            {event.youtubeUrl && (
              <button
                onClick={() => onYoutubeClick(event.youtubeUrl!)}
                className="inline-flex items-center gap-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white !py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/30"
              >
                <Youtube className="h-3.5 w-3.5" />
                Watch Live
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
      <div>
        <p className="text-[0.65rem] uppercase tracking-widest text-ivory-300">{label}</p>
        <p className="text-sm font-medium text-ivory-50">{value}</p>
      </div>
    </div>
  );
}

function SmallInfoRow({ icon: Icon, value }: { icon: typeof MapPin; value: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-charcoal-600">
      <Icon className="h-4 w-4 text-brand-600 shrink-0" />
      {value}
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────
export default function Meetings() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [youtubeModal, setYoutubeModal] = useState<string | null>(null);

  return (
    <section id="meetings" className="section-padding bg-ivory-50/85 backdrop-blur-md">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Upcoming Meetings</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Upcoming Gospel &amp; Revival Meetings
          </h2>
          <p className={`mt-4 text-lg text-charcoal-600 font-serif italic reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Experience God. Hear His Word. Pray Together.
          </p>
        </div>

        {/* Congregation photo strip */}
        <div className={`reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''} mb-10 rounded-2xl overflow-hidden shadow-xl relative`}>
          <img
            src="/meeting-congregation.jpg"
            alt="Congregation gathered at Emmanuel Gospel Ministries"
            className="w-full h-56 md:h-72 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400 mb-1">Emmanuel Gospel Ministries</p>
            <p className="font-serif text-xl font-bold text-ivory-50">Our Congregation — Gathered in His Name</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <EventCard
              key={event.name}
              event={event}
              index={i}
              isVisible={isVisible}
              onYoutubeClick={(url) => setYoutubeModal(url)}
            />
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {youtubeModal && (
        <YoutubeModal url={youtubeModal} onClose={() => setYoutubeModal(null)} />
      )}
    </section>
  );
}
