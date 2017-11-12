import { connect } from 'react-redux';
import SearchList from './search_list';

const mapStateToProps = (state) => ({
  businesses: state.businesses
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
