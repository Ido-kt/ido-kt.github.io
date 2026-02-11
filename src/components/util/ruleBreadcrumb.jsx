import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, MenuItem, Paper, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const CustomizedBreadcrumbs = ({ selectedOption, handleOptionChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Detect success / failure variant from the URL for both legacy and engine rules
  const hasVariant = /(_success|_failure)$/.test(location.pathname);
  const lastPart = location.pathname.endsWith("_failure")
    ? "failure"
    : location.pathname.endsWith("_success")
    ? "success"
    : "";

  const handleOptionSelection = (selectedValue) => {
    const basePath = location.pathname.replace(/(_success|_failure)$/, "");
    const newURL = `${basePath}_${selectedValue.toLowerCase()}`;
    navigate(newURL);
  };

  return (
    <Grid container item xs={12}>
      {" "}
      {/* Added "item" prop */}
      <Paper
        elevation={0}
        sx={{
          padding: "16px 24px",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderTop: "2px solid rgba(255, 255, 255, 0.6)",
          borderRadius: 4,
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.12),
            0 8px 24px rgba(0, 0, 0, 0.08),
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.05)
          `,
          position: "relative",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
            borderRadius: 4,
            pointerEvents: "none",
          },
          "&:hover": {
            background: "rgba(255, 255, 255, 0.35)",
            borderTop: "2px solid rgba(255, 255, 255, 0.8)",
            transform: "translateY(-2px)",
            boxShadow: `
              0 32px 80px rgba(0, 0, 0, 0.15),
              0 12px 32px rgba(0, 0, 0, 0.1),
              inset 0 2px 6px rgba(255, 255, 255, 0.5),
              inset 0 -1px 3px rgba(0, 0, 0, 0.03)
            `,
          },
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <NavLink
            underline="hover"
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow:
                "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
            }}
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
              .map(function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(" ");

            const isVariantSegment = /(_success|_failure)$/.test(to);
            const targetTo = isVariantSegment
              ? to.replace(/(_success|_failure)$/, "")
              : to;

            return last ? (
              <NavLink
                underline="hover"
                to={targetTo}
                style={{
                  textDecoration: "none",
                  color: "#1565c0",
                  fontWeight: 700,
                  padding: "8px 16px",
                  borderRadius: "16px",
                  background: "rgba(25, 118, 210, 0.25)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(25, 118, 210, 0.4)",
                  borderTop: "2px solid rgba(25, 118, 210, 0.6)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: `
                    0 8px 20px rgba(25, 118, 210, 0.2),
                    0 4px 12px rgba(25, 118, 210, 0.15),
                    inset 0 2px 4px rgba(255, 255, 255, 0.4),
                    inset 0 -1px 2px rgba(25, 118, 210, 0.1)
                  `,
                }}
                key={to}
              >
                {result}
              </NavLink>
            ) : (
              <NavLink
                underline="hover"
                to={to}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow:
                    "0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
                }}
                key={to}
              >
                {formattedValue}
              </NavLink>
            );
          })}

          {hasVariant && (
            <Select
              value={lastPart}
              onChange={(event) => handleOptionSelection(event.target.value)}
              aria-label="Select variant type"
              size="small"
              sx={{
                marginLeft: "12px",
                minWidth: "100px",
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(25, 118, 210, 0.3)",
                borderRadius: 2,
                fontWeight: 600,
                color: "#1976d2",
                "& .MuiSelect-select": {
                  padding: "6px 12px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.5)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "2px solid rgba(25, 118, 210, 0.5)",
                },
              }}
            >
              <MenuItem aria-label="Option failure" value="failure">
                Failure
              </MenuItem>
              <MenuItem aria-label="Option success" value="success">
                Success
              </MenuItem>
            </Select>
          )}
        </Breadcrumbs>
      </Paper>
    </Grid>
  );
};

export default CustomizedBreadcrumbs;
