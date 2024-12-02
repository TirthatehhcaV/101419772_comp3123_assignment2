const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const Employee = require('../models/Employee'); 

// Search for employees based on department and position
router.get('/employees/search', async (req, res) => {
  try {
    const { department, position } = req.query;
    const query = {};
    if (department) query.department = department;
    if (position) query.position = position;

    if (Object.keys(query).length === 0) {
      return res.status(400).json({ message: 'Please provide at least one search parameter (department or position).' });
    }

    const employees = await Employee.find(query);
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ message: 'Internal Server Error', details: error.toString() });
  }
});


// Basic CRUD operations
router.get('/employees', employeeController.getAllEmployees);
router.post('/employees', employeeController.createEmployee);
router.get('/employees/:eid', employeeController.getEmployeeById);
router.put('/employees/:eid', employeeController.updateEmployee);
router.delete('/employees/:eid', employeeController.deleteEmployee);

module.exports = router;
