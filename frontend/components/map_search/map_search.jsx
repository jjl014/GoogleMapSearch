import React from 'react';
import MapContainer from '../map/map_container';
import SearchBarContainer from './search_bar_container';
import SearchListContainer from './search_list_container';

class MapSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadingMap: false
    };
  }

  updateLoading() {
    return (type, update) => {
      this.setState({[type]: update});
    };
  }

  render() {
    const {loading, loadingMap} = this.state;
    const {query} = this.props;
    return (
      <div className="super-wrapper">
        <div className="h-box map-search-wrapper">
          <div className="v-box search-wrapper">
            <SearchBarContainer updateLoading={this.updateLoading()}/>
            { query === "" ? null : <SearchListContainer loading={loading}/>}
          </div>
          <MapContainer
            updateLoading={this.updateLoading()}
            loadingMap={loadingMap}/>
        </div>
      </div>
    );
  }
}

export default MapSearch;
