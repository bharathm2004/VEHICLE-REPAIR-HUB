
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
    password: false,
    confirmPassword: false,
    termsAccepted: false,
  });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  

const handleSignup = async (e) => {
  e.preventDefault();

  // Validate the form data
  const newErrors = {
    name: !formData.name,
    email: !validateEmail(formData.email),
    phone: !validatePhone(formData.phone),
    address: !formData.address,
    password: !validatePassword(formData.password),
    confirmPassword: !formData.confirmPassword || formData.password !== formData.confirmPassword,
    termsAccepted: !formData.termsAccepted,
  };
  setErrors(newErrors);

  // If no errors, proceed with form submission
  if (Object.values(newErrors).every(error => !error)) {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          password: formData.password,
        }
      );
      
      console.log('Response:', response.data);
      
      // // Optionally store the user data locally if needed
      // const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      // existingUsers.push(formData);
      // localStorage.setItem('users', JSON.stringify(existingUsers));
      // console.log(existingUsers);

      const existingUsers = JSON.parse(localStorage.getItem('user')) || [];
existingUsers.push(response.data); // Use response.data if it contains the new user info
localStorage.setItem('user', JSON.stringify(existingUsers));


      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
};


  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className='r-body'>
    <Box className="signup-container">
      <Box
        component="form"
        className="signup-form"
        noValidate
        autoComplete="off"
        onSubmit={handleSignup}
      >
        <Typography variant="h4" component="h1" gutterBottom className="h">
          SignUp
        </Typography>
        <Box className="form-row">
          <Box className="form-column">
            <FormControl variant="filled" error={errors.name}>
              <InputLabel htmlFor="component-filled-name">Name</InputLabel>
              <FilledInput
                id="component-filled-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <FormHelperText>Name is required</FormHelperText>}
            </FormControl>
            <FormControl variant="filled" error={errors.email}>
              <InputLabel htmlFor="component-filled-email">Email</InputLabel>
              <FilledInput
                id="component-filled-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
            </FormControl>
            <FormControl variant="filled" error={errors.phone}>
              <InputLabel htmlFor="component-filled-phone">Phone Number</InputLabel>
              <FilledInput
                id="component-filled-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <FormHelperText>Phone number must be 10 digits</FormHelperText>}
            </FormControl>
          </Box>
          <Box className="form-column">
            <FormControl variant="filled" error={errors.address}>
              <InputLabel htmlFor="component-filled-address">Address</InputLabel>
              <FilledInput
                id="component-filled-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <FormHelperText>Address is required</FormHelperText>}
            </FormControl>
            <FormControl variant="filled" error={errors.password}>
              <InputLabel htmlFor="component-filled-password">Password</InputLabel>
              <FilledInput
                id="component-filled-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <FormHelperText>Password must be at least 8 characters long</FormHelperText>}
            </FormControl>
            <FormControl variant="filled" error={errors.confirmPassword}>
              <InputLabel htmlFor="component-filled-confirm-password">Confirm Password</InputLabel>
              <FilledInput
                id="component-filled-confirm-password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <FormHelperText>Passwords do not match</FormHelperText>}
            </FormControl>
          </Box>
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.termsAccepted}
              onChange={handleChange}
              name="termsAccepted"
              color="primary"
            />
          }
          label="I agree to the terms and conditions"
        />
        {errors.termsAccepted && <FormHelperText error>Terms and conditions must be accepted</FormHelperText>}
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Sign Up
        </Button>
        <Typography variant="body2" className="login-text">
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Box>
    </Box>
    </div>
  );
}

export default Register;
