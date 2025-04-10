import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, Fade, Slide } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";


const bgSlideIn = keyframes`
  from {
    background-position-x: -100vw;
  }
  to {
    background-position-x: center;
  }
`;

const HeroCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      
      setAnimate(false);
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
      key={animate} 
      sx={{
        minHeight: "30vh",
        backgroundImage: `url(/digitalimages.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: animate
          ? `${bgSlideIn} 2s ease-out`
          : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 600,
          
        }}
      >
        <Slide direction="right" in={animate} timeout={600} mountOnEnter unmountOnExit>
          <Typography variant="h4"  color="orange" fontSize="35px" fontWeight="bold">
            Discover the Digital Preeminence
          </Typography>
        </Slide>

        <Fade in={animate} timeout={1000} mountOnEnter unmountOnExit>
          <Typography variant="body1" color="red" fontSize="20px" >
            Embrace the future with innovative digital solutions designed to lead the industry.
          </Typography>
        </Fade>

        <Fade in={animate} timeout={1400} mountOnEnter unmountOnExit>
        <a href="#contact" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
          </a>
        </Fade>
      </Stack>
    </Box>
  );
};

export default HeroCard;

