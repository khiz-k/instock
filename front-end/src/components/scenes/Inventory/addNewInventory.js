import React from 'react';
import "../../../styles/components/_newInventoryform.scss"
import Modal from 'react-modal';

const NewInventory = () => {
    return(
        <div className="Container">
            <div className="newBox">
                <div className="newBox__heading">
                    <h1>Create New</h1>
                </div>
                <div className="newBox__form">
                    <form>
                        <div className="newBox__form--element1">
                            <label>PRODUCT</label>
                            <input name="product" placeholder="name" type="text"></input>
                            <label>LAST ORDERED</label>
                            <input name="lastOrdered" type="date" placeholder="yyyy-mm-dd"></input>
                        </div>
                        <div className="newBox__form--element2">
                            <label>CITY</label>
                            <input name="city" placeholder="City" type="text"></input>
                            <label>COUNTRY</label>
                            <select name="country" placeholder="Canada" class="form-control">
                                <option value="Ontario">Ontario</option>
                                <option value="Canada">Canada</option>
                                <option value="United States of America">United States of America</option>
                            </select>
                        </div>
                        <div className="newBox__form--element3">
                            <label>QUANTITY</label>
                            <input name="quantity" placeholder="0" type="number"></input>
                            <label>STATUS</label>
                            <input></input>
                        </div>
                        <div className="newBox__form--element3">
                            <label>ITEM DESCRIPTION</label>
                            <textarea name="description" placeholder="(Optional)"></textarea>
                        </div>
                        <div className="newBox__form--buttons">
                            <link>CANCEL</link>
                            <button>SAVE</button>
                        </div>

                    </form>

                </div>
            </div>

        </div>
    )

}

export default NewInventory;