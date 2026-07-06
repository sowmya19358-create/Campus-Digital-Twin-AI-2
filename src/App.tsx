import { useEffect, useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CampusMap from './components/CampusMap';
import AIAssistant from './components/AIAssistant';
import MaintenanceDashboard from './components/MaintenanceDashboard';
import Analytics from './components/Analytics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050B1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', border: '2px solid #2563EB', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050B1A', color: 'white' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CampusMap />
        <AIAssistant />
        <MaintenanceDashboard />
        <Analytics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
