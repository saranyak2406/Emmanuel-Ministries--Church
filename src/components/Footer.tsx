import { Youtube, Facebook, Instagram, MapPin } from 'lucide-react';
import { MINISTRY, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
                <p className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-forest-400 mt-0.5">
                  Gospel Ministries
                </p>
              </div>
            </div>
            <p className="text-sm text-ivory-300 leading-relaxed mb-4">
              {MINISTRY.tagline}
            </p>
            <div className="flex items-center gap-2 text-sm text-ivory-400">
              <MapPin className="h-4 w-4 text-forest-400" />
              {MINISTRY.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
              {NAV_LINKS.map((link) => (
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

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-ivory-50 mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-6">
              {[Youtube, Facebook, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-800 border border-charcoal-700 text-ivory-300 transition-all duration-300 hover:bg-forest-700 hover:text-ivory-50 hover:border-forest-700 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick('#prayer')}
              className="btn-primary !py-2.5 !px-5 !text-xs"
            >
              Request Prayer
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ivory-400">
            &copy; 2026 Emmanuel Gospel Ministries. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-ivory-400">
            <button className="hover:text-gold-400 transition-colors">Privacy Policy</button>
            <span className="text-charcoal-700">|</span>
            <button className="hover:text-gold-400 transition-colors">Terms & Conditions</button>
            <span className="text-charcoal-700">|</span>
            <button className="hover:text-gold-400 transition-colors">Disclaimer</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
