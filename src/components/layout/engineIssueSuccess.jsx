import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Paper,
  Divider,
  Stack,
  Typography,
  Alert,
  AlertTitle,
  Chip,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  Skeleton,
  Fade,
  Slide,
  Zoom,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircleOutline as SuccessIcon,
  ContentCopy as CopyIcon,
  Info as InfoIcon,
  CheckCircle as CheckIcon,
  Code as CodeIcon,
  Lightbulb as LightbulbIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Share as ShareIcon,
  Print as PrintIcon,
} from "@mui/icons-material";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

const EngineIssueSuccess = ({
  ruleId,
  title,
  description,
  helpText,
  bestPractices,
  htmlExamples
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
      console.error('Failed to copy code:', err);
    }
  };

  const toggleCodeView = (index) => {
    setShowCodeStates(prev => ({
      ...prev,
      [index]: !prev[index]
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
      action: () => handleCopyCode(htmlExamples.map(ex => typeof ex === 'string' ? ex : ex.content).join('\n\n'), -1),
    },
  ];

  // Loading Skeleton
  const LoadingSkeleton = () => (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4 }}>
          <Skeleton variant="rectangular" width="60%" height={40} sx={{ mb: 2 }} />
          <Skeleton variant="rectangular" width="100%" height={2} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={100} sx={{ mb: 3, borderRadius: 2 }} />
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={120} height={32} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rectangular" width={120} height={32} sx={{ borderRadius: 2 }} />
          </Stack>
        </Paper>
      </Container>
      <Container sx={{ mb: 4 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4 }}>
          <Skeleton variant="rectangular" width="40%" height={32} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={120} sx={{ borderRadius: 2 }} />
        </Paper>
      </Container>
    </>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  const renderSuccessExample = (example, index) => {
    // Handle both old format (string) and new format (object with filename and content)
    const htmlCode = typeof example === 'string' ? example : example.content;
    const filename = typeof example === 'string' ? null : example.filename;
    const showCode = showCodeStates[index] || false;

    return (
      <Card
        key={index}
        sx={{
          mb: 2,
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(76, 175, 80, 0.3)',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(76, 175, 80, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.4)',
            boxShadow: '0 12px 48px rgba(76, 175, 80, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(76, 175, 80, 0.4)'
          }
        }}
        role="region"
        aria-labelledby={`success-example-${index}`}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <SuccessIcon sx={{ color: '#4caf50', fontSize: 20 }} />
              <Typography
                id={`success-example-${index}`}
                variant="subtitle2"
                sx={{ fontWeight: 600, color: '#4caf50' }}
              >
                Success Example #{index + 1}
              </Typography>
              {filename && (
                <Chip
                  label={filename}
                  size="small"
                  sx={{
                    background: 'rgba(76, 175, 80, 0.15)',
                    color: '#2e7d32',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(76, 175, 80, 0.3)',
                  }}
                />
              )}
              <Chip
                label="Best Practice"
                size="small"
                color="success"
                variant="outlined"
                icon={<CheckIcon />}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Tooltip title={showCode ? "Show rendered HTML" : "Show code"}>
                <IconButton
                  size="small"
                  onClick={() => toggleCodeView(index)}
                  sx={{
                    color: '#4caf50',
                    '&:hover': { backgroundColor: '#f1f8e9' }
                  }}
                  aria-label={showCode ? "Show rendered HTML" : "Show code"}
                >
                  <CodeIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={copiedIndex === index ? "Copied!" : "Copy example code"}>
                <IconButton
                  size="small"
                  onClick={() => handleCopyCode(htmlCode, index)}
                  sx={{
                    color: copiedIndex === index ? '#4caf50' : '#666',
                    '&:hover': { backgroundColor: '#f1f8e9' }
                  }}
                  aria-label={`Copy success example ${index + 1} code`}
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
                background: 'rgba(255, 255, 255, 0.8)',
                border: '2px solid rgba(76, 175, 80, 0.3)',
                borderRadius: 2,
                mb: 2,
                minHeight: 60,
              }}
            >
              <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600, mb: 1, display: 'block' }}>
                Rendered Output:
              </Typography>
              <Box dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </Box>
          )}

          {/* Code View */}
          {showCode && (
            <Box
              sx={{
                p: 2,
                background: 'rgba(76, 175, 80, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                borderRadius: 2,
                position: 'relative',
                mb: 2,
              }}
            >
              <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600, mb: 1, display: 'block' }}>
                HTML Code:
              </Typography>
              <Typography
                component="pre"
                sx={{
                  m: 0,
                  p: 2,
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  borderRadius: 1,
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                <code>{htmlCode}</code>
              </Typography>
            </Box>
          )}

          <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 500 }}>
            ✅ This example properly implements the {ruleId} accessibility requirement.
          </Typography>
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
          color="success"
          size="small"
          sx={{
            position: "fixed",
            bottom: 80,
            right: 24,
            zIndex: 1000,
            background: "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)",
            boxShadow: "0 4px 20px rgba(76, 175, 80, 0.4)",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 6px 28px rgba(76, 175, 80, 0.5)",
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
            background: "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #43a047 0%, #66bb6a 100%)",
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
                boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
              },
            }}
          />
        ))}
      </SpeedDial>

      {/* Header Section */}
      <Slide in direction="down" timeout={600}>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <CustomizedBreadcrumbs />
              <Divider sx={{ my: 2 }} />

              <Alert
                severity="success"
                sx={{
                  mb: 3,
                  background: 'rgba(76, 175, 80, 0.1)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(76, 175, 80, 0.3)',
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(76, 175, 80, 0.15)'
                }}
                icon={<SuccessIcon />}
              >
                <AlertTitle sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  {title} - Success Examples
                </AlertTitle>
                <Typography variant="body1" sx={{ mt: 1, color: '#388e3c' }}>
                  {description}
                </Typography>
              </Alert>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip
                  icon={<CheckIcon />}
                  label="Compliant"
                  color="success"
                  variant="filled"
                />
                <Chip
                  icon={<InfoIcon />}
                  label={`${htmlExamples.length} Example${htmlExamples.length !== 1 ? 's' : ''}`}
                  variant="outlined"
                />
                <Chip
                  label={`Rule ID: ${ruleId}`}
                  sx={{
                    fontFamily: 'monospace',
                    background: 'rgba(103, 58, 183, 0.1)',
                    color: '#673ab7',
                    border: '1px solid rgba(103, 58, 183, 0.3)',
                  }}
                  variant="outlined"
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Slide>

      {/* Help and Best Practices Section */}
      {(helpText || bestPractices) && (
        <Fade in timeout={800}>
        <Container sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Accordion
                defaultExpanded
                sx={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(76, 175, 80, 0.1)',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    margin: 0,
                    background: 'rgba(255, 255, 255, 0.4)'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="help-content"
                  id="help-header"
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LightbulbIcon color="success" />
                    <Typography variant="h6">Understanding Best Practices</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  {helpText && helpText !== 'N/A' && (
                    <Typography paragraph sx={{ mb: 2 }}>
                      {helpText}
                    </Typography>
                  )}
                  {bestPractices && bestPractices.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ mb: 1, color: '#2e7d32' }}>
                        Best Practices:
                      </Typography>
                      <ul>
                        {bestPractices.map((practice, index) => (
                          <li key={index}>
                            <Typography paragraph>{practice}</Typography>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
        </Fade>
      )}

      {/* Success Examples Section */}
      <Zoom in timeout={1000}>
      <Container sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                background: '#fafafa'
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <CodeIcon sx={{ color: '#4caf50', fontSize: 28 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#4caf50'
                  }}
                >
                  Success Examples from Atomic Tests
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ mb: 3, color: '#666' }}
              >
                The following examples demonstrate proper accessibility implementation from the engine's atomic test suite.
                These patterns show how to create inclusive and compliant code.
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Box role="region" aria-label="Success examples list">
                {htmlExamples.length > 0 ? (
                  htmlExamples.map((htmlCode, index) => renderSuccessExample(htmlCode, index))
                ) : (
                  <Alert severity="info" icon={<InfoIcon />}>
                    No success examples available for this rule.
                  </Alert>
                )}
              </Box>

              {htmlExamples.length > 0 && (
                <Box sx={{ mt: 3, p: 2, backgroundColor: '#e8f5e8', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    <strong>💡 Tip:</strong> Use the copy button to grab example code.
                    These examples show the correct way to implement accessibility features.
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      </Zoom>
    </>
  );
};

// PropTypes for better development experience
EngineIssueSuccess.propTypes = {
  ruleId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  bestPractices: PropTypes.arrayOf(PropTypes.string),
  htmlExamples: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        filename: PropTypes.string,
        content: PropTypes.string
      })
    ])
  ).isRequired,
};

// Default props for optional parameters
EngineIssueSuccess.defaultProps = {
  helpText: null,
  bestPractices: [],
};

export default EngineIssueSuccess;

