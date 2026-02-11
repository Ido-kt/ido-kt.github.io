import {
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  ContentPaste as ContentPasteIcon,
  Description as DescriptionIcon,
  ExpandMore as ExpandMoreIcon,
  Info as InfoIcon,
  Link as LinkIcon,
  OpenInNew as OpenInNewIcon,
  Security as SecurityIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  ThumbUpAlt as ThumbUpAltIcon,
} from "@mui/icons-material";
import AccessibleTwoToneIcon from "@mui/icons-material/AccessibleTwoTone";
import GavelTwoToneIcon from "@mui/icons-material/GavelTwoTone";
import LocalLibraryTwoToneIcon from "@mui/icons-material/LocalLibraryTwoTone";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DOMPurify from "dompurify";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-okaidia.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newEngineMapping from "../../data/engine-rule-mapping";
import legacyEngineMapping from "../../data/legacy-engine-mapping";
import SimpleBreadcrumbs from "../util/BreadCrumb";

function ModernItemPage({ ruleData }) {
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    details: false,
    resolution: true,
    documentation: false,
    json: false,
  });

  const handleCopy = async () => {
    try {
      const jsonData = `{
  "shortTextMarkdown": "New rule updated",
  "bodyMarkdown": "**${
    ruleData.name
  }** detection has been updated and may affect the number of issues found in your audit.",
  "ctaLink": "rules/${ruleData._id?.$oid || "rule-id"}"
}`;
      await navigator.clipboard.writeText(jsonData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSectionToggle = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [ruleData, expandedSections]);

  if (!ruleData) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
          <Alert
            severity="info"
            sx={{
              mb: 3,
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              borderRadius: 3,
            }}
          >
            <AlertTitle>No Rule Data Found</AlertTitle>
            The requested accessibility rule could not be loaded. Please check
            the URL or try again.
          </Alert>
          <Typography variant="h6" sx={{ color: "#64748b" }}>
            No accessibility rule data available
          </Typography>
        </Paper>
      </Container>
    );
  }

  const sanitizedHtml = DOMPurify.sanitize(ruleData.issueResolution);

  // Function to determine severity chip colors
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "extreme":
        return {
          textColor: "#d32f2f", // Red
          borderColor: "#d32f2f",
          iconColor: "#d32f2f",
        };
      case "high":
        return {
          textColor: "#f57c00", // Orange
          borderColor: "#f57c00",
          iconColor: "#f57c00",
        };
      case "medium":
        return {
          textColor: "#1976d2", // Blue
          borderColor: "#1976d2",
          iconColor: "#1976d2",
        };
      case "low":
        return {
          textColor: "#388e3c", // Green
          borderColor: "#388e3c",
          iconColor: "#388e3c",
        };
      default:
        return {
          textColor: "grey",
          borderColor: "grey",
          iconColor: "grey",
        };
    }
  };

  const severityColors = getSeverityColor(ruleData.severity);
  const legacyRules =
    (ruleData.shortCode && legacyEngineMapping[ruleData.shortCode]) || [];
  const newRuleName =
    ruleData.shortCode && newEngineMapping[ruleData.shortCode];
  const newRules = newRuleName
    ? newRuleName.split(", ").map((name) => ({
        path: `/engine/${name.trim()}`,
        label: name.trim(),
      }))
    : [];

  // Deduplicate related engine rules by normalized label (remove "(Engine rule)" suffix for comparison)
  const allRules = [...legacyRules, ...newRules];
  const seen = new Set();
  const relatedEngineRules = allRules.filter((rule) => {
    const normalizedLabel = rule.label
      .replace(/\s*\(Engine rule\)\s*/gi, "")
      .toLowerCase();
    if (seen.has(normalizedLabel)) {
      return false;
    }
    seen.add(normalizedLabel);
    return true;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header Section */}
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
        <SimpleBreadcrumbs />
        <Divider sx={{ my: 2 }} />

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
          <AlertTitle sx={{ fontWeight: "bold", color: "#1e293b" }}>
            Accessibility Rule Details
          </AlertTitle>
          <Typography variant="body1" sx={{ color: "#64748b" }}>
            Complete information about this accessibility rule, including
            criteria, severity, and implementation guidance.
          </Typography>
        </Alert>

        {/* Related engine rules (if mapping exists) */}
        {relatedEngineRules.length > 0 && (
          <Box
            sx={{
              mb: 3,
              p: 2.5,
              borderRadius: 3,
              background: "rgba(248, 250, 252, 0.85)",
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
              Related engine rule{relatedEngineRules.length > 1 ? "s" : ""}:
            </Typography>
            {relatedEngineRules.map((engine) => (
              <Chip
                key={engine.path}
                component={Link}
                to={engine.path}
                clickable
                label={engine.label}
                icon={<GavelTwoToneIcon sx={{ fontSize: 18 }} />}
                sx={{
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 0.5,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(148,163,184,0.5)",
                  color: "#111827",
                  "& .MuiChip-icon": {
                    color: "#4f46e5",
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
            {/* Main Title */}
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{
                mb: 1.5,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                lineHeight: 1.2,
              }}
            >
              {ruleData.name}
            </Typography>

            {/* Short Description */}
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
              {ruleData.shortDescription}
            </Typography>

            {/* Enhanced Chips Section - Most Important First */}
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ gap: 1.5, mb: 3 }}
            >
              <Chip
                icon={
                  <GavelTwoToneIcon sx={{ color: severityColors.iconColor }} />
                }
                label={`Severity: ${
                  ruleData.severity.charAt(0).toUpperCase() +
                  ruleData.severity.slice(1)
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
              <Chip
                icon={<AccessibleTwoToneIcon />}
                label={`WCAG: ${ruleData.WCAGLevel}`}
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
              <Chip
                icon={<LocalLibraryTwoToneIcon />}
                label={`Criteria: ${
                  ruleData.criteria.charAt(0).toUpperCase() +
                  ruleData.criteria.slice(1)
                }`}
                sx={{
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                  background: "rgba(255, 193, 7, 0.2)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 193, 7, 0.4)",
                  color: "#f57c00",
                  boxShadow: "0 2px 8px rgba(255, 193, 7, 0.2)",
                  "& .MuiChip-icon": { color: "#f57c00" },
                  height: 36,
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Rule Description Section - Prominently Displayed */}
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
          <DescriptionIcon color="primary" fontSize="large" />
          <Typography variant="h5" fontWeight="bold" color="primary">
            Rule Description
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
          {ruleData.issueDescription}
        </Typography>
      </Paper>

      {/* WCAG Documentation Section - Prominently Displayed */}
      {ruleData.issueWCAGLink && (
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
            <LinkIcon color="primary" fontSize="large" />
            <Typography variant="h5" fontWeight="bold" color="primary">
              WCAG Documentation
            </Typography>
          </Stack>
          <Card
            sx={{
              p: 3,
              background:
                "linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(21, 101, 192, 0.1) 100%)",
              border: "2px solid rgba(25, 118, 210, 0.2)",
              borderRadius: 3,
              boxShadow: "0 4px 16px rgba(25, 118, 210, 0.1)",
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, color: "#475569" }}
              >
                Official WCAG Reference:
              </Typography>
              <Button
                href={ruleData.issueWCAGLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<OpenInNewIcon />}
                sx={{
                  textTransform: "none",
                  backgroundColor: "#1976d2",
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
              >
                View WCAG Guidelines
              </Button>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  wordBreak: "break-all",
                  fontFamily: "monospace",
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                {ruleData.issueWCAGLink}
              </Typography>
            </Stack>
          </Card>
        </Paper>
      )}

      {/* Issue Resolution Section - Prominently Displayed */}
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
            Issue Resolution
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
            position: "relative",
            border: "2px solid rgba(34, 197, 94, 0.2)",
            boxShadow: "0 4px 16px rgba(34, 197, 94, 0.1)",
          }}
        >
          <Tooltip title={copied ? "Copied!" : "Copy resolution code"}>
            <IconButton
              onClick={() =>
                navigator.clipboard.writeText(ruleData.issueResolution)
              }
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
              <ContentPasteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box
            sx={{
              background: "rgba(30, 30, 30, 0.95)",
              borderRadius: 2,
              p: 2,
              maxHeight: "400px",
              overflow: "auto",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <pre
              style={{
                margin: 0,
                color: "#f8f8f2",
                fontSize: "0.875rem",
                lineHeight: 1.5,
              }}
            >
              <code
                className="language-html"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </pre>
          </Box>
        </Box>
      </Paper>

      {/* View Examples Section - Modern Card Design */}
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
              to={`/${ruleData.criteria}/${ruleData.route}_success`}
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
                <ThumbUpAltIcon
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
              to={`/${ruleData.criteria}/${ruleData.route}_failure`}
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
                <ThumbDownAltIcon
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

      {/* Rule Release JSON Section */}
      <Accordion
        expanded={expandedSections.json}
        onChange={() => handleSectionToggle("json")}
        sx={{
          mb: 2,
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          borderRadius: 3,
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <SecurityIcon color="primary" />
            <Typography variant="h6">Rule Release JSON</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              background: "rgba(30, 30, 30, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 3,
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Tooltip title={copied ? "Copied!" : "Copy JSON to clipboard"}>
              <IconButton
                onClick={handleCopy}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  zIndex: 1,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
                size="small"
              >
                <ContentPasteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <pre
              style={{
                margin: 0,
                padding: "16px",
                color: "#f8f8f2",
                fontSize: "0.875rem",
                overflow: "auto",
              }}
            >
              <code className="language-json">
                {`{
  "shortTextMarkdown": "New rule updated",
  "bodyMarkdown": "**${
    ruleData.name
  }** detection has been updated and may affect the number of issues found in your audit.",
  "ctaLink": "rules/${ruleData._id?.$oid || "rule-id"}"
}`}
              </code>
            </pre>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

// PropTypes for better development experience
ModernItemPage.propTypes = {
  ruleData: PropTypes.shape({
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    issueDescription: PropTypes.string,
    criteria: PropTypes.string,
    severity: PropTypes.string,
    WCAGLevel: PropTypes.string,
    issueWCAGLink: PropTypes.string,
    issueResolution: PropTypes.string,
    route: PropTypes.string,
    _id: PropTypes.shape({
      $oid: PropTypes.string,
    }),
  }),
};

// Default props
ModernItemPage.defaultProps = {
  ruleData: null,
};

export default ModernItemPage;
