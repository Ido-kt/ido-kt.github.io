import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

const MyLink = ({ to, onClick, children }) => {
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate(to); // Navigate programmatically
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button variant="outlined" onClick={handleLinkClick}>
      {children}
    </Button>
  );
};

export default MyLink;
