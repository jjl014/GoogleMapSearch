/* global google:false */
/* global GeolocationMarker:false */
import React from 'react';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

var service;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.query = "";
    this.state = {
      loadingMap: false
    };
    this.updateBusinesses = this.updateBusinesses.bind(this);
    this.registerListeners = this.registerListeners.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = {
      // Center on San Francisco
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);
    service = new google.maps.places.PlacesService(this.map);
    this.markerManager = new MarkerManager(this.map);
    this.getUserGeoLocation();
    this.registerListeners();

    // Use Google Places SearchBox for auto-fill
    let input = document.getElementById("map-search");
    let searchBox = new google.maps.places.SearchBox(input);
  }

  getUserGeoLocation() {
    // Use the browsers HTML5 geolocation service
    this.setState({loadingMap: true});
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleGeoLookup.bind(this),
        this.handleGeoError.bind(this) // Center map at SF if user doesn't allow location service
      );
    } else {
      // Browser doesn't support Geolocation
      this.map.setCenter({lat: 37.7758, lng: -122.435});
      this.setState({loadingMap: false});
    }
  }

  handleGeoLookup(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    // Set map center and marker for the user's location
    let GeoMarker = new GeolocationMarker(this.map);
    this.map.setCenter(pos);
    this.setState({loadingMap: false});
  }

  handleGeoError() {
    this.map.setCenter({lat: 37.7758, lng: -122.435});
    this.setState({loadingMap: false});
  }

  componentWillReceiveProps(newProps) {
    const {location, query} = newProps;
    if (location) {
      this.map.panTo({lat: location.lat, lng: location.lng});
      this.map.setZoom(16);
      this.props.receiveFilter({type: "location", value: null});
    }
    if (query && this.query !== query) {
      this.query = query;
      let request = {
        location: this.map.getCenter(),
        radius: "500",
        query
      };
      service.textSearch(request, this.updateBusinesses);
    }
  }

  componentDidUpdate() {
    const {location} = this.props;
    // Prevent multiple updates that are unnecessary
    // if (this.props.query && this.query !== this.props.query) {
    //   this.query = this.props.query;
    //   let request = {
    //     location: this.map.getCenter(),
    //     radius: "500",
    //     query: this.props.query
    //   };
    //   service.textSearch(request, this.updateBusinesses);
    // } else
    if (!this.props.query){
      // Remove all markers if no query
      this.markerManager.updateMarkers([]);
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
      this.props.updateLoading("loading", false);
      this.query = "";
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      if (this.props.query && !this.props.location) {
        let request = {
          location: this.map.getCenter(),
          radius: "500",
          query: this.props.query
        };
        service.textSearch(request, this.updateBusinesses);
      }
    });
  }

  render() {
    const {loadingMap} = this.state;
    let display;
    if (loadingMap) {
      display = <div className="loader map-loader">Loading...</div>;
    }
    return (
      <div className="map-wrapper">
        {display}
        <div id='map-container' ref='map'>Map</div>
      </div>
    );
  }
}
