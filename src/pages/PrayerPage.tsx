import Navbar from '@/components/Navbar';
import PrayerRequest from '@/components/PrayerRequest';
import Footer from '@/components/Footer';

export default function PrayerPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <PrayerRequest />
      </main>
      <Footer />
    </div>
  );
}
