// src/components/AppointmentForm.js
import React, { useState } from 'react';  // React and Hooks
import axios from 'axios';                // Axios for API requests
import { useNavigate } from 'react-router-dom'; // Navigation hook from React Router
import './AppointmentForm.css';           // Styling

/**
 * Container Component: AppointmentForm
 * - Implements Form Management using State and Handlers
 * - Uses Composition Pattern for organizing InputField component
 */
const AppointmentForm = () => {
  // State Management Pattern: Manages form data using useState
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    nic: '',
    dateOfBirth: '',
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    department: '',
    doctor: '',
    note: ''
  });

  const navigate = useNavigate(); // React Router's navigation mechanism

  /**
   * Event Handling Pattern: Updates state with user input
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Event Handling + Error Handling Pattern:
   * Submits form data to the backend and handles API errors gracefully
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments/addAppointment', formData);
      alert('Appointment registered successfully!');
      resetForm(); // Reset the form after success
      navigate('/'); // Navigate to the home page
    } catch (error) {
      alert('Failed to register appointment!');
      console.error(error);
    }
  };

  /**
   * State Reset Pattern: Resets the form to its initial state
   */
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      nic: '',
      dateOfBirth: '',
      gender: '',
      appointmentDate: '',
      appointmentTime: '',
      department: '',
      doctor: '',
      note: ''
    });
  };

  /**
   * Composition Design Pattern:
   * Reuses InputField components for cleaner and modular code.
   */
  return (
    <div className="appointment-form-container">
      <h2>Create New Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        {/** Use of Composition Pattern: InputField components are reused */}
        <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
        <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
        <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
        <InputField label="NIC" name="nic" value={formData.nic} onChange={handleChange} />
        <InputField label="Date of Birth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} type="date" />

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <InputField label="Appointment Date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} type="date" />
        <InputField label="Appointment Time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} type="time" />
        <InputField label="Department" name="department" value={formData.department} onChange={handleChange} />
        <InputField label="Doctor" name="doctor" value={formData.doctor} onChange={handleChange} />

        <div className="form-group full-width">
          <label>Note</label>
          <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">Register Appointment</button>
      </form>
    </div>
  );
};

/**
 * Reusable Component Pattern: InputField
 * - Modularizes input fields to avoid repetition
 * - Encapsulates field rendering logic in a reusable function
 */
const InputField = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} />
  </div>
);

export default AppointmentForm;
