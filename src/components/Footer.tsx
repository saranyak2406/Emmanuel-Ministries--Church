import { useNavigate } from 'react-router-dom';
import { Youtube, Facebook, Instagram, MapPin, MessageCircle, Send, Mail, Phone } from 'lucide-react';
import { MINISTRY, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

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

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-200">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Emmanuel Gospel Ministries"
                className="h-12 w-12 rounded-xl object-cover border border-brand-400/30"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-ivory-50 leading-none">EMMANUEL</h3>
                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-royal-400 mt-0.5">
                  Gospel Ministries
                </p>
              </div>
            </div>
            <p className="text-sm text-ivory-300 leading-relaxed mb-4">
              {MINISTRY.tagline}
            </p>
            <div className="flex items-start gap-2 text-sm text-ivory-400">
              <MapPin className="h-4 w-4 text-royal-400 mt-0.5 shrink-0" />
              <span>{MINISTRY.fullAddress}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Quick Links</h4>
            <div className="grid grid-cols-1 gap-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Ministries', href: '/ministries' },
                { label: 'Meetings', href: '/#meetings' },
                { label: 'Give', href: '/give' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-ivory-300 hover:text-gold-400 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3 text-sm text-ivory-300 mb-6">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-royal-400 mt-0.5 shrink-0" />
                <a href={`mailto:${MINISTRY.email}`} className="hover:text-gold-400 transition-colors">{MINISTRY.email}</a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-royal-400 mt-0.5 shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a href={`tel:${MINISTRY.phone.split('/')[0].replace(/\s+/g, '')}`} className="hover:text-gold-400 transition-colors">
                    {MINISTRY.phone.split('/')[0].trim()}
                  </a>
                  {MINISTRY.phone.includes('/') && (
                    <>
                      <span className="text-charcoal-700">|</span>
                      <a href={`tel:${MINISTRY.phone.split('/')[1].replace(/\s+/g, '')}`} className="hover:text-gold-400 transition-colors">
                        {MINISTRY.phone.split('/')[1].trim()}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Social Media</h4>
            <div className="flex flex-wrap items-center gap-3">
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
                    title={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-800 border border-charcoal-700 text-ivory-300 transition-all duration-300 hover:bg-royal-700 hover:text-ivory-50 hover:border-royal-700 hover:-translate-y-0.5"
                  >
                    {isTelegram ? (
                      <TelegramIcon className="h-4 w-4" />
                    ) : isWhatsapp ? (
                      <WhatsAppIcon className="h-4 w-4" />
                    ) : Icon ? (
                      <Icon className="h-4 w-4" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ivory-400">
            &copy; 2026 Emmanuel Gospel Ministries. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-ivory-400">
            <button onClick={() => handleNavClick('/legal')} className="hover:text-gold-400 transition-colors">Privacy Policy</button>
            <span className="text-charcoal-700">|</span>
            <button onClick={() => handleNavClick('/legal')} className="hover:text-gold-400 transition-colors">Terms & Conditions</button>
            <span className="text-charcoal-700">|</span>
            <button onClick={() => handleNavClick('/legal')} className="hover:text-gold-400 transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
