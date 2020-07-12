const express = require("express");
const router = express.Router();
const locations = require("../instock-data/locations.json");
const inventory = require("../instock-data/inventory.json");

router.get("/warehouses", (req, res) => {
  res.json(locations);
});

router.get("/warehouses/:id", (req, res) => {
  // reading error correct:
  const { id } = req.params;
  
  const warehouse = locations.filter(location => location.id === id);
  const listItem = inventory.filter(product => product.warehouseID === id);
  res.json([warehouse, listItem]);
});

module.exports = router;
