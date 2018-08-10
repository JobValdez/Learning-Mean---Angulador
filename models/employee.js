const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
	f_name: { type: String, required: true },
	f_position: { type: String, required: true },
	f_office: { type: String, required: true },
	f_salary: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', EmployeeSchema);