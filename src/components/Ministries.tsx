import { useState, useEffect } from 'react';
import { Megaphone, Heart, Flame, HeartPulse, BookOpen, Globe, Users, Sparkles, BookText, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';

const SLIDES = [
  '/images/ministries/img1.jpg',
];

const MINISTRIES = [
  { icon: Megaphone, title: 'Gospel & Evangelism',     href: '/ministry/gospel-evangelism',   desc: 'Proclaiming the good news of Jesus Christ and reaching people with the message of salvation.' },
  { icon: Heart,     title: 'Prayer & Intercession',   href: '/ministry/prayer-intercession', desc: 'Standing before God in prayer for individuals, families, churches, communities and nations.' },
  { icon: Flame,     title: 'Revival Meetings',         href: '/ministry/revival-meetings',    desc: 'Gathering believers and seekers together to worship God, hear His Word and seek spiritual renewal.' },
  { icon: HeartPulse,title: 'Healing & Restoration',   href: '/ministry/healing-restoration', desc: 'Ministering God\u2019s Word and praying with people who need healing, restoration, hope and encouragement.' },
  { icon: BookOpen,  title: 'Discipleship & Teaching', href: '/ministry/discipleship-teaching', desc: 'Helping believers grow in faith and develop a deeper relationship with Jesus Christ through God\u2019s Word.' },
  { icon: Globe,     title: 'Missions & Outreach',     href: '/ministry/missions-outreach',   desc: 'Taking the Gospel beyond familiar places and serving communities with the love of Christ.' },
  { icon: Users,     title: 'Family Ministry',         href: '/ministry/family-ministry',     desc: 'Strengthening families and helping them build their lives on biblical principles.' },
  { icon: Sparkles,  title: 'Youth Ministry',          href: '/ministry/youth-ministry',      desc: 'Guiding young people to know Christ, grow in faith, and live out God\u2019s purpose.' },
  { icon: BookText,  title: 'Bible Teaching',          href: '/ministry/bible-teaching',      desc: 'Teaching God\u2019s Word faithfully to equip believers for life and ministry.' },
];

export default function Ministries() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return; // Only cycle if more than 1 image
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ministries" className="bg-ivory-50/85 backdrop-blur-md">

      {/* ── Banner image (Slideshow Design without cropping - Fit Screen) ── */}
      <div className="relative w-full min-h-screen overflow-hidden bg-charcoal-950 flex flex-col justify-center py-20">
        
        {/* Blurred Fullscreen Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {SLIDES.map((slide, index) => (
            <img
              key={slide}
              src={slide}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover blur-3xl scale-125 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />

        <div className="container-max relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Text Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="eyebrow !text-gold-400 mb-4">Our Ministries</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory-50 leading-tight mb-4 text-balance">
                A Ministry Built Around Christ
              </h2>
              <p className="text-ivory-300 text-lg leading-relaxed max-w-lg">
                Every ministry area exists to proclaim Jesus Christ, serve people, and strengthen the Church.
              </p>
            </div>

            {/* Uncropped Image in Glass Frame */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-2 lg:p-4 border border-white/10 bg-charcoal-900/40 backdrop-blur-xl">
                {SLIDES.map((slide, index) => (
                  <img
                    key={slide}
                    src={slide}
                    alt={`Ministry Slide ${index + 1}`}
                    className={`absolute max-w-[95%] max-h-[95%] w-auto h-auto rounded-lg object-contain transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* ── Cards section ── */}
      <div ref={ref} className="container-max section-padding">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINISTRIES.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                onClick={() => navigate(m.href)}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-ivory-50 rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:border-gold-400/40 hover:-translate-y-1 cursor-pointer`}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-700">
                  <Icon className="h-7 w-7 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{m.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
          <button
            onClick={() => navigate('/ministries')}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group"
          >
            Explore All Ministries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
