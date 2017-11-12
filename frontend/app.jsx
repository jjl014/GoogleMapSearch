import React from 'react';
import ReactDOM from 'react-dom';
import MapSearch from './components/map_search/map_search';
import configureStore from './store/store';
import GoogleMapSearch from './components/google_map_search';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState();
  
  const rootEl = document.getElementById("root");
  ReactDOM.render(<GoogleMapSearch store={store}/>, rootEl);
});
