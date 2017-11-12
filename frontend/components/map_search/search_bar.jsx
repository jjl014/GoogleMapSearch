import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange() {
    return (e) => {
      this.setState({query: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <form>
          <div className="h-box">
          <input
            onChange={this.handleChange()}
            type="text"
            className="search-bar">
          </input>
          <button>Search</button>
          </div>
        </form>
      </div>
    );
  }
}
