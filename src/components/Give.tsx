import { useState } from 'react';
import { Building2, Smartphone, Globe, Shield, X, CreditCard, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Hand donating money to charity - Indian rupee into cross-shaped offering box
const GIVE_IMG = '/give-donate.png';

const METHODS = [
  {
    icon: Building2,
    title: 'BANK DETAILS (FOR INDIA)',
    desc: 'Transfer your support directly to the ministry bank account.',
    details: [
      { label: 'Account Name',   value: 'Emmanuel Gospel Ministries' },
      { label: 'Account Number', value: '01234567890' },
      { label: 'Bank Name',      value: 'State Bank of India' },
      { label: 'IFSC Code',      value: 'SBIN0001234' },
      { label: 'Branch',         value: 'Sarpavaram, Kakinada' },
    ],
  },
  {
    icon: Smartphone,
    title: 'UPI PAYMENTS (FOR INDIA)',
    desc: 'Give quickly and securely via UPI on any payment app.',
    details: [
      { label: 'Google Pay / PhonePe', value: '9876543210' },
      { label: 'UPI ID',               value: 'emmanuelgospel@upi' },
    ],
  },
  {
    icon: Globe,
    title: 'ONLINE GIVING (INTERNATIONAL)',
    desc: 'You can support our ministry through our secure online giving portal.',
    details: [
      { label: 'Contact', value: 'contact@emmanuelgospelministries.org' },
    ],
  },
];

export default function Give() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<(typeof METHODS)[0] | null>(null);

  const openModal = (method?: (typeof METHODS)[0]) => {
    setSelectedMethod(method ?? null);
    setModalOpen(true);
  };

  return (
    <section id="give" className="section-padding bg-ivory-50 relative overflow-hidden">
      <div ref={ref} className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={GIVE_IMG}
                alt="Offering and worship"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif italic text-lg text-ivory-50">
                  &ldquo;God loveth a cheerful giver.&rdquo;
                </p>
                <p className="text-sm text-gold-300 mt-1">&mdash; 2 Corinthians 9:7</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className="eyebrow mb-4">GIVE</p>
            <h2 className="text-display font-serif font-bold text-charcoal-900 mb-5">
              Support the Ministry
            </h2>
            <p className="text-xl text-brand-700 mb-4 font-bold">
              Your giving helps us advance the Gospel and reach the unreached.
            </p>
            <p className="text-base text-charcoal-600 mb-6 leading-relaxed">
              Your tithes, offerings and donations enable us to organize Gospel meetings, support missionaries, help the needy and spread the Word of God.
            </p>
            <div className="bg-brand-50 border-l-4 border-brand-700 p-6 rounded-r-lg mb-8">
              <p className="font-serif italic text-lg text-charcoal-800 mb-2">
                “Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.”
              </p>
              <p className="text-sm font-bold tracking-widest uppercase text-brand-700">
                — 2 Corinthians 9:7
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className="btn-primary"
            >
              <CreditCard className="h-4 w-4" />
              GIVE ONLINE NOW
            </button>
          </div>
        </div>

        {/* Trust & Transparency */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
            <h4 className="font-serif font-bold text-brand-900 mb-2">100% Transparency</h4>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Every donation is used faithfully to advance God&rsquo;s Kingdom. We maintain complete accountability and transparency in all financial matters.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
            <h4 className="font-serif font-bold text-brand-900 mb-2">Secure & Safe</h4>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              All payment methods are official and secure. Your personal information is protected and never shared with unauthorized parties.
            </p>
          </div>
        </div>

        {/* Security notice */}
        <div className={`flex items-start gap-3 p-6 rounded-xl bg-brand-50 border-2 border-brand-200 reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
          <Shield className="h-5 w-5 text-brand-700 mt-0.5 shrink-0" />
          <p className="text-sm text-charcoal-800 leading-relaxed">
            <strong className="text-brand-900">Important:</strong> Only official ministry payment details shown above should be used. Do not transfer funds to any unofficial or personal accounts. For any queries, contact <span className="font-semibold text-brand-700">contact@emmanuelgospelministries.org</span>.
          </p>
        </div>
      </div>

      {/* Payment Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-800 to-brand-900 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-1">
                    Emmanuel Gospel Ministries
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-ivory-50">
                    {selectedMethod ? selectedMethod.title : 'Payment Options'}
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-ivory-50/10 flex items-center justify-center text-ivory-50 hover:bg-ivory-50/20 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="px-8 py-6">
              {selectedMethod ? (
                /* Specific method details */
                <>
                  <p className="text-sm text-charcoal-500 mb-6 leading-relaxed">
                    {selectedMethod.desc}
                  </p>
                  <div className="space-y-3 mb-6">
                    {selectedMethod.details.map((d) => (
                      <div
                        key={d.label}
                        className="flex items-start justify-between gap-4 p-4 rounded-xl bg-ivory-50 border border-ivory-200"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500 shrink-0">
                          {d.label}
                        </span>
                        <span className="text-sm font-medium text-charcoal-900 text-right">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full text-sm text-charcoal-500 hover:text-brand-700 transition-colors text-center mt-2"
                    onClick={() => setSelectedMethod(null)}
                  >
                    &larr; View all payment options
                  </button>
                </>
              ) : (
                /* All methods list */
                <>
                  <p className="text-sm text-charcoal-500 mb-6">
                    Choose a payment method below to see the details.
                  </p>
                  <div className="space-y-3">
                    {METHODS.map((m) => {
                      const Icon = m.icon;
                      return (
                        <button
                          key={m.title}
                          onClick={() => setSelectedMethod(m)}
                          className="w-full flex items-center gap-4 p-4 rounded-xl border border-ivory-200 hover:border-brand-200 hover:bg-brand-50 transition-all duration-200 text-left group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-700 transition-colors duration-200">
                            <Icon className="h-5 w-5 text-brand-700 group-hover:text-ivory-50 transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-charcoal-900 text-sm">{m.title}</p>
                            <p className="text-xs text-charcoal-500">{m.desc}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-charcoal-400 group-hover:text-brand-700 transition-colors" />
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="mt-6 flex items-start gap-2 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <Shield className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  Only transfer to official ministry accounts listed above. Contact us at{' '}
                  <strong>contact@emmanuelgospelministries.org</strong> for any queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
