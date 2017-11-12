import React from 'react';
import Map from '../map/map';
import SearchBar from './search_bar';

const MapSearch = () => {
  return (
    <div>
      <h1>Map Search :D</h1>
      <div className="h-box map-search-wrapper">
        <div className="v-box search-wrapper">
          <SearchBar />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default MapSearch;
