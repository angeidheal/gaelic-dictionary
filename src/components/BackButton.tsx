import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BackButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  sx?: object;
  navigateTo?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ variant = 'contained', sx = {}, navigateTo = '/' }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(navigateTo)}
      variant={variant}
      aria-label={`Go back to ${navigateTo === '/' ? 'home' : 'previous'} page`}
      sx={{ 
        mb: 2,
        fontWeight: 500,
        backgroundColor: theme.palette.mode === 'dark' ? '#90caf9' : 'primary.main',
        color: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? '#a6d4fa' : 'primary.dark',
        },
        '&:focus': {
          outline: '2px solid currentColor',
          outlineOffset: '2px',
        },
        ...sx 
      }}
    >
      Air ais
    </Button>
  );
};

export default BackButton; 