import React from "react";
const SearchForm = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active" key="1" />
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={props.getRecordsById}
          >
            <input
              className="form-control mr-sm-2"
              name="recipeName"
              type="search"
              placeholder="Explore Books..."
            />
            <button className="btn btn-success btn-sm-4" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default SearchForm;
