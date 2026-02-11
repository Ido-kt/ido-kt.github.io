import {
  AccessibleTwoTone as AccessibleTwoToneIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  ContentCopy as ContentCopyIcon,
  Gavel as GavelIcon,
  Info as InfoIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Link as LinkIcon,
  OpenInNew as OpenInNewIcon,
  Print as PrintIcon,
  Science as ScienceIcon,
  Share as ShareIcon,
} from "@mui/icons-material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
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
import { Link } from "react-router-dom";
import engineLegacyMapping from "../../data/engine-legacy-mapping";
import legacyEngineMapping from "../../data/legacy-engine-mapping";
import legacyRulesData from "../../data/legacy-rules.json";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

function EngineRulePage({ ruleData }) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Simulate loading and fade in effect
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [ruleData]);

  // Scroll detection for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: ruleData?.title,
          text: ruleData?.description,
          url: window.location.href,
        })
        .catch((err) => console.log("Error sharing:", err));
    } else {
      handleCopy(window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getSeverityColor = (impact) => {
    switch (impact?.toLowerCase()) {
      case "critical":
        return {
          textColor: "#d32f2f",
          borderColor: "#d32f2f",
          iconColor: "#d32f2f",
        };
      case "major":
        return {
          textColor: "#f57c00",
          borderColor: "#f57c00",
          iconColor: "#f57c00",
        };
      case "moderate":
        return {
          textColor: "#1976d2",
          borderColor: "#1976d2",
          iconColor: "#1976d2",
        };
      case "minor":
        return {
          textColor: "#388e3c",
          borderColor: "#388e3c",
          iconColor: "#388e3c",
        };
      default:
        return {
          textColor: "#666",
          borderColor: "#666",
          iconColor: "#666",
        };
    }
  };

  // Helper function to format rule ID into readable title
  const formatRuleTitle = (id) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Loading Skeleton
  const LoadingSkeleton = () => (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={0} sx={{ p: 4, mb: 3, borderRadius: 4 }}>
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
        <Skeleton
          variant="rectangular"
          width="80%"
          height={60}
          sx={{ mb: 2 }}
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
      <Paper elevation={0} sx={{ p: 4, mb: 3, borderRadius: 4 }}>
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
          height={80}
          sx={{ borderRadius: 2 }}
        />
      </Paper>
    </Container>
  );

  if (!ruleData) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Fade in timeout={600}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CustomizedBreadcrumbs />
            <Divider sx={{ my: 3 }} />

            <Alert
              severity="info"
              sx={{
                mb: 3,
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.7)",
                borderRadius: 3,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
              icon={<InfoIcon />}
            >
              <AlertTitle sx={{ fontWeight: "bold" }}>
                No Engine Rule Data Available
              </AlertTitle>
              <Typography variant="body1">
                The requested engine rule could not be found or is not available
                at this time.
              </Typography>
            </Alert>
          </Paper>
        </Fade>
      </Container>
    );
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  const severityColors = getSeverityColor(ruleData.impact);
  const wcagRefs = ruleData.refs?.filter((r) => r.type === "WCAG") || [];
  const otherRefs = ruleData.refs?.filter((r) => r.type !== "WCAG") || [];
  const formattedTitle = formatRuleTitle(ruleData.id);
  const relatedLegacyRules = engineLegacyMapping[ruleData.id] || [];

  // Find if this engine rule has a legacy equivalent (reverse lookup)
  const getLegacyEquivalent = () => {
    for (const [legacyShortCode, engineRules] of Object.entries(
      legacyEngineMapping
    )) {
      const matchingRule = engineRules.find(
        (engineRule) => engineRule.id === ruleData.id
      );
      if (matchingRule) {
        // Find the legacy rule with this shortCode
        const legacyRule = legacyRulesData.find(
          (rule) => rule.shortCode === legacyShortCode
        );
        if (legacyRule && legacyRule.criteria && legacyRule.route) {
          return {
            path: `/${legacyRule.criteria}/${legacyRule.route}`,
            name: legacyRule.name,
            shortCode: legacyShortCode,
          };
        }
      }
    }
    return null;
  };

  const legacyEquivalent = getLegacyEquivalent();

  const speedDialActions = [
    { icon: <ShareIcon />, name: "Share", action: handleShare },
    { icon: <PrintIcon />, name: "Print", action: handlePrint },
    {
      icon: <ContentCopyIcon />,
      name: "Copy Advice",
      action: () => handleCopy(ruleData.advice),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, position: "relative" }}>
      {/* Scroll to Top Button */}
      <Zoom in={showScrollTop}>
        <Fab
          onClick={scrollToTop}
          color="primary"
          size="small"
          sx={{
            position: "fixed",
            bottom: 80,
            right: 24,
            zIndex: 1000,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 4px 20px rgba(103, 58, 183, 0.4)",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 6px 28px rgba(103, 58, 183, 0.5)",
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
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
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
                boxShadow: "0 4px 12px rgba(103, 58, 183, 0.3)",
              },
            }}
          />
        ))}
      </SpeedDial>

      {/* Header Section */}
      <Slide in direction="down" timeout={600}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 3,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CustomizedBreadcrumbs />
          <Divider sx={{ my: 3 }} />

          <Alert
            severity="info"
            sx={{
              mb: 3,
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
            }}
            icon={<ScienceIcon />}
          >
            <AlertTitle sx={{ fontWeight: "bold", color: "#1e293b" }}>
              Engine Rule Details
            </AlertTitle>
            <Typography variant="body1" sx={{ color: "#64748b" }}>
              This is an automated accessibility validation rule from the audit
              engine with comprehensive testing coverage.
            </Typography>
          </Alert>

          {/* Legacy Rule Equivalent Indicator */}
          {legacyEquivalent && (
            <Alert
              severity="warning"
              sx={{
                mb: 3,
                background: "rgba(245, 158, 11, 0.1)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                borderRadius: 3,
                boxShadow: "0 4px 16px rgba(245, 158, 11, 0.1)",
              }}
              icon={<AccessibleTwoToneIcon />}
            >
              <AlertTitle sx={{ fontWeight: "bold", color: "#d97706" }}>
                Legacy Rule Equivalent
              </AlertTitle>
              <Typography variant="body1" sx={{ color: "#92400e", mb: 1.5 }}>
                This engine rule replaces the legacy rule:{" "}
                <strong>{legacyEquivalent.name}</strong>
              </Typography>
              <Button
                component={Link}
                to={legacyEquivalent.path}
                variant="outlined"
                size="small"
                startIcon={<OpenInNewIcon />}
                sx={{
                  textTransform: "none",
                  borderColor: "#d97706",
                  color: "#d97706",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#b45309",
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                  },
                }}
              >
                View Legacy Rule
              </Button>
            </Alert>
          )}

          {/* Related legacy rules (if mapping exists) */}
          {relatedLegacyRules.length > 0 && (
            <Box
              sx={{
                mb: 3,
                p: 2.5,
                borderRadius: 3,
                background: "rgba(248, 250, 252, 0.8)",
                border: "1px solid rgba(148, 163, 184, 0.35)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: "#475569", mr: 1 }}
              >
                Related legacy rule{relatedLegacyRules.length > 1 ? "s" : ""}:
              </Typography>
              {relatedLegacyRules.map((legacy) => (
                <Chip
                  key={legacy.path}
                  component={Link}
                  to={legacy.path}
                  clickable
                  label={legacy.label}
                  icon={<AccessibleTwoToneIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    fontWeight: 600,
                    borderRadius: 999,
                    px: 0.5,
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(148,163,184,0.5)",
                    color: "#1e293b",
                    "& .MuiChip-icon": {
                      color: "#2563eb",
                    },
                    "&:hover": {
                      background: "rgba(255,255,255,1)",
                      boxShadow: "0 4px 12px rgba(15,23,42,0.18)",
                    },
                  }}
                />
              ))}
            </Box>
          )}

          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12}>
              {/* Main Title - Use actual title from data */}
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  mb: 1.5,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  lineHeight: 1.2,
                }}
              >
                {ruleData.title}
              </Typography>

              {/* Rule ID and Description */}
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexWrap: "wrap",
                }}
              >
                <Chip
                  label={ruleData.id}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    background: "rgba(103, 58, 183, 0.1)",
                    color: "#673ab7",
                    border: "1px solid rgba(103, 58, 183, 0.3)",
                    fontFamily: "monospace",
                    height: 28,
                  }}
                />
                <Chip
                  icon={<ScienceIcon />}
                  label="Engine Rule"
                  size="small"
                  sx={{
                    fontWeight: "bold",
                    background: "rgba(103, 58, 183, 0.2)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(103, 58, 183, 0.4)",
                    color: "#673ab7",
                    boxShadow: "0 2px 8px rgba(103, 58, 183, 0.2)",
                    "& .MuiChip-icon": { color: "#673ab7" },
                    height: 28,
                  }}
                />
              </Box>

              {/* Description Preview */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "#64748b",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                {ruleData.description}
              </Typography>

              {/* Key Information Chips - Most Important First */}
              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                sx={{ gap: 1.5 }}
              >
                <Chip
                  icon={<GavelIcon sx={{ color: severityColors.iconColor }} />}
                  label={`Impact: ${
                    ruleData.impact.charAt(0).toUpperCase() +
                    ruleData.impact.slice(1)
                  }`}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    background: `rgba(${
                      severityColors.textColor === "#d32f2f"
                        ? "211, 47, 47"
                        : severityColors.textColor === "#f57c00"
                        ? "245, 124, 0"
                        : severityColors.textColor === "#1976d2"
                        ? "25, 118, 210"
                        : "56, 142, 60"
                    }, 0.2)`,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: severityColors.textColor,
                    border: `1px solid ${severityColors.borderColor}40`,
                    boxShadow: `0 2px 8px ${severityColors.borderColor}30`,
                    height: 36,
                  }}
                />
                {wcagRefs.length > 0 && (
                  <Chip
                    icon={<AccessibleTwoToneIcon />}
                    label={`WCAG: ${wcagRefs
                      .map((r) => r.level)
                      .filter((v, i, a) => a.indexOf(v) === i)
                      .join(", ")} (${wcagRefs.length} criteria)`}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      background: "rgba(25, 118, 210, 0.2)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(25, 118, 210, 0.4)",
                      color: "#1976d2",
                      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.2)",
                      "& .MuiChip-icon": { color: "#1976d2" },
                      height: 36,
                    }}
                  />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Slide>

      {/* WCAG Criteria Section - Show prominently if available */}
      {wcagRefs.length > 0 && (
        <Fade in timeout={800}>
          <Paper
            elevation={0}
            sx={{
              mb: 3,
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
              <AccessibleTwoToneIcon color="primary" fontSize="large" />
              <Typography variant="h5" fontWeight="bold" color="primary">
                WCAG Compliance
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              {wcagRefs.map((ref, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      p: 2,
                      background:
                        ref.level === "A"
                          ? "rgba(76, 175, 80, 0.1)"
                          : ref.level === "AA"
                          ? "rgba(33, 150, 243, 0.1)"
                          : "rgba(156, 39, 176, 0.1)",
                      border: `2px solid ${
                        ref.level === "A"
                          ? "rgba(76, 175, 80, 0.3)"
                          : ref.level === "AA"
                          ? "rgba(33, 150, 243, 0.3)"
                          : "rgba(156, 39, 176, 0.3)"
                      }`,
                      borderRadius: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mb: 1 }}
                    >
                      <Chip
                        label={ref.level}
                        size="small"
                        sx={{
                          backgroundColor:
                            ref.level === "A"
                              ? "#4caf50"
                              : ref.level === "AA"
                              ? "#2196f3"
                              : "#9c27b0",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#1e293b" }}
                      >
                        {ref.id}
                      </Typography>
                    </Stack>
                    <Button
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewIcon />}
                      fullWidth
                      sx={{
                        textTransform: "none",
                        mt: 1,
                      }}
                    >
                      View Guideline
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>
      )}

      {/* Implementation Advice Section - Most Important */}
      <Fade in timeout={1000}>
        <Paper
          elevation={0}
          sx={{
            mb: 3,
            p: 4,
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <CodeIcon color="primary" fontSize="large" />
            <Typography variant="h5" fontWeight="bold" color="primary">
              Implementation Advice
            </Typography>
          </Stack>
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 3,
              p: 4,
              position: "relative",
              border: "2px solid rgba(34, 197, 94, 0.2)",
              boxShadow: "0 4px 16px rgba(34, 197, 94, 0.1)",
            }}
          >
            <Tooltip title={copied ? "Copied!" : "Copy advice"}>
              <IconButton
                onClick={() => handleCopy(ruleData.advice)}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: "#059669",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,1)",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease",
                }}
                size="small"
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                pr: 6,
                fontSize: "1.1rem",
                color: "#065f46",
                fontWeight: 500,
              }}
            >
              {ruleData.advice}
            </Typography>
          </Box>
        </Paper>
      </Fade>

      {/* View Examples Section */}
      <Zoom in timeout={1200}>
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
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <CheckCircleIcon color="primary" fontSize="large" />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#1e293b", mb: 0.5 }}
              >
                View Examples
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748b" }}>
                Explore successful implementations and common failures
              </Typography>
            </Box>
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Link
                to={`/engine/${ruleData.id}_success`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(56, 142, 60, 0.1) 100%)",
                    border: "2px solid rgba(76, 175, 80, 0.3)",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
                      borderColor: "rgba(76, 175, 80, 0.5)",
                    },
                  }}
                >
                  <ThumbUpIcon
                    sx={{
                      fontSize: 48,
                      color: "#4caf50",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#2e7d32",
                      mb: 1,
                    }}
                  >
                    Success Examples
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontSize: "0.9rem" }}
                  >
                    See how to implement this rule correctly
                  </Typography>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link
                to={`/engine/${ruleData.id}_failure`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    p: 3,
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(211, 47, 47, 0.1) 100%)",
                    border: "2px solid rgba(244, 67, 54, 0.3)",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(244, 67, 54, 0.3)",
                      borderColor: "rgba(244, 67, 54, 0.5)",
                    },
                  }}
                >
                  <ThumbDownIcon
                    sx={{
                      fontSize: 48,
                      color: "#f44336",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#c62828",
                      mb: 1,
                    }}
                  >
                    Failure Examples
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontSize: "0.9rem" }}
                  >
                    Learn from common mistakes and how to fix them
                  </Typography>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Zoom>

      {/* Additional References Section */}
      {otherRefs.length > 0 && (
        <Fade in timeout={1400}>
          <Paper
            elevation={0}
            sx={{
              mb: 3,
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
              <LinkIcon color="primary" fontSize="large" />
              <Typography variant="h5" fontWeight="bold" color="primary">
                Additional Resources
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              {otherRefs.map((ref, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      p: 2.5,
                      background: "rgba(124, 58, 237, 0.1)",
                      border: "2px solid rgba(124, 58, 237, 0.2)",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(124, 58, 237, 0.2)",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mb: 1.5 }}
                    >
                      <Chip
                        label={ref.type}
                        size="small"
                        sx={{
                          backgroundColor: "#7c3aed",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      />
                    </Stack>
                    <Button
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      size="small"
                      startIcon={<OpenInNewIcon />}
                      fullWidth
                      sx={{
                        textTransform: "none",
                        borderColor: "#7c3aed",
                        color: "#7c3aed",
                        "&:hover": {
                          borderColor: "#6d28d9",
                          backgroundColor: "rgba(124, 58, 237, 0.1)",
                        },
                      }}
                    >
                      View Resource
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>
      )}

      {/* Summary Footer */}
      <Slide in direction="up" timeout={1600}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(103, 58, 183, 0.1) 0%, rgba(81, 45, 168, 0.1) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "2px solid rgba(103, 58, 183, 0.2)",
            boxShadow: "0 8px 32px rgba(103, 58, 183, 0.1)",
          }}
        >
          <ScienceIcon sx={{ fontSize: 48, color: "#673ab7", mb: 2 }} />
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#673ab7" }}
          >
            Engine Rule: {formattedTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, color: "#64748b", maxWidth: "600px", mx: "auto" }}
          >
            This automated accessibility validation rule helps ensure your web
            content meets accessibility standards and provides a better
            experience for all users.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Chip
              icon={<CheckCircleIcon />}
              label="Automated Testing"
              sx={{
                fontWeight: "bold",
                background: "rgba(34, 197, 94, 0.2)",
                color: "#059669",
                border: "1px solid rgba(34, 197, 94, 0.3)",
              }}
            />
            <Chip
              icon={<AccessibleTwoToneIcon />}
              label="WCAG Compliant"
              sx={{
                fontWeight: "bold",
                background: "rgba(25, 118, 210, 0.2)",
                color: "#1976d2",
                border: "1px solid rgba(25, 118, 210, 0.3)",
              }}
            />
            <Chip
              icon={<GavelIcon />}
              label={`${
                ruleData.impact.charAt(0).toUpperCase() +
                ruleData.impact.slice(1)
              } Impact`}
              sx={{
                fontWeight: "bold",
                background: `rgba(${
                  severityColors.textColor === "#d32f2f"
                    ? "211, 47, 47"
                    : severityColors.textColor === "#f57c00"
                    ? "245, 124, 0"
                    : severityColors.textColor === "#1976d2"
                    ? "25, 118, 210"
                    : "56, 142, 60"
                }, 0.2)`,
                color: severityColors.textColor,
                border: `1px solid ${severityColors.borderColor}40`,
              }}
            />
          </Stack>
        </Paper>
      </Slide>
    </Container>
  );
}

EngineRulePage.propTypes = {
  ruleData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    advice: PropTypes.string,
    impact: PropTypes.string,
    passCondition: PropTypes.string,
    associatedDetectors: PropTypes.array,
    refs: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        id: PropTypes.string,
        level: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }),
};

export default EngineRulePage;
