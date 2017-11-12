/* global google:false */

import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      let input = document.getElementById("map-search");
      if (input.value !== "") {
        this.props.updateQuery(input.value);
      }
    };
  }

  handleChange() {
    return (e) => {
      if (e.currentTarget.value === "") {
        this.props.updateQuery("");
      }
    };
  }

  render() {
    return (
      <div>
        <form>
          <div className="h-box search-bar-wrapper">
            <input
              id="map-search"
              type="text"
              placeholder="Search Google Maps"
              onChange={this.handleChange()}>
            </input>
            <button
              onClick={this.handleSubmit()}>
              <i className="fa fa-lg fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
