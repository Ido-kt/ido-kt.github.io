import React, { useState, useMemo } from "react";
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
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircleOutline as SuccessIcon,
  ContentCopy as CopyIcon,
  Info as InfoIcon,
  CheckCircle as CheckIcon,
  Code as CodeIcon,
  Lightbulb as LightbulbIcon,
} from "@mui/icons-material";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

const IssueSuccess = ({ itemContent, itemDescription, helpText, bestPractices }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyCode = async (content, index) => {
    try {
      // Extract text content from React elements
      const textContent = typeof content === 'string' ? content : 
        content?.props?.children || 'Content not available';
      
      await navigator.clipboard.writeText(textContent);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy content:', err);
    }
  };

  const renderSuccessExample = (content, index) => {
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
            <Stack direction="row" alignItems="center" spacing={1}>
              <SuccessIcon sx={{ color: '#4caf50', fontSize: 20 }} />
              <Typography 
                id={`success-example-${index}`}
                variant="subtitle2" 
                sx={{ fontWeight: 600, color: '#4caf50' }}
              >
                Success Example #{index + 1}
              </Typography>
              <Chip 
                label="Best Practice" 
                size="small" 
                color="success" 
                variant="outlined"
                icon={<CheckIcon />}
              />
            </Stack>
            <Tooltip title={copiedIndex === index ? "Copied!" : "Copy example code"}>
              <IconButton 
                size="small" 
                onClick={() => handleCopyCode(content, index)}
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
          
          <Box 
            sx={{ 
              p: 2, 
              background: 'rgba(76, 175, 80, 0.05)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(76, 175, 80, 0.2)',
              borderRadius: 2,
              position: 'relative',
              '& .list-item': {
                border: '1px solid rgba(76, 175, 80, 0.3)',
                background: 'rgba(76, 175, 80, 0.08)',
                margin: '8px 0',
                padding: '12px',
                borderRadius: '8px',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)'
              }
            }}
          >
            {content}
          </Box>
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
      const listItems = children.filter(child => 
        React.isValidElement(child) && 
        child.props.className && 
        child.props.className.includes('list-item')
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
                  Accessibility Success Examples
                </AlertTitle>
                <Typography variant="body1" sx={{ mt: 1, color: '#388e3c' }}>
                  {itemDescription}
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
                  label={`${examples.length} Example${examples.length !== 1 ? 's' : ''}`} 
                  variant="outlined" 
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Help and Best Practices Section */}
      {(helpText || bestPractices) && (
        <Container sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Accordion
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
                  {helpText && (
                    <Typography paragraph sx={{ mb: 2 }}>
                      {helpText}
                    </Typography>
                  )}
                  {bestPractices && (
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
      )}

      {/* Success Examples Section */}
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
                  Success Examples
                </Typography>
              </Stack>
              
              <Typography 
                variant="body2" 
                sx={{ mb: 3, color: '#666' }}
              >
                The following examples demonstrate proper accessibility implementation. 
                These patterns show how to create inclusive and compliant code.
              </Typography>
              
              <Divider sx={{ mb: 3 }} />

              <Box role="region" aria-label="Success examples list">
                {examples.length > 0 ? (
                  examples.map((example, index) => renderSuccessExample(example, index))
                ) : (
                  <Alert severity="info" icon={<InfoIcon />}>
                    No success examples available for this rule.
                  </Alert>
                )}
              </Box>

              {examples.length > 0 && (
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
    </>
  );
};

// PropTypes for better development experience
IssueSuccess.propTypes = {
  itemContent: PropTypes.node.isRequired,
  itemDescription: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  bestPractices: PropTypes.arrayOf(PropTypes.string),
};

// Default props for optional parameters
IssueSuccess.defaultProps = {
  helpText: null,
  bestPractices: null,
};

export default IssueSuccess;
