import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faClock, faUserShield, faMapMarkerAlt, faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  return (
    <div className='a-body'>
    <Box className="about-container">
      <Typography variant="h3" component="h1" gutterBottom className="about-title">
        About Us
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom className="about-subtitle">
        Your Trusted Car Service Experts
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faTools} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Expert Technicians
              </Typography>
              <Typography variant="body1">
                Our team of certified technicians uses the latest technology and expertise to service and repair your vehicle.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faClock} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Fast Service
              </Typography>
              <Typography variant="body1">
                We understand your time is valuable, so we strive to provide fast and efficient service without compromising quality.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faUserShield} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Reliable & Trustworthy
              </Typography>
              <Typography variant="body1">
                We prioritize your safety and satisfaction, ensuring every service is performed to the highest standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Convenient Location
              </Typography>
              <Typography variant="body1">
                Our service center is conveniently located to serve you better. Visit us for all your car service needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faCheckCircle} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Quality Service
              </Typography>
              <Typography variant="body1">
                We use the highest quality parts and equipment to ensure your vehicle is serviced to the highest standards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="about-card">
            <CardMedia className="about-card-icon">
              <FontAwesomeIcon icon={faDollarSign} size="3x" />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" component="h3">
                Fair & Reasonable
              </Typography>
              <Typography variant="body1">
                We offer competitive pricing and transparent quotes, ensuring you get the best value for your money.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default About;
