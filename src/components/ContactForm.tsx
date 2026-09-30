import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { submitContact } from '@/api/emailApi';

export default function ContactForm() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContact({ ...form, phone: 'Not provided', subject: 'Contact Form Submission' });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error(error);
      setStatus('idle');
      alert(error?.message || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div ref={ref} className="container-max px-4">
        
        <div className={`text-center max-w-3xl mx-auto mb-16 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">Contact Us</h2>
          <p className="text-lg text-charcoal-600">We would love to hear from you. Send us a message and our team will get back to you shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className={`lg:col-span-1 space-y-8 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal-900 mb-1">Our Location</h4>
                <p className="text-charcoal-600">Hyderabad, Telangana, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <h4 className="font-bold text-charcoal-900 mb-1">Phone</h4>
                <p className="text-charcoal-600">+91 97005 77712</p>
              </div>
            </div>

            <div className="flex items-start gap-4 min-w-0">
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand-700" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-charcoal-900 mb-1">Email</h4>
                <a href="mailto:support@emmanuelgospelministries.com" className="text-charcoal-600 hover:text-brand-700 text-xs sm:text-sm md:text-base break-all block">
                  support@emmanuelgospelministries.com
                </a>
              </div>
            </div>
          </div>

          {/* Form / Success Card */}
          <div className={`lg:col-span-2 bg-ivory-50 p-8 md:p-10 rounded-3xl border border-ivory-200 shadow-sm reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            {status === 'success' ? (
              <div className="py-12 md:py-16 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-brand-50 border border-brand-100 text-brand-700 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900">
                    Thank You For Reaching Out!
                  </h3>
                  <p className="text-charcoal-600 max-w-md mx-auto leading-relaxed text-base">
                    Your message has been sent successfully. Our team has received your inquiry and will get back to you shortly.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="bg-charcoal-900 hover:bg-brand-700 text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-md inline-flex items-center gap-2"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-charcoal-800 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-white border border-ivory-200 rounded-xl px-5 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal-800 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full bg-white border border-ivory-200 rounded-xl px-5 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full bg-white border border-ivory-200 rounded-xl px-5 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-charcoal-900 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
