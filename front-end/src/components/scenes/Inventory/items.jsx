import React from "react";
import { Link } from "react-router-dom";
//import Remove from "./remove";
import axios from "axios";

export default class Items extends React.Component  {
  render() {
    const table =
    this.props.inventory[0].map(obj => {
      return (
        <section key={obj.id} className="table">
          <Link className="table-row" to={`/${obj.id}`}>
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Item</span>
              <span className="table-row__content--bold">{obj.item}</span>
              <span className="table-row__content--value">{obj.name}</span>
            </div>
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
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Status</span>
              <span className="table-row__content--value">{obj.status}</span>
            </div>
          </Link>
          {/* <Remove /> */}
        </section>
      );
    });
    //links to item summary:
    return <>{table}</>;
  }
}
