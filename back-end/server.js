const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || process.argv[2] || 8080

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const warehousesList = require("./instock-data/locations.json");
const inventoryList = require("./instock-data/inventory.json");

app.get("/warehouses", (req, res) => {
  res.json(warehousesList);
});



app.get("/warehouses/:id", (req, res) => {
  const { id } = req.params;
  const checkStatus = warehousesList.some(location => location.id === id);

  if (checkStatus) {
    let warehouse = warehousesList.filter(location => location.id === id);
    let warehouseInventoryItems = inventoryList.filter(item => item.warehouseId === id);
    res.json([warehouse, warehouseInventoryItems]);
  } else {
    res.status(404).send("could not find warehouse and associated inventory");
  }
});


app.get("/warehouses/:id/contact", (req, res) => {

  const { name, position, phone, email } = req.body
  let contactInfo = warehousesList.filter(warehouse => warehouse.id === req.params.id);

  res.json(contactInfo[0].contact)

})


app.get("/warehouses/:id/address", (req, res) => {

  const { street, location } = req.body
  let addressInfo = warehousesList.filter(address => address.id === req.params.id);

  res.json(addressInfo[0].address)

})


app.post('/warehouses', (req, res) => {
  const newWarehouse = {
    ...req.body

  }
  warehousesList.push(newWarehouse)
})


app.delete('/warehouses/:id', (req, res) => {
  const { id } = req.params;
  const checkStatus = warehousesList.some(location => location.id === id);

  if (checkStatus) {
    const warehouseIndex = warehousesList.findIndex(location => location.id === id);
    warehousesList.splice(warehouseIndex, 1)
    res.send("warehouse deleted")
  } else {
    res.status(400).send("could not find warehouse");
  }
})




app.get("/inventory", (req, res) => {
  res.json(inventoryList);
});

app.post('/inventory', (req, res) => {


  const {
    id, name, description, quantity, lastOrdered, city,
    country, isInstock, categories,
    warehouseId } = req.body

  if ((req.body.name === "") ||
    (req.body.city === "") ||
    (req.body.country === "")
  ) {
    res.status(400).send("Please fill all fields");
  } else {
    res.status(200)
    inventoryList.push({
      id, name, description, quantity, lastOrdered, city,
      country, isInstock, categories, warehouseId

    })
  }

  res.json(inventoryList)

})



app.get('/inventory/:id', (req, res) => {

  const checkStatus = inventoryList.some(item => item.id === req.params.id);


  if (checkStatus) {
    let test = inventoryList.filter(item => item.id === req.params.id);
    res.json(test[0])

  } else {
    res.status(404).send("could not find item");
  }

})


app.delete('/inventory/:id', (req, res) => {

  const checkStatus = inventoryList.some(item => item.id === req.params.id);

  if (checkStatus) {
    const itemIndex = inventoryList.findIndex(item => item.id === req.params.id);
    inventoryList.splice(itemIndex, 1)

    res.send("item deleted")

  } else {
    res.status(400).send("could not find item");
  }
})



app.listen(port, () => console.log(`Listening on ${port}`))
