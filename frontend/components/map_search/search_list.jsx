import React from 'react';
import SearchListItem from './search_list_item';

const SearchList = ({businesses}) => {
  const businessList = businesses.map((business, i) => {
    return <SearchListItem key={`business-${i}`} business={business}/>;
  });
  return (
    <div>
      <h1>Search List</h1>
      <ul>
        {businessList}
      </ul>
    </div>
  );
};

export default SearchList;
