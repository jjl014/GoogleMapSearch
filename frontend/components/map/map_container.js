import { connect } from 'react-redux';
import {receiveBusinesses} from '../../actions/business_actions';
import Map from './map';

const mapStateToProps = (state) => ({
  businesses: state.businesses,
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  receiveBusinesses: (businesses) => dispatch(receiveBusinesses(businesses))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
