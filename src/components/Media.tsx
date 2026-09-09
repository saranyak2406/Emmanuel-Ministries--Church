import { useState } from 'react';
import { Play, X, Youtube, Facebook, Instagram, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SOCIAL_LINKS } from '@/lib/constants';

// Telegram SVG icon
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

function getSocialIcon(label: string) {
  if (label.toLowerCase().includes('youtube')) return Youtube;
  if (label.toLowerCase().includes('facebook')) return Facebook;
  if (label.toLowerCase().includes('instagram')) return Instagram;
  if (label.toLowerCase().includes('whatsapp')) return MessageCircle;
  return null;
}

// Featured sermon videos
const VIDEOS = [
  {
    title: 'The Power of the Gospel',
    thumbnail: 'https://img.youtube.com/vi/tVpTGkB7KV8/hqdefault.jpg',
    desc: 'Evangelist Emmanuel Abraham proclaims the Gospel at a powerful outreach meeting.',
    duration: '25:14',
    youtubeUrl: 'https://youtu.be/tVpTGkB7KV8?si=y33gglqbeBld52dc',
  },
  {
    title: 'Living by Faith in Difficult Times',
    thumbnail: 'https://img.youtube.com/vi/fuhGTqbKoLw/hqdefault.jpg',
    desc: 'A special gathering of believers for prayer, worship and the Word of God.',
    duration: '32:05',
    youtubeUrl: 'https://youtu.be/fuhGTqbKoLw?si=jwQXq04-Hi2VIAzM',
  },
  {
    title: 'The Cross and Our Redemption',
    thumbnail: 'https://img.youtube.com/vi/Ur6lXrM4RyU/hqdefault.jpg',
    desc: 'Taking the Gospel to villages and unreached communities in India.',
    duration: '18:47',
    youtubeUrl: 'https://youtu.be/Ur6lXrM4RyU?si=iLxv4qKAYw9oJE8X',
  },
];

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
          title="Ministry Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Media() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [videoModal, setVideoModal] = useState<string | null>(null);

  return (
    <section id="media" className="section-padding bg-charcoal-900">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow text-gold-400 mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>MEDIA & RESOURCES</p>
          <h2 className={`text-display font-serif font-bold text-ivory-50 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Messages That Build Your Faith
          </h2>
          <p className={`mt-4 font-bold text-lg text-ivory-300 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Listen to sermons, Bible teachings and live meeting recordings.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group cursor-pointer`}
              onClick={() => setVideoModal(v.youtubeUrl)}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg mb-4">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-700/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">
                    <Play className="h-6 w-6 text-ivory-50 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-charcoal-900/80 rounded-md px-2 py-1">
                  <span className="text-xs text-ivory-50 font-medium">{v.duration}</span>
                </div>
              </div>
              <h3 className="font-serif text-lg font-semibold text-ivory-50 mb-2 group-hover:text-gold-400 transition-colors">{v.title}</h3>
              <p className="text-sm text-ivory-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} text-center mb-16`}>
          <a
            href="https://youtube.com/@evangelistemmanuelabraham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-widest uppercase px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            <Youtube className="h-5 w-5" />
            WATCH MORE ON YOUTUBE
          </a>
        </div>

        {/* Social Links */}
        <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} text-center`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-ivory-400 mb-6">
            Follow Us on Social Media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const isTelegram = social.icon === 'telegram';
              const isWhatsapp = social.icon === 'whatsapp';
              const Icon = (isTelegram || isWhatsapp) ? null : getSocialIcon(social.label);
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-charcoal-800 border border-charcoal-700 rounded-xl px-5 py-3 transition-all duration-300 hover:border-gold-400/40 hover:bg-charcoal-800/50 hover:-translate-y-0.5"
                >
                  <span className="w-9 h-9 rounded-lg bg-charcoal-700 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-700">
                    {isTelegram ? (
                      <TelegramIcon className="h-4 w-4 text-ivory-300 group-hover:text-ivory-50" />
                    ) : isWhatsapp ? (
                      <WhatsAppIcon className="h-4 w-4 text-ivory-300 group-hover:text-ivory-50 transition-colors" />
                    ) : Icon ? (
                      <Icon className="h-4 w-4 text-ivory-300 group-hover:text-ivory-50 transition-colors" />
                    ) : (
                      <Send className="h-4 w-4 text-ivory-300 group-hover:text-ivory-50 transition-colors" />
                    )}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ivory-50">{social.label}</p>
                    <p className="text-[0.6rem] text-ivory-400">Follow &amp; Subscribe</p>
                  </div>
                  <ExternalLink className="h-3 w-3 text-ivory-500 ml-1" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {videoModal && <YoutubeModal url={videoModal} onClose={() => setVideoModal(null)} />}
    </section>
  );
}
