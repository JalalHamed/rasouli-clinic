// Sections
import Intro from '../../sections/Intro';
import Description from '../../sections/Description';
import Treatments from '../../sections/Treatments';
import Services from '../../sections/Services';
import ContactUs from '../../sections/ContactUs';

// Styles
import './home.scss';

export default function Home({ refs }) {
  return (
    <>
      <div className='home-bg-image' />
      <div className='home-content'>
        <Intro theRef={refs.introRef} />
        <Description />
        <Treatments />
        <Services />
        <ContactUs />
      </div>
    </>
  );
}
