const router = require("express").Router();
const inventoryList = require("../instock-data/inventory.json");
const bodyParser = require('body-parser')

// router.get("/", (req, res) => {
//   res.json(inventoryList);
// });

// router.get("/inventory", (req, res) => {
//   res.json(inventoryList);
// });



module.exports = router;
