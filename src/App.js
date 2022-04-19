// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Hooks
import { useState, useEffect, useRef } from 'react';
// Pages
import Home from './pages/home/Home';
import FootInjury from './pages/foot-injury/FootInjury';
// Components
import AppBar from './components/AppBar';
import Loading from './components/Loading';
// Icons
import phoneIcon from './assets/icons/phone.ico';
// Styles
import './app.scss';

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
        <div className='call'>
          <a href='tel:+989031098849'>
            <img src={phoneIcon} alt='phone' width='100%' height='100%' />
          </a>
        </div>
      </div>
    </>
  );
}
