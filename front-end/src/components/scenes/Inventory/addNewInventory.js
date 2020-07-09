import React, { Component } from 'react';
import "../../../styles/components/_newInventoryform.scss"
import Modal from 'react-modal';

class AddInv extends Component {

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
        this.handelChange = this.handelChange.bind(this)

        this.handleSubmit = (e) =>{
            e.preventDefault();
            // The post request for the form would go here

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
                    <form onSubmit={this.handleSubmit}>
                        <div className="newBox__form--element1">
                            <label>PRODUCT</label>
                            <input name="product" placeholder="name" type="text" onChange={this.handleChange}></input>
                            <label>LAST ORDERED</label>
                            <input name="lastOrdered" type="date" placeholder="yyyy-mm-dd" onChange={this.handleChange}></input>
                        </div>
                        <div className="newBox__form--element2">
                            <label>CITY</label>
                            <input name="city" placeholder="City" type="text" onChange={this.handleChange}></input>
                            <label>COUNTRY</label>
                            <select name="country" placeholder="Canada" class="form-control" onChange={this.handleChange}>
                                <option value="Ontario">Ontario</option>
                                <option value="Canada">Canada</option>
                                <option value="United States of America">United States of America</option>
                            </select>
                        </div>
                        <div className="newBox__form--element3">
                            <label>QUANTITY</label>
                            <input name="quantity" placeholder="0" type="number" onChange={this.handleChange}></input>
                            <label>STATUS</label>
                            {/* Implment modal switch here */}
                            <input name ="isInstock" type="checkbox" className="switch" onChange={this.handleChange}></input>
                        </div>
                        <div className="newBox__form--element3">
                            <label>ITEM DESCRIPTION</label>
                            <textarea name="description" placeholder="(Optional)" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="newBox__form--buttons">
                            <link>CANCEL</link>
                            <button type="submit">SAVE</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )

}

}

export default AddInv;