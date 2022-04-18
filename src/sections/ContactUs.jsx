// Icons
import instagramIcon from '../assets/icons/instagram.ico';

export default function ContactUs() {
  <section id='connection'>
    <h3>تماس با ما</h3>
    <div className='title'>آدرس</div>
    <div className='value justify-right'>
      کرمانشاه، پارکینگ شهرداری، دبیر اعظم، کوی لادن، ساختمان پزشکان سورنا، طبقه
      اول، واحد یک
    </div>
    <br />
    <div className='title'>تلفن های تماس</div>
    <div className='value justify-right'>
      ۰۸۳ ۳۷۱۰۰ ۲۳۲
      <br />
      ۰۹۰۳ ۱۰۹ ۸۸۴۹
    </div>
    <br />
    <div className='value' style={{ width: 'fit-content', margin: '0 auto' }}>
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
  </section>;
}
