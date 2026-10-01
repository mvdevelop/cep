import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/AppNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Season from './pages/Season';
import ContentItem from './pages/ContentItem';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ContentItem />} />
        <Route path="/season/:id" element={<Season />} />
        <Route path="*" element={<p className="text-center mt-5">Página não encontrada.</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
