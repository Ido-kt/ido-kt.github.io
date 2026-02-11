import {
  Accessibility as AccessibilityIcon,
  KeyboardArrowRight as ArrowRightIcon,
  AutoFixHigh as AutoFixIcon,
  CheckCircle as CheckCircleIcon,
  GavelTwoTone as GavelIcon,
  Psychology as PsychologyIcon,
  Science as ScienceIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Fade,
  Grid,
  Grow,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 100px)",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
          zIndex: -3,
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 25% 15%, rgba(167, 139, 250, 0.12) 0%, transparent 45%), radial-gradient(circle at 75% 85%, rgba(59, 130, 246, 0.08) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 60%)",
          zIndex: -2,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          py: 4,
          maxWidth: "100%",
          px: { xs: 2, sm: 3, md: 6, lg: 9 },
        }}
      >
        {/* Hero Section */}
        <Fade in timeout={1000}>
          <Box
            textAlign="center"
            sx={{ mb: 8, py: 6, maxWidth: "65%", ml: "auto", mr: "10%" }}
          >
            <Avatar
              role="presentation"
              aria-hidden="true"
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 4,
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "3px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.15), inset 0 2px 8px rgba(255, 255, 255, 0.3)",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -10,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, rgba(102,126,234,0.6), rgba(167,139,250,0.6), rgba(245,101,101,0.6), rgba(102,126,234,0.6))",
                  zIndex: -1,
                  animation: "rotate 8s linear infinite",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(45deg, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.05) 90%)",
                  zIndex: 1,
                },
              }}
            >
              <AccessibilityIcon
                sx={{
                  fontSize: 60,
                  color: "white",
                  zIndex: 2,
                  position: "relative",
                }}
              />
            </Avatar>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                background:
                  "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 3,
                textShadow: "0 4px 8px rgba(0,0,0,0.2)",
                fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                letterSpacing: "-0.02em",
              }}
            >
              AccessFlow
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "rgba(255,255,255,0.95)",
                mb: 2,
                fontWeight: 500,
                fontSize: { xs: "1.5rem", md: "2rem" },
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              QA Testing Platform
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 6,
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Modern accessibility testing with 248+ rules (90 Legacy + 158
              Engine), interactive examples, and comprehensive WCAG 2.1
              compliance guidance
            </Typography>

            {/* Quick Action Buttons */}
            <Box
              display="flex"
              justifyContent="center"
              gap={3}
              flexWrap="wrap"
              sx={{ mt: 2 }}
            >
              <Link to="/scanner" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SpeedIcon />}
                  sx={{
                    px: 6,
                    py: 2,
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    borderRadius: 4,
                    border: "2px solid rgba(255,255,255,0.6)",
                    boxShadow:
                      "0 12px 32px rgba(0, 0, 0, 0.15), inset 0 2px 8px rgba(255, 255, 255, 0.2)",
                    position: "relative",
                    overflow: "hidden",
                    textTransform: "none",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transition: "left 0.6s ease",
                    },
                    "&:hover": {
                      background: "rgba(255,255,255,0.35)",
                      transform: "translateY(-3px) scale(1.02)",
                      boxShadow:
                        "0 20px 40px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.3)",
                      border: "2px solid rgba(255,255,255,0.8)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  Start Testing
                </Button>
              </Link>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  alignSelf: "center",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                or
              </Typography>
              <Link to="/rules" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 2,
                    borderColor: "rgba(255,255,255,0.6)",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "1rem",
                    borderRadius: 4,
                    borderWidth: 2,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.9)",
                      backgroundColor: "rgba(255,255,255,0.25)",
                      transform: "translateY(-2px)",
                      borderWidth: 2,
                      },
                    transition: "all 0.3s ease",
                  }}
                >
                  Browse Rules
                </Button>
              </Link>
            </Box>
          </Box>
        </Fade>

        {/* Browse Rules Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            mt: 8,
            maxWidth: "65%",
            ml: "auto",
            mr: "10%",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 2,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            Browse Accessibility Rules
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.7,
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            Choose between our comprehensive rule libraries tailored to your
            testing needs
          </Typography>
        </Box>

        <Box sx={{ mb: 10, maxWidth: "65%", ml: "auto", mr: "10%" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grow in timeout={800}>
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-12px) scale(1.02)",
                      },
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                      borderRadius: 4,
                    border: "2px solid rgba(255,255,255,0.4)",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(30,136,229,0.2)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                      height: "6px",
                      background: "linear-gradient(90deg, #1e88e5, #1565c0)",
                        borderRadius: "4px 4px 0 0",
                      },
                    }}
                    component={Link}
                  to="/rules"
                    style={{ textDecoration: "none" }}
                  >
                  <CardContent sx={{ p: 5 }}>
                    <Stack spacing={3}>
                      <Box display="flex" alignItems="center" gap={2}>
                      <Avatar
                        sx={{
                            width: 64,
                            height: 64,
                            background:
                              "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
                            boxShadow:
                              "0 12px 24px rgba(30,136,229,0.4), inset 0 2px 8px rgba(255,255,255,0.3)",
                        }}
                      >
                          <GavelIcon sx={{ fontSize: 32, color: "white" }} />
                      </Avatar>
                        <Box flex={1}>
                      <Typography
                            variant="h4"
                            sx={{ fontWeight: 700, color: "#1e293b", mb: 0.5 }}
                      >
                            Legacy Rules
                      </Typography>
                      <Chip
                            label="90 Rules"
                            size="small"
                        sx={{
                              background:
                                "linear-gradient(135deg, rgba(30,136,229,0.2) 0%, rgba(21,101,192,0.2) 100%)",
                              color: "#1e88e5",
                          fontWeight: 700,
                              border: "1px solid rgba(30,136,229,0.4)",
                          }}
                        />
                      </Box>
        </Box>
          <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}
                      >
                        <strong>Manual QA Testing Rules</strong> - Comprehensive
                        accessibility guidelines with detailed examples, fix
                        steps, and best practices for manual testing workflows
                      </Typography>
                      <Box>
                      <Chip
                          icon={<CheckCircleIcon />}
                          label="Detailed Examples"
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                          icon={<CheckCircleIcon />}
                          label="WCAG References"
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                          icon={<CheckCircleIcon />}
                          label="12 Categories"
                          size="small"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      </Box>
                      <Button
                        variant="contained"
                        endIcon={<ArrowRightIcon />}
          sx={{
              background:
                            "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
                          color: "white",
                          fontWeight: 600,
                          py: 1.5,
                    "&:hover": {
                            background:
                              "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
                          },
                      }}
                    >
                        Browse Legacy Rules
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grow in timeout={1000}>
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                    },
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    borderRadius: 4,
                    border: "2px solid rgba(255,255,255,0.4)",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(103,58,183,0.2)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "6px",
                      background: "linear-gradient(90deg, #673ab7, #512da8)",
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                  component={Link}
                  to="/engine"
                  style={{ textDecoration: "none" }}
                >
                  <CardContent sx={{ p: 5 }}>
                    <Stack spacing={3}>
                      <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      sx={{
                            width: 64,
                            height: 64,
                        background:
                              "linear-gradient(135deg, #673ab7 0%, #512da8 100%)",
                        boxShadow:
                              "0 12px 24px rgba(103,58,183,0.4), inset 0 2px 8px rgba(255,255,255,0.3)",
                      }}
                    >
                          <ScienceIcon sx={{ fontSize: 32, color: "white" }} />
                    </Avatar>
                        <Box flex={1}>
                    <Typography
                            variant="h4"
                            sx={{ fontWeight: 700, color: "#1e293b", mb: 0.5 }}
                    >
                            Engine Rules
                    </Typography>
                    <Chip
                            label="158 Rules"
                            size="small"
                      sx={{
                        background:
                                "linear-gradient(135deg, rgba(103,58,183,0.2) 0%, rgba(81,45,168,0.2) 100%)",
                              color: "#673ab7",
                        fontWeight: 700,
                              border: "1px solid rgba(103,58,183,0.4)",
                      }}
                          />
                        </Box>
                      </Box>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                        sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}
                    >
                        <strong>Automated Validation Rules</strong> - Advanced
                        accessibility engine with atomic test cases, severity
                        levels, and automated detection for continuous
                        integration
                    </Typography>
                      <Box>
                    <Chip
                          icon={<CheckCircleIcon />}
                          label="Atomic Tests"
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                          icon={<CheckCircleIcon />}
                          label="CI/CD Ready"
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1 }}
                        />
                        <Chip
                          icon={<CheckCircleIcon />}
                          label="Impact Levels"
                          size="small"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                      </Box>
                      <Button
                        variant="contained"
                        endIcon={<ArrowRightIcon />}
                      sx={{
                        background:
                            "linear-gradient(135deg, #673ab7 0%, #512da8 100%)",
                          color: "white",
                          fontWeight: 600,
                          py: 1.5,
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #512da8 0%, #311b92 100%)",
                          },
                        }}
                      >
                        Browse Engine Rules
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          </Grid>
        </Box>

        {/* Feature Highlights - Why Choose AccessFlow */}
        <Box sx={{ mt: 8, maxWidth: "65%", ml: "auto", mr: "10%" }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 2,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              Why Choose AccessFlow?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.85)",
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.7,
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              The most comprehensive accessibility testing platform designed for
              modern web development teams
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <Grow in timeout={1800}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(76, 175, 80, 0.15)",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 30px 50px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(76, 175, 80, 0.25)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, #4caf50, #8bc34a)",
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                >
                  <SecurityIcon
                    sx={{
                      fontSize: 80,
                      color: "#4caf50",
                      mb: 3,
                      filter: "drop-shadow(0 4px 12px rgba(76, 175, 80, 0.3))",
                    }}
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 3, color: "#1e293b" }}
                  >
                    Complete Coverage
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                  >
                    248+ rules (90 Legacy + 158 Engine) covering all WCAG 2.1
                    guidelines with both success and failure examples for
                    thorough understanding
                  </Typography>
                </Paper>
              </Grow>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grow in timeout={2000}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(33, 150, 243, 0.15)",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 30px 50px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(33, 150, 243, 0.25)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, #2196f3, #03dac6)",
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                >
                  <PsychologyIcon
                    sx={{
                      fontSize: 80,
                      color: "#2196f3",
                      mb: 3,
                      filter: "drop-shadow(0 4px 12px rgba(33, 150, 243, 0.3))",
                    }}
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 3, color: "#1e293b" }}
                  >
                    Interactive Learning
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                  >
                    Live code examples, interactive demos, and real-world
                    scenarios help you master accessibility best practices
                  </Typography>
                </Paper>
              </Grow>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grow in timeout={2200}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(25px)",
                    WebkitBackdropFilter: "blur(25px)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(255, 152, 0, 0.15)",
                    textAlign: "center",
                    transition: "all 0.4s ease",
                    position: "relative",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 30px 50px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(255, 152, 0, 0.25)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: "linear-gradient(90deg, #ff9800, #ffc107)",
                      borderRadius: "4px 4px 0 0",
                    },
                  }}
                >
                  <AutoFixIcon
                    sx={{
                      fontSize: 80,
                      color: "#ff9800",
                      mb: 3,
                      filter: "drop-shadow(0 4px 12px rgba(255, 152, 0, 0.3))",
                    }}
                  />
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 3, color: "#1e293b" }}
                  >
                    Actionable Insights
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
                  >
                    Get specific, actionable guidance with code samples and
                    step-by-step instructions to fix issues quickly
                  </Typography>
                </Paper>
              </Grow>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
