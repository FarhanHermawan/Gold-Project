const express = require('express');
const studentController = require('../controller/studentController');

const router = express.Router();

// Create a new student
router.post('/', studentController.createStudent);

// Get all students
router.get('/', studentController.getAllStudents);

// Get a specific student by ID
router.get('/:id', studentController.getStudentById);

// Update a student by ID
router.put('/:id', studentController.updateStudent);

// Delete a student by ID
router.delete('/:id', studentController.deleteStudent);

module.exports = router;