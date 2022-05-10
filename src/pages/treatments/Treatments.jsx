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
      <div className='bottom-bar'>
        <div className='address'>
          آدرس: کرمانشاه، پارکینگ شهرداری، دبیر اعظم، کوی لادن، ساختمان پزشکان
          سورنا، طبقه اول، واحد یک{' '}
        </div>
        <div className='phone'>
          تلفن‌ های تماس: <span>۳۷۱۰۰ ۲۳۲ ۰۸۳ | ۸۸۴۹ ۱۰۹ ۰۹۰۳ </span>
        </div>
      </div>
      <Call bottomPositionValue={window.innerWidth > 900 ? 3.5 : 5.5} />
    </>
  );
}
