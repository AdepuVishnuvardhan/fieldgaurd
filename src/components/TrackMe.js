import React, { useState, useEffect } from 'react';

const TrackMe = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [service, setService] = useState(null);

  const googleMapsApiKey = "AIzaSyB0jxwyRrAdRlsYnlppEBLMApycDOBm5OY"; // Replace with your API Key

  // Initialize Google Map
  const initMap = () => {
    const pyrmont = { lat: -33.8665433, lng: 151.1956316 }; // Default location

    const mapOptions = {
      center: pyrmont,
      zoom: 15,
    };

    const mapInstance = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    setMap(mapInstance);

    // Check if the Places Service has loaded successfully
    const placesService = new window.google.maps.places.PlacesService(mapInstance);
    setService(placesService);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Set user location
        setUserLocation(userLocation);
        mapInstance.setCenter(userLocation);

        const infowindow = new window.google.maps.InfoWindow();
        infowindow.setPosition(userLocation);
        infowindow.setContent('Location found.');
        infowindow.open(mapInstance);

        // Proceed to search nearby places once map and service are ready
        if (placesService) {
          searchNearbyPoliceStations(userLocation, placesService, mapInstance);
        }
      });
    } else {
      alert('Geolocation not supported by your browser.');
    }
  };

  // Search for police stations near the current location
  const searchNearbyPoliceStations = (location, placesService, mapInstance) => {
    const request = {
      location: location,
      radius: '500',
      query: 'police station',
    };

    placesService.textSearch(request, callback);
  };

  // Callback function to process search results and place markers
  const callback = (results, status) => {
    const infowindow = new window.google.maps.InfoWindow();

    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((place) => {
        createMarker(place, infowindow);
      });
    }
  };

  // Create markers for each found place
  const createMarker = (place, infowindow) => {
    const marker = new window.google.maps.Marker({
      map,
      position: place.geometry.location,
    });

    const request = { reference: place.reference };

    service.getDetails(request, (details, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        window.google.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent(
            `${details.name}<br/>${details.formatted_address}<br/>${details.formatted_phone_number}`
          );
          infowindow.open(map, marker);
        });
      }
    });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = initMap;

    return () => {
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <h1>Safe Zone</h1>
      <div id="map" style={{ width: '100%', height: '500px', marginTop: '20px' }}></div>
    </div>
  );
};

export default TrackMe;
