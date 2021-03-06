// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Hooks
import { useState, useEffect } from 'react';
// Pages
import Home from './pages/home/Home';
import FootInjury from './pages/treatments/foot-injury/FootInjury';
import Burn from './pages/treatments/burn/Burn';
import Bedsore from './pages/treatments/bedsore/Bedsore';
// Components
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import AddressBar from './components/AddressBar';
// Styles
import './app.scss';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foot-injury' element={<FootInjury />} />
            <Route path='/bedsore' element={<Bedsore />} />
            <Route path='/burn' element={<Burn />} />
          </Routes>
        </BrowserRouter>
        <AddressBar />
      </div>
    </>
  );
}
