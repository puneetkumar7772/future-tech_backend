const Developer = require("../models/addDeveloper");
const { findById } = require("../models/userModel");

exports.AddDeveloper = async (req, res) => {
  try {
    const {
      name,
      email,
      phonenumber,
      experience,
      currentcompany,
      priviouscompany,
      profile,
      description,
    } = req.body;
    const newDeveloper = new Developer({
      name,
      email,
      phonenumber,
      experience,
      currentcompany,
      priviouscompany,
      profile,
      description,
    });
    await newDeveloper.save();

    res.status(201).json({ message: "Developer Add successfully" });
  } catch (error) {
    res.status(400).json({ error: "Developer Add is failed" });
  }
};

exports.getDeveloper = async (req, res) => {
  try {
    const { page } = req.query || 1;
    const { perPage } = req.query || 10;
    const startIndex = (page - 1) * perPage;

    const developers = await Developer.find()
    .skip(startIndex)
    .limit(perPage);

    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ error: "Developer is not present" });
  }
};

exports.getOneDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findById(req.params.id);
    if (!developer) {
      return res.status(404).json({ error: "Developer not found" });
    }
    res.status(200).json(developer);
  } catch (error) {
    res.status(500).json({ error: "Internal server" });
  }
};
exports.deleteDeveloper = async (req, res) => {
  try {
    const developerId =  req.params.id;
    const deletedDeveloper = await Developer.findOneAndDelete({ _id: developerId });
    if (!deletedDeveloper) {
      return res.status(404).json({ error: "Developer not found" });
    }
    res.status(200).json("Developer is deleted successfully");
  } catch (error) {
    res.status(500).json({ error: "Internal server" });
  }
};
