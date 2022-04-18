// Components
import AppBar from './components/AppBar';
// Icons
import instagramIcon from './assets/icons/instagram.ico';
import phoneIcon from './assets/icons/phone.ico';

function App() {
  return (
    <>
      <div className='bg-image' />
      <AppBar />
      <div className='content'>
        <section id='home'>
          <div className='title'>
            <p>کلینیک درمان زخم</p>
            <h1>
              <span>دکتر</span> رسولی نوذری
            </h1>
          </div>
          <div className='team'>
            در کنار تیم ارتوپدی - جراح عروق - متخصص غدد - متخصص عفونی - چشم پزشک
            - متخصص کلیه - پروتز اندام های مصنوعی
          </div>
        </section>
        <section id='description'>
          <h3>کلینیک درمان زخم کرمانشاه</h3>
          <div className='justify-right'>
            اولین و مجهزترین کلینیک درمان زخم کرمانشاه با توجه به نبود مرکز
            تخصصی درمان زخم در غرب کشور و با مدیریت دکتر حسین رسولی نوذری پزشک
            زخم دوره دیده در تهران و دارای مدرک بین المللی درمان زخم در کرمانشاه
            افتتاح شد. در مرکز درمان زخم کرمانشاه از روش‌هایی نظیر لارودرمانی،
            وکیوم درمانی، اوزون درمانی، انواع پانسمان‌های نوین، سلول بنیادی در
            درمان زخم پای دیابتی، زخم بستر، زخم عروقی (واریسی)، زخم سوختگی برای
            درمان زخم استفاده می‌شود. هدف کلینیک درمان زخم کرمانشاه کاهش هزینه
            درمانی زخم، کاهش خطرات ناشی از زخم، جلوگیری از قطع عضو به دنبال زخم،
            و درمان زخم در کرمانشاه و جلوگیری از جابجایی بیماران به استان‌های
            هم‌جوار می‌باشد.
          </div>
        </section>
        <section id='treatments'>
          <h3>درمان انواع زخم</h3>
          <ul>
            <li>زخم پای دیابتی</li>
            <li>زخم بستر</li>
            <li>زخم‌های عفونی</li>
            <li>زخم‌های عروقی (واریسی)</li>
            <li>زخم ناشی از تصادفات</li>
            <li>انواع زخم‌های سرطانی</li>
            <li>زخم‌های عفونت جراحی</li>
            <li>زخم سوختگی</li>
          </ul>
        </section>
        <section id='services'>
          <h3>خدمات ما</h3>
          <ul>
            <li>سلول درمانی و PRP</li>
            <li>اوزون تراپی</li>
            <li>وکیوم تراپی</li>
            <li>لارو درمانی</li>
            <li>لیچ تراپی زخم (زالو درمانی)</li>
            <li>رفع جای زخم</li>
            <li>انواع پانسمان‌های نوین</li>
            <li>جراحی های سرپایی</li>
            <li>پرده جنینی</li>
            <li>گرافت پوست</li>
          </ul>
        </section>
        <section id='connection'>
          <h3>تماس با ما</h3>
          <div className='title'>آدرس</div>
          <div className='value justify-right'>
            کرمانشاه، پارکینگ شهرداری، دبیر اعظم، کوی لادن، ساختمان پزشکان
            سورنا، طبقه اول، واحد یک
          </div>
          <br />
          <div className='title'>تلفن های تماس</div>
          <div className='value justify-right'>
            ۰۸۳ ۳۷۱۰۰ ۲۳۲
            <br />
            ۰۹۰۳ ۱۰۹ ۸۸۴۹
          </div>
          <br />
          <div
            className='value'
            style={{ width: 'fit-content', margin: '0 auto' }}
          >
            <a
              href='https://www.instagram.com/dr.rasouliwound/'
              target='_blank'
              rel='noreferrer'
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'rgb(40, 40, 180)',
              }}
            >
              <img
                src={instagramIcon}
                alt='instagram icon'
                style={{ marginRight: '0.5rem' }}
              />
              dr.rasouliwound
            </a>
          </div>
          <br />
          <div className='title'>موقعیت روی نقشه</div>
          <div id='map'></div>
        </section>
      </div>
      <div className='call'>
        <a href='tel:+989031098849'>
          <img src={phoneIcon} alt='phone' width='100%' height='100%' />
        </a>
      </div>
    </>
  );
}

export default App;
