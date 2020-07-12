import React, { Component } from "react";
import Items from "./Items";
import axios from "axios";
import BackArrow from "./atoms/Icon-back-arrow.svg";
import { Link } from "react-router-dom";

export default class SpecificWarehouseInventory extends Component {
  state = {
    warehouse: [],
    inventory: []
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/warehouses/W4`)
    .then(res => {
      this.setState({
        warehouse: res.data[0],
        inventory: [res.data[1]]
      });
      console.log(res.data);
    });
  }
  updateItems = () => {
    setTimeout(() => {
      axios.get(`http://localhost:8080/warehouses/${this.props.match.params.id}`).then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
    }, 60);
  };
  render() {
    // if warehouse exists and items present in inventory:
    if ( this.state.warehouse !== undefined &&
      this.state.inventory !== undefined && this.state.inventory.length > 0) {
        return (
          <>
            <div className="inventory-header warehouse-inventory-header">
              <div className="title-container">
                <Link to="/warehouse" className="arrow-container">
                  <img
                    alt="arrow"
                    className="header-container__image"
                    src={BackArrow}
                  />
                </Link>
                <h1 className="header-container__title">
                  {this.state.warehouse[0].name}
                </h1>
              </div>
              <section className="warehouse-info">
                <div className="warehouse-info__content">
                  <span className="warehouse-info__content-key">Address</span>
                  <div className="warehouse-info__content-container">
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].address.street}
                    </span>
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].address.suite}
                    </span>
                  </div>
                  <div className="warehouse-info__content-container">
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].address.location}
                    </span>
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].address.areacode}
                    </span>
                  </div>
                </div>
                <div className="warehouse-info__content">
                  <span className="warehouse-info__content-key">Contact</span>
                  <div className="warehouse-info__content-container">
                    <span className="warehouse-info__content-container--value">
                    {this.state.warehouse[0].contact.name}
                    </span>
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].contact.position}
                    </span>
                  </div>
                  <div className="warehouse-info__content-container">
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].contact.phone}
                    </span>
                    <span className="warehouse-info__content-container--value">
                      {this.state.warehouse[0].contact.email}
                    </span>
                  </div>
                </div>
              </section>
            </div>        
            <div className="warehouse-products">
              <div className="inventory-subHeaders">
                <span className="inventory-subHeaders__content">Item</span>
                <span className="inventory-subHeaders__content">Last Ordered</span>
                <span className="inventory-subHeaders__content">Location</span>
                <span className="inventory-subHeaders__content">Quantity</span>
                <span className="inventory-subHeaders__content">Status</span>
              </div>
              <Items
                updateItems={this.updateItems}
                inventory={this.state.inventory}
              />
              {/* placeholder for modal */}
            </div>
          </>
        );  
    } else {
      // if no warehouse or items in the inventory:
      return <h1>Loading...</h1>;
    }
  }
}
    
