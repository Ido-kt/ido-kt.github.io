import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useLoading } from "./LoadingContext";
import GlassSpinner from "./GlassSpinner";

export default function GlobalLoading() {
  const { loading, loadingMessage, loadingType } = useLoading();

  if (!loading) return null;

  // Full screen glass spinner
  if (loadingType === "spinner") {
    return <GlassSpinner fullScreen={true} message={loadingMessage} />;
  }

  // Top progress bar
  return (
    <Box 
      sx={{ 
        width: "100%", 
        position: "fixed", 
        top: 0, 
        left: 0, 
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        padding: '4px 0'
      }}
    >
      <LinearProgress 
        sx={{
          height: 3,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, rgba(167, 139, 250, 0.8) 50%, rgba(59, 130, 246, 0.8) 100%)',
            boxShadow: '0 0 10px rgba(102, 126, 234, 0.5)',
            borderRadius: '2px'
          },
          '& .MuiLinearProgress-bar1Indeterminate': {
            animation: 'glass-loading 2s infinite ease-in-out'
          },
          '@keyframes glass-loading': {
            '0%': {
              left: '-35%',
              right: '100%'
            },
            '60%': {
              left: '100%',
              right: '-90%'
            },
            '100%': {
              left: '100%',
              right: '-90%'
            }
          }
        }}
      />
    </Box>
  );
}
