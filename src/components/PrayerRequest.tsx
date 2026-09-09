import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Shield, Loader2, Home, BookOpen, Users, Handshake, DollarSign, Phone, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRAYER_CATEGORIES, SOCIAL_LINKS } from '@/lib/constants';

// WhatsApp SVG icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}
import PrayingHandsIcon from '@/components/PrayingHandsIcon';

const PRAYER_BG = '/images/prayer-bg.jpeg';
const SUCCESS_BG = 
  'https://images.pexels.com/photos/272337/pexels-photo-272337.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop';

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  category: string;
  request: string;
};

const INITIAL: FormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  category: PRAYER_CATEGORIES[0],
  request: '',
};

const SIDEBAR_LINKS = [
  { icon: Home,      label: 'Home',        href: '/'            },
  { icon: BookOpen,  label: 'About Us',    href: '/about'       },
  { icon: Users,     label: 'Ministries',  href: '/ministries'  },
  { icon: Handshake, label: 'Missions',    href: '/missions'    },
  { icon: DollarSign,label: 'Give',        href: '/give'        },
  { icon: Phone,     label: 'Contact',     href: '/contact'     },
];

export default function PrayerRequest() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Simulate a brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('success');
    setForm(INITIAL);
  };

  const navigateTo = (href: string) => {
    setSidebarOpen(false);
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="prayer" className="relative min-h-screen py-20 overflow-hidden flex items-center justify-center">
        {/* Background Image changes based on status */}
        <div className="absolute inset-0 z-0">
          <img 
            src={status === 'success' ? SUCCESS_BG : PRAYER_BG} 
            alt="Prayer Background" 
            className="h-full w-full object-cover transition-opacity duration-1000" 
          />
          {/* A light overlay to make the background bright and clean */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div ref={ref} className="container-max relative z-10 w-full px-4">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {status === 'success' ? (
              <div className="max-w-2xl mx-auto text-center py-20 px-6 rounded-3xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl">
                <h2 
                  className="text-4xl md:text-5xl font-bold mb-8 uppercase leading-tight tracking-wider"
                  style={{
                    color: '#e2d3c1', // Tan/Gold color from the template
                    WebkitTextStroke: '1px #4a3b2c',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.2), -1px -1px 0 #4a3b2c, 1px -1px 0 #4a3b2c, -1px 1px 0 #4a3b2c, 1px 1px 0 #4a3b2c'
                  }}
                >
                  Thank You For<br/>Submitting<br/>Your Request!
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                  <button
                    onClick={() => {
                      setStatus('idle');
                    }}
                    className="btn-primary"
                  >
                    Submit Another
                  </button>
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="btn-primary"
                  >
                    Explore Ministry
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:pt-8">
                {/* Left Column: Text & Information */}
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
                    We Want to Pray for You
                  </h2>
                  <p className="text-2xl text-brand-700 font-bold mb-6 leading-relaxed">
                    You Can Share Your Prayer Request
                  </p>
                  <p className="text-lg text-charcoal-700 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                    Whatever you are facing, you can bring it before God in prayer. “Call unto me, and I will answer thee...”
                    <br />
                    <span className="font-bold text-brand-700 mt-2 block">— Jeremiah 33:3</span>
                  </p>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/60 shadow-xl">
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-8 uppercase tracking-wider text-center">PRAYER FORM</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-lg font-bold text-charcoal-800 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-charcoal-800 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                          className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-charcoal-800 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter your phone number"
                          className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-charcoal-800 mb-2">
                          City / Country
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          required
                          placeholder="Your city and country"
                          className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-charcoal-800 mb-2">
                          Prayer Category
                        </label>
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm transition-all"
                        >
                          {PRAYER_CATEGORIES.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-charcoal-800 mb-2">
                        Your Prayer Request
                      </label>
                      <textarea
                        name="request"
                        value={form.request}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Enter your prayer request"
                        className="w-full bg-white/90 backdrop-blur-md border border-charcoal-200 rounded-xl px-5 py-4 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm resize-none transition-all"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 font-bold text-center">
                        {errorMsg}
                      </p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full btn-primary py-4 rounded-xl border-none"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="h-6 w-6 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'SUBMIT'
                        )}
                      </button>

                      <div className="mt-4 flex flex-col items-center gap-3">
                        <span className="text-sm font-medium text-charcoal-400 uppercase tracking-widest">— OR —</span>
                        <a 
                          href={SOCIAL_LINKS.find(s => s.icon === 'whatsapp')?.href || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-light border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
                        >
                          <WhatsAppIcon className="h-6 w-6" />
                          <span className="font-bold tracking-widest uppercase">Connect on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </form>

                  <div className="mt-8 pt-6 border-t border-charcoal-200/50">
                    <p className="text-brand-700 font-bold text-sm tracking-wide mb-2 uppercase">
                      PRIVACY NOTICE
                    </p>
                    <p className="text-charcoal-600 text-sm leading-relaxed font-medium">
                      Your prayer request will be treated with care and confidentiality. Please do not submit highly sensitive personal information through the form.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Sidebar overlay after prayer submission ── */}
      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[90] bg-charcoal-900/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 z-[95] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-brand-800 to-charcoal-900 px-6 py-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-1">
                Emmanuel Gospel Ministries
              </p>
              <h3 className="text-xl font-serif font-bold text-ivory-50">Explore Our Ministry</h3>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 rounded-full bg-ivory-50/10 flex items-center justify-center text-ivory-50 hover:bg-ivory-50/20 transition-colors mt-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-ivory-300 leading-relaxed">
            Your prayer has been received. Here are all sections of our ministry for you to explore.
          </p>
        </div>

        {/* Nav links */}
        <nav className="p-4 overflow-y-auto h-[calc(100%-220px)]">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 px-3 mb-3">
            Quick Navigation
          </p>
          <div className="space-y-1">
            {SIDEBAR_LINKS.map(({ icon: Icon, label, href }) => (
              <button
               key={href}
               onClick={() => navigateTo(href)}
               className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left text-charcoal-800 hover:bg-brand-50 hover:text-brand-800 transition-all duration-200 group"
             >
               <div className="w-9 h-9 rounded-lg bg-ivory-100 flex items-center justify-center shrink-0 group-hover:bg-brand-700 transition-colors duration-200">
                 <Icon className="h-4 w-4 text-brand-700 group-hover:text-ivory-50 transition-colors duration-200" />
               </div>
               <span className="font-medium text-sm">{label}</span>
             </button>
            ))}
          </div>

          {/* Additional sections */}
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 px-3 mb-3 mt-6">
            More Sections
          </p>
          <div className="space-y-1">
            {[
              { label: 'Vision',      href: '#vision'      },
              { label: 'Mission',     href: '#mission'     },
              { label: 'Meetings',    href: '#meetings'    },
              { label: 'Testimonies', href: '#testimonies' },
              { label: 'Media',       href: '#media'       },
              { label: 'Partnership', href: '#partnership' },
            ].map(({ label, href }) => (
              <button
                key={href}
                onClick={() => navigateTo(href)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-charcoal-600 hover:bg-ivory-100 hover:text-charcoal-900 transition-all duration-200 font-medium"
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-ivory-200 bg-ivory-50">
          <p className="text-xs text-charcoal-500 text-center leading-relaxed">
            Preaching Christ &bull; Transforming Lives &bull; Reaching the World
          </p>
        </div>
      </aside>
    </>
  );
}
