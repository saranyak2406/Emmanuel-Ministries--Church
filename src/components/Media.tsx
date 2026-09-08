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
              const Icon = isTelegram ? null : getSocialIcon(social.label);
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
