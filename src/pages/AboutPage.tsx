import React from 'react';
import {
  Box,
  Typography,
  Link,
  Paper,
} from '@mui/material';

const AboutPage: React.FC = () => {
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
          Mu dheidhinn
        </Typography>
      </Box>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Seo faclair de bhriathrachas LGBTQIA+ a tha Crìstean MacMhìcheil air a bhith a' cruinneachadh mar phàirt dhen obair aige air blog naidheachd LGBTQIA+ <a href="https://angeidhealur.scot/" style={{ color: 'inherit' }}>a' Ghèidheil Ùire</a>.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Cuiribh fios thugainn
        </Typography>
        <Typography variant="body1">
          Ma tha ceist no moladh agaibh, cuiribh fios thugainn aig:
          <br />
          <br />
          <a href="mailto:fios@angeidhealur.scot" style={{ color: 'inherit' }}>
            fios@angeidhealur.scot
          </a>
        </Typography>
      </Paper>
    </>
  );
};

export default AboutPage; 