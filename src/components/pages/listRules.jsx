import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Box,
  Chip,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Skeleton,
  LinearProgress,
  Paper,
  Fade
} from '@mui/material';
import {
  Search,
  CheckCircle,
  Error,
  Warning,
  Info,
  Launch,
  Speed,
  Star,
  Assessment
} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { DataService } from "../util/dataService";
import SimpleBreadcrumbs from "../layout/CustomizedBreadCrumbs";

const transformInput = (str) => {
  if (!str || typeof str !== 'string') {
    return 'Unknown';
  }
  return str
    .split(/[_\s]+/)
    .map(word => word && word.charAt(0) ? word.charAt(0).toUpperCase() + word.slice(1) : '')
    .filter(word => word.length > 0)
    .join(' ') || 'Unknown';
};

// Helper function for category colors and icons
const getCategoryConfig = (category) => {
  const configs = {
    'Graphics': { color: '#4caf50', bgColor: '#e8f5e8', icon: '🎨' },
    'Forms': { color: '#2196f3', bgColor: '#e3f2fd', icon: '📝' },
    'Keyboard': { color: '#ff9800', bgColor: '#fff3e0', icon: '⌨️' },
    'Navigation': { color: '#9c27b0', bgColor: '#f3e5f5', icon: '🧭' },
    'Headings': { color: '#f44336', bgColor: '#ffebee', icon: '📰' },
    'Errors': { color: '#607d8b', bgColor: '#eceff1', icon: '⚠️' },
    'Document': { color: '#795548', bgColor: '#efebe9', icon: '📄' },
    'Clickables': { color: '#e91e63', bgColor: '#fce4ec', icon: '👆' },
    'Context': { color: '#00bcd4', bgColor: '#e0f2f1', icon: '🔍' },
    'Readability': { color: '#cddc39', bgColor: '#f9fbe7', icon: '👀' },
    'Tables': { color: '#3f51b5', bgColor: '#e8eaf6', icon: '📊' },
    'Carousels': { color: '#ff5722', bgColor: '#fbe9e7', icon: '🎠' }
  };
  return configs[category] || { color: '#666', bgColor: '#f5f5f5', icon: '📋' };
};

const List = ({ filters: propFilters, sorters: propSorters, embedded = false }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log('Fetched data:', result);
        console.log('Data length:', result.length);
        setData(result);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data ? data.filter(item => {
    // Safety check for required properties
    if (!item || !item.criteria || !item.name) {
      console.log('Filtered out item due to missing properties:', item);
      return false;
    }

    // Apply propFilters if they exist
    const matchesPropFilters = propFilters && propFilters.length > 0 
      ? propFilters.every(filter => {
          if (filter.property === "criteria" && filter.value) {
            return item.criteria.toLowerCase().includes(filter.value.toLowerCase());
          }
          if (filter.property === "enabled") {
            const matches = item.enabled === filter.value;
            console.log(`Enabled filter: item.enabled=${item.enabled}, filter.value=${filter.value}, matches=${matches}`);
            return matches;
          }
          return true;
        })
      : true;

    // Apply local search and category filters
    const matchesSearch = searchTerm === "" || 
      (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.shortDescription && item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.criteria && item.criteria.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
      (item.criteria && item.criteria.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const result = matchesPropFilters && matchesSearch && matchesCategory;
    if (!result) {
      console.log('Item filtered out:', {
        name: item.name,
        enabled: item.enabled,
        matchesPropFilters,
        matchesSearch,
        matchesCategory
      });
    }
    return result;
  }) : [];

  console.log('Final filtered data length:', filteredData.length);
  console.log('PropFilters:', propFilters);

  const categories = data ? [...new Set(data
    .filter(item => item && item.criteria && typeof item.criteria === 'string')
    .map(item => transformInput(item.criteria.split('/')[0])))] : [];

  if (loading) {
    return (
      <Container sx={{ mt: 4, mb: 4 }}>
        <Box display="flex" justifyContent="center">
          <Paper 
            sx={{ 
              p: 4, 
              textAlign: 'center', 
              borderRadius: 4, 
              minWidth: 500,
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Glass Skeleton Placeholders */}
            <Box sx={{ mb: 4 }}>
              {[...Array(3)].map((_, i) => (
                <Box 
                  key={i}
                  sx={{
                    height: 60,
                    mb: 2,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                      animation: 'glass-skeleton-shimmer 2s infinite'
                    },
                    '@keyframes glass-skeleton-shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' }
                    }
                  }}
                />
              ))}
            </Box>

            {/* Loading Title with Glass Typography */}
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Loading QA Rules...
            </Typography>

            {/* Subtitle */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(30, 41, 59, 0.7)',
                mb: 3,
                fontWeight: 500
              }}
            >
              Preparing accessibility testing rules for your review
            </Typography>

            {/* Glass Loading Dots */}
            <Box 
              className="glass-loading-dots"
              sx={{ 
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mb: 3
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(167, 139, 250, 0.8) 100%)',
                    animation: 'glass-loading-wave 1.4s ease-in-out infinite both',
                    animationDelay: `${i * 0.16}s`,
                    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
                    '@keyframes glass-loading-wave': {
                      '0%, 60%, 100%': {
                        transform: 'initial',
                        opacity: 1
                      },
                      '30%': {
                        transform: 'translateY(-15px)',
                        opacity: 0.7
                      }
                    }
                  }}
                />
              ))}
            </Box>

            {/* Enhanced Glass Progress Bar */}
            <Box sx={{ position: 'relative', width: '100%' }}>
              <LinearProgress 
                sx={{ 
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.9) 0%, rgba(167, 139, 250, 0.9) 50%, rgba(59, 130, 246, 0.9) 100%)',
                    borderRadius: 3,
                    boxShadow: '0 0 15px rgba(102, 126, 234, 0.4)',
                    position: 'relative'
                  },
                  '& .MuiLinearProgress-bar::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    borderRadius: 'inherit',
                    animation: 'shimmer-progress 2s infinite'
                  },
                  '@keyframes shimmer-progress': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                  }
                }}
              />
            </Box>

            {/* Loading Stats */}
            <Box sx={{ 
              mt: 3, 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2,
              flexWrap: 'wrap'
            }}>
              <Box sx={{ 
                px: 2, 
                py: 1, 
                borderRadius: 2,
                background: 'rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                  Fetching Rules
                </Typography>
              </Box>
              <Box sx={{ 
                px: 2, 
                py: 1, 
                borderRadius: 2,
                background: 'rgba(33, 150, 243, 0.1)',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <Typography variant="caption" sx={{ color: '#1976d2', fontWeight: 600 }}>
                  Processing Data
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4, mb: 4 }}>
        <Alert 
          severity="error" 
          sx={{ 
            borderRadius: 3,
            background: 'rgba(244, 67, 54, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(244, 67, 54, 0.3)',
            boxShadow: '0 8px 32px rgba(244, 67, 54, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#d32f2f', fontWeight: 600 }}>
            Error Loading Rules
          </Typography>
          <Typography variant="body2" sx={{ color: '#c62828' }}>
            {error}
          </Typography>
        </Alert>
      </Container>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Container sx={{ mt: 4, mb: 4 }}>
        <Alert 
          severity="info" 
          sx={{ 
            borderRadius: 3,
            background: 'rgba(33, 150, 243, 0.1)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(33, 150, 243, 0.3)',
            boxShadow: '0 8px 32px rgba(33, 150, 243, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
            No Rules Available
          </Typography>
          <Typography variant="body2" sx={{ color: '#1565c0' }}>
            No rules data could be loaded at this time.
          </Typography>
        </Alert>
      </Container>
    );
  }

  const renderSearchAndFilters = () => (
    <Box 
      sx={{ 
        p: 3, 
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search rules by name, description, or criteria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search sx={{ mr: 1, color: 'rgba(102, 126, 234, 0.7)' }} />,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: 3,
                '& fieldset': {
                  border: 'none'
                },
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                },
                '&.Mui-focused': {
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)'
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel 
              sx={{ 
                color: 'rgba(30, 41, 59, 0.7)',
                '&.Mui-focused': {
                  color: 'rgba(102, 126, 234, 0.9)'
                }
              }}
            >
              Filter by Category
            </InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Filter by Category"
              sx={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: 3,
                '& fieldset': {
                  border: 'none'
                },
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                },
                '&.Mui-focused': {
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)'
                }
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categories.map(category => (
                <MenuItem key={category} value={category.toLowerCase()}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      {filteredData.length > 0 && (
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Chip 
            label={`${filteredData.length} rules found`}
            sx={{ 
              fontWeight: 600,
              background: 'rgba(102, 126, 234, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              color: '#667eea',
              '&:hover': {
                background: 'rgba(102, 126, 234, 0.2)'
              }
            }}
          />
          {searchTerm && (
            <Chip 
              label={`Search: "${searchTerm}"`}
              onDelete={() => setSearchTerm('')}
              sx={{
                background: 'rgba(156, 39, 176, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(156, 39, 176, 0.3)',
                color: '#9c27b0',
                '&:hover': {
                  background: 'rgba(156, 39, 176, 0.2)'
                },
                '& .MuiChip-deleteIcon': {
                  color: '#9c27b0'
                }
              }}
            />
          )}
          {selectedCategory !== 'all' && (
            <Chip 
              label={`Category: ${selectedCategory}`}
              onDelete={() => setSelectedCategory('all')}
              sx={{
                background: 'rgba(33, 150, 243, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                color: '#2196f3',
                '&:hover': {
                  background: 'rgba(33, 150, 243, 0.2)'
                },
                '& .MuiChip-deleteIcon': {
                  color: '#2196f3'
                }
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );

  const renderRulesList = () => {
    console.log('renderRulesList called, filteredData.length:', filteredData.length);
    return (
      <Box sx={{ p: 3 }}>
        {filteredData.length === 0 ? (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 6,
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 3,
            mx: 2
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: 'rgba(30, 41, 59, 0.8)', fontWeight: 600 }}>
            No rules match your current filters
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(30, 41, 59, 0.6)', mb: 3 }}>
            Try adjusting your search terms or category filters
          </Typography>
          {(searchTerm || selectedCategory !== 'all') && (
            <Button 
              variant="outlined" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              sx={{ 
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(102, 126, 234, 0.4)',
                color: '#667eea',
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(102, 126, 234, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.6)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)'
                }
              }}
            >
              Clear All Filters
            </Button>
          )}
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredData.map((rule, index) => {
            // Safety checks for rule properties
            if (!rule || !rule.id || !rule.criteria || !rule.name) {
              return null;
            }
            
            const categoryFormatted = transformInput(rule.criteria.split('/')[0]);
            const categoryConfig = getCategoryConfig(categoryFormatted);
            
            return (
              <Grid item xs={12} sm={6} lg={4} key={rule.id}>
                <Fade in timeout={300 + index * 100}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: `1px solid rgba(255, 255, 255, 0.3)`,
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        background: 'rgba(255, 255, 255, 0.5)',
                        boxShadow: `0 20px 40px rgba(0,0,0,0.15), 0 0 0 2px ${categoryConfig.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                        border: `1px solid ${categoryConfig.color}60`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${categoryConfig.color} 0%, ${categoryConfig.color}80 100%)`,
                        borderRadius: '4px 4px 0 0'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      {/* Header with Category and Impact */}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start', 
                        mb: 2 
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 32, 
                            height: 32, 
                            borderRadius: 2, 
                            backgroundColor: categoryConfig.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px'
                          }}>
                            {categoryConfig.icon}
                          </Box>
                          <Chip 
                            label={categoryFormatted}
                            size="small"
                            sx={{
                              backgroundColor: categoryConfig.color,
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              '& .MuiChip-label': { px: 1.5 }
                            }}
                          />
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          {(() => {
                            const severity = rule.impact || rule.severity || 'medium';
                            const normalizedSeverity = severity.toLowerCase();
                            
                            if (normalizedSeverity.includes('critical') || normalizedSeverity.includes('high')) {
                              return <Error sx={{ color: '#d32f2f', fontSize: 20 }} />;
                            } else if (normalizedSeverity.includes('serious') || normalizedSeverity.includes('medium')) {
                              return <Warning sx={{ color: '#ed6c02', fontSize: 20 }} />;
                            } else if (normalizedSeverity.includes('moderate') || normalizedSeverity.includes('low')) {
                              return <Info sx={{ color: '#0288d1', fontSize: 20 }} />;
                            } else {
                              return <CheckCircle sx={{ color: '#2e7d32', fontSize: 20 }} />;
                            }
                          })()}
                          <Chip 
                            label={(rule.impact || rule.severity || 'medium').toUpperCase()}
                            size="small"
                            color={(() => {
                              const severity = (rule.impact || rule.severity || 'medium').toLowerCase();
                              if (severity.includes('critical') || severity.includes('high')) return 'error';
                              if (severity.includes('serious') || severity.includes('medium')) return 'warning';
                              if (severity.includes('moderate') || severity.includes('low')) return 'info';
                              return 'success';
                            })()}
                            sx={{ 
                              fontSize: '0.65rem', 
                              fontWeight: 700,
                              minHeight: 24
                            }}
                          />
                        </Box>
                      </Box>

                      {/* Title */}
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          lineHeight: 1.3,
                          color: '#1a202c',
                          mb: 2,
                          fontSize: '1.1rem'
                        }}
                      >
                        {rule.name}
                      </Typography>

                      {/* Description */}
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 3,
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '0.9rem'
                        }}
                      >
                        {rule.shortDescription}
                      </Typography>

                      {/* Rule Metadata */}
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        p: 2,
                        bgcolor: 'rgba(255,255,255,0.7)',
                        borderRadius: 2,
                        mb: 2,
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Assessment sx={{ fontSize: 16, color: categoryConfig.color }} />
                          <Typography variant="caption" sx={{ fontWeight: 600, color: '#4a5568' }}>
                            ID: {rule.id}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Star sx={{ fontSize: 16, color: '#ffc107' }} />
                          <Typography variant="caption" sx={{ fontWeight: 600, color: '#4a5568' }}>
                            QA Ready
                          </Typography>
                        </Box>
                      </Box>

                      {/* Tags */}
                      {rule.tags && rule.tags.length > 0 && (
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                          {rule.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Chip 
                              key={tagIndex} 
                              label={tag} 
                              size="small" 
                              variant="outlined"
                              sx={{ 
                                fontSize: '0.65rem', 
                                height: 22,
                                borderColor: categoryConfig.color + '40',
                                color: categoryConfig.color,
                                '&:hover': {
                                  backgroundColor: categoryConfig.color + '10'
                                }
                              }}
                            />
                          ))}
                          {rule.tags.length > 3 && (
                            <Typography variant="caption" sx={{ 
                              alignSelf: 'center', 
                              color: '#718096',
                              fontWeight: 500 
                            }}>
                              +{rule.tags.length - 3} more
                            </Typography>
                          )}
                        </Box>
                      )}
                    </CardContent>

                    {/* Enhanced Action Buttons */}
                    <CardActions sx={{ 
                      p: 3, 
                      pt: 0, 
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <Button 
                        variant="contained"
                        startIcon={<Launch />}
                        component={Link}
                        to={`/${rule.criteria}/${rule.route}`}
                        sx={{ 
                          px: 4,
                          borderRadius: 2,
                          background: `linear-gradient(45deg, ${categoryConfig.color} 30%, ${categoryConfig.color}CC 90%)`,
                          fontWeight: 600,
                          '&:hover': {
                            background: `linear-gradient(45deg, ${categoryConfig.color}DD 30%, ${categoryConfig.color} 90%)`,
                            transform: 'scale(1.05)',
                            boxShadow: `0 6px 20px ${categoryConfig.color}40`
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
    );
  };

  // Embedded mode - just return the filtered rules without search/filters
  if (embedded) {
    return (
      <Box sx={{ p: 3 }}>
        {filteredData.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No rules found for this criteria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Check back later for updated rules in this category.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredData.map((rule, index) => {
              const categoryFormatted = transformInput(rule.criteria.split('/')[0]);
              const categoryConfig = getCategoryConfig(categoryFormatted);
              
              return (
                <Grid item xs={12} sm={6} lg={4} key={rule._id?.$oid || rule.id || index}>
                  <Fade in timeout={300 + index * 100}>
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px ${categoryConfig.color}20`,
                        },
                        borderRadius: 3,
                        background: `linear-gradient(145deg, #ffffff 0%, ${categoryConfig.bgColor} 100%)`,
                        border: `2px solid ${categoryConfig.color}20`,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${categoryConfig.color} 0%, ${categoryConfig.color}80 100%)`,
                        }
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 3 }}>
                        {/* Header with Category and Impact */}
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start', 
                          mb: 2 
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ 
                              width: 32, 
                              height: 32, 
                              borderRadius: 2, 
                              backgroundColor: categoryConfig.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px'
                            }}>
                              {categoryConfig.icon}
                            </Box>
                            <Chip 
                              label={categoryFormatted}
                              size="small"
                              sx={{
                                backgroundColor: categoryConfig.color,
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                '& .MuiChip-label': { px: 1.5 }
                              }}
                            />
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {(() => {
                              const severity = rule.impact || rule.severity || 'medium';
                              const normalizedSeverity = severity.toLowerCase();
                              
                              if (normalizedSeverity.includes('critical') || normalizedSeverity.includes('high')) {
                                return <Error sx={{ color: '#d32f2f', fontSize: 20 }} />;
                              } else if (normalizedSeverity.includes('serious') || normalizedSeverity.includes('medium')) {
                                return <Warning sx={{ color: '#ed6c02', fontSize: 20 }} />;
                              } else if (normalizedSeverity.includes('moderate') || normalizedSeverity.includes('low')) {
                                return <Info sx={{ color: '#0288d1', fontSize: 20 }} />;
                              } else {
                                return <CheckCircle sx={{ color: '#2e7d32', fontSize: 20 }} />;
                              }
                            })()}
                            <Chip 
                              label={(rule.impact || rule.severity || 'medium').toUpperCase()}
                              size="small"
                              color={(() => {
                                const severity = (rule.impact || rule.severity || 'medium').toLowerCase();
                                if (severity.includes('critical') || severity.includes('high')) return 'error';
                                if (severity.includes('serious') || severity.includes('medium')) return 'warning';
                                if (severity.includes('moderate') || severity.includes('low')) return 'info';
                                return 'success';
                              })()}
                              sx={{ 
                                fontSize: '0.65rem', 
                                fontWeight: 700,
                                minHeight: 24
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Title */}
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          gutterBottom 
                          sx={{ 
                            fontWeight: 700,
                            lineHeight: 1.3,
                            color: '#1a202c',
                            mb: 2,
                            fontSize: '1.1rem'
                          }}
                        >
                          {rule.name}
                        </Typography>

                        {/* Description */}
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            mb: 3,
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            fontSize: '0.9rem'
                          }}
                        >
                          {rule.shortDescription}
                        </Typography>

                        {/* Rule Metadata */}
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'space-between',
                          p: 2,
                          background: 'rgba(255, 255, 255, 0.3)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          borderRadius: 2,
                          mb: 2,
                          border: '1px solid rgba(255, 255, 255, 0.4)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Assessment sx={{ fontSize: 16, color: categoryConfig.color }} />
                            <Typography variant="caption" sx={{ fontWeight: 600, color: '#4a5568' }}>
                              ID: {rule._id?.$oid?.slice(-6) || rule.id || 'N/A'}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Star sx={{ fontSize: 16, color: '#ffc107' }} />
                            <Typography variant="caption" sx={{ fontWeight: 600, color: '#4a5568' }}>
                              QA Ready
                            </Typography>
                          </Box>
                        </Box>

                        {/* Tags */}
                        {rule.tags && rule.tags.length > 0 && (
                          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                            {rule.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Chip 
                                key={tagIndex} 
                                label={tag} 
                                size="small" 
                                variant="outlined"
                                sx={{ 
                                  fontSize: '0.65rem', 
                                  height: 22,
                                  borderColor: categoryConfig.color + '40',
                                  color: categoryConfig.color,
                                  '&:hover': {
                                    backgroundColor: categoryConfig.color + '10'
                                  }
                                }}
                              />
                            ))}
                            {rule.tags.length > 3 && (
                              <Typography variant="caption" sx={{ 
                                alignSelf: 'center', 
                                color: '#718096',
                                fontWeight: 500 
                              }}>
                                +{rule.tags.length - 3} more
                              </Typography>
                            )}
                          </Box>
                        )}
                      </CardContent>

                      {/* Enhanced Action Buttons */}
                      <CardActions sx={{ 
                        p: 3, 
                        pt: 0, 
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <Button 
                          variant="contained"
                          startIcon={<Launch />}
                          component={Link}
                          to={`/${rule.criteria}/${rule.route}`}
                          sx={{ 
                            px: 4,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${categoryConfig.color}DD 0%, ${categoryConfig.color} 100%)`,
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            fontWeight: 600,
                            boxShadow: `0 4px 16px ${categoryConfig.color}40, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${categoryConfig.color} 0%, ${categoryConfig.color}BB 100%)`,
                              transform: 'scale(1.05)',
                              boxShadow: `0 8px 24px ${categoryConfig.color}50, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </CardActions>
                    </Card>
                  </Fade>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    );
  }

  // Full page mode
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 4, 
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
      >
        {/* Header Section */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          p: 3, 
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }
        }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <SimpleBreadcrumbs />
            <Typography variant="h4" sx={{ fontWeight: 600, mt: 2, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              QA Testing Rules
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9, mt: 1, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              Browse, test, and validate accessibility rules • {data.length} total rules
            </Typography>
          </Box>
        </Box>

        {renderSearchAndFilters()}
        {renderRulesList()}
      </Paper>
    </Container>
  );
};

List.defaultProps = {
  filters: [
    { property: "criteria", value: "" },
    // Removed enabled filter to show all rules
  ],
  sorters: [
    { property: "name" },
    { property: "criteria" },
  ],
};

export default List;