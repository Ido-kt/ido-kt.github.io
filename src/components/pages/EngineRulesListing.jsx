import {
  Error as ErrorIcon,
  Science as ScienceIcon,
  Search as SearchIcon,
  CheckCircle as SuccessIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import engineRulesData from "../../data/engine-rules-metadata.json";
import legacyEngineMapping from "../../data/legacy-engine-mapping";
import CustomizedBreadcrumbs from "../util/ruleBreadcrumb";

const EngineRulesListing = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [impactFilter, setImpactFilter] = useState("all");
  const [wcagLevelFilter, setWcagLevelFilter] = useState("all");
  const [wcagCriteriaFilter, setWcagCriteriaFilter] = useState("all");
  const [legacyRuleFilter, setLegacyRuleFilter] = useState("all");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const getSeverityColor = (impact) => {
    switch (impact?.toLowerCase()) {
      case "critical":
        return {
          bg: "rgba(211, 47, 47, 0.2)",
          color: "#d32f2f",
          border: "#d32f2f",
        };
      case "serious":
        return {
          bg: "rgba(245, 124, 0, 0.2)",
          color: "#f57c00",
          border: "#f57c00",
        };
      case "moderate":
        return {
          bg: "rgba(25, 118, 210, 0.2)",
          color: "#1976d2",
          border: "#1976d2",
        };
      case "minor":
        return {
          bg: "rgba(56, 142, 60, 0.2)",
          color: "#388e3c",
          border: "#388e3c",
        };
      default:
        return {
          bg: "rgba(158, 158, 158, 0.2)",
          color: "#666",
          border: "#666",
        };
    }
  };

  // Helper function to check if an engine rule has a legacy equivalent
  const hasLegacyEquivalent = (ruleId) => {
    return Object.values(legacyEngineMapping).some((legacyRules) =>
      legacyRules.some((legacyRule) => legacyRule.id === ruleId)
    );
  };

  // Filter and search
  const filteredRules = useMemo(() => {
    let filtered = engineRulesData;

    // Apply impact filter
    if (impactFilter !== "all") {
      filtered = filtered.filter(
        (rule) => rule.impact.toLowerCase() === impactFilter.toLowerCase()
      );
    }

    // Apply WCAG level filter
    if (wcagLevelFilter !== "all") {
      filtered = filtered.filter((rule) => {
        const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
        return wcagRefs.some(
          (ref) => ref.level?.toUpperCase() === wcagLevelFilter.toUpperCase()
        );
      });
    }

    // Apply WCAG criteria filter
    if (wcagCriteriaFilter !== "all") {
      filtered = filtered.filter((rule) => {
        const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
        return wcagRefs.some((ref) => ref.id === wcagCriteriaFilter);
      });
    }

    // Apply legacy rule equivalent filter
    if (legacyRuleFilter !== "all") {
      filtered = filtered.filter((rule) => {
        const hasLegacy = hasLegacyEquivalent(rule.id);
        return legacyRuleFilter === "yes" ? hasLegacy : !hasLegacy;
      });
    }

    // Apply search
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (rule) =>
          rule.id.toLowerCase().includes(search) ||
          rule.title.toLowerCase().includes(search) ||
          rule.description.toLowerCase().includes(search) ||
          rule.advice.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [
    impactFilter,
    wcagLevelFilter,
    wcagCriteriaFilter,
    legacyRuleFilter,
    searchTerm,
  ]);

  // Sort
  const sortedRules = useMemo(() => {
    const comparator = (a, b) => {
      let aValue = a[orderBy];
      let bValue = b[orderBy];

      // Handle undefined values
      if (aValue === undefined) aValue = "";
      if (bValue === undefined) bValue = "";

      // Convert to lowercase for string comparison
      if (typeof aValue === "string") aValue = aValue.toLowerCase();
      if (typeof bValue === "string") bValue = bValue.toLowerCase();

      if (bValue < aValue) {
        return order === "asc" ? 1 : -1;
      }
      if (bValue > aValue) {
        return order === "asc" ? -1 : 1;
      }
      return 0;
    };

    return [...filteredRules].sort(comparator);
  }, [filteredRules, order, orderBy]);

  // Paginate
  const paginatedRules = useMemo(() => {
    return sortedRules.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedRules, page, rowsPerPage]);

  // Impact distribution
  const impactCounts = useMemo(() => {
    return engineRulesData.reduce((acc, rule) => {
      const impact = rule.impact.toLowerCase();
      acc[impact] = (acc[impact] || 0) + 1;
      return acc;
    }, {});
  }, []);

  // Get unique WCAG levels
  const wcagLevels = useMemo(() => {
    const levels = new Set();
    engineRulesData.forEach((rule) => {
      const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
      wcagRefs.forEach((ref) => {
        if (ref.level) {
          levels.add(ref.level.toUpperCase());
        }
      });
    });
    return Array.from(levels).sort();
  }, []);

  // Get unique WCAG criteria IDs
  const wcagCriteriaIds = useMemo(() => {
    const criteria = new Set();
    engineRulesData.forEach((rule) => {
      const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
      wcagRefs.forEach((ref) => {
        if (ref.id) {
          criteria.add(ref.id);
        }
      });
    });
    return Array.from(criteria).sort((a, b) => {
      // Sort numerically if possible (e.g., "1.1.1" < "2.4.1")
      const aParts = a.split(".").map(Number);
      const bParts = b.split(".").map(Number);
      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aVal = aParts[i] || 0;
        const bVal = bParts[i] || 0;
        if (aVal !== bVal) {
          return aVal - bVal;
        }
      }
      return a.localeCompare(b);
    });
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
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CustomizedBreadcrumbs />
        <Box sx={{ mt: 3 }}>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <ScienceIcon sx={{ fontSize: 48, color: "#673ab7" }} />
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engine Rules
            </Typography>
          </Stack>

          <Typography variant="body1" sx={{ mb: 3, color: "#64748b" }}>
            Comprehensive collection of {engineRulesData.length} automated
            accessibility validation rules
          </Typography>

          {/* Impact Distribution */}
          <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 1 }}>
            {Object.entries(impactCounts)
              .sort(([, a], [, b]) => b - a)
              .map(([impact, count]) => {
                const colors = getSeverityColor(impact);
                return (
                  <Chip
                    key={impact}
                    label={`${
                      impact.charAt(0).toUpperCase() + impact.slice(1)
                    }: ${count}`}
                    sx={{
                      fontWeight: "bold",
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
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {/* Search */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by ID, title, description, or advice..."
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
              "& .MuiOutlinedInput-root": {
                background: "rgba(255, 255, 255, 0.8)",
              },
            }}
          />

          {/* Impact Filter */}
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter by Impact</InputLabel>
            <Select
              value={impactFilter}
              label="Filter by Impact"
              onChange={(e) => {
                setImpactFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <MenuItem value="all">All Impacts</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
              <MenuItem value="serious">Serious</MenuItem>
              <MenuItem value="moderate">Moderate</MenuItem>
              <MenuItem value="minor">Minor</MenuItem>
            </Select>
          </FormControl>

          {/* WCAG Level Filter */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>WCAG Level</InputLabel>
            <Select
              value={wcagLevelFilter}
              label="WCAG Level"
              onChange={(e) => {
                setWcagLevelFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <MenuItem value="all">All Levels</MenuItem>
              {wcagLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* WCAG Criteria Filter */}
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>WCAG Criteria</InputLabel>
            <Select
              value={wcagCriteriaFilter}
              label="WCAG Criteria"
              onChange={(e) => {
                setWcagCriteriaFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <MenuItem value="all">All Criteria</MenuItem>
              {wcagCriteriaIds.map((criteria) => (
                <MenuItem key={criteria} value={criteria}>
                  {criteria}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Legacy Rule Equivalent Filter */}
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Legacy Rule</InputLabel>
            <Select
              value={legacyRuleFilter}
              label="Legacy Rule"
              onChange={(e) => {
                setLegacyRuleFilter(e.target.value);
                setPage(0);
              }}
              sx={{
                background: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <MenuItem value="all">All Rules</MenuItem>
              <MenuItem value="yes">Has Legacy Equivalent</MenuItem>
              <MenuItem value="no">No Legacy Equivalent</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Results count */}
        <Typography variant="body2" sx={{ mt: 2, color: "#64748b" }}>
          Showing {paginatedRules.length} of {filteredRules.length} rules
          {searchTerm && ` (filtered from ${engineRulesData.length} total)`}
        </Typography>
      </Paper>

      {/* Table */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ background: "rgba(103, 58, 183, 0.1)" }}>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "id"}
                    direction={orderBy === "id" ? order : "asc"}
                    onClick={() => handleRequestSort("id")}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      Rule ID
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "title"}
                    direction={orderBy === "title" ? order : "asc"}
                    onClick={() => handleRequestSort("title")}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      Title
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Description
                  </Typography>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "impact"}
                    direction={orderBy === "impact" ? order : "asc"}
                    onClick={() => handleRequestSort("impact")}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      Impact
                    </Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle2" fontWeight="bold">
                    WCAG
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle2" fontWeight="bold">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRules.map((rule) => {
                const colors = getSeverityColor(rule.impact);
                const wcagRefs = rule.refs.filter((r) => r.type === "WCAG");

                return (
                  <TableRow
                    key={rule.id}
                    onClick={() => navigate(rule.detailUrl)}
                    sx={{
                      "&:hover": {
                        background: "rgba(103, 58, 183, 0.05)",
                        cursor: "pointer",
                      },
                      transition: "background 0.2s",
                    }}
                  >
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "monospace",
                          fontWeight: "bold",
                          color: "#673ab7",
                        }}
                      >
                        {rule.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="500">
                        {rule.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        sx={{
                          maxWidth: 400,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {rule.description}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={
                          rule.impact.charAt(0).toUpperCase() +
                          rule.impact.slice(1)
                        }
                        size="small"
                        sx={{
                          fontWeight: "bold",
                          background: colors.bg,
                          color: colors.color,
                          border: `1px solid ${colors.border}40`,
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {wcagRefs.length > 0 ? (
                        <Stack
                          direction="row"
                          spacing={0.5}
                          flexWrap="wrap"
                          justifyContent="center"
                          sx={{ gap: 0.5 }}
                        >
                          {wcagRefs.map((ref, idx) => (
                            <Chip
                              key={idx}
                              label={`${ref.id || "N/A"} (${
                                ref.level || "N/A"
                              })`}
                              size="small"
                              sx={{
                                background:
                                  ref.level === "A"
                                    ? "rgba(76, 175, 80, 0.2)"
                                    : ref.level === "AA"
                                    ? "rgba(33, 150, 243, 0.2)"
                                    : ref.level === "AAA"
                                    ? "rgba(156, 39, 176, 0.2)"
                                    : "rgba(25, 118, 210, 0.2)",
                                color:
                                  ref.level === "A"
                                    ? "#4caf50"
                                    : ref.level === "AA"
                                    ? "#2196f3"
                                    : ref.level === "AAA"
                                    ? "#9c27b0"
                                    : "#1976d2",
                                fontWeight: "bold",
                                fontSize: "0.7rem",
                                height: "20px",
                              }}
                            />
                          ))}
                        </Stack>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          -
                        </Typography>
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
                              navigate(rule.detailUrl);
                            }}
                            size="small"
                            sx={{ color: "#673ab7" }}
                          >
                            <ViewIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Success Examples">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(rule.successUrl);
                            }}
                            size="small"
                            sx={{ color: "#388e3c" }}
                          >
                            <SuccessIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Failure Examples">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(rule.failureUrl);
                            }}
                            size="small"
                            sx={{ color: "#d32f2f" }}
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
            background: "rgba(103, 58, 183, 0.05)",
            borderTop: "1px solid rgba(103, 58, 183, 0.2)",
          }}
        />
      </Paper>
    </Container>
  );
};

export default EngineRulesListing;
