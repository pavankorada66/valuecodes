import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import codecrafting from '../images/codecrafting.png';
import solutionsaviour from'../images/solutionsaviour.jpg';
import shapeofideas from '../images/shapeofideas.jpg';
import empowringinnovation from '../images/empowringinnovation.jpg';
import techexcellence from '../images/techexcellence.jpg';

const cards = [
  {
    text: "Crafting Digital Solutions",
    image: codecrafting,
  },
  {
    text: "CodeCrafters,SolutionSaviors",
    image: solutionsaviour,
  },
  {
    text: "WhereIdeasTakeShape",
    image:shapeofideas,
  },
  {
    text: "EmpoweringInnovation",
    image: empowringinnovation,
  },
  {
    text: "TechExcellence,EveryByte",
    image: techexcellence,
  },

];

const FullWidthSlider = () => {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!hovering) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % cards.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovering]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "97.95vw",
        height: { xs: 300, sm: 400, md: 500 },
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      
      {cards.map((card, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            zIndex: 1,
          }}
        >
          <img
            src={card.image}
            alt={`slide-${i}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
             
            }}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1600x600?text=Image+Not+Available";
            }}
          />
        </Box>
      ))}

      
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 3,
          
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "2rem", md: "2.8rem" },
            fontWeight: 800,
            letterSpacing: 1,
            mt: 0.5,
            color: "slateblue",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Hire Professionals At One Go..
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.2rem" },
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "red",
            opacity: 0.85,
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          Join Us For A Hassle Free Journey For..
        </Typography>
      </Box>

      
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
          color: "darkorange",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.6rem", sm: "1.3rem", md: "3.0rem" },
            fontWeight: 800,
            textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            maxWidth: "90vw",
          }}
        >
          {cards[index].text}
        </Typography>
      </Box>

 
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 4,
        }}
      >
        {cards.map((_, i) => (
          <IconButton
            key={i}
            size="small"
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              bgcolor: index === i ? "white" : "grey.500",
              borderRadius: "50%",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FullWidthSlider;
