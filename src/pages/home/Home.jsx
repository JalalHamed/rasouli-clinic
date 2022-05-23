// Components
import AppBar from '../../components/AppBar';
import Call from '../../components/Call';
// Sections
import Intro from './sections/Intro';
import Description from './sections/Description';
import Treatments from './sections/Treatments';
import Services from './sections/Services';
import ContactUs from './sections/ContactUs';
// Styles
import './home.scss';

export default function Home() {
  return (
    <>
      <AppBar />
      <div className='home-bg-image' />
      <div className='home-content'>
        <Intro />
        <Description />
        <Treatments />
        <Services />
        <ContactUs />
      </div>
      <Call bottomPositionValue={window.innerWidth > 900 ? 3.5 : 5.5} />
    </>
  );
}
