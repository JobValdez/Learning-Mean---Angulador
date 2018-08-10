const Cliente = require('../models/client');
const clienteController ={};

clienteController.getClientes = async (req, res) =>{
	const clientes = await Cliente.find();
	res.json(clientes);
}

clienteController.createCliente = async (req, res) =>{
	const cliente = new Cliente({
		f_idempresa:      req.body.f_idempresa,
		f_vendedor:       req.body.f_vendedor,
		f_idcliente:      req.body.f_idcliente,
		f_nombre:         req.body.f_nombre,
		f_contacto:       req.body.f_contacto,
		f_telefono:       req.body.f_telefono,
		f_celular1:       req.body.f_celular1,
		f_celular2:       req.body.f_celular2,
		f_fax:            req.body.f_fax,
		f_email:          req.body.f_email,
		f_direccion:      req.body.f_direccion,
		f_provincia:      req.body.f_provincia,
		f_dias_creditos:  req.body.f_dias_creditos,
		f_dia_entrega:    req.body.f_dia_entrega,
		f_nota:           req.body.f_nota,
		f_credito:        req.body.f_credito,
		f_limite_credito: req.body.f_limite_credito,
		f_fecha:          req.body.f_fecha
	});
	await cliente.save();
	res.json({
		'Estado': 'Cliente Guardado'
	});
}

clienteController.getCliente = async (req, res) =>{
	const cliente = await Cliente.findById(req.params.id);
	res.json(cliente);
}

clienteController.editCliente = async (req, res) =>{
	const { id } = req.params;
	const cliente = {
		f_idempresa:      req.body.f_idempresa,
		f_vendedor:       req.body.f_vendedor,
		f_idcliente:      req.body.f_idcliente,
		f_nombre:         req.body.f_nombre,
		f_contacto:       req.body.f_contacto,
		f_telefono:       req.body.f_telefono,
		f_celular1:       req.body.f_celular1,
		f_celular2:       req.body.f_celular2,
		f_fax:            req.body.f_fax,
		f_email:          req.body.f_email,
		f_direccion:      req.body.f_direccion,
		f_provincia:      req.body.f_provincia,
		f_dias_creditos:  req.body.f_dias_creditos,
		f_dia_entrega:    req.body.f_dia_entrega,
		f_nota:           req.body.f_nota,
		f_credito:        req.body.f_credito,
		f_limite_credito: req.body.f_limite_credito,
		f_fecha:          req.body.f_fecha
	};
	await Cliente.findByIdAndUpdate(id, {$set: cliente }, {new: true});
	res.json({Estado: 'Cliente Actualizado'});
}

clienteController.deleteCliente = async (req, res) =>{
	const { id } = req.params;
	await Cliente.findByIdAndRemove(id);
	res.json({Estado: 'Cliente Eliminado'});
	
}

module.exports = clienteController;