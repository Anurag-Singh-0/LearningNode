const express = require("express");
const router = express.Router();
const Person = require("../model/Person.js");

router.get("/", async (req, res) => {
  let personData = await Person.find();
  res.send(personData);
});

router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    console.log(userData);
    const newPerson = new Person(userData);

    await newPerson.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newPerson });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let dataForUpdate = req.body;

    let updateData = await Person.findByIdAndUpdate(id, dataForUpdate);
    if (!updateData) {
      res.status(404).json({ message: "Person is not found" });
    }

    res.status(200).json({ message: "Person updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Person.findByIdAndDelete(id);
    res.status(200).json({ message: "Person Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
