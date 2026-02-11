import {
  BugReport as BugIcon,
  Code as CodeIcon,
  ContentCopy as CopyIcon,
  ErrorOutline as ErrorIcon,
  Info as InfoIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Print as PrintIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Fab,
  Fade,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Slide,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

const EngineIssueFailure = ({
  ruleId,
  title,
  description,
  helpText,
  fixSteps,
  htmlExamples,
}) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCodeStates, setShowCodeStates] = useState({});

  // Simulate loading and fade in effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [ruleId]);

  // Scroll detection for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyCode = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const toggleCodeView = (index) => {
    setShowCodeStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: description,
          url: window.location.href,
        })
        .catch((err) => console.log("Error sharing:", err));
    } else {
      handleCopyCode(window.location.href, -1);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const speedDialActions = [
    { icon: <ShareIcon />, name: "Share", action: handleShare },
    { icon: <PrintIcon />, name: "Print", action: handlePrint },
    {
      icon: <CopyIcon />,
      name: "Copy All Examples",
      action: () =>
        handleCopyCode(
          htmlExamples
            .map((ex) => (typeof ex === "string" ? ex : ex.content))
            .join("\n\n"),
          -1
        ),
    },
  ];

  // Loading Skeleton
  const LoadingSkeleton = () => (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4 }}>
          <Skeleton
            variant="rectangular"
            width="60%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={2}
            sx={{ mb: 3 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={100}
            sx={{ mb: 3, borderRadius: 2 }}
          />
          <Stack direction="row" spacing={2}>
            <Skeleton
              variant="rectangular"
              width={120}
              height={32}
              sx={{ borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              width={120}
              height={32}
              sx={{ borderRadius: 2 }}
            />
          </Stack>
        </Paper>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4 }}>
          <Skeleton
            variant="rectangular"
            width="40%"
            height={32}
            sx={{ mb: 3 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={120}
            sx={{ borderRadius: 2 }}
          />
        </Paper>
      </Container>
    </>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  const renderFailureExample = (example, index) => {
    // Handle both old format (string) and new format (object with filename and content)
    const htmlCode = typeof example === "string" ? example : example.content;
    const filename = typeof example === "string" ? null : example.filename;
    const showCode = showCodeStates[index] || false;

    return (
      <Card
        key={index}
        sx={{
          mb: 3,
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "2px solid rgba(244, 67, 54, 0.3)",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(244, 67, 54, 0.1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #ef5350 0%, #d32f2f 100%)",
          },
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 32px rgba(244, 67, 54, 0.2)",
            borderColor: "rgba(244, 67, 54, 0.5)",
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        role="region"
        aria-labelledby={`failure-example-${index}`}
      >
        <CardContent sx={{ p: 3, pt: 4 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2.5 }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              <ErrorIcon sx={{ color: "#f44336", fontSize: 24 }} />
              <Typography
                id={`failure-example-${index}`}
                variant="h6"
                sx={{ fontWeight: 700, color: "#d32f2f" }}
              >
                Example {index + 1}
              </Typography>
              {filename && (
                <Chip
                  label={filename}
                  size="small"
                  sx={{
                    background: "rgba(244, 67, 54, 0.15)",
                    color: "#c62828",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                    border: "1px solid rgba(244, 67, 54, 0.3)",
                    height: 24,
                  }}
                />
              )}
              <Chip
                label="Accessibility Issue"
                size="small"
                icon={<BugIcon sx={{ fontSize: 16 }} />}
                sx={{
                  background: "rgba(244, 67, 54, 0.15)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(244, 67, 54, 0.3)",
                  color: "#d32f2f",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  height: 24,
                }}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Tooltip title={showCode ? "Show rendered HTML" : "Show code"}>
                <IconButton
                  size="small"
                  onClick={() => toggleCodeView(index)}
                  sx={{
                    color: showCode ? "#1976d2" : "#f44336",
                    background: showCode
                      ? "rgba(25, 118, 210, 0.1)"
                      : "rgba(244, 67, 54, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1px solid ${
                      showCode
                        ? "rgba(25, 118, 210, 0.3)"
                        : "rgba(244, 67, 54, 0.3)"
                    }`,
                    "&:hover": {
                      background: showCode
                        ? "rgba(25, 118, 210, 0.2)"
                        : "rgba(244, 67, 54, 0.2)",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                  aria-label={showCode ? "Show rendered HTML" : "Show code"}
                >
                  <CodeIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={copiedIndex === index ? "Copied!" : "Copy example code"}
              >
                <IconButton
                  size="small"
                  onClick={() => handleCopyCode(htmlCode, index)}
                  sx={{
                    color: copiedIndex === index ? "#4caf50" : "#666",
                    background:
                      copiedIndex === index
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: `1px solid ${
                      copiedIndex === index
                        ? "rgba(76, 175, 80, 0.3)"
                        : "rgba(148, 163, 184, 0.3)"
                    }`,
                    "&:hover": {
                      background:
                        copiedIndex === index
                          ? "rgba(76, 175, 80, 0.2)"
                          : "rgba(255, 255, 255, 0.4)",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                  aria-label={`Copy failure example ${index + 1} code`}
                >
                  <CopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>

          {/* Rendered HTML View */}
          {!showCode && (
            <Box
              sx={{
                p: 3,
                background: "rgba(255, 255, 255, 0.9)",
                border: "2px solid rgba(244, 67, 54, 0.2)",
                borderRadius: 2,
                mb: 2.5,
                minHeight: 80,
                boxShadow: "inset 0 2px 8px rgba(244, 67, 54, 0.05)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#c62828",
                  fontWeight: 600,
                  mb: 1.5,
                  display: "block",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Rendered Output:
              </Typography>
              <Box
                dangerouslySetInnerHTML={{ __html: htmlCode }}
                sx={{
                  "& *": {
                    maxWidth: "100%",
                  },
                }}
              />
            </Box>
          )}

          {/* Code View */}
          {showCode && (
            <Box
              sx={{
                p: 2.5,
                background: "rgba(30, 30, 30, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(244, 67, 54, 0.3)",
                borderRadius: 2,
                position: "relative",
                boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.3)",
                mb: 2.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#ffcdd2",
                  fontWeight: 600,
                  mb: 1.5,
                  display: "block",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                HTML Code:
              </Typography>
              <Typography
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  fontSize: "0.875rem",
                  fontFamily: "monospace",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 1,
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  color: "#f8f8f2",
                  maxHeight: "400px",
                }}
              >
                <code>{htmlCode}</code>
              </Typography>
            </Box>
          )}

          {/* Warning Message */}
          <Alert
            severity="error"
            icon={<ErrorIcon />}
            sx={{
              background: "rgba(244, 67, 54, 0.1)",
              border: "1px solid rgba(244, 67, 54, 0.3)",
              borderRadius: 2,
              "& .MuiAlert-icon": {
                color: "#d32f2f",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#c62828" }}
            >
              This example violates the {ruleId} accessibility requirement and
              will cause issues for users.
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <Zoom in={showScrollTop}>
        <Fab
          onClick={scrollToTop}
          color="error"
          size="small"
          sx={{
            position: "fixed",
            bottom: 80,
            right: 24,
            zIndex: 1000,
            background: "linear-gradient(135deg, #ef5350 0%, #d32f2f 100%)",
            boxShadow: "0 4px 20px rgba(244, 67, 54, 0.4)",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 6px 28px rgba(244, 67, 54, 0.5)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      {/* Quick Actions Speed Dial */}
      <SpeedDial
        ariaLabel="Quick actions"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiSpeedDial-fab": {
            background: "linear-gradient(135deg, #ef5350 0%, #d32f2f 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #d32f2f 0%, #ef5350 100%)",
            },
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {speedDialActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
            tooltipOpen
            sx={{
              "& .MuiSpeedDialAction-fab": {
                boxShadow: "0 4px 12px rgba(244, 67, 54, 0.3)",
              },
            }}
          />
        ))}
      </SpeedDial>

      {/* Header Section */}
      <Slide in direction="down" timeout={600}>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CustomizedBreadcrumbs />
            <Divider sx={{ my: 3 }} />

            <Alert
              severity="error"
              sx={{
                mb: 3,
                background: "rgba(244, 67, 54, 0.1)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(244, 67, 54, 0.3)",
                borderRadius: 3,
                boxShadow: "0 4px 16px rgba(244, 67, 54, 0.1)",
              }}
              icon={<ErrorIcon />}
            >
              <AlertTitle sx={{ fontWeight: "bold", color: "#d32f2f" }}>
                Failure Examples
              </AlertTitle>
              <Typography variant="body1" sx={{ mt: 1, color: "#92400e" }}>
                {description}
              </Typography>
            </Alert>

            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12}>
                {/* Main Title */}
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    mb: 1.5,
                    background:
                      "linear-gradient(135deg, #ef5350 0%, #d32f2f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </Typography>

                {/* Key Information Chips */}
                <Stack
                  direction="row"
                  spacing={2}
                  flexWrap="wrap"
                  sx={{ gap: 1.5, mb: 3 }}
                >
                  <Chip
                    icon={<BugIcon />}
                    label="Needs Fix"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      background: "rgba(244, 67, 54, 0.2)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(244, 67, 54, 0.4)",
                      color: "#d32f2f",
                      boxShadow: "0 2px 8px rgba(244, 67, 54, 0.2)",
                      height: 36,
                    }}
                  />
                  <Chip
                    icon={<InfoIcon />}
                    label={`${htmlExamples.length} Example${
                      htmlExamples.length !== 1 ? "s" : ""
                    }`}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      background: "rgba(25, 118, 210, 0.2)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(25, 118, 210, 0.4)",
                      color: "#1976d2",
                      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.2)",
                      height: 36,
                    }}
                  />
                  <Chip
                    label={ruleId}
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      background: "rgba(103, 58, 183, 0.1)",
                      color: "#673ab7",
                      border: "1px solid rgba(103, 58, 183, 0.3)",
                      fontWeight: 600,
                      height: 36,
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Slide>

      {/* Help and Fix Steps Section - Prominently Displayed */}
      {(helpText || fixSteps) && (
        <Fade in timeout={800}>
          <Container sx={{ mb: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
            >
              {helpText && helpText !== "N/A" && (
                <Box sx={{ mb: fixSteps && fixSteps.length > 0 ? 4 : 0 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 3 }}
                  >
                    <InfoIcon color="primary" fontSize="large" />
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      Understanding This Issue
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                      color: "#374151",
                      background: "rgba(248, 250, 252, 0.8)",
                      p: 3,
                      borderRadius: 2,
                      border: "1px solid rgba(203, 213, 225, 0.5)",
                    }}
                  >
                    {helpText}
                  </Typography>
                </Box>
              )}

              {fixSteps && fixSteps.length > 0 && (
                <Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 3 }}
                  >
                    <CodeIcon color="primary" fontSize="large" />
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      How to Fix
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      borderRadius: 3,
                      p: 3,
                      border: "2px solid rgba(34, 197, 94, 0.2)",
                      boxShadow: "0 4px 16px rgba(34, 197, 94, 0.1)",
                    }}
                  >
                    <Stack spacing={2}>
                      {fixSteps.map((step, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                            p: 2,
                            background: "rgba(255, 255, 255, 0.6)",
                            borderRadius: 2,
                            border: "1px solid rgba(34, 197, 94, 0.2)",
                          }}
                        >
                          <Chip
                            label={index + 1}
                            size="small"
                            sx={{
                              minWidth: 32,
                              height: 32,
                              background: "rgba(34, 197, 94, 0.2)",
                              color: "#059669",
                              fontWeight: "bold",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              lineHeight: 1.7,
                              color: "#065f46",
                              fontWeight: 500,
                              flex: 1,
                            }}
                          >
                            {step}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              )}
            </Paper>
          </Container>
        </Fade>
      )}

      {/* Failure Examples Section */}
      <Zoom in timeout={1000}>
        <Container sx={{ mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 3 }}
            >
              <ErrorIcon sx={{ color: "#f44336", fontSize: 32 }} />
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#d32f2f",
                    mb: 0.5,
                  }}
                >
                  Failure Examples
                </Typography>
                <Typography variant="body2" sx={{ color: "#64748b" }}>
                  Common accessibility failures from the engine's atomic test
                  suite
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            <Box role="region" aria-label="Failure examples list">
              {htmlExamples.length > 0 ? (
                <>
                  {htmlExamples.map((htmlCode, index) =>
                    renderFailureExample(htmlCode, index)
                  )}

                  {/* Helpful Tip */}
                  <Alert
                    severity="info"
                    icon={<InfoIcon />}
                    sx={{
                      mt: 3,
                      background: "rgba(25, 118, 210, 0.1)",
                      border: "1px solid rgba(25, 118, 210, 0.3)",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      <strong>💡 Tip:</strong> Use the copy button to grab
                      example code. Toggle between rendered output and code view
                      to see both the visual result and the underlying HTML.
                      Each example demonstrates a specific way this
                      accessibility rule can fail.
                    </Typography>
                  </Alert>
                </>
              ) : (
                <Alert severity="info" icon={<InfoIcon />}>
                  No failure examples available for this rule.
                </Alert>
              )}
            </Box>
          </Paper>
        </Container>
      </Zoom>
    </>
  );
};

// PropTypes for better development experience
EngineIssueFailure.propTypes = {
  ruleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  fixSteps: PropTypes.arrayOf(PropTypes.string),
  htmlExamples: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        filename: PropTypes.string,
        content: PropTypes.string,
      }),
    ])
  ).isRequired,
};

// Default props for optional parameters
EngineIssueFailure.defaultProps = {
  helpText: null,
  fixSteps: [],
};

export default EngineIssueFailure;
