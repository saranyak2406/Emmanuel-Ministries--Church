import { useState } from 'react';
import { Calendar, MapPin, Clock, User, Building2, Navigation, Info, Share2, Star, Youtube, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CoverflowCarousel from '@/components/CoverflowCarousel';

const EVENTS = [
  {
    name: 'THREE DAYS SPECIAL FASTING & PRAYER MEETINGS',
    location: 'Sarpavaram, Kakinada, Andhra Pradesh',
    date: 'September 8–10, 2026',
    time: '6:00 PM – 9:00 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Emmanuel Gospel Ministries',
    desc: 'Come together in fasting and prayer as we seek God\'s presence, direction and breakthrough.',
    youtubeUrl: null,
    images: [
      '/images/meetings/e08d799f-0da3-413e-b2f7-794224c57e52.jpg',
      '/images/meetings/fasting-prayer/3c3ea491-66fa-4aec-bb2d-8f9c297a4cf3.jpg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.03.07 PM (1).jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.03.07 PM.jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.03.08 PM (2).jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.03.08 PM.jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.08.24 PM.jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.22.47 PM.jpeg',
      '/images/meetings/fasting-prayer/WhatsApp Image 2026-09-04 at 2.22.59 PM.jpeg'
    ]
  },
  {
    name: 'Gospel Revival Meeting',
    location: 'Hyderabad, Telangana',
    date: 'October 15, 2026',
    time: '6:30 PM – 8:30 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Local Church Partner',
    desc: 'An evening of worship, Word, and prayer for spiritual renewal.',
    youtubeUrl: 'https://www.youtube.com/@emmanuelgospelministries', 
    images: []
  },
  {
    name: 'Healing & Restoration Service',
    location: 'To Be Announced',
    date: 'November 2026',
    time: '7:00 PM – 9:00 PM',
    speaker: 'Evangelist Emmanuel Abraham',
    host: 'Emmanuel Gospel Ministries',
    desc: 'Ministering God\'s Word and praying for healing and restoration.',
    youtubeUrl: null,
    images: []
  },
];

// ── YouTube Modal ───────────────────────────────────────────────
function YoutubeModal({ url, onClose }: { url: string; onClose: () => void }) {
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
        className="relative w-full max-w-3xl aspect-video rounded-sm overflow-hidden shadow-2xl bg-charcoal-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-charcoal-900/80 flex items-center justify-center text-ivory-50 hover:bg-brand-500 transition-colors"
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

// ── Event Details Modal ──────────────────────────────────────────
function EventDetailsModal({ event, onClose }: { event: (typeof EVENTS)[0]; onClose: () => void }) {
  const handleDirections = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl bg-white flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal-900/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-500 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-8 md:p-12 overflow-x-hidden">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-charcoal-900 mb-4">{event.name}</h2>
          <p className="text-xl md:text-2xl text-charcoal-600 mb-6">{event.desc}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-0 pb-2 border-b border-charcoal-100">
            <div className="flex-1 space-y-5">
               <div className="flex items-center gap-4 text-base font-medium text-charcoal-800">
                 <Calendar className="h-6 w-6 text-brand-500 shrink-0" />
                 {event.date} @ {event.time}
               </div>
               <div className="flex items-center gap-4 text-base font-medium text-charcoal-800">
                 <User className="h-6 w-6 text-brand-500 shrink-0" />
                 {event.speaker}
               </div>
            </div>
            
            <div className="flex-1 space-y-5">
               <div className="flex items-center gap-4 text-base font-medium text-charcoal-800">
                 <MapPin className="h-6 w-6 text-brand-500 shrink-0" />
                 {event.location}
               </div>
               {event.host && (
                 <div className="flex items-center gap-4 text-base font-medium text-charcoal-800">
                   <Building2 className="h-6 w-6 text-brand-500 shrink-0" />
                   {event.host}
                 </div>
               )}
            </div>
          </div>

          {/* Event Images Gallery (3D Coverflow) */}
          {event.images && event.images.length > 1 && (
            <div className="w-full -mt-2">
              <CoverflowCarousel
                items={event.images.map((img, idx) => ({
                  id: idx,
                  image: img
                }))}
              />
            </div>
          )}

          {/* Action Button */}
          <div className="mt-10 flex justify-center">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}

// ── Event Card (Horizontal Theme) ──────────────────────────────────
function EventCard({
  event,
  index,
  isVisible,
  onYoutubeClick,
  onDetailsClick,
}: {
  event: (typeof EVENTS)[0];
  index: number;
  isVisible: boolean;
  onYoutubeClick: (url: string) => void;
  onDetailsClick: (event: (typeof EVENTS)[0]) => void;
}) {
  const imgUrl = (event.images && event.images.length > 0) 
    ? event.images[0] 
    : null;

  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1} ${isVisible ? 'is-visible' : ''} bg-white rounded-md overflow-hidden flex flex-col md:flex-row shadow-sm border border-charcoal-100 transition-all duration-300 hover:shadow-md`}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/3 lg:w-[30%] h-56 md:h-auto shrink-0 relative border-r border-charcoal-100/50 bg-charcoal-50 flex items-center justify-center">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={event.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Calendar className="w-16 h-16 text-charcoal-200" />
        )}
      </div>
      
      {/* Content Area */}
      <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl md:text-[1.75rem] font-serif font-medium text-charcoal-900 mb-3">{event.name}</h3>
          <p className="text-sm text-charcoal-600 mb-6 max-w-xl leading-relaxed">{event.desc}</p>
          <p className="text-xs font-medium text-charcoal-400 tracking-wide">
            {event.date} @ {event.time}
          </p>
        </div>
        
        <div className="shrink-0 flex items-center justify-end">
          <button 
            onClick={event.youtubeUrl ? () => onYoutubeClick(event.youtubeUrl!) : () => onDetailsClick(event)} 
            className="px-8 py-3 bg-[#BFA582] hover:bg-[#A88E6A] text-white text-[0.7rem] font-bold uppercase tracking-[0.2em] rounded-sm transition-colors shadow-sm"
          >
            {event.youtubeUrl ? 'Watch Live' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────
export default function Meetings() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [youtubeModal, setYoutubeModal] = useState<string | null>(null);
  const [detailsModal, setDetailsModal] = useState<(typeof EVENTS)[0] | null>(null);

  return (
    <section id="meetings" className="section-padding bg-ivory-50">
      <div ref={ref} className="container-max">
        
        {/* Header Theme */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`text-xs font-bold uppercase tracking-[0.2em] text-charcoal-400 mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>
            UPCOMING MEETINGS
          </p>
          <h2 className={`text-display md:text-5xl font-serif font-medium text-charcoal-900 mb-4 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Upcoming Gospel & Revival Meetings
          </h2>
          <p className={`text-charcoal-500 font-bold reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Experience God. Hear His Word. Pray Together.
          </p>
        </div>

        {/* Horizontal List */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {EVENTS.map((event, i) => (
            <EventCard
              key={event.name}
              event={event}
              index={i}
              isVisible={isVisible}
              onYoutubeClick={(url) => setYoutubeModal(url)}
              onDetailsClick={(ev) => setDetailsModal(ev)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      {youtubeModal && (
        <YoutubeModal url={youtubeModal} onClose={() => setYoutubeModal(null)} />
      )}
      {detailsModal && (
        <EventDetailsModal event={detailsModal} onClose={() => setDetailsModal(null)} />
      )}
    </section>
  );
}
