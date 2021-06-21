import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppNoteList from './components/appNoteList/appNoteList';
import AppAddNote from './components/appAddNote/appAddNote';
import Modal from './components/modal/modal';

import './App.css';

class App extends Component {
  state = {
    notes: [],
    id: 1,
    showModal: true,
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
  handleModal = () => {
    console.log('modalb');
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && <Modal onToggleModal={this.handleModal} />}
        <AppNavbar />
        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList onNew={this.state.notes} />
      </div>
    );
  }
}

export default App;
