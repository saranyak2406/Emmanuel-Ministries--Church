import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';
import { CORE_VALUES } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-[104px] pb-24 md:pt-[136px] md:pb-32 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
          <p className="eyebrow text-gold-400 mb-4 animate-fade-up">About Our Ministry</p>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Who We Are
          </h1>
          <p 
            className="text-lg md:text-xl text-ivory-200 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            A Christ-centered ministry committed to proclaiming the Gospel and transforming lives.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-12 bg-brand-400" />
      </section>

      <main className="flex-1">
        <AboutUs />
        <Vision />
        <Mission />
        
        {/* Core Values Section */}
        <section className="section-padding bg-ivory-100 border-t border-ivory-200">
           <div className="container-max">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <p className="eyebrow mb-4 text-brand-600">Our Core Values</p>
               <h2 className="text-display font-serif font-bold text-charcoal-900">
                 What We Stand For
               </h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {CORE_VALUES.map((value, idx) => (
                  <div 
                    key={value.slug} 
                    className="bg-white p-8 rounded-2xl shadow-sm border border-ivory-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full animate-fade-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                     <h3 className="text-xl font-serif font-bold text-brand-700 mb-3">{value.title}</h3>
                     <p className="text-charcoal-900 font-bold mb-4">{value.desc}</p>
                     <p className="text-sm text-charcoal-600 leading-relaxed mb-6 flex-1">{value.fullDesc}</p>
                     
                     <div className="pt-4 border-t border-ivory-100 mt-auto">
                        <p className="font-serif italic text-sm text-charcoal-800">
                           {value.scripture}
                        </p>
                     </div>
                  </div>
                ))}
             </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
