// 'use client';
// import React, { useEffect, useRef } from 'react';
// import mapboxgl, { Map } from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiaGFyc2g3ODYiLCJhIjoiY2x2NHIzZ2phMDNpNzJxcDltNTJydnlxMiJ9.2HfjHMIZ94ILa_CdKJ0Rgw';

// const MapboxMap: React.FC = () => {
//   const mapContainerRef = useRef<HTMLDivElement | null>(null);
//   const mapRef = useRef<Map | null>(null);

//   useEffect(() => {
//     if (!mapboxgl.accessToken) {
//       console.error('Mapbox access token is missing.');
//       return;
//     }

//     if (mapContainerRef.current && !mapRef.current) {
//       mapRef.current = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: 'mapbox://styles/mapbox/streets-v12', // You can change the style if needed
//         center: [72.5714, 23.0225], // Ahmedabad coordinates [Longitude, Latitude]
//         zoom: 12, // Adjust the zoom level as needed
//       });

//       // Add navigation controls (zoom in/out)
//       mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
//     }
//   }, []);

//   return (
//     <div
//       ref={mapContainerRef}
//       style={{
//         height: '500px',
//         width: '100%',
//       }}
//     />
//   );
// };

// export default MapboxMap;

'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map, Marker } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGFyc2g3ODYiLCJhIjoiY2x2NHIzZ2phMDNpNzJxcDltNTJydnlxMiJ9.2HfjHMIZ94ILa_CdKJ0Rgw';

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);
  const markerRef = useRef<Marker | null>(null); // Marker reference to control removal or updates

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error('Mapbox access token is missing.');
      return;
    }

    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12', // You can change the style if needed
        center: [72.5714, 23.0225], // Ahmedabad coordinates [Longitude, Latitude]
        zoom: 12, // Adjust the zoom level as needed
      });

      // Add navigation controls (zoom in/out)
      mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          const userLocation: [number, number] = [longitude, latitude];

          // setCurrentLocation(userLocation);

          // Ensure mapRef.current is initialized and not null before interacting
          if (mapRef.current) {
            // Fly to the user's location
            mapRef.current.flyTo({
              center: userLocation,
              zoom: 14,
              essential: true,
            });

            // If a marker already exists, remove it before adding a new one
            if (markerRef.current) {
              markerRef.current.remove();
            }

            // Create a new marker without popup
            markerRef.current = new mapboxgl.Marker({ color: '#02ADE1' })
              .setLngLat(userLocation)
              .addTo(mapRef.current);
          }
        },
        (error) => {
          console.error('Error fetching location:', error.message);
        },
        {
          enableHighAccuracy: true, // Request high-accuracy location
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        height: '500px',
        width: '100%',
      }}
    />
  );
};

export default MapboxMap;
