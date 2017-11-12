import React from 'react';
import MapSearchContainer from './map_search/map_search_container';
import {Provider} from 'react-redux';

const GoogleMapSearch = ({store}) => {
  return (
    <Provider store={store}>
      <MapSearchContainer />
    </Provider>
  );
};

export default GoogleMapSearch;
