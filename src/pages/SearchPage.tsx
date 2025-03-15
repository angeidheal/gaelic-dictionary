import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
  Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DictionaryEntry } from '../types/DictionaryEntry';
import { searchDictionary } from '../services/dictionaryService';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const searchResults = await searchDictionary(query);
      setResults(searchResults);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update results when search query changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        mb: 4, 
        gap: 1,
        textAlign: 'center',
        px: 2
      }}>
        {!logoError && (
          <Box
            component="img"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt="Faclair nan Gèidheal Logo"
            sx={{
              height: { xs: 80, sm: 100, md: 120 },
              width: 'auto',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            onError={() => setLogoError(true)}
          />
        )}
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            fontFamily: '"Lemonada", cursive',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }}
        >
          Faclair nan Gèidheal
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{
            fontFamily: '"Lemonada", cursive',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }}
        >
          leis{' '}
          <Link
            href="https://angeidhealur.scot/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontFamily: '"Lemonada", cursive',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline',
                color: 'primary.dark',
              },
            }}
          >
            An Gèidheal Ùr
          </Link>
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Cuir a-steach facal..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : <SearchIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mt: 1, textAlign: 'center' }}
        >
          Lorg ann an Gàidhlig, Gaeilge, Gàidhlig Mhanainn no Beurla.
          <br />
          Thoir an àire ge-tà nach eil Gàidhlig Mhanainn air a' chuid as motha de dh'fhaclan.
        </Typography>
      </Paper>

      {searchQuery && (
        <List>
          {results.length > 0 ? (
            results.map((entry) => (
              <ListItemButton
                key={entry.id}
                onClick={() => navigate(`/facal/${entry.id}`)}
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
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  },
                  '&:active': {
                    transform: 'translateX(2px)',
                  },
                }}
              >
                <ListItemText
                  primary={entry.gaelic}
                  primaryTypographyProps={{
                    variant: 'h6',
                    sx: { fontWeight: 500 },
                  }}
                />
                <ChevronRightIcon sx={{ color: 'text.secondary', opacity: 0.5 }} />
              </ListItemButton>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
              Cha ghabh na lorg thu a lorg. Feuch facal no cànan eile
            </Typography>
          )}
        </List>
      )}
    </>
  );
};

export default SearchPage; 