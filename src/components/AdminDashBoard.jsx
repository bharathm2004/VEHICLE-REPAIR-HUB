

import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalendarCheck, faTools, faComments } from '@fortawesome/free-solid-svg-icons';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UserManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'services':
        return <ServiceManagement />;
      case 'feedback':
        return <FeedbackSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-side-panel">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => setActiveSection('dashboard')} className={activeSection === 'dashboard' ? 'active' : ''}>
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard Overview
          </li>
          <li onClick={() => setActiveSection('users')} className={activeSection === 'users' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUsers} className="icon" /> User Management
          </li>
          <li onClick={() => setActiveSection('bookings')} className={activeSection === 'bookings' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCalendarCheck} className="icon" /> Booking Management
          </li>
          <li onClick={() => setActiveSection('services')} className={activeSection === 'services' ? 'active' : ''}>
            <FontAwesomeIcon icon={faTools} className="icon" /> Service Management
          </li>
          <li onClick={() => setActiveSection('feedback')} className={activeSection === 'feedback' ? 'active' : ''}>
            <FontAwesomeIcon icon={faComments} className="icon" /> Feedback
          </li>
        </ul>
      </div>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

// Component for Dashboard Overview
// Component for Dashboard Overview
const DashboardOverview = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [serviceBookings, setServiceBookings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/feedback', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch feedbacks');

        const feedbacksData = await response.json();
        setFeedbacks(feedbacksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setError('Failed to load feedbacks');
        setLoading(false);
      }
    };

    const fetchServiceBookings = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/bookings/service-bookings', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch service bookings');

        const serviceBookingsData = await response.json();
        setServiceBookings(serviceBookingsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service bookings:', error);
        setError('Failed to load service bookings');
        setLoading(false);
      }
    };

    fetchFeedbacks();
    fetchServiceBookings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Process feedbacks to get rating distribution
  const ratingCounts = feedbacks.reduce((counts, feedback) => {
    counts[feedback.rating] = (counts[feedback.rating] || 0) + 1;
    return counts;
  }, {});

  const feedbackData = {
    labels: Object.keys(ratingCounts).map((rating) => `Rating ${rating}`),
    datasets: [
      {
        label: 'Feedback Ratings',
        data: Object.values(ratingCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#E7E9ED',
          '#B9B9B9',
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Process service bookings to get booking counts
  const serviceLabels = Object.keys(serviceBookings);
  const serviceCounts = Object.values(serviceBookings);

  const serviceData = {
    labels: serviceLabels,
    datasets: [
      {
        label: 'Service Bookings',
        data: serviceCounts,
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Dashboard Overview</h3>
     
      <div className="chart-container">
        <h4>Feedback Ratings Distribution</h4>
        <Pie data={feedbackData} />
      </div>
      <div className="chart-container">
        <h4>Service Bookings</h4>
        <Bar data={serviceData} />
      </div>
    </div>
  );
};
// Component for User Management
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/profile/all', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch users');

        const usersData = await response.json();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/profile/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error('Failed to delete user');

        setUsers(users.filter(user => user.uid !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
        setError('Failed to delete user');
      }
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>User Management</h3>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDelete(user.uid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
// Component for Booking Management
const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchBookings = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/bookings', {
  //         headers: {
  //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //         },
  //       });

  //       if (!response.ok) throw new Error('Failed to fetch bookings');

  //       const bookingsData = await response.json();
  //       console.log('Bookings Data:', bookingsData); // Log the data
  //       setBookings(bookingsData); // Ensure this is the correct data structure
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching bookings:', error);
  //       setError('Failed to load bookings');
  //       setLoading(false);
  //     }
  //   };

  //   fetchBookings();
  // }, []);
  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/bookings', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (!response.ok) throw new Error('Failed to fetch bookings');

            const bookingsData = await response.json();
            console.log('Bookings Data:', bookingsData); // Log the data
            setBookings(bookingsData); // Ensure this is the correct data structure
            setLoading(false);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setError('Failed to load bookings');
            setLoading(false);
        }
    };

    fetchBookings();
}, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Booking Management</h3>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <table className="booking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Vehicle Number</th>
              <th>Service</th>
              <th>Problem Description</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.vehicleNumber}</td>
                <td>{booking.service}</td>
                <td>{booking.problemDescription}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Component for Service Management
const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/services', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch services');

        const servicesData = await response.json();
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading services...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Service Management</h3>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <table className="service-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/feedback', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch feedbacks');

        const feedbacksData = await response.json();
        setFeedbacks(feedbacksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setError('Failed to load feedbacks');
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <p>Loading feedbacks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Feedback Management</h3>
      {feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <table className="feedback-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Feedback</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
                <td>{feedback.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default AdminDashboard;











