import Navbar from '@/components/Navbar';
import Give from '@/components/Give';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';

export default function GivePage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Give />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
}
