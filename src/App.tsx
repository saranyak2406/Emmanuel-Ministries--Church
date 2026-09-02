import { Routes, Route } from 'react-router-dom';
import HomePage       from '@/pages/HomePage';
import AboutPage      from '@/pages/AboutPage';
import MinistriesPage from '@/pages/MinistriesPage';
import PrayerPage     from '@/pages/PrayerPage';
import GivePage       from '@/pages/GivePage';
import ContactPage    from '@/pages/ContactPage';
import MeetingsPage   from '@/pages/MeetingsPage';
import MediaPage      from '@/pages/MediaPage';
import MissionsPage   from '@/pages/MissionsPage';
import PartnershipPage from '@/pages/PartnershipPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"            element={<HomePage />}       />
        <Route path="/about"       element={<AboutPage />}      />
        <Route path="/ministries"  element={<MinistriesPage />} />
        <Route path="/prayer"      element={<PrayerPage />}     />
        <Route path="/give"        element={<GivePage />}       />
        <Route path="/contact"     element={<ContactPage />}    />
        <Route path="/meetings"    element={<MeetingsPage />}   />
        <Route path="/media"       element={<MediaPage />}      />
        <Route path="/missions"    element={<MissionsPage />}   />
        <Route path="/partnership" element={<PartnershipPage />}/>
        {/* Fallback to home */}
        <Route path="*"            element={<HomePage />}       />
      </Routes>
    </>
  );
}
