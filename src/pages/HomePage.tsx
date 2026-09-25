import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Proclamation from '@/components/Proclamation';
import FoundersCards from '@/components/FoundersCards';
import MeetingsGallery from '@/components/MeetingsGallery';

import PrayerRequest from '@/components/PrayerRequest';
import ContactForm from '@/components/ContactForm';
import OurHeart from '@/components/OurHeart';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <Proclamation />
        <MeetingsGallery />
        <FoundersCards />
        <OurHeart />
        <PrayerRequest />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
// Trigger HMR reload

