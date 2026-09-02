import Navbar from '@/components/Navbar';
import Missions from '@/components/Missions';
import Footer from '@/components/Footer';

export default function MissionsPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Missions />
      </main>
      <Footer />
    </div>
  );
}
