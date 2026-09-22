import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FOUNDERS = [
  {
    name: "Evangelist Emmanuel Abraham",
    title: "Founder & President",
    image: "/images/slideshow/1001500423.jpg",
    initials: "EA",
    bio1: "Evangelist Emmanuel Abraham serves in Gospel ministry with a passion for proclaiming Jesus Christ, praying for people, encouraging believers and reaching communities with the message of the Gospel.",
    bio2: "Through Gospel meetings, prayer gatherings, evangelistic outreaches and ministry events, the desire is to point people to Jesus Christ and encourage them to walk according to God's Word.",
    quote: "For we preach not ourselves, but Christ Jesus the Lord...",
    verse: "— 2 Corinthians 4:5"
  },
  {
    name: "Mrs. Emmanuel Abraham",
    title: "Co-Founder",
    image: "/images/slideshow/790b93a3-9c0a-42a8-8d3f-aaa67b87e1ce.png",
    initials: "EA",
    bio1: "She faithfully serves alongside her husband in ministry, deeply committed to prayer, counseling, and encouraging the body of Christ.",
    bio2: "Her heart for families, women's ministry, and the unreached communities continues to be a pillar of strength for Emmanuel Gospel Ministries.",
    quote: "Let all that you do be done in love.",
    verse: "— 1 Corinthians 16:14"
  }
];

export default function FounderProfilePage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-50/60 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-50/40 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div ref={ref} className="container-max relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Founder & Leadership</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                Our Founders
              </h2>
            </div>

            <div className="flex flex-col gap-24 mt-12">
              {FOUNDERS.map((profile, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto reveal ${isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  {/* Photo Area */}
                  <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-brand-700 to-charcoal-900 flex items-center justify-center shadow-2xl relative overflow-hidden border-4 border-white">
                      <img 
                        src={profile.image} 
                        alt={profile.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${profile.name.replace(/ /g, '+')}&background=0D1B2A&color=D4AF37&size=512`;
                        }}
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal-900 mt-6 text-center">
                      {profile.name}
                    </h3>
                    <p className="text-brand-600 font-semibold tracking-widest uppercase text-sm mt-2">{profile.title}</p>
                  </div>

                  {/* Text Area */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                      <p>{profile.bio1}</p>
                      <p>{profile.bio2}</p>
                    </div>
                    
                    <div className="mt-10 relative">
                      <Quote className="absolute -top-4 -left-4 w-10 h-10 text-gold-400/20 rotate-180" />
                      <blockquote className="relative z-10 p-8 bg-ivory-100 rounded-xl rounded-tl-none border-l-4 border-gold-400 text-charcoal-700">
                        <p className="italic font-serif text-xl md:text-2xl leading-relaxed">
                          "{profile.quote}"
                        </p>
                        <p className="mt-4 font-bold tracking-widest uppercase text-brand-700 text-sm">
                          {profile.verse}
                        </p>
                      </blockquote>
                    </div>
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
