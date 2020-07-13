import React, { Component } from 'react';
import IconBackArrow from '../atoms/Icon-back-arrow.svg';

// TODO: connect to backend
const data = {
  "id": "JK2020FD7811201",
  "name": "Scotch Tape",
  "description": "A clear sticky on one side tape, for all your crafting needs",
  "quantity": "400",
  "lastOrdered": "12/01/2018",
  "city": "Toronto",
  "country": "Ontario",
  "isInstock": false,
  "categories": "Crafts, Office supplies, Paper",
  "warehouseId": "W0"
}

class ItemDetails extends Component {
  state = {
  }

  stockStatus() {
    if (data.isInstock === true) {
      return 'In Stock';
    } else {
      return 'Out of Stock';
    }
  }

  render() {
    return (
      <div className="container item-details">
        <div className="item-details__header">
          <div className="item-details__title-wrapper"
               onClick={ this.props.history.goBack }>
            <img src={ IconBackArrow } alt="" />
            <h1 className="item-details__title">{ data.name }</h1>
          </div>
          <button className="item-details__stock-tag">{ this.stockStatus() }</button>
        </div>
        <div className="divider item-details__divider"></div>
        <div className="item-details__body">
          <div className="item-details__description">
            <h2 className="item-details__label">Item description</h2>
            <p>{ data.description }</p>
          </div>
          <div className="item-details__specs">
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Ordered by</h2>
              <p>Mark Saunders</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Reference number</h2>
              <p>{ data.id }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Last ordered</h2>
              <p>{ data.lastOrdered }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Location</h2>
              <p>{ data.city }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Quantity</h2>
              <p>{ data.quantity }</p>
            </div>
            <div className="item-details__specs-card item-details__specs-card--full-width">
              <h2 className="item-details__label">Categories</h2>
              <p>{ data.categories }</p>
            </div>
          </div>
        </div>
        <div className="divider item-details__divider"></div>
        <div className="item-details__footer">
          <button className="cta item-details__btn">Edit</button>
        </div>
      </div>
    )
  }
}

export default ItemDetails;
