// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Add useNavigate
// import { useSelector } from 'react-redux'; // Add useSelector
// import './Services.css';

// const services = [
//   {
//     title: 'Oil Change',
//     description: 'Keep your engine running smoothly with our oil change service.',
//     icon: <FaOilCan />
//   },
 
//   {
//     title: 'Tire Replacement',
//     description: 'Get the best tires and have them professionally installed.',
//     icon: <FaCog />
//   },
//   {
//     title: 'Battery Replacement',
//     description: 'We offer fast and reliable battery replacement services.',
//     icon: <FaBatteryFull />
//   },
//   {
//     title: 'Engine Diagnostics',
//     description: 'Get accurate engine diagnostics and solutions for any issues.',
//     icon: <FaWrench />
//   },
//   {
//     title: 'Transmission Repair',
//     description: 'Professional transmission repair services for smooth driving.',
//     icon: <FaCog />
//   },
//   {
//     title: 'Air Conditioning Service',
//     description: 'Stay cool with our comprehensive air conditioning service.',
//     icon: <FaSnowflake />
//   },
//   {
//     title: 'Suspension Repair',
//     description: 'Ensure a smooth ride with our suspension repair services.',
//     icon: <FaCompressArrowsAlt />
//   },
//   {
//     title: 'Detailing',
//     description: 'Keep your car looking new with our detailing services.',
//     icon: <FaCarSide />
//   },
//   {
//     title: 'Battery Testing',
//     description: 'Ensure your car battery is in top condition.',
//     icon: <FaCarBattery />
//   },
//   {
//     title: 'General Maintenance',
//     description: 'Comprehensive maintenance services to keep your car in top shape.',
//     icon: <FaTools />
//   },
//   {
//     title: 'Brake Repair',
//     description: 'Ensure your safety with our comprehensive brake repair services.',
//     icon: <FaCarCrash />
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get authentication state

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book'); // Redirect to the booking page
//     } else {
//       navigate('/login'); // Redirect to the login page
//     }
//   };

//   return (
//     <div className='s-body'>
//     <Box className="service-container">
//       <Typography variant="h3" component="h1" gutterBottom className="service-title">
//         Our Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card className="service-card">
//               <CardContent>
//                 <div className="service-icon">
//                   {service.icon}
//                 </div>
//                 <Typography variant="h5" component="h2">
//                   {service.title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   {service.description}
//                 </Typography>
//                 <br/>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   className="book-now-button"
//                   onClick={handleBookNow} // Add onClick handler
//                 >
//                   Book Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//     </div>
//   );
// };

// export default Services;


// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './Services.css';

// const initialServices = [
//   {
//     title: 'Oil Change',
//     description: 'Keep your engine running smoothly with our oil change service.',
//     icon: <FaOilCan />
//   },
//   {
//         title: 'Tire Replacement',
//         description: 'Get the best tires and have them professionally installed.',
//         icon: <FaCog />
//       },
//       {
//         title: 'Battery Replacement',
//         description: 'We offer fast and reliable battery replacement services.',
//         icon: <FaBatteryFull />
//       },
//       {
//         title: 'Engine Diagnostics',
//         description: 'Get accurate engine diagnostics and solutions for any issues.',
//         icon: <FaWrench />
//       },
//       {
//         title: 'Transmission Repair',
//         description: 'Professional transmission repair services for smooth driving.',
//         icon: <FaCog />
//       },
//       {
//         title: 'Air Conditioning Service',
//         description: 'Stay cool with our comprehensive air conditioning service.',
//         icon: <FaSnowflake />
//       },
//       {
//         title: 'Suspension Repair',
//         description: 'Ensure a smooth ride with our suspension repair services.',
//         icon: <FaCompressArrowsAlt />
//       },
//       {
//         title: 'Detailing',
//         description: 'Keep your car looking new with our detailing services.',
//         icon: <FaCarSide />
//       },
//       {
//         title: 'Battery Testing',
//         description: 'Ensure your car battery is in top condition.',
//         icon: <FaCarBattery />
//       },
//       {
//         title: 'General Maintenance',
//         description: 'Comprehensive maintenance services to keep your car in top shape.',
//         icon: <FaTools />
//       },
//       {
//         title: 'Brake Repair',
//         description: 'Ensure your safety with our comprehensive brake repair services.',
//         icon: <FaCarCrash />
//       },
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const [services, setServices] = useState(initialServices);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '' });

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = () => {
//     setServices([...services, { ...currentService, icon: <FaTools /> }]); // Change FaTools to the desired icon component
//     setCurrentService({ title: '', description: '', icon: '' });
//     setOpen(false);
//   };

//   const handleDeleteService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleEditService = (index) => {
//     const newServices = [...services];
//     newServices[index] = currentService;
//     setServices(newServices);
//     setCurrentService({ title: '', description: '', icon: '' });
//     setOpen(false);
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <br/>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     className="book-now-button"
//                     onClick={handleBookNow}
//                   >
//                     Book Now
//                   </Button>
//                   {isAdmin && (
//                     <>
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="contained"
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(index)}
//                       >
//                         Delete
//                       </Button>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         {isAdmin && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleOpenDialog()}
//             className="add-service-button"
//           >
//             Add Service
//           </Button>
//         )}
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.title ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.title ? handleEditService : handleAddService} color="primary">
//             {currentService.title ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// // export default Services;
// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './Services.css';

// const initialServices = [
//   {
//     title: 'Oil Change',
//     description: 'Keep your engine running smoothly with our oil change service.',
//     icon: <FaOilCan />
//   },
//   {
//     title: 'Tire Replacement',
//     description: 'Get the best tires and have them professionally installed.',
//     icon: <FaCog />
//   },
//   {
//     title: 'Battery Replacement',
//     description: 'We offer fast and reliable battery replacement services.',
//     icon: <FaBatteryFull />
//   },
//   {
//     title: 'Engine Diagnostics',
//     description: 'Get accurate engine diagnostics and solutions for any issues.',
//     icon: <FaWrench />
//   },
//   {
//     title: 'Transmission Repair',
//     description: 'Professional transmission repair services for smooth driving.',
//     icon: <FaCog />
//   },
//   {
//     title: 'Air Conditioning Service',
//     description: 'Stay cool with our comprehensive air conditioning service.',
//     icon: <FaSnowflake />
//   },
//   {
//     title: 'Suspension Repair',
//     description: 'Ensure a smooth ride with our suspension repair services.',
//     icon: <FaCompressArrowsAlt />
//   },
//   {
//     title: 'Detailing',
//     description: 'Keep your car looking new with our detailing services.',
//     icon: <FaCarSide />
//   },
//   {
//     title: 'Battery Testing',
//     description: 'Ensure your car battery is in top condition.',
//     icon: <FaCarBattery />
//   },
//   {
//     title: 'General Maintenance',
//     description: 'Comprehensive maintenance services to keep your car in top shape.',
//     icon: <FaTools />
//   },
//   {
//     title: 'Brake Repair',
//     description: 'Ensure your safety with our comprehensive brake repair services.',
//     icon: <FaCarCrash />
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const [services, setServices] = useState(initialServices);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '' });

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = () => {
//     setServices([...services, { ...currentService, icon: <FaTools /> }]);
//     setCurrentService({ title: '', description: '', icon: '' });
//     setOpen(false);
//   };

//   const handleDeleteService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleEditService = (index) => {
//     const newServices = [...services];
//     newServices[index] = currentService;
//     setServices(newServices);
//     setCurrentService({ title: '', description: '', icon: '' });
//     setOpen(false);
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         {isAdmin && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleOpenDialog()}
//             className="add-service-button"
//           >
//             Add Service
//           </Button>
//         )}
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(index)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.title ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.title ? handleEditService : handleAddService} color="primary">
//             {currentService.title ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './Services.css';

// const initialServices = [
//   {
//     serviceId: 1,
//     title: 'Oil Change',
//     description: 'Keep your engine running smoothly with our oil change service.',
//     icon: <FaOilCan />,
//     cost: '500'
//   },
//   {
//     serviceId: 2,
//     title: 'Tire Replacement',
//     description: 'Get the best tires and have them professionally installed.',
//     icon: <FaCog />,
//     cost: '2000'
//   },
//   {
//     serviceId: 3,
//     title: 'Battery Replacement',
//     description: 'We offer fast and reliable battery replacement services.',
//     icon: <FaBatteryFull />,
//     cost: '1500'
//   },
//   {
//     serviceId: 4,
//     title: 'Engine Diagnostics',
//     description: 'Get accurate engine diagnostics and solutions for any issues.',
//     icon: <FaWrench />,
//     cost: '1000'
//   },
//   {
//     serviceId: 5,
//     title: 'Transmission Repair',
//     description: 'Professional transmission repair services for smooth driving.',
//     icon: <FaCog />,
//     cost: '3000'
//   },
//   {
//     serviceId: 6,
//     title: 'Air Conditioning Service',
//     description: 'Stay cool with our comprehensive air conditioning service.',
//     icon: <FaSnowflake />,
//     cost: '1200'
//   },
//   {
//     serviceId: 7,
//     title: 'Suspension Repair',
//     description: 'Ensure a smooth ride with our suspension repair services.',
//     icon: <FaCompressArrowsAlt />,
//     cost: '1800'
//   },
//   {
//     serviceId: 8,
//     title: 'Detailing',
//     description: 'Keep your car looking new with our detailing services.',
//     icon: <FaCarSide />,
//     cost: '800'
//   },
//   {
//     serviceId: 9,
//     title: 'Battery Testing',
//     description: 'Ensure your car battery is in top condition.',
//     icon: <FaCarBattery />,
//     cost: '400'
//   },
//   {
//     serviceId: 10,
//     title: 'General Maintenance',
//     description: 'Comprehensive maintenance services to keep your car in top shape.',
//     icon: <FaTools />,
//     cost: '700'
//   },
//   {
//     serviceId: 11,
//     title: 'Brake Repair',
//     description: 'Ensure your safety with our comprehensive brake repair services.',
//     icon: <FaCarCrash />,
//     cost: '2500'
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const [services, setServices] = useState(initialServices);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '', cost: '', serviceId: 0 });

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = () => {
//     const newServiceId = services.length ? Math.max(services.map(service => service.serviceId)) + 1 : 1;
//     setServices([...services, { ...currentService, serviceId: newServiceId, icon: <FaTools /> }]);
//     setCurrentService({ title: '', description: '', icon: '', cost: '', serviceId: 0 });
//     setOpen(false);
//   };

//   const handleDeleteService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleEditService = (index) => {
//     const newServices = [...services];
//     newServices[index] = { ...currentService, serviceId: services[index].serviceId };
//     setServices(newServices);
//     setCurrentService({ title: '', description: '', icon: '', cost: '', serviceId: 0 });
//     setOpen(false);
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '', cost: '', serviceId: 0 }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleOpenDialog()}
//             className="add-service-button"
//             style={{ marginTop: '20px', marginBottom: '20px', width: 'auto', minWidth: '200px' }}
//           >
//             Add Service
//           </Button>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(index)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.title ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//           {isAdmin && (
//             <TextField
//               margin="dense"
//               label="Service ID"
//               fullWidth
//               value={currentService.serviceId}
//               onChange={(e) => setCurrentService({ ...currentService, serviceId: parseInt(e.target.value) })}
//             />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.title ? handleEditService : handleAddService} color="primary">
//             {currentService.title ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './Services.css';

// const initialServices = [
//   {
//     serviceId: 1,
//     title: 'Oil Change',
//     description: 'Keep your engine running smoothly with our oil change service.',
//     icon: <FaOilCan />,
//     cost: '500'
//   },
//   {
//     serviceId: 2,
//     title: 'Tire Replacement',
//     description: 'Get the best tires and have them professionally installed.',
//     icon: <FaCog />,
//     cost: '2000'
//   },
//   {
//     serviceId: 3,
//     title: 'Battery Replacement',
//     description: 'We offer fast and reliable battery replacement services.',
//     icon: <FaBatteryFull />,
//     cost: '1500'
//   },
//   {
//     serviceId: 4,
//     title: 'Engine Diagnostics',
//     description: 'Get accurate engine diagnostics and solutions for any issues.',
//     icon: <FaWrench />,
//     cost: '1000'
//   },
//   {
//     serviceId: 5,
//     title: 'Transmission Repair',
//     description: 'Professional transmission repair services for smooth driving.',
//     icon: <FaCog />,
//     cost: '3000'
//   },
//   {
//     serviceId: 6,
//     title: 'Air Conditioning Service',
//     description: 'Stay cool with our comprehensive air conditioning service.',
//     icon: <FaSnowflake />,
//     cost: '1200'
//   },
//   {
//     serviceId: 7,
//     title: 'Suspension Repair',
//     description: 'Ensure a smooth ride with our suspension repair services.',
//     icon: <FaCompressArrowsAlt />,
//     cost: '1800'
//   },
//   {
//     serviceId: 8,
//     title: 'Detailing',
//     description: 'Keep your car looking new with our detailing services.',
//     icon: <FaCarSide />,
//     cost: '800'
//   },
//   {
//     serviceId: 9,
//     title: 'Battery Testing',
//     description: 'Ensure your car battery is in top condition.',
//     icon: <FaCarBattery />,
//     cost: '400'
//   },
//   {
//     serviceId: 10,
//     title: 'General Maintenance',
//     description: 'Comprehensive maintenance services to keep your car in top shape.',
//     icon: <FaTools />,
//     cost: '700'
//   },
//   {
//     serviceId: 11,
//     title: 'Brake Repair',
//     description: 'Ensure your safety with our comprehensive brake repair services.',
//     icon: <FaCarCrash />,
//     cost: '2500'
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const [services, setServices] = useState(initialServices);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '', cost: '', serviceId: 0 });

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = () => {
//     const newServiceId = services.length ? Math.max(services.map(service => service.serviceId)) + 1 : 1;
//     setServices([...services, { ...currentService, serviceId: newServiceId, icon: <FaTools /> }]);
//     setCurrentService({ title: '', description: '', icon: '', cost: '', serviceId: 0 });
//     setOpen(false);
//   };

//   const handleDeleteService = (index) => {
//     const newServices = [...services];
//     newServices.splice(index, 1);
//     setServices(newServices);
//   };

//   const handleEditService = (index) => {
//     const newServices = [...services];
//     newServices[index] = { ...currentService, serviceId: services[index].serviceId };
//     setServices(newServices);
//     setCurrentService({ title: '', description: '', icon: '', cost: '', serviceId: 0 });
//     setOpen(false);
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '', cost: '', serviceId: 0 }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px',
//                }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(index)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.title ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//           {isAdmin && (
//             <TextField
//               margin="dense"
//               label="Service ID"
//               fullWidth
//               value={currentService.serviceId}
//               onChange={(e) => setCurrentService({ ...currentService, serviceId: parseInt(e.target.value) })}
//             />
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.title ? handleEditService : handleAddService} color="primary">
//             {currentService.title ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;

// post service works 
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import './Services.css';

// const API_URL = 'http://localhost:8080/api/services';

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const token = useSelector((state) => state.auth.token);
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '', cost: '' });

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };
    
//     fetchServices();
//   }, []);

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = async () => {
//     try {
//       const response = await axios.post(
//         API_URL,
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//             'Content-Type': 'application/json',
//           },
//         }
//       );
  
//       console.log('Service added successfully:', response.data); // Log response data
//       setServices([...services, response.data]);
//       setCurrentService({ title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding service:', error.response ? error.response.data : error.message);
//       alert('Failed to add service'); // Notify user of failure
//     }
//   };

//   const handleDeleteService = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//         },
//       });
//       setServices(services.filter(service => service.serviceId !== id));
//     } catch (error) {
//       console.error('Error deleting service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEditService = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/${currentService.serviceId}`, 
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setServices(services.map(service => (service.serviceId === response.data.serviceId ? response.data : service)));
//       setCurrentService({ title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error updating service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '', cost: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px' }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {service.icon}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(service.serviceId)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.serviceId ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.serviceId ? handleEditService : handleAddService} color="primary">
//             {currentService.serviceId ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import './Services.css';

// const API_URL = 'http://localhost:8080/api/services';

// const iconMapping = {
//   'FaOilCan': <FaOilCan />,
//   'FaCarCrash': <FaCarCrash />,
//   'FaCog': <FaCog />,
//   'FaBatteryFull': <FaBatteryFull />,
//   'FaWrench': <FaWrench />,
//   'FaSnowflake': <FaSnowflake />,
//   'FaCompressArrowsAlt': <FaCompressArrowsAlt />,
//   'FaCarSide': <FaCarSide />,
//   'FaCarBattery': <FaCarBattery />,
//   'FaTools': <FaTools />,
// };

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const token = useSelector((state) => state.auth.token);
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ title: '', description: '', icon: '', cost: '' });

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };
    
//     fetchServices();
//   }, []);

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = async () => {
//     try {
//       const response = await axios.post(
//         API_URL,
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
  
//       console.log('Service added successfully:', response.data);
//       setServices(prevServices => [...prevServices, response.data]);
//       setCurrentService({ title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding service:', error.response ? error.response.data : error.message);
//       alert('Failed to add service');
//     }
//   };

//   const handleDeleteService = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
//       setServices(prevServices => prevServices.filter(service => service.serviceId !== id));
//     } catch (error) {
//       console.error('Error deleting service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEditService = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/${currentService.serviceId}`, 
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setServices(prevServices => prevServices.map(service => (service.serviceId === response.data.serviceId ? response.data : service)));
//       setCurrentService({ title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error updating service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '', cost: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px' }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service) => (
//             <Grid item xs={12} sm={6} md={4} key={service.serviceId}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {iconMapping[service.icon] || <FaWrench />} {/* Default icon if not found */}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(service.serviceId)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.serviceId ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.serviceId ? handleEditService : handleAddService} color="primary">
//             {currentService.serviceId ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;


// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import './Services.css';

// const API_URL = 'http://localhost:8080/api/services';

// const iconMapping = {
//   'FaOilCan': <FaOilCan />,
//   'FaCarCrash': <FaCarCrash />,
//   'FaCog': <FaCog />,
//   'FaBatteryFull': <FaBatteryFull />,
//   'FaWrench': <FaWrench />,
//   'FaSnowflake': <FaSnowflake />,
//   'FaCompressArrowsAlt': <FaCompressArrowsAlt />,
//   'FaCarSide': <FaCarSide />,
//   'FaCarBattery': <FaCarBattery />,
//   'FaTools': <FaTools />,
// };

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const token = useSelector((state) => state.auth.token);
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ serviceId: '', title: '', description: '', icon: '', cost: '' });

//   useEffect(() => {

//     //localStorage.removeItem('services');
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         const fetchedServices = response.data;
        
//         // Store fetched services in local storage
//         localStorage.setItem('services', JSON.stringify(fetchedServices));
        
//         // Set services state
//         setServices(fetchedServices);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     // Retrieve services from local storage
//     const storedServices = JSON.parse(localStorage.getItem('services')) || [];
//     setServices(storedServices);
//   }, []);

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = async () => {
//     try {
//       const response = await axios.post(
//         API_URL,
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log('Service added successfully:', response.data);
//       const newService = response.data;
//       const updatedServices = [...services, newService];
      
//       // Update local storage with the new service
//       localStorage.setItem('services', JSON.stringify(updatedServices));
      
//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding service:', error.response ? error.response.data : error.message);
//       alert('Failed to add service');
//     }
//   };

//   const handleDeleteService = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });
      
//       // Filter out the deleted service
//       const updatedServices = services.filter(service => service.serviceId !== id);
      
//       // Update local storage with the remaining services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//     } catch (error) {
//       console.error('Error deleting service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEditService = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/${currentService.serviceId}`, 
//         currentService,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       const updatedService = response.data;
//       const updatedServices = services.map(service =>
//         service.serviceId === updatedService.serviceId ? updatedService : service
//       );
      
//       // Update local storage with the updated services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error updating service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleOpenDialog = (service = { title: '', description: '', icon: '', cost: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px' }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service) => (
//             <Grid item xs={12} sm={6} md={4} key={service.serviceId}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {iconMapping[service.icon] || <FaWrench />} {/* Default icon if not found */}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(service.serviceId)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.serviceId ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.serviceId ? handleEditService : handleAddService} color="primary">
//             {currentService.serviceId ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;


// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import './Services.css';

// const API_URL = 'http://localhost:8080/api/services';

// const iconMapping = {
//   'FaOilCan': <FaOilCan />,
//   'FaCarCrash': <FaCarCrash />,
//   'FaCog': <FaCog />,
//   'FaBatteryFull': <FaBatteryFull />,
//   'FaWrench': <FaWrench />,
//   'FaSnowflake': <FaSnowflake />,
//   'FaCompressArrowsAlt': <FaCompressArrowsAlt />,
//   'FaCarSide': <FaCarSide />,
//   'FaCarBattery': <FaCarBattery />,
//   'FaTools': <FaTools />,
// };

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   //const token = useSelector((state) => state.auth.token);
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ serviceId: '', title: '', description: '', icon: '', cost: '' });

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(API_URL, getAuthHeaders());
//         const fetchedServices = response.data;

//         // Store fetched services in local storage
//         localStorage.setItem('services', JSON.stringify(fetchedServices));

//         // Set services state
//         setServices(fetchedServices);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   useEffect(() => {
//     // Retrieve services from local storage
//     const storedServices = JSON.parse(localStorage.getItem('services')) || [];
//     setServices(storedServices);
//   }, []);

//   const getAuthHeaders = () => ({
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = async () => {
//     try {
//       const response = await axios.post(
//         API_URL,
//         currentService,
//         getAuthHeaders()
//       );

//       const newService = response.data;
//       const updatedServices = [...services, newService];

//       // Update local storage with the new service
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding service:', error.response ? error.response.data : error.message);
//       alert('Failed to add service');
//     }
//   };

//   const handleDeleteService = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`, getAuthHeaders());

//       // Filter out the deleted service
//       const updatedServices = services.filter(service => service.serviceId !== id);

//       // Update local storage with the remaining services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//     } catch (error) {
//       console.error('Error deleting service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEditService = async () => {
//     try {
//       const response = await axios.put(
//         `${API_URL}/${currentService.serviceId}`,
//         currentService,
//         getAuthHeaders()
//       );

//       const updatedService = response.data;
//       const updatedServices = services.map(service =>
//         service.serviceId === updatedService.serviceId ? updatedService : service
//       );

//       // Update local storage with the updated services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error updating service:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleOpenDialog = (service = { serviceId: '', title: '', description: '', icon: '', cost: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px' }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service) => (
//             <Grid item xs={12} sm={6} md={4} key={service.serviceId}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {iconMapping[service.icon] || <FaWrench />} {/* Default icon if not found */}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(service.serviceId)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.serviceId ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={currentService.serviceId ? handleEditService : handleAddService} color="primary">
//             {currentService.serviceId ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;


// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
// import './Services.css';

// const API_URL = 'http://localhost:8080/api/services';

// const iconMapping = {
//   'FaOilCan': <FaOilCan />,
//   'FaCarCrash': <FaCarCrash />,
//   'FaCog': <FaCog />,
//   'FaBatteryFull': <FaBatteryFull />,
//   'FaWrench': <FaWrench />,
//   'FaSnowflake': <FaSnowflake />,
//   'FaCompressArrowsAlt': <FaCompressArrowsAlt />,
//   'FaCarSide': <FaCarSide />,
//   'FaCarBattery': <FaCarBattery />,
//   'FaTools': <FaTools />,
// };

// const Services = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const isAdmin = useSelector((state) => state.auth.isAdmin);
//   const [services, setServices] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentService, setCurrentService] = useState({ serviceId: '', title: '', description: '', icon: '', cost: '' });

//   // Fetch services from backend and store in local storage
//   useEffect(() => {
//     const fetchServices = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       try {
//         const response = await fetch(API_URL, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const fetchedServices = await response.json();

//         // Store fetched services in local storage
//         localStorage.setItem('services', JSON.stringify(fetchedServices));

//         // Set services state
//         setServices(fetchedServices);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       }
//     };

//     fetchServices();
//   }, []);

//   // Retrieve services from local storage
//   useEffect(() => {
//     const storedServices = JSON.parse(localStorage.getItem('services')) || [];
//     console.log('Stored Services:', storedServices); // Debug log
//     setServices(storedServices);
//   }, []);

//   const handleBookNow = () => {
//     if (isAuthenticated) {
//       navigate('/book');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleAddService = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(currentService),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const newService = await response.json();
//       const updatedServices = [...services, newService];

//       // Update local storage with the new service
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding service:', error);
//       alert('Failed to add service');
//     }
//   };

//   const handleDeleteService = async (id) => {
//     try {
//       const token = localStorage.getItem('token');
//       await fetch(`${API_URL}/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//         },
//       });

//       // Filter out the deleted service
//       const updatedServices = services.filter(service => service.serviceId !== id);

//       // Update local storage with the remaining services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//     } catch (error) {
//       console.error('Error deleting service:', error);
//     }
//   };

//   const handleEditService = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`${API_URL}/${currentService.serviceId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(currentService),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const updatedService = await response.json();
//       const updatedServices = services.map(service =>
//         service.serviceId === updatedService.serviceId ? updatedService : service
//       );

//       // Update local storage with the updated services
//       localStorage.setItem('services', JSON.stringify(updatedServices));

//       setServices(updatedServices);
//       setCurrentService({ serviceId: '', title: '', description: '', icon: '', cost: '' });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error updating service:', error);
//     }
//   };

//   const handleOpenDialog = (service = { serviceId: '', title: '', description: '', icon: '', cost: '' }) => {
//     setCurrentService(service);
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='s-body'>
//       <Box className="service-container">
//         <Typography variant="h3" component="h1" gutterBottom className="service-title">
//           Our Services
//         </Typography>
//         {isAdmin && (
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleOpenDialog()}
//               className="add-service-button"
//               style={{ width: 'auto', minWidth: '200px' }}
//             >
//               Add Service
//             </Button>
//           </Box>
//         )}
//         <Grid container spacing={3}>
//           {services.map((service) => (
//             <Grid item xs={12} sm={6} md={4} key={service.serviceId}>
//               <Card className="service-card">
//                 <CardContent>
//                   <div className="service-icon">
//                     {iconMapping[service.icon] || <FaWrench />} {/* Default icon if not found */}
//                   </div>
//                   <Typography variant="h5" component="h2">
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     {service.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" component="p">
//                     Cost: ₹{service.cost}
//                   </Typography>
//                   {isAdmin && (
//                     <Typography variant="body2" color="textSecondary" component="p">
//                       Service ID: {service.serviceId}
//                     </Typography>
//                   )}
//                   <br />
//                   {!isAdmin && (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       className="book-now-button"
//                       onClick={handleBookNow}
//                     >
//                       Book Now
//                     </Button>
//                   )}
//                   {isAdmin && (
//                     <>
//                       <IconButton
//                         color="primary"
//                         className="edit-button"
//                         onClick={() => handleOpenDialog(service)}
//                       >
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         color="error"
//                         className="delete-button"
//                         onClick={() => handleDeleteService(service.serviceId)}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{currentService.serviceId ? 'Edit Service' : 'Add Service'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Service Title"
//             fullWidth
//             value={currentService.title}
//             onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Description"
//             fullWidth
//             value={currentService.description}
//             onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Service Icon (e.g., FaOilCan)"
//             fullWidth
//             value={currentService.icon}
//             onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Cost in Rupees"
//             fullWidth
//             value={currentService.cost}
//             onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button
//             onClick={currentService.serviceId ? handleEditService : handleAddService}
//             color="primary"
//           >
//             {currentService.serviceId ? 'Update' : 'Add'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaOilCan, FaCarCrash, FaCog, FaBatteryFull, FaWrench, FaSnowflake, FaCompressArrowsAlt, FaCarSide, FaCarBattery, FaTools } from 'react-icons/fa';
import './Services.css';

const API_URL = 'http://localhost:8080/api/services';

// Map icon names to actual icons
const iconMapping = {
  'FaOilCan': <FaOilCan />,
  'FaCarCrash': <FaCarCrash />,
  'FaCog': <FaCog />,
  'FaBatteryFull': <FaBatteryFull />,
  'FaWrench': <FaWrench />,
  'FaSnowflake': <FaSnowflake />,
  'FaCompressArrowsAlt': <FaCompressArrowsAlt />,
  'FaCarSide': <FaCarSide />,
  'FaCarBattery': <FaCarBattery />,
  'FaTools': <FaTools />,
};

const Services = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentService, setCurrentService] = useState({ id: '', title: '', description: '', icon: '', cost: '' });

  // Fetch services from backend and store in local storage
  useEffect(() => {
    const fetchServices = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      

      try {
        // const response = await fetch(API_URL, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        //   },
        // });

        const response = await fetch(`${API_URL}?userId=${user.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const fetchedServices = await response.json();

        // Store fetched services in local storage
        localStorage.setItem('services', JSON.stringify(fetchedServices));

        // Set services state
        setServices(fetchedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  // Retrieve services from local storage
  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    console.log('Stored Services:', storedServices); // Debug log
    setServices(storedServices);
  }, []);

  const handleBookNow = () => {
    if (isAuthenticated) {
      navigate('/book');
    } else {
      navigate('/login');
    }
  };

  const handleAddService = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(currentService),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newService = await response.json();
      const updatedServices = [...services, newService];

      // Update local storage with the new service
      localStorage.setItem('services', JSON.stringify(updatedServices));

      setServices(updatedServices);
      setCurrentService({ id: '', title: '', description: '', icon: '', cost: '' });
      setOpen(false);
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service');
    }
  };

  const handleDeleteService = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      // Filter out the deleted service
      const updatedServices = services.filter(service => service.id !== id);

      // Update local storage with the remaining services
      localStorage.setItem('services', JSON.stringify(updatedServices));

      setServices(updatedServices);
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleEditService = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/${currentService.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(currentService),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedService = await response.json();
      const updatedServices = services.map(service =>
        service.id === updatedService.id ? updatedService : service
      );

      // Update local storage with the updated services
      localStorage.setItem('services', JSON.stringify(updatedServices));

      setServices(updatedServices);
      setCurrentService({ id: '', title: '', description: '', icon: '', cost: '' });
      setOpen(false);
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleOpenDialog = (service = { id: '', title: '', description: '', icon: '', cost: '' }) => {
    setCurrentService(service);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div className='s-body'>
      <Box className="service-container">
        <Typography variant="h3" component="h1" gutterBottom className="service-title">
          Our Services
        </Typography>
        {isAdmin && (
          <Box display="flex" justifyContent="center" mb={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenDialog()}
              className="add-service-button"
              style={{ width: 'auto', minWidth: '200px' }}
            >
              Add Service
            </Button>
          </Box>
        )}
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card className="service-card">
                <CardContent>
                  <div className="service-icon-name">
                    {iconMapping[service.icon] || <FaWrench />} {/* Default icon if not found */}
                  </div>
                  <Typography variant="h5" component="h2">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {service.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Cost: ₹{service.cost}
                  </Typography>
                  {isAdmin && (
                    <Typography variant="body2" color="textSecondary" component="p">
                      Service ID: {service.id} {/* Ensure ID is displayed */}
                    </Typography>
                  )}
                  <br />
                  {!isAdmin && (
                    <Button
                      variant="contained"
                      color="primary"
                      className="book-now-button"
                      onClick={handleBookNow}
                    >
                      Book Now
                    </Button>
                  )}
                  {isAdmin && (
                    <>
                      <IconButton
                        color="primary"
                        className="edit-button"
                        onClick={() => handleOpenDialog(service)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        className="delete-button"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        <Delete />
                      </IconButton>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{currentService.id ? 'Edit Service' : 'Add Service'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Service Title"
            fullWidth
            value={currentService.title}
            onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Service Description"
            fullWidth
            value={currentService.description}
            onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Service Icon (name)"
            fullWidth
            value={currentService.icon}
            onChange={(e) => setCurrentService({ ...currentService, icon: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Service Cost"
            type="number"
            fullWidth
            value={currentService.cost}
            onChange={(e) => setCurrentService({ ...currentService, cost: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={currentService.id ? handleEditService : handleAddService}
            color="primary"
          >
            {currentService.id ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Services;
