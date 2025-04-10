import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111827",
        color: "white",
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        
        <Grid container spacing={4} justifyContent="space-between">

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            {["For Startups", "For Enterprises", "For Agencies", "Blog"].map(
              (item, i) => (
                <Typography key={i} variant="body2" mb={1}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Typography>
              )
            )}
          </Grid>


          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Solutions
            </Typography>
            {[
              "CRM",
              "Human Resources Management",
              "Web Portals",
              "Education & E-learning",
            ].map((item, i) => (
              <Typography key={i} variant="body2" mb={1}>
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

   
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" gutterBottom>
              Get In Touch
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
                1234 Layout, Bengaluru
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">
                info@yourvendorname.in
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">
                +91 9876543210
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          mt={6}
          textAlign="center"
        >
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>

     
        <Box
          mt={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box />
          <Typography variant="body2" mt={{ xs: 2, sm: 0 }}>
            © {new Date().getFullYear()} Value Codes. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
