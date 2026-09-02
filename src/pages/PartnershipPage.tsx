import Navbar from '@/components/Navbar';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Partnership />
      </main>
      <Footer />
    </div>
  );
}
