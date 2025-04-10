import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Softwares', href: '#softwares' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Company', href: '#company' },
  { label: 'Get Started', href: '#getstarted' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem button component="a" href={href} key={label}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#a6c13e' }}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto',
              px: 2,
            }}
          >
            {/* Logo */}
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.8rem',
                  color: 'navy',
                }}
              >
                Value Codes
              </Typography>
              <Typography variant="caption" sx={{ color: 'midnightblue', fontSize: '0.9rem' }}>
                Crafting Digital Solutions
              </Typography>
            </Box>

            {/* Navigation */}
            {isMobile ? (
              <IconButton edge="end" onClick={toggleDrawer(true)} sx={{ color: '#002776' }}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map(({ label, href }) => (
                  <Button
                    key={label}
                    component="a"
                    href={href}
                    sx={{
                      color: 'saddlebrown',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      fontSize: '1.2rem',
                      '&:hover': {
                        color: 'black',
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
