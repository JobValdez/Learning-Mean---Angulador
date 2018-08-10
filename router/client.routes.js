const express = require('express');
const router = express.Router();

const Cliente = require('../controllers/client.controller');

router.get('/', Cliente.getClientes);
router.post('/', Cliente.createCliente);
router.get('/:id', Cliente.getCliente);
router.put('/:id', Cliente.editCliente);
router.delete('/:id', Cliente.deleteCliente);

module.exports = router;