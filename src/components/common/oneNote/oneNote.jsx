import React, { Component } from 'react';
import './style.css';
class OneNote extends Component {
  state = {};
  render() {
    console.log('oneNoteprops', this.props);
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default OneNote;
