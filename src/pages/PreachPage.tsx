import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Mic, ArrowRight, BookOpen, Globe, Users, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PREACH_ASPECTS = [
  { icon: Mic, title: 'Proclaim the Gospel', desc: 'We boldly preach the Gospel of Jesus Christ — His death, burial, and resurrection — calling all people to repentance and faith.' },
  { icon: BookOpen, title: 'Teach God\'s Word', desc: 'We faithfully teach the Word of God, helping people understand the Scriptures and grow in their knowledge of Christ.' },
  { icon: Globe, title: 'Reach the Unreached', desc: 'We carry the Gospel to villages, cities, communities, and nations where people have not yet heard the message of salvation.' },
  { icon: Users, title: 'Equip Believers', desc: 'We equip believers to share their faith and become effective witnesses for Jesus Christ in their families and communities.' },
  { icon: Heart, title: 'Preach with Compassion', desc: 'We preach with love and compassion, demonstrating the heart of Christ for every person we encounter.' },
];

export default function PreachPage() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-royal-950 via-charcoal-900 to-royal-900" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="container-max relative z-10">
            <p className="eyebrow text-gold-400 mb-4">Our Mission</p>
            <h1 className="text-hero font-serif font-bold text-ivory-50 mb-6 text-balance">
              Preach the Gospel<br />
              <span className="text-gold-400">To Every Creature</span>
            </h1>
            <p className="text-xl text-ivory-200 max-w-2xl leading-relaxed">
              At the heart of Emmanuel Gospel Ministries is the call to preach — to proclaim Jesus Christ crucified, risen, and coming again to every person, in every place, through every opportunity God provides.
            </p>
          </div>
        </section>

        {/* Scripture */}
        <section className="py-16 bg-brand-700">
          <div className="container-max text-center">
            <p className="font-serif italic text-xl md:text-2xl text-ivory-50 max-w-3xl mx-auto">
              &ldquo;Go ye into all the world, and preach the gospel to every creature.&rdquo;
            </p>
            <p className="mt-3 text-sm text-gold-300 font-medium">&mdash; Mark 16:15</p>
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className="section-padding bg-ivory-50">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>What Preaching Means to Us</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                Called to Proclaim Christ
              </h2>
              <p className={`mt-6 text-lg text-charcoal-600 leading-relaxed reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                Preaching is not just an activity — it is our divine calling. We preach because Jesus commanded it, because the Gospel is the power of God unto salvation, and because every person deserves to hear the good news of eternal life through Jesus Christ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {PREACH_ASPECTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:border-brand-200 hover:-translate-y-1`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-700">
                      <Icon className="h-7 w-7 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} text-center`}>
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 p-10 md:p-14">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-ivory-50 mb-4">
                    Partner With Us in Preaching the Gospel
                  </h3>
                  <p className="text-ivory-300 mb-8 max-w-xl mx-auto">
                    Together, we can reach more people with the message of Jesus Christ. Your prayers and support make a difference.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={() => navigate('/prayer')} className="btn-gold">
                      Request Prayer
                    </button>
                    <button onClick={() => navigate('/contact')} className="btn-light">
                      Contact Us
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
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
