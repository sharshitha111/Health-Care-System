// backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Define routes
router.post('/addAppointment', appointmentController.addAppointment);
router.get('/getAppointments', appointmentController.getAllAppointments);
router.put('/updateAppointment/:id', appointmentController.updateAppointment);
router.delete('/deleteAppointment/:id', appointmentController.deleteAppointment);
router.get('/getAppointmentById/:id', appointmentController.getAppointmentById);

module.exports = router;
