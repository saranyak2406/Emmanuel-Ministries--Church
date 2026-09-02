import Navbar from '@/components/Navbar';
import Meetings from '@/components/Meetings';
import Footer from '@/components/Footer';

export default function MeetingsPage() {
  return (
    <div className="min-h-screen bg-ivory-50">
      <Navbar />
      <main className="pt-20">
        <Meetings />
      </main>
      <Footer />
    </div>
  );
}
