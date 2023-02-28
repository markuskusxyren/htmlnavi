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

function hideList() {
  var node = document.getElementById('tomblist');
  if (node.style.visibility == 'visible') {
    node.style.visibility = 'hidden';
  } else node.style.visibility = 'visible';
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kuskusxyrenn/clee7imbg000p01nx6ah0pt8w',
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

  document.getElementById('LA-4000-1').addEventListener('pointerdown', () => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.0529244419917, 14.683703093633426])
      .addTo(map);
    map.flyTo({
      center: [121.0529244419917, 14.683703093633426],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('LA-5000A-1').addEventListener('pointerdown', () => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.05275686077329, 14.683122430075883])
      .addTo(map);
    map.flyTo({
      center: [121.05275686077329, 14.683122430075883],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('CM-8B-30').addEventListener('pointerdown', () => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.0533485642215, 14.6830785592648283])
      .addTo(map);
    map.flyTo({
      center: [121.0533485642215, 14.683078559264828],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('LA-1000A-1').addEventListener('pointerdown', () => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.05035921259355, 14.681573317832914])
      .addTo(map);
    map.flyTo({
      center: [121.05035921259355, 14.681573317832914],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });

  document.getElementById('FM-BB-22c').addEventListener('pointerdown', () => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.05123791357988, 14.683160068452992])
      .addTo(map);
    map.flyTo({
      center: [121.05123791357988, 14.683160068452992],
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });
  });
}
