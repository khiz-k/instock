import React, { Component } from "react";
import kebab from "./atoms/Icon-kebab-default.svg";
import axios from "axios";

export default function Remove({itemId}){
  return (
    <div className="table-row__remove">

      <div  className="dropdown-handle">
        <input className="table-row__remove-button" alt="kebab" type="image" src={kebab} />
        <div className="dropdown-content">
          <div onClick={(event) => {delHandler(itemId)}}  href="#">DELETE</div>
        </div>
        {/* <button><img alt = "kebab" className="table-row__remove-button" src={kebab}/></button> */}
        {/* <img alt = "kebab" className="table-row__remove-button" src={kebab}/> */}

      </div>
    </div>
  );

}


// export default class RemoveButton extends Component {
//   render() {

//   }
// }



export function delHandler(itemId) {

  console.log(itemId, "clicked")

  axios
       .delete(`/inventory/${itemId}` )
       .then(console.log("item deleted"))
  return
}