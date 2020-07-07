const router = require("express").Router();
const inventoryList = require("../instock-data/inventory.json");

router.get("/", (req, res) => {
  res.json(inventoryList);
});

router.get("/:inventoryId", (req, res) => {
  const inventoryId = req.params.inventoryId;
  let inventory = inventoryList.find(item => {
    return inventoryId === item.id;
  });
  // conditional for items existence:
  if (inventory) {
    res.json(inventory);
  } else {
    res.status(400).send("could not find item");
  }
});

module.exports = router;
