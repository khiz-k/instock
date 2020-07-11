import React, { Component } from 'react';

export default class AddInv extends Component {
    constructor(){
        super()
        this.state ={
            product: '',
            lastOrdered:'',
            city:'',
            country:'',
            quantity:'',
            isInstock: Boolean,
            description:''
        }
        this.handleChange = this.handleChange.bind(this)

        this.handleSubmit = (e) =>{
            e.preventDefault();
            //The post request for the form would go here

        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value });
    }

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
                            <label>PRODUCT</label>
                            <input name="product" placeholder="name" type="text" onChange={this.handleChange}/>
                            <label>LAST ORDERED</label>
                            <input name="lastOrdered" type="date" placeholder="yyyy-mm-dd" onChange={this.handleChange}/>
                        </div>
                        <div className="newBox__form--element2">
                            <label>CITY</label>
                            <input name="city" placeholder="City" type="text" onChange={this.handleChange}/>
                            <label>COUNTRY</label>
                            <select name="country" placeholder="Canada" class="form-control" onChange={this.handleChange}>
                                <option value="Ontario">Ontario</option>
                                <option value="Canada">Canada</option>
                                <option value="United States of America">United States of America</option>
                            </select>
                        </div>
                        <div className="newBox__form--element3">
                            <label>QUANTITY</label>
                            <input name="quantity" placeholder="0" type="number" onChange={this.handleChange}/>
                            <label>STATUS</label>
                            {/* Implment modal switch here */}
                            <input name ="isInstock" type="checkbox" className="switch" onChange={this.handleChange}/>
                        </div>
                        <div className="newBox__form--element3">
                            <label>ITEM DESCRIPTION</label>
                            <textarea name="description" placeholder="(Optional)" onChange={this.handleChange}/>
                        </div>
                        <div className="newBox__form--buttons">
                            <button>CANCEL</button>
                            <button type="submit">SAVE</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )

    }
}