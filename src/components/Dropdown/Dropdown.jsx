import PropTypes from "prop-types";
// import "./dropdown.css";

// Dropdown Component
const Dropdown = ({ children, setIsOpen, ...props }) => {
  return (
    <div {...props} className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

// Default props for Dropdown Component
Dropdown.defaultProps = {
  children: null,
  setIsOpen: () => {},
};

// Type Validation for Dropdown Component
Dropdown.propTypes = {
  children: PropTypes.node,
  setIsOpen: PropTypes.func,
};

// Trigger Component
const Trigger = ({ children, onClick, ...props }) => {
  return (
    <div {...props} className="trigger" onClick={onClick}>
      {children}
    </div>
  );
};

// Default props for Trigger Component
Trigger.defaultProps = {
  children: null,
  onClick: () => {},
};

// Type Validation for Trigger Component
Trigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

// Content Component
const Content = ({ children, isOpen, width = "200px", ...props }) => {
  return isOpen ? (
    <div style={{ minWidth: width }} {...props} className="content">
      {children}
    </div>
  ) : null;
};

// Default props for Content Component
Content.defaultProps = {
  children: null,
  isOpen: false,
  width: "200px",
};

// Type Validation for Content Component
Content.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  width: PropTypes.string,
};

// Exporting the Dropdown Component
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export default Dropdown;
