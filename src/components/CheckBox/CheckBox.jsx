import PropTypes from "prop-types";
// CheckBox component
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
// Default props for checkBox
CheckBox.defaultProps = {
  name: "checkbox",
  id: "checkbox",
  checked: false,
  className: "",
};
// Type validation for checkBox
CheckBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
