import { useState } from 'react';
import { Building2, Shield, QrCode, CreditCard, X, ArrowLeft } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const GIVE_IMG = '/give-donate.png';

export default function Give() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<'options' | 'qr' | 'bank'>('options');

  const openModal = () => {
    setActiveView('options');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveView('options'), 300); // reset after fade out
  };

  return (
    <section id="give" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-ivory-50 relative overflow-hidden">
      <div ref={ref} className="container-max">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
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

            <div className="mb-8">
              <h3 className="font-bold text-charcoal-900 mb-3">Categories for Support:</h3>
              <ul className="space-y-2">
                {[
                  'Gospel & Evangelism',
                  'Church Construction & Needs',
                  'Helping the Poor, Widows & Orphans',
                  'General Ministry Fund'
                ].map((category, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-charcoal-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-brand-50 border-l-4 border-brand-700 p-6 rounded-r-lg mb-8">
              <p className="font-serif italic text-lg text-charcoal-800 mb-2">
                “Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.”
              </p>
              <p className="text-sm font-bold tracking-widest uppercase text-brand-700">
                — 2 Corinthians 9:7
              </p>
            </div>
            <button
              onClick={openModal}
              className="btn-primary"
            >
              <CreditCard className="h-4 w-4" />
              GIVE ONLINE NOW
            </button>
          </div>
        </div>

        {/* Trust & Transparency */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
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
            <strong className="text-brand-900">Important:</strong> Only official ministry payment details shown above should be used. Do not transfer funds to any unofficial or personal accounts. For any queries, contact <span className="font-semibold text-brand-700">support@emmanuelgospelministries.com</span>.
          </p>
        </div>
      </div>

      {/* Payment Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal-900/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Panel */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-800 to-brand-900 px-6 py-5 shrink-0 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {activeView !== 'options' && (
                  <button 
                    onClick={() => setActiveView('options')}
                    className="p-2 -ml-2 rounded-full text-white/80 hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <div>
                  <h3 className="text-xl font-serif font-bold text-ivory-50">
                    {activeView === 'options' && 'Select Payment Method'}
                    {activeView === 'qr' && 'Scan & Pay (UPI)'}
                    {activeView === 'bank' && 'Direct Bank Transfer'}
                  </h3>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-ivory-50/10 flex items-center justify-center text-ivory-50 hover:bg-ivory-50/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              
              {/* STEP 1: Select Option */}
              {activeView === 'options' && (
                <div className="flex flex-col gap-4 animate-fade-in">
                  <p className="text-charcoal-600 mb-4 text-center">
                    Choose how you would like to give your offering.
                  </p>
                  
                  <button 
                    onClick={() => setActiveView('qr')}
                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-ivory-200 hover:border-brand-500 hover:bg-brand-50 hover:shadow-md transition-all group text-left"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors">
                      <QrCode className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-charcoal-900 mb-1">Pay by QR Code (UPI)</h4>
                      <p className="text-sm text-charcoal-500">Google Pay, PhonePe, Paytm, etc.</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setActiveView('bank')}
                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-ivory-200 hover:border-gold-500 hover:bg-gold-50 hover:shadow-md transition-all group text-left"
                  >
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                      <Building2 className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-charcoal-900 mb-1">Direct Bank Transfer</h4>
                      <p className="text-sm text-charcoal-500">NEFT, RTGS, IMPS, or International</p>
                    </div>
                  </button>
                </div>
              )}

              {/* STEP 2A: QR Code */}
              {activeView === 'qr' && (
                <div className="flex flex-col items-center animate-fade-in">
                  <p className="text-charcoal-600 mb-8 text-center max-w-sm leading-relaxed">
                    Open any UPI app on your phone and scan the QR code below to directly support the ministry.
                  </p>
                  
                  <div className="w-64 h-64 bg-white p-4 rounded-2xl shadow-inner border-2 border-ivory-200 flex items-center justify-center mb-6">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=emmanuelgospel@upi&color=0D1B2A" 
                      alt="Ministry QR Code" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  <p className="font-bold text-charcoal-900 text-lg">UPI ID: emmanuelgospel@upi</p>
                </div>
              )}

              {/* STEP 2B: Bank Details */}
              {activeView === 'bank' && (
                <div className="animate-fade-in flex flex-col">
                  <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-ivory-100 pb-3 gap-1">
                        <span className="text-charcoal-500 font-medium text-xs tracking-wider uppercase">Account Name</span>
                        <span className="font-bold text-charcoal-900 text-base">Emmanuel Gospel Ministries</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-ivory-100 pb-3 gap-1">
                        <span className="text-charcoal-500 font-medium text-xs tracking-wider uppercase">Account Number</span>
                        <span className="font-bold text-brand-700 tracking-widest text-lg">01234567890</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-ivory-100 pb-3 gap-1">
                        <span className="text-charcoal-500 font-medium text-xs tracking-wider uppercase">Bank Name</span>
                        <span className="font-bold text-charcoal-900 text-base">State Bank of India</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between border-b border-ivory-100 pb-3 gap-1">
                        <span className="text-charcoal-500 font-medium text-xs tracking-wider uppercase">IFSC Code</span>
                        <span className="font-bold text-charcoal-900 tracking-widest text-base">SBIN0001234</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between pb-1 gap-1">
                        <span className="text-charcoal-500 font-medium text-xs tracking-wider uppercase">Branch</span>
                        <span className="font-bold text-charcoal-900 text-base">Sarpavaram, Kakinada</span>
                      </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
