import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';

const OUTREACH_GROUPS = [
  "Poor families",
  "Widows",
  "Orphans",
  "Elderly people",
  "People affected by poverty",
  "Children who need educational support",
  "People requiring practical assistance"
];

export default function OutreachPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-white relative overflow-hidden">
          <div ref={ref} className="container-max relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Outreach & Charity</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                Serving People in the Love of Christ
              </h2>
              <p className={`mt-6 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                The Gospel calls us not only to proclaim God's Word but also to demonstrate Christ's love through compassionate service.
              </p>
              
              <div className={`mt-10 mb-12 p-8 bg-brand-50 border-l-4 border-brand-700 rounded-r-2xl reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
                <p className="font-serif italic text-xl text-charcoal-800 leading-relaxed">
                  "Let us not love in word or in tongue, but in deed and in truth."
                </p>
                <p className="text-brand-700 font-bold uppercase tracking-widest text-sm mt-4">
                  — 1 John 3:18
                </p>
              </div>
            </div>

            <div className={`bg-ivory-100 rounded-3xl p-8 md:p-12 shadow-sm border border-ivory-200 max-w-4xl mx-auto reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal-900">
                  Emmanuel Gospel Ministries seeks opportunities to help:
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 md:pl-16">
                {OUTREACH_GROUPS.map((group, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-charcoal-700 font-medium">{group}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
