import React, { Component } from 'react';
class AppAside extends Component {
  state = {};
  render() {
    return (
      <aside className="aside">
        <h2>this is aside</h2>
        <myLink href="/" icon="fa fa-pencil">
          Home
        </myLink>
        <i className="fa fa-pencil"></i>
      </aside>
    );
  }
}

export default AppAside;
