import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AppBar({ notMain }) {
  const [status, setStatus] = useState('up');

  return (
    <nav>
      <ul>
        {notMain ? (
          <Link to='/'>
            <li>بازگشت به صفحه اصلی</li>
          </Link>
        ) : (
          <>
            <a href='#intro'>
              <li>خانه</li>
            </a>
            <div
              className='dropdown'
              onMouseEnter={() => setStatus('down')}
              onMouseLeave={() => setStatus('up')}
            >
              <a href='#treatments'>
                <li>
                  درمان‌ها <i className={`arrow ${status}`} />
                </li>
              </a>
              <div className='dropdown-content'>
                <Link to='foot-injury'>
                  <li>زخم پای دیابتی</li>
                </Link>
              </div>
            </div>
            <a href='#services'>
              <li>خدمات‌ما</li>
            </a>
            <a href='#connection'>
              <li>تماس‌با‌ما</li>
            </a>
          </>
        )}
      </ul>
      <span>کلینیک درمان زخم کرمانشاه</span>
    </nav>
  );
}
