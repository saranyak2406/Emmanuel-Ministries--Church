import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { Quote, Play, ArrowRight, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ALL_TESTIMONIES = [
  { title: 'God Answered My Prayer', text: 'I was going through a difficult season and the ministry prayed with me. God answered in ways I could never imagine. My family was restored and I found peace in Christ.', author: 'Verified Testimony', location: 'Andhra Pradesh' },
  { title: 'Healing & Restoration', text: 'After prayer, I experienced healing and a renewed sense of hope. God is faithful and His presence changed everything. I give glory to Jesus Christ.', author: 'Verified Testimony', location: 'Telangana' },
  { title: 'A New Beginning in Christ', text: 'I gave my life to Christ at a Gospel meeting. My family and I are now walking with the Lord together. The joy and peace we have found is beyond words.', author: 'Verified Testimony', location: 'India' },
  { title: 'Delivered from Darkness', text: 'I was living in bondage and darkness. Through the Gospel preaching and prayer, God delivered me completely. I am now free in Jesus Christ.', author: 'Verified Testimony', location: 'Hyderabad' },
  { title: 'Family Restored', text: 'Our family was falling apart. The ministry stood with us in prayer and counseling. By God\'s grace, our family is now united and strong in Christ.', author: 'Verified Testimony', location: 'Telangana' },
  { title: 'Provision in Need', text: 'When we had no hope and no provision, God used Emmanuel Gospel Ministries to help us. God provided through His people and we are grateful.', author: 'Verified Testimony', location: 'Andhra Pradesh' },
];

const VIDEO_TESTIMONIES = [
  {
    title: 'Testimony of Salvation',
    thumbnail: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    youtubeUrl: 'https://youtube.com/@evangelistemmanuelabraham',
  },
  {
    title: 'Testimony of Healing',
    thumbnail: 'https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    youtubeUrl: 'https://youtube.com/@evangelistemmanuelabraham',
  },
  {
    title: 'Testimony of Deliverance',
    thumbnail: 'https://images.pexels.com/photos/8164742/pexels-photo-8164742.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    youtubeUrl: 'https://youtube.com/@evangelistemmanuelabraham',
  },
];

export default function TestimonialsPage() {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-royal-950 to-charcoal-900" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #d9a347 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="container-max relative z-10">
            <p className="eyebrow text-gold-400 mb-4">Testimonies</p>
            <h1 className="text-hero font-serif font-bold text-ivory-50 mb-6 text-balance">
              Testimonies of<br />
              <span className="text-gold-400">God&rsquo;s Faithfulness</span>
            </h1>
            <p className="text-xl text-ivory-200 max-w-2xl leading-relaxed">
              God is still working in people&rsquo;s lives. Read and watch how God has moved through prayer, preaching, and the power of the Gospel.
            </p>
          </div>
        </section>

        {/* Written Testimonies */}
        <section ref={ref} className="section-padding bg-ivory-50">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Written Testimonies</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                What God Has Done
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {ALL_TESTIMONIES.map((t, i) => (
                <div
                  key={t.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-ivory-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                >
                  <Quote className="h-8 w-8 text-gold-400/40 mb-4" />
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-3">{t.title}</h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-5">{t.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-ivory-200">
                    <div>
                      <p className="text-sm font-medium text-charcoal-800">{t.author}</p>
                      <p className="text-xs text-charcoal-400">{t.location}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-700">
                      <Star className="h-3 w-3" />
                      Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Testimonies */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Video Testimonies</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                Watch & Be Encouraged
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {VIDEO_TESTIMONIES.map((v, i) => (
                <a
                  key={i}
                  href={v.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal reveal-delay-${i + 1} ${isVisible ? 'is-visible' : ''} group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg cursor-pointer block`}
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-700/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">
                      <Play className="h-7 w-7 text-ivory-50 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-1">Video Testimony</p>
                    <p className="font-serif text-lg font-bold text-ivory-50">{v.title}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className={`reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''} text-center`}>
              <p className="text-lg text-charcoal-600 mb-6">
                Do you have a testimony of what God has done in your life? We would love to hear from you.
              </p>
              <button onClick={() => navigate('/contact')} className="btn-primary">
                Share Your Testimony
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
