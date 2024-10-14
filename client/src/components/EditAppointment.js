// src/components/EditAppointment.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditAppointment.css'; // Import the CSS styling

const EditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/appointments/getAppointmentById/${id}`);
        setFormData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch appointment:', err);
        setError('Failed to fetch appointment details.');
        setLoading(false);
      }
    };
    fetchAppointment();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/appointments/updateAppointment/${id}`, formData);
      alert('Appointment updated successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to update appointment: ' + error.message);
    }
  };

  if (loading) return <p>Loading appointment...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-appointment-container">
      <h2>Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="edit-appointment-form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>NIC</label>
          <input type="text" name="nic" value={formData.nic} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth.split('T')[0]} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Appointment Date</label>
          <input type="date" name="appointmentDate" value={formData.appointmentDate.split('T')[0]} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Appointment Time</label>
          <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Doctor</label>
          <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Note</label>
          <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button">Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointment;
