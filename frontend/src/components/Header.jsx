import React from "react";
import "./header.css";
import { PropTypes } from "prop-types";
import countryList from "../countries";

function Header({ airbnbLink, bgImage, currentCountry, handleChange }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="header"
    >
      <div>
        <label>
          <input
            className="input-country"
            type="text"
            list="countries"
            onChange={handleChange}
            defaultValue="France"
          />
          <datalist value={currentCountry} id="countries" className="list">
            <option>France</option>
            {countryList.map((el) => (
              <option key={`${el}`}>{el}</option>
            ))}
          </datalist>
        </label>
      </div>
      <div className="buttons-header">
        <button type="button" className="button-header">
          <a href={airbnbLink} target="blank">
            <img src="src/assets/airbnb.png" alt="logo" />
          </a>
        </button>
        <button type="button" className="button-header">
          <a href="https://www.xe.com/fr/currencyconverter/" target="blank">
            <img src="src/assets/euros.png" alt="$" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;

Header.propTypes = {
  airbnbLink: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
  currentCountry: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
