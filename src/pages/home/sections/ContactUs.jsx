// Hooks
import { useEffect, useRef } from 'react';
// Leaflet
import L from 'leaflet';
// Icons
import instagramIcon from '../../../assets/icons/instagram.ico';

export default function ContactUs() {
  const mapRef = useRef(null);

  useEffect(() => {
    let container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }
    let map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
    }).setView([34.30847, 47.0629], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      map
    );
    L.marker([34.30855, 47.06289]).addTo(map).openPopup();
  });

  return (
    <section id='connection'>
      <h3>تماس با ما</h3>
      <div className='title'>آدرس</div>
      <div className='value justify-right'>
        کرمانشاه، پارکینگ شهرداری، دبیر اعظم، کوی لادن، ساختمان پزشکان سورنا،
        طبقه اول، واحد یک
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
      <div id='map' ref={mapRef}></div>
    </section>
  );
}
