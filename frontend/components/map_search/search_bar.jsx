/* global google:false */

import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleChange() {
  //   return (e) => {
  //     this.setState({query: e.currentTarget.value});
  //   };
  // }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let input = document.getElementById("map-search");
      this.props.updateQuery(input.value);
    };
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form>
          <div className="h-box">
          <input
            id="map-search"
            type="text"
            size="50"
            placeholder="Pizza, Sandwich, Boba, Coffee">
          </input>
          <button
            onClick={this.handleSubmit()}>
            Search
          </button>
          </div>
        </form>
      </div>
    );
  }
}
