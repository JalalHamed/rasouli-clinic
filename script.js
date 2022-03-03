var map = L.map('map', {
  zoomControl: false,
  attributionControl: false,
}).setView([34.30847643759281, 47.0629013632695], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([34.308558099745525, 47.062896269031036]).addTo(map).openPopup();
