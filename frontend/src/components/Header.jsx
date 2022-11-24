import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <select>
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
        <button type="button">Hotel</button>
        <button type="button">Devise</button>
      </div>
    </div>
  );
}

export default Header;
