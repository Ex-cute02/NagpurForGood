import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NGODetails from './pages/NGODetails';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ngo/:id" element={<NGODetails />} />
      </Routes>
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Nagpur For Good</h3>
            <p className="text-white/50 max-w-md leading-relaxed">
              Connecting compassionate hearts with verified NGOs in Nagpur. 
              Together, we're building a stronger, more caring community.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/50">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#explore" className="hover:text-white transition-colors">Explore NGOs</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/50">
              <li>Nagpur, Maharashtra</li>
              <li>India 440001</li>
              <li className="hover:text-white transition-colors">
                <a href="mailto:hello@nagpurforgood.org">hello@nagpurforgood.org</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Nagpur For Good. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Made with ❤️ for Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
