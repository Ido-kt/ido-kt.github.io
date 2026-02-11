import {
  Accessibility as AccessibilityIcon,
  BugReport as BugIcon,
  ChevronLeft as ChevronLeftIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Speed as SpeedIcon,
  Assessment as TestIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "./components/layout/search";
import engineRulesData from "./data/engine-rules-metadata.json";
import { getMainListItems, getSecondaryListItems } from "./listItems";
import AppRoutes from "./routes/AppRoutes";
const drawerWidth = 280;
const collapsedDrawerWidth = 60;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "rgba(255, 255, 255, 0.4)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  color: "#1e293b",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: collapsedDrawerWidth,
    width: `calc(100% - ${collapsedDrawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // UI State
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [testStatus, setTestStatus] = useState({ running: false, progress: 0 });

  // Data State
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDrawerToggle = () => setOpen(!open);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleThemeToggle = () => setDarkMode(!darkMode);

  // Fetch data and initialize notifications
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);

        // Initialize test notifications
        setNotifications([
          {
            id: 1,
            message: "Test environment ready",
            type: "success",
            time: "now",
          },
          {
            id: 2,
            message: `${jsonData.length} rules loaded successfully`,
            type: "info",
            time: "1m ago",
          },
          {
            id: 3,
            message: "QA dashboard updated",
            type: "info",
            time: "2m ago",
          },
        ]);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setNotifications([
          {
            id: 1,
            message: `Error loading rules: ${error.message}`,
            type: "error",
            time: "now",
          },
        ]);
      });
  }, []);

  // Handle search query
  const handleSearchChange = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.name?.toLowerCase().includes(lowerCaseQuery) ||
        item.criteria?.toLowerCase().includes(lowerCaseQuery) ||
        item.shortDescription?.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  // Calculate current page stats for header
  const getCurrentPageInfo = () => {
    if (pathnames.length === 0)
      return {
        title: "QA Dashboard",
        subtitle: "Accessibility Testing Platform",
      };

    const currentCriteria = pathnames[0];
    const criteriaTitle = capitalizeFirstLetter(currentCriteria);

    // Special case for engine rules
    if (currentCriteria === "engine" && pathnames.length === 1) {
      return {
        title: "Engine Rules",
        subtitle: `${engineRulesData.length} testing rules available`,
      };
    }

    if (pathnames.length === 1) {
      const rulesInCategory = data.filter((rule) =>
        rule.criteria?.toLowerCase().includes(currentCriteria.toLowerCase())
      ).length;
      return {
        title: `${criteriaTitle} Rules`,
        subtitle: `${rulesInCategory} testing rules available`,
      };
    }

    return { title: criteriaTitle, subtitle: "Rule Testing" };
  };

  const { title, subtitle } = getCurrentPageInfo();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          location.pathname === "/"
            ? "transparent"
            : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)",
        position: "relative",
        overflow: "hidden",
        ...(location.pathname !== "/" && {
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 25% 15%, rgba(167, 139, 250, 0.12) 0%, transparent 45%), radial-gradient(circle at 75% 85%, rgba(59, 130, 246, 0.08) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 60%)",
            backdropFilter: "blur(2px)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.1) 0deg, transparent 120deg, rgba(255,255,255,0.05) 240deg, transparent 360deg)",
            animation: "rotate 60s linear infinite",
            "@keyframes rotate": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          },
        }),
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{
          pr: 2,
          display: "grid",
          gridTemplateColumns: "auto minmax(200px, 400px) auto",
          gap: 3,
          alignItems: "center",
          width: "100%"
        }}>
          {/* Left Section */}
          <Box display="flex" alignItems="center" sx={{ justifySelf: "start" }}>
            <Box>
              <Typography
                variant="h6"
                noWrap
                sx={{ fontWeight: 600, lineHeight: 1.2 }}
              >
                {title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ opacity: 0.8, fontSize: "0.75rem" }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>

          {/* Center Section - Search */}
          <Box sx={{
            width: "100%",
            maxWidth: 400,
            justifySelf: "center"
          }}>
            <SearchComponent
              data={data}
              onSearchChange={(e) => handleSearchChange(e.target.value)}
            />
          </Box>

          {/* Right Section - Actions */}
          <Box display="flex" alignItems="center" gap={1.5} sx={{ justifySelf: "end" }}>
            {/* Test Status Indicator */}
            <Tooltip
              title={testStatus.running ? "Tests running..." : "Ready to test"}
            >
              <Chip
                icon={<SpeedIcon />}
                label={testStatus.running ? "Testing..." : "Ready"}
                size="small"
                color={testStatus.running ? "warning" : "success"}
                sx={{
                  bgcolor: testStatus.running
                    ? "rgba(255,193,7,0.2)"
                    : "rgba(76,175,80,0.2)",
                  color: "white",
                  fontWeight: 600,
                  display: { xs: "none", sm: "flex" },
                }}
              />
            </Tooltip>
            {/* Engine Library Link (glassy anchor) */}
            <Tooltip title="Open Engine Rules Library">
              <Button
                component={Link}
                to="/engine/library"
                size="small"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  fontWeight: 600,
                  px: 2.2,
                  display: { xs: "none", sm: "inline-flex" },
                  borderColor: "rgba(148, 163, 184, 0.5)",
                  color: "#1e293b",
                  background: "rgba(255, 255, 255, 0.55)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  boxShadow:
                    "0 6px 16px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
                  "&:hover": {
                    borderColor: "rgba(148, 163, 184, 0.9)",
                    background: "rgba(255, 255, 255, 0.85)",
                    boxShadow:
                      "0 10px 24px rgba(15,23,42,0.22), inset 0 1px 0 rgba(255,255,255,0.9)",
                  },
                }}
                aria-label="Engine Library"
              >
                Engine Library
              </Button>
            </Tooltip>

            {/* Theme Toggle */}
            <Tooltip title="Toggle dark mode">
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Notifications */}
            <Tooltip title="Notifications">
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* User Menu */}
            <Avatar
              role="button"
              tabIndex={0}
              sx={{
                width: 32,
                height: 32,
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.6)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255,255,255,0.5)",
                  transform: "scale(1.05)",
                },
                "&:focus": {
                  outline: "2px solid rgba(102, 126, 234, 0.5)",
                  outlineOffset: "2px",
                },
              }}
            >
              <AccessibilityIcon fontSize="small" sx={{ color: "#667eea" }} />
            </Avatar>
          </Box>
        </Toolbar>

        {/* Notifications Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 300,
              maxHeight: 400,
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              "& .MuiMenuItem-root": {
                flexDirection: "column",
                alignItems: "flex-start",
                whiteSpace: "normal",
                py: 1.5,
                borderRadius: "8px",
                margin: "4px 8px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.6)",
                },
              },
            },
          }}
        >
          <Box
            sx={{
              px: 2,
              py: 1,
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Test Notifications
            </Typography>
          </Box>
          {notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleMenuClose}>
              <Box display="flex" alignItems="flex-start" width="100%">
                {notification.type === "error" ? (
                  <BugIcon
                    color="error"
                    sx={{ mr: 1, mt: 0.5, fontSize: 18 }}
                  />
                ) : notification.type === "success" ? (
                  <SpeedIcon
                    color="success"
                    sx={{ mr: 1, mt: 0.5, fontSize: 18 }}
                  />
                ) : (
                  <TestIcon
                    color="info"
                    sx={{ mr: 1, mt: 0.5, fontSize: 18 }}
                  />
                )}
                <Box flex={1}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {notification.message}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notification.time}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          ))}
          {notifications.length === 0 && (
            <MenuItem>
              <Typography variant="body2" color="text.secondary">
                No new notifications
              </Typography>
            </MenuItem>
          )}
        </Menu>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : collapsedDrawerWidth,
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: "#1e293b",
            boxShadow: "4px 0 6px -1px rgba(0, 0, 0, 0.1)",
            border: "none",
            borderRight: "1px solid rgba(255, 255, 255, 0.5)",
            overflowX: "hidden",
            overflowY: "auto",
            pr: open ? 4 : 1,
            transition: (theme) =>
              theme.transitions.create(["width", "padding"], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
            "&::-webkit-scrollbar": {
              width: 8,
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.5)",
              },
            },
          },
        }}
      >
        <DrawerHeader>
          {open && (
            <Box display="flex" alignItems="center" sx={{ flex: 1 }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  mr: 1.5,
                  background: "rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "2px solid rgba(255, 255, 255, 0.6)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, rgba(102,126,234,0.3) 30%, rgba(167,139,250,0.3) 90%)",
                    zIndex: -1,
                  },
                }}
              >
                <AccessibilityIcon sx={{ fontSize: 20, color: "#667eea" }} />
              </Avatar>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: "#2c3e50",
                    lineHeight: 1.2,
                    fontSize: "1rem",
                  }}
                >
                  AccessFlow
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#8b9dc3",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  QA Testing
                </Typography>
              </Box>
            </Box>
          )}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#667eea",
              width: 40,
              height: 40,
              borderRadius: 2,
              "&:hover": {
                bgcolor: "rgba(102,126,234,0.1)",
                transform: "scale(1.05)",
              },
              transition: "all 0.2s ease",
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
            mx: 3,
            mb: 2,
          }}
        />
        <List
          sx={{
            px: open ? 1 : 0.25,
            py: 0,
            flex: 1,
            transition: (theme) =>
              theme.transitions.create("padding", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
          }}
        >
          {getMainListItems(data, open)}
        </List>
        <List
          sx={{
            px: open ? 1 : 0.25,
            py: 0,
            transition: (theme) =>
              theme.transitions.create("padding", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
          }}
        >
          {getSecondaryListItems(data, open)}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          height: "auto",
          overflow: "visible",
          backgroundColor: "transparent",
          padding:
            location.pathname === "/"
              ? 0
              : {
                  xs: (theme) => theme.spacing(2),
                  sm: (theme) => theme.spacing(3),
                  md: (theme) => theme.spacing(4),
                },
          position: "relative",
          zIndex: 1,
          paddingBottom: (theme) => theme.spacing(8),
        }}
      >
        <Toolbar />
        {location.pathname === "/" ? (
          // Home page - no container wrapper, let Home manage its own spacing
          <>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "50vh",
                }}
              >
                <Typography>Loading...</Typography>
              </Box>
            ) : error ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "50vh",
                }}
              >
                <Typography color="error">Error: {error}</Typography>
              </Box>
            ) : (
              <AppRoutes navigate={navigate} />
            )}
          </>
        ) : (
          // Other pages - use container with responsive maxWidth
          <Container
            maxWidth="lg"
            sx={{
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 2 },
            }}
          >
            {loading ? (
              <Typography>Loading...</Typography>
            ) : error ? (
              <Typography color="error">Error: {error}</Typography>
            ) : (
              <AppRoutes navigate={navigate} />
            )}
          </Container>
        )}
      </Box>
    </Box>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
