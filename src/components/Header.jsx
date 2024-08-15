
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import './Header.css';
// import { FaUserCircle } from 'react-icons/fa';

// const Header = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowLogout(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
        
//       </div>
//       <nav className="nav">
//         <Link to="/">Home</Link>
//         <Link to="/about">About us</Link>
//         <Link to="/service">Services</Link>
//         {user && <Link to="/book">Book Now</Link>}
//         {user ? (
//           <div className="user-menu">
//             <FaUserCircle className="user-icon" />
//             <span
//               className="user-email"
//               onClick={() => setShowLogout(!showLogout)}
//             >
//               {user.email}
//             </span>
//             {showLogout && (
//               <button className="logout-button" onClick={handleLogout}>
//                 Logout
//               </button>
//             )}
//           </div>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Sign up</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import './Header.css';
// import { FaUserCircle } from 'react-icons/fa';

// const Header = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowLogout(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         {/* Add your logo here */}
//       </div>
//       <nav className="nav">
//         <Link to="/">Home</Link>
//         <Link to="/about">About us</Link>
//         <Link to="/service">Services</Link>
//         {user && <Link to="/book">Book Now</Link>}
//         {user ? (
//           <div className="user-menu">
//             <FaUserCircle className="user-icon" />
//             <div className="user-details" onClick={() => setShowLogout(!showLogout)}>
//               <span className="user-email">{user.email}</span>
//               {showLogout && (
//                 <div className="user-dropdown">
//                   <Link to="/profile">Profile</Link>
//                   <button className="logout-button" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Sign up</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import './Header.css';
// import { FaUserCircle } from 'react-icons/fa';

// const Header = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const [showLogout, setShowLogout] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowLogout(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         {/* Add your logo here */}
//       </div>
//       <nav className="nav">
//         <Link to="/">Home</Link>
//         <Link to="/about">About us</Link>
//         <Link to="/service">Services</Link>
//         {user && <Link to="/book">Book Now</Link>}
//         {user ? (
//           <div className="user-menu">
//             <FaUserCircle className="user-icon" />
//             <div className="user-details" onClick={() => setShowLogout(!showLogout)}>
//               <span className="user-email">{user.email}</span>
//               {showLogout && (
//                 <div className="user-dropdown">
//                   <Link to="/profile" className="dropdown-link">Profile</Link>
//                   <button className="logout-button" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Sign up</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../features/auth/authSlice';
// import './Header.css';
// import { FaUserCircle } from 'react-icons/fa';

// const Header = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleLogout = () => {
//     dispatch(logout());
//     setShowDropdown(false);
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         {/* Add your logo here */}
//       </div>
//       <nav className="nav">
//         <Link to="/">Home</Link>
//         <Link to="/about">About us</Link>
//         <Link to="/service">Services</Link>
//         {user && <Link to="/book">Book Now</Link>}
//         {user ? (
//           <div className="user-menu">
//             <FaUserCircle className="user-icon" />
//             <div className="user-details" onClick={() => setShowDropdown(!showDropdown)}>
//               <span className="user-email">{user.email}</span>
//               {showDropdown && (
//                 <div className="user-dropdown">
//                   <Link to="/profile" className="dropdown-link">Profile</Link>
//                   <button className="logout-button" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Sign up</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
    navigate('/login'); 
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Add your logo here */}
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/service">Services</Link>
        {user && <Link to="/book">Book Now</Link>}
        {user && <Link to="/feedback">Feedback</Link>} {/* Add feedback link here */}
        {user ? (
          <div className="user-menu">
            <FaUserCircle className="user-icon" />
            <div className="user-details" onClick={() => setShowDropdown(!showDropdown)}>
              <span className="user-email">{user.email}</span>
              {showDropdown && (
                <div className="user-dropdown">
                  <Link to="/profile" className="dropdown-link">Profile</Link>
                  <button className="logout-button" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
