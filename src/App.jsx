import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppNoteList from './components/appNoteList/appNoteList';
import AppAddNote from './components/appAddNote/appAddNote';
import './App.css';
class App extends Component {
  state = {
    notes: [],
  };
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppAside />
        <AppAddNote />
        <AppNoteList />
      </div>
    );
  }
}

export default App;
