import React from 'react';
import MapContainer from '../map/map_container';
import SearchBar from './search_bar';
import SearchListContainer from './search_list_container';

class MapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false
    };
  }

  updateQuery() {
    return (query) => {
      this.setState({loading: true});
      this.setState({query: query});
    };
  }

  updateLoading() {
    return (update) => {
      this.setState({loading: update});
    };
  }

  render() {
    const {query, loading} = this.state;
    return (
      <div className="super-wrapper">
        <div className="h-box map-search-wrapper">
          <div className="v-box search-wrapper">
            <SearchBar updateQuery={this.updateQuery()}/>
            { query === "" ? null : <SearchListContainer loading={loading}/>}
          </div>
          <MapContainer query={this.state.query} updateLoading={this.updateLoading()}/>
        </div>
      </div>
    );
  }
}

export default MapSearch;
