import { connect } from 'react-redux';
import MapSearch from './map_search';

const mapStateToProps = (state) => ({
  query: state.filters.query
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapSearch);
