import React, { Component } from 'react';
import AppNavbar from './components/appNavbar/appNavbar';
import AppAside from './components/appAside/appAside';
import AppAddNote from './components/appAddNote/appAddNote';
import AppNoteList from './components/appNoteList/appNoteList';
import './App.css';
import Modal from './components/modal/modal';
class App extends Component {
  state = {
    notes: [],
    noteId: 1,
    showModal: false,
    selectedNote: {},
  };

  handleNewNote = (newNote) => {
    // {_id, title, body, isPinned}
    const newNoteObj = this.createNewNote(newNote);
    const notesCopy = [...this.state.notes, newNoteObj];
    this.setState({ notes: notesCopy, noteId: this.state.noteId + 1 });
  };

  createNewNote(newNote) {
    return { _id: this.state.noteId, ...newNote, isPinned: false };
  }

  handleModal = (id) => {
    if (id) {
      console.log('id gavom');
      const found = this.state.notes.find((n) => n._id === id);
      this.setState({ selectedNote: found });
    }

    console.log('modal ??? id:', id);
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="App">
        {this.state.showModal && (
          <Modal
            note={this.state.selectedNote}
            onToggleModal={this.handleModal}
          ></Modal>
        )}
        <AppNavbar />
        <AppAside />
        <AppAddNote onNewNote={this.handleNewNote} />
        <AppNoteList
          onToggleModal={this.handleModal}
          notes={this.state.notes}
        />
      </div>
    );
  }
}

export default App;
