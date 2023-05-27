const express = require('express');
const router = express.Router();

const {getContacts, getContact, updateContact, deleteContact, createContact} = require('../controllers/contactController');

// GET ROUTE
router.route('/').get(getContacts)

// POST ROUTE
router.route('/').post(createContact)

// GET INDIVIDUAL CONTACT
router.route('/:id').get(getContact)

// PUT ROUTE
router.route('/:id').put(updateContact)

// DELETE ROUTE
router.route('/:id').delete(deleteContact)



module.exports = router;