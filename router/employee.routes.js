const express = require('express');
const router = express.Router();

const empleadoCtrl = require('../controllers/employee.controller');

router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.get('/:id', empleadoCtrl.getEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

module.exports = router;