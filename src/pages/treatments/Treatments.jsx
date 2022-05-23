// Components
import AppBar from '../../components/AppBar';
import Call from '../../components/Call';
// Styles
import './treatments.scss';

export default function Treatments({ children }) {
  return (
    <>
      <AppBar notMain />
      <div className='treatments-bg-image' />
      <div className='content'>{children}</div>
      <Call />
    </>
  );
}
