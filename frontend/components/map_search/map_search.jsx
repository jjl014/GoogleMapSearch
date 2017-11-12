import React from 'react';
import Map from '../map/map';
import SearchBar from './search_bar';
import SearchListContainer from './search_list_container';

const MapSearch = () => {
  return (
    <div>
      <h1>Map Search :D</h1>
      <div className="h-box map-search-wrapper">
        <div className="v-box search-wrapper">
          <SearchBar />
          <SearchListContainer />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default MapSearch;
