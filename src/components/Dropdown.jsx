import PropTypes from "prop-types";
import "./dropdown.css";

// Dropdown Component
const Dropdown = ({ children, setIsOpen, ...props }) => {
  return (
    <div {...props} className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

// Type Validation for Dropdown Component
Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

// Trigger Component
const Trigger = ({ children, onClick, ...props }) => {
  return (
    <div {...props} className="trigger" onClick={onClick}>
      {children}
    </div>
  );
};

// Type Validation for Trigger Component
Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Content Component
const Content = ({ children, isOpen, width = "200px", ...props }) => {
  return isOpen ? (
    <div style={{ minWidth: width }} {...props} className="content">
      {children}
    </div>
  ) : null;
};

// Type Validation for Content Component
Content.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.string,
};

// Exporting the Dropdown Component
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export default Dropdown;
