const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// GET ALL CONTACTS
const getContacts =asyncHandler(async (req,res) => {
    const contacts = await Contact.find({user_id: req.user.user.id});
    res.status(200).json(contacts)
});


// POST METHOD CREATE CONTACT
const createContact =asyncHandler(async (req,res) => {
    const {name, email, phone} = req.body;

    console.log(name,email,phone);

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.user.id
    })

    console.log(contact);
    res.send(contact)

    // console.log(req.user);
    // console.log(req.body);
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

    if(contact.user_id.toString() != req.user.user.id) {
        res.status(403);
        throw new Error("Unauthorized user")
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

    console.log(contact.user_id);
    console.log(req.user.user.id);
    if(contact.user_id.toString() != req.user.user.id) {
        res.status(403);
        throw new Error("Unauthorized user")
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.status(200).json(contact)
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}