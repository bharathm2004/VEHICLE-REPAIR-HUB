
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {
      email: !validateEmail(formData.email),
      password: !formData.password,
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      console.log('Users from local storage:', users); 
      const user = users.find(user => user.email === formData.email && user.password === formData.password);
      
      if (user) {
        console.log('User found:', user);
        const isAdmin = formData.email === 'admin@gmail.com' && formData.password === 'admin123';
        console.log('Is admin:', isAdmin); 
        dispatch(login({ email: formData.email, isAdmin }));
        navigate(isAdmin ? '/admin-dashboard' : '/dashboard');
      } else {
        setErrors({ email: true, password: true });
        console.log('Username or password is incorrect');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='l-body'> 
    <Box className="login-container">
      <Box
        component="form"
        className="login-form"
        noValidate
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <Typography variant="h4" component="h1" gutterBottom className="h">
          Login
        </Typography>
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
        <FormControl variant="filled" error={errors.password}>
          <InputLabel htmlFor="component-filled-password">Password</InputLabel>
          <FilledInput
            id="component-filled-password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <FormHelperText>Password is required</FormHelperText>}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Login
        </Button>
        <br/>
        <Typography variant="body2" className="signup-text">
          Don't have an account? <Link href="/register">Sign Up</Link>
        </Typography>
      </Box>
    </Box>
    </div>
  );
}

export default Login;
