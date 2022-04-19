// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Hooks
import { useState, useEffect } from 'react';
// Pages
import Home from './pages/home/Home';
import FootInjury from './pages/foot-injury/FootInjury';
// Components
import Loading from './components/Loading';
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
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foot-injury' element={<FootInjury />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
