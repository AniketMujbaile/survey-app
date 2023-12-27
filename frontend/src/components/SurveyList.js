import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        //const response = await axios.get('http://localhost:5000/api/surveys');
        const response = await axios.get('https://survey-app-6ch2.onrender.com/api/surveys');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  return (
    <div>
      <h2 className="heading">Survey List</h2>
      <ul className="survey-list">
        {surveys.map((survey) => (
          <li key={survey._id} className="survey-item">
            {/* Render survey details here */}
            <p><strong>Name:</strong> {survey.name}</p>
            <p><strong>Gender:</strong> {survey.gender}</p>
            <p><strong>Nationality:</strong> {survey.nationality}</p>
            <p><strong>Email:</strong> {survey.email}</p>
            <p><strong>Phone Number:</strong> {survey.phoneNumber}</p>
            <p><strong>Address:</strong> {survey.address}</p>
            <p><strong>Message:</strong> {survey.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
