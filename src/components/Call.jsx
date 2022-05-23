// Icons
import phoneIcon from '../assets/icons/phone.ico';

export default function Call() {
  return (
    <div
      className='call'
      style={{
        bottom: window.innerWidth > 900 ? 3.5 + 'rem' : 5.5 + 'rem',
      }}
    >
      <a href='tel:+989031098849'>
        <img src={phoneIcon} alt='phone' width='100%' height='100%' />
      </a>
    </div>
  );
}
