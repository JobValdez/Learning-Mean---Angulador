const Empleado = require('../models/employee');
const empleadoCtrl ={};

empleadoCtrl.getEmpleados = async (req, res) => {
	const empleados = await Empleado.find()
	res.json(empleados);
};

empleadoCtrl.createEmpleados = async (req, res) => {
	const empleado = new Empleado({
		f_name:req.body.f_name,
		f_position: req.body.f_position,
		f_office: req.body.f_office,
		f_salary: req.body.f_salary
	});
	await empleado.save();
	res.json({
		'Estado': 'Empleado Guardado'
	});
};

empleadoCtrl.getEmpleado = async (req, res)=>{
	const empleado = await Empleado.findById(req.params.id);
	res.json(empleado);
	
};

empleadoCtrl.editEmpleado = async (req, res) => {
	const { id } = req.params;
	const empleado = {
		f_name: req.body.f_name,
		f_position: req.body.f_position,
		f_office: req.body.f_office,
		f_salary: req.body.f_salary

	};
	await Empleado.findByIdAndUpdate(id, {$set: empleado }, {new: true});
	res.json({Estado: 'Empleado Actualizado'});

};

empleadoCtrl.deleteEmpleado = async (req, res) => {
	const { id } = req.params;
	await Empleado.findByIdAndRemove(id);
	res.json({Estado: 'Empleado Eliminado'});
};

module.exports = empleadoCtrl;