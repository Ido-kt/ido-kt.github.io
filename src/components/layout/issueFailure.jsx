import {
  BugReport as BugIcon,
  Code as CodeIcon,
  ContentCopy as CopyIcon,
  ErrorOutline as ErrorIcon,
  Info as InfoIcon,
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
  Fade,
  Grid,
  IconButton,
  Paper,
  Slide,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";
import { renderToString } from "react-dom/server";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

const IssueFailure = ({ itemContent, itemDescription, helpText, fixSteps }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showCodeStates, setShowCodeStates] = useState({});

  const toggleCodeView = (index) => {
    setShowCodeStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Convert React element to HTML string
  const getHtmlString = (content) => {
    if (typeof content === "string") {
      return content;
    }
    if (React.isValidElement(content)) {
      try {
        return renderToString(content);
      } catch (err) {
        console.error("Failed to render React element to string:", err);
        return "Unable to convert content to HTML";
      }
    }
    return "Content not available";
  };

  const handleCopyCode = async (content, index) => {
    try {
      // Extract HTML string from React elements
      const htmlString = getHtmlString(content);
      await navigator.clipboard.writeText(htmlString);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy content:", err);
    }
  };

  const renderFailureExample = (content, index) => {
    const showCode = showCodeStates[index] || false;
    const htmlString = getHtmlString(content);

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
                  onClick={() => handleCopyCode(content, index)}
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
                "& .list-item": {
                  border: "1px solid rgba(255, 205, 210, 0.6)",
                  background: "rgba(255, 235, 238, 0.7)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  margin: "8px 0",
                  padding: "12px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(244, 67, 54, 0.1)",
                },
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
              {content}
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
                <code>{htmlString}</code>
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
              This example demonstrates an accessibility failure that needs to
              be fixed.
            </Typography>
          </Alert>
        </CardContent>
      </Card>
    );
  };

  // Convert itemContent to array if it's not already
  // If itemContent contains multiple .list-item elements, extract them as separate examples
  const examples = useMemo(() => {
    if (React.isValidElement(itemContent) && itemContent.props.children) {
      // Look for .list-item divs within the content
      const children = React.Children.toArray(itemContent.props.children);
      const listItems = children.filter(
        (child) =>
          React.isValidElement(child) &&
          child.props.className &&
          child.props.className.includes("list-item")
      );

      // If we found list items, return them as separate examples
      if (listItems.length > 0) {
        return listItems;
      }
    }

    // Otherwise, treat the entire content as a single example
    return React.Children.toArray(itemContent);
  }, [itemContent]);

  return (
    <>
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
                {itemDescription}
              </Typography>
            </Alert>

            <Grid container spacing={3} alignItems="flex-start">
              <Grid item xs={12}>
                {/* Key Information Chips */}
                <Stack
                  direction="row"
                  spacing={2}
                  flexWrap="wrap"
                  sx={{ gap: 1.5 }}
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
                    label={`${examples.length} Example${
                      examples.length !== 1 ? "s" : ""
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
              {helpText && (
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
                  Common accessibility failures that need to be fixed
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            <Box role="region" aria-label="Failure examples list">
              {examples.length > 0 ? (
                <>
                  {examples.map((example, index) =>
                    renderFailureExample(example, index)
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
                      example code. Each example demonstrates a specific way
                      this accessibility rule can fail and needs to be fixed.
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
IssueFailure.propTypes = {
  itemContent: PropTypes.node.isRequired,
  itemDescription: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  fixSteps: PropTypes.arrayOf(PropTypes.string),
};

// Default props for optional parameters
IssueFailure.defaultProps = {
  helpText: null,
  fixSteps: null,
};

export default IssueFailure;
