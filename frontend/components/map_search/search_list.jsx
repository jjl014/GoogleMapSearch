import React from 'react';
import SearchListItem from './search_list_item';

const SearchList = ({businesses, loading}) => {
  const businessList = businesses.map((business, i) => {
    return <SearchListItem key={`business-${i}`} business={business}/>;
  });
  return (
    <div>
      <ul>
        {loading ? <div className="loader">Loading...</div> : businessList}
      </ul>
    </div>
  );
};

export default SearchList;
