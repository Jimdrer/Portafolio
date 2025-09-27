"use client"

import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface GoogleMarker {
  setMap: (map: any | null) => void;
}

interface GoogleMap {}

declare global {
  interface Window {
    google: any;
  }
}

interface MapComponentProps {
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap | null>(null);
  const [marker, setMarker] = useState<GoogleMarker | null>(null);
  const [apiLoaded, setApiLoaded] = useState(false);

  const defaultLocation = { lat: 20.379888769026298, lng: -101.18211728730313 };

  useEffect(() => {
    if (window.google && window.google.maps) {
      setApiLoaded(true);
      return;
    }
    
    const loadGoogleMapsAPI = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAvCpEANCJn35ldRtPsGDT21TRcogyusUQ&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setApiLoaded(true);
      };
      script.onerror = () => {
        console.error("Error al cargar la Api de Google Maps");
      };
      document.head.appendChild(script);
    };
    
    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    if (apiLoaded && mapRef.current) {
      initMap();
    }
  }, [apiLoaded]);

  const initMap = () => {
    if (!window.google || !mapRef.current) return;

    const mapOptions = {
      zoom: 15,
      center: defaultLocation,
      mapTypeControl: true,
      streetViewControl: true,
    };

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);
    
    const newMarker = new window.google.maps.Marker({
      position: defaultLocation,
      map: newMap,
      title: "Mi Ubicación",
    });
    
    setMarker(newMarker as unknown as GoogleMarker);
  };

  const clearMarker = () => {
    if (marker) {
      marker.setMap(null);
      setMarker(null);
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: '300px' }}
      />
      {!apiLoaded && (
        <div className="w-full h-full rounded-lg flex items-center justify-center bg-muted/50">
          <div className="text-center text-muted-foreground">
            
            <p>Cargando mapa...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;