import React, { Component } from 'react';
import MyLink from '../common/myLink/myLink';
class AppAside extends Component {
  state = {};
  render() {
    return (
      <aside className="aside">
        <h2>this is aside</h2>
        <div>
          <MyLink active icon="home" to="/">
            Home
          </MyLink>
          <MyLink icon="bell" to="/reminders">
            Reminders
          </MyLink>
          <MyLink icon="plane" to="/">
            Archive
          </MyLink>
          <MyLink icon="trash" to="/">
            Trash
          </MyLink>
        </div>
      </aside>
    );
  }
}

export default AppAside;
