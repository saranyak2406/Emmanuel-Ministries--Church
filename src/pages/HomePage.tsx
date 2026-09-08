import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Ministries from '@/components/Ministries';
import Meetings from '@/components/Meetings';
import PrayerRequest from '@/components/PrayerRequest';
import OurHeart from '@/components/OurHeart';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Ministries />
        <OurHeart />
        <Meetings />
        <PrayerRequest />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
