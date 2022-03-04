function init() {
  // Location on map
  var map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
  }).setView([34.30847, 47.0629], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([34.30855, 47.06289]).addTo(map).openPopup();
  setTimeout(() => {
    map.invalidateSize();
  }, 2000);

  // Replace background high-quality image once loaded
}

window.addEventListener('load', init);
