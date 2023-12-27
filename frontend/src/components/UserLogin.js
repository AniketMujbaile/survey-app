import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the server
      // await axios.post('http://localhost:5000/api/user/login', formData); 
      await axios.post('https://survey-app-6ch2.onrender.com/api/user/login', formData);
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
