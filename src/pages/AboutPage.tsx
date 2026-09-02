import Navbar from '@/components/Navbar';
import Welcome from '@/components/Welcome';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import OurHeart from '@/components/OurHeart';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Welcome />
        <Vision />
        <Mission />
        <OurHeart />
      </main>
      <Footer />
    </div>
  );
}
