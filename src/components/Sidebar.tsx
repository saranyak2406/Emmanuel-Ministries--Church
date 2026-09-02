import { Home, Heart, Gift, Mail, Smartphone, Youtube, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Heart, label: 'About', href: '#about' },
  { icon: Gift, label: 'Give', href: '#give' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:bg-red-100' },
  { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-100' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:bg-pink-100' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:bg-green-100' },
];

export default function Sidebar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show if not scrolled (optional - remove this if you want it visible always)
  if (!isScrolled) return null;

  return (
    <>
      {/* Mobile Sidebar - 4 icons only */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 md:hidden bg-white shadow-lg rounded-l-2xl p-4">
        <div className="flex flex-col gap-6">
          {SIDEBAR_ITEMS.map((item) => {
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

      {/* Desktop Sidebar - Full with labels */}
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
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                className={`flex items-center justify-center w-10 h-10 rounded-lg bg-ivory-50 transition-all duration-300 text-charcoal-600 hover:text-charcoal-900 ${social.color}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
