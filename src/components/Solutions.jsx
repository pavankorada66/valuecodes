import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Agencies from '../images/Agencies.png';
import newventures from'../images/newventures.avif';
import Organizations from '../images/Organizations.jpg';

const Container = styled(Box)(({ theme }) => ({
    width: '91%',
    backgroundColor: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(4),
    textAlign: 'center',
  }));
  
  const CardWrapper = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[4],
  }));
  
  const BulletPoint = styled('li')(({ theme }) => ({
    listStyle: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&::before': {
      content: '"\\2022"',
      color: '#f57c00', 
      fontSize:'27px',
      fontWeight: 'bold',
      display: 'inline-block',
      minWidth: '1em',
    },
  }));
  
  
  const IconWrapper = styled(CheckCircleOutlineIcon)(({ theme }) => ({
    fontSize: '18px',
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    marginTop: '3px',
  }));

const cards = [
    {
      image: newventures,
      title: 'New ventures',
      points: ['New ventures are innovative enterprises entering markets with novel products or services.', 'They thrive on creativity, adaptability, and a willingness to take risks.',
         'New ventures often disrupt traditional industries by introducing groundbreaking ideas.',"They drive economic growth and foster technological advancements.",
        "From tech startups to social enterprises, they challenge the status quo and pioneer change."],
    },
    {
      image: Organizations,
      title: 'Organizations',
      points: ['Enterprises are organizations or businesses engaged in commercial activities.', 'They vary in size and scope, ranging from small startups to multinational corporations.',
         'Enterprises play a crucial role in driving economic growth and providing employment opportunities.','They operate within legal frameworks and are subject to regulations governing their activities.',
        "Successful enterprises adapt to changing market conditions and embrace innovation to stay competitive."],
    },
    {
      image: Agencies,
      title: 'Agencies',
      points: ['Agencies are organizations tasked with specific functions or responsibilities.', 'Agencies often specialize in areas such as healthcare, education, law enforcement, or environmental protection.',
         'Agencies may provide services, oversight, or funding to support their missions.',"Collaboration between agencies is common, especially on complex issues that require coordinated efforts.",
        "Transparency and accountability are essential principles for agencies to maintain public trust and legitimacy."],
    },
];

const AnimatedContainer = () => {
    const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.2 });
    const { ref: descRef, inView: descInView } = useInView({ threshold: 0.2 });
  
    return (
      <Container>
        <Box ref={titleRef}>
          <Slide in={titleInView} direction="down" timeout={700}>
            <Typography variant="h4" fontWeight="bold" mb={2} color='orange'>
              Powerful Solutions For Your Digital Success
            </Typography>
          </Slide>
        </Box>
  
        <Box ref={descRef}>
          <Slide in={descInView} direction="up" timeout={800}>
            <Typography  fontWeight="semi-bold" fontSize={18} color="navy" mb={4} >
            Unlock powerful solutions crafted to propel your digital success. Our expertise leverages cutting-edge technology, innovative strategies, and tailored approaches to drive growth, efficiency, and competitive advantage in the digital landscape.
            </Typography>
          </Slide>
        </Box>
  
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card, index) => {
            const { ref, inView } = useInView({ threshold: 0.2 });
  
            return (
              <Grid item key={index} xs={12} sm={6} md={4} ref={ref}>
                <Slide in={inView} direction="up" timeout={500 + index * 300}>
                <CardWrapper>
  <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
    <CardMedia
      component="img"
      image={card.image}
      alt={card.title}
      sx={{ objectFit: 'cover',  }}
    />
  </Box>

  <CardContent>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="red">
        {card.title}
      </Typography>
    </Box>

   
    <Box sx={{ textAlign: 'left' }}>
      <ul style={{ paddingLeft: 0, margin: 0 }}>
        {card.points.map((point, i) => (
          <BulletPoint key={i}>
            <Typography variant="body">{point}</Typography>
          </BulletPoint>
        ))}
      </ul>
    </Box>
  </CardContent>

  <Box textAlign="center">
  <a href="#contact" style={{ textDecoration: 'none' }}>
    <Button variant="contained" color="warning">
      Explore more
    </Button>
    </a>
  </Box>
</CardWrapper>
                </Slide>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  };

export default AnimatedContainer;
