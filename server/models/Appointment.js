// backend/models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  mobile: String,
  nic: String,
  dateOfBirth: Date,
  gender: String,
  appointmentDate: Date,
  appointmentTime: String,
  department: String,
  doctor: String,
  note: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
