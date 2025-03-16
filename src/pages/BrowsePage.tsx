import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List, 
  ListItemButton, 
  ListItemText,
  CircularProgress,
  Fab,
  Zoom,
  useScrollTrigger,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getAllEntries } from '../services/dictionaryService';
import { DictionaryEntry } from '../types/DictionaryEntry';

const BrowsePage: React.FC = () => {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Show back to top button when scrolling down 100px
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const loadEntries = async () => {
      try {
        const allEntries = await getAllEntries();
        const sortedEntries = allEntries.sort((a: DictionaryEntry, b: DictionaryEntry) => 
          a.gaelic.localeCompare(b.gaelic)
        );
        setEntries(sortedEntries);
      } catch (error) {
        console.error('Error loading entries:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEntries();
  }, []);

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
        role="status"
        aria-label="A' luchdachadh..."
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, sm: 3 }, pb: 8 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2.125rem' },
            wordWrap: 'break-word',
          }}
          id="page-heading"
        >
          Brabhsaich na Faclan
        </Typography>

        <List 
          role="navigation" 
          aria-label="Liosta nam faclan"
          sx={{
            '& > *': {
              breakInside: 'avoid',
            }
          }}
        >
          {entries.map((entry) => (
            <ListItemButton
              key={entry.id}
              onClick={() => navigate(`/facal/${entry.id}`, { state: { from: '/brabhsaich' } })}
              sx={{
                mb: 1,
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'action.hover',
                  transform: 'translateX(4px)',
                  borderColor: 'primary.main',
                },
                '@media (max-width: 600px)': {
                  px: 2,
                  py: 1.5,
                },
              }}
              role="link"
              aria-label={`Seall mìneachadh airson ${entry.gaelic}`}
            >
              <ListItemText
                primary={entry.gaelic}
                primaryTypographyProps={{
                  variant: 'h6',
                  sx: { 
                    fontWeight: 500,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                  },
                }}
              />
              <ChevronRightIcon 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                }} 
                aria-hidden="true" 
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Zoom in={trigger}>
        <Box
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            size="medium"
            aria-label="Till gu mullach na duilleige"
            onClick={handleBackToTop}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              '@media (max-width: 600px)': {
                bottom: 24,
                right: 24,
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  );
};

export default BrowsePage; 