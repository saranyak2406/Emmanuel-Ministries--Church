import Navbar from '@/components/Navbar';
import Testimonies from '@/components/Testimonies';
import Media from '@/components/Media';
import Footer from '@/components/Footer';

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Testimonies />
        <Media />
      </main>
      <Footer />
    </div>
  );
}
