import React, { Component } from 'react';
import Switch from "react-switch";
import "./addInv.scss"


const initialState ={
    product: "",
    lastOrdered:"",
    city:"",
    country:"",
    quantity:"",
    isInstock: false,
    description:"",
    productError: "",
    lastOrderedError:"",
    cityError:"",
    countryError:"",
    quantityError:null

}


export default class AddInv extends Component {
    constructor(){
        super()
        this.state ={
            product: "",
            lastOrdered:"",
            city:"",
            country:"",
            quantity:"",
            isInstock: false,
            description:"",
            productError: "",
            lastOrderedError:"",
            cityError:"",
            countryError:"",
            quantityError:""
            }
           
        
        this.handleChange = this.handleChange.bind(this)

        this.handleSubmit = (e) =>{
            e.preventDefault();
            const isValid =this.validateForm();
            if(isValid){
                console.log(this.state);
                this.setState(initialState)
            }
           
            //The post request for the form would go here
        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value })
    }

    validateForm=()=>{
        let productError ="";
        let lastOrderedError="";
        let cityError="";
        let countryError="";
        let quantityError=NaN;

        if(!this.state.product){
            productError="Please enter a product";
        }
        if(!this.state.lastOrdered){
            lastOrderedError="Please choose a date";
        }
        if(!this.state.city){
            cityError="Please enter a city";
        }
        if(!this.state.country){
            countryError="Please select a country";
        }
        if(!this.state.quantity){
            quantityError="Please enter a number";
        }

        if(productError|| lastOrderedError || cityError || countryError||quantityError){
            this.setState({productError,lastOrderedError,cityError,quantityError})
            return false;
        }
        return true

    };

    render(){

        return(

        <div className="Container">
            <div className="newBox">
                <div className="newBox__heading">
                    <h1>Create New</h1>
                </div>
                <div className="newBox__form">
                    <form name="" onSubmit={this.handleSubmit}>
                        <div className="newBox__form--element1">
                            <div className= "box">
                                <div className="box__1">
                                    <label className="box__1--L">PRODUCT</label>
                                    <input className="box__1--I" name="product" placeholder="name" type="text" onChange={this.handleChange}/>
                                    <div style={{ fontSize: 9, color: "red" }}>
                                        {this.state.productError}
                                    </div>
                                </div>
                                <div className="box__2">
                                    <label className="box__2--L">LAST ORDERED</label>
                                    <input className="box__2--I" name="lastOrdered" type="date" placeholder="yyyy-mm-dd" onChange={this.handleChange}/>
                                    <div style={{ fontSize: 9, color: "red" }}>
                                        {this.state.lastOrderedError}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newBox__form--element2">
                            <div className="box">
                                <div className="box__1">
                                    <label className="box__1--L">CITY</label>
                                    <input className="box__1--I" name="city" placeholder="City" type="text" onChange={this.handleChange}/>
                                    <div style={{ fontSize: 9, color: "red" }}>
                                        {this.state.cityError}
                                    </div>
                                </div>
                                <div className="box__2">
                                    <label className="box__2--L">COUNTRY</label>
                                    <select className="box__2--I" name="country" placeholder="Canada" class="form-control" onChange={this.handleChange}>
                                        <option value="Ontario">Ontario</option>
                                        <option value="Canada">Canada</option>
                                        <option value="United States of America">United States of America</option>
                                    </select>
                                    <div style={{ fontSize: 9, color: "red" }}>
                                        {this.state.countryError}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="newBox__form--element3">
                            <div className="box">
                                <div className="box__1">
                                    <label className="box__1--L">QUANTITY</label>
                                    <input className="box__1--I" name="quantity" placeholder="0" type="number" onChange={this.handleChange}/>
                                    <div style={{ fontSize: 9, color: "red" }}>
                                        {this.state.quantityError}
                                    </div>
                                </div>
                                <div className="box__2">
                                    <label  className="box__2--L">STATUS</label>
                                    {/* Implment modal switch here */}
                                    {/* <input className="box__2--I" name ="isInstock" type="checkbox" className="switch" onChange={this.handleChange}/> */}
                                    <Switch name ="isInstock" className="react-switch"
                                    onChange={this.handleChange}
                                    isInstock={this.state.isInstock}/>
                                </div>
                            </div>
                        </div>
                        <div className="newBox__form--element4">
                            <div className="box__1">
                            <label className="box__1--L">ITEM DESCRIPTION</label>
                            <textarea className="box__1--I" name="description" placeholder="(Optional)" cols="60" rows="5" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="newBox__form--buttons">
                            <div className="box">
                                <div className="box__1">
                                    {/* <button onClose={this.showModal}>CANCEL</button> */}
                                    <button type="submit">SAVE</button>
                                </div>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )

    }
}