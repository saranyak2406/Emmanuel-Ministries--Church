import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, User, Mail, Phone, MapPin, Tag, Home, BookOpen, Users, Handshake, DollarSign, Phone as PhoneIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { PRAYER_CATEGORIES } from '@/lib/constants';

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

export default function PrayerRequest() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate a brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('success');
    setForm(INITIAL);
  };

  return (
    <>
      <section id="prayer" className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center">
        {/* Background Image changes based on status */}
        <div className="absolute inset-0 z-0">
          <img 
            src={status === 'success' ? SUCCESS_BG : PRAYER_BG} 
            alt="Prayer Background" 
            className="h-full w-full object-cover transition-opacity duration-1000" 
          />
          {/* A light overlay to make the background bright but keep image visible */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        <div ref={ref} className="container-max relative z-10 w-full px-4">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {status === 'success' ? (
              <div className="max-w-2xl mx-auto text-center py-20 px-6 rounded-3xl bg-white shadow-2xl">
                <h2 
                  className="text-4xl md:text-5xl font-bold mb-8 uppercase leading-tight tracking-wider text-brand-700"
                >
                  Thank You For<br/>Submitting<br/>Your Request!
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-gold-500 text-white font-bold py-3 px-8 rounded-full hover:bg-gold-600 transition-colors"
                  >
                    Submit Another
                  </button>
                  <button
                    onClick={() => {
                      navigate('/');
                      window.scrollTo(0, 0);
                    }}
                    className="bg-charcoal-900 text-white font-bold py-3 px-8 rounded-full hover:bg-charcoal-800 transition-colors"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:pt-8 max-w-6xl mx-auto">
                
                {/* Left Column: Text & Information */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="h-px bg-gold-400 w-12" />
                    <span className="tracking-widest uppercase text-sm font-bold text-charcoal-800">
                      FAITH &bull; PRAYER &bull; HOPE
                    </span>
                    <div className="h-px bg-gold-400 w-12" />
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal-900 mb-6 leading-[1.1]">
                    We would love to<br />
                    <span className="text-gold-500">pray with you</span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-charcoal-800 font-bold mb-8 leading-relaxed">
                    You don't have to carry it alone.<br />
                    Share what is on your heart. Our prayer team will stand with you in faith and confidentiality.
                  </p>
                  
                  <div className="mt-10 lg:mt-16">
                    <p className="text-xl md:text-2xl italic font-serif text-charcoal-900 leading-relaxed mb-2">
                      “Call upon Me, and I will answer you.”
                    </p>
                    <p className="font-bold text-gold-500 text-lg">
                      — Jeremiah 33:3
                    </p>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                  
                  {/* Decorative leaves in top right corner (simulated with CSS/SVG) */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 0C50 0 60 20 80 20C80 20 70 40 50 40C30 40 20 20 20 20C40 20 50 0 50 0Z" fill="#D4AF37"/>
                      <path d="M80 30C80 30 90 40 100 40C100 40 90 60 80 60C60 60 50 40 50 40C70 40 80 30 80 30Z" fill="#D4AF37"/>
                      <path d="M20 30C20 30 10 40 0 40C0 40 10 60 20 60C40 60 50 40 50 40C30 40 20 30 20 30Z" fill="#D4AF37"/>
                    </svg>
                  </div>

                  <div className="flex items-center gap-6 mb-8 relative z-10 border-b border-ivory-100 pb-6">
                    <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center shrink-0">
                      <PrayingHandsIcon className="w-8 h-8 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-1">Prayer Request</h3>
                      <p className="text-charcoal-600">Let us join you in prayer. Your request matters.</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                        <User className="w-4 h-4 text-gold-600" /> Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-charcoal-300"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                          <Mail className="w-4 h-4 text-gold-600" /> Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-charcoal-300"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                          <Phone className="w-4 h-4 text-gold-600" /> Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-charcoal-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* City & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                          <MapPin className="w-4 h-4 text-gold-600" /> Country / City
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={form.city}
                          onChange={handleChange}
                          className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-charcoal-300"
                          placeholder="Your city and country"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                          <Tag className="w-4 h-4 text-gold-600" /> Prayer Category
                        </label>
                        <select
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all appearance-none"
                        >
                          {PRAYER_CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Request */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-charcoal-900 mb-2">
                        <PrayingHandsIcon className="w-4 h-4 text-gold-600" /> Your Prayer Request
                      </label>
                      <textarea
                        name="request"
                        required
                        rows={3}
                        value={form.request}
                        onChange={handleChange}
                        className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 text-charcoal-900 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none placeholder:text-charcoal-300"
                        placeholder="Enter your prayer request here..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#C2912E] hover:bg-[#A87B22] text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg mt-2"
                    >
                      {status === 'loading' ? 'SENDING...' : (
                        <>
                          <Send className="w-5 h-5" /> SEND PRAYER REQUEST
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
