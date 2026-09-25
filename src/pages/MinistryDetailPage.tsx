import { useState, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Music, Video, Image as ImageIcon, X, PlayCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MINISTRY_DETAILS } from '@/lib/ministryDetails';
import ministryPhotos from '@/lib/ministryPhotos.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Reusing the ministries banner as fallback
const FALLBACK_HERO_IMG = '/ministries-banner.jpg';

const VIDEO_GALLERY = [
  { id: '6nJ3akANROc', title: 'Emmanuel Gospel Ministries Video' },
  { id: '0e7ftWjVL4Y', title: 'Gospel Meeting' },
  { id: 'tVpTGkB7KV8', title: 'Worship Session' }
];

export default function MinistryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<'photos' | 'videos'>('photos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  if (!slug || !MINISTRY_DETAILS[slug]) {
    // If the slug is invalid, redirect to ministries page
    return <Navigate to="/ministries" replace />;
  }

  const detail = MINISTRY_DETAILS[slug];

  // Try to find an image from this ministry's folders to use as the hero banner
  let heroImage = FALLBACK_HERO_IMG;
  // @ts-ignore
  const ministryData = ministryPhotos[detail.title];
  if (ministryData) {
    const firstAspect = Object.keys(ministryData)[0];
    if (firstAspect && ministryData[firstAspect] && ministryData[firstAspect].length > 0) {
      heroImage = `/images/ministries-aspects/${detail.title}/${firstAspect}/${ministryData[firstAspect][0]}`;
    }
  }

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div ref={ref} className="container-max">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-16">
                <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-4 reveal reveal-delay-1 text-brand-700 ${isVisible ? 'is-visible' : ''}`}>
                  Our Ministries
                </p>
                <h1 className={`text-display md:text-[4rem] font-serif font-bold text-charcoal-900 mb-6 text-balance reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.title}
                </h1>
                <p className={`text-lg text-charcoal-600 leading-relaxed max-w-3xl mx-auto reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
                  {detail.heroDesc}
                </p>
              </div>

              {detail.scripture && (
                <div className={`reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''} bg-brand-50/50 border-l-4 border-brand-700 p-8 md:p-12 rounded-xl max-w-4xl mx-auto text-center mb-24 shadow-sm`}>
                  <p className="font-serif italic text-xl md:text-2xl text-charcoal-700">"{detail.scripture.split('—')[0].trim()}"</p>
                  {detail.scripture.split('—')[1] && (
                    <p className="mt-6 text-sm font-bold text-brand-700 uppercase tracking-[0.15em]">— {detail.scripture.split('—')[1].trim()}</p>
                  )}
                </div>
              )}

              {/* Aspects Tabs */}
              <div className="mb-32">
                {/* Aspects Grid as Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {detail.aspects.map((aspect, i) => {
                    const Icon = aspect.icon;
                    const isActive = activeTab === i;
                    return (
                      <div 
                        key={aspect.title}
                        onClick={() => handleTabClick(i)}
                        className={`cursor-pointer reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} bg-white p-8 rounded-2xl border transition-all duration-300 ${
                          isActive 
                            ? 'shadow-lg border-brand-500 ring-2 ring-brand-500/20' 
                            : 'shadow-sm border-charcoal-100 hover:shadow-md'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                          isActive ? 'bg-brand-600' : 'bg-brand-50'
                        }`}>
                          <Icon className={`h-6 w-6 transition-colors ${
                            isActive ? 'text-white' : 'text-brand-700'
                          }`} />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-3">
                          {aspect.title}
                        </h3>
                        <p className="text-charcoal-600 leading-relaxed text-sm">
                          {aspect.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Tab Content */}
                {activeTab !== null && (
                  <div ref={contentRef} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-ivory-200 animate-fade-in min-h-[300px]">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 mb-4">
                        {detail.aspects[activeTab].title}
                      </h3>
                      <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                        {detail.aspects[activeTab].desc}
                      </p>

                      {/* Interactive Tabs for Photos / Videos */}
                      <div className="flex bg-ivory-50 p-1.5 md:p-2 rounded-2xl shadow-inner border border-ivory-100 max-w-md mx-auto">
                        <button 
                          onClick={() => setActiveMediaTab('photos')}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-xl transition-all duration-300 font-bold tracking-wide text-sm md:text-base ${
                            activeMediaTab === 'photos' 
                              ? 'bg-white text-brand-700 shadow-md' 
                              : 'text-charcoal-500 hover:text-charcoal-800 hover:bg-white/50'
                          }`}
                        >
                          <ImageIcon className={`w-4 h-4 md:w-5 md:h-5 ${activeMediaTab === 'photos' ? 'text-brand-600' : 'text-charcoal-400'}`} />
                          <span>Photo Gallery</span>
                        </button>
                        <button 
                          onClick={() => setActiveMediaTab('videos')}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-xl transition-all duration-300 font-bold tracking-wide text-sm md:text-base ${
                            activeMediaTab === 'videos' 
                              ? 'bg-white text-red-600 shadow-md' 
                              : 'text-charcoal-500 hover:text-charcoal-800 hover:bg-white/50'
                          }`}
                        >
                          <PlayCircle className={`w-4 h-4 md:w-5 md:h-5 ${activeMediaTab === 'videos' ? 'text-red-500' : 'text-charcoal-400'}`} />
                          <span>Video Gallery</span>
                        </button>
                      </div>
                    </div>

                    {/* Photos for the active tab */}
                    {activeMediaTab === 'photos' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-fade-in">
                        {(() => {
                          const activeAspect = detail.aspects[activeTab];
                          // @ts-ignore
                          const photos = (ministryPhotos[detail.title] && ministryPhotos[detail.title][activeAspect.title]) || [];
                          
                          if (photos.length === 0) {
                            return (
                              <div className="col-span-full text-center text-charcoal-400 py-8 italic border-2 border-dashed border-ivory-200 rounded-2xl">
                                Images coming soon
                              </div>
                            );
                          }

                          return photos.slice(0, 6).map((photoFileName: string, idx: number) => {
                            const imgUrl = `/images/ministries-aspects/${detail.title}/${activeAspect.title}/${photoFileName}`;
                            return (
                              <div 
                                key={idx} 
                                onClick={() => setSelectedImage(imgUrl)}
                                className={`relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer flex items-center justify-center bg-gray-50 ${idx > 0 ? (idx > 1 ? 'hidden lg:block' : 'hidden sm:block') : ''}`}
                              >
                                <img 
                                  src={imgUrl} 
                                  alt={`${activeAspect.title} activity`} 
                                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" 
                                />
                                {/* Hover overlay with zoom icon */}
                                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-300 flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                                    <ImageIcon className="w-5 h-5 text-charcoal-900" />
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    )}

                    {/* Videos for the active tab */}
                    {activeMediaTab === 'videos' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 animate-fade-in bg-ivory-50 p-6 md:p-8 rounded-[2rem] border border-ivory-200">
                        {VIDEO_GALLERY.map((video, index) => (
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
                            <div className="p-4">
                              <h3 className="font-bold text-sm text-charcoal-900 line-clamp-2">
                                {video.title}
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>


              {/* Call to Action */}
              <div className={`reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''} bg-gradient-to-br from-brand-900 to-charcoal-900 rounded-3xl p-8 md:p-12 text-center shadow-xl`}>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivory-50 mb-4">
                  {detail.ctaTitle}
                </h2>
                <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
                  {detail.ctaDesc}
                </p>
                <Link to={detail.ctaLink} className="btn-primary bg-gold-500 hover:bg-gold-600 text-charcoal-900 border-none inline-flex items-center justify-center">
                  {detail.ctaButton}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
          <div className="absolute top-0 inset-x-0 p-4 flex justify-end z-10">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
