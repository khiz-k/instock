import React, { Component } from 'react';
import axios from "axios";
import IconBackArrow from '../atoms/Icon-back-arrow.svg';

class ItemDetails extends Component {
  state = {
    item: []
  }

  stockStatus() {
    if (this.state.item[0].isInstock === true) {
      return 'In Stock';
    } else {
      return 'Out of Stock';
    }
  }

  getItem() {
    let itemId = this.props.match.params.id;

    axios.get(`http://localhost:8080/inventory/${ itemId }`).then((res) => {
      this.setState({
        item: [res.data]
      });
    });
  }

  componentDidMount() {
    this.getItem();
  }

  render() {
    const item = this.state.item[0];

    if (!item) {
      return (
         'Cannot find the item you are looking for'
      );
    }

    return (
      <div className="container item-details">
        <div className="item-details__header">
          <div className="item-details__title-wrapper"
               onClick={ this.props.history.goBack }>
            <img src={ IconBackArrow } alt="" />
            <h1 className="item-details__title">{ item.name }</h1>
          </div>
          <button className={ `item-details__stock-tag ${ item.isInStock ? '' : 'item-details__stock-tag--in-stock' }` }>
            { this.stockStatus() }
          </button>
        </div>
        <div className="divider item-details__divider"></div>
        <div className="item-details__body">
          <div className="item-details__description">
            <h2 className="item-details__label">Item description</h2>
            <p>{ item.description }</p>
          </div>
          <div className="item-details__specs">
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Ordered by</h2>
              <p>Mark Saunders</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Reference number</h2>
              <p>{ item.id }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Last ordered</h2>
              <p>{ item.lastOrdered }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Location</h2>
              <p>{ item.city }</p>
            </div>
            <div className="item-details__specs-card">
              <h2 className="item-details__label">Quantity</h2>
              <p>{ item.quantity }</p>
            </div>
            <div className="item-details__specs-card item-details__specs-card--full-width">
              <h2 className="item-details__label">Categories</h2>
              <p>{ item.categories }</p>
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
