import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, Heart, LayoutGrid, ChevronRight,
  Home, BookOpen, Eye, Target, Users, Calendar,
  PlayCircle, Globe, Handshake, DollarSign,
  Phone, Star, MessageSquare,
} from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

// ── All page sections for the sidebar (full site map) ─────────────────────
const ALL_SECTIONS = [
  {
    group: 'Main',
    items: [
      { label: 'Home',         href: '/',            icon: Home          },
      { label: 'About',        href: '/about',       icon: BookOpen      },
    ],
  },
  {
    group: 'Our Ministry',
    items: [
      { label: 'Ministries',   href: '/ministries',  icon: Users         },
      { label: 'Missions',     href: '/missions',    icon: Globe         },
      { label: 'Partnership',  href: '/partnership', icon: Handshake     },
    ],
  },
  {
    group: 'Events & Prayer',
    items: [
      { label: 'Meetings',     href: '/meetings',    icon: Calendar      },
      { label: 'Prayer',       href: '/prayer',      icon: MessageSquare },
      { label: 'Testimonies',  href: '/media',       icon: Star          },
    ],
  },
  {
    group: 'Media',
    items: [
      { label: 'Media',        href: '/media',       icon: PlayCircle    },
      { label: 'Vision',       href: '/about',       icon: Eye           },
      { label: 'Mission',      href: '/about',       icon: Target        },
    ],
  },
  {
    group: 'Partner & Support',
    items: [
      { label: 'Give',         href: '/give',        icon: DollarSign    },
      { label: 'Contact',      href: '/contact',     icon: Phone         },
    ],
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setSidebarOpen(false);
    navigate(href);
    // Scroll to top on page navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Top Navbar ──────────────────────────────────────────────────── */}
      <header
        className="fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300"
        style={{
          boxShadow: isScrolled
            ? '0 2px 12px 0 rgba(0, 0, 0, 0.10)'
            : 'none',
          borderBottom: isScrolled ? '1px solid rgba(193,18,18,0.08)' : 'none',
        }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-2 md:py-3">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 text-left group"
            >
              <img
                src="/logo.jpg"
                alt="Emmanuel Gospel Ministries Logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold leading-none tracking-wide text-brand-800">
                  EMMANUEL
                </span>
                <span className="font-sans text-[0.52rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.18em] mt-0.5 text-forest-700">
                  Gospel Ministries
                </span>
              </div>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 text-[0.8rem] font-medium transition-all duration-200 rounded-md ${
                    isActive(link.href)
                      ? 'text-brand-700 bg-brand-50 font-semibold'
                      : 'text-charcoal-700 hover:text-brand-700 hover:bg-brand-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right: CTA + sidebar toggle + mobile hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick('/prayer')}
                className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs"
              >
                <Heart className="h-3.5 w-3.5" />
                Prayer Request
              </button>

              {/* Sidebar toggle — all screen sizes */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-charcoal-800 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                aria-label="Open full navigation sidebar"
                title="All Sections"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md transition-colors text-charcoal-800 hover:bg-brand-50 hover:text-brand-700"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-ivory-50 border-t border-brand-100">
            <div className="container-max py-6">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-3 py-2.5 text-sm font-medium transition-colors border-b border-ivory-100 ${
                      isActive(link.href)
                        ? 'text-brand-700 font-semibold'
                        : 'text-charcoal-700 hover:text-brand-700'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleNavClick('/prayer')}
                className="btn-primary w-full mt-5"
              >
                <Heart className="h-4 w-4" />
                Prayer Request
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Sidebar backdrop ────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Sidebar panel ───────────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Full navigation sidebar"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-forest-800 to-charcoal-900 px-6 py-5 flex items-center justify-between shrink-0">
          <button onClick={() => handleNavClick('/')} className="text-left flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Emmanuel Gospel Ministries"
              className="h-11 w-11 rounded-lg object-cover border-2 border-brand-400/40"
            />
            <div>
              <span className="font-serif text-xl font-bold text-ivory-50 block leading-none">
                EMMANUEL
              </span>
              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-olive-300 mt-0.5 block">
                Gospel Ministries
              </span>
              <p className="text-[0.58rem] text-ivory-300/60 mt-0.5">All Sections</p>
            </div>
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 rounded-full bg-ivory-50/10 flex items-center justify-center text-ivory-50 hover:bg-brand-600/60 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable nav — ALL sections grouped */}
        <nav className="flex-1 overflow-y-auto py-3">
          {ALL_SECTIONS.map((section) => (
            <div key={section.group} className="mb-1">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-charcoal-400 px-5 pt-4 pb-2">
                {section.group}
              </p>

              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 group ${
                      active
                        ? 'bg-brand-50 text-brand-800'
                        : 'text-charcoal-800 hover:bg-brand-50 hover:text-brand-800'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      active
                        ? 'bg-brand-700 border-brand-700'
                        : 'bg-ivory-100 border-ivory-200 group-hover:bg-brand-700 group-hover:border-brand-700'
                    }`}>
                      <Icon className={`h-3.5 w-3.5 transition-colors duration-200 ${
                        active ? 'text-ivory-50' : 'text-brand-700 group-hover:text-ivory-50'
                      }`} />
                    </div>
                    <span className={`flex-1 text-sm ${active ? 'font-semibold' : 'font-medium'}`}>
                      {item.label}
                    </span>
                    <ChevronRight className={`h-3.5 w-3.5 transition-all duration-200 ${
                      active
                        ? 'text-brand-500 translate-x-0.5'
                        : 'text-charcoal-300 group-hover:text-brand-500 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}

              <div className="mx-4 mt-2 border-b border-ivory-100" />
            </div>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="shrink-0 p-4 border-t border-ivory-200 bg-ivory-50">
          <button
            onClick={() => handleNavClick('/prayer')}
            className="btn-primary w-full !text-xs !py-2.5"
          >
            <Heart className="h-3.5 w-3.5" />
            Request Prayer
          </button>
          <p className="text-[0.6rem] text-charcoal-400 text-center mt-2 leading-relaxed">
            Proclaiming Christ • Reaching Souls • Advancing God's Kingdom
          </p>
        </div>
      </aside>
    </>
  );
}
