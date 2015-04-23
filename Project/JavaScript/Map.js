function initialize() 
{
	var myLatlng = new google.maps.LatLng(43.050355, -79.264247);
	var mapOptions = 
	{
		zoom: 10,
		center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker = new google.maps.Marker(
	{
		position: myLatlng,
		map: map,
		title: 'Lunfus Inc.'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);