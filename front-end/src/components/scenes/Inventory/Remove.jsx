import React, { Component } from "react";
import kebab from "./atoms/Icon-kebab-default.svg";
import axios from "axios";

export default class RemoveButton extends Component {
  render() {
    return (
      <div className="table-row__remove">
        <img alt = "kebab" className="table-row__remove-button" src={kebab}
        />
      </div>
    );
  }
}
