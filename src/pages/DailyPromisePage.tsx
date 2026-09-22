import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Languages, BookOpen, Quote, ShieldCheck, Heart } from 'lucide-react';

export default function DailyPromisePage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-white relative overflow-hidden min-h-screen">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-50/60 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div ref={ref} className="container-max relative z-10 max-w-4xl mx-auto">
            
            {/* Language Selector (Placeholder) */}
            <div className={`flex items-center justify-center gap-4 mb-12 reveal ${isVisible ? 'is-visible' : ''}`}>
              <Languages className="w-5 h-5 text-brand-600" />
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-brand-700 text-white text-sm font-medium rounded-full shadow-md">English</button>
                <button className="px-4 py-1.5 bg-white text-charcoal-600 text-sm font-medium rounded-full hover:bg-ivory-100 border border-ivory-200 transition-colors">తెలుగు</button>
                <button className="px-4 py-1.5 bg-white text-charcoal-600 text-sm font-medium rounded-full hover:bg-ivory-100 border border-ivory-200 transition-colors">हिंदी</button>
              </div>
            </div>

            <div className="text-center mb-16">
              <p className={`eyebrow mb-4 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>Daily Encouragement</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 uppercase tracking-widest reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                Today's God's Promise
              </h2>
            </div>

            {/* Daily Promise Card */}
            <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-ivory-200 relative overflow-hidden reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
              
              {/* Decorative Quote Mark */}
              <Quote className="absolute -top-6 -left-4 w-32 h-32 text-gold-400/10 rotate-180 pointer-events-none" />

              <div className="relative z-10 space-y-12">
                
                {/* 1. Bible Verse */}
                <div className="text-center border-b border-ivory-200 pb-10">
                  <BookOpen className="w-8 h-8 text-gold-500 mx-auto mb-6" />
                  <h3 className="font-serif text-3xl md:text-5xl font-bold text-charcoal-900 leading-tight mb-6">
                    “The Lord is your keeper.”
                  </h3>
                  <p className="text-brand-700 font-bold uppercase tracking-widest text-lg">
                    Psalm 121:5
                  </p>
                </div>

                {/* 2. Short Encouragement */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-charcoal-700 leading-relaxed text-center">
                    No matter what challenges you face today, remember that the Creator of the universe is actively watching over you. His protection is perfect, His love is unending, and He never sleeps nor slumbers. You are safe in His hands.
                  </p>
                </div>

                {/* 3. Faith Declaration */}
                <div className="bg-ivory-50 p-8 rounded-2xl border-l-4 border-gold-500 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-gold-600" />
                    <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm">Faith Declaration</h4>
                  </div>
                  <p className="font-serif italic text-xl text-charcoal-800 leading-relaxed">
                    “The Lord is watching over me, my family and my household. I will trust Him because He is my keeper.”
                  </p>
                </div>

                {/* 4. Prayer */}
                <div className="bg-brand-50 p-8 rounded-2xl max-w-2xl mx-auto text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Heart className="w-5 h-5 text-brand-700" />
                    <h4 className="font-bold text-brand-900 uppercase tracking-wider text-sm">Today's Prayer</h4>
                  </div>
                  <p className="text-brand-800 leading-relaxed font-medium">
                    Heavenly Father, thank You for being my keeper. I surrender my fears and worries to You today, knowing that You are protecting my family, my health, and my future. In Jesus' Name, Amen.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
