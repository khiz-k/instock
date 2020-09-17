import React, { Component } from "react";
import WarehousesByRow from "./WarehousesByRow";
import axios from "axios";
import SearchIcon from "./atoms/Icon-search.svg";
import AddWarehouseModal from "./AddWarehouseModal.jsx";

export default class Warehouses extends Component {
  state = {
    warehouses: [],
    mobile: false
  };
  componentDidMount() {
    // /inventory needs to be replaced with warehouses and its respective info to fill the table rows
    axios.get("/warehouses").then(res => {
      this.setState({
        warehouses: [res.data]
      });
    });
  }
  updateWarehouses = () => {
    setTimeout(() => {
      axios.get("/warehouses").then(res => {
      this.setState({
        warehouses: [res.data]
      });
    });
    }, 60);
  };
  mobileModal = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  }
  render() {
    // if warehouses present:
    if (this.state.warehouses.length > 0) {
        return (
          <>
          <div className="container">
            <div className="inventory-header">
              <h1 className="inventory-header__title">Warehouses</h1>
              <div className="inventory-header__searchbar">
                <img
                  alt = "search"
                  className="inventory-header__searchbar-icon"
                  src={SearchIcon}
                />
                <input
                  className="inventory-header__searchbar-input"
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
            </div>          
            <div className="inventory-subHeaders">
              <span className="inventory-subHeaders__content">Warehouse</span>
              <span className="inventory-subHeaders__content">Contact</span>
              <span className="inventory-subHeaders__content">Contact Information</span>
              <span className="inventory-subHeaders__content categories-sub">Categories</span>
            </div>
            <WarehousesByRow
              updateWarehouses={this.updateWarehouses}
              warehouses={this.state.warehouses}
            />
            </div>
            <AddWarehouseModal updateWarehouses={this.updateWarehouses} mobile={this.state.mobile} changeMobile={this.mobileModal} />
          </>
        );  
    } else {
      // if no items in the inventory:
      return <h1>Loading...</h1>;
    }
  }
}
