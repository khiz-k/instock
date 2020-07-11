const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || process.argv[2] || 8080

const locationsRoute = require("./routes/locations.js");
const inventoryRoute = require('./routes/inventory.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/locations", locationsRoute);

app.use('/inventory', inventoryRoute);



const inventoryList = require("./instock-data/inventory.json");
app.get("/inventory", (req, res) => {
  res.json(inventoryList);
});

app.post('/inventory', (req, res) => {

    console.log("test")
  
    const {  
      id, name, description,  quantity, lastOrdered, city,
      country, isInstock, categories,
      warehouseId} = req.body

      if((req.body.name === "" )|| 
        (req.body.city === "") ||  
       ( req.body.country === "")
       ){
        res.status(400).send("Please fill all fields");
     }else{
         res.status(200)
      inventoryList.push({
        id, name, description, quantity,lastOrdered, city,
         country, isInstock, categories, warehouseId
     
      })
    }

    res.json(inventoryList)
    console.log(inventoryList)
  
  })


 
app.get('/inventory/:id', (req, res) => {

  const checkStatus = inventoryList.some(item => item.id === req.params.id);


  if (checkStatus) {
    let test = inventoryList.filter(item => item.id === req.params.id);
    res.json(test[0])

  }else {
    res.status(400).send("could not find item");
  }

})


app.delete('/inventory/:id', (req, res) => {

  const checkStatus = inventoryList.some(item => item.id === req.params.id);

  if(checkStatus){
    const itemIndex = inventoryList.findIndex(item => item.id === req.params.id);
    inventoryList.splice(itemIndex,1)
    
    res.send("item deleted")

  }else {
    res.status(400).send("could not find item");
  }
})


app.listen(port, () => console.log(`Listening on ${port}`))