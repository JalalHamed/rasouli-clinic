// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Hooks
import { useState, useEffect, useRef } from 'react';
// Pages
import Home from './pages/Home';
import FootInjury from './pages/FootInjury';
// Components
import AppBar from './components/AppBar';
import Loading from './components/Loading';

export default function App() {
  const introRef = useRef(null);
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
          <AppBar refs={{ introRef }} />
          <Routes>
            <Route path='/' element={<Home refs={{ introRef }} />} />
            <Route path='/foot-injury' element={<FootInjury />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
