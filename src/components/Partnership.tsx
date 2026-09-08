import { useState } from 'react';
import { Heart, HandHeart, Globe, Calendar, DollarSign, ArrowRight, X, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PARTNERSHIPS = [
  {
    icon: Heart,
    title: 'PRAYER PARTNERSHIP',
    desc: 'Stand with us in prayer for Gospel meetings, missions, families and souls.',
  },
  {
    icon: HandHeart,
    title: 'MINISTRY PARTNERSHIP',
    desc: 'Work together with us in Gospel outreach and ministry initiatives.',
  },
  {
    icon: Globe,
    title: 'MISSION PARTNERSHIP',
    desc: 'Support Gospel missions and outreach opportunities.',
  },
  {
    icon: Calendar,
    title: 'EVENT PARTNERSHIP',
    desc: 'Partner with us in organizing Gospel and prayer gatherings.',
  },
  {
    icon: DollarSign,
    title: 'FINANCIAL PARTNERSHIP',
    desc: 'Support ministry activities through approved and transparent giving channels.',
  },
];

export default function Partnership() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'PRAYER PARTNERSHIP',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate network request
    await new Promise(r => setTimeout(r, 600));
    setStatus('success');
    setForm({ name: '', phone: '', email: '', type: 'PRAYER PARTNERSHIP', message: '' });
  };

  return (
    <section id="partnership" className="pt-10 md:pt-16 pb-20 md:pb-28 bg-ivory-50 relative">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>PARTNERSHIP</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Partner With the Gospel
          </h2>
          <p className={`mt-6 text-xl font-bold text-brand-700 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''} text-balance`}>
            Together, We Can Reach More People With the Gospel of Jesus Christ.
          </p>
          <p className={`mt-4 text-base text-charcoal-600 leading-relaxed reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            Ministry becomes stronger when believers pray, serve and work together. You can partner with Emmanuel Gospel Ministries through:
          </p>
          <div className="mt-8 bg-brand-50 border-l-4 border-brand-700 p-6 text-left max-w-2xl mx-auto rounded-r-lg">
            <p className="font-serif italic text-lg text-charcoal-800">
              "I thank my God upon every remembrance of you, for your fellowship in the gospel from the first day until now."
            </p>
            <p className="mt-2 text-sm font-bold tracking-widest uppercase text-brand-700">
              — Philippians 1:3,5
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold text-charcoal-900">HOW YOU CAN PARTNER</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIPS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:border-brand-200 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-700 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{p.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <button
            onClick={() => { setModalOpen(true); setStatus('idle'); }}
            className="btn-primary"
          >
            BECOME A PARTNER
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Partnership Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
           
           {/* Modal Panel */}
           <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-up flex flex-col max-h-[90vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-800 to-brand-900 px-6 py-5 shrink-0 flex items-center justify-between">
                 <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-1">Emmanuel Gospel Ministries</p>
                    <h3 className="text-2xl font-serif font-bold text-ivory-50">Become A Partner</h3>
                 </div>
                 <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-full bg-ivory-50/10 flex items-center justify-center text-ivory-50 hover:bg-ivory-50/20 transition-colors">
                    <X className="h-4 w-4" />
                 </button>
              </div>
              
              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                 {status === 'success' ? (
                   <div className="text-center py-10">
                     <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <Heart className="w-10 h-10" />
                     </div>
                     <h4 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">Thank You!</h4>
                     <p className="text-charcoal-600 mb-8 leading-relaxed">
                       Your partnership request has been received. We are so grateful for your willingness to stand with us. Our team will contact you shortly!
                     </p>
                     <button onClick={() => setModalOpen(false)} className="btn-primary w-full justify-center">Close Window</button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-5">
                     <div>
                       <label className="block text-sm font-bold text-charcoal-800 mb-2">Full Name</label>
                       <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-ivory-50 border border-ivory-200 rounded-xl px-4 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Enter your full name" />
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                       <div>
                         <label className="block text-sm font-bold text-charcoal-800 mb-2">Phone Number</label>
                         <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-ivory-50 border border-ivory-200 rounded-xl px-4 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Your phone number" />
                       </div>
                       <div>
                         <label className="block text-sm font-bold text-charcoal-800 mb-2">Email Address</label>
                         <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-ivory-50 border border-ivory-200 rounded-xl px-4 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Your email address" />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-charcoal-800 mb-2">Partnership Area</label>
                       <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full bg-ivory-50 border border-ivory-200 rounded-xl px-4 py-3.5 text-charcoal-900 font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all">
                         {PARTNERSHIPS.map(p => (
                           <option key={p.title} value={p.title}>{p.title}</option>
                         ))}
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-charcoal-800 mb-2">Message (Optional)</label>
                       <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-ivory-50 border border-ivory-200 rounded-xl px-4 py-3.5 text-charcoal-900 font-medium placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none" placeholder="Any additional information..." />
                     </div>
                     <button type="submit" disabled={status === 'loading'} className="w-full btn-primary bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 mt-4 transition-all shadow-md">
                       {status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" /> SUBMITTING...</> : 'SUBMIT PARTNERSHIP'}
                     </button>
                   </form>
                 )}
              </div>
           </div>
        </div>
      )}
    </section>
  );
}
