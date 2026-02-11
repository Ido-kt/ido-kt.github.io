import React from "react";

const CustomButton = ({ to, onClick, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event) => {
    // Handle Enter and Space keys for keyboard accessibility
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export default CustomButton;
