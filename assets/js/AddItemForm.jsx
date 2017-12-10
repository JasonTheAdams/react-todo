import React, { Component } from 'react';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = this.state.text.trim();

    if ( text ) {
      this.props.onItemAdded(text);
    }

    this.setState({text: ""});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="New Item"
          type="text"
          name="item"
          onChange={this.handleChange}
          value={this.state.text} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddItemForm;
