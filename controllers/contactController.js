const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// GET ALL CONTACTS
const getContacts =asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
});


// POST METHOD CREATE CONTACT
const createContact =asyncHandler(async (req,res) => {
    console.log(req.body);
    const {name, email,branch, password}= req.body;

    if(!name || !email || !branch|| !password){
        res.status(400);
        throw new Error('All fields are mandatory.')
    }

    const contact = await Contact.create({
        name,
        email,
        branch,
        password,
        statusApproval : false
    })
    res.status(201).json(contact)
});

// GET CONTACT WITH UNIQUE ID
const getContact =asyncHandler( async (req,res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
});

// UPDATE CONTACT
const updateContact =asyncHandler( async (req,res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

// DELETE CONTACT
const deleteContact =asyncHandler( async (req,res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not found")
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact)
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}