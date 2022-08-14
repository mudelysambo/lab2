import React from "react";
import "./SearchButton.css";

function SearchButton() {
  return (
    <div className="heading">
      <h1>Search Bookings</h1>

      <h3 className="label">Search Bookings</h3>
      <h3 className="label">Search Bookings</h3>

      <div className="text">
        <input type="text" />
        <button>Search IDs</button>

        <input type="text" />
        <button>Search Names</button>
      </div>
    </div>
  );
}
export default SearchButton;
