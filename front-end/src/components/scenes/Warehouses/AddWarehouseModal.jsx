import React, { Component } from "react";
import axios from "axios"; //for post request
import addIcon from "./atoms/Icon-add.svg";

export default class AddWarehouseModal extends React.Component {
    state = {
      warehouseId: null,
      active: "none",
    };
    // activates modal
    activateModal = () => {
      this.setState({ active: "flex" });
    };
    cancelBackToPage = () => {
      this.setState({ active: "none" });
    };

    // MELIKA POST REQUEST, MAIN EDIT HERE:
    post = () => {
      // VALIDATION
      if (
        this.name.value !== "" &&
        this.address.value !== "" &&
        this.contact.value !== "" &&
        this.location.value !== "" &&
        this.position.value !== "" &&
        this.number.value !== ""
      ) {
        axios.post("http://localhost:8080/warehouses", {
          name: this.name.value,
          address: this.address.value,
          contact: this.contact.value,
          location: this.location.value,
          position: this.position.value,
          number: this.number.value,
          email: this.email.value,
          categories: this.category.value
        }).then(res => {
          this.props.updateWarehouses();
          this.name.value = ""
          this.address.value = ""
          this.contact.value = ""
          this.position.value = ""
          this.number.value = ""
          this.email.value = ""
          this.category.value = ""
          
        })
      } else {
        alert("Please fill out all fields");
      }
    };
    
    
    render() {
      const position = this.props.mobile === true ? "none": "fixed"
      return (
        <>
        <div onClick={() => this.props.changeMobile()} className="form-open mobile">
            <img alt =  "add" className="form-open__icon" src={addIcon} />
        </div>
        <div onClick={this.activateModal} className="form-open tablet">
            <img  alt = "Add" className="form-open__icon" src={addIcon} />
        </div>
        <div className="modal" style={{ display: `${this.props.mobile === true ? "flex": this.state.active}`, position: `${position}` }}>
            <div className="modal__content">
                <h2 className="modal__content-header">Add New</h2>
                <div className="modal__content-container">
                    <div className="modal__content-container-input">
                    <h4 className="modal__content-subheader">Warehouse</h4>
                      {/*e.target doesn't work for some reason, used ref but needs fix:*/}
                    <input
                        className="modal__content-input"
                        placeholder="Name &amp; ID"
                        ref={ref => (this.name = ref)}/>
                    </div>

                    <div className="modal__content-middle">
                    <div className="modal__content-container-input">
                    <h4 className="modal__content-subheader">Address</h4>
                    <input
                        className="modal__content-input"
                        placeholder="Enter Address"
                        ref={ref => (this.address = ref)}/>
                    </div>


                    <div className="modal__content-container-input">
                    <h4 className="modal__content-subheader ">Location</h4>
                    <input
                    className="modal__content-input"
                    placeholder="Enter Location"
                    ref={ref => (this.location = ref)}/>
                    </div>
                    <div className="modal__content-container-input">
                    <h4 className="modal__content-subheader ">Contact Name</h4>
                    <input
                    className="modal__content-input"
                    placeholder="Enter Name"
                    ref={ref => (this.contact = ref)}/>
                    </div>
                    <div className="modal__content-container-input">
                    <h4 className="modal__content-subheader">Position</h4>
                    <input
                        className="modal__content-input"
                        placeholder="Enter Position"
                        ref={ref => (this.position = ref)}/>
                    </div>
                    <div className="modal__content-container-input">
                        <h4 className="modal__content-subheader">Phone Number</h4>
                        <input
                        className="modal__content-input"
                        placeholder="(000) 000 - 0000"
                        ref={ref => (this.number = ref)}/>
                    </div>
                    <div className="modal__content-container-input">
                        <h4 className="modal__content-subheader">Email</h4>
                        <input
                        className="modal__content-input"
                        placeholder="email@instock.com"
                        ref={ref => (this.email = ref)}/>
                    </div>
                    </div>
                    <div className="modal__content-container-input categories-container">
                        <h4 className="modal__content-subheader categories-content">Categories</h4>
                        <input
                            className="modal__content-input categories-input"
                            placeholder="Use commas to separate each category"
                            ref={ref => (this.category = ref)}/>
                    </div>
                    <div className="modal__content-btn-container">
                        <button onClick={this.post} className="modal__content-submit">
                        Save
                        </button>
                        <h5 onClick={() => this.props.changeMobile()} className="modal__content-cancel mobile">
                        Cancel
                        </h5>
                        <h5 onClick={this.cancelBackToPage} className="modal__content-cancel tablet">
                        Cancel
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
    }
  }
