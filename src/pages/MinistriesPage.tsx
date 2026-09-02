import Navbar from '@/components/Navbar';
import Ministries from '@/components/Ministries';
import Compassion from '@/components/Compassion';
import Missions from '@/components/Missions';
import Footer from '@/components/Footer';

export default function MinistriesPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Ministries />
        <Compassion />
        <Missions />
      </main>
      <Footer />
    </div>
  );
}
