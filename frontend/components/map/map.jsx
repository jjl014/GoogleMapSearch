/* global google:false */
/* global GeolocationMarker:false */
import React from 'react';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    const mapOptions = {
      //Center on SF
      center: {lat: 37.7758, lng: -122.435},
      zoom: 14
    };

    this.map = new google.maps.Map(map, mapOptions);
    let GeoMarker = new GeolocationMarker(this.map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map.setCenter(pos);
      }, () => {
        // Center map at SF if user doesn't allow location service
        this.map.setCenter(this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.map.setCenter(this.map.getCenter());
    }
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map
      </div>
    );
  }
}
