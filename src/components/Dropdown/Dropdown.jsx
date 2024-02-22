import PropTypes from "prop-types";

// Dropdown component
const Dropdown = ({ children, setIsOpen, ...props }) => {
  return (
    <div {...props} className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      {children}
    </div>
  );
};

// Default props for dropdown component
Dropdown.defaultProps = {
  children: null,
  setIsOpen: () => {},
};

// Type validation for dropdown component
Dropdown.propTypes = {
  children: PropTypes.node,
  setIsOpen: PropTypes.func,
};

// Trigger component
const Trigger = ({ children, onClick, ...props }) => {
  return (
    <div {...props} className="trigger" onClick={onClick}>
      {children}
    </div>
  );
};

// Default props for trigger component
Trigger.defaultProps = {
  children: null,
  onClick: () => {},
};

// Type validation for trigger component
Trigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

// Content component
const Content = ({ children, isOpen, width = "200px", ...props }) => {
  return isOpen ? (
    <div style={{ minWidth: width }} {...props} className="content">
      {children}
    </div>
  ) : null;
};

// Default props for content component
Content.defaultProps = {
  children: null,
  isOpen: false,
  width: "200px",
};

// Type validation for content component
Content.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  width: PropTypes.string,
};

// Exporting the dropdown component
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;

export default Dropdown;
