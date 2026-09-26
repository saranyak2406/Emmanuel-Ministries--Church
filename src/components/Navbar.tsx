import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutGrid, ChevronRight, ChevronLeft, X, ArrowRight,
  Home, BookOpen, Eye, Target, Users, Calendar,
  PlayCircle, Globe, Handshake, DollarSign,
  Phone, Star, MessageSquare, Heart, Image, BookText, Flame, Lightbulb, HeartHandshake,
} from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import PrayingHandsIcon from '@/components/PrayingHandsIcon';

// ── All ministry items for dedicated mobile sub-drawer ───────────────────
const MINISTRY_ITEMS = [
  { label: 'Gospel Evangelism',       href: '/ministry/gospel-evangelism',        icon: Globe,          desc: 'Proclaiming Jesus Christ to all' },
  { label: 'Prayer Ministry',          href: '/ministry/prayer-ministry',          icon: MessageSquare,  desc: 'Standing together in prayer' },
  { label: 'Fasting Prayer',           href: '/ministry/fasting-prayer',           icon: Flame,          desc: 'Seeking God with fervent fasting' },
  { label: 'Revival Meetings',         href: '/ministry/revival-meetings',         icon: Calendar,       desc: 'Worship and spiritual renewal' },
  { label: 'Prophetic Prayer',         href: '/ministry/prophetic-prayer-meetings', icon: Lightbulb,      desc: 'Encouragement and divine guidance' },
  { label: 'Family Ministry',          href: '/ministry/family-ministry',          icon: Users,          desc: 'Building Christ-centered families' },
  { label: 'Healing & Deliverance',    href: '/ministry/healing-deliverance-prayer', icon: Heart,        desc: 'Prayer for restoration & peace' },
  { label: 'Outreach & Charity',       href: '/outreach',                          icon: HeartHandshake, desc: 'Serving our community in love' },
];

// ── All page sections for the sidebar (full site map) ─────────────────────
const ALL_SECTIONS = [
  {
    group: 'Main Pages',
    items: [
      { label: 'Home',         href: '/',            icon: Home          },
      { label: 'About Us',     href: '/about',       icon: BookOpen      },
      { label: 'Founder',      href: '/founder',     icon: Users         },
      { label: 'Vision',       href: '/vision',      icon: Eye           },
      { label: 'Mission',      href: '/mission',     icon: Target        },
      { label: 'Core Values',  href: '/core-values/christ', icon: Heart  },
    ],
  },
  {
    group: 'Our Ministry',
    items: [
      { label: 'Ministries',              href: '#open-ministries', icon: Globe,          isDrawer: true },
      { label: 'All Ministries Overview', href: '/ministries',       icon: Globe                         },
      { label: 'Outreach & Charity',      href: '/outreach',         icon: HeartHandshake                },
    ],
  },
  {
    group: 'Media & Events',
    items: [
      { label: 'Events & Meetings', href: '/meetings',      icon: Calendar   },
      { label: 'Daily Promise',     href: '/daily-promise',  icon: BookOpen   },
      { label: 'Bible Messages',    href: '/messages',       icon: BookText   },
      { label: 'Testimonials',      href: '/testimonials',   icon: Star       },
      { label: 'Gallery',           href: '/gallery',        icon: Image      },
      { label: 'Media Hub',         href: '/media',          icon: PlayCircle },
    ],
  },
  {
    group: 'Connect & Support',
    items: [
      { label: 'Contact Us',     href: '/contact',     icon: Phone        },
      { label: 'Prayer Request', href: '/prayer',      icon: MessageSquare },
      { label: 'Partnership',    href: '/partnership', icon: Handshake    },
      { label: 'Give Online',    href: '/give',        icon: DollarSign   },
    ],
  },
];

// ── Desktop Navigation Structure (Mega Menus) ─────────────────────────────
const DESKTOP_NAV = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about'
  },
  {
    label: 'Founder',
    href: '/founder'
  },
  {
    label: 'Ministries',
    href: '/ministries',
    dropdown: [
      { title: 'Gospel Evangelism', href: '/ministry/gospel-evangelism', icon: Globe },
      { title: 'Prayer Ministry', href: '/ministry/prayer-ministry', icon: MessageSquare },
      { title: 'Fasting Prayer', href: '/ministry/fasting-prayer', icon: Flame },
      { title: 'Revival Meetings', href: '/ministry/revival-meetings', icon: Calendar },
      { title: 'Prophetic Prayer', href: '/ministry/prophetic-prayer-meetings', icon: Lightbulb },
      { title: 'Family Ministry', href: '/ministry/family-ministry', icon: Users },
      { title: 'Healing & Deliverance', href: '/ministry/healing-deliverance-prayer', icon: Heart },
      { title: 'Outreach & Charity', href: '/outreach', icon: HeartHandshake },
    ]
  },
  {
    label: 'Media & Events',
    href: '/media',
    dropdown: [
      { title: 'Events & Meetings', href: '/meetings', icon: Calendar },
      { title: 'Daily Promise', href: '/daily-promise', icon: BookOpen },
      { title: 'Bible Messages', href: '/messages', icon: BookText },
      { title: 'Testimonials', href: '/testimonials', icon: Star },
      { title: 'Gallery', href: '/gallery', icon: Image },
    ]
  },
  {
    label: 'Connect & Support',
    href: '/contact',
    dropdown: [
      { title: 'Contact Us', href: '/contact', icon: Phone },
      { title: 'Prayer Request', href: '/prayer', icon: MessageSquare },
      { title: 'Partnership', href: '/partnership', icon: Handshake },
      { title: 'Give Online', href: '/give', icon: DollarSign },
    ]
  }
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ministriesDrawerOpen, setMinistriesDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background page from scrolling while drawer or sidebar is open
  useEffect(() => {
    if (sidebarOpen || ministriesDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen, ministriesDrawerOpen]);

  const handleNavClick = (href: string) => {
    if (href === '#open-ministries') {
      setMinistriesDrawerOpen(true);
      return;
    }

    setSidebarOpen(false);
    setMinistriesDrawerOpen(false);
    
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path || (path === '' && location.pathname === '/')) {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(href);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
          borderBottom: isScrolled ? '1px solid rgba(26,75,140,0.08)' : 'none',
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between py-2 md:py-3">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 text-left group shrink-0"
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
                <span className="font-sans text-[0.52rem] md:text-[0.58rem] font-semibold uppercase tracking-[0.18em] mt-0.5 text-royal-700">
                  Gospel Ministries
                </span>
              </div>
            </button>

            {/* Desktop nav links (Mega Menus) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">
              {DESKTOP_NAV.map((link) => {
                const hasDropdown = !!link.dropdown;
                
                return (
                  <div key={link.href} className="relative group py-4">
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`text-[0.75rem] uppercase tracking-[0.15em] font-bold transition-all duration-200 flex items-center gap-1.5 ${
                        isActive(link.href)
                          ? 'text-brand-600'
                          : 'text-charcoal-700 hover:text-brand-600'
                      }`}
                    >
                      {link.label}
                      {hasDropdown && (
                        <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-50 group-hover:opacity-100 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    {hasDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-max min-w-[320px] max-w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                        <div className="pt-2 pb-2">
                          <div className="bg-white shadow-2xl border border-ivory-200 rounded-2xl p-5 cursor-default text-left">
                            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400 mb-4 px-2">
                              {link.label} Overview
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {link.dropdown.map((sublink) => {
                                const Icon = sublink.icon;
                                return (
                                  <button
                                    key={sublink.title}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleNavClick(sublink.href);
                                    }}
                                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-brand-50 group/item transition-colors text-left"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-ivory-100 flex items-center justify-center shrink-0 group-hover/item:bg-brand-700 transition-colors">
                                      <Icon className="h-4 w-4 text-brand-700 group-hover/item:text-ivory-50 transition-colors" />
                                    </div>
                                    <span className="text-[0.85rem] font-semibold text-charcoal-900 group-hover/item:text-brand-800 transition-colors">
                                      {sublink.title}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                            <div className="mt-4 pt-4 border-t border-ivory-100 px-2 flex justify-between items-center">
                              <span className="text-xs text-charcoal-500 font-medium">Explore {link.label}</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavClick(link.href);
                                }}
                                className="text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-800 flex items-center gap-1 transition-colors bg-brand-50 px-3 py-1.5 rounded-md"
                              >
                                View Main Page <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: CTA + mobile hamburger (Sidebar button hidden on desktop) */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleNavClick('/prayer')}
                className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs shrink-0"
              >
                <PrayingHandsIcon className="h-4 w-4" />
                Prayer Request
              </button>

              {/* Sidebar toggle — ONLY ON MOBILE */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-charcoal-800 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                aria-label="Open mobile navigation"
              >
                <LayoutGrid className="h-6 w-6" />
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
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[70] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Full navigation sidebar"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-royal-800 to-charcoal-900 px-6 py-5 flex items-center justify-between shrink-0">
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
              <span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-royal-300 mt-0.5 block">
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
            <PrayingHandsIcon className="h-3.5 w-3.5" />
            Request Prayer
          </button>
          <p className="text-[0.6rem] text-charcoal-400 text-center mt-2 leading-relaxed">
            Preaching Christ • Transforming Lives • Reaching the World
          </p>
        </div>
      </aside>

      {/* ─── Ministries Mobile Sub-Drawer Backdrop ──────────────────────── */}
      <div
        className={`fixed inset-0 z-[80] bg-charcoal-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          ministriesDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMinistriesDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ─── Ministries Mobile Sub-Drawer Panel (85-90% width, sliding from right) ─── */}
      <aside
        className={`fixed top-0 right-0 h-full w-[88vw] sm:w-96 max-w-[420px] z-[90] bg-ivory-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          ministriesDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Ministries Menu"
      >
        {/* Top Header */}
        <div className="bg-white border-b border-ivory-200 px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMinistriesDrawerOpen(false)}
              className="w-9 h-9 rounded-full bg-ivory-100 flex items-center justify-center text-charcoal-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              aria-label="Back to main menu"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 tracking-wide">
                MINISTRIES
              </h2>
              <p className="text-[0.65rem] uppercase tracking-widest text-brand-700 font-semibold">
                Explore All Areas
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setMinistriesDrawerOpen(false);
              setSidebarOpen(false);
            }}
            className="w-9 h-9 rounded-full bg-charcoal-100 flex items-center justify-center text-charcoal-700 hover:bg-brand-600 hover:text-white transition-colors"
            aria-label="Close Ministries Drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable List of All 8 Ministries */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {/* Main All Ministries Page Button */}
          <button
            onClick={() => handleNavClick('/ministries')}
            className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-brand-50 border border-brand-200/70 text-left hover:bg-brand-100/70 transition-all group min-h-[52px]"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center shrink-0 shadow-sm text-ivory-50 group-hover:scale-105 transition-transform">
              <Globe className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-bold text-brand-950 block">
                All Ministries Overview
              </span>
              <span className="text-xs text-brand-800/80 line-clamp-1">
                View our main ministries overview page
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-brand-700 shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="pt-2 pb-1 px-2 text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-400">
            Our Ministries List
          </div>

          {MINISTRY_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`w-full flex items-center gap-3.5 p-3.5 rounded-2xl text-left transition-all duration-200 group border min-h-[54px] ${
                  active
                    ? 'bg-white border-brand-400 shadow-md text-brand-900 ring-1 ring-brand-300'
                    : 'bg-white border-ivory-200/90 hover:border-brand-300 hover:shadow-sm text-charcoal-900'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  active
                    ? 'bg-brand-700 text-white shadow-sm'
                    : 'bg-ivory-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm block leading-snug ${active ? 'font-bold text-brand-900' : 'font-semibold text-charcoal-900'}`}>
                    {item.label}
                  </span>
                  <span className="text-xs text-charcoal-500 line-clamp-1 block mt-0.5">
                    {item.desc}
                  </span>
                </div>
                <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                  active
                    ? 'text-brand-600 translate-x-1'
                    : 'text-charcoal-400 group-hover:text-brand-600 group-hover:translate-x-1'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Footer in Drawer */}
        <div className="p-4 bg-white border-t border-ivory-200 shrink-0">
          <button
            onClick={() => handleNavClick('/prayer')}
            className="btn-primary w-full !text-xs !py-2.5"
          >
            <PrayingHandsIcon className="h-3.5 w-3.5" />
            Request Prayer
          </button>
        </div>
      </aside>
    </>
  );
}
