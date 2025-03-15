import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  CircularProgress,
  IconButton
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getAllEntries } from '../services/dictionaryService';
import { DictionaryEntry } from '../types/DictionaryEntry';

const BrowsePage: React.FC = () => {
  const [entries, setEntries] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            fontFamily: '"Lemonada", cursive',
          }}
        >
          Na h-uile facal
        </Typography>
      </Box>
      <List>
        {entries.map((entry) => (
          <ListItem key={entry.id} disablePadding>
            <ListItemButton
              onClick={() => navigate(`/facal/${entry.id}`)}
              sx={{
                borderRadius: 2,
                mb: 1,
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  transform: 'translateX(4px)',
                  borderColor: 'primary.main',
                  boxShadow: 1,
                  transition: 'all 0.2s ease-in-out',
                },
                '&:active': {
                  transform: 'translateX(2px)',
                },
              }}
            >
              <ListItemText 
                primary={entry.gaelic}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              <IconButton edge="end" size="small">
                <ChevronRightIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BrowsePage; 