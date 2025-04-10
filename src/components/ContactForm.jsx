import React from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/system';

const Background = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("./contact.avif")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 1000,
  width: '40%',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  
}));

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Background id="contact">
      <StyledPaper elevation={6}>
      
        <Box textAlign="center" mb={4}>
          <Typography variant="h4"  gutterBottom color="orange" fontWeight="bold">
            Let’s Work Together
          </Typography>
          <Typography variant="body2" color="navy" >
            Got a project in mind? Fill out the form and we’ll get back to you as soon as possible.
            Whether it’s a website, app, or any digital product — we’re here to help!
          </Typography>
        </Box>

            <Grid container spacing={4} sx={{display:"flex",justifyContent:"center"}}>
  
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField label="Name" fullWidth variant="outlined" required />
              <TextField label="Email" fullWidth variant="outlined" type="email" multiline
                rows={4} required />
            </Box>
          </Grid>

         
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField label="Phone Number" fullWidth variant="outlined" required />
              <TextField
                label="Project Details"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Box>
          </Grid>
        </Grid>

      
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" size="large">
            SEND MESSAGE
          </Button>
        </Box>
      </StyledPaper>
    </Background>
  );
};

export default ContactForm;
