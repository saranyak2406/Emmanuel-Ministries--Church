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
                <a href={`tel:${MINISTRY.phone.replace(/\s+/g, '')}`} className="hover:text-gold-400 transition-colors">{MINISTRY.phone}</a>
              </div>
            </div>
            
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Social Media</h4>
            <div className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const isTelegram = social.icon === 'telegram';
                const Icon = isTelegram ? null : getSocialIcon(social.label);
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
