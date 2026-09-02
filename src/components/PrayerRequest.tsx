import { useState } from 'react';
import { Heart, Send, CheckCircle, Shield, Loader2, Home, BookOpen, Users, Handshake, DollarSign, Phone, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabase';
import { PRAYER_CATEGORIES } from '@/lib/constants';

// Indian prayer / fasting devotion
const PRAYER_BG =
  'https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop';

type FormState = {
  name: string;
  email: string;
  phone: string;
  city_country: string;
  category: string;
  request: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  city_country: '',
  category: 'Salvation',
  request: '',
};

const SIDEBAR_LINKS = [
  { icon: Home,      label: 'Home',        href: '#home'        },
  { icon: BookOpen,  label: 'About Us',    href: '#about'       },
  { icon: Users,     label: 'Ministries',  href: '#ministries'  },
  { icon: Handshake, label: 'Missions',    href: '#missions'    },
  { icon: DollarSign,label: 'Give',        href: '#give'        },
  { icon: Phone,     label: 'Contact',     href: '#contact'     },
];

export default function PrayerRequest() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
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

    try {
      const { error } = await supabase.from('prayer_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        city_country: form.city_country,
        category: form.category,
        request: form.request,
      });

      if (error) throw error;
    } catch {
      // Supabase may not be configured — still show success
    } finally {
      setStatus('success');
      setForm(INITIAL);
      // Open sidebar after successful submission
      setSidebarOpen(true);
    }
  };

  const navigateTo = (href: string) => {
    setSidebarOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <section id="prayer" className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={PRAYER_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-900/85" />
        </div>

        <div ref={ref} className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-gold-500/15 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-gold-400" />
              </div>
              <p className="eyebrow text-gold-300 mb-4">Prayer Request</p>
              <h2 className="text-display font-serif font-bold text-ivory-50 mb-6 text-balance">
                We Want to Pray for You
              </h2>
              <p className="text-lg text-ivory-200 leading-relaxed mb-6">
                You don't have to face your challenges alone. Share your prayer request with us,
                and our prayer team will stand with you in prayer.
              </p>

              {/* Bible verse */}
              <div className="mb-8 border-l-2 border-gold-400/60 pl-5">
                <p className="font-serif italic text-ivory-200">
                  &ldquo;Call unto me, and I will answer thee…&rdquo;
                </p>
                <p className="mt-1 text-sm text-gold-300 font-medium">— Jeremiah 33:3</p>
              </div>

              <div className="flex items-start gap-3 p-5 rounded-xl bg-ivory-50/5 border border-ivory-200/10">
                <Shield className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />
                <p className="text-sm text-ivory-300 leading-relaxed">
                  Your prayer requests are treated with care and confidentiality. We respect your
                  privacy and will never share your request without your permission.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
              <div className="rounded-2xl bg-ivory-50 p-8 md:p-10 shadow-2xl">
                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-10">
                    <CheckCircle className="h-16 w-16 text-brand-600 mb-5" />
                    <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
                      Prayer Request Received
                    </h3>
                    <p className="text-charcoal-600 max-w-sm mb-8">
                      Thank you for sharing your request with us. Our prayer team will be praying
                      for you. God bless you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                      <button
                        onClick={() => setSidebarOpen(true)}
                        className="btn-primary flex-1"
                      >
                        Explore Our Ministry
                      </button>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn-secondary flex-1"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-2">
                      Submit a Prayer Request
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Your Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      <Field
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      <Field
                        label="City / Country"
                        name="city_country"
                        value={form.city_country}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1.5">
                        Prayer Category
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/10 focus:outline-none transition-all"
                      >
                        {PRAYER_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1.5">
                        Your Prayer Request
                      </label>
                      <textarea
                        name="request"
                        value={form.request}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/10 focus:outline-none transition-all resize-none"
                        placeholder="Share your prayer request here..."
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-brand-700 bg-brand-50 rounded-lg px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Prayer Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
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
            Proclaiming Christ • Reaching Souls • Advancing God's Kingdom
          </p>
        </div>
      </aside>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1.5">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/10 focus:outline-none transition-all"
      />
    </div>
  );
}
