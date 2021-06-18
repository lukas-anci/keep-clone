import React, { Component } from 'react';
class AppNoteList extends Component {
  state = {};
  render() {
    console.log(this.props.onNew);
    return (
      <div className="app-note">
        <h2>app note</h2>

        <ul>
          <li>this is a title and body</li>
        </ul>
      </div>
    );
  }
}

export default AppNoteList;
