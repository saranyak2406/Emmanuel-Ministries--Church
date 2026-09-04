import { Routes, Route, Navigate } from 'react-router-dom';
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
import PreachPage     from '@/pages/PreachPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import CoreValuePage  from '@/pages/CoreValuePage';
import MissionDetailPage from '@/pages/MissionDetailPage';
import MinistryDetailPage from '@/pages/MinistryDetailPage';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"               element={<HomePage />}        />
        <Route path="/about"          element={<AboutPage />}       />
        <Route path="/ministries"     element={<MinistriesPage />}  />
        <Route path="/prayer"         element={<PrayerPage />}      />
        <Route path="/give"           element={<GivePage />}        />
        <Route path="/contact"        element={<ContactPage />}     />
        <Route path="/meetings"       element={<MeetingsPage />}    />
        <Route path="/events"         element={<Navigate to="/meetings" replace />} />
        <Route path="/media"          element={<MediaPage />}       />
        <Route path="/missions"       element={<MissionsPage />}    />
        <Route path="/partnership"    element={<PartnershipPage />} />
        <Route path="/preach"         element={<PreachPage />}      />
        <Route path="/testimonials"   element={<TestimonialsPage />}/>
        <Route path="/core-values/:slug" element={<CoreValuePage />}/>
        <Route path="/mission/:slug"  element={<MissionDetailPage />}/>
        <Route path="/ministry/:slug" element={<MinistryDetailPage />}/>
        {/* Fallback to home */}
        <Route path="*"               element={<HomePage />}        />
      </Routes>
    </>
  );
}
