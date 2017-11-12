/* global google:false */
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
  }

  render() {
    return (
      <div id='map-container' ref='map'>
        Map
      </div>
    );
  }
}
