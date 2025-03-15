import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
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
          Tha Faclair nan Gèidheal na fhaclair Ghàidhlig a tha air a dhealbh airson luchd-ionnsachaidh agus luchd-cleachdaidh na Gàidhlig. Tha e a' toirt seachad mìneachaidhean soilleir, fuaimneachaidhean, agus eisimpleirean cleachdaidh airson gach facal.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Feartan
        </Typography>
        <Typography variant="body1" paragraph>
          • Lorg faclan gu sgiobalta
          <br />
          • Fuaimneachaidhean claistinneach
          <br />
          • Mìneachaidhean soilleir
          <br />
          • Eisimpleirean cleachdaidh
          <br />
          • Notaichean gràmair
        </Typography>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Cuir fios thugainn
        </Typography>
        <Typography variant="body1">
          Ma tha ceist agaibh no molaidhean airson leasachaidhean, cuiribh fios thugainn aig:
          <br />
          <br />
          <a href="mailto:info@faclairnangeidheal.com" style={{ color: 'inherit' }}>
            info@faclairnangeidheal.com
          </a>
        </Typography>
      </Paper>
    </>
  );
};

export default AboutPage; 