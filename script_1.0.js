function init() {
  // Remove pre-loader
  document.querySelector('.wrapper').style.display = 'block';
  document.querySelector('.pre-load').style.display = 'none';

  // Location on map
  var map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
  }).setView([34.30847, 47.0629], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([34.30855, 47.06289]).addTo(map).openPopup();

  // Replace background high-quality image once loaded
  const bg = document.querySelector('.bg-image');
  const image = document.createElement('img');
  image.src = 'assets/imgs/medical.jpg';
  image.addEventListener('load', () => {
    bg.style.backgroundImage = `url(${image.src})`;
    bg.style.filter = 'blur(0)';
  });
}

window.addEventListener('load', () => {
  setTimeout(init, 1500);
});
