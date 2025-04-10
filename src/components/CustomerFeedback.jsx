import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const feedbacks = [
  {
    icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 40, color: "green", mb: 2 }} />,
    feedback:
      "Outstanding design! Exceeded expectations, attention to detail impeccable. Transformed vision into reality flawlessly. Highly recommend for design needs.",
    name: "John Doe",
  },
  {
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 40, color: "blue", mb: 2 }} />,
    feedback:
      "Exceptional design prowess, seamlessly blending creativity and functionality. Transcends expectations with meticulous attention to detail and innovative solutions.",
    name: "Jane Smith",
  },
  {
    icon: <EmojiEmotionsIcon sx={{ fontSize: 40, color: "orange", mb: 2 }} />,
    feedback:
      "Outstanding design! Exceeded expectations, attention to detail impeccable. Transformed vision into reality flawlessly. Highly recommend for design needs.",
    name: "Michael Johnson",
  },
];

const bgColors = ["#E3F2FD", "#F3E5F5", "#FFF3E0"]; 

const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "97.95%",
        py: 8,
        px: 2,
        backgroundImage: ` url('/feedback.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        color="orange"
      >
        What Our Clients Say About Us
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="blue"
        mb={5}
      >
        "Our clients commend our unparalleled expertise, seamless communication, and commitment to delivering exceptional results, reaffirming our status as their trusted partner in achieving success."
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {feedbacks.map((item, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { margin: "-100px", amount: 0.5 });

          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                ref={ref}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  elevation={index === 1 ? 8 : 4}
                  sx={{
                    backgroundColor:
                      index === 1
                        ? "rgba(255,255,255,0.8)"
                        : bgColors[index % bgColors.length],
                    backgroundImage:
                      index === 1
                        ? "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
                        : "none",
                    border: index === 1 ? "2px solid #0288d1" : "none",
                    transform: index === 1 ? "scale(1.05)" : "none",
                    transition: "all 0.3s ease-in-out",
                    width: "100%",
                    maxWidth: 340,
                    mx: "auto",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    {item.icon}
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, fontSize: "0.95rem" }}
                    >
                      {item.feedback}
                    </Typography>
                  </CardContent>
                  <Box textAlign="center" pb={2}>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {item.name}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Testimonials;
