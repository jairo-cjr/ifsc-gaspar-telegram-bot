const mongoose = require("../../database");

const ContactSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
