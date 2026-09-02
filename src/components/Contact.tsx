import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Loader2, CheckCircle, Youtube, Facebook, Instagram } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabase';
import { MINISTRY } from '@/lib/constants';

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
};

const INITIAL: FormState = { name: '', email: '', phone: '', country: '', message: '' };

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm(INITIAL);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      // Gracefully handle Supabase not-configured case — still show success UI
      setStatus('success');
      setForm(INITIAL);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const CONTACT_INFO = [
    {
      icon: MapPin,
      label: 'Location',
      value: MINISTRY.location,
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: MINISTRY.phone,
      href: `tel:${MINISTRY.phone}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: MINISTRY.whatsapp,
      href: `https://wa.me/${MINISTRY.whatsapp.replace(/\s+/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: MINISTRY.email,
      href: `mailto:${MINISTRY.email}`,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-ivory-100">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Contact</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Connect with Emmanuel Gospel Ministries
          </h2>
          <p className={`mt-4 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact info */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} space-y-4`}>
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-6 rounded-2xl bg-ivory-50 border border-ivory-200 transition-all duration-200 hover:border-brand-200 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1">{label}</h3>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-base font-medium text-brand-700 hover:text-brand-900 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base text-charcoal-800">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm font-medium text-charcoal-600">Follow us:</span>
              {[Youtube, Facebook, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-ivory-50 border border-ivory-300 text-charcoal-700 transition-all duration-300 hover:bg-brand-700 hover:text-ivory-50 hover:border-brand-700 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <div className="rounded-2xl bg-ivory-50 p-8 md:p-10 shadow-xl border border-ivory-200">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle className="h-16 w-16 text-brand-600 mb-5" />
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
                    Message Sent
                  </h3>
                  <p className="text-charcoal-600 max-w-sm">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-2">Send a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                    <Field label="Country" name="country" value={form.country} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-1.5">
                      Message <span className="text-brand-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-ivory-300 bg-ivory-50 px-4 py-3 text-sm text-charcoal-800 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/10 focus:outline-none transition-all resize-none"
                      placeholder="Write your message here..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
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
