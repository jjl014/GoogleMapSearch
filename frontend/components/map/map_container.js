import { connect } from 'react-redux';
import {receiveBusinesses} from '../../actions/business_actions';
import {receiveFilter} from '../../actions/filter_actions';
import Map from './map';

const mapStateToProps = (state) => ({
  businesses: state.businesses,
  query: state.filters.query,
  location: state.filters.location
});

const mapDispatchToProps = (dispatch) => ({
  receiveBusinesses: (businesses) => dispatch(receiveBusinesses(businesses)),
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
