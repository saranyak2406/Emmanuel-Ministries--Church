import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Ministries from '@/components/Ministries';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import Meetings from '@/components/Meetings';
import PrayerRequest from '@/components/PrayerRequest';
import Compassion from '@/components/Compassion';
import OurHeart from '@/components/OurHeart';
import Testimonies from '@/components/Testimonies';
import Media from '@/components/Media';
import Missions from '@/components/Missions';
import Partnership from '@/components/Partnership';
import Give from '@/components/Give';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Ministries />
        <Vision />
        <Mission />
        <Meetings />
        <PrayerRequest />
        <Compassion />
        <OurHeart />
        <Testimonies />
        <Media />
        <Missions />
        <Partnership />
        <Give />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
