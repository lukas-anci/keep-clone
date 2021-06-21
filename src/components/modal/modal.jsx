import React, { Component } from 'react';
import Card from './../common/card/card';
import './style.css';
class Modal extends Component {
  handleCardClick = (event) => {
    // card wont be clicked if pressed
    event.stopPropagation();
  };

  render() {
    return (
      <div onClick={this.props.onToggleModal} className="main-modal">
        <div onClick={this.handleCardClick} className="modal-card">
          <h3>Modal title</h3>
          <p>Modal body</p>
        </div>
      </div>
    );
  }
}

export default Modal;
