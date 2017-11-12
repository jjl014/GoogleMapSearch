import React from 'react';

const SearchListItem = ({business}) => {
  const address = business.address.split(",").map(part => part.trim());

  // Generate stars with font awesome
  let stars = [];
  if (business.rating === 5 ) {
    for (let i = 0; i < 5; i++) {
      stars.push(<i key={`${business.name}-full-star-${i}`} className="fa fa-star" aria-hidden="true"></i>);
    }
  } else if (business.rating) {
    for (let i = 0; i < business.rating - 1; i++) {
      stars.push(<i key={`${business.name}-full-star-${i}`} className="fa fa-star" aria-hidden="true"></i>);
    }
    if (business.rating % 1 >= 0.5) {
      stars.push(<i key={`${business.name}-half-star`} className="fa fa-star-half-o" aria-hidden="true"></i>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<i key={`${business.name}-star-o-${i}`} className="fa fa-star-o" aria-hidden="true"></i>);
    }
  }

  // Generate cost
  let cost = "";
  for (let i = 0; i < business.priceLevel; i++) {
    cost += "$";
  }

  return (
    <div className="search-list-item h-box">
      <div className="biz-img-wrapper">
        <img src={business.photo} alt={`${business.name}-photo`}/>
      </div>
      <div className="biz-info v-box">
        <h3>{business.name}</h3>
        <p>
          {address[0]}<br/>
          {`${address[1]}, ${address[2]}`}
        </p>
        <p className="rating">{business.rating ? business.rating.toFixed(1) : ""} {stars}</p>
        <p>{cost === "" ? "?" : cost} &middot; {business.open ? "Open" : "Closed"}</p>
      </div>
    </div>
  );
};

export default SearchListItem;
