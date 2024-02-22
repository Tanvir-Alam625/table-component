import PropTypes from "prop-types";
// CheckBox Component
const CheckBox = ({ name, id, checked, onChange, className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={`
      checkbox
      ${className}
      `}
      checked={checked}
      name={name}
      id={id}
      onChange={onChange}
      {...props}
    />
  );
};
// Default props for CheckBox
CheckBox.defaultProps = {
  name: "checkbox",
  id: "checkbox",
  checked: false,
  className: "",
};
// Type Validation for CheckBox
CheckBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
