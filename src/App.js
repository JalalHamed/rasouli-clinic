// Components
import AppBar from './components/AppBar';
// Sections
import Home from './sections/Home';
// Icons
import phoneIcon from './assets/icons/phone.ico';
import Description from './sections/Description.jsx';
import Treatments from './sections/Treatments';
import Services from './sections/Services';
import ContactUs from './sections/ContactUs';

export default function App() {
  return (
    <>
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
    </>
  );
}
