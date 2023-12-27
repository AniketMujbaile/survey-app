import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    tc: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, tc: !formData.tc });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the server
      //await axios.post('http://localhost:5000/api/user/register', formData);  
      await axios.post('https://survey-app-6ch2.onrender.com/api/user/register', formData);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label>Confirm Password:</label>
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

      <label>
        <input type="checkbox" name="tc" checked={formData.tc} onChange={handleCheckboxChange} />
        I agree to the terms and conditions
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
