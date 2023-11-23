const express = require('express');
const contactController = require('../controllers/contactController');
const router = express.Router();


router.post('/addContactDetail', contactController.contactUs);
router.get('/getContacts', contactController.getContactData);
router.delete('/getContacts/:id', contactController.deleteContact);



module.exports = router;