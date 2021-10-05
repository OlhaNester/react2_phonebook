import React from "react";
import PropTypes from "prop-types";
import "../ContactList/ContactList.css";

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  chtldren: PropTypes.node,
  "arial-label": PropTypes.string.isRequired,
};

export default IconButton;
