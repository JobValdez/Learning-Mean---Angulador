const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const authentication = require ('./router/authentication')(router);


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>{
	if (err) {
		console.log('No se pudo Conectar a la Base de datos: ', err);
	}else{
		console.log('Conectado a la base de datos ' + config.db);
	}
});


app.use('/authentication', authentication);
// app.get('*', (req, res) =>{
//   res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
// });

//Middlewares
app.use(morgan('start'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200'}));

//routes
app.use('/api/employees', require('./router/employee.routes'));
app.use('/api/clients', require('./router/client.routes'));

app.listen(8080, () =>{
	console.log('Trabajando en el puerto 8080 de localhost')
});