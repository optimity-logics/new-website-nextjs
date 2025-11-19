'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGFyc2g3ODYiLCJhIjoiY2x2NHIzZ2phMDNpNzJxcDltNTJydnlxMiJ9.2HfjHMIZ94ILa_CdKJ0Rgw';

// Move this OUTSIDE the component (fixes warning)
const officeLocation: [number, number] = [
  72.53891144685224,
  23.114256493077406,
];

const MapboxMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapboxgl.accessToken) {
      console.error('Mapbox token missing');
      return;
    }

    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: officeLocation,
        zoom: 14,
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      new mapboxgl.Marker({ color: '#02ADE1' })
        .setLngLat(officeLocation)
        .addTo(mapRef.current);
    }
  }, []); // good, no dependencies needed

  return (
    <div
      ref={mapContainerRef}
      className="h-[500px] w-full max-w-[500px] rounded-[20px] xl:max-w-[700px]"
    />
  );
};

export default MapboxMap;