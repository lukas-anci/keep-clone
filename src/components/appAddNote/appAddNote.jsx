import React, { Component } from 'react';
import './style.css';
import Card from './../common/card/card';
class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onNewNote(this.state.newNote);
    this.setState({
      newNote: {
        title: '',
        body: '',
      },
    });
  };

  syncInput = (e) => {
    // console.log(e.target.name);
    this.setState({
      newNote: { ...this.state.newNote, [e.target.name]: e.target.value },
    });
  };
  render() {
    const { newNote } = this.state;
    return (
      <div className="app-add">
        <Card raised>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              className="input"
              type="text"
              name="title"
              placeholder="Title"
              value={newNote.title}
              onChange={this.syncInput}
            />

            <textarea
              value={newNote.body}
              onChange={this.syncInput}
              className="input textarea"
              name="body"
              placeholder="Take a note.."
            ></textarea>
            <button className="link-like" type="submit">
              Close
            </button>
          </form>
        </Card>
      </div>
    );
  }
}

export default AppAddNote;
