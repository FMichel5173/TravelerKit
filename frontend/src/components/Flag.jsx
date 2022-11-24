import React from "react";
import { PropTypes } from "prop-types";

import "./Flag.css";

function Flag({ flag, country }) {
  return (
    <div className="flag-section">
      <img className="flag-img" src={flag} alt="flag" />
      <h2>{country}</h2>
    </div>
  );
}

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Flag;
