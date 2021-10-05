import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modalRoot");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackDrop = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Modal_backdrop" onClick={this.handleBackDrop}>
        <div className="Modal_content">{this.props.children}</div>, modalRoot
      </div>
    );
  }
}
