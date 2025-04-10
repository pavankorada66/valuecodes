import React, { useRef } from 'react';
import { Box, Card, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useInView } from 'framer-motion';


const FullWidthCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    borderRadius: theme.spacing(2),
    backdropFilter: 'blur(6px)',
    maxWidth: 900,
    margin: '0 auto',
  }));
  
  const Point = styled(motion.div)(({ theme }) => ({
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1.5),
    backgroundColor: '#fff',
    borderRadius: theme.spacing(1),
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: 500,
    color: '#333',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  }));
const BackgroundContainer = styled(Box)({
    width: '97.5%',
    backgroundImage: 'url("/background.avif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '60px 20px',
  });

const points = ['How can I incorporate advanced testing methodologies to ensure comprehensive code coverage and robustness?Fast Performance?', 
    'What techniques and tools can I use to improve code readability, maintainability, and developer productivity?', 
    'How can I effectively manage dependencies and mitigate the risk of dependency-related issues in my codebase?'];

const Quries = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-50px' });
  
    return (
      <BackgroundContainer>
        <FullWidthCard ref={cardRef}>
          <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom color='orange' fontWeight='bold'>
          Frequently Asked Questions
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ color: 'navy' }}>
          Here are some questions related to software outsourcing that our clients frequently ask:
          </Typography>
  
          {points.map((point, index) => (
            <Point
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 25 }}
              sx={{ color: "royalblue"}}
            >
              {point}
            </Point>
          ))}
        </FullWidthCard>
      </BackgroundContainer>
    );
};

export default Quries;
