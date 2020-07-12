import React from 'react';
import axios from "axios"


export default function AddNewInventory({ handleInvUpload }) {

  console.log("herer")

  handleInvUpload = (event) => {
      event.preventDefault();
      const idnum = String(new Date().getTime());

  
      let newItem = {
          id:idnum,
          name: event.target.newItemProductName.value,
          city:event.target.newItemCity.value,
          lastOrdered:event.target.newItemLastOrdered.value,
          country:event.target.newItemCountry.value,
          quantity:event.target.newItemQuantity.value,
          isInstock:event.target.newItemStatus.value,
          description: event.target.newItemDescp.value

      };
       axios
       .post('/inventory',newItem )
        // .then(console.log("new item added", newItem))

        // event.target.reset();
             
  }
           
        
   
  


  return(
      <div className="Container">
      <div className="newBox">
          <div className="newBox__heading">
              <h1>Create New</h1>
          </div>
          <div className="newBox__form">
              <form onSubmit={handleInvUpload}>
                  <div className="newBox__form--element1">
                      <label>PRODUCT</label>
                      <input name="newItemProductName" placeholder="name" type="text"></input>
                      <label>LAST ORDERED</label>
                      <input name="newItemLastOrdered" type="date" placeholder="yyyy-mm-dd"></input>
                  </div>
                  <div className="newBox__form--element2">
                      <label>CITY</label>
                      <input name="newItemCity" placeholder="City" type="text"></input>
                      <label>COUNTRY</label>
                      <select name="newItemCountry" placeholder="Canada" className="form-control">
                          <option value="Ontario">Ontario</option>
                          <option value="Canada">Canada</option>
                          <option value="United States of America">United States of America</option>
                      </select>
                  </div>
                  <div className="newBox__form--element3">
                      <label>QUANTITY</label>
                      <input name="newItemQuantity" placeholder="0" type="number"></input>
                      <label>STATUS</label>
                      <input name="newItemStatus"></input>
                  </div>
                  <div className="newBox__form--element3">
                      <label>ITEM DESCRIPTION</label>
                      <textarea name="newItemDescp"></textarea>
                  </div>
                  <div className="newBox__form--buttons">
                      {/* <link>CANCEL</link> */}
                      <button>SAVE</button>
                  </div>

              </form>

          </div>
      </div>

  </div>



  )
}