import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div
        className="container my-4 py-3 px-5 sticky-top"
        style={{ backgroundColor: "#E9FFEE", fontFamily: "Poppins" }}
      >
        <div className="row">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search news"
              onChange={this.props.onChange}
            />
            <button type="button" className="btn btn-success" disabled>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
