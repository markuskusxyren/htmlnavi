mapboxgl.accessToken =
  'pk.eyJ1Ijoia3Vza3VzeHlyZW5uIiwiYSI6ImNsZWN4ampubzAxaDczcG16MXcwcWhhcDEifQ.9K3JBDAzq3Ru8riWg49zgw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([121.0524150628587, 14.682569991056297]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [121.0524150628587, 14.682569991056297],
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, 'top-left');

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true,
    })
  );
}
