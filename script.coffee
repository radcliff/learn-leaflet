mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcmxpbmdyYWRjbGlmZiIsImEiOiIxYlFFV19rIn0.6AHWkJQtrDolNlMjguMmCQ'

style = 'satellite'

flip = () -> 
	if style == 'satellite'
		mapboxgl.util.getJSON 'https://www.mapbox.com/mapbox-gl-styles/styles/outdoors-v6.json', (err, style) ->
			#if err throw err
			map.setStyle style
		style = 'outdoors'
	else
		mapboxgl.util.getJSON 'https://www.mapbox.com/mapbox-gl-styles/styles/satellite-v6.json', (err, style) ->
			#if err throw err
			map.setStyle style
		style = 'satellite'

if not mapboxgl.util.supported()
	alert 'Your browser does not support Mapbox GL'
else
	map = new mapboxgl.Map
		container: 'map'
		style: 'https://www.mapbox.com/mapbox-gl-styles/styles/satellite-v6.json'
		center: [32.98754, -117.04367]
		zoom: 13
	map.addControl new mapboxgl.Navigation()

$('#button').click flip
