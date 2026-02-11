import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function GlassSpinner({ 
  size = 40, 
  thickness = 4, 
  message = "Loading...", 
  showMessage = true,
  fullScreen = false 
}) {
  const containerStyles = fullScreen 
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 3,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      };

  return (
    <Box sx={containerStyles}>
      <Box 
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Background circle for glass effect */}
        <Box
          sx={{
            position: 'absolute',
            width: size + 16,
            height: size + 16,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 4px 16px rgba(102, 126, 234, 0.2)'
          }}
        />
        
        {/* Main spinner */}
        <CircularProgress 
          size={size}
          thickness={thickness}
          sx={{
            color: 'transparent',
            '& .MuiCircularProgress-circle': {
              stroke: 'url(#glass-gradient)',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 6px rgba(102, 126, 234, 0.4))'
            },
            animation: 'glass-spin 1.4s linear infinite'
          }}
        />
        
        {/* Gradient definition */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(102, 126, 234, 0.8)" />
              <stop offset="50%" stopColor="rgba(167, 139, 250, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Shimmer effect overlay */}
        <Box
          sx={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
            animation: 'shimmer-rotate 2s linear infinite',
            pointerEvents: 'none'
          }}
        />
      </Box>
      
      {showMessage && (
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 2, 
            color: 'rgba(30, 41, 59, 0.8)',
            fontWeight: 500,
            textAlign: 'center',
            letterSpacing: 0.5
          }}
        >
          {message}
        </Typography>
      )}
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes glass-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shimmer-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
}

// Skeleton loading component with glass effect
export function GlassSkeleton({ 
  width = "100%", 
  height = 40, 
  borderRadius = 2, 
  count = 1 
}) {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <Box
      key={index}
      sx={{
        width,
        height,
        borderRadius,
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        mb: count > 1 ? 1 : 0,
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
          '0%': {
            left: '-100%'
          },
          '100%': {
            left: '100%'
          }
        }
      }}
    />
  ));

  return <Box sx={{ width: '100%' }}>{skeletons}</Box>;
}