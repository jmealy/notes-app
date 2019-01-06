import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noteText: props.noteText
    }

    this.onTextChange = this.onTextChange.bind(this);
  }

  componentWillReceiveProps(nextProps, prevState) {
    if (prevState.noteText !== nextProps.noteText) {
      this.setState({ noteText: nextProps.noteText });
    }
  }

  onTextChange(event) {
    this.setState({ noteText: event.target.value });
    this.props.onNoteChange(event.target.value);
  }

  render() {
    const { isEnabled } = this.props;
    if (isEnabled) {
      return (
        <textarea className="Editor" value={ this.state.noteText } onChange={ this.onTextChange }></textarea>
      );
    }
    return '';
  }
}

export default Editor;