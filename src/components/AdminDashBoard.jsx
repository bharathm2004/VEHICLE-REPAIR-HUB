

import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {storedUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Booking Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Vehicle Number</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Problem Description</th>
          </tr>
        </thead>
        <tbody>
          {storedBookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.vehicleNumber}</td>
              <td>{booking.service}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.problemDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
// import React from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//   const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];

//   const clearUsers = () => {
//     localStorage.removeItem('users');
//     window.location.reload();
//   };

//   const clearBookings = () => {
//     localStorage.removeItem('bookings');
//     window.location.reload();
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>

//       <h2>Registered Users</h2>
//       <button onClick={clearUsers}>Clear All Users</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Address</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           {storedUsers.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.address}</td>
//               <td>{user.password}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Booking Information</h2>
//       <button onClick={clearBookings}>Clear All Bookings</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Vehicle Number</th>
//             <th>Service</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Problem Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {storedBookings.map((booking, index) => (
//             <tr key={index}>
//               <td>{booking.name}</td>
//               <td>{booking.phone}</td>
//               <td>{booking.vehicleNumber}</td>
//               <td>{booking.service}</td>
//               <td>{booking.date}</td>
//               <td>{booking.time}</td>
//               <td>{booking.problemDescription}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminDashboard;
