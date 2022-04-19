import { Link } from 'react-router-dom';

export default function AppBar({ notMain }) {
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
            <a href='#treatments'>
              <li>درمان‌ها</li>
            </a>
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
