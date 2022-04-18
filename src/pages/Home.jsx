// Sections
import Intro from '../sections/Intro';
import Description from '../sections/Description';
import Treatments from '../sections/Treatments';
import Services from '../sections/Services';
import ContactUs from '../sections/ContactUs';
// Icons
import phoneIcon from '../assets/icons/phone.ico';
import '../index.css';

export default function Home({ refs }) {
  return (
    <>
      <div className='home-bg-image' />
      <div className='content'>
        <Intro theRef={refs.introRef} />
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
