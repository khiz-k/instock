import React from "react";
import { Link } from "react-router-dom";
import Remove from "./Remove";

export default class Items extends React.Component  {
  render() {
    const items = this.props.inventory[0];
    const table =
    items.map(obj => {
      return (
        <section key={obj.id} className="table">
          <div className="table-row">
            <Link className="table-row__content item-hover" to={`/inventory/${obj.id}`}>
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
            <div className="table-row__content">
              <span className="table-row__content--subHeader">Status</span>
              <span className="table-row__content--value">{obj.isInstock ? 'In Stock' : 'Out of Stock'}</span>
            </div>
          </div>
          <Remove itemID={obj.id}/>
        </section>
      );
    });
    return <>{table}</>;
  }
}
