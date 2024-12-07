import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import Background from './components/Background';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-white">
            <Header />
            <main className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3248DA10,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_#3248DA08,_transparent_50%)] pointer-events-none" />
              <Background />
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <Download />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;