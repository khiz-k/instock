import React, { Component } from 'react';
import "./_modal.scss";
//import "../../../../styles/components/_newInventoryform.scss"
//import Modal from 'react-modal';

export default class Modal extends Component {
    onClose = (e) =>{
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if(!this.props.show){
            return null;
        }
    return(
        <div className="modal">
            <section className="modal__main">
                {this.props.children}
                <button classname="one" onClick={this.onClose}>cancel</button>
            </section>
        </div>
     
    )

}

}

