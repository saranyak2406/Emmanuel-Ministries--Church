import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function FoundersCards() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const founders = [
    {
      name: "Evangelist Emmanuel Abraham",
      title: "Founder & President",
      image: "/images/slideshow/1001500423.jpg", // The user's uploaded image path
      slug: "emmanuel-abraham"
    },
    {
      name: "Mrs. Emmanuel Abraham",
      title: "Co-Founder",
      image: "/images/slideshow/790b93a3-9c0a-42a8-8d3f-aaa67b87e1ce.png", // The user's uploaded image path
      slug: "co-founder"
    }
  ];

  return (
    <section className="py-20 bg-ivory-50">
      <div ref={ref} className="container-max px-4">
        
        <div className="text-center mb-12">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Our Leadership</p>
          <h2 className={`font-serif text-3xl md:text-4xl font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Meet the Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Link 
              key={founder.slug}
              to="/founder"
              className={`block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
              <div className="h-80 bg-charcoal-100 relative overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to placeholder if image not uploaded yet
                    target.src = `https://ui-avatars.com/api/?name=${founder.name.replace(/ /g, '+')}&background=0D1B2A&color=D4AF37&size=512`;
                  }}
                />
              </div>
              <div className="p-8 text-center flex flex-col items-center bg-white">
                <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">{founder.name}</h3>
                <p className="text-brand-600 font-semibold tracking-widest uppercase text-sm mb-6">{founder.title}</p>
                <span className="inline-flex items-center gap-2 text-brand-700 font-medium hover:text-gold-500 transition-colors">
                  View Profile <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
