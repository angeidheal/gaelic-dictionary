import React from 'react';
import { Button } from '@mui/material';

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel: string;
  isDarkMode: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, children, ariaLabel, isDarkMode }) => {
  return (
    <Button
      onClick={onClick}
      aria-label={ariaLabel}
      sx={{
        color: isDarkMode ? 'inherit' : '#121212',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default NavButton; 