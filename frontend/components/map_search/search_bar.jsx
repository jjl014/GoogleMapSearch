import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form>
          <div className="h-box">
          <input type="text" className="search-bar"></input>
          <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}
