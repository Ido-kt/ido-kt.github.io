import React from "react";
import {
  Breadcrumbs,
  Paper,
  Typography,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const CustomizedBreadcrumbs = ({ selectedOption, handleOptionChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const selectedOptionFromURL = pathnames.find((pathname) =>
    pathname.includes("failure") || pathname.includes("success")
  );

  const optionType = selectedOptionFromURL
    ? (selectedOptionFromURL.includes("failure") ? "Failure" : "Success")
    : null;

  const initialSelectedOption = optionType || selectedOption || "failure";
  const value = (initialSelectedOption && typeof initialSelectedOption === 'string')
    ? initialSelectedOption.trim().replace(/^\[|\]$/g, "")
    : "failure";
  const parts = value.split("_");
  const lastPart = parts[parts.length - 1];

  const handleOptionSelection = (selectedValue) => {
    const newURL = location.pathname.replace(
      /(_success|_failure)/,
      `_${selectedValue.toLowerCase()}`
    );
    navigate(newURL);
  };

  return (
    <Grid container item xs={12}>
      <Paper
        elevation={0}
        sx={{
          padding: "12px 20px !important",
          background: 'rgba(255, 255, 255, 0.4) !important',
          backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
          backdropFilter: 'blur(20px) !important',
          WebkitBackdropFilter: 'blur(20px) !important',
          border: '1px solid rgba(255, 255, 255, 0.3) !important',
          borderRadius: '12px !important',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important',
          mb: 2,
          '&.MuiPaper-root': {
            background: 'rgba(255, 255, 255, 0.4) !important',
            backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
          }
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            '& .MuiBreadcrumbs-li': {
              color: 'rgba(0, 0, 0, 0.8)'
            },
            '& a': {
              color: 'rgba(0, 0, 0, 0.7) !important',
              fontWeight: 500,
              '&:hover': {
                color: 'rgba(0, 0, 0, 0.9) !important'
              }
            }
          }}
        >
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Home
          </NavLink>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const formattedValue = capitalizeFirstLetter(value);
            const result = formattedValue
              .split("_")[0]
              .replace(/-/g, " ")
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return last ? (
              <NavLink
                to={`/${pathnames[0]}#${parts[0]}`}
                style={{ textDecoration: "none", color: "inherit" }}
                key={to}
              >
                {result}
              </NavLink>
            ) : (
              <NavLink
                to={to}
                style={{ textDecoration: "none", color: "inherit" }}
                key={to}
              >
                {formattedValue}
              </NavLink>
            );
          })}
          <Select
            value={lastPart}
            onChange={(event) => handleOptionSelection(event.target.value)}
            aria-label="Select variant type"
            sx={{
              marginLeft: "8px",
              background: 'rgba(255, 255, 255, 0.5) !important',
              backdropFilter: 'blur(10px) !important',
              WebkitBackdropFilter: 'blur(10px) !important',
              border: '1px solid rgba(255, 255, 255, 0.4) !important',
              borderRadius: '8px !important',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1) !important',
              '& .MuiSelect-select': {
                padding: '8px 12px',
                color: 'rgba(0, 0, 0, 0.8) !important',
                fontWeight: 500
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none !important'
              },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.6) !important'
              },
              '&.Mui-focused': {
                background: 'rgba(255, 255, 255, 0.6) !important'
              }
            }}
          >
            <MenuItem value="failure">Failure</MenuItem>
            <MenuItem value="success">Success</MenuItem>
          </Select>
        </Breadcrumbs>
      </Paper>
    </Grid>
  );
};

export default CustomizedBreadcrumbs;
