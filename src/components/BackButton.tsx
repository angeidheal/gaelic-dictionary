import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BackButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  sx?: object;
}

const BackButton: React.FC<BackButtonProps> = ({ variant = 'text', sx = {} }) => {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate('/')}
      variant={variant}
      aria-label="Go back to home page"
      sx={{ mb: 2, ...sx }}
    >
      Till
    </Button>
  );
};

export default BackButton; 