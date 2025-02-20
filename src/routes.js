const { Router } = require('express');

const contactsController = require('./app/controller/contactController');

const router = Router();

router.get('/contacts', contactsController.index);
router.get('/contacts/:id', contactsController.show);
router.delete('/contacts/:id', contactsController.delete);
router.post('/contacts', contactsController.store);
router.put('/contacts/:id', contactsController.update);

module.exports = router;