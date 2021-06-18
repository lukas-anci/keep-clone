import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppNoteList from './components/appNoteList/appNoteList';
import AppAddNote from './components/appAddNote/appAddNote';
import './App.css';
class App extends Component {
  state = {
    notes: [],
    id: 1,
  };

  handleNewNote = (newNote) => {
    console.log('adding new note');
    const newNoteObj = this.createNewNote(newNote);
    console.log(newNoteObj);

    const notesCopy = [...this.state.notes, newNoteObj];

    this.setState({ notes: notesCopy, id: this.state.id + 1 });
    console.log(this.state.notes);
  };
  createNewNote(newNote) {
    return { _id: this.state.id, ...newNote, isPinned: false };
  }
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList onNew={this.state.notes} />
      </div>
    );
  }
}

export default App;
