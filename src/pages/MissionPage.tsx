import Navbar from '@/components/Navbar';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
