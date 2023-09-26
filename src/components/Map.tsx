"use client"
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';



function Map() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
      setIsMapLoaded(true);
  }, []);
    const containerStyle = {
        width: '800px',
        height: '400px'
      };
      
      const center = {
        lat: 43.5183,
        lng: -79.8774
      };
    const coordinates = [
        { lat: 43.3795, lng: -80.7114 }, // New Hamburg
        { lat: 43.6097, lng: -80.4822 }, // Ariss
        // { lat: 43.9193, lng: -80.0944 }, // Orangeville
        { lat: 43.7942, lng: -79.5268 }, // Vaughan
        { lat: 43.6205, lng: -79.5132 }, // Etobicoke
        { lat: 43.4675, lng: -79.6877 }, // Oakville
        { lat: 43.2856, lng: -80.4497 }, // Ayr, ON
        { lat: 43.3795, lng: -80.7114 }  // Back to New Hamburg
      ];
  return (
    <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8.5}
      >
       <Polygon 
          paths={coordinates}
          options={{
            fillColor: "#FF0000",
            fillOpacity: 0.15,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 1,
            clickable: false,
            draggable: false,
            editable: false,
            geodesic: false,
            zIndex: 1
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
