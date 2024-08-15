// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import FilledInput from '@mui/material/FilledInput';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Button from '@mui/material/Button';
// import FormHelperText from '@mui/material/FormHelperText';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({
//     email: false,
//     password: false
//   });

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   const newErrors = {
//   //     email: !validateEmail(formData.email),
//   //     password: !formData.password,
//   //   };
//   //   setErrors(newErrors);

//   //   if (Object.values(newErrors).every(error => !error)) {
//   //     const users = JSON.parse(localStorage.getItem('users')) || [];
//   //     const user = users.find(user => user.email === formData.email && user.password === formData.password);
      
//   //     if (user) {
//   //       const isAdmin = formData.email === 'admin@gmail.com' && formData.password === 'admin123';
//   //       dispatch(login({ email: formData.email, isAdmin }));
//   //       localStorage.setItem('loggedInUser', user.email); // Store the logged-in user's email in local storage
//   //       navigate(isAdmin ? '/admin-dashboard' : '/'); // Navigate to profile page or admin dashboard
//   //     } else {
//   //       setErrors({ email: true, password: true });
//   //     }
//   //   }
//   // };

//    // Ensure you have axios imported

// const handleLogin = async (e) => {
//   e.preventDefault();

//   // Validate the form data
//   const newErrors = {
//     email: !validateEmail(formData.email),
//     password: !formData.password,
//   };
//   setErrors(newErrors);

//   // If no errors, proceed with form submission
//   if (Object.values(newErrors).every(error => !error)) {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         formData
//       );

//       console.log('Response:', response.data);

//       const { accessToken, role } = response.data;
      
//       // Store the token and role in local storage
//       localStorage.setItem("token", accessToken);
//       localStorage.setItem("role", role);

//       console.log("Token:", localStorage.getItem("token"));

//       // Dispatch login action if needed
//       const isAdmin = role === "Admin";
//       dispatch(login({ email: formData.email, isAdmin }));

//       // Navigate based on role
//       navigate(isAdmin ? "/admin-dashboard" : "/");

//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert("Invalid Credentials.!");
//     }
//   }
// };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className='l-body'> 
//       <Box className="login-container">
//         <Box
//           component="form"
//           className="login-form"
//           noValidate
//           autoComplete="off"
//           onSubmit={handleLogin}
//         >
//           <Typography variant="h4" component="h1" gutterBottom className="h">
//             Login
//           </Typography>
//           <FormControl variant="filled" error={errors.email}>
//             <InputLabel htmlFor="component-filled-email">Email</InputLabel>
//             <FilledInput
//               id="component-filled-email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
//           </FormControl>
//           <FormControl variant="filled" error={errors.password}>
//             <InputLabel htmlFor="component-filled-password">Password</InputLabel>
//             <FilledInput
//               id="component-filled-password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <FormHelperText>Password is required</FormHelperText>}
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" className="submit-button">
//             Login
//           </Button>
//           <br/>
//           <Typography variant="body2" className="signup-text">
//             Don't have an account? <Link href="/register">Sign Up</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import FilledInput from '@mui/material/FilledInput';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Button from '@mui/material/Button';
// import FormHelperText from '@mui/material/FormHelperText';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({ email: false, password: false });

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const newErrors = {
//       email: !validateEmail(formData.email),
//       password: !formData.password,
//     };
//     setErrors(newErrors);

//     if (!Object.values(newErrors).includes(true)) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/auth/login", formData);
//         const { accessToken, role } = response.data;
        
//         localStorage.setItem("token", accessToken);
//         localStorage.setItem("role", role);
//         console.log("Token:", localStorage.getItem("token"));
//         dispatch(login({ email: formData.email, isAdmin: role === "Admin" }));

//         navigate(role === "Admin" ? "/admin-dashboard" : "/");
//       } catch (error) {
//         console.error('Error logging in:', error);
//         alert("Invalid Credentials.");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className='l-body'>
//       <Box className="login-container">
//         <Box component="form" className="login-form" noValidate autoComplete="off" onSubmit={handleLogin}>
//           <Typography variant="h4" component="h1" gutterBottom className="h">
//             Login
//           </Typography>
//           <FormControl variant="filled" error={errors.email}>
//             <InputLabel htmlFor="component-filled-email">Email</InputLabel>
//             <FilledInput
//               id="component-filled-email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
//           </FormControl>
//           <FormControl variant="filled" error={errors.password}>
//             <InputLabel htmlFor="component-filled-password">Password</InputLabel>
//             <FilledInput
//               id="component-filled-password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <FormHelperText>Password is required</FormHelperText>}
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" className="submit-button">
//             Login
//           </Button>
//           <br />
//           <Typography variant="body2" className="signup-text">
//             Don't have an account? <Link href="/register">Sign Up</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import FilledInput from '@mui/material/FilledInput';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Button from '@mui/material/Button';
// import FormHelperText from '@mui/material/FormHelperText';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({ email: false, password: false });

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     const newErrors = {
//       email: !validateEmail(formData.email),
//       password: !formData.password,
//     };
//     setErrors(newErrors);
  
//     if (!Object.values(newErrors).includes(true)) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/auth/login", formData);
//         console.log("API Response:", response.data);
  
//         const { accessToken, role, userDetails } = response.data;
  
//         if (userDetails && typeof userDetails === 'object') {
//           localStorage.setItem("userDetails", JSON.stringify(userDetails));
//         } else {
//           console.warn("userDetails is not a valid object.");
//           localStorage.removeItem("userDetails");
//         }
  
//         localStorage.setItem("token", accessToken);
//         localStorage.setItem("role", role);
//         console.log("Token:", localStorage.getItem("token"));
//         console.log("User Details:", JSON.parse(localStorage.getItem("userDetails") || '{}'));
  
//         dispatch(login({ email: formData.email, isAdmin: role === "Admin" }));
  
//         navigate(role === "Admin" ? "/admin-dashboard" : "/");
//       } catch (error) {
//         console.error('Error logging in:', error);
//         alert("Invalid Credentials.");
//       }
//     }
//   };
  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className='l-body'>
//       <Box className="login-container">
//         <Box component="form" className="login-form" noValidate autoComplete="off" onSubmit={handleLogin}>
//           <Typography variant="h4" component="h1" gutterBottom className="h">
//             Login
//           </Typography>
//           <FormControl variant="filled" error={errors.email}>
//             <InputLabel htmlFor="component-filled-email">Email</InputLabel>
//             <FilledInput
//               id="component-filled-email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
//           </FormControl>
//           <FormControl variant="filled" error={errors.password}>
//             <InputLabel htmlFor="component-filled-password">Password</InputLabel>
//             <FilledInput
//               id="component-filled-password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <FormHelperText>Password is required</FormHelperText>}
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" className="submit-button">
//             Login
//           </Button>
//           <br />
//           <Typography variant="body2" className="signup-text">
//             Don't have an account? <Link href="/register">Sign Up</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import FilledInput from '@mui/material/FilledInput';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Button from '@mui/material/Button';
// import FormHelperText from '@mui/material/FormHelperText';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import './Login.css';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({ email: false, password: false });

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     const newErrors = {
//       email: !validateEmail(formData.email),
//       password: !formData.password,
//     };
//     setErrors(newErrors);
  
//     if (!Object.values(newErrors).includes(true)) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/auth/login", formData);
//         console.log("API Response:", response.data);
  
//         const { accessToken, role, userId, userDetails } = response.data;

//         // Store additional user details if provided
//         if (userDetails && typeof userDetails === 'object') {
//           localStorage.setItem("userDetails", JSON.stringify(userDetails));
//         } else {
//           console.warn("userDetails is not a valid object.");
//           localStorage.removeItem("userDetails");
//         }
  
//         localStorage.setItem("token", accessToken);
//         localStorage.setItem("role", role);
//         localStorage.setItem("userId", userId); // Store userId
//         console.log("Token:", localStorage.getItem("token"));
//         console.log("User Details:", JSON.parse(localStorage.getItem("userDetails") || '{}'));
  
//         dispatch(login({ email: formData.email, isAdmin: role === "Admin", userId }));
  
//         navigate(role === "Admin" ? "/admin-dashboard" : "/");
//       } catch (error) {
//         console.error('Error logging in:', error.response ? error.response.data : error.message);
//         alert("Invalid Credentials.");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className='l-body'>
//       <Box className="login-container">
//         <Box component="form" className="login-form" noValidate autoComplete="off" onSubmit={handleLogin}>
//           <Typography variant="h4" component="h1" gutterBottom className="h">
//             Login
//           </Typography>
//           <FormControl variant="filled" error={errors.email}>
//             <InputLabel htmlFor="component-filled-email">Email</InputLabel>
//             <FilledInput
//               id="component-filled-email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <FormHelperText>Valid email is required</FormHelperText>}
//           </FormControl>
//           <FormControl variant="filled" error={errors.password}>
//             <InputLabel htmlFor="component-filled-password">Password</InputLabel>
//             <FilledInput
//               id="component-filled-password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && <FormHelperText>Password is required</FormHelperText>}
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" className="submit-button">
//             Login
//           </Button>
//           <br />
//           <Typography variant="body2" className="signup-text">
//             Don't have an account? <Link href="/register">Sign Up</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Login;

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
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Validate form fields
    const newErrors = {
      email: !validateEmail(formData.email),
      password: !formData.password,
    };
    setErrors(newErrors);
  
    if (!Object.values(newErrors).includes(true)) {
      try {
        const response = await axios.post("http://localhost:8080/api/auth/login", formData);
        console.log("API Response:", response.data);
  
        const { accessToken, role, userDetails } = response.data;

        // Store additional user details if provided
        if (userDetails && typeof userDetails === 'object') {
          localStorage.setItem("userDetails", JSON.stringify(userDetails));
        } else {
          console.warn("userDetails is not a valid object.");
          localStorage.removeItem("userDetails");
        }
  
        localStorage.setItem("token", accessToken);
        localStorage.setItem("role", role);
        localStorage.setItem('userEmail', response.email); 
        console.log("Token:", localStorage.getItem("token"));
        console.log("User Details:", JSON.parse(localStorage.getItem("userDetails") || '{}'));
  
        // Dispatch login action to Redux
        dispatch(login({ email: formData.email, isAdmin: role === "Admin", token: accessToken }));
  
        // Navigate to appropriate route based on role
        navigate(role === "Admin" ? "/admin-dashboard" : "/");
      } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        alert("Invalid Credentials.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='l-body'>
      <Box className="login-container">
        <Box component="form" className="login-form" noValidate autoComplete="off" onSubmit={handleLogin}>
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
          <br />
          <Typography variant="body2" className="signup-text">
            Don't have an account? <Link href="/register">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
