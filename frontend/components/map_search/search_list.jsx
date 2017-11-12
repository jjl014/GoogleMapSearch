import React from 'react';
import SearchListItem from './search_list_item';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(business) {
    return () => {
      this.props.receiveFilter({
        type: "location",
        value: {
          lat: business.location.lat(),
          lng: business.location.lng()
        }
      });
    };
  }

  render () {
    const {businesses, loading, receiveFilter} = this.props;
    const businessList = businesses.map((business, i) => {
      return <SearchListItem
        key={`business-${i}`}
        business={business}
        handleClick={this.handleClick(business)}/>;
      });

        return (
          <div>
            <ul>
              {loading ? <div className="loader">Loading...</div> : businessList}
            </ul>
          </div>
        );
  }
}

export default SearchList;
