import { connect } from 'react-redux';
import { receiveFilter } from '../../actions/filter_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
