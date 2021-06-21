import React, { Component } from 'react';
import OneNote from './../common/oneNote/oneNote';
import './style.css';
class AppNoteList extends Component {
  state = {};
  render() {
    return (
      <div className="app-note">
        {this.props.onNew.map((n) => (
          <OneNote key={n._id} title={n.title} body={n.body} />
        ))}
      </div>
    );
  }
}

export default AppNoteList;
