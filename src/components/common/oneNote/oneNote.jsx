import React, { Component } from 'react';
class OneNote extends Component {
  state = {};
  render() {
    console.log('oneNoteprops', this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default OneNote;
