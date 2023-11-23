const Contact = require('../models/contactModel');

exports.contactUs = async (req, res) => {
    try {
      const {
        name,
        email,
        phonenumber,
        aboutyourself,
      } = req.body;
      const newContact = new Contact({
        name,
        email,
        phonenumber,
        aboutyourself,
      });
      await newContact.save();
  
      res.status(201).json({ message: "Information stored successfully" });
    } catch (error) {
      res.status(400).json({ error: "Submission is failed" });
    }
  };

exports.getContactData = async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Developer is not present" });
    }
  };

exports.deleteContact = async (req, res) => {
    try {
      const contactId =  req.params.id;
      const deletedContact = await Contact.findOneAndDelete({ _id: contactId });
      if (!deletedContact) {
        return res.status(404).json({ error: "contact not found" });
      }
      res.status(200).json("contact is deleted successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal server" });
    }
  };