// Hooks
import { useState, useEffect } from 'react';
// Components
import AppBar from './components/AppBar';
import Loading from './components/Loading';
// Sections
import Home from './sections/Home';
import Description from './sections/Description';
import Treatments from './sections/Treatments';
import Services from './sections/Services';
import ContactUs from './sections/ContactUs';
// Icons
import phoneIcon from './assets/icons/phone.ico';

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
        <div className='bg-image' />
        <AppBar />
        <div className='content'>
          <Home />
          <Description />
          <Treatments />
          <Services />
          <ContactUs />
        </div>
        <div className='call'>
          <a href='tel:+989031098849'>
            <img src={phoneIcon} alt='phone' width='100%' height='100%' />
          </a>
        </div>
      </div>
    </>
  );
}
