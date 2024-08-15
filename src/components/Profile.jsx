import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Profile.css';

const API_URL = 'http://localhost:8080/api/profile';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    address: false,
    password: false,
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    phone: false,
    address: false,
    password: false,
  });

  const [deleteMode, setDeleteMode] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteErrors, setDeleteErrors] = useState({ password: false });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));

      if (!token || !user || !user.email) {
        console.error('No user data found in local storage.');
        return;
      }

      try {
        const response = await fetch(`${API_URL}?email=${user.email}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch profile');
        const userData = await response.json();

        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          phone: userData.phone || '',
          address: userData.address || '',
          password: userData.password || '',
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validatePassword = (password) => password.length >= 8;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name,
      phone: !validatePhone(formData.phone),
      address: !formData.address,
      password: !validatePassword(formData.password),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(API_URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Failed to update profile');
        console.log('Profile Updated', formData);
        setIsEditing({
          name: false,
          phone: false,
          address: false,
          password: false,
        });
      } catch (error) {
        console.error('Error updating profile:', error);
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

  const handleEditClick = (field) => {
    setIsEditing(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleDeleteModeToggle = () => {
    setDeleteMode(prev => !prev);
  };

  const handleDeleteChange = (e) => {
    setDeletePassword(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token || !user || !user.email) {
      console.error('No user data found in local storage for deletion.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/delete/${user.id}?password=${deletePassword}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('Profile Deleted');
        // Redirect or handle logout
      } else {
        if (response.status === 401) setDeleteErrors({ password: true });
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <div className='p-body'>
      <div className="profile-container">
        <Typography variant="h4" component="h1" className="profile-header">
          Profile Information
        </Typography>
        <br />
        <form noValidate autoComplete="off" onSubmit={handleUpdate}>
          {Object.keys(formData).map((field) => (
            <div key={field} className="profile-item">
              <div className="profile-item-content">
                <span>{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
                {isEditing[field] ? (
                  <input
                    name={field}
                    type={field === 'password' ? 'password' : 'text'}
                    value={formData[field]}
                    onChange={handleChange}
                    className="plain-input"
                  />
                ) : (
                  <span>{field === 'password' ? formData[field].replace(/./g, '*') : formData[field]}</span>
                )}
                {field !== 'email' && (
                  <FaEdit className="edit-icon" onClick={() => handleEditClick(field)} />
                )}
              </div>
            </div>
          ))}
          {(Object.values(isEditing).some(editing => editing)) && (
            <Button type="submit" variant="contained" color="primary" className="submit-button">
              Update Profile
            </Button>
          )}
        </form>
      </div>

      <div className="delete-container">
        <Button onClick={handleDeleteModeToggle} variant="contained" color="secondary" className="submit-button">
          {deleteMode ? 'Cancel Delete' : 'Delete Profile'}
        </Button>

        {deleteMode && (
          <div className="delete-profile-container">
            <Typography variant="h6" component="h2">Delete Your Profile</Typography>
            <form noValidate autoComplete="off" onSubmit={handleDelete} className="delete-form">
              <div className="profile-item">
                <div className="profile-item-content">
                  <span>Password:</span>
                  <input
                    name="deletePassword"
                    type="password"
                    value={deletePassword}
                    onChange={handleDeleteChange}
                    className="plain-input"
                  />
                </div>
              </div>
              {deleteErrors.password && <Typography color="error">Incorrect password.</Typography>}
              <Button type="submit" variant="contained" color="secondary" className="submit-button">
                Confirm Delete
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
