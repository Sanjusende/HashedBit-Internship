// BookingConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { id, name, email, mobile } = location.state || {};

  // Handle cases where the form data is missing (if user tries to access this page directly)
  if (!id || !name || !email || !mobile) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Invalid Booking</h2>
        <p>Please fill out the form before accessing this page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 rounded mt-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Seat Booked Successfully!</h2>
      <p className="mb-4">
        Booking ID: <span className="font-bold">{id}</span>
      </p>
      <p className="mb-2">Name: {name}</p>
      <p className="mb-2">Email: {email}</p>
      <p className="mb-2">Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
