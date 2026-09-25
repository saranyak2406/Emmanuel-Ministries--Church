import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, PlayCircle, Image as ImageIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

const GALLERY_IMAGES = [
  '/images/gallery/WhatsApp Image 2026-09-04 at 3.36.56 PM.jpeg',
  '/images/gallery/WhatsApp Image 2026-09-04 at 3.36.57 PM.jpeg',
  '/images/gallery/WhatsApp Image 2026-09-04 at 3.36.44 PM (1).jpeg',
  '/images/gallery/WhatsApp Image 2026-09-04 at 3.36.58 PM.jpeg',
  '/images/gallery/e2659171-d689-4189-9460-01d204a70954.jpg',
  '/images/gallery/img1.jpg',
  '/images/gallery/image2.jpg',
  '/images/gallery/image 3.jpg',
  '/images/gallery/1001500423.jpg',
];

const VIDEO_GALLERY = [
  { id: '6nJ3akANROc', title: 'Emmanuel Gospel Ministries Video' },
  { id: '0e7ftWjVL4Y', title: 'Gospel Meeting' },
  { id: 'tVpTGkB7KV8', title: 'Worship Session' }
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard navigation for lightbox
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
    if (selectedImageIndex !== null && selectedImageIndex < GALLERY_IMAGES.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <main className="min-h-screen bg-ivory-50 flex flex-col font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Interactive Tabs */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex bg-ivory-50 p-2 rounded-2xl shadow-inner border border-ivory-100">
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
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {GALLERY_IMAGES.map((image, index) => (
                  <div 
                    key={`grid-${index}`} 
                    className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid"
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt="Gallery Photo"
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
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
            <div className="animate-fade-in bg-ivory-50 p-8 md:p-12 rounded-[2rem] border border-ivory-200">
              <div className="text-center mb-12">
                <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
                  Watch our latest messages, worship sessions, and ministry highlights from our YouTube channel.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <FinalCTA />
      <Footer />

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950/95 backdrop-blur-sm">
          {/* Top Bar */}
          <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10">
            <span className="text-white/70 text-sm font-medium">
              {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
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
            className={`absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10 ${selectedImageIndex === GALLERY_IMAGES.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            disabled={selectedImageIndex === GALLERY_IMAGES.length - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center p-4 md:p-12">
            <img 
              src={GALLERY_IMAGES[selectedImageIndex]}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain animate-fade-in"
            />
          </div>
        </div>
      )}

    </main>
  );
}
