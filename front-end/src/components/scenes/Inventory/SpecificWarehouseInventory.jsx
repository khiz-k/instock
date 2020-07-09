import React, { Component } from "react";
import Items from "./items";
import axios from "axios";
import BackArrow from "./atoms/Icon-back-arrow.svg";
import { Link } from "react-router-dom";

export default class SpecificWarehouseInventory extends Component {
  state = {
    locations: [],
    inventory: [],
    warehouse: undefined,
    products: undefined
  };
  componentDidMount() {
    axios.get(`http://localhost:5000/locations/${this.props.match.params.id}`).then(res => {
      this.setState({
        locations: [res.data]
      });
    });
  //   axios.get("http://localhost:8080/inventory").then(res => {
  //     this.setState({
  //       inventory: [res.data]
  //     });
  //   });
  // }
    axios.get(`http://localhost:5000/inventory/${this.props.match.params.id}`).then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
    axios
    .get(`http://localhost:5000/locations/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        warehouse: res.data[0],
        products: [res.data[1]]
      });
      console.log(this.state.products);
    });
  }
  // updateItems = () => {
  //   setTimeout(() => {
  //     axios.get("http://localhost:8080/inventory").then(res => {
  //     this.setState({
  //       inventory: [res.data]
  //     });
  //   });
  //   }, 60);
  // };
  updateItems = () => {
    setTimeout(() => {
      axios.get(`http://localhost:5000/locations/${this.props.match.params.id}`).then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
    }, 60);
  };
  // updateItems = () => {
  //   setTimeout(() => {
  //     axios
  //       .get(`http://localhost:5000/locations/${this.props.match.params.id}`)
  //       .then(result => {
  //         console.log(result.data);
  //         this.setState({
  //           products: [result.data[1]]
  //         });
  //       });
  //   }, 60);
  // };
  render() {
    // if items present in inventory:
    if ( this.state.warehouse !== undefined &&
      this.state.inventory !== undefined && this.state.inventory.length > 0) {
        return (
          <>
            <div className="container">
              <div className="inventory-header">
                <Link to="/locations">
                  <img
                    alt="arrow"
                    className="header-container__image"
                    src={BackArrow}
                  />
                </Link>
                <h1 className="header-container__title">
                  {this.state.warehouse[0].name}
                </h1>
                <section className="warehouse-info">
                  <div className="warehouse-info__content">
                    <span className="warehouse-info__content-key">Address</span>
                    <div className="warehouse-info__content-container">
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].street}
                      </span>
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].areacode}
                      </span>
                    </div>
                    <div className="warehouse-info__content-container">
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].city}
                      </span>
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].country}
                      </span>
                    </div>
                  </div>
                  <div className="warehouse-info__content">
                    <span className="warehouse-info__content-key">Contact</span>
                    <div className="warehouse-info__content-container">
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].contact}
                      </span>
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].role}
                      </span>
                    </div>
                    <div className="warehouse-info__content-container">
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].phone}
                      </span>
                      <span className="warehouse-info__content-container--value">
                        {this.state.warehouse[0].email}
                      </span>
                    </div>
                  </div>
                </section>
              </div>        
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
      // if no items in the inventory:
      return <h1>Loading...</h1>;
    }
  }
}
    