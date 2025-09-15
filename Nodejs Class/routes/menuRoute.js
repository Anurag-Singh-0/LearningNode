const express = require("express");
const router = express.Router();
const Menu = require("../model/Menu.js");

router.get("/", async (req, res) => {
  let data = await Menu.find();
  res.send(data);
});

router.post("/", async (req, res) => {
  const menuData = req.body;
  const menuList = new Menu(menuData);

  await menuList.save();
  const response = JSON.stringify(menuList);
  console.log(response);
  res.status(200).send(`Menu is added in the DataBase ${response}`);
});

router.get("/:foodtest", async (req, res) => {
  try {
    let foodtest1 = req.params.foodtest;

    if (foodtest1 == "Spicy" || foodtest1 == "Sweet") {
      let response = await Menu.find({ test: foodtest1 });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid test name" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedData = req.body;

    let updatedMenu = await Menu.findByIdAndUpdate(id, updatedData);

    if (!updatedMenu) {
      return res.status(404).json({ error: "Menu is not found" });
    }

    res.status(200).json({ message: "Menu updated successfully", updatedMenu });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await Menu.findByIdAndDelete(id);

    res.status(200).json({ message: "Menu Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Menu not found" });
  }
});

module.exports = router;
