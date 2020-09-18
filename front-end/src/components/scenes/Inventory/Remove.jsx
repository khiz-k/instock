import React, { Component } from "react";
import kebab from "./atoms/Icon-kebab-default.svg";
import axios from "axios";

export default class RemoveButton extends Component {
  state = {
    open: false,
  };

  open = this.open.bind(this);
  collapse = this.collapse.bind(this);

  open(event) {
    event.preventDefault();
    this.setState({ open: true }, () => {
      document.addEventListener("click", this.collapse);
    });
  }

  collapse() {
    this.setState({ open: false }, () => {
      document.removeEventListener("click", this.collapse);
    });
  }

  render() {
    return (
      <div className="table-row__remove">
        <div className="table-row__remove--dropdown-handle">
          <input
            onClick={this.open}
            className="table-row__remove-button"
            alt="kebab"
            type="image"
            src={kebab}
          />
          <div className="table-row__remove--dropdown-content">
            {this.state.open ? (
              <div
                className="table-row__remove--dropdown-content__options"
                onClick={(event) => {
                  delHandler(this.props.itemID);
                }}
                href="#"
              >
                {" "}
                <p>Remove</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export function delHandler(itemId) {
  console.log(itemId, "clicked");

  axios
    .delete(`http://localhost:8080/inventory/${itemId}`)

    .then((response) => {
      console.log("item deleted");
    })
    .catch((error) => {
      console.log(error);
    });

  window.location.reload(false);

  return;
}
