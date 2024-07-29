import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add useNavigate
import { useSelector } from 'react-redux'; // Add useSelector
import './Services.css';

const services = [
  {
    title: 'Oil Change',
    description: 'Keep your engine running smoothly with our oil change service.',
    icon: <FaOilCan />
  },
 
  {
    title: 'Tire Replacement',
    description: 'Get the best tires and have them professionally installed.',
    icon: <FaCog />
  },
  {
    title: 'Battery Replacement',
    description: 'We offer fast and reliable battery replacement services.',
    icon: <FaBatteryFull />
  },
  {
    title: 'Engine Diagnostics',
    description: 'Get accurate engine diagnostics and solutions for any issues.',
    icon: <FaWrench />
  },
  {
    title: 'Transmission Repair',
    description: 'Professional transmission repair services for smooth driving.',
    icon: <FaCog />
  },
  {
    title: 'Air Conditioning Service',
    description: 'Stay cool with our comprehensive air conditioning service.',
    icon: <FaSnowflake />
  },
  {
    title: 'Suspension Repair',
    description: 'Ensure a smooth ride with our suspension repair services.',
    icon: <FaCompressArrowsAlt />
  },
  {
    title: 'Detailing',
    description: 'Keep your car looking new with our detailing services.',
    icon: <FaCarSide />
  },
  {
    title: 'Battery Testing',
    description: 'Ensure your car battery is in top condition.',
    icon: <FaCarBattery />
  },
  {
    title: 'General Maintenance',
    description: 'Comprehensive maintenance services to keep your car in top shape.',
    icon: <FaTools />
  },
  {
    title: 'Brake Repair',
    description: 'Ensure your safety with our comprehensive brake repair services.',
    icon: <FaCarCrash />
  },
];

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication state

  const handleBookNow = () => {
    if (isAuthenticated) {
      navigate('/book'); // Redirect to the booking page
    } else {
      navigate('/login'); // Redirect to the login page
    }
  };

  return (
    <div className='s-body'>
    <Box className="service-container">
      <Typography variant="h3" component="h1" gutterBottom className="service-title">
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="service-card">
              <CardContent>
                <div className="service-icon">
                  {service.icon}
                </div>
                <Typography variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
                <br/>
                <Button
                  variant="contained"
                  color="primary"
                  className="book-now-button"
                  onClick={handleBookNow} // Add onClick handler
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};

export default Services;
