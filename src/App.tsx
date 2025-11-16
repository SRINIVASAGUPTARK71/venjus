import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import ProductsPage from './pages/ProductsPage';
import MediaPage from './pages/MediaPage';
import FertilityProducts from './pages/FertilityProducts';
import PCOS from './pages/PCOS';
import CardiovascularProducts from './pages/CardiovascularProducts';
import DiabetesProducts from './pages/DiabetesProducts';
import Menopausal from './pages/Menopausal';
import Nutri from './pages/Nutri';
import UTI from './pages/UTI';
import ContactSection from './components/ContactSection';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Products />
      <Testimonials />
     
     
      <FAQ />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
             <Route path="/media" element={<MediaPage />} />
             <Route path = "/products/fertility" element={<FertilityProducts/>}/>
             <Route path = "/products/pcos" element= {<PCOS/>}/>
             <Route path = "products/cardiovascular" element = {<CardiovascularProducts/>}/>
             <Route path = "/products/Diabetes" element= {<DiabetesProducts/>}/>
             <Route path = "/products/Menopausal" element = {<Menopausal/>}/>
             <Route path = "/products/Nutri" element = {<Nutri/>}/>
             <Route path = "/products/UTI" element = {<UTI/>}/>
             <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;