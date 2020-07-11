import React, { Component } from 'react';
//import "../../../../styles/components/_newInventoryform.scss"
//import Modal from 'react-modal';

export default class Modal extends Component {

    render(){
        if(!this.props.show){
            return null;
        }
    return(
        <div>
            {this.props.children}
        </div>
     
    )

}

}

