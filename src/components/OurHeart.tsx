import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function OurHeart() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-gradient-to-b from-ivory-50 to-ivory-100">
      <div ref={ref} className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <p className={`eyebrow mb-4 reveal ${isVisible ? 'is-visible' : ''}`}>
            A Word For You
          </p>
          <h2 className={`text-display font-serif font-bold text-charcoal-900 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            God Has a Purpose for Your Life
          </h2>
          <div className={`mt-6 space-y-6 text-lg md:text-xl text-charcoal-600 leading-relaxed reveal reveal-delay-2 ${isVisible ? 'is-visible' : ''}`}>
            <p>
              Whatever season you may be walking through, remember that God has not forgotten you. There is hope in Jesus Christ.
            </p>
            <p>
              There is forgiveness through Christ. There is strength in God's presence. There is power in the Word of God.
            </p>
            <p className="font-bold text-brand-700 text-2xl mt-4">
              Come to Jesus. Trust Him. Follow Him.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
