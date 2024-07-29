// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LocationOn, Phone, Email, Build, DirectionsCar, BatteryChargingFull, LocalGasStation } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container className="footer-content" spacing={4}>
        <Grid item xs={12} sm={3} className="footer-column">
          <Typography variant="h6" className="footer-title">Contact Us</Typography>
          <Typography variant="body1" className="footer-text">
            <LocationOn className="footer-icon" /> 123 Car Repair St, Auto City, TamilNadu, 641008
          </Typography>
          <Typography variant="body1" className="footer-text">
            <Phone className="footer-icon" /> 9790333705
          </Typography>
          <Typography variant="body1" className="footer-text">
            <Email className="footer-icon" /> support@fixngo.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} className="footer-column">
          <Typography variant="h6" className="footer-title">Locations & Business Hours</Typography>
          <Typography variant="body1" className="footer-text">Branch 1: Hyderabad</Typography>
          <Typography variant="body1" className="footer-text">Branch 2: Bangalore</Typography>
          <Typography variant="body1" className="footer-text">Mon - Fri: 8 AM - 6 PM</Typography>
          <Typography variant="body1" className="footer-text">Sat: 9 AM - 4 PM</Typography>
          <Typography variant="body1" className="footer-text">Sun: Closed</Typography>
        </Grid>
        <Grid item xs={12} sm={3} className="footer-column">
          <Typography variant="h6" className="footer-title">Legal</Typography>
          <Link href="/privacy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-link">Terms of Service</Link>
          <Link href="/legal" className="footer-link">Legal Notice</Link>
          <Box className="footer-social">
            <IconButton href="https://facebook.com" target="_blank" className="social-link"><Facebook className="social-icon" /></IconButton>
            <IconButton href="https://twitter.com" target="_blank" className="social-link"><Twitter className="social-icon" /></IconButton>
            <IconButton href="https://instagram.com" target="_blank" className="social-link"><Instagram className="social-icon" /></IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} className="footer-column">
          <Typography variant="h6" className="footer-title">Our Services</Typography>
          <Typography variant="body1" className="footer-text">
            <Build className="footer-icon" /> General Repairs
          </Typography>
          <Typography variant="body1" className="footer-text">
            <DirectionsCar className="footer-icon" /> Vehicle Inspection
          </Typography>
          <Typography variant="body1" className="footer-text">
            <BatteryChargingFull className="footer-icon" /> Battery Replacement
          </Typography>
          <Typography variant="body1" className="footer-text">
            <LocalGasStation className="footer-icon" /> Fuel System Services
          </Typography>
        </Grid>
      </Grid>
      <Box className="footer-bottom">
        <Typography variant="body2">© 2024 Car Repair Hub. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
