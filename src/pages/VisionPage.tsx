import Navbar from '@/components/Navbar';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-ivory-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
