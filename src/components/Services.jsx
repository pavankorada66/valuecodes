import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { ThumbUp, BusinessCenter, Groups, AttachMoney } from "@mui/icons-material";

const Services = () => {
  return (
    <Box
      sx={{
        width: '97.95vw',
        overflowX: 'hidden',
        py: 5,
        px: 2,
        backgroundImage: 'url("/hrservices.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' }, 
          justifyContent: 'space-between',
          gap: 2,
          mb: 4,
        }}
      >
        {[
          {
            title: "Better Service Quality",
            icon: <ThumbUp fontSize="large" color="primary" />,
            desc: "We ensure high-quality service delivery to meet customer expectations.",
            bg: "white",
          },
          {
            title: "Professional Management",
            icon: <BusinessCenter fontSize="large" color="secondary" />,
            desc: "Proven strategies to deliver organized, result-driven services.",
            bg: "grey",
          },
          {
            title: "Experienced Professionals",
            icon: <Groups fontSize="large" sx={{ color: "#0288D1" }} />,
            desc: "Work with a team of skilled experts committed to excellence.",
            bg: "white",
          },
          {
            title: "Cost Savings",
            icon: <AttachMoney fontSize="large" sx={{ color: "#2E7D32" }} />,
            desc: "Save time and money without compromising quality.",
            bg: "grey",
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            sx={{
              flex: '1 1 20%',
              minWidth: 240,
              maxWidth: 300,
              height: 250,
              backgroundColor: item.bg,
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              {item.icon}
              <Typography variant="h6" fontSize="1.2rem" fontWeight="bold" mt={2}>
                {item.title}
              </Typography>
              <Typography variant="body2" fontSize="0.95rem" mt={1} color="navy">
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box textAlign="center">
      <a href="#contact" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Learn More About Our Services
        </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Services;
