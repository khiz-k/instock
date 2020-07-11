import React, { Component } from "react";
import Items from "./items";
import axios from "axios";
import Modal from './Modal/Modal';
import SearchIcon from "./atoms/Icon-search.svg";
import AddInv from "./addInv"

export default class Inventory extends Component {
  state = {
    warehouses: [],
    inventory: [],
    show: false
  };


  showModal = () =>{
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    axios.get("http://localhost:8080/locations").then(res => {
      this.setState({
        locations: [res.data]
      });
    });

    axios.get("http://localhost:8080/inventory").then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
  }

  updateItems = () => {
    setTimeout(() => {
      axios.get("http://localhost:8080/inventory").then(res => {
      this.setState({
        inventory: [res.data]
      });
    });
    }, 60);
  };

  render() {
   
    // if items present in inventory:
    if (this.state.inventory.length >= 1) {
      // if(!this.props.show){
      //   return null;
      // }
        return (
          <>
            <div className="inventory-header">
              <h1 className="inventory-header__title">Inventory</h1>
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
            <button type="button" value ="Show Modal" onClick={this.showModal}>
              +</button>
        
            <Modal show={this.state.show}>
              {<AddInv/>}
            </Modal>
            
          </>
        );  
    } else {
      // if no items in the inventory:
      return <h1>Loading...</h1>;
    }
  }
}
