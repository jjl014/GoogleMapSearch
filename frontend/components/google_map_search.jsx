import React from 'react';
import MapSearch from './map_search/map_search';
import {Provider} from 'react-redux';

const GoogleMapSearch = ({store}) => {
  return (
    <Provider store={store}>
      <MapSearch />
    </Provider>
  );
};

export default GoogleMapSearch;
