import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <select className="list">
          <option>France</option>
          <option>Germany</option>
          <option>France</option>
          <option>France</option>
          <option>France</option>
          <option>France</option>
          <option>France</option>
        </select>
      </div>
      <div className="buttons-header">
        <button type="button" className="button-header">
          Hotel
        </button>
        <button type="button" className="button-header">
          Devise
        </button>
      </div>
    </div>
  );
}

export default Header;
