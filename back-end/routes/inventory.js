const router = require("express").Router();
const inventoryList = require("../instock-data/inventory.json");
const bodyParser = require('body-parser')

// router.get("/", (req, res) => {
//   res.json(inventoryList);
// });

// router.get("/inventory", (req, res) => {
//   res.json(inventoryList);
// });

// router.get("/:inventoryId", (req, res) => {
//   const inventoryId = req.params.inventoryId;
//   let inventory = inventoryList.find(item => {
//     return inventoryId === item.id;
//   });
//   // conditional for items existence:
//   if (inventory) {
//     res.json(inventory);
//   } else {
//     res.status(400).send("could not find item");
//   }
// });


// router.post('/', (req, res) => {

//   console.log("test")

//   const {  
//     id,
//     name,
//     description,
//     quantity,
//     lastOrdered,
//     city,
//     country, 
//     isInstock,
//     categories,
//     warehouseId} = req.body

//   inventoryList.push({
//     id:"1",
//     name:"1",
//     description:"1",
//     quantity:"1",
//     lastOrdered:"1",
//     city:"1",
//     country:"1", 
//     isInstock:"1",
//     categories:"1",
//     warehouseId:"1"
 
//   })
//   res.json(inventoryList)
//   console.log(inventoryList)

// })

module.exports = router;
