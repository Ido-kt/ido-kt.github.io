import React from "react";
import { Breadcrumbs, Paper, Typography } from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Grid from "@mui/material/Grid";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const SimpleBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Grid container item xs={12}>
      <Paper 
        elevation={0} 
        sx={{ 
          padding: "16px 24px",
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderTop: '2px solid rgba(255, 255, 255, 0.6)',
          borderRadius: 4,
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.12),
            0 8px 24px rgba(0, 0, 0, 0.08),
            inset 0 2px 4px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.05)
          `,
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderRadius: 4,
            pointerEvents: 'none'
          },
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.35)',
            borderTop: '2px solid rgba(255, 255, 255, 0.8)',
            transform: 'translateY(-2px)',
            boxShadow: `
              0 32px 80px rgba(0, 0, 0, 0.15),
              0 12px 32px rgba(0, 0, 0, 0.1),
              inset 0 2px 6px rgba(255, 255, 255, 0.5),
              inset 0 -1px 3px rgba(0, 0, 0, 0.03)
            `
          }
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
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.35)';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 3px rgba(255, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)';
            }}
          >
            Home
          </NavLink>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const formattedValue = capitalizeFirstLetter(value);

            return last ? (
              <Typography 
                color="textPrimary" 
                key={to}
                sx={{
                  fontWeight: 700,
                  background: 'rgba(25, 118, 210, 0.25)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  padding: "8px 16px",
                  borderRadius: "16px",
                  border: '1px solid rgba(25, 118, 210, 0.4)',
                  borderTop: '2px solid rgba(25, 118, 210, 0.6)',
                  color: '#1565c0',
                  position: 'relative',
                  boxShadow: `
                    0 8px 20px rgba(25, 118, 210, 0.2),
                    0 4px 12px rgba(25, 118, 210, 0.15),
                    inset 0 2px 4px rgba(255, 255, 255, 0.4),
                    inset 0 -1px 2px rgba(25, 118, 210, 0.1)
                  `,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0.05) 100%)',
                    borderRadius: '16px',
                    pointerEvents: 'none'
                  }
                }}
              >
                {formattedValue}
              </Typography>
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
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.35)';
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 3px rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.4)';
                }}
                key={to}
              >
                {formattedValue}
              </NavLink>
            );
          })}
        </Breadcrumbs>
      </Paper>
    </Grid>
  );
};

export default SimpleBreadcrumbs;
