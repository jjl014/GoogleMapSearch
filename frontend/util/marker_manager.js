/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses){
    const businessesObj = {};
    businesses.forEach(business => {
      businessesObj[business.placeId] = business;
    });

    businesses
      .filter(business => !this.markers[business.placeId])
      .forEach(newbusiness => {
        this.createMarkerFromBusiness(newbusiness, this.handleClick);
      });

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => {
        this.removeMarker(this.markers[businessId]);
      });
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.location.lat(), business.location.lng());
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.placeId
    });

    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;
