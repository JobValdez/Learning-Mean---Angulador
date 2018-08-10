const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
	f_idempresa:      {type:String, required: false},
	f_vendedor:       {type:String, required: false},
	f_idcliente:      {type:Number, required: true},
	f_nombre:         {type:String, required: true},
	f_contacto:       {type:String, required: false},
	f_telefono:       {type:String, required: false},
	f_celular1:       {type:String, required: false},
	f_celular2:       {type:String, required: false},
	f_fax:            {type:String, required: false},
	f_email:          {type:String, required: false},
	f_direccion:      {type:String, required: false},
	f_provincia: 	  {type:String, required: false},
	f_dias_creditos:  {type:Number,  default: 0},
	f_dia_entrega:    {type:Number, required: false},
	f_nota:           {type:String, required:false},
	f_credito: 		  {type:Boolean, default:false},
	f_limite_credito: {type:Number,  default: 0},
	f_fecha:          {type:Date,    default: Date.now}
});

module.exports = mongoose.model('Cliente', ClientSchema);