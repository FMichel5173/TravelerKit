import React from "react";
import { PropTypes } from "prop-types";

import "./Flag.css";

function Flag({ flag, country }) {
  return (
    <div className="flag-section">
      <button className="flag-btn" type="button">
        <i className="arrow left" />
      </button>
      <div>
        <img className="flag-img" src={flag} alt="flag" />
        <h2>{country || "France"}</h2>
      </div>
      <button className="flag-btn" type="button">
        <i className="arrow right" />
      </button>
    </div>
  );
}

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Flag;
