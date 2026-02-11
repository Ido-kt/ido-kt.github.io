import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { 
  ListItemButton, ListItemIcon, ListItemText, Box, 
  Tooltip, Badge, useTheme, alpha ,Typography
} from "@mui/material";
import { 
  Visibility as ViewIcon 
} from "@mui/icons-material";

const CustomNavLink = ({ 
  to, 
  label, 
  icon: Icon, 
  ruleCount, 
  hasSuccess = true, 
  hasFailure = true, 
  isTestable = true,
  category,
  isDrawerOpen = true 
}) => {
  const location = useLocation();
  const theme = useTheme();
  
  // Handle hash routing properly
  const currentPath = location.pathname + location.hash.replace('#', '');
  const isActivePath = currentPath === to || location.pathname === to;
  
  const getCategoryColor = (categoryName) => {
    const colors = {
      'Dashboard': '#667eea',
      'Graphics': '#4caf50',
      'Forms': '#2196f3', 
      'Keyboard': '#ff9800',
      'Navigation': '#9c27b0',
      'Headings': '#f44336',
      'Errors': '#607d8b',
      'Document': '#795748',
      'Clickables': '#e91e63',
      'Context': '#00bcd4',
      'Readability': '#8bc34a',
      'Tables': '#3f51b5',
      'Carousels': '#ff5722',
      'Rules': '#667eea',
      'Tools': '#757575'
    };
    return colors[categoryName] || theme.palette.primary.main;
  };

  const categoryColor = category ? getCategoryColor(category) : theme.palette.primary.main;

  return (
    <NavLink to={to} style={{ textDecoration: "none", width: "100%" }} end>
      <Tooltip 
        title={!isDrawerOpen ? (
          <Box sx={{ p: 0.5 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {label}
            </Typography>
            {ruleCount && (
              <Typography variant="caption" sx={{ display: 'block', opacity: 0.9, mb: 0.5 }}>
                {ruleCount} rules
              </Typography>
            )}
            <Box display="flex" alignItems="center" gap={1}>
              {hasSuccess && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'success.main' }} aria-hidden="true" />
                  <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Success</Typography>
                </Box>
              )}
              {hasFailure && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'error.main' }} aria-hidden="true" />
                  <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Failure</Typography>
                </Box>
              )}
              {isTestable && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Box sx={{ width: 4, height: 4, borderRadius: '2px', bgcolor: categoryColor }} aria-hidden="true" />
                  <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>Test</Typography>
                </Box>
              )}
            </Box>
          </Box>
        ) : null}
        placement="right"
        arrow
        disableHoverListener={isDrawerOpen}
        componentsProps={{
          tooltip: {
            sx: {
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              borderRadius: 3,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              color: '#1e293b',
              '& .MuiTooltip-arrow': {
                color: 'rgba(255, 255, 255, 0.9)'
              }
            }
          }
        }}
      >
        <ListItemButton
          sx={{
            width: "100%",
            borderRadius: 2,
            mx: isDrawerOpen ? 2 : 0.5,
            mb: isDrawerOpen ? 0.75 : 0.5,
            py: isDrawerOpen ? 1 : 1,
            px: isDrawerOpen ? 1 : 0.5,
            background: isActivePath 
              ? 'rgba(255, 255, 255, 0.6)' 
              : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${isActivePath 
              ? 'rgba(255, 255, 255, 0.8)' 
              : 'rgba(255, 255, 255, 0.4)'}`,
            boxShadow: isActivePath 
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
              : '0 2px 4px -1px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: isDrawerOpen ? 42 : 40,
            justifyContent: isDrawerOpen ? 'flex-start' : 'center',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 5px -1px rgba(0, 0, 0, 0.05)',
              transform: isDrawerOpen 
                ? 'translateX(4px) translateY(-1px)' 
                : 'translateY(-1px) scale(1.03)',
              '&::after': {
                opacity: 1,
                width: isDrawerOpen ? '3px' : '2px',
                background: `linear-gradient(135deg, ${categoryColor}, ${alpha(categoryColor, 0.7)})`
              },
              '&::before': {
                opacity: 0.1
              }
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, transparent, ${alpha(categoryColor, 0.3)}, transparent)`,
              transition: 'left 0.5s ease',
              opacity: 0
            },
            '&:hover::before': {
              left: '100%'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              height: '60%',
              width: isActivePath ? (isDrawerOpen ? '3px' : '2px') : '0px',
              background: `linear-gradient(135deg, ${categoryColor}, ${alpha(categoryColor, 0.7)})`,
              borderRadius: '0 3px 3px 0',
              transition: 'all 0.3s ease',
              opacity: isActivePath ? 1 : 0.8,
              boxShadow: `0 0 6px ${alpha(categoryColor, 0.4)}`
            },
            ...(isActivePath && {
              fontWeight: 600,
            })
          }}
        >
          <ListItemIcon sx={{ 
            minWidth: isDrawerOpen ? 40 : 'auto', 
            ml: isDrawerOpen ? 0 : 0,
            mr: isDrawerOpen ? 1 : 0,
            justifyContent: 'center'
          }}>
            {ruleCount && isDrawerOpen ? (
              <Badge
                badgeContent={ruleCount}
                color="primary"
                max={99}
                sx={{
                  '& .MuiBadge-badge': {
                    background: `linear-gradient(135deg, ${categoryColor}, ${alpha(categoryColor, 0.8)})`,
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    minWidth: 18,
                    height: 18,
                    borderRadius: '9px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1), 0 0 8px ${alpha(categoryColor, 0.3)}`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }
                }}
              >
                {Icon ? (
                  <Icon 
                    sx={{ 
                      color: isActivePath ? categoryColor : theme.palette.text.secondary,
                      fontSize: isDrawerOpen ? 22 : 20,
                      transition: 'all 0.2s ease'
                    }} 
                  />
                ) : (
                  <ViewIcon sx={{ color: theme.palette.error.main, fontSize: isDrawerOpen ? 22 : 20 }} />
                )}
              </Badge>
            ) : (
              Icon ? (
                <Box sx={{ 
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon 
                    sx={{ 
                      color: isActivePath ? categoryColor : theme.palette.text.secondary,
                      fontSize: isDrawerOpen ? 22 : 20,
                      transition: 'all 0.2s ease'
                    }} 
                  />
                  {/* Collapsed state indicator dots */}
                  {!isDrawerOpen && ruleCount && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${categoryColor}, ${alpha(categoryColor, 0.8)})`,
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.2), 0 0 6px ${alpha(categoryColor, 0.4)}`,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </Box>
              ) : (
                <ViewIcon sx={{ color: theme.palette.error.main, fontSize: isDrawerOpen ? 22 : 20 }} />
              )
            )}
          </ListItemIcon>
          
          {isDrawerOpen && (
            <ListItemText 
              primary={label}
              sx={{ 
                '& .MuiListItemText-primary': {
                  color: isActivePath ? categoryColor : theme.palette.text.primary,
                  fontWeight: isActivePath ? 600 : 400,
                  fontSize: '0.9rem'
                }
              }} 
            />
          )}
          
          {/* Compact status indicators - only show when drawer is open */}
          {isDrawerOpen && (
            <Box display="flex" alignItems="center" gap={0.5} ml="auto">
              {(hasSuccess || hasFailure) && (
                <Box display="flex" alignItems="center">
                  {hasSuccess && (
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.success.main}, ${alpha(theme.palette.success.main, 0.8)})`,
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1), 0 0 6px ${alpha(theme.palette.success.main, 0.3)}`,
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)'
                      }} 
                      aria-hidden="true"
                    />
                  )}
                  {hasFailure && (
                    <Box 
                      sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${theme.palette.error.main}, ${alpha(theme.palette.error.main, 0.8)})`,
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1), 0 0 6px ${alpha(theme.palette.error.main, 0.3)}`,
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        ml: hasSuccess ? 0.5 : 0
                      }} 
                      aria-hidden="true"
                    />
                  )}
                </Box>
              )}
              
              {isTestable && (
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '3px',
                    background: `linear-gradient(135deg, ${categoryColor}, ${alpha(categoryColor, 0.8)})`,
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1), 0 0 6px ${alpha(categoryColor, 0.3)}`,
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    ml: 0.5
                  }}
                  aria-hidden="true"
                />
              )}
            </Box>
          )}
        </ListItemButton>
      </Tooltip>
    </NavLink>
  );
};

CustomNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  ruleCount: PropTypes.number,
  hasSuccess: PropTypes.bool,
  hasFailure: PropTypes.bool,
  isTestable: PropTypes.bool,
  category: PropTypes.string,
  isDrawerOpen: PropTypes.bool,
};

CustomNavLink.defaultProps = {
  ruleCount: null,
  hasSuccess: true,
  hasFailure: true,
  isTestable: true,
  category: null,
  isDrawerOpen: true,
};

export default CustomNavLink;
