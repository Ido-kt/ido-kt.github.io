import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Paper,
  Divider,
  Typography,
  IconButton,
  Chip,
  Box,
  Alert,
  AlertTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Stack,
  Fab,
  Button,
  Tooltip,
} from "@mui/material";
import {
  Close as CloseIcon,
  TagFaces as TagFacesIcon,
  AccessibleTwoTone as AccessibleTwoToneIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  Description as DescriptionIcon,
  Code as CodeIcon,
  Link as LinkIcon,
  OpenInNew as OpenInNewIcon,
  ContentCopy as ContentCopyIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  LocalLibrary as LocalLibraryIcon,
  Gavel as GavelIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

function ItemPage({ ruleData }) {
  const [copied, setCopied] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    resolution: true,
    documentation: false,
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ruleData.issueResolution);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSectionToggle = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case "critical":
        return {
          textColor: "#d32f2f",
          borderColor: "#d32f2f",
          iconColor: "#d32f2f",
        };
      case "high":
        return {
          textColor: "#f57c00",
          borderColor: "#f57c00",
          iconColor: "#f57c00",
        };
      case "medium":
        return {
          textColor: "#1976d2",
          borderColor: "#1976d2",
          iconColor: "#1976d2",
        };
      case "low":
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

  if (!ruleData) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            borderRadius: 4, 
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <CustomizedBreadcrumbs />
          <Divider sx={{ my: 3 }} />
          
          <Alert 
            severity="info" 
            sx={{ 
              mb: 3,
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
            }} 
            icon={<InfoIcon />}
          >
            <AlertTitle sx={{ fontWeight: 'bold' }}>
              No Rule Data Available
            </AlertTitle>
            <Typography variant="body1">
              The requested accessibility rule could not be found or is not available at this time.
            </Typography>
          </Alert>
        </Paper>
      </Container>
    );
  }

  const severityColors = getSeverityColor(ruleData.severity);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Header Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 3, 
          borderRadius: 4, 
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <CustomizedBreadcrumbs />
        <Divider sx={{ my: 3 }} />
        
        <Alert 
          severity="info" 
          sx={{ 
            mb: 3,
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
          }} 
          icon={<InfoIcon />}
        >
          <AlertTitle sx={{ fontWeight: 'bold', color: '#1e293b' }}>
            Accessibility Rule Details
          </AlertTitle>
          <Typography variant="body1" sx={{ color: '#64748b' }}>
            Complete information about this accessibility rule, including criteria, severity, and implementation guidance.
          </Typography>
        </Alert>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <Typography 
              variant="h3" 
              fontWeight="bold" 
              gutterBottom
              sx={{ 
                mb: 2,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {ruleData.name}
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: '#475569', fontWeight: 400 }}>
              {ruleData.shortDescription}
            </Typography>
            
            {/* Enhanced Chips Section */}
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1 }}>
              <Chip
                icon={<LocalLibraryIcon />}
                label={`Criteria: ${ruleData.criteria}`}
                sx={{ 
                  fontWeight: 'bold', 
                  background: 'rgba(255, 193, 7, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 193, 7, 0.4)',
                  color: '#f57c00',
                  boxShadow: '0 2px 8px rgba(255, 193, 7, 0.2)',
                  '& .MuiChip-icon': { color: '#f57c00' }
                }}
              />
              {ruleData.severity && (
                <Chip
                  icon={<GavelIcon sx={{ color: severityColors.iconColor }} />}
                  label={`Severity: ${ruleData.severity}`}
                  sx={{
                    fontWeight: 'bold',
                    background: `rgba(${severityColors.textColor === '#d32f2f' ? '211, 47, 47' : 
                      severityColors.textColor === '#f57c00' ? '245, 124, 0' :
                      severityColors.textColor === '#1976d2' ? '25, 118, 210' : '56, 142, 60'}, 0.2)`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    color: severityColors.textColor,
                    border: `1px solid ${severityColors.borderColor}40`,
                    boxShadow: `0 2px 8px ${severityColors.borderColor}30`
                  }}
                />
              )}
              <Chip
                icon={<AccessibleTwoToneIcon />}
                label={`WCAG: ${ruleData.WCAGLevel}`}
                sx={{ 
                  fontWeight: 'bold', 
                  background: 'rgba(25, 118, 210, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(25, 118, 210, 0.4)',
                  color: '#1976d2',
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.2)',
                  '& .MuiChip-icon': { color: '#1976d2' }
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* Rule Description Section */}
      <Accordion 
        expanded={expandedSections.details} 
        onChange={() => handleSectionToggle('details')}
        sx={{ 
          mb: 2, 
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          borderRadius: 3,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          '&:before': { display: 'none' }
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <DescriptionIcon color="primary" />
            <Typography variant="h6">Rule Description</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            {ruleData.issueDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* WCAG Documentation Section */}
      {ruleData.issueWCAGLink && (
        <Accordion 
          expanded={expandedSections.documentation} 
          onChange={() => handleSectionToggle('documentation')}
          sx={{ 
            mb: 2, 
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LinkIcon color="primary" />
              <Typography variant="h6">WCAG Documentation</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ 
              p: 2, 
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              borderRadius: 3,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                    Official WCAG Reference:
                  </Typography>
                  <Button
                    href={ruleData.issueWCAGLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    startIcon={<OpenInNewIcon />}
                    sx={{ textTransform: 'none' }}
                  >
                    View WCAG Guidelines
                  </Button>
                </Stack>
                <Typography variant="body2" sx={{ mt: 2, wordBreak: 'break-all', fontFamily: 'monospace' }}>
                  {ruleData.issueWCAGLink}
                </Typography>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Issue Resolution Section */}
      {ruleData.issueResolution && (
        <Accordion 
          expanded={expandedSections.resolution} 
          onChange={() => handleSectionToggle('resolution')}
          sx={{ 
            mb: 2, 
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CodeIcon color="primary" />
              <Typography variant="h6">Issue Resolution</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                background: 'rgba(30, 30, 30, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: 3,
                p: 3,
                position: 'relative',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                maxHeight: '400px',
                overflow: 'auto',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <Tooltip title={copied ? "Copied!" : "Copy resolution code"}>
                <IconButton
                  onClick={handleCopy}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                  }}
                  size="small"
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <pre style={{ margin: 0, color: '#f8f8f2', fontSize: '0.875rem', lineHeight: 1.5 }}>
                <code>
                  {ruleData.issueResolution}
                </code>
              </pre>
            </Box>
          </AccordionDetails>
        </Accordion>
      )}

      {/* Action Buttons Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          borderRadius: 4, 
          textAlign: 'center', 
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', color: '#1e293b' }}>
          View Examples
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: '#64748b' }}>
          Explore both successful implementations and common failures for this accessibility rule
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" alignItems="center">
          {ruleData.route && (
            <>
              <Link
                to={`/${ruleData.criteria}/${ruleData.route}_success`}
                style={{ textDecoration: "none" }}
              >
                <Fab
                  color="success"
                  variant="extended"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    background: 'rgba(76, 175, 80, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(76, 175, 80, 0.3)',
                    boxShadow: '0 8px 32px rgba(76, 175, 80, 0.3)',
                    fontWeight: "bold",
                    fontSize: '1rem',
                    minWidth: '180px',
                    "&:hover": {
                      background: 'rgba(56, 142, 60, 0.9)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(76, 175, 80, 0.4)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <ThumbUpIcon sx={{ mr: 1 }} />
                  Success Examples
                </Fab>
              </Link>
              <Link
                to={`/${ruleData.criteria}/${ruleData.route}_failure`}
                style={{ textDecoration: "none" }}
              >
                <Fab
                  color="error"
                  variant="extended"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    background: 'rgba(244, 67, 54, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(244, 67, 54, 0.3)',
                    boxShadow: '0 8px 32px rgba(244, 67, 54, 0.3)',
                    fontWeight: "bold",
                    fontSize: '1rem',
                    minWidth: '180px',
                    "&:hover": {
                      background: 'rgba(211, 47, 47, 0.9)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(244, 67, 54, 0.4)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <ThumbDownIcon sx={{ mr: 1 }} />
                  Failure Examples
                </Fab>
              </Link>
            </>
          )}
        </Stack>
      </Paper>
    </Container>
  );
}

export default ItemPage;
