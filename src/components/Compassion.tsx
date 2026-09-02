import { Church, HandHeart, Users, Heart, Baby, Accessibility, GraduationCap, Sparkles, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const OUTREACH = [
  {
    icon: Church,
    title: 'Build the Church',
    desc: 'We desire to strengthen and encourage local churches, pastors and believers so that the Church can grow in faith, unity and the knowledge of God\'s Word.',
  },
  {
    icon: Heart,
    title: 'Support the Church',
    desc: 'Where God provides opportunities, we seek to support churches and ministry leaders in their Gospel work, prayer gatherings, evangelism and outreach.',
  },
  {
    icon: HandHeart,
    title: 'Help the Poor',
    desc: 'We desire to show the compassion of Christ by helping people facing poverty and difficult circumstances, according to the resources and opportunities available.',
  },
  {
    icon: Users,
    title: 'Support Widows',
    desc: 'We seek to care for and encourage widows, showing them the love, dignity and compassion of Christ.',
    scripture: '"Pure religion and undefiled before God… To visit the fatherless and widows in their affliction…" — James 1:27',
  },
  {
    icon: Baby,
    title: 'Care for Orphans & Children',
    desc: 'We desire to support vulnerable children and orphans through appropriate care, practical assistance, education and encouragement.',
  },
  {
    icon: Accessibility,
    title: 'Care for the Elderly',
    desc: 'We seek opportunities to encourage and support elderly people, including those in old-age homes, with compassion, dignity and respect.',
  },
  {
    icon: GraduationCap,
    title: 'Support Education',
    desc: 'Education can help open doors for a better future. Where possible, we desire to assist children from disadvantaged families with educational needs.',
  },
  {
    icon: Sparkles,
    title: 'Helping Ministries',
    desc: 'We seek to work together with churches, ministries and Gospel workers wherever there is an opportunity to strengthen the work of God\'s Kingdom.',
  },
  {
    icon: Globe,
    title: 'Community Outreach',
    desc: 'We desire to serve communities through practical acts of compassion while sharing the hope and love of Jesus Christ.',
  },
];

// Indian community service / outreach
const OUTREACH_IMG =
  'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop';

export default function Compassion() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-ivory-50">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>Compassion & Community Outreach</p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            Faith That Serves
          </h2>
          <p className={`mt-4 text-lg text-charcoal-600 reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            Serving People. Strengthening Churches. Showing the Love of Christ.
          </p>
          <p className={`mt-3 text-base text-charcoal-500 reveal reveal-delay-3 ${isVisible ? 'is-visible' : ''}`}>
            Emmanuel Gospel Ministries desires to demonstrate the love of Jesus Christ not only through
            preaching the Gospel, but also through practical service, compassion and support for people in need.
          </p>
        </div>

        {/* Image banner */}
        <div className={`relative rounded-2xl overflow-hidden mb-14 reveal ${isVisible ? 'is-visible' : ''}`}>
          <img
            src={OUTREACH_IMG}
            alt="Community service and outreach"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="font-serif italic text-xl md:text-2xl text-ivory-50 max-w-2xl">
              &ldquo;We demonstrate the love of Christ through compassionate action, serving those in need
              and standing with communities.&rdquo;
            </p>
          </div>
        </div>

        {/* Our Commitment heading */}
        <div className={`text-center mb-10 reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Our Commitment</p>
        </div>

        {/* Outreach cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTREACH.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} ${isVisible ? 'is-visible' : ''} group flex flex-col gap-4 rounded-2xl bg-white p-6 border border-ivory-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-charcoal-900/5 hover:border-gold-400/40 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand-700">
                    <Icon className="h-5 w-5 text-brand-700 transition-colors duration-300 group-hover:text-ivory-50" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-charcoal-900 leading-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed">{item.desc}</p>
                {item.scripture && (
                  <p className="text-xs italic text-gold-700 border-l-2 border-gold-400/50 pl-3 leading-relaxed">
                    {item.scripture}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
