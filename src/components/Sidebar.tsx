import { Home, Heart, Gift, Mail, Smartphone, Youtube, Facebook, Instagram, MessageCircle, Send, BookOpen, Calendar, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Heart, label: 'About', href: '#about' },
  { icon: Users, label: 'Ministries', href: '#ministries' },
  { icon: BookOpen, label: 'Prayer', href: '#prayer' },
  { icon: Gift, label: 'Give', href: '#give' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

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

export default function Sidebar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show if not scrolled
  if (!isScrolled) return null;

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-white shadow-lg rounded-l-2xl p-4">
        <div className="flex flex-col gap-6">
          {SIDEBAR_ITEMS.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                className="w-10 h-10 rounded-lg bg-ivory-50 flex items-center justify-center transition-all duration-300 hover:bg-brand-700 hover:text-white text-charcoal-700"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:right-0 md:top-1/2 md:-translate-y-1/2 md:z-40 md:flex md:flex-col bg-white shadow-xl rounded-l-3xl md:p-4 md:gap-4 md:w-auto">
        {/* Main Navigation */}
        <div className="space-y-2">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-ivory-50 transition-all duration-300 text-charcoal-700 hover:bg-brand-700 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-ivory-200" />

        {/* Social Links */}
        <div className="space-y-2">
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
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-ivory-50 transition-all duration-300 text-charcoal-600 hover:text-charcoal-900 hover:bg-royal-100"
              >
                {isTelegram ? (
                  <TelegramIcon className="h-5 w-5" />
                ) : isWhatsapp ? (
                  <WhatsAppIcon className="h-5 w-5" />
                ) : Icon ? (
                  <Icon className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
