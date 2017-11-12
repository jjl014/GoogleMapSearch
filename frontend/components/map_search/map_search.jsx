import React from 'react';
import MapContainer from '../map/map_container';
import SearchBarContainer from './search_bar_container';
import SearchListContainer from './search_list_container';

class MapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      loading: false,
      loadingMap: false
    };
  }

  updateQuery() {
    return (query) => {
      this.setState({loading: true});
      this.setState({query: query});
    };
  }

  updateLoading() {
    return (type, update) => {
      this.setState({[type]: update});
    };
  }

  render() {
    const {query, loading, loadingMap} = this.state;
    return (
      <div className="super-wrapper">
        <div className="h-box map-search-wrapper">
          <div className="v-box search-wrapper">
            <SearchBarContainer updateQuery={this.updateQuery()}/>
            { query === "" ? null : <SearchListContainer loading={loading}/>}
          </div>
          <MapContainer
            query={this.state.query}
            updateLoading={this.updateLoading()}
            loadingMap={loadingMap}/>
        </div>
      </div>
    );
  }
}

export default MapSearch;
