// Router
import { Link } from 'react-router-dom';

export default function Treatments() {
  return (
    <section id='treatments'>
      <h3>درمان انواع زخم</h3>
      <ul>
        <li>
          <Link to='foot-injury'>زخم پای دیابتی</Link>
        </li>
        <li>زخم بستر</li>
        <li>زخم‌های عفونی</li>
        <li>زخم‌های عروقی (واریسی)</li>
        <li>زخم ناشی از تصادفات</li>
        <li>انواع زخم‌های سرطانی</li>
        <li>زخم‌های عفونت جراحی</li>
        <li>زخم سوختگی</li>
      </ul>
    </section>
  );
}
