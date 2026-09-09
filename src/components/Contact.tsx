import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Loader2, CheckCircle, Youtube, Facebook, Instagram, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MINISTRY, SOCIAL_LINKS } from '@/lib/constants';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const INITIAL: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

// Telegram SVG icon
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function getSocialIcon(label: string) {
  if (label.toLowerCase().includes('youtube')) return Youtube;
  if (label.toLowerCase().includes('facebook')) return Facebook;
  if (label.toLowerCase().includes('instagram')) return Instagram;
  if (label.toLowerCase().includes('whatsapp')) return MessageCircle;
  return Send;
}

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

    // Simulate a brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('success');
    setForm(INITIAL);
    setTimeout(() => setStatus('idle'), 5000);
  };

  const CONTACT_INFO = [
    {
      icon: MapPin,
      label: 'Address',
      value: MINISTRY.fullAddress,
      href: null,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: MINISTRY.phone.includes('/') ? MINISTRY.phone.split('/').join(' | ') : MINISTRY.phone,
      href: `tel:${MINISTRY.phone.split('/')[0].replace(/\s+/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: MINISTRY.email,
      href: `mailto:${MINISTRY.email}`,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: MINISTRY.workingHours || 'Monday – Saturday, 9:00 AM to 5:00 PM (IST)',
      href: null,
    },
  ];

  return (
    <section id="contact" className="pt-8 pb-20 bg-ivory-50">
      <div ref={ref} className="container-max">
        
        {/* Main White Card Container */}
        <div className={`bg-white rounded-[2.5rem] shadow-2xl border border-ivory-200 overflow-hidden reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Illustration & Info */}
            <div className="p-10 md:p-16 flex flex-col justify-center items-center bg-brand-50 border-r border-ivory-200">
              {/* Custom Illustration matching the theme */}
              <div className="w-full max-w-md mb-12 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/images/contact-illustration.png" 
                  alt="Contact Illustration" 
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>

              {/* Contact Details beneath illustration */}
              <div className="w-full max-w-md space-y-6">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-ivory-200">
                      <Icon className="h-5 w-5 text-brand-700" />
                    </div>
                    <div>
                      {label === 'Phone' ? (
                        <div className="flex items-center gap-2 text-base font-medium text-charcoal-900">
                          <a href={`tel:${MINISTRY.phone.split('/')[0].replace(/\s+/g, '')}`} className="hover:text-brand-700 transition-colors">
                            {MINISTRY.phone.split('/')[0].trim()}
                          </a>
                          {MINISTRY.phone.includes('/') && (
                            <>
                              <span className="text-charcoal-300">|</span>
                              <a href={`tel:${MINISTRY.phone.split('/')[1].replace(/\s+/g, '')}`} className="hover:text-brand-700 transition-colors">
                                {MINISTRY.phone.split('/')[1].trim()}
                              </a>
                            </>
                          )}
                        </div>
                      ) : href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-base font-medium text-charcoal-900 hover:text-brand-700 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-charcoal-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-6 border-t border-ivory-200">
                  {SOCIAL_LINKS.map((social) => {
                    const isTelegram = social.icon === 'telegram';
                    const Icon = isTelegram ? null : getSocialIcon(social.label);
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-ivory-200 shadow-sm text-brand-700 transition-all duration-300 hover:bg-brand-700 hover:text-white hover:-translate-y-1"
                      >
                        {isTelegram ? (
                          <TelegramIcon className="h-4 w-4" />
                        ) : Icon ? (
                          <Icon className="h-4 w-4" />
                        ) : null}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Text & Form */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              
              <div className="mb-10">
                <p className="text-xl md:text-2xl text-charcoal-600 font-medium tracking-wider uppercase mb-2">
                  CONTACT US
                </p>
                <h2 className="text-5xl md:text-6xl font-black text-charcoal-900 tracking-tight mb-4">
                  Get in Touch
                </h2>
                <p className="text-charcoal-700 leading-relaxed max-w-md font-bold text-lg mb-2">
                  We would love to hear from you. Send us a message today.
                </p>
                <p className="text-charcoal-600 leading-relaxed max-w-md">
                  Whether you have a question about our ministry, want to invite Evangelist Emmanuel Abraham for a meeting, or simply want to say hello, we are here to connect with you.
                </p>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 bg-brand-50 rounded-3xl border border-ivory-200">
                  <CheckCircle className="h-20 w-20 text-brand-700 mb-6" />
                  <h3 className="text-3xl font-black text-charcoal-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-600 max-w-sm text-lg">
                    Thank you for reaching out. We have received your message and will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
                    <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2 pl-1">
                      Message <span className="text-brand-700">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-2xl border-none bg-ivory-50 px-5 py-4 text-[15px] text-charcoal-900 placeholder:text-charcoal-400 focus:ring-2 focus:ring-brand-700/30 focus:bg-white transition-all resize-none shadow-inner"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 bg-red-50 rounded-xl px-5 py-4 font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full sm:w-auto min-w-[200px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'SEND MESSAGE'
                      )}
                    </button>
                  </div>
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
      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-600 mb-2 pl-1">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={`Enter your ${label.toLowerCase()}`}
        className="w-full rounded-2xl border-none bg-ivory-50 px-5 py-4 text-[15px] text-charcoal-900 placeholder:text-charcoal-400 focus:ring-2 focus:ring-brand-700/30 focus:bg-white transition-all shadow-inner"
      />
    </div>
  );
}
