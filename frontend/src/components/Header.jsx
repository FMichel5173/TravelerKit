import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <label>
          <select className="list">
            <option>France</option>
            <option>Germany</option>
            <option>France</option>
            <option>France</option>
            <option>France</option>
            <option>France</option>
            <option>France</option>
          </select>
        </label>
      </div>
      <div className="buttons-header">
        <button type="button" className="button-header">
          <img src="src/assets/airbnb.png" alt="logo" />
        </button>
        <button type="button" className="button-header">
          <img src="src/assets/euros.png" alt="$" />
        </button>
      </div>
    </div>
  );
}

export default Header;
