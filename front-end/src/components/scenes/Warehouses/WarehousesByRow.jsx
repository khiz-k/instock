import React from "react";
import { Link } from "react-router-dom";
import arrow from "./atoms/Icon-arrow-right.svg";

export default class WarehousesByRow extends React.Component  {
  render() {
    const table =
    this.props.warehouses[0].map(obj => {
      return (
        <section key={obj.id} className="table">
          <div className="table-row">
            <Link className="table-row__content item-hover" to={`/${obj.id}`}>
              <span className="table-row__content--subHeader">Item</span>
              <span className="table-row__content--bold">{obj.item}</span>
              <span className="table-row__content--value">{obj.name}</span>
            </Link>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Last Ordered</span>
              <span className="table-row__content--value">{obj.lastOrdered}</span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Location</span>
              <span className="table-row__content--value">{obj.city}, {obj.country}</span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Quantity</span>
              <span className="table-row__content--value">{obj.quantity}</span>
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
