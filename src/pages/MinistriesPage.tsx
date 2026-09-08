import Navbar from '@/components/Navbar';
import Ministries from '@/components/Ministries';
import Missions from '@/components/Missions';
import Footer from '@/components/Footer';

export default function MinistriesPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Ministries />
        <Missions />
      </main>
      <Footer />
    </div>
  );
}
