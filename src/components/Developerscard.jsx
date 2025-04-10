import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useInView } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const BackgroundImageCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.1 });

  return (
    <Box
      ref={ref}
      sx={{
        width: '91.5%',
        height: { xs: 'auto', md: '700px' },
        backgroundImage: 'url(/techvision.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 0 },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        sx={{
         
          maxWidth: { xs: '100%', md: '50%' }, 
          p: 4,
          borderRadius: 2,
        }}
      >
        <MotionTypography
          variant="h4"
          color="orange"
          fontWeight="bold"
          fontSize="50px"
          gutterBottom
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2 }}
        >
          QUALIFIED DEVELOPERS TO BRING YOUR VISION TO LIFE
        </MotionTypography>

        <MotionTypography
          variant="body1"
          color="red"
          fontWeight="light"
          fontSize="20px"
          sx={{ mb: 3,}}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          Engage skilled developers adept at translating your vision into reality.
          
        </MotionTypography>
        <MotionTypography
          variant="body1"
          color="blue"
          fontWeight="extra-light"
          fontSize="15px"
          sx={{ mb: 3 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          
          Their expertise ensures efficient implementation, robust functionality, and seamless user experiences,
          unleashing the full potential of your ideas.
        </MotionTypography>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            HIRE DEVELOPERS
          </Button>
          </a>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default BackgroundImageCard;
