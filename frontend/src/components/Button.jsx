import PropTypes from "prop-types";
import "./Button.css";

function Button({ handleClick, category }) {
  return (
    <button type="button" onClick={handleClick} className="section-btn">
      {category}
    </button>
  );
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
export default Button;
