// backend/controllers/appointmentController.js
const Appointment = require('../models/Appointment');

// Add a new appointment
exports.addAppointment = async (req, res) => {
  const appointment = new Appointment({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    nic: req.body.nic,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    appointmentDate: req.body.appointmentDate,
    appointmentTime: req.body.appointmentTime,
    department: req.body.department,
    doctor: req.body.doctor,
    note: req.body.note,
  });
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an appointment by ID
exports.updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an appointment by ID
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
