import React from 'react';

const SearchListItem = ({business}) => {
  return (
    <div className="search-list-item">
      <img src={business.photo} alt={`${business.name}-photo`}/>
      <div>
        {business.name}<br/>
        {business.address}
      </div>
    </div>
  );
};

export default SearchListItem;
