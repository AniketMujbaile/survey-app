 // src/components/SurveyForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await axios.post('http://localhost:5000/api/surveys', formData);
      await axios.post('https://survey-app-6ch2.onrender.com/api/surveys', formData);
      alert('Survey submitted successfully!');
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="survey-form">
      <h2 className="heading">Survey Form</h2>

      {/* Name */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
      </div>

      {/* Gender */}
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <input type="text" name="gender" id="gender" value={formData.gender} onChange={handleChange} />
      </div>

      {/* Nationality */}
      <div className="form-group">
        <label htmlFor="nationality">Nationality:</label>
        <input type="text" name="nationality" id="nationality" value={formData.nationality} onChange={handleChange} />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
      </div>

      {/* Phone Number */}
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </div>

      {/* Address */}
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} />
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
       <div className="heading">
         <button type="submit">Submit</button>
       </div>
    </form>
  );
};

export default SurveyForm;
