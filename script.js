mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcmxpbmdyYWRjbGlmZiIsImEiOiIxYlFFV19rIn0.6AHWkJQtrDolNlMjguMmCQ';

style = 'satellite';

//check for browser support
if (!mapboxgl.util.supported()) {
  alert('Your browser does not support Mapbox GL');
} else {
	var map = new mapboxgl.Map({
	  container: 'map',
	  //style: 'https://www.mapbox.com/mapbox-gl-styles/styles/outdoors-v6.json',
	  style: 'https://www.mapbox.com/mapbox-gl-styles/styles/satellite-v6.json',
	  center: [32.98754, -117.04367],
	  zoom: 13,
	  //disables pan and zoom
	  //interactive: false,
	});
	map.addControl(new mapboxgl.Navigation());
}

function flip() {
	if (style === 'satellite') {
		mapboxgl.util.getJSON('https://www.mapbox.com/mapbox-gl-styles/styles/outdoors-v6.json', function (err, style) {
		  if (err) throw err;
		  map.setStyle(style);
		});
		style = 'outdoors';
	} else {
		mapboxgl.util.getJSON('https://www.mapbox.com/mapbox-gl-styles/styles/satellite-v6.json', function (err, style) {
		  if (err) throw err;
		  map.setStyle(style);
		});
		style = 'satellite';
	}
}

// LEAFLET
// var map = L.map('map', {scrollWheelZoom: false}).setView([32.98754, -117.04367], 13);

// L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
// 	attribution: 'hello world',
// 	maxZoom: 18
// }).addTo(map);

// var marker = L.marker([32.97395, -117.02686]).addTo(map);

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);