import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentIcon from '@mui/icons-material/Payment';

const cards = [
  {
    title: 'Post Job',
    icon: <WorkIcon fontSize="large" />,
    bgColor: '#E3F2FD',
    textColor: '#1976D2',
  },
  {
    title: 'Hide Experts',
    icon: <VisibilityOffIcon fontSize="large" />,
    bgColor: '#E8F5E9',
    textColor: '#388E3C',
  },
  {
    title: 'Get Work Done',
    icon: <CheckCircleIcon fontSize="large" />,
    bgColor: '#FFF3E0',
    textColor: '#F57C00',
  },
  {
    title: 'Make Secure Payments',
    icon: <PaymentIcon fontSize="large" />,
    bgColor: '#F3E5F5',
    textColor: '#8E24AA',
  },
];

const Valuesection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getCardWidth = () => {
    if (isMobile) return '100%';
    if (isTablet) return '48%';
    return '24%';
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#fafafa' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Work With Value Codes
      </Typography>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              sx={{
                width: getCardWidth(),
                height: 140,
                backgroundColor: card.bgColor,
                boxShadow: 3,
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <CardContent
                sx={{
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box sx={{ color: card.textColor, mb: 1 }}>{card.icon}</Box>
                <Typography
                  sx={{
                    color: card.textColor,
                    fontWeight: 600,
                    fontSize: '1rem',
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Valuesection;
