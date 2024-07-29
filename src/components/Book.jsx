import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Book.css';

const services = [
  'Oil Change',
  'Brake Repair',
  'Tire Replacement',
  'Battery Replacement',
  'Engine Diagnostics',
  'Transmission Repair',
  'Air Conditioning Service',
  'Suspension Repair',
  'Detailing',
  'Battery Testing',
  'General Maintenance',
];

const Book = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleNumber: '',
    service: '',
    date: '',
    time: '',
    problemDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { time, date } = formData;
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);

    const today = new Date();
    const selectedDate = new Date(date);

    if (hourInt < 9 || hourInt > 16) {
      alert('Please select a time between 9 AM and 4 PM.');
      return;
    }

    if (selectedDate < today) {
      alert('Please select a current or future date.');
      return;
    }

    if (isAuthenticated) {
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(bookings));

      console.log('Booking details:', formData);
      alert('Booking confirmed!');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <div className='b-body'>
    <Box className="booking-container">
      <Typography variant="h3" component="h1" gutterBottom className="booking-title">
        Book a Service
      </Typography>
      <form className="booking-form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Vehicle Number"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          {services.map((service, index) => (
            <MenuItem key={index} value={service}>
              {service}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              min: todayDate,
            },
          }}
          required
        />
        <TextField
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="Describe Your Problem"
          name="problemDescription"
          value={formData.problemDescription}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth className="submit-button">
          Book Now
        </Button>
      </form>
    </Box>
    </div>
  );
};

export default Book;
