const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');

// Get all services (mocked)
router.get('/services', (req, res) => {
  const services = [
    { name: 'General Checkup', cost: 50, coveredByInsurance: true },
    { name: 'Dental Cleaning', cost: 100, coveredByInsurance: false },
  ];
  res.json(services);
});

// Book appointment
router.post('/book', async (req, res) => {
  const { patientId, service, date, cost, coveredByInsurance } = req.body;

  try {
    const newAppointment = new Appointment({
      service,
      date,
      patient: patientId,
      cost,
      coveredByInsurance,
    });

    await newAppointment.save();
    res.json({ message: 'Appointment booked', appointment: newAppointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
