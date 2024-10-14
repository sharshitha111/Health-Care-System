// src/components/ViewAppointments.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewAppointments.css'; // Import CSS

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/appointments/getAppointments');
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch appointments:', err);
        setError('Failed to fetch appointments.');
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const deleteAppointment = async (id) => {
    if (!window.confirm('Are you sure you want to delete this appointment?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/appointments/deleteAppointment/${id}`);
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
      alert('Appointment deleted successfully.');
    } catch (err) {
      console.error('Failed to delete appointment:', err);
      alert('Failed to delete appointment: ' + err.message);
    }
  };

  const editAppointment = (id) => {
    navigate(`/appointments/edit/${id}`);
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="appointments-container">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>NIC</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Appointment Date</th>
                <th>Time</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.firstName}</td>
                  <td>{appointment.lastName}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.mobile}</td>
                  <td>{appointment.nic}</td>
                  <td>{new Date(appointment.dateOfBirth).toLocaleDateString()}</td>
                  <td>{appointment.gender}</td>
                  <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.department}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.note}</td>
                  <td className="action-buttons">
                    <button className="edit-button" onClick={() => editAppointment(appointment._id)}>Edit</button>
                    <button
                      className="delete-button"
                      onClick={() => deleteAppointment(appointment._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewAppointments;
