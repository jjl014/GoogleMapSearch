import { connect } from 'react-redux';
import { receiveFilter } from '../../actions/filter_actions';
import SearchList from './search_list';

const mapStateToProps = (state) => ({
  businesses: state.businesses
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
