import {
  Launch as LaunchIcon,
  Science as ScienceIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import engineRulesData from "../../../data/engine-rules-metadata.json";
import legacyEngineMapping from "../../../data/legacy-engine-mapping";
import legacyRulesData from "../../../data/legacy-rules.json";
/**
 * EngineLibrary
 *
 * Similar in spirit to `Criteria/Keyboard/Keyboard.jsx`, this page is
 * a focused library view that renders a card grid of ALL engine rules,
 * driven directly from `engine-rules-metadata.json`.
 */
const EngineLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [impactFilter, setImpactFilter] = useState("all");
  const [wcagLevelFilter, setWcagLevelFilter] = useState("all");
  const [wcagCriteriaFilter, setWcagCriteriaFilter] = useState("all");
  const [legacyRuleFilter, setLegacyRuleFilter] = useState("all");

  // Helper function to check if an engine rule has a legacy equivalent
  const hasLegacyEquivalent = (ruleId) => {
    return Object.values(legacyEngineMapping).some((legacyRules) =>
      legacyRules.some((legacyRule) => legacyRule.id === ruleId)
    );
  };

  // Helper function to get the legacy rule path for an engine rule
  const getLegacyRulePath = (ruleId) => {
    // Find the legacy shortCode that maps to this engine rule
    for (const [legacyShortCode, engineRules] of Object.entries(
      legacyEngineMapping
    )) {
      const matchingRule = engineRules.find(
        (engineRule) => engineRule.id === ruleId
      );
      if (matchingRule) {
        // Find the legacy rule with this shortCode
        const legacyRule = legacyRulesData.find(
          (rule) => rule.shortCode === legacyShortCode
        );
        if (legacyRule && legacyRule.criteria && legacyRule.route) {
          return `/${legacyRule.criteria}/${legacyRule.route}`;
        }
      }
    }
    return null;
  };

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

  const filteredRules = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return engineRulesData.filter((rule) => {
      // Impact filter
      const matchesImpact =
        impactFilter === "all" ||
        (rule.impact || "").toLowerCase() === impactFilter.toLowerCase();

      // WCAG level filter
      const matchesWcagLevel =
        wcagLevelFilter === "all" ||
        (() => {
          const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
          return wcagRefs.some(
            (ref) => ref.level?.toUpperCase() === wcagLevelFilter.toUpperCase()
          );
        })();

      // WCAG criteria filter
      const matchesWcagCriteria =
        wcagCriteriaFilter === "all" ||
        (() => {
          const wcagRefs = rule.refs?.filter((r) => r.type === "WCAG") || [];
          return wcagRefs.some((ref) => ref.id === wcagCriteriaFilter);
        })();

      // Legacy rule filter
      const matchesLegacy =
        legacyRuleFilter === "all" ||
        (legacyRuleFilter === "yes"
          ? hasLegacyEquivalent(rule.id)
          : !hasLegacyEquivalent(rule.id));

      // Search filter
      if (!term) {
        return (
          matchesImpact &&
          matchesWcagLevel &&
          matchesWcagCriteria &&
          matchesLegacy
        );
      }

      const haystack = [rule.id, rule.title, rule.description, rule.advice]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesImpact &&
        matchesWcagLevel &&
        matchesWcagCriteria &&
        matchesLegacy &&
        haystack.includes(term)
      );
    });
  }, [
    searchTerm,
    impactFilter,
    wcagLevelFilter,
    wcagCriteriaFilter,
    legacyRuleFilter,
  ]);

  const getSeverityColor = (impact) => {
    switch ((impact || "").toLowerCase()) {
      case "critical":
        return { bg: "rgba(211, 47, 47, 0.1)", color: "#d32f2f" };
      case "serious":
        return { bg: "rgba(245, 124, 0, 0.1)", color: "#f57c00" };
      case "moderate":
        return { bg: "rgba(25, 118, 210, 0.1)", color: "#1976d2" };
      case "minor":
        return { bg: "rgba(56, 142, 60, 0.1)", color: "#388e3c" };
      default:
        return { bg: "rgba(148, 163, 184, 0.12)", color: "#64748b" };
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow:
            "0 20px 40px rgba(15, 23, 42, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            px: 3,
            py: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            background:
              "linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(124,58,237,0.95) 100%)",
            color: "white",
          }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: "rgba(255,255,255,0.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(15,23,42,0.35)",
              }}
            >
              <ScienceIcon sx={{ fontSize: 26 }} />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, lineHeight: 1.2 }}
              >
                Engine Rules Library
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, mt: 0.5, fontWeight: 400 }}
              >
                Browse {engineRulesData.length}+ automated accessibility engine
                rules as cards.
              </Typography>
            </Box>
          </Box>
          <Chip
            label="Engine Rules"
            sx={{
              backgroundColor: "rgba(15,23,42,0.25)",
              borderRadius: 999,
              color: "white",
              fontWeight: 600,
            }}
          />
        </Box>

        {/* Controls */}
        <Box
          sx={{
            px: 3,
            py: 3,
            borderBottom: "1px solid rgba(148, 163, 184, 0.25)",
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by ID, title, description, or advice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "rgba(148,163,184,0.9)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth>
                <InputLabel>Impact</InputLabel>
                <Select
                  value={impactFilter}
                  label="Impact"
                  onChange={(e) => setImpactFilter(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="critical">Critical</MenuItem>
                  <MenuItem value="serious">Serious</MenuItem>
                  <MenuItem value="moderate">Moderate</MenuItem>
                  <MenuItem value="minor">Minor</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth>
                <InputLabel>WCAG Level</InputLabel>
                <Select
                  value={wcagLevelFilter}
                  label="WCAG Level"
                  onChange={(e) => setWcagLevelFilter(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="all">All</MenuItem>
                  {wcagLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth>
                <InputLabel>WCAG Criteria</InputLabel>
                <Select
                  value={wcagCriteriaFilter}
                  label="WCAG Criteria"
                  onChange={(e) => setWcagCriteriaFilter(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="all">All</MenuItem>
                  {wcagCriteriaIds.map((criteria) => (
                    <MenuItem key={criteria} value={criteria}>
                      {criteria}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4} md={1.5}>
              <FormControl fullWidth>
                <InputLabel>Legacy Rule</InputLabel>
                <Select
                  value={legacyRuleFilter}
                  label="Legacy Rule"
                  onChange={(e) => setLegacyRuleFilter(e.target.value)}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 2,
                  }}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="yes">Has Legacy</MenuItem>
                  <MenuItem value="no">No Legacy</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: "block",
                  textAlign: { xs: "left", md: "right" },
                  fontWeight: 500,
                }}
              >
                Showing {filteredRules.length} of {engineRulesData.length} rules
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Cards */}
        <Box sx={{ px: 3, py: 3.5 }}>
          {filteredRules.length === 0 ? (
            <Box
              sx={{
                textAlign: "center",
                py: 6,
                color: "text.secondary",
              }}
            >
              <Typography variant="h6" gutterBottom>
                No engine rules match your filters
              </Typography>
              <Typography variant="body2">
                Try clearing the search term or selecting a different impact
                level.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={2.5}>
              {filteredRules.map((rule) => {
                const colors = getSeverityColor(rule.impact);
                const wcagRefs =
                  rule.refs?.filter((r) => r.type === "WCAG") || [];
                const hasLegacy = hasLegacyEquivalent(rule.id);

                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={rule.id}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 3,
                        background: "rgba(255,255,255,0.95)",
                        boxShadow:
                          "0 4px 20px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                        border: "1px solid rgba(226,232,240,0.8)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow:
                            "0 12px 40px rgba(15,23,42,0.15), inset 0 1px 0 rgba(255,255,255,0.9)",
                          borderColor: "rgba(79,70,229,0.3)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          background:
                            "linear-gradient(90deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)",
                        },
                      }}
                    >
                      <CardContent
                        sx={{ flexGrow: 1, p: 2.5, pb: 2, overflow: "hidden" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            mb: 1.5,
                            gap: 1,
                            minHeight: 24,
                          }}
                        >
                          <Chip
                            icon={<ScienceIcon sx={{ fontSize: 16 }} />}
                            label={rule.id}
                            size="small"
                            sx={{
                              fontFamily: "monospace",
                              fontWeight: 600,
                              fontSize: "0.7rem",
                              backgroundColor: "rgba(79,70,229,0.1)",
                              color: "#3730a3",
                              height: 24,
                              maxWidth: "calc(100% - 80px)",
                              "& .MuiChip-label": {
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "100%",
                              },
                              "& .MuiChip-icon": {
                                color: "#4f46e5",
                                fontSize: 16,
                                marginLeft: 0.5,
                                flexShrink: 0,
                              },
                            }}
                          />
                          <Chip
                            label={(rule.impact || "unknown").toUpperCase()}
                            size="small"
                            sx={{
                              backgroundColor: colors.bg,
                              color: colors.color,
                              fontWeight: 700,
                              fontSize: "0.65rem",
                              height: 24,
                              flexShrink: 0,
                            }}
                          />
                        </Box>

                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            mb: 1.5,
                            color: "#111827",
                            fontSize: "0.95rem",
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            wordBreak: "break-word",
                          }}
                        >
                          {rule.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            mb: 2,
                            fontSize: "0.8rem",
                            lineHeight: 1.5,
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            wordBreak: "break-word",
                          }}
                        >
                          {rule.description}
                        </Typography>

                        {/* WCAG Info */}
                        {wcagRefs.length > 0 && (
                          <Box sx={{ mb: 1.5 }}>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "text.secondary",
                                fontWeight: 600,
                                fontSize: "0.7rem",
                                mb: 0.5,
                                display: "block",
                              }}
                            >
                              WCAG:
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {wcagRefs.slice(0, 3).map((ref, idx) => (
                                <Chip
                                  key={idx}
                                  label={`${ref.id || "N/A"} (${
                                    ref.level || "N/A"
                                  })`}
                                  size="small"
                                  sx={{
                                    height: 20,
                                    fontSize: "0.65rem",
                                    backgroundColor:
                                      ref.level === "A"
                                        ? "rgba(76, 175, 80, 0.15)"
                                        : ref.level === "AA"
                                        ? "rgba(33, 150, 243, 0.15)"
                                        : ref.level === "AAA"
                                        ? "rgba(156, 39, 176, 0.15)"
                                        : "rgba(148, 163, 184, 0.15)",
                                    color:
                                      ref.level === "A"
                                        ? "#4caf50"
                                        : ref.level === "AA"
                                        ? "#2196f3"
                                        : ref.level === "AAA"
                                        ? "#9c27b0"
                                        : "#64748b",
                                    fontWeight: 600,
                                  }}
                                />
                              ))}
                              {wcagRefs.length > 3 && (
                                <Chip
                                  label={`+${wcagRefs.length - 3}`}
                                  size="small"
                                  sx={{
                                    height: 20,
                                    fontSize: "0.65rem",
                                    backgroundColor: "rgba(148, 163, 184, 0.1)",
                                    color: "#64748b",
                                    fontWeight: 600,
                                  }}
                                />
                              )}
                            </Box>
                          </Box>
                        )}

                        {/* Legacy Rule Indicator */}
                        {hasLegacy &&
                          (() => {
                            const legacyPath = getLegacyRulePath(rule.id);
                            return legacyPath ? (
                              <Chip
                                component={Link}
                                to={legacyPath}
                                clickable
                                label="Has Legacy Equivalent"
                                size="small"
                                sx={{
                                  height: 20,
                                  fontSize: "0.65rem",
                                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                                  color: "#d97706",
                                  fontWeight: 600,
                                  mb: 1,
                                  cursor: "pointer",
                                  "&:hover": {
                                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                                  },
                                }}
                              />
                            ) : (
                              <Chip
                                label="Has Legacy Equivalent"
                                size="small"
                                sx={{
                                  height: 20,
                                  fontSize: "0.65rem",
                                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                                  color: "#d97706",
                                  fontWeight: 600,
                                  mb: 1,
                                }}
                              />
                            );
                          })()}
                      </CardContent>

                      <CardActions
                        sx={{
                          px: 2.5,
                          pb: 2.5,
                          pt: 0,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Button
                          component={Link}
                          to={rule.detailUrl}
                          size="small"
                          variant="contained"
                          endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                          sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            px: 2,
                            py: 0.75,
                            background:
                              "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                            boxShadow: "0 2px 8px rgba(79,70,229,0.3)",
                            "&:hover": {
                              background:
                                "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
                              boxShadow: "0 4px 12px rgba(79,70,229,0.4)",
                            },
                          }}
                        >
                          View details
                        </Button>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {rule.refs?.length || 0} refs
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default EngineLibrary;
