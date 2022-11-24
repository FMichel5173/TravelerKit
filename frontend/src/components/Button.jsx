import PropTypes from "prop-types";

function Button({ handleClick, category }) {
  return (
    <button type="button" onClick={handleClick} className="buttons">
      {category}
    </button>
  );
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};
export default Button;
