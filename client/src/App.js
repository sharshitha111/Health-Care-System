// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppointmentForm from './components/AppointmentForm'; 
import ViewAppointments from './components/ViewAppointments'; 
import EditAppointment from './components/EditAppointment'; 
import PricingCard from './components/PricingCard';
import './App.css'; // Ensure you have some global styling
import appointmentImage from './assets/Appointment.jpg';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/PricingCard" className="navbar-link">Insurance</Link>
            </li>
            <li>
              <Link to="" className="navbar-link">Data</Link> {/* Sample link */}
            </li>
            <li>
              <Link to="" className="navbar-link">My Profile</Link> {/* Sample link */}
            </li>
          
          </ul>
          <Link to="/appointments" className="new-appointment-btn">
            New Appointment
          </Link>
        </nav>

          {/* Image Section */}
          <div className="image-container">
          <img src={appointmentImage} alt="Appointment" className="appointment-image" />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ViewAppointments />} />
          <Route path="/appointments" element={<AppointmentForm />} />
          <Route path="/appointments/edit/:id" element={<EditAppointment />} />
          <Route path="/PricingCard" element={<PricingCard />} />
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <p>© 2024 Healthcare System. All Rights Reserved.</p>
          <p>Contact us: info@healthcare.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
