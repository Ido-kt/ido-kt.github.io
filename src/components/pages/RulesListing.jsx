import React, { useState, useMemo } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Visibility as ViewIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Assignment as RuleIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomizedBreadcrumbs from '../util/ruleBreadcrumb';
import rulesData from '../../data/legacy-rules.json';

const RulesListing = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('all');
  const [criteriaFilter, setCriteriaFilter] = useState('all');
  const [wcagFilter, setWcagFilter] = useState('all');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'critical':
        return { bg: 'rgba(211, 47, 47, 0.2)', color: '#d32f2f', border: '#d32f2f' };
      case 'high':
        return { bg: 'rgba(245, 124, 0, 0.2)', color: '#f57c00', border: '#f57c00' };
      case 'medium':
        return { bg: 'rgba(25, 118, 210, 0.2)', color: '#1976d2', border: '#1976d2' };
      case 'low':
        return { bg: 'rgba(56, 142, 60, 0.2)', color: '#388e3c', border: '#388e3c' };
      default:
        return { bg: 'rgba(158, 158, 158, 0.2)', color: '#666', border: '#666' };
    }
  };

  const getWCAGColor = (level) => {
    switch (level?.toUpperCase()) {
      case 'A':
        return { bg: 'rgba(76, 175, 80, 0.2)', color: '#4caf50' };
      case 'AA':
        return { bg: 'rgba(33, 150, 243, 0.2)', color: '#2196f3' };
      case 'AAA':
        return { bg: 'rgba(156, 39, 176, 0.2)', color: '#9c27b0' };
      default:
        return { bg: 'rgba(158, 158, 158, 0.2)', color: '#666' };
    }
  };

  // Filter and search
  const filteredRules = useMemo(() => {
    let filtered = rulesData.filter(rule => rule.enabled !== false);

    // Apply severity filter
    if (severityFilter !== 'all') {
      filtered = filtered.filter(rule => rule.severity?.toLowerCase() === severityFilter.toLowerCase());
    }

    // Apply criteria filter
    if (criteriaFilter !== 'all') {
      filtered = filtered.filter(rule => rule.criteria?.toLowerCase() === criteriaFilter.toLowerCase());
    }

    // Apply WCAG filter
    if (wcagFilter !== 'all') {
      filtered = filtered.filter(rule => rule.WCAGLevel?.toUpperCase() === wcagFilter.toUpperCase());
    }

    // Apply search
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(rule =>
        rule.name?.toLowerCase().includes(search) ||
        rule.shortDescription?.toLowerCase().includes(search) ||
        rule.issueDescription?.toLowerCase().includes(search) ||
        rule.criteria?.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [severityFilter, criteriaFilter, wcagFilter, searchTerm]);

  // Sort
  const sortedRules = useMemo(() => {
    const comparator = (a, b) => {
      let aValue = a[orderBy];
      let bValue = b[orderBy];

      // Handle undefined values
      if (aValue === undefined) aValue = '';
      if (bValue === undefined) bValue = '';

      // Convert to lowercase for string comparison
      if (typeof aValue === 'string') aValue = aValue.toLowerCase();
      if (typeof bValue === 'string') bValue = bValue.toLowerCase();

      if (bValue < aValue) {
        return order === 'asc' ? 1 : -1;
      }
      if (bValue > aValue) {
        return order === 'asc' ? -1 : 1;
      }
      return 0;
    };

    return [...filteredRules].sort(comparator);
  }, [filteredRules, order, orderBy]);

  // Paginate
  const paginatedRules = useMemo(() => {
    return sortedRules.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [sortedRules, page, rowsPerPage]);

  // Get unique values for filters
  const severityCounts = useMemo(() => {
    return rulesData.reduce((acc, rule) => {
      const severity = rule.severity?.toLowerCase() || 'unknown';
      acc[severity] = (acc[severity] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const criteriaCounts = useMemo(() => {
    return rulesData.reduce((acc, rule) => {
      const criteria = rule.criteria || 'unknown';
      acc[criteria] = (acc[criteria] || 0) + 1;
      return acc;
    }, {});
  }, []);

  const wcagCounts = useMemo(() => {
    return rulesData.reduce((acc, rule) => {
      const wcag = rule.WCAGLevel?.toUpperCase() || 'NONE';
      acc[wcag] = (acc[wcag] || 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
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
        <Box sx={{ mt: 3 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <RuleIcon sx={{ fontSize: 48, color: '#1976d2' }} />
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Accessibility Rules
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ mb: 3, color: '#64748b' }}>
            Comprehensive collection of {rulesData.length} legacy accessibility validation rules
          </Typography>

          {/* Severity Distribution */}
          <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1 }}>
            {Object.entries(severityCounts).sort(([,a], [,b]) => b - a).map(([severity, count]) => {
              const colors = getSeverityColor(severity);
              return (
                <Chip
                  key={severity}
                  label={`${severity.charAt(0).toUpperCase() + severity.slice(1)}: ${count}`}
                  sx={{
                    fontWeight: 'bold',
                    background: colors.bg,
                    color: colors.color,
                    border: `1px solid ${colors.border}40`,
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      </Paper>

      {/* Filters */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          {/* Search */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name, description, or criteria..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(0);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                background: 'rgba(255, 255, 255, 0.8)',
              }
            }}
          />

          {/* Severity Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Severity</InputLabel>
            <Select
              value={severityFilter}
              label="Severity"
              onChange={(e) => {
                setSeverityFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>

          {/* Criteria Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Criteria</InputLabel>
            <Select
              value={criteriaFilter}
              label="Criteria"
              onChange={(e) => {
                setCriteriaFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <MenuItem value="all">All</MenuItem>
              {Object.keys(criteriaCounts).sort().map(criteria => (
                <MenuItem key={criteria} value={criteria}>
                  {criteria.charAt(0).toUpperCase() + criteria.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* WCAG Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>WCAG</InputLabel>
            <Select
              value={wcagFilter}
              label="WCAG"
              onChange={(e) => {
                setWcagFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="AA">AA</MenuItem>
              <MenuItem value="AAA">AAA</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Results count */}
        <Typography variant="body2" sx={{ mt: 2, color: '#64748b' }}>
          Showing {paginatedRules.length} of {filteredRules.length} rules
          {searchTerm && ` (filtered from ${rulesData.length} total)`}
        </Typography>
      </Paper>

      {/* Table */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden'
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ background: 'rgba(25, 118, 210, 0.1)' }}>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleRequestSort('name')}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">Rule Name</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">Description</Typography>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'criteria'}
                    direction={orderBy === 'criteria' ? order : 'asc'}
                    onClick={() => handleRequestSort('criteria')}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">Criteria</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'severity'}
                    direction={orderBy === 'severity' ? order : 'asc'}
                    onClick={() => handleRequestSort('severity')}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">Severity</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'WCAGLevel'}
                    direction={orderBy === 'WCAGLevel' ? order : 'asc'}
                    onClick={() => handleRequestSort('WCAGLevel')}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">WCAG</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight="bold">Actions</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRules.map((rule) => {
                const severityColors = getSeverityColor(rule.severity);
                const wcagColors = getWCAGColor(rule.WCAGLevel);

                return (
                  <TableRow
                    key={rule._id.$oid}
                    onClick={() => navigate(`/${rule.criteria}/${rule.route}`)}
                    sx={{
                      '&:hover': {
                        background: 'rgba(25, 118, 210, 0.05)',
                        cursor: 'pointer'
                      },
                      transition: 'background 0.2s'
                    }}
                  >
                    <TableCell>
                      <Typography variant="body2" fontWeight="500">
                        {rule.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          maxWidth: 400,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {rule.shortDescription}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={rule.criteria?.charAt(0).toUpperCase() + rule.criteria?.slice(1)}
                        size="small"
                        sx={{
                          background: 'rgba(25, 118, 210, 0.15)',
                          color: '#1976d2',
                          fontWeight: 'bold'
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={rule.severity?.charAt(0).toUpperCase() + rule.severity?.slice(1)}
                        size="small"
                        sx={{
                          fontWeight: 'bold',
                          background: severityColors.bg,
                          color: severityColors.color,
                          border: `1px solid ${severityColors.border}40`,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {rule.WCAGLevel && rule.WCAGLevel !== 'none' ? (
                        <Chip
                          label={rule.WCAGLevel.toUpperCase()}
                          size="small"
                          sx={{
                            fontWeight: 'bold',
                            background: wcagColors.bg,
                            color: wcagColors.color,
                          }}
                        />
                      ) : (
                        <Typography variant="body2" color="text.secondary">-</Typography>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                      >
                        <Tooltip title="View Details">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/${rule.criteria}/${rule.route}`);
                            }}
                            size="small"
                            sx={{ color: '#1976d2' }}
                          >
                            <ViewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Success Examples">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/${rule.criteria}/${rule.route}/success`);
                            }}
                            size="small"
                            sx={{ color: '#388e3c' }}
                          >
                            <SuccessIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Failure Examples">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/${rule.criteria}/${rule.route}/failure`);
                            }}
                            size="small"
                            sx={{ color: '#d32f2f' }}
                          >
                            <ErrorIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={filteredRules.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            background: 'rgba(25, 118, 210, 0.05)',
            borderTop: '1px solid rgba(25, 118, 210, 0.2)'
          }}
        />
      </Paper>
    </Container>
  );
};

export default RulesListing;

