// Icons
import phoneIcon from '../assets/icons/phone.ico';

export default function Call({ bottomPositionValue }) {
  return (
    <div
      className='call'
      style={{
        bottom: bottomPositionValue ? bottomPositionValue + 'rem' : '2rem',
      }}
    >
      <a href='tel:+989031098849'>
        <img src={phoneIcon} alt='phone' width='100%' height='100%' />
      </a>
    </div>
  );
}
