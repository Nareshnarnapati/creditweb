import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

const ThankYouPage = () => {
  return (
    <div className="thank-page">
      <h2 className="heading">Thank You!</h2>
      <p className="text">Your credit card application has been submitted successfully.</p>
      
      <div>
        <Link to="/" className="text2">Back to Credit Card Form</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
