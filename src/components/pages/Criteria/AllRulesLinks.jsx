import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container, Typography, Alert } from "@mui/material";
import { useSearch } from "../../util/SearchContext"; // Adjust path as needed
import ItemPage from "../../layout/rulePage";
import { useLoading } from "../../util/LoadingContext";
import GlassSpinner, { GlassSkeleton } from "../../util/GlassSpinner";

function AllRulesWithRoutes({ filters }) {
  const { query } = useSearch();
  const { showLoading, hideLoading } = useLoading();
  const [filteredFormRules, setFilteredFormRules] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Memoize filters if necessary
  const stableFilters = React.useMemo(() => filters, [filters]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsInitialLoading(true);
        setLoadingProgress(0);
        showLoading("Loading accessibility rules...", "progress"); // Enhanced loading with message
        
        // Simulate progress updates for better UX
        const progressInterval = setInterval(() => {
          setLoadingProgress(prev => {
            const newProgress = Math.min(prev + Math.random() * 15, 90);
            return newProgress;
          });
        }, 200);

        const response = await fetch("/data.json");
        setLoadingProgress(95);
        
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // If filters exist, apply them
        let filteredData = data;
        if (Array.isArray(stableFilters) && stableFilters.length) {
          filteredData = data.filter((rule) =>
            stableFilters.every((filter) => filter(rule))
          );
        }

        if (isMounted) {
          clearInterval(progressInterval);
          setLoadingProgress(100);
          
          // Small delay to show completion
          setTimeout(() => {
            setFilteredFormRules(filteredData);
            setSearchResults(filteredData); // Initialize with all rules
            setIsInitialLoading(false);
          }, 300);
        }
      } catch (err) {
        if (isMounted) setError(err);
        setIsInitialLoading(false);
      } finally {
        if (isMounted) {
          setTimeout(() => {
            hideLoading(); // Hide loading indicator with slight delay
          }, 400);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [stableFilters, showLoading, hideLoading]);

  useEffect(() => {
    if (!query) {
      setSearchResults(filteredFormRules);
      return;
    }

    const results = filteredFormRules.filter((rule) =>
      rule.name.toLowerCase().includes(query.toLowerCase()) ||
      rule.criteria.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  }, [query, filteredFormRules]);

  // Error state with glass styling
  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert 
          severity="error"
          sx={{
            background: 'rgba(244, 67, 54, 0.1)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            border: '1px solid rgba(244, 67, 54, 0.3)',
            borderRadius: 3,
            boxShadow: '0 4px 16px rgba(244, 67, 54, 0.15)'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Failed to Load Rules
          </Typography>
          <Typography variant="body2">
            {error.message}
          </Typography>
        </Alert>
      </Container>
    );
  }

  // Loading state with glass components
  if (isInitialLoading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <GlassSpinner 
              size={60} 
              message={`Loading rules... ${Math.round(loadingProgress)}%`}
              showMessage={true}
            />
          </Box>
          
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center', 
              mb: 3,
              color: 'rgba(30, 41, 59, 0.8)',
              fontWeight: 600
            }}
          >
            Preparing Accessibility Rules
          </Typography>
          
          {/* Glass skeleton placeholders */}
          <Box sx={{ mb: 3 }}>
            <GlassSkeleton height={60} borderRadius={3} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <GlassSkeleton height={40} width="80%" borderRadius={2} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <GlassSkeleton height={40} width="60%" borderRadius={2} />
          </Box>
          <Box>
            <GlassSkeleton height={40} width="90%" borderRadius={2} />
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Routes>
      {searchResults.map((formRule) => (
        <Route
          key={`${formRule.id}-${formRule.criteria}-${formRule.route}`}
          path={`${formRule.criteria}/${formRule.route}`}
          element={<ItemPage ruleData={formRule} />}
        />
      ))}
    </Routes>
  );
}

export default AllRulesWithRoutes;