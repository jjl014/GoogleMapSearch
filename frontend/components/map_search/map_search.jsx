import React from 'react';
import MapContainer from '../map/map_container';
import SearchBar from './search_bar';
import SearchListContainer from './search_list_container';

class MapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  updateQuery() {
    return (query) => {
      this.setState({query: query});
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Map Search :D</h1>
        <div className="h-box map-search-wrapper">
          <div className="v-box search-wrapper">
            <SearchBar updateQuery={this.updateQuery()}/>
            <SearchListContainer/>
          </div>
        <MapContainer query={this.state.query}/>
        </div>
      </div>
    );
  }
}

export default MapSearch;
