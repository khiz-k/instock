const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const locationsRoute = require("./routes/locations.js");
const inventoryRoute = require('./routes/inventory.js');
const InvByWare = require("./routes/InvByWarehouse.js")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/locations", locationsRoute);

app.use('/inventory', inventoryRoute);


app.listen(8080, () => {
  console.log("Listening on port 8080...");
});