import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box 
      sx={{ 
        width: "100%",
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 3,
        padding: 2,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
      }}
    >
      <LinearProgress 
        variant="determinate" 
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.9) 0%, rgba(167, 139, 250, 0.9) 50%, rgba(59, 130, 246, 0.9) 100%)',
            borderRadius: 4,
            boxShadow: '0 0 15px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
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
            '0%': {
              transform: 'translateX(-100%)'
            },
            '100%': {
              transform: 'translateX(100%)'
            }
          }
        }}
      />
    </Box>
  );
}
