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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
