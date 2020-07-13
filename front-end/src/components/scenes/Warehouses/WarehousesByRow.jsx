import React from "react";
import { Link } from "react-router-dom";
import arrow from "./atoms/Icon-arrow-right.svg";

export default class WarehousesByRow extends React.Component  {
  
  render() {

    console.log(this.props.warehouses[0])
    const table =
    this.props.warehouses[0].map(obj => {
      console.log(obj.address.location)
      return (
       
        <section key={obj.id} className="table">
          <div className="table-row">
            <Link className="table-row__content item-hover" to={`/warehouses/${obj.id}`}>
              <span className="table-row__content--subHeader">WAREHOUSE</span>
              <span className="table-row__content--bold">{obj.name}</span>
              <span className="table-row__content--value">{obj.address.street},{obj.address.location}</span>
            </Link>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">CONTACT</span>
              <span className="table-row__content--value">{obj.contact.name}</span>
              <span className="table-row__content--value">{obj.contact.position}</span>

            </div>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">CONTACT INFORMATION</span>
              <span className="table-row__content--value">{obj.contact.phone}</span>
              <span className="table-row__content--value">{obj.contact.email}</span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">CATAGORIES</span>
              <span className="table-row__content--value">{obj.inventoryCategories}</span>
            </div>
          </div>
          <div className="table-row__remove">
            <div className="table-row__remove--dropdown-handle">
              <Link to ={`/warehouses/${obj.id}`}><input  className="table-row__remove-button" alt="arrow" type="image" src={arrow} /></Link>
            </div>
          </div>
        </section>
      );
    });
    return <>{table}</>;
  }
}
