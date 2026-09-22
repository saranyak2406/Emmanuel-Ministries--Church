import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';

const CATEGORIES = [
  'Faith', 'Prayer', 'Fasting', 'Holy Spirit', 'Family', 
  'Healing', 'Deliverance', 'Worship', 'Giving', 'Obedience', 
  'God\'s Promises', 'Spiritual Authority', 'Evangelism', 'Christian Life'
];

const MESSAGES = [
  {
    id: 1,
    title: 'Standing Firm in Faith',
    category: 'Faith',
    verse: 'Hebrews 11:1',
    content: {
      introduction: 'Faith is the foundational pillar of a believer’s life. It is not just wishful thinking, but a deep assurance in the promises of God.',
      mainPoints: [
        'Faith is the substance of things hoped for.',
        'It requires action and trust in God’s unseen hand.',
        'Doubt is the enemy of faith.'
      ],
      bibleExamples: 'Abraham leaving his home (Genesis 12). Peter walking on water (Matthew 14).',
      explanation: 'When we choose to believe God’s Word over our current circumstances, we invite His supernatural power into our lives. Faith pleases God.',
      application: 'Identify one area of your life where you are struggling with worry, and consciously surrender it to God today in prayer.',
      prayer: 'Lord, increase my faith. Help me to trust You completely, even when I cannot see the path ahead. In Jesus’ Name, Amen.'
    }
  },
  {
    id: 2,
    title: 'The Power of Prevailing Prayer',
    category: 'Prayer',
    verse: 'James 5:16',
    content: {
      introduction: 'Prayer is not just a religious duty; it is a powerful weapon and a direct line of communication with our Heavenly Father.',
      mainPoints: [
        'Prayer must be fervent and earnest.',
        'Righteousness aligns our prayers with God’s will.',
        'Persistent prayer yields results.'
      ],
      bibleExamples: 'Elijah praying for rain (1 Kings 18). Daniel praying consistently despite the decree (Daniel 6).',
      explanation: 'The effectiveness of our prayers is not based on elegant words, but on a sincere heart that believes God hears and answers.',
      application: 'Set aside a specific 15-minute window today dedicated solely to uninterrupted prayer and listening to God.',
      prayer: 'Father, teach me how to pray. Ignite a fire in my heart for communion with You. May my prayers be aligned with Your perfect will. Amen.'
    }
  }
];

export default function MessagesPage() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredMessages = MESSAGES.filter(msg => {
    const matchesSearch = msg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          msg.content.introduction.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? msg.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="section-padding bg-white relative overflow-hidden min-h-screen">
          <div className="absolute top-0 right-0 w-96 h-96 bg-royal-50/60 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div ref={ref} className="container-max relative z-10 max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Teachings & Sermons</p>
              <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
                Bible Messages
              </h2>
              <p className={`mt-6 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
                Explore our searchable library of Bible teachings. Discover foundational truths, powerful examples, and practical applications for your daily life.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className={`mb-12 space-y-6 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search messages..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-ivory-200 shadow-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-charcoal-800"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === null ? 'bg-brand-700 text-white shadow-md' : 'bg-ivory-100 text-charcoal-600 hover:bg-ivory-200'}`}
                >
                  All
                </button>
                {CATEGORIES.map(category => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-brand-700 text-white shadow-md' : 'bg-ivory-100 text-charcoal-600 hover:bg-ivory-200'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages List */}
            <div className={`max-w-4xl mx-auto space-y-6 reveal reveal-delay-4 ${isVisible ? 'is-visible' : ''}`}>
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 text-charcoal-400">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>No messages found matching your search.</p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <div key={msg.id} className="bg-white border border-ivory-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                    
                    {/* Message Header (Clickable) */}
                    <div 
                      onClick={() => setExpandedId(expandedId === msg.id ? null : msg.id)}
                      className="p-6 md:p-8 cursor-pointer hover:bg-ivory-50 flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3 inline-block">
                          {msg.category}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-charcoal-900 group-hover:text-brand-700 transition-colors">
                          {msg.title}
                        </h3>
                        <p className="text-charcoal-500 font-medium mt-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> {msg.verse}
                        </p>
                      </div>
                      <div className="shrink-0 ml-4">
                        {expandedId === msg.id ? (
                          <ChevronDown className="w-6 h-6 text-charcoal-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-charcoal-400 group-hover:text-brand-700" />
                        )}
                      </div>
                    </div>

                    {/* Message Content (Expanded) */}
                    {expandedId === msg.id && (
                      <div className="p-6 md:p-8 border-t border-ivory-100 bg-ivory-50/50 space-y-8 animate-fade-up">
                        
                        <div>
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-2 text-brand-700">Introduction</h4>
                          <p className="text-charcoal-700 leading-relaxed">{msg.content.introduction}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-3 text-brand-700">Main Points</h4>
                          <ul className="list-disc list-inside space-y-2 text-charcoal-700">
                            {msg.content.mainPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-ivory-200 shadow-sm">
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-2 text-brand-700">Bible Examples</h4>
                          <p className="text-charcoal-700 leading-relaxed">{msg.content.bibleExamples}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-2 text-brand-700">Explanation</h4>
                          <p className="text-charcoal-700 leading-relaxed">{msg.content.explanation}</p>
                        </div>

                        <div className="bg-brand-50 p-6 rounded-xl border-l-4 border-brand-700">
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-2 text-brand-700">Application</h4>
                          <p className="text-charcoal-800 leading-relaxed font-medium">{msg.content.application}</p>
                        </div>

                        <div className="border-t border-ivory-200 pt-8 text-center max-w-2xl mx-auto">
                          <h4 className="font-bold text-charcoal-900 uppercase tracking-wider text-sm mb-4">Closing Prayer</h4>
                          <p className="font-serif italic text-xl text-charcoal-800 leading-relaxed">
                            "{msg.content.prayer}"
                          </p>
                        </div>

                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
