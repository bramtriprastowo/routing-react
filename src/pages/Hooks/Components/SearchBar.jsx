import React from "react";

const SearchBar = (props) => {
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
            placeholder="Search news"
            aria-label="Search news"
            onChange={props.onChange}
          />
          <button className="btn btn-primary" type="button" disabled>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
