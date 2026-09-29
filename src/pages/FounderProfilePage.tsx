import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quote, PlayCircle, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

const FOUNDER_IMAGES = [
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.49 AM (1).jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.49 AM.jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.50 AM (1).jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.50 AM (2).jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.50 AM.jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.51 AM (1).jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.51 AM.jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.52 AM.jpeg',
  '/images/founder-gallery/WhatsApp Image 2026-09-29 at 11.52.54 AM.jpeg',
];

const FOUNDER_VIDEOS = [
  { id: '6nJ3akANROc', title: 'Emmanuel Gospel Ministries Video' },
  { id: '0e7ftWjVL4Y', title: 'Gospel Meeting' },
  { id: 'tVpTGkB7KV8', title: 'Worship Session' }
];

const FOUNDERS = [
  {
    name: "Evangelist Emmanuel Abraham",
    title: "Founder & President",
    image: "/images/8f3270bb-c6c3-4547-83c6-a512b0ad2c17.png",
    initials: "EA",
    bio1: "Evangelist Emmanuel Abraham serves in Gospel ministry with a passion for proclaiming Jesus Christ, praying for people, encouraging believers and reaching communities with the message of the Gospel.",
    bio2: "Through Gospel meetings, prayer gatherings, evangelistic outreaches and ministry events, the desire is to point people to Jesus Christ and encourage them to walk according to God's Word.",
    quote: "For we preach not ourselves, but Christ Jesus the Lord...",
    verse: "— 2 Corinthians 4:5"
  },
  {
    name: "Joy Sarala Abraham",
    title: "Co-Founder",
    image: "/images/3cd6a63a-2d32-412d-bb8d-12c7288ea7e3.png",
    initials: "JA",
    bio1: "She faithfully serves alongside her husband in ministry, deeply committed to prayer, counseling, and encouraging the body of Christ.",
    bio2: "Her heart for families, women's ministry, and the unreached communities continues to be a pillar of strength for Emmanuel Gospel Ministries.",
    quote: "Let all that you do be done in love.",
    verse: "— 1 Corinthians 16:14"
  }
];

export default function FounderProfilePage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < FOUNDER_IMAGES.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

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

        {/* Founder Gallery Section */}
        <section className="section-padding bg-ivory-50 border-t border-ivory-200">
          <div className="container-max max-w-[1400px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-display font-serif font-bold text-charcoal-900 mb-4">
                Founder's Gallery
              </h2>
              <p className="text-charcoal-600 text-lg">
                Glimpses of ministry, outreach, and preaching.
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="flex bg-ivory-100 p-2 rounded-2xl shadow-inner border border-ivory-200">
                <button 
                  onClick={() => setActiveTab('photos')}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 font-bold tracking-wide ${
                    activeTab === 'photos' 
                      ? 'bg-white text-brand-700 shadow-md' 
                      : 'text-charcoal-500 hover:text-charcoal-800 hover:bg-white/50'
                  }`}
                >
                  <ImageIcon className={`w-5 h-5 ${activeTab === 'photos' ? 'text-brand-600' : 'text-charcoal-400'}`} />
                  <span>Photo Gallery</span>
                </button>
                <button 
                  onClick={() => setActiveTab('videos')}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 font-bold tracking-wide ${
                    activeTab === 'videos' 
                      ? 'bg-white text-red-600 shadow-md' 
                      : 'text-charcoal-500 hover:text-charcoal-800 hover:bg-white/50'
                  }`}
                >
                  <PlayCircle className={`w-5 h-5 ${activeTab === 'videos' ? 'text-red-500' : 'text-charcoal-400'}`} />
                  <span>Video Gallery</span>
                </button>
              </div>
            </div>

            {/* 📸 TAB CONTENT: PHOTO GALLERY */}
            {activeTab === 'photos' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {FOUNDER_IMAGES.map((image, index) => (
                    <div 
                      key={`grid-${index}`} 
                      className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 aspect-square"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt="Gallery Photo"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-charcoal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 🎥 TAB CONTENT: VIDEO GALLERY */}
            {activeTab === 'videos' && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FOUNDER_VIDEOS.map((video, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="relative pt-[56.25%] bg-charcoal-900 w-full">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-charcoal-900 line-clamp-2">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950/95 backdrop-blur-sm">
          {/* Top Bar */}
          <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10">
            <span className="text-white/70 text-sm font-medium">
              {selectedImageIndex + 1} / {FOUNDER_IMAGES.length}
            </span>
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className={`absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 ${selectedImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            disabled={selectedImageIndex === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={handleNext}
            className={`absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 ${selectedImageIndex === FOUNDER_IMAGES.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            disabled={selectedImageIndex === FOUNDER_IMAGES.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center p-4 md:p-12">
            <img 
              src={FOUNDER_IMAGES[selectedImageIndex]}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain animate-fade-in"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
