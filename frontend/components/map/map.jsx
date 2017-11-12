/* global google:false */
/* global GeolocationMarker:false */
import React from 'react';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.query = "";
    this.pos = {};
    this.updateBusinesses = this.updateBusinesses.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = {
      // Center on San Francisco
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    window.map = this.map;
    this.markerManager = new MarkerManager(this.map);
    this.getUserGeoLocation();

    // Use Google Places SearchBox for auto-fill
    let input = document.getElementById("map-search");
    let searchBox = new google.maps.places.SearchBox(input);
  }

  getUserGeoLocation() {
    // Use the browsers HTML5 geolocation service
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Set map center and marker for the user's location
        let GeoMarker = new GeolocationMarker(this.map);
        this.map.setCenter(pos);
      }, () => {
        // Center map at SF if user doesn't allow location service
        this.map.setCenter({lat: 37.7758, lng: -122.435});
      });
    } else {
      // Browser doesn't support Geolocation
      this.map.setCenter({lat: 37.7758, lng: -122.435});
    }
  }

  componentDidUpdate() {
    // Prevent multiple updates that are unnecessary
    const pos = this.map.getCenter();
    if (this.query !== this.props.query) {
      this.query = this.props.query;
      this.pos = pos;
      let request = {
        location: pos,
        radius: "500",
        query: this.props.query
      };

      let service = new google.maps.places.PlacesService(this.map);
      service.textSearch(request, this.updateBusinesses);
    }
  }

  updateBusinesses(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      const businesses = results.map(place => {
        return {
          name: place.name,
          placeId: place.place_id,
          address: place.formatted_address,
          location: place.geometry.location,
          priceLevel: place.price_level,
          rating: place.rating,
          photo: place.photos ?
            place.photos[0].getUrl({maxWidth: 500, maxHeight: 500}) :
            "https://res.cloudinary.com/jun/image/upload/v1506033108/business_90_square_i61t6u.png",
          open: place.opening_hours ? place.opening_hours.open_now : ""
        };
      });
      this.props.receiveBusinesses(businesses);
      this.markerManager.updateMarkers(businesses);
      this.props.updateLoading(false);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map
      </div>
    );
  }
}
