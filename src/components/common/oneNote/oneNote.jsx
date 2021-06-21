import React, { Component } from 'react';
import './style.css';
import Card from './../card/card';
class OneNote extends Component {
  state = {};
  render() {
    console.log('oneNoteprops', this.props);
    return (
      <Card>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </Card>
    );
  }
}

export default OneNote;
